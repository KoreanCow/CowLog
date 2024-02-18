import React from 'react'
import BlogPostingButton from '../../../components/BlogPosts/BlogPostingButton'
const WishComponent = ({ wishs, isLoggedIn, goToLogin }) => {

  return (
    <div className='BlogPostContainer'>
      <div className='BlogPostTitle'>
        <p>위시 리스트</p>
      </div>
      <hr />
      <div className='BlogPosts'>
        {wishs.wishFindResult.map((wish, index) => (
          <div className='BlogPost' key={index}>
            <img src={wish.fileUrl === null ? 'img/Sub2.jpeg' : wish.file} alt='postImg' />
            <span className='BlogPostTitle'>{wish.title}</span>
            <span className='BlogPostSummary'>{wish.contents}</span>
          </div>
        ))}
      </div>
      {
        isLoggedIn ? <BlogPostingButton text={'위시 리스트 작성하러 가기'} /> :
          <button className='ToLoginBtn' onClick={goToLogin}>로그인 후 작성하러 가기</button>
      }
    </div>
  )
}

export default WishComponent
