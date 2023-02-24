import React from 'react'
import '../assets/styles/HomeScreen.css'
import Banner from '../components/Banner'
import Nav from '../components/Nav'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>
        
        <Banner/>

    </div>
  )
}

export default HomeScreen