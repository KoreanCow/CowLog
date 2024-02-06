import React, { useEffect, useState } from 'react'
import axios from 'axios';

import MainImgComponents from '../components/RootPage/MainImgComponents'
import LatestPostsComponents from '../components/RootPage/LatestPostsComponents'
import WishListComponents from '../components/RootPage/WishListComponents';
import LanguageComponents from '../components/RootPage/LanguageComponents';
import LoadingPage from './LoadingPage';
const RootPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getDatas = async () => {
      try {
        const response = await axios.get('http://localhost:5001/');
        console.log(response);
        setPosts(response.data);
        setTimeout(() => {
          setIsLoading(response.data.length === 0 ? false : true);
        }, 1500);
      } catch (err) {
        console.error('서버 연결을 실패했습니다. error data :', err);
        setTimeout(getDatas, 4000);
      }
    }

    getDatas()
  }, [])

  return (
    isLoading === false ? <LoadingPage isLoading={isLoading} setIsLoading={setIsLoading} /> : (
      <div className='RootPageBody'>
        <MainImgComponents />
        <LatestPostsComponents recentPost={posts.recentPosts} />
        <WishListComponents recentWish={posts.recentWishs} />
        <LanguageComponents />
      </div>
    ))
}

export default RootPage
