import React from 'react'
import '../assets/styles/SingInScreen.css'

function SingInScreen() {
  return (
    <div className='singInScreen'>
        <form>
            <h1>Sing In</h1>
            <input placeholder='Email' type='email'/>
            <input placeholder='Password' type='password'/>
            <button type='submit'>Sing In</button>
        
            <h4>
                <span className='singInScreen__gray'>New to Netflix?</span> Sing Up Now.</h4>
        </form>
    </div>
  )
}

export default SingInScreen