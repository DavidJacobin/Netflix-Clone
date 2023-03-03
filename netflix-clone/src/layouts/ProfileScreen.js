import React from 'react'
import '../assets/styles/ProfileScreen.css'
import Nav from '../components/Nav'
import avatar from '../assets/images/avatar-logo.jpg'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

const ProfileScreen = () => {

    const user = useSelector(selectUser)

  return (
    <div className='profileScreen'>
        <Nav/>
        <div className='profileScreenBody'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
                <img className='nav__icon' src={avatar} alt="avatar"></img>
                <div className='profileScreen__details'>
                    <h2></h2>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ProfileScreen