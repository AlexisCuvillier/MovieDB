import React, {useState, useEffect} from "react";
import "./DescriptionMovie.css";

export default function DesriptionMovie() {
  const API_DESCRIPTION = "https://api.themoviedb.org/3/movie/453395?api_key=d4dfced817985d414b727774821c9678&language=fr"
  const API_GENRE = "https://api.themoviedb.org/3/genre/movie/list?api_key=d4dfced817985d414b727774821c9678&language=fr"  
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
        setMovies(data.results);
        
      });
  }, []);

  const offset = currentPage * PER_PAGE; 


  const currentPageMovie = movies
    .slice(offset, offset + PER_PAGE)
    console.log("currentPageMovie =====", currentPageMovie.id);


    
  // const firstDescription = currentPageMovie[0]
  // console.log('firstDescription ===',firstDescription);

      
  const firstDescription = currentPageMovie.findIndex(item => item[0])
  console.log('firstDescription ===',firstDescription);
  
  const firstDescrip = currentPageMovie.filter(item => item.title === 'Doctor Strange in the Multiverse of Madness' )
  console.log('firstDescrip ===',firstDescrip);

   let back = API_IMG 

  return (
    <div className="container">
        <h1>Description</h1>
        
        {firstDescrip.map((item) => (
         
      <div className="container-description" style={{
        background:back
      }}>
      <h2>{item.title} ({item.release_date})</h2>
      <p>{item.release_date} {item.genre_ids} {}</p>

      

        
      
        
        
        </div>
     ))}
     
    </div>
  );
}
