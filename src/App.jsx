import { useState } from 'react'
import NavBar from "../src/components/navbar/navbar"
import Intro from './components/intro/intro.jsx'
import About from './components/about/about.jsx'
import Projects from './components/projects/project.jsx'
import TechScroller from './components/techscroller/techscroller.jsx'
import Footer from './components/footer/footer.jsx'
import './index.css'
import './App.css'


function App() {
  
  return (
    <div>
      <NavBar/>
    <div className="portfolio">
      <Intro/>
      <About/>
      <Projects/>
      <TechScroller/>
      <Footer/>
    </div>
    </div>
  )
}

export default App
