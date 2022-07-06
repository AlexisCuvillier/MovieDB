import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import './PopularMovie.css'

export default function PopularMovie() {

  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=d4dfced817985d414b727774821c9678&language=fr-FR";
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  const PER_PAGE = 5
  const [currentPage, setCurrentPage] = useState(0)
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
        
      });
  }, []);

  const offset = currentPage * PER_PAGE; 
  console.log("offset", offset );

  const currentPageMovie = movies
    .slice(offset, offset + PER_PAGE)
    
    console.log("currentPageMovie", currentPageMovie);

    const pageCount = Math.ceil(movies.length / PER_PAGE)

    if(currentPageMovie.release_date){
        
    }
    
    const optionDate = {year: 'numeric', month: 'long', day: 'numeric'}
    const convertDateFormat = new Date().toLocaleDateString("fr-FR", optionDate);

  
  return (
    <div className="container-movie">

     
      {currentPageMovie.map((item) => (
        <div className="bloc-card">
          <div className="project-card">
            <div className="visual-aspect">
              <a href={item.release_date}>
                <img
                  className="img-movie"
                  src={API_IMG + item.poster_path}
                  alt=""
                />
              </a>
            </div>
            <div className="info">
              <p>{item.title}</p>
              <p>{item.release_date}</p>
              <img src="" alt="" />
            </div>
          </div>
          <div className="back-card"></div>
        </div>
      ))}
    </div>
  );
}
