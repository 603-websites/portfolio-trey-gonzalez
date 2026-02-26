export default function Education() {
  return (
    <section id="education" style={{ padding: '120px 0', background: '#0a0f1e', position: 'relative', overflow: 'hidden' }}>

      <div className="orb" style={{ width: 600, height: 600, background: '#1a4a8a', bottom: -200, left: -200, opacity: 0.08 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 64px', position: 'relative' }}>

        <div className="reveal" style={{ marginBottom: 72 }}>
          <span className="section-tag">Academic Background</span>
          <div style={{ width: 36, height: 2, background: '#C9A84C', margin: '14px 0 20px' }} />
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 1, color: '#fff' }}>
            Education
          </h2>
        </div>

        {/* Full-width Merrimack feature */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginBottom: 24, overflow: 'hidden' }}>
          {/* Image */}
          <div className="img-overlay" style={{ height: 420, position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=80"
              alt="Merrimack College campus"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            {/* Navy/gold overlay strip at bottom */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #00356b, #C9A84C)' }} />
          </div>
          {/* Content */}
          <div style={{ background: 'linear-gradient(135deg, #111827, #0f1720)', padding: '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: '#C9A84C', marginBottom: 16 }}>2021 – 2025</div>
            <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 36, letterSpacing: 1, color: '#fff', marginBottom: 6, lineHeight: 1.1 }}>
              Merrimack College
            </h3>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 28 }}>North Andover, Massachusetts</div>
            <div style={{ fontSize: 17, fontWeight: 600, color: '#fff', marginBottom: 20 }}>
              Bachelor of Business Administration
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 32 }}>
              {['Accounting Concentration', 'Management Concentration'].map(c => (
                <span key={c} style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1, color: '#C9A84C', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', padding: '5px 12px' }}>{c}</span>
              ))}
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 24 }}>
              <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 12 }}>Involvement</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 5, height: 5, background: '#C9A84C', borderRadius: '50%' }} />
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>Accounting Club — Networked with regional firms</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
                <div style={{ width: 5, height: 5, background: 'rgba(201,168,76,0.5)', borderRadius: '50%' }} />
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>Division I Cross Country & Track — Captain</span>
              </div>
            </div>
          </div>
        </div>

        {/* Windham HS — smaller card */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', overflow: 'hidden' }}>
          <div className="img-overlay" style={{ height: 200 }}>
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80"
              alt="High school"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ background: '#111827', padding: '36px 44px', display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 10 }}>Graduated June 2021</div>
              <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 26, letterSpacing: 1, color: '#fff', marginBottom: 4 }}>Windham High School</h3>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>Windham, New Hampshire</div>
            </div>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {[{ v: 'Diploma', l: 'Degree' }, { v: 'Captain', l: 'Athletics' }, { v: '2 Yrs', l: 'Leadership' }].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 30, color: '#C9A84C', lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 800px) {
          #education .reveal[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          #education .reveal[style*="grid-template-columns: 1fr 3fr"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) { #education > div { padding: 0 24px !important; } }
      `}</style>
    </section>
  )
}
