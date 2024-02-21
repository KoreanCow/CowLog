import React from 'react';
import BlogPosts from '../../../components/BlogPosts/BlogPosts';
import BlogPostingButton from '../../../components/BlogPosts/BlogPostingButton';

const BlogComponent = ({ posts, isLoggedIn, goToLogin }) => {

  const postFindResult = posts?.postFindResult || [];

  return (
    <div className='BlogPostContainer'>
      <div className='BlogPostTitle'>
        <p>블로그 게시글</p>
        <img src='img/hamburgurIcon.svg' alt='Tags' />
      </div>
      <hr />
      <div className='BlogPosts'>
        <BlogPosts posts={postFindResult} type={'blog'} />
      </div>
      {
        isLoggedIn ? <BlogPostingButton text={'게시글 작성하러 가기'} /> :
          <button className='ToLoginBtn' onClick={goToLogin}>로그인 후 작성하러 가기</button>
      }

    </div>
  );
}

export default BlogComponent;
