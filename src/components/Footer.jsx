export default function Footer() {
  return (
    <footer style={{
      background: '#111',
      padding: '48px 80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 24,
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 18, fontWeight: 700, letterSpacing: '3px', color: '#fff', textTransform: 'uppercase' }}>TREY</span>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 18, fontWeight: 300, letterSpacing: '3px', color: '#555', textTransform: 'uppercase' }}>GONZALEZ</span>
      </div>

      {/* Social links — Colin's simple footer links */}
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        <a
          href="https://www.linkedin.com/in/trey-gonzalez-475659225"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#555', textDecoration: 'none', transition: 'color 0.25s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = '#555'}
        >
          LinkedIn
        </a>
        <a
          href="mailto:TR3YG@hotmail.com"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#555', textDecoration: 'none', transition: 'color 0.25s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = '#555'}
        >
          Email
        </a>
      </div>

      {/* Copyright */}
      <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, color: '#444' }}>
        © {new Date().getFullYear()} Trey Gonzalez
      </div>

      <style>{`
        @media (max-width: 600px) {
          footer { padding: 36px 24px !important; flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  )
}
