import React from 'react'
import './LatestPostComponent.scss'
import { Link } from 'react-router-dom'
import BlogPosts from '../../../components/BlogPosts/BlogPosts'
const LatestPostsComponent = ({ recentPost }) => {

  return (
    <div className='RootPageBody-LatestPosts'>
      <div className='LatestPosts-Container'>
        <p>My Latest Posts</p>
        <div className='LatestPosts-Posts'>
          <BlogPosts posts={recentPost} type={'latest'} />
        </div>
        <Link to='/posts'>
          <button className='ReadMoreBtn'>
            Read More
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LatestPostsComponent;
