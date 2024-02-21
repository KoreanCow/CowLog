import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase-config';
import LinearProgress from '@mui/material/LinearProgress';

const FirebaseTest = () => {
  const [imageURL, setImageURL] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const onImageChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (!file) return null;

    try {
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // 업로드 이벤트 리스너 추가
      uploadTask.on('state_changed',
        (snapshot) => {
          // 업로드 진행률 갱신
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error('Error uploading image: ', error);
        },
        () => {
          // 업로드 완료 후 처리
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageURL(downloadURL);
            console.log(downloadURL);
          });
        }
      );

      e.target.value = '';
    } catch (error) {
      console.error('Error uploading image: ', error);
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="imageUpload">이미지 업로드:</label>
        <input type="file" id="imageUpload" onChange={onImageChange} />
        <LinearProgress variant="determinate" value={uploadProgress} />
        {imageURL && <img src={imageURL} alt="Uploaded" style={{ maxWidth: '100%' }} />}
      </form>
    </div>
  );
};

export default FirebaseTest;
