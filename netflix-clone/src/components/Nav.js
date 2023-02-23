import React from 'react'
import '../assets/styles/Nav.css'
import logo from '../assets/images/netflix-logo.png'
import avatar from '../assets/images/avatar-logo.jpg'

function Nav() {
  return (
    <div className='nav'>
        <img className='nav_logo' src={logo} alt="logo"/>
        <img className='nav_icon' src={avatar} alt="avatar"/>
    </div>
  )
}

export default Nav