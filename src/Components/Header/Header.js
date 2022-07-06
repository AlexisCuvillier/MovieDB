import axios from 'axios'
import React, {useState, useEffect, useRef} from 'react'
import './Header.css'


export default function Header() {
  return (
    <div >
        <div className='backgroundDiv'>
        <form action="" >
            <input className='inputSearchBar'  type="text" placeholder='Rechercher un film' />
            <button className='buttonSearch'>Rechercher</button>
        </form>
    
        </div>
    

    </div>
  )

}