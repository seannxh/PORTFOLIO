import { useState } from 'react'
import NavBar from "../src/components/navbar/navbar"
import Intro from './components/intro/intro.jsx'
import './index.css'
import './App.css'


function App() {
  
  return (
    <div>
      <NavBar/>
    <div className="portfolio">
      <Intro/>
    </div>
    </div>
  )
}

export default App
