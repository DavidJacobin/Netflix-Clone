import React from 'react'
import '../assets/styles/Nav.css'
import logo from '../assets/images/netflix-logo.png'
import avatar from '../assets/images/avatar-logo.jpg'

function Nav() {
  return (
    <div className='nav nav__black'>
        <div className="nav__container">
            <img className='nav__logo' src={logo} alt="logo"/>
            <img className='nav__icon' src={avatar} alt="avatar"/>
        </div>
    </div>
  )
}

export default Nav