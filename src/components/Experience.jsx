const jobs = [
  {
    company: "PKF O'Connor Davies, LLP",
    role: 'Tax Associate',
    period: 'Nov 2025 – Present',
    location: 'Woburn, MA',
    current: true,
    img: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80',
    bullets: [
      'Prepare and review Forms 1040, 1120, and 1065 for a diverse client base',
      'Collaborate with managers and partners on tax compliance and client planning',
      'Draft responses to IRS and state tax authorities after technical research',
      'Utilize CCH Axcess, ProSystem fx, BNA Income Tax Planner, SurePrep, and Excel',
      'Communicate directly with clients for information requests and deliverables',
    ],
    tools: ['CCH Axcess', 'ProSystem fx', 'BNA Planner', 'SurePrep', 'Excel'],
  },
  {
    company: "PKF O'Connor Davies, LLP",
    role: 'Business Tax Unit Intern',
    period: 'Jan 2025 – Oct 2025',
    location: 'Woburn, MA',
    current: false,
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    bullets: [
      'Prepared and finalized Forms 1120, 1120S, and 1040 for a diverse client base',
      'Used CCH ProSystem fx Engagement, Excel, and iChannel to streamline processes',
      'Developed professional skills in a hybrid environment managing multiple tasks',
    ],
    tools: ['ProSystem fx', 'iChannel', 'Excel'],
  },
  {
    company: 'Baker Newman Noyes',
    role: 'Tax Co-op',
    period: 'Jan 2024 – Apr 2024',
    location: 'Woburn, MA',
    current: false,
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    bullets: [
      'Prepared returns and extensions for entities and high-value individuals (C-Corps, Form 1120)',
      'Worked across GoSystems, ProFx, Caseware, and Microsoft Office',
      'Thrived in a hybrid team environment for efficient delivery',
    ],
    tools: ['GoSystems', 'ProFx', 'Caseware'],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '120px 0', background: '#080d1a', position: 'relative', overflow: 'hidden' }}>

      {/* Diagonal top */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 60, background: '#0a0f1e', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 64px', position: 'relative' }}>
        <div className="reveal" style={{ marginBottom: 72 }}>
          <span className="section-tag">Career</span>
          <div style={{ width: 36, height: 2, background: '#C9A84C', margin: '14px 0 20px' }} />
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 1, color: '#fff' }}>
            Work <span className="gold-text">Experience</span>
          </h2>
        </div>

        {/* Jobs */}
        {jobs.map((job, i) => (
          <div
            key={i}
            className="reveal"
            style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '3fr 2fr' : '2fr 3fr', gap: 0, marginBottom: 64, direction: i % 2 === 0 ? 'ltr' : 'rtl' }}
          >
            {/* Content block */}
            <div style={{ background: '#111827', padding: '44px 48px', direction: 'ltr', position: 'relative', overflow: 'hidden' }}>
              {/* Current badge */}
              {job.current && (
                <div style={{ position: 'absolute', top: 20, right: 20, fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', background: 'rgba(201,168,76,0.15)', color: '#C9A84C', padding: '5px 10px', border: '1px solid rgba(201,168,76,0.3)' }}>
                  Current
                </div>
              )}
              <div style={{ marginBottom: 6 }}>
                <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 10 }}>
                  {job.period} · {job.location}
                </div>
                <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 28, letterSpacing: 1, color: '#fff', marginBottom: 4 }}>{job.role}</h3>
                <div style={{ fontSize: 14, color: '#C9A84C', fontWeight: 500, marginBottom: 24 }}>{job.company}</div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                {job.bullets.map((b, j) => (
                  <li key={j} style={{ display: 'flex', gap: 12, fontSize: 13.5, lineHeight: 1.7, color: 'rgba(255,255,255,0.58)' }}>
                    <span style={{ color: '#C9A84C', flexShrink: 0, marginTop: 2, fontSize: 11 }}>→</span>
                    {b}
                  </li>
                ))}
              </ul>
              {/* Tool chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {job.tools.map(t => (
                  <span key={t} style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1, color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.04)', padding: '5px 11px' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Image block */}
            <div className="img-overlay" style={{ direction: 'ltr', minHeight: 280 }}>
              <img src={job.img} alt={job.company} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              {/* Number overlay */}
              <div style={{ position: 'absolute', top: 20, left: 20, fontFamily: "'Bebas Neue', cursive", fontSize: 80, color: 'rgba(255,255,255,0.07)', lineHeight: 1 }}>
                0{i + 1}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 800px) {
          #experience > div > div[style*="grid"] {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
          }
          #experience > div > div[style*="grid"] > div:last-child {
            min-height: 200px !important;
          }
        }
        @media (max-width: 600px) { #experience > div { padding: 0 24px !important; } }
      `}</style>
    </section>
  )
}
