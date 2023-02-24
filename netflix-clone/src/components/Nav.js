import React, { useEffect, useState } from 'react'
import '../assets/styles/Nav.css'
import logo from '../assets/images/netflix-logo.png'
import avatar from '../assets/images/avatar-logo.jpg'

function Nav() {
    const [show, handelShow] = useState(false);

    const transitionNavbar = () => {
        if(window.scrollY > 100){
            handelShow(true)
        }else{
            handelShow(false)
        };  
    };

    useEffect(() =>{
        window.addEventListener('scroll', transitionNavbar);
        return () => window.removeEventListener('scroll', transitionNavbar);
    },[]);



    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__container">
                <img className='nav__logo' src={logo} alt="logo" />
                <img className='nav__icon' src={avatar} alt="avatar" />
            </div>
        </div>
    )
}

export default Nav;