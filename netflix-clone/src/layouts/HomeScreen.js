import React from 'react'
import '../assets/styles/HomeScreen.css'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import requests from '../middlewares/Request'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>
        
        <Banner/>

        <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
        <Row title="Netflix Original" fetchURL={requests.fetchNetflixOriginals}/>
        <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>

    </div>
  )
}

export default HomeScreen