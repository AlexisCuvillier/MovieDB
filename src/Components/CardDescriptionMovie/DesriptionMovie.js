import React, { useState, useEffect } from "react";
import "./DescriptionMovie.css";

export default function DesriptionMovie() {
  const API_GENRE = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=fr`;
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`;
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  const PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [movies, setMovies] = useState([]);
  const [descriptions, setDescriptions] = useState([]);


  return (
    <div className="container">
      <h1>Description</h1>

      <div className="container-description" style={{}}>
        <img className="Descrip-img" alt="" />
        <div className="Descrip-info">
          <div className="one">
            <p>TITRE</p>
            <p>date ● genre ● durée </p>
          </div>
          <div className="two">
            <p>80% Note des utilisateurs</p>
          </div>

          <div>
            <div className="three">
              <p>Synopsis</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo repellat et dolorem laborum id ut quam similique
                laboriosam molestias vel.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo repellat et dolorem laborum id ut quam similique
                laboriosam molestias vel.
                laboriosam molestias vel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
