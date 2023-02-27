import React from 'react'
import '../assets/styles/LoginScreen.css'
import logo from '../assets/images/netflix-logo.png'
import back from '../assets/images/back.jpg'

function LoginScreen() {
  return (
    <div className='loginScreen'>
        <img className='background__img' alt="" src={back} />

      <div className="background">
        <img className='loginScreen__logo' src={logo} alt="logo" />
        <button className='loginScreen__button'>Sing in</button>
        <div className='loginScreen__gradient'/>
      </div>
    </div>
  )
}

export default LoginScreen