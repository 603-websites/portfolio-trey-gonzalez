export default function About() {
  return (
    <section id="about" style={{ padding: '100px 0 120px', background: '#0a0f1e', position: 'relative', overflow: 'hidden' }}>

      {/* Background orb */}
      <div className="orb" style={{ width: 500, height: 500, background: '#C9A84C', top: '-100px', right: '-200px', opacity: 0.06 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 64px' }}>

        {/* Asymmetric layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 6fr', gap: 80, alignItems: 'center' }}>

          {/* Image side — overlapping */}
          <div className="reveal-left" style={{ position: 'relative', paddingBottom: 60 }}>
            <img
              src="/trey-headshot.jpeg"
              alt="Trey Gonzalez"
              style={{ width: '100%', height: 520, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
            {/* Floating stat card */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              right: -32,
              background: '#C9A84C',
              padding: '20px 28px',
              minWidth: 180,
            }}>
              <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 42, color: '#0a0f1e', lineHeight: 1 }}>Top 30</div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(10,15,30,0.65)', marginTop: 4 }}>U.S. CPA Firm</div>
            </div>
            {/* Gold line accent */}
            <div style={{ position: 'absolute', top: 24, left: -24, width: 3, height: 100, background: '#C9A84C' }} />
          </div>

          {/* Text side */}
          <div className="reveal">
            <span className="section-tag">About Me</span>
            <div style={{ width: 36, height: 2, background: '#C9A84C', margin: '14px 0 28px' }} />
            <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(42px, 5vw, 68px)', lineHeight: 1, letterSpacing: 1, marginBottom: 28, color: '#fff' }}>
              Precision.<br />
              <span className="gold-text">Integrity.</span><br />
              Results.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.95, color: 'rgba(255,255,255,0.6)', marginBottom: 20 }}>
              I'm a Tax Associate at PKF O'Connor Davies — one of America's Top 30 CPA firms — with a Bachelor of Business Administration from Merrimack College, where I double-concentrated in Accounting and Management.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.95, color: 'rgba(255,255,255,0.6)', marginBottom: 20 }}>
              My work spans individual, corporate, and partnership returns, combined with technical tax research, direct client communication, and process-focused workflow tools like CCH Axcess and ProSystem fx.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.95, color: 'rgba(255,255,255,0.6)', marginBottom: 40 }}>
              I'm also a former Division I team captain at Merrimack — the same discipline and grit that running 8K races in the rain demands is what I bring to every deadline.
            </p>

            <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
              {[{ num: '3+', label: 'Years in Tax' }, { num: 'D1', label: 'Athlete' }, { num: 'BBA', label: 'Accounting' }].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 44, color: '#C9A84C', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image strip: college + office */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginTop: 80 }}>
          {[
            { src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80', label: 'Merrimack College', sub: 'North Andover, MA' },
            { src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80', label: 'Tax & Accounting', sub: 'PKF O\'Connor Davies' },
            { src: '/trey-running-1.jpeg', label: 'Division I Athletics', sub: 'Cross Country · Track' },
          ].map((img) => (
            <div key={img.label} className="img-overlay" style={{ height: 220 }}>
              <img src={img.src} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 16px 14px', zIndex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{img.label}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{img.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div > div:first-of-type { grid-template-columns: 1fr !important; gap: 48px !important; }
          #about > div > div:first-of-type > div:first-child { padding-bottom: 80px !important; }
          #about > div > div:last-of-type { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) { #about > div { padding: 0 24px !important; } }
      `}</style>
    </section>
  )
}
