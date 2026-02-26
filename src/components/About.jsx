export default function About() {
  return (
    <section id="about" style={{ padding: '120px 0', background: '#0a0f1e' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          {/* Left: Image */}
          <div className="reveal-left" style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              inset: '-16px',
              border: '1px solid rgba(201,168,76,0.2)',
              pointerEvents: 'none',
            }} />
            <img
              src="/trey-headshot.jpeg"
              alt="Trey Gonzalez"
              style={{
                width: '100%',
                height: '520px',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
                filter: 'grayscale(10%)',
              }}
            />
            {/* Gold corner accent */}
            <div style={{
              position: 'absolute',
              bottom: '-16px',
              right: '-16px',
              width: '80px',
              height: '80px',
              borderBottom: '3px solid #C9A84C',
              borderRight: '3px solid #C9A84C',
            }} />
            <div style={{
              position: 'absolute',
              top: '-16px',
              left: '-16px',
              width: '80px',
              height: '80px',
              borderTop: '3px solid #C9A84C',
              borderLeft: '3px solid #C9A84C',
            }} />
          </div>

          {/* Right: Content */}
          <div className="reveal">
            <span className="section-tag">About Me</span>
            <div style={{ width: '40px', height: '2px', background: '#C9A84C', margin: '16px 0 32px' }} />
            <h2 style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 'clamp(40px, 5vw, 64px)',
              lineHeight: '1',
              letterSpacing: '1px',
              marginBottom: '32px',
              color: '#ffffff',
            }}>
              PRECISION.<br />
              <span className="gold-text">INTEGRITY.</span><br />
              RESULTS.
            </h2>
            <p style={{ fontSize: '15px', lineHeight: '1.9', color: 'rgba(255,255,255,0.65)', marginBottom: '20px' }}>
              I'm a Tax Associate at PKF O'Connor Davies with a Bachelor of Business Administration from Merrimack College, where I double-concentrated in Accounting and Management.
            </p>
            <p style={{ fontSize: '15px', lineHeight: '1.9', color: 'rgba(255,255,255,0.65)', marginBottom: '20px' }}>
              My work spans individual, corporate, and partnership tax returns — combining technical precision with a genuine commitment to delivering value for every client I work with.
            </p>
            <p style={{ fontSize: '15px', lineHeight: '1.9', color: 'rgba(255,255,255,0.65)', marginBottom: '40px' }}>
              Outside the office, I'm a former Division I cross country and track & field captain at Merrimack — the same discipline and competitive drive that earned me a team captaincy shapes how I approach every challenge professionally.
            </p>

            <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
              {[
                { num: '3+', label: 'Years in Tax' },
                { num: 'Div. I', label: 'Athlete' },
                { num: 'BBA', label: 'Accounting' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '40px', color: '#C9A84C', lineHeight: '1' }}>{stat.num}</div>
                  <div style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div > div {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          #about > div > div > div:first-child img {
            height: 380px !important;
          }
        }
        @media (max-width: 600px) {
          #about > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  )
}
