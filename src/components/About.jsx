export default function About() {
  return (
    <section id="about" style={{ padding: '120px 0', background: '#fff', position: 'relative' }}>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 80px' }}>

        {/* Colin's about layout: left photo, right text, asymmetric */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

          {/* Photo side */}
          <div className="reveal" style={{ position: 'relative' }}>
            <img
              src="/trey-headshot.jpeg"
              alt="Trey Gonzalez"
              style={{ width: '100%', height: 560, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
            {/* Black accent strip — Colin's minimal framing */}
            <div style={{ position: 'absolute', top: 24, left: -4, width: 4, height: 80, background: '#111' }} />
            <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, height: 4, background: '#111' }} />
          </div>

          {/* Text side */}
          <div className="reveal">
            {/* Section label — Colin's small caps tag */}
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '5px', textTransform: 'uppercase', color: '#999', marginBottom: 18 }}>
              About
            </div>
            <div style={{ width: 32, height: 1, background: '#111', marginBottom: 28 }} />

            <h2 style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: 'clamp(36px, 4.5vw, 58px)',
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: 1,
              color: '#111',
              marginBottom: 28,
              textTransform: 'uppercase',
            }}>
              Clarity of<br />numbers.<br />Precision<br />of results.
            </h2>

            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14.5, lineHeight: 2, color: '#555', marginBottom: 18 }}>
              I've been in tax and accounting for over 3 years. My philosophy has always been one of precision — precision of analysis and client communication. Achieving compliance requires the discipline of thoroughness.
            </p>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14.5, lineHeight: 2, color: '#555', marginBottom: 18 }}>
              Self-editing, non-stop learning, and humility are the cornerstones of my practice. My work spans individual, corporate, and partnership returns across PKF O'Connor Davies — one of America's Top 30 CPA firms.
            </p>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14.5, lineHeight: 2, color: '#555', marginBottom: 40 }}>
              Let me help you tell your financial story.
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: 44, borderTop: '1px solid #e8e8e4', paddingTop: 32 }}>
              {[
                { num: '3+', label: 'Years in Tax' },
                { num: 'D1', label: 'Athlete' },
                { num: 'Top 30', label: 'CPA Firm' },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 36, fontWeight: 700, color: '#111', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: '#aaa', marginTop: 6 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 850px) {
          #about .grid-cols { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 600px) {
          #about > div { padding: 0 28px !important; }
        }
      `}</style>
    </section>
  )
}
