import React, {useState, useEffect} from "react";
import "./DescriptionMovie.css";

export default function DesriptionMovie() {
  
  const API_GENRE = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=fr`
  const API_URL =
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`;
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  const PER_PAGE = 5
  const [currentPage, setCurrentPage] = useState(0)
  const [movies, setMovies] = useState([]);
  const [descriptions,   ] = useState([])


 
  const offset = currentPage * PER_PAGE; 
  const currentPageMovie = movies
    .slice(offset, offset + PER_PAGE)
    // console.log("currentPageMovie =====", currentPageMovie.id);
  // console.log('movie ===', currentPageMovie[0]);
    
   const firstDescription = currentPageMovie[0];
  // console.log('firstDescription ===',firstDescription);

      
  const firistDescription = currentPageMovie.findIndex(item => item[0])
  console.log('firstDescription ===',firstDescription);
  
  const firstDescrip = currentPageMovie.filter(item => item.title === 'Doctor Strange in the Multiverse of Madness' )
  console.log('firstDescrip ===',firstDescrip);

  
  const url = `https://api.themoviedb.org/3/movie/${firstDescription}?api_key=${process.env.REACT_APP_API_KEY}&language=fr`
  console.log(url, '=========== url ');
  
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data);
      });
  }, []);


  return (
    <div className="container">
        <h1>Description</h1>
        
        {firstDescrip.map((item) => (
         
      <div className="container-description" style={{
       
      }}>
      <h2>{item.title} ({item.release_date})</h2>
      <p>{item.release_date} {item.genre_ids} {}</p>

      

        
      
        
        
        </div>
     ))}
     
    </div>
  );
}
