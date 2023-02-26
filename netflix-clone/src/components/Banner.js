import axios from '../util/axios.js';
import React, { useEffect, useState } from 'react'
import '../assets/styles/Banner.css'
import requests from '../middlewares/Request.js';

function Banner() {
    
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData () {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request
        };
        fetchData()
    },[]);

    console.log(movie);


    function truncate(string, n){
        return string?.length > n ? string.substr(0, n - 1) + '...' : string
    }

  return (
    <header className='banner' style={
        {
            backgroundSize: 'cover',
            backgroundImage: `url('https://image.tmbd.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: 'center center',
            }}
        >
            <div className='banner__content'>
                <h1 className='banner__title'>Movie Name</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner__description'>{ truncate(`Lorem Ipsum is simply dummy 
                text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book. It has survived not only five 
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
                 Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                 including versions of Lorem Ipsum`, 150)}
                 </h1>
            </div>
            
            <div className='banner--fadeBottom'/>

    </header>
  )
}

export default Banner