import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import './PopularMovie.css'
import moment from 'moment'
import 'moment/locale/fr'
import Header from "../Header/Header";
import DesriptionMovie from "../CardDescriptionMovie/DesriptionMovie";
import PopularCard from "./PopularCard";


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
        // console.log(data);
        setMovies(data.results);
        
      });
  }, []);

  const offset = currentPage * PER_PAGE; 
  // console.log("offset", offset );

  const currentPageMovie = movies
    .slice(offset, offset + PER_PAGE)

  return (
    <>
    <Header />
    <div className="container-movie">
      {currentPageMovie.map((item) => (
        <PopularCard 
        key={item.id}
        id={item.id}
        title={item.title}
        img={API_IMG + item.poster_path}
        date={moment(item.release_date).format('Do MMM YY')}
        />
      ))}
    </div>
    </>
  );
}