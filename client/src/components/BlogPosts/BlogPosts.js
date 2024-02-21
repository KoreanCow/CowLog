import React from 'react';
import { useDispatch } from 'react-redux';
import { openmodal } from '../../redux/actions/modalActions';

const BlogPosts = ({ posts, type }) => {
  const dispatch = useDispatch();
  const handleClickPost = (postId) => {
    console.log(postId);
    dispatch(openmodal(postId));
  }
  if (type === 'latest') {
    return (
      <>
        {posts.map((post, index) => (
          <div className='Post' id={post._id} key={index} onClick={() => handleClickPost(post._id)}>
            <img src={post.fileUrl.length === 0 ? 'img/Sub1.jpeg' : post.fileUrl[0]} alt='postImg' />
            <span className='PostDate'>{post.date}</span>
            <span className='PostTitle'>{post.title}</span>
            <span className='PostSummary'>{post.contents}</span>
          </div>
        ))}
      </>
    );
  } else if (type === 'blog') {
    return (
      <>
        {posts.map((post, index) => (
          <div className='BlogPost' id={post._id} key={index} onClick={() => handleClickPost(post._id)}>
            <img src={post.fileUrl.length === 0 ? 'img/Sub1.jpeg' : post.fileUrl[0]} alt='postImg' />
            <span className='BlogPostDate'>{post.date}</span>
            <span className='BlogPostTitle'>{post.title}</span>
            <span className='BlogPostSummary'>{post.contents}</span>
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        {posts.map((wish, index) => (
          <div className='BlogPost' id={wish._id} key={index} onClick={() => handleClickPost(wish._id)}>
            <img src={wish.fileUrl.length === 0 ? 'img/Sub1.jpeg' : wish.fileUrl} alt='postImg' />
            <span className='BlogPostDate'>{wish.date}</span>
            <span className='BlogPostTitle'>{wish.title}</span>
            <span className='BlogPostSummary'>{wish.contents}</span>
          </div>
        ))}
      </>
    )
  }
}

export default BlogPosts;
