import { useEffect } from 'react'
import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Athletics from './components/Athletics'
import AISection from './components/AISection'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#0a0f1e' }}>
      <Nav />
      <Hero />
      <About />
      <Highlights />
      <Experience />
      <Education />
      <Athletics />
      <AISection />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
