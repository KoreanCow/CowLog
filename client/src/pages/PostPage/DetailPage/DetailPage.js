import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closemodal } from '../../../redux/actions/modalActions';
import axios from 'axios';
import './DetailPage.scss'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const DetailPage = () => {
  const [post, setPost] = useState(null);
  const isOpened = useSelector(state => state.modal.isOpened);
  const postId = useSelector(state => state.modal.postId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(postId);
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/post/modal?postId=${postId}`);
        setPost(response.data);
      } catch (e) {
        console.error(e)
      }
    }
    fetchData();
  }, [isOpened, postId])
  const handleCloseModal = () => {
    dispatch(closemodal());
  };
  const onRemoveButton = async (e) => {
    e.preventDefault();
    try {
      const result = await Swal.fire({
        title: "게시글을 정말 지우시겠습니까?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "지우기",
        cancelButtonText: "취소",
      });
      if (result.isConfirmed) {
        const response = await axios.delete(`http://localhost:5001/api/posting/delete/${postId}`,
          { withCredentials: true });
        console.log('데이터 삭제 성공: ', response.data)
        Swal.fire({
          icon: 'success',
          title: '삭제 성공!',
        })
        navigate('/')
        dispatch(closemodal());
      }
    } catch (error) {
      console.error("Swal 오류:", error);
    }
  }
  return (
    <>
      {isOpened && post && (
        <>
          <div className="modal-background" onClick={handleCloseModal}></div>
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>close</span>
              <h2>{post.data.title}</h2>
              <button onClick={onRemoveButton}>게시글 삭제</button>
              <p>{post.creatorname}</p>
              {post.data.fileUrl && post.data.fileUrl.length > 0 && (
                <img src={post.data.fileUrl} alt='' />
              )}
              <p>{post.data.contents}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailPage;
