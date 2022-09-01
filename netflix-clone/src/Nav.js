import React from 'react'
import './Nav.css'
import netflixim from './netflixim.jpg'
import smile from './smile.png'
function Nav() {
  return (
    <div className='nav'>
      <img 
      className='nav_logo'
      src={netflixim}
      alt='Netflix Logo'
      >
      </img>
      <img 
      className='nav_avatar'
      src={smile}
      alt='Netflix Logo'
      >
      </img>
    </div>
  )
}

export default Nav
