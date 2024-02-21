import './NavBar.scss';
import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleGitClick = () => {
    window.open('https://github.com/koreancow', '_blank');
  }
  const handleInstaClick = () => {
    window.open('https://instagram.com/koreanc0w', '_blank');
  }
  return (
    <div className='NavigationBar'>
      <p>COWLOG Mk.1</p>
      <div className='NavigationBar-Actions'>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Blog</Link>
        <Link to='/about'>About</Link>
        {
          !isLoggedIn ? <Link to='/auth'>Sign In/Up</Link> : <Link to='/mypage'>MyPage</Link>
        }
      </div>
      <div className='NavigationBar-Link'>
        <img src='/img/instagram.svg' alt='Instagram Logo' onClick={handleInstaClick} />
        <img src='/img/github.svg' alt='GitHub Logo' onClick={handleGitClick} />
      </div>
    </div>
  )
}

export default NavBar
