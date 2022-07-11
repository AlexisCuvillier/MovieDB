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
                <img
                  className="img-movie"
                  src={img}
                  alt=""
                />
            <div className="info">
              <p>{title}</p>
              <p className='date'>{date}</p>
              <img src="" alt="" />
            </div>
          </div>
        </div>}</div>
  )
}
