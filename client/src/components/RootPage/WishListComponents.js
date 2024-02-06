import React from 'react'
import './WishListComponents.scss'
const WishListComponents = ({ recentWish }) => {
  return (
    <div className='RootPageBody-WishList'>
      <p>My Wish List</p>
      <div className='WishList-Container'>
        {
          recentWish.map((wish, index) => (
            <div className='WishList' key={index}>
              <img src={wish.fileUrl == null ? 'img/Main2.jpeg' : wish.fileUrl} alt='WishListImg' />
              <p>{wish.title}</p>
            </div>
          ))
        }
      </div>
      <button className='ViewMoreBtn'>View More</button>
    </div>
  )
}

export default WishListComponents
