import axios from 'axios';
import React from 'react'
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { WishSelect, WishDeselect } from '../../redux/actions/wishControlActions'

const BlogPostingButton = ({ text }) => {
  const naviagate = useNavigate();
  const dispatch = useDispatch();

  const roleCheck = async (e) => {
    e.preventDefault();
    try {
      const fetchToken = await axios.get('http://localhost:5001/api/posting', { withCredentials: true }); // 쿠키 포함
      console.log(fetchToken.data);
      if (text === '위시 리스트 작성하러 가기') {
        await dispatch(WishSelect());
      } else {
        await dispatch(WishDeselect());
      }
      naviagate('/posting')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '앗..',
        text: '권한이 없습니다.',
      })
      console.error(error);
    }
  };

  return (
    <button className='PositngBtn' onClick={roleCheck}>{text}</button>
  )
}

export default BlogPostingButton
