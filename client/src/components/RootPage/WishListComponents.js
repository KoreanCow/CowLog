import React from 'react'
import './WishListComponents.scss'
const WishListComponents = () => {
  return (
    <div className='RootPageBody-WishList'>
      <p>My Wish List</p>
      <div className='WishList-Container'>
        <div className='WishList'>
          <img src='img/Main2.jpeg' alt='WishListImage' />
          <p>어디어디 여행!</p>
        </div>
        <div className='WishList'>
          <img src='img/Main2.jpeg' alt='WishListImage' />
          <p>어디어디 여행!</p>
        </div>
        <div className='WishList'>
          <img src='img/Main2.jpeg' alt='WishListImage' />
          <p>어디어디 여행!</p>
        </div>
        <div className='WishList'>
          <img src='img/Main2.jpeg' alt='WishListImage' />
          <p>어디어디 여행!</p>
        </div>

      </div>
      <button className='ViewMoreBtn'>View More</button>
    </div>
  )
}

export default WishListComponents
