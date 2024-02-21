import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import LinearProgress from '@mui/material/LinearProgress';


import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../firebase-config';

const WritePostComponent = ({ formData, handleInputChange }) => {
  const navigate = useNavigate();
  const [imageURL, setImageURL] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const onPosting = async (e) => {
    e.preventDefault();
    const { title, contents } = formData;

    try {
      if (selectedFile) {
        const storageRef = ref(storage, `PostImg/${selectedFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, selectedFile);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
          },
          (error) => {
            console.error('Error uploading image: ', error);
          },
          async () => {
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              setImageURL(downloadURL);
              await sendPostRequest(title, contents, downloadURL);
            } catch (error) {
              console.error('Error posting: ', error);
            }
          }
        );
      } else {
        await sendPostRequest(title, contents, undefined);
      }
    } catch (error) {
      console.error('Error handling submit: ', error);
    }
  };

  const sendPostRequest = async (title, contents, fileUrl) => {
    try {
      await axios.post(
        'http://localhost:5001/api/posting',
        { title, contents, fileUrl },
        { withCredentials: true }
      );
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: '게시글 등록 성공!',
      });
      navigate('/posts');
    } catch (error) {
      console.error('Error posting: ', error);
    }
  };

  const onImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => setImageURL(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      포스트
      <form onSubmit={onPosting}>
        <label htmlFor="imageUpload">이미지 업로드:</label>
        <input type="file" id="imageUpload" onChange={onImageChange} />
        <input type="text" name="title" placeholder="제목" onChange={handleInputChange} />
        <textarea name="contents" placeholder="내용" onChange={handleInputChange} />
        <button type="submit">게시글 등록</button>
      </form>
      <LinearProgress variant="determinate" value={uploadProgress} />
      {imageURL && <img src={imageURL} alt="Uploaded" style={{ maxWidth: '50%' }} />}
    </div>
  )
}

export default WritePostComponent

