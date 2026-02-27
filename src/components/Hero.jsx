import { useState, useEffect } from 'react'

const cyclingWords = [
  'TAX ASSOCIATE',
  'CPA CANDIDATE',
  'TEAM CAPTAIN',
  'MERRIMACK WARRIOR',
  'DIVISION I ATHLETE',
  'FUTURE CPA',
  'ACCOUNTING PROFESSIONAL',
  'PROBLEM SOLVER',
]

const bgPhotos = ['/trey-headshot.jpeg', '/trey-running-2.jpeg']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % cyclingWords.length)
        setVisible(true)
      }, 400)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((i) => (i + 1) % bgPhotos.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const marquee = 'TAX ASSOCIATE · CPA CANDIDATE · MERRIMACK COLLEGE · PKF O\'CONNOR DAVIES · CROSS COUNTRY · TRACK & FIELD · WINDHAM NH · '

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>

      {/* Crossfading background photos */}
      {bgPhotos.map((src, i) => (
        <div key={src} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: i === 1 ? 'center top' : 'center 30%',
          opacity: bgIndex === i ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }} />
      ))}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg, rgba(10,15,30,0.92) 0%, rgba(10,15,30,0.72) 55%, rgba(10,15,30,0.85) 100%)' }} />

      {/* Floating orbs */}
      <div className="orb" style={{ width: 600, height: 600, background: '#C9A84C', top: '-200px', right: '-100px' }} />
      <div className="orb" style={{ width: 400, height: 400, background: '#1a4a8a', bottom: '100px', left: '-100px' }} />

      {/* Left accent line */}
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 32, width: 1, background: 'linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.4) 50%, transparent 100%)' }} />

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 64px', width: '100%' }}>
        {/* Label */}
        <div style={{ animation: 'fadeInUp 0.8s ease forwards', opacity: 0 }}>
          <span className="section-tag" style={{ display: 'block', marginBottom: 28 }}>
            Tax Associate · PKF O'Connor Davies, LLP
          </span>
        </div>

        {/* TREY */}
        <div style={{ animation: 'fadeInUp 0.8s ease 0.1s forwards', opacity: 0 }}>
          <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(80px, 13vw, 172px)', lineHeight: 0.88, letterSpacing: '-3px', color: '#ffffff' }}>
            TREY
          </div>
        </div>

        {/* Cycling word row */}
        <div style={{ animation: 'fadeInUp 0.8s ease 0.2s forwards', opacity: 0, height: 'clamp(32px, 4vw, 56px)', display: 'flex', alignItems: 'center', overflow: 'hidden', margin: '8px 0 4px', paddingLeft: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 32, height: 1, background: '#C9A84C', flexShrink: 0 }} />
            <span
              key={wordIndex}
              className="cycling-word"
              style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: 'clamp(20px, 2.5vw, 36px)',
                letterSpacing: '6px',
                color: '#C9A84C',
                display: 'inline-block',
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.4s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {cyclingWords[wordIndex]}
            </span>
            <div style={{ width: 32, height: 1, background: 'rgba(201,168,76,0.3)', flexShrink: 0 }} />
          </div>
        </div>

        {/* GONZALEZ */}
        <div style={{ animation: 'fadeInUp 0.8s ease 0.3s forwards', opacity: 0 }}>
          <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(80px, 13vw, 172px)', lineHeight: 0.88, letterSpacing: '-3px', color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.18)' }}>
            GONZALEZ
          </div>
        </div>

        {/* Subline + CTAs */}
        <div style={{ animation: 'fadeInUp 0.8s ease 0.45s forwards', opacity: 0, marginTop: 48 }}>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', letterSpacing: 1, marginBottom: 32, maxWidth: 380, lineHeight: 1.8 }}>
            BBA Accounting & Management · Merrimack College<br />
            Windham, NH
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#highlights" style={{ display: 'inline-block', background: '#C9A84C', color: '#0a0f1e', padding: '14px 36px', fontSize: 11, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.target.style.background = '#f0d878'; e.target.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.target.style.background = '#C9A84C'; e.target.style.transform = 'translateY(0)' }}>
              Explore Work
            </a>
            <a href="#contact" style={{ display: 'inline-block', border: '1px solid rgba(201,168,76,0.4)', color: '#C9A84C', padding: '14px 36px', fontSize: 11, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.target.style.background = 'rgba(201,168,76,0.1)'; e.target.style.borderColor = '#C9A84C' }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.borderColor = 'rgba(201,168,76,0.4)' }}>
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 100, right: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, animation: 'fadeIn 1s ease 1.2s forwards', opacity: 0 }}>
        <span style={{ fontSize: 9, letterSpacing: 4, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>Scroll</span>
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)' }} />
      </div>

      {/* Gold marquee strip */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, overflow: 'hidden', background: '#C9A84C', padding: '9px 0' }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap' }} className="animate-marquee">
          {[...Array(6)].map((_, i) => (
            <span key={i} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '3px', color: '#0a0f1e' }}>{marquee}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from { opacity:0; transform:translateY(36px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @media (max-width: 600px) { #hero > div:nth-child(5) { padding: 0 28px !important; } }
      `}</style>
    </section>
  )
}
