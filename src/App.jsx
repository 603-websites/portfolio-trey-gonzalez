import './index.css'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Accessibility from './components/Accessibility'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8cb74' }}>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Accessibility />
      <Footer />
    </div>
  )
}

export default App
