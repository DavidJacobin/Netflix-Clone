import React, { useEffect, useState } from 'react'
import "../assets/styles/Row.css"
import axios from '../util/axios.js';

const baseUrl = 'http://image.tmdb.org/t/p/original'

function Row({title, fetchURL}) {

    const [movies, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovie(request.data.results);
            return request
        };
        fetchData();
    }, [fetchURL])
    console.log(movies);
  return (
    <div className='row'>
        <h2>{title}</h2>
        {movies.map((movie) =>(
            <img 
                src={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`} 
                alt={movie.name}
            />)
            )}
    </div>
  )
}

export default Row