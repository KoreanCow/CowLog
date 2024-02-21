import React from 'react'
import BlogPostingButton from '../../../components/BlogPosts/BlogPostingButton'
import BlogPosts from '../../../components/BlogPosts/BlogPosts'
const WishComponent = ({ wishs, isLoggedIn, goToLogin }) => {

  const wishFindResult = wishs?.wishFindResult || [];
  return (
    <div className='BlogPostContainer'>
      <div className='BlogPostTitle'>
        <p>위시 리스트</p>
      </div>
      <hr />
      <div className='BlogPosts'>
        <BlogPosts posts={wishFindResult} type={'wish'} />
      </div>
      {
        isLoggedIn ? <BlogPostingButton text={'위시 리스트 작성하러 가기'} /> :
          <button className='ToLoginBtn' onClick={goToLogin}>로그인 후 작성하러 가기</button>
      }
    </div>
  )
}

export default WishComponent
