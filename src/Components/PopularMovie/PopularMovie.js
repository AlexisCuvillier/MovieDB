import React, { useEffect, useState } from 'react'
import CardPopular from './CardPopular';

export default function PopularMovie() {
    const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=d4dfced817985d414b727774821c9678&language=fr"
    const [movies, setMovies] = useState([]);
    const exemple = ["One", "Two", "Three", "four", "five"]

    useEffect(() => {
            fetch(API_URL)
                    .then((res)=>res.json())
                    .then(data =>{
                        console.log(data);
                        setMovies(data.results);
                    })
    }, [])

  return (
    <div>
       {movies.map(movieReq=>(
        <CardPopular key={movieReq.id} {...movieReq}/>
       ))} 
    </div>

  )
}
