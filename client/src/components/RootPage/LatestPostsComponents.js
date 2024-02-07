import React from 'react'
import './LatestsPostsComponents.scss'
const LatestPostsComponents = ({ recentPost }) => {

  return (
    <div className='RootPageBody-LatestPosts'>
      <div className='LatestPosts-Container'>
        <p>My Latest Posts</p>
        <div className='LatestPosts-Posts'>
          {/* 맵 메소드 사용부분  */}
          {
            recentPost.slice().reverse().map((post, index) => (
              <div className='Post' key={index}>
                <img src={post.fileUrl.length === 0 ? 'img/Sub1.jpeg' : post.file} alt='postImg' />
                <span className='PostDate'>{post.date}</span>
                <span className='PostTitle'>{post.title}</span>
                <span className='PostSummary'>{post.contents}</span>
              </div>
            ))
          }
        </div>
        <button className='ReadMoreBtn'>Read More</button>
      </div>
    </div>
  )
}

export default LatestPostsComponents
