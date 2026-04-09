import { useState, useEffect } from 'react'

const cycling = [
  'TAX ASSOCIATE',
  'CPA CANDIDATE',
  'ACCOUNTING PROFESSIONAL',
  'CREATIVE PROBLEM SOLVER',
  'DIVISION I ATHLETE',
  'ORGANISER OF INFORMATION',
  'STRATEGIC THINKER',
  'MERRIMACK WARRIOR',
]

const marqueeText = 'TAX ASSOCIATE • CPA CANDIDATE • PKF O\'CONNOR DAVIES • MERRIMACK COLLEGE • DIVISION I ATHLETE • WINDHAM NH • '

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const iv = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx((i) => (i + 1) % cycling.length)
        setVisible(true)
      }, 350)
    }, 2600)
    return () => clearInterval(iv)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      background: '#f5f4f0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 68,
    }}>

      {/* Subtle texture line on left — Colin's site has a thin vertical accent */}
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 4, background: '#111' }} />

      {/* Main content */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 80px', width: '100%' }}>

        {/* Label — Colin has a small descriptor above the name */}
        <div style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: '#888',
          marginBottom: 32,
          animation: 'fadeUp 0.7s ease forwards',
          opacity: 0,
        }}>
          Tax Associate · PKF O'Connor Davies, LLP
        </div>

        {/* TREY — large Oswald display */}
        <div style={{ animation: 'fadeUp 0.7s ease 0.1s forwards', opacity: 0 }}>
          <div style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: 'clamp(80px, 14vw, 180px)',
            fontWeight: 700,
            lineHeight: 0.9,
            letterSpacing: '-2px',
            color: '#111',
            textTransform: 'uppercase',
          }}>
            TREY
          </div>
        </div>

        {/* Cycling tagline row — Colin's animated descriptor loop */}
        <div style={{
          animation: 'fadeUp 0.7s ease 0.2s forwards',
          opacity: 0,
          height: 'clamp(24px, 3vw, 40px)',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          margin: '10px 0 6px',
          overflow: 'hidden',
        }}>
          <div style={{ width: 28, height: 1, background: '#bbb', flexShrink: 0 }} />
          <span
            className="cycling-word"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(11px, 1.5vw, 15px)',
              fontWeight: 600,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#555',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.35s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {cycling[idx]}
          </span>
          <div style={{ width: 28, height: 1, background: '#ddd', flexShrink: 0 }} />
        </div>

        {/* GONZALEZ — outlined, Colin style */}
        <div style={{ animation: 'fadeUp 0.7s ease 0.3s forwards', opacity: 0 }}>
          <div style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: 'clamp(80px, 14vw, 180px)',
            fontWeight: 700,
            lineHeight: 0.9,
            letterSpacing: '-2px',
            color: 'transparent',
            WebkitTextStroke: '1.5px rgba(0,0,0,0.15)',
            textTransform: 'uppercase',
          }}>
            GONZALEZ
          </div>
        </div>

        {/* Subline + CTA */}
        <div style={{ animation: 'fadeUp 0.7s ease 0.45s forwards', opacity: 0, marginTop: 52 }}>
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 14,
            color: '#888',
            letterSpacing: 0.5,
            marginBottom: 32,
            maxWidth: 360,
            lineHeight: 1.9,
          }}>
            BBA Accounting & Management · Merrimack College<br />
            Windham, NH
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#work"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: '#f5f4f0',
                background: '#111',
                padding: '14px 36px',
                transition: 'background 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#333'}
              onMouseLeave={e => e.currentTarget.style.background = '#111'}
            >
              View Work
            </a>
            <a href="#contact"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: '#111',
                border: '1px solid rgba(0,0,0,0.25)',
                padding: '14px 36px',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#111'; e.currentTarget.style.color = '#f5f4f0' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#111' }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: 80,
        right: 48,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        animation: 'fadeUp 0.7s ease 1s forwards',
        opacity: 0,
      }}>
        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, letterSpacing: 4, color: '#aaa', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>Scroll</span>
        <div style={{ width: 1, height: 44, background: 'linear-gradient(to bottom, #aaa, transparent)' }} />
      </div>

      {/* Bottom marquee strip — Colin's cycling tagline band */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, overflow: 'hidden', background: '#111', padding: '8px 0' }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap' }} className="animate-marquee">
          {[...Array(6)].map((_, i) => (
            <span key={i} style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: '3px',
              color: '#f5f4f0',
              textTransform: 'uppercase',
            }}>
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 600px) {
          #hero-content { padding: 0 32px !important; }
        }
      `}</style>
    </section>
  )
}
