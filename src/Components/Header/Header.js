import React, { useState, useEffect } from "react";
import DesriptionMovie from "../CardDescriptionMovie/DesriptionMovie";
import "./Header.css";
import moment from 'moment'
import 'moment/locale/fr'
import PopularCard from "../PopularMovie/PopularCard";

export default function Header() {

  const API_SEARCH ="https://api.themoviedb.org/3/search/movie?api_key=d4dfced817985d414b727774821c9678&query=";
  const API_URL ="https://api.themoviedb.org/3/movie/popular?api_key=d4dfced817985d414b727774821c9678";
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_SEARCH)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching ===", searchMovie);

    try 
    {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=d4dfced817985d414b727774821c9678&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log('query ====',query);
      console.log('data ====',data);
      setMovies(data.results)
    } 
    catch (er) 
    {
      console.log(er);
    }
  }

  const changeHandler=(e)=> {
    setQuery(e.target.value)
    console.log('change===',changeHandler);
  }
  return (
    <div>
      <div className="backgroundDiv">
        <form>
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


      </div>
  );
}
