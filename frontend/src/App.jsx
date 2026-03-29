import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container nav-content">
          <div className="nav-logo">Jaid<span>.</span></div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Abdullah Mohammad Jaid. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App