import React from 'react'
import './WishlistComponent.scss'
import { Link } from 'react-router-dom';
const WishListComponent = ({ recentWish }) => {
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
      <Link to='/posts'>
        <button className='ViewMoreBtn'>View More</button>
      </Link>
    </div>
  )
}

export default WishListComponent;
