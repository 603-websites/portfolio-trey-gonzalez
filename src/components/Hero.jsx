export default function Hero() {
  const marqueeText = 'TAX ASSOCIATE · CPA CANDIDATE · MERRIMACK COLLEGE · PKF O\'CONNOR DAVIES · CROSS COUNTRY · TRACK & FIELD · '

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background photo with overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/trey-running-2.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        filter: 'grayscale(20%)',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(10,15,30,0.92) 0%, rgba(10,15,30,0.75) 50%, rgba(10,15,30,0.85) 100%)',
      }} />

      {/* Gold accent line left */}
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '32px',
        width: '1px',
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.4), transparent)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 64px',
        width: '100%',
      }}>
        <div style={{ animation: 'fadeInUp 1s ease forwards', opacity: 0 }}>
          <span className="section-tag" style={{ marginBottom: '24px', display: 'block' }}>
            Tax Associate · PKF O'Connor Davies
          </span>
        </div>

        <div style={{ animation: 'fadeInUp 1s ease 0.15s forwards', opacity: 0 }}>
          <h1 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: 'clamp(72px, 12vw, 160px)',
            lineHeight: '0.9',
            letterSpacing: '-2px',
            color: '#ffffff',
            marginBottom: '8px',
          }}>
            TREY
          </h1>
          <h1 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: 'clamp(72px, 12vw, 160px)',
            lineHeight: '0.9',
            letterSpacing: '-2px',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.3)',
            marginBottom: '32px',
          }}>
            GONZALEZ
          </h1>
        </div>

        <div style={{ animation: 'fadeInUp 1s ease 0.3s forwards', opacity: 0, display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ width: '48px', height: '1px', background: '#C9A84C' }} />
          <p style={{
            fontSize: '15px',
            fontWeight: '400',
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '1px',
            maxWidth: '400px',
            lineHeight: '1.7',
          }}>
            BBA Accounting · Merrimack College<br />
            Division I Athlete · Future CPA
          </p>
        </div>

        <div style={{ animation: 'fadeInUp 1s ease 0.45s forwards', opacity: 0, marginTop: '48px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a
            href="#experience"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#C9A84C',
              color: '#0a0f1e',
              padding: '14px 32px',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.target.style.background = '#e8c96a'; e.target.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.target.style.background = '#C9A84C'; e.target.style.transform = 'translateY(0)' }}
          >
            View Experience
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid rgba(201,168,76,0.5)',
              color: '#C9A84C',
              padding: '14px 32px',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.target.style.borderColor = '#C9A84C'; e.target.style.background = 'rgba(201,168,76,0.1)' }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(201,168,76,0.5)'; e.target.style.background = 'transparent' }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '120px',
        right: '48px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        animation: 'fadeIn 1s ease 1s forwards',
        opacity: 0,
      }}>
        <span style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>Scroll</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)' }} />
      </div>

      {/* Marquee strip */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        background: '#C9A84C',
        padding: '10px 0',
      }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap' }} className="animate-marquee">
          {[...Array(4)].map((_, i) => (
            <span key={i} style={{
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '3px',
              color: '#0a0f1e',
              paddingRight: '0',
            }}>
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 767px) {
          section#hero > div:nth-child(4) {
            padding: 0 32px !important;
          }
        }
      `}</style>
    </section>
  )
}
