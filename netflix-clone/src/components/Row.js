import React, { useEffect, useState } from 'react'
import "../assets/styles/Row.css"
import axios from '../util/axios.js';

const baseUrl = 'http://image.tmdb.org/t/p/original'

function Row({ title, fetchURL }) {

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
            <h2 className='title'>{title}</h2>
            <div className='row__posters'>
                {movies.map((movie) => (
                    <img className='row__poster' key={movie.id}
                        src={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.name}
                    />)
                )}
            </div>
        </div>
    )
}

export default Row