import './App.css';
import {useState, useEffect} from 'react'
import DesriptionMovie from './Components/CardDescriptionMovie/DesriptionMovie';
import Header from './Components/Header/Header';
import PopularMovie from './Components/PopularMovie/PopularMovie';

function App() {
  
  return (
    <div className="App">
        <PopularMovie />
    </div>
  );
}

export default App;
