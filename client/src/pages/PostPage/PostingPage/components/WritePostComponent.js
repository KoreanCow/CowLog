import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const WritePostComponent = ({ formData, handleInputChange }) => {
  const navigate = useNavigate();

  const Posting = async (e) => {
    e.preventDefault();
    const { title, contents, fileUrl } = formData;
    try {
      await axios.post(
        'http://localhost:5001/api/posting',
        { title, contents, fileUrl },
        { withCredentials: true })
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: '게시글 등록 성공!',
      })
      navigate('/posts')
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div>
      포스트
      <form onSubmit={Posting}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="제목"
        />
        <textarea
          name="contents"
          value={formData.contents}
          onChange={handleInputChange}
          placeholder="내용"
        />
        <button type="submit">작성하기</button>
      </form>
    </div>
  )
}

export default WritePostComponent
