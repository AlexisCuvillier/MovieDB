import React, { useState, useEffect } from "react";
import DesriptionMovie from "../CardDescriptionMovie/DesriptionMovie";
import PopularCard from "../PopularMovie/PopularCard";
import "./Header.css";
import moment from "moment";
import "moment/locale/fr";
import "../PopularMovie/PopularMovie.css";

export default function Header() {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  const API_URL =
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=fr`;

  const [query, setQuery] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [idMovie, setIdMovie] = useState([])
  const handleClick = (e) => {
    setIdMovie({
      id:e.currentTarget.id
    })
  }
  console.log('idMovieSearch ===', idMovie);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching ===", searchMovie);

    try {
      if (query == "") {
        setSearchMovies([]);
      } else {
        fetch(API_URL)
          .then((res) => res.json())
          .then((data) => {
            setSearchMovies(data.results);
            console.log(data);
          });
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&language=fr`;
        const res = await fetch(url);
        const data = await res.json();
        setSearchMovies(data.results);
      }
    } catch (er) {
      console.log(er);
    }
  };


  const changeHandler = (e) => {
    setQuery(e.target.value);
    // console.log("change===", e);
  };

  console.log("searchMovies====", searchMovies);
  return (
    <div>
      <div className="backgroundDiv">
        <form onSubmit={searchMovie}>
          <input
            className="inputSearchBar"
            type="text"
            placeholder="Rechercher un film"
            value={query}
            onChange={changeHandler}
          />
          <button className="buttonSearch" onSubmit={searchMovie}>
            Rechercher
          </button>
        </form>
      </div>
      <DesriptionMovie />
      {(() => {
        if (searchMovies == "") 
        {
          return;
        } 
        else {
          return (
            <>
           <h2>Recherche</h2>
          <div className="container-movie">
        {searchMovies.map((item) => (
          <PopularCard
            func={handleClick}
            key={item.id}
            id={item.id}
            title={item.title}
            img={API_IMG + item.poster_path}
            date={moment(item.release_date).format("Do MMM YY")}
          />
        ))}
      </div>
          </>
          )
          
          
        }
      })()}
     
    </div>
  );
}
