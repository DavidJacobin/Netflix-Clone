import React from 'react'
import '../assets/styles/SingInScreen.css'

function SingInScreen() {

    const register = (e) => {
        e.preventDefault()
    }

    const singIn = (e) => {
        e.preventDefault()
    }

    return (
        <div className='singInScreen'>
            <form>
                <h1>Sing In</h1>
                <input placeholder='Email' type='email' />
                <input placeholder='Password' type='password' />
                <button type='submit' onClick={singIn}>Sing In</button>

                <h4>
                    <span className='singInScreen__gray'>New to Netflix? </span>
                    <span className='singInScreen__link' onClick={register}>Sing Up Now.</span> </h4>
            </form>
        </div>
    )
}

export default SingInScreen