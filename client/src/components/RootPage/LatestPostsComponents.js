import React from 'react'
import './LatestsPostsComponents.scss'
const dummy = [{
  'id': 1,
  'date': '2023.08.27',
  'title': 'dummy data 1',
  'summary': 'dummy data summary 1',
  'src': 'img/Sub1.jpeg'
},
{
  'id': 2,
  'date': '2023.08.25',
  'title': 'dummy data 2',
  'summary': 'dummy data summary 2',
  'src': 'img/Sub2.jpeg'
},
{
  'id': 3,
  'date': '2023.08.29',
  'title': 'dummy data 3',
  'summary': 'dummy data summary 3',
  'src': 'img/Sub3.jpeg'
}]

const LatestPostsComponents = () => {

  return (
    <div className='RootPageBody-LatestPosts'>
      <div className='LatestPosts-Container'>
        <p>My Latest Posts</p>
        <div className='LatestPosts-Posts'>
          {/* 맵 메소드 사용부분  */}
          {
            dummy.map((data) => (
              <div className='Post' key={data.id}>
                <img src={data.src} alt='Post Img' />
                <span className='PostDate'>{data.date}</span>
                <span className='PostTitle'>{data.title}</span>
                <span className='PostSummary'>{data.summary}</span>
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
