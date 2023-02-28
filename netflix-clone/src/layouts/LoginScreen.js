import React, { useState } from 'react'
import '../assets/styles/LoginScreen.css'
import logo from '../assets/images/netflix-logo.png'
import back from '../assets/images/back.jpg'
import SingInScreen from './SingInScreen'

function LoginScreen() {

    const [singIn, setSingIn] = useState(false)

    return (
        <div className='loginScreen'>
            <img className='background__img' alt="" src={back} />

            <div className="background">
                <img className='loginScreen__logo' src={logo} alt="logo" />
                <button onClick={() => setSingIn(true)}
                    className='loginScreen__button'>Sing in</button>
                <div className='loginScreen__gradient' />
            </div>
            <div className='loginScreen__body'>
                {singIn ? (
                    <SingInScreen />
                ) : (
                <>
                <h1>Unlimited film, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to
                    create or restart your membership.
                </h3>
                <div className='loginScreen__input'>
                    <form>
                        <input type="email" placeholder='Email Address'></input>
                        <button onClick={() => setSingIn(true) } 
                        className='loginScreen_inputButton'>GET STARTED</button>
                    </form>
                </div>
                </>
                )}

            </div>
        </div>
    )
}

export default LoginScreen