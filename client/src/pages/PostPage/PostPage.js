import React from 'react'
import useDataFetching from '../../hooks/useDataFetching';
import './components/PostPage.scss'
import BlogComponent from './components/BlogComponent';
import WishComponent from './components/WishComponent';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DetailPage from './DetailPage/DetailPage';

const PostPage = ({ LoadingComponent }) => {
  const { posts, isLoading, setIsLoading } = useDataFetching('http://localhost:5001/api/post');
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isModalOpened = useSelector(state => state.modal.isOpened);
  const goToLogin = () => {
    navigate('/auth');
  }
  return (
    isLoading === false ? <LoadingComponent isLoading={isLoading} setIsLoading={setIsLoading} /> : (
      <>
        {isModalOpened && (
          <div className='modal-background'>
            <DetailPage isLoading={isLoading} setIsLoading={setIsLoading} LoadingComponent={LoadingComponent} />
          </div>
        )}
        <div className='PostPageBody'>
          <div className='BlogComponent'>
            <BlogComponent posts={posts} isLoggedIn={isLoggedIn} goToLogin={goToLogin} />
          </div>
          <div className='WishComponent'>
            <WishComponent wishs={posts} isLoggedIn={isLoggedIn} goToLogin={goToLogin} />
          </div>
        </div>
      </>
    )
  )
}

export default PostPage;
