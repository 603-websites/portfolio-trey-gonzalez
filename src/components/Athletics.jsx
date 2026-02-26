export default function Athletics() {
  return (
    <section id="athletics" style={{ padding: '120px 0', background: '#080d1a', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 64px' }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: '72px' }}>
          <span className="section-tag">Beyond the Office</span>
          <div style={{ width: '40px', height: '2px', background: '#C9A84C', margin: '16px 0 24px' }} />
          <h2 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: 'clamp(48px, 6vw, 80px)',
            lineHeight: '1',
            letterSpacing: '1px',
            color: '#ffffff',
          }}>
            Division I<br /><span className="gold-text">Athlete</span>
          </h2>
        </div>

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px' }}>

          {/* Big photo */}
          <div className="reveal" style={{ position: 'relative', overflow: 'hidden', gridRow: '1 / 3' }}>
            <img
              src="/trey-running-1.jpeg"
              alt="Trey Gonzalez running cross country at Merrimack College"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '500px',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
                filter: 'grayscale(20%)',
                transition: 'transform 0.6s ease, filter 0.6s ease',
              }}
              onMouseEnter={e => { e.target.style.transform = 'scale(1.04)'; e.target.style.filter = 'grayscale(0%)' }}
              onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.filter = 'grayscale(20%)' }}
            />
            {/* Overlay label */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(10,15,30,0.9), transparent)',
              padding: '32px 24px 20px',
            }}>
              <div style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '4px' }}>
                @rhodeandtrack
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>HAAC Cross Country Invitational</div>
            </div>
          </div>

          {/* Merrimack card */}
          <div
            className="reveal card-hover"
            style={{
              background: 'linear-gradient(135deg, #111827, #0f1720)',
              border: '1px solid rgba(201,168,76,0.2)',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '16px' }}>
              Merrimack College · HAAC
            </div>
            <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '26px', letterSpacing: '1px', color: '#ffffff', marginBottom: '6px' }}>
              Cross Country & Track & Field
            </h3>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginBottom: '24px' }}>August 2021 – May 2025</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {[
                { icon: '★', text: '3-season Varsity Athlete at Merrimack' },
                { icon: '★', text: 'Team Captain — 2024–2025 Academic Year' },
                { icon: '→', text: 'HAAC Conference competitor' },
                { icon: '→', text: 'Represented Warriors in cross country, indoor & outdoor track' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#C9A84C', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.6' }}>{item.text}</span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', display: 'flex', gap: '24px' }}>
              {[
                { label: 'Seasons', val: '3' },
                { label: 'Years Captain', val: '1' },
                { label: 'Division', val: 'I' },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '28px', color: '#C9A84C' }}>{s.val}</div>
                  <div style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* High school card */}
          <div
            className="reveal card-hover"
            style={{
              background: '#111827',
              border: '1px solid rgba(255,255,255,0.06)',
              padding: '40px',
              transition: 'border-color 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
          >
            <div style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(201,168,76,0.6)', marginBottom: '16px' }}>
              Windham High School
            </div>
            <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '26px', letterSpacing: '1px', color: '#ffffff', marginBottom: '6px' }}>
              Cross Country & Track & Field
            </h3>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginBottom: '24px' }}>November 2017 – June 2021</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: '★', text: '4-year varsity athlete' },
                { icon: '★', text: 'Team Captain for 2 years' },
                { icon: '→', text: 'Organized community and team events' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'rgba(201,168,76,0.6)', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote banner */}
        <div className="reveal" style={{
          background: 'linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.05))',
          border: '1px solid rgba(201,168,76,0.2)',
          padding: '40px 48px',
          display: 'flex',
          gap: '24px',
          alignItems: 'flex-start',
        }}>
          <div style={{ fontSize: '64px', lineHeight: '0.8', color: 'rgba(201,168,76,0.3)', fontFamily: 'serif', flexShrink: 0 }}>"</div>
          <div>
            <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'rgba(255,255,255,0.75)', fontStyle: 'italic', fontFamily: "'Playfair Display', serif", marginBottom: '16px' }}>
              Being a team captain taught me that leadership isn't about being the loudest in the room — it's about earning trust through consistent effort and showing up every single day.
            </p>
            <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#C9A84C' }}>Trey Gonzalez</div>
          </div>
        </div>
      </div>

      {/* Second running photo as full-width strip */}
      <div style={{ marginTop: '64px', position: 'relative', height: '300px', overflow: 'hidden' }}>
        <img
          src="/trey-running-2.jpeg"
          alt="Trey Gonzalez cross country race"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', filter: 'grayscale(30%) brightness(0.6)' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(8,13,26,0.8), transparent, rgba(8,13,26,0.8))',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(32px, 6vw, 72px)', letterSpacing: '8px', color: 'rgba(255,255,255,0.15)' }}>
              MERRIMACK WARRIORS
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #athletics > div > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }
          #athletics > div > div:nth-child(3) > div:first-child {
            grid-row: auto !important;
          }
        }
        @media (max-width: 600px) {
          #athletics > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  )
}
