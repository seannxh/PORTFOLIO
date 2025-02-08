import NavBar from "../src/components/navbar/navbar.tsx"
import Intro from './components/intro/intro'
import About from './components/about/about'
import Projects from './components/projects/project'
import TechScroller from './components/techscroller/techscroller'
import Footer from './components/footer/footer'
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
