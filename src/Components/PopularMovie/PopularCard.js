import './PopularMovie.css'
import React, { useState } from 'react'

export default function PopularCard(props){
 
  return (
    <div>{        
        <div className="bloc-card" >
          <div className="project-card" id={props.id} onClick={props.func}>
                <img
                  className="img-movie"
                  src={props.img}
                  alt=""
                />
            <div className="info">
              <p>{props.title}</p>
              <p className='date'>{props.date}</p>
              <img src="" alt="" />
            </div>
          </div>
        </div>}</div>
  )
}
