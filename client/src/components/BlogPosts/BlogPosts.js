import React from 'react';

const BlogPosts = ({ posts, isLatest }) => {
  // isLatest prop이 전달되지 않았거나 true일 때 최신 게시물을 렌더링
  if (isLatest === undefined || isLatest) {
    return (
      <>
        {posts.map((post, index) => (
          <div className='Post' key={index}>
            <img src={post.fileUrl.length === 0 ? 'img/Sub1.jpeg' : post.fileUrl} alt='postImg' />
            <span className='PostDate'>{post.date}</span>
            <span className='PostTitle'>{post.title}</span>
            <span className='PostSummary'>{post.contents}</span>
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        {posts.map((post, index) => (
          <div className='BlogPost' key={index}>
            <img src={post.fileUrl.length === 0 ? 'img/Sub2.jpeg' : post.file} alt='postImg' />
            <span className='BlogPostDate'>{post.date}</span>
            <span className='BlogPostTitle'>{post.title}</span>
            <span className='BlogPostSummary'>{post.contents}</span>
          </div>
        ))}
      </>
    );
  }
}

export default BlogPosts;
