import './NavBar.scss';

import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const handleGitClick = () => {
    window.open('https://github.com/koreancow', '_blank');
  }
  const handleInstaClick = () => {
    window.open('https://instagram.com/koreanc0w', '_blank');
  }
  return (
    <div className='NavigationBar'>
      <p>COWLOG</p>
      <div className='NavigationBar-Actions'>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Blog</Link>
        <Link to='/about'>About</Link>
        <Link to='/auth'>Sign In/Up</Link>
      </div>
      <div className='NavigationBar-Link'>
        <img src='/img/instagram.svg' alt='Instagram Logo' onClick={handleInstaClick} />
        <img src='/img/github.svg' alt='GitHub Logo' onClick={handleGitClick} />
      </div>
    </div>
  )
}

export default NavBar
