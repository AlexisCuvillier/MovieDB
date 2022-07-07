import React, {useState, useEffect} from "react";
import "./DescriptionMovie.css";

export default function DesriptionMovie() {

    
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
    console.log('currentPageMovie ====', currentPageMovie);

   


  return (
    <div className="container">
        <h1>Description</h1>
        <div className="container-description">
        {currentPageMovie.map((item) => (
          console.log('map ===',currentPageMovie),
    
        
        
      
        
        <p>{item.title[1]}</p>
      ))}
     </div>
    </div>
  );
}
