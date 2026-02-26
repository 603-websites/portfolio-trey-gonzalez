const groups = [
  { cat: 'Tax Software', color: '#C9A84C', items: ['CCH Axcess', 'CCH ProSystem fx', 'BNA Income Tax Planner', 'SurePrep', 'GoSystems', 'ProFx', 'Caseware', 'iChannel'] },
  { cat: 'Tax Expertise', color: '#6ea8f0', items: ['Form 1040', 'Form 1120 / 1120S', 'Form 1065', 'Tax Extensions', 'State Compliance', 'Federal Compliance', 'IRS Research'] },
  { cat: 'Technical', color: '#8bc96a', items: ['Microsoft Excel', 'Microsoft Word', 'Financial Analysis', 'Data Review', 'Office Suite'] },
  { cat: 'Professional', color: '#c96a8b', items: ['Client Communication', 'Team Leadership', 'Hybrid Work', 'Analytical Thinking', 'Attention to Detail', 'Fast-Paced Environments'] },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '120px 0', background: '#080d1a', position: 'relative', overflow: 'hidden' }}>

      {/* Scrolling skill marquee in background */}
      <div style={{ position: 'absolute', top: '20%', left: 0, right: 0, overflow: 'hidden', opacity: 0.035, pointerEvents: 'none', userSelect: 'none' }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap' }} className="animate-marquee-slow">
          {[...Array(3)].map((_, i) => (
            <span key={i} style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 120, letterSpacing: 8, color: '#C9A84C' }}>
              CCH · EXCEL · TAX · CPA · 1040 · 1120 · RESEARCH · COMPLIANCE ·&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 64px', position: 'relative' }}>

        <div className="reveal" style={{ marginBottom: 72 }}>
          <span className="section-tag">Capabilities</span>
          <div style={{ width: 36, height: 2, background: '#C9A84C', margin: '14px 0 20px' }} />
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 1, color: '#fff' }}>
            Skills & <span className="gold-text">Expertise</span>
          </h2>
        </div>

        {/* Skill clouds — one per category */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {groups.map((g) => (
            <div key={g.cat} className="reveal">
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: g.color, flexShrink: 0 }} />
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: g.color }}>{g.cat}</span>
                <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${g.color}30, transparent)` }} />
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {g.items.map(skill => (
                  <span
                    key={skill}
                    style={{
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.65)',
                      padding: '8px 18px',
                      borderRadius: 40,
                      background: 'rgba(255,255,255,0.04)',
                      border: `1px solid rgba(255,255,255,0.07)`,
                      cursor: 'default',
                      transition: 'all 0.25s ease',
                      display: 'inline-block',
                    }}
                    onMouseEnter={e => { e.target.style.background = `${g.color}18`; e.target.style.borderColor = `${g.color}60`; e.target.style.color = g.color; e.target.style.transform = 'translateY(-2px)' }}
                    onMouseLeave={e => { e.target.style.background = 'rgba(255,255,255,0.04)'; e.target.style.borderColor = 'rgba(255,255,255,0.07)'; e.target.style.color = 'rgba(255,255,255,0.65)'; e.target.style.transform = 'translateY(0)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media (max-width: 600px) { #skills > div { padding: 0 24px !important; } }`}</style>
    </section>
  )
}
