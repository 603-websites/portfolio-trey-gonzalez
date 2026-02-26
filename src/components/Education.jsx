export default function Education() {
  return (
    <section id="education" style={{ padding: '120px 0', background: '#0a0f1e', position: 'relative', overflow: 'hidden' }}>

      {/* Large background text */}
      <div style={{
        position: 'absolute',
        right: '-40px',
        top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: "'Bebas Neue', cursive",
        fontSize: '200px',
        lineHeight: '1',
        color: 'rgba(255,255,255,0.02)',
        userSelect: 'none',
        pointerEvents: 'none',
        letterSpacing: '-4px',
      }}>
        BBA
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 64px', position: 'relative' }}>
        <div className="reveal" style={{ marginBottom: '72px' }}>
          <span className="section-tag">Academic Background</span>
          <div style={{ width: '40px', height: '2px', background: '#C9A84C', margin: '16px 0 24px' }} />
          <h2 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: 'clamp(48px, 6vw, 80px)',
            lineHeight: '1',
            letterSpacing: '1px',
            color: '#ffffff',
          }}>
            Education
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>

          {/* Merrimack Card */}
          <div
            className="reveal card-hover"
            style={{
              background: 'linear-gradient(135deg, #111827, #0f1720)',
              border: '1px solid rgba(201,168,76,0.2)',
              padding: '48px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Gold corner */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '80px',
              height: '80px',
              background: 'linear-gradient(225deg, rgba(201,168,76,0.15), transparent)',
            }} />

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '12px' }}>
                2021 – 2025
              </div>
              <h3 style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: '28px',
                letterSpacing: '1px',
                color: '#ffffff',
                marginBottom: '4px',
                lineHeight: '1.2',
              }}>
                Merrimack College
              </h3>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>North Andover, MA</div>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>
                Bachelor of Business Administration
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {['Accounting', 'Management'].map((conc) => (
                  <span key={conc} style={{
                    fontSize: '11px',
                    fontWeight: '600',
                    letterSpacing: '1px',
                    color: '#C9A84C',
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.25)',
                    padding: '5px 12px',
                  }}>
                    {conc} Concentration
                  </span>
                ))}
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px' }}>
              <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>Involvement</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '6px', height: '6px', background: '#C9A84C', borderRadius: '50%' }} />
                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Merrimack College Accounting Club</span>
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', marginLeft: '16px', marginTop: '4px' }}>
                Networked with regional accounting firms on-site
              </div>
            </div>

            {/* Merrimack colors accent */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #00356b, #C9A84C)',
            }} />
          </div>

          {/* Windham High School Card */}
          <div
            className="reveal card-hover"
            style={{
              background: '#111827',
              border: '1px solid rgba(255,255,255,0.06)',
              padding: '48px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
          >
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '12px' }}>
                Graduated June 2021
              </div>
              <h3 style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: '28px',
                letterSpacing: '1px',
                color: '#ffffff',
                marginBottom: '4px',
                lineHeight: '1.2',
              }}>
                Windham High School
              </h3>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>Windham, NH</div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#ffffff', marginBottom: '20px' }}>
                High School Diploma
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px' }}>
              <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>Athletics</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Cross Country — Captain (2 years)',
                  'Track & Field — Student Athlete',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '6px', height: '6px', background: 'rgba(201,168,76,0.5)', borderRadius: '50%' }} />
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          #education > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          #education > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  )
}
