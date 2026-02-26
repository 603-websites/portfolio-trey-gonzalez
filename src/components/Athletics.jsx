export default function Athletics() {
  return (
    <section id="athletics" style={{ padding: '120px 0', background: '#080d1a', position: 'relative', overflow: 'hidden' }}>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 64px' }}>

        <div className="reveal" style={{ marginBottom: 72 }}>
          <span className="section-tag">Beyond the Office</span>
          <div style={{ width: 36, height: 2, background: '#C9A84C', margin: '14px 0 20px' }} />
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 1, color: '#fff' }}>
            Division I <span className="gold-text">Athlete</span>
          </h2>
        </div>

        {/* Masonry-style photo grid */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gridTemplateRows: 'auto auto', gap: 12, marginBottom: 48 }}>

          {/* Big left photo */}
          <div className="img-overlay" style={{ gridRow: '1 / 3', position: 'relative', minHeight: 560 }}>
            <img src="/trey-running-1.jpeg" alt="Trey Gonzalez racing cross country" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 24, left: 24, zIndex: 2 }}>
              <div style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: '#C9A84C', marginBottom: 4 }}>@rhodeandtrack</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>HAAC Cross Country Invitational</div>
            </div>
          </div>

          {/* Top right — Merrimack athletics */}
          <div className="img-overlay" style={{ position: 'relative', minHeight: 270 }}>
            <img
              src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=700&q=80"
              alt="Cross country running"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(10,15,30,0.45)', zIndex: 1 }} />
            <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 2 }}>
              <div style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: '#C9A84C' }}>Merrimack College · HAAC</div>
            </div>
          </div>

          {/* Bottom right — stats card */}
          <div style={{ background: 'linear-gradient(135deg, #111827, #0f1720)', padding: '32px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#C9A84C', marginBottom: 20 }}>Merrimack Warriors</div>
            <div style={{ display: 'flex', gap: 32, marginBottom: 24, flexWrap: 'wrap' }}>
              {[{ v: '3', l: 'Seasons' }, { v: 'Capt.', l: '2024–25' }, { v: 'D1', l: 'HAAC' }].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 36, color: '#C9A84C', lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>{s.l}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['3-season varsity athlete (XC + indoor + outdoor)', 'Team Captain — 2024–2025', 'HAAC Conference competitor'].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#C9A84C', fontSize: 11, flexShrink: 0, marginTop: 2 }}>→</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote + second photo side by side */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 0, overflow: 'hidden' }}>
          <div style={{ background: 'rgba(201,168,76,0.07)', padding: '52px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: '3px solid #C9A84C' }}>
            <div style={{ fontSize: 80, lineHeight: 0.7, color: 'rgba(201,168,76,0.2)', fontFamily: 'serif', marginBottom: 24 }}>"</div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 20, lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: 24 }}>
              Being a team captain taught me that leadership isn't about being the loudest in the room — it's about earning trust through consistent effort and showing up every single day.
            </p>
            <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: '#C9A84C' }}>Trey Gonzalez</div>
          </div>
          <div className="img-overlay">
            <img src="/trey-running-2.jpeg" alt="Trey Gonzalez cross country" style={{ width: '100%', height: '100%', minHeight: 280, objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }} />
          </div>
        </div>

        {/* Windham HS footnote */}
        <div className="reveal" style={{ marginTop: 24, background: '#111827', padding: '28px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 6 }}>Before College</div>
            <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 22, color: '#fff', letterSpacing: 1 }}>Windham High School Cross Country & Track</div>
          </div>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {['4 Years', '2× Captain', 'Community Events'].map(t => (
              <span key={t} style={{ fontSize: 11, letterSpacing: 1, color: 'rgba(201,168,76,0.7)', background: 'rgba(201,168,76,0.06)', padding: '6px 14px' }}>{t}</span>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          #athletics > div > div[style*="gridTemplateColumns: 1.4fr"] { grid-template-columns: 1fr !important; grid-template-rows: auto !important; }
          #athletics > div > div[style*="gridTemplateColumns: 3fr 2fr"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) { #athletics > div { padding: 0 24px !important; } }
      `}</style>
    </section>
  )
}
