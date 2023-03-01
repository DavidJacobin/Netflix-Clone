import React, { useRef } from 'react'
import '../assets/styles/SingInScreen.css'
import { auth } from '../firebase.js';

function SingInScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(() =>{

        }).catch((error) => {alert(error.message)});

    }

    const singIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(() =>{

        }).catch((error) => {alert(error.message)});
    }

    return (
        <div className='singInScreen'>
            <form>
                <h1>Sing In</h1>
                <input ref={emailRef} placeholder='Email' type='email' />
                <input ref={passwordRef} placeholder='Password' type='password' />
                <button type='submit' onClick={singIn}>Sing In</button>

                <h4>
                    <span className='singInScreen__gray'>New to Netflix? </span>
                    <span className='singInScreen__link' onClick={register}>Sing Up Now.</span> </h4>
            </form>
        </div>
    )
}

export default SingInScreen