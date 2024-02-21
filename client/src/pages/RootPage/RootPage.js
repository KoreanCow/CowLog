import React from 'react'

import useDataFetching from '../../hooks/useDataFetching';

import MainImgComponent from './components/MainImgComponent'
import LatestPostComponent from './components/LatestPostComponent'
import WishlistComponent from './components/WishlistComponent';
import LanguageComponent from './components/LanguageComponent';
import DetailPage from '../PostPage/DetailPage/DetailPage';
import { useSelector } from 'react-redux';


const RootPage = ({ LoadingComponent }) => {
  const { posts, isLoading, setIsLoading } = useDataFetching('http://localhost:5001/');
  const isModalOpened = useSelector(state => state.modal.isOpened);

  return (
    isLoading === false ? <LoadingComponent isLoading={isLoading} setIsLoading={setIsLoading} /> : (
      <>
        {isModalOpened && (
          <div className='modal-background'>
            <DetailPage isLoading={isLoading} setIsLoading={setIsLoading} LoadingComponent={LoadingComponent} />
          </div>
        )}
        <div className='RootPageBody'>
          <MainImgComponent mainImgs={posts.mainImgs} />
          <LatestPostComponent recentPost={posts.recentPosts} />
          <WishlistComponent recentWish={posts.recentWishs} />
          <LanguageComponent />
        </div>
      </>
    )
  )
}

export default RootPage;
