import React from 'react'

import useDataFetching from '../../hooks/useDataFetching';

import MainImgComponent from './components/MainImgComponent'
import LatestPostComponent from './components/LatestPostComponent'
import WishlistComponent from './components/WishlistComponent';
import LanguageComponent from './components/LanguageComponent';

const RootPage = ({ LoadingComponent }) => {
  const { posts, isLoading, setIsLoading } = useDataFetching('http://localhost:5001/');

  return (
    isLoading === false ? <LoadingComponent isLoading={isLoading} setIsLoading={setIsLoading} /> : (
      <div className='RootPageBody'>
        <MainImgComponent />
        <LatestPostComponent recentPost={posts.recentPosts} />
        <WishlistComponent recentWish={posts.recentWishs} />
        <LanguageComponent />
      </div>
    )
  )
}

export default RootPage;
