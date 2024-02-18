import React from 'react'
import useDataFetching from '../../hooks/useDataFetching';
import './components/PostPage.scss'
import BlogComponent from './components/BlogComponent';
import WishComponent from './components/WishComponent';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const PostPage = ({ LoadingComponent }) => {
  const { posts, isLoading, setIsLoading } = useDataFetching('http://localhost:5001/api/post');
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const Navigate = useNavigate();

  const goToLogin = () => {
    Navigate('/auth');
  }
  return (
    isLoading === false ? <LoadingComponent isLoading={isLoading} setIsLoading={setIsLoading} /> : (
      <div className='PostPageBody'>
        {/* <Link to='/posting'>das</Link> */}
        <div className='BlogComponent'>
          <BlogComponent posts={posts} isLoggedIn={isLoggedIn} goToLogin={goToLogin} />
        </div>
        <div className='WishComponent'>
          <WishComponent wishs={posts} isLoggedIn={isLoggedIn} goToLogin={goToLogin} />
        </div>
      </div>
    )
  )
}

export default PostPage;
