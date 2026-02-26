const skillGroups = [
  {
    category: 'Tax Software',
    items: ['CCH Axcess', 'CCH ProSystem fx', 'BNA Income Tax Planner', 'SurePrep', 'GoSystems', 'ProFx', 'Caseware', 'iChannel'],
  },
  {
    category: 'Technical',
    items: ['Microsoft Excel', 'Microsoft Word', 'Microsoft Office Suite', 'Financial Data Analysis', 'Tax Return Preparation', 'IRS Documentation'],
  },
  {
    category: 'Tax Expertise',
    items: ['Form 1040 (Individual)', 'Form 1120 (C-Corp)', 'Form 1120S (S-Corp)', 'Form 1065 (Partnership)', 'Tax Extensions', 'State & Federal Compliance'],
  },
  {
    category: 'Professional',
    items: ['Client Communication', 'Team Leadership', 'Hybrid Work', 'Attention to Detail', 'Analytical Thinking', 'Fast-Paced Environments'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '120px 0', background: '#080d1a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 64px' }}>

        <div className="reveal" style={{ marginBottom: '72px' }}>
          <span className="section-tag">Capabilities</span>
          <div style={{ width: '40px', height: '2px', background: '#C9A84C', margin: '16px 0 24px' }} />
          <h2 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: 'clamp(48px, 6vw, 80px)',
            lineHeight: '1',
            letterSpacing: '1px',
            color: '#ffffff',
          }}>
            Skills &<br /><span className="gold-text">Expertise</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className="reveal card-hover"
              style={{
                background: '#111827',
                border: '1px solid rgba(255,255,255,0.06)',
                padding: '36px',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ width: '3px', height: '20px', background: '#C9A84C' }} />
                <h3 style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C' }}>
                  {group.category}
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.7)',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      padding: '6px 14px',
                      transition: 'all 0.2s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => { e.target.style.background = 'rgba(201,168,76,0.1)'; e.target.style.borderColor = 'rgba(201,168,76,0.3)'; e.target.style.color = '#C9A84C' }}
                    onMouseLeave={e => { e.target.style.background = 'rgba(255,255,255,0.05)'; e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.color = 'rgba(255,255,255,0.7)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          #skills > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          #skills > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  )
}
