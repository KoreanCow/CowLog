import React from 'react'
import './RootPage.scss';

import MainImgComponents from '../components/RootPage/MainImgComponents'
import LatestPostsComponents from '../components/RootPage/LatestPostsComponents'
import WishListComponents from '../components/RootPage/WishListComponents';
import LanguageComponents from '../components/RootPage/LanguageComponents';

const RootPage = () => {
  return (
    <div className='RootPageBody'>
      <MainImgComponents />
      <LatestPostsComponents />
      <WishListComponents />
      <LanguageComponents />
    </div>
  )
}

export default RootPage
