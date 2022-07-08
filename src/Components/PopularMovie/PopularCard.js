import './PopularMovie.css'
import React from 'react'

export default function PopularCard({
    id,
    img,
    title,
    date
}){
  return (
    <div>{        
        <div className="bloc-card">
          <div className="project-card" key={id} id={id}>
            <div className="visual-aspect">
                <img
                  className="img-movie"
                  src={img}
                  alt=""
                />
            </div>
            <div className="info">
              <p>{title}</p>
              <p>{date}</p>
              <img src="" alt="" />
            </div>
          </div>
          <div className="back-card"></div>
        </div>}</div>
  )
}
