const jobs = [
  {
    company: 'PKF O\'Connor Davies, LLP',
    role: 'Tax Associate',
    period: 'November 2025 – Present',
    location: 'Woburn, MA',
    current: true,
    bullets: [
      'Prepare and review a wide range of tax returns including individual (1040), corporate (1120), and partnership (1065)',
      'Collaborate with managers and partners to ensure tax compliance and support client-specific tax planning strategies',
      'Conduct technical tax research and draft responses for IRS and state tax authorities',
      'Utilize CCH Axcess, ProSystem fx, BNA Income Tax Planner, SurePrep, and Microsoft Excel to streamline workflows',
      'Communicate directly with clients to request information and deliver a high-quality client experience',
    ],
  },
  {
    company: 'PKF O\'Connor Davies, LLP',
    role: 'Business Tax Unit Intern',
    period: 'January 2025 – October 2025',
    location: 'Woburn, MA',
    current: false,
    bullets: [
      'Prepared and finalized tax returns including Forms 1120, 1120S, and 1040 for a diverse client base',
      'Utilized CCH® ProSystem fx® Engagement, Microsoft Excel, and iChannel to analyze financial data',
      'Developed professional skills in a hybrid work environment while managing multiple tasks efficiently',
    ],
  },
  {
    company: 'Baker Newman Noyes',
    role: 'Tax Co-op',
    period: 'January 2024 – April 2024',
    location: 'Woburn, MA',
    current: false,
    bullets: [
      'Prepared tax returns and extensions for many entities and high-value individuals, primarily C-Corps (Form 1120)',
      'Worked with GoSystems, ProFx, Caseware, and Microsoft Office applications',
      'Thrived in a hybrid team environment to deliver work efficiently and accurately',
    ],
  },
  {
    company: 'J. Crew Group, Inc.',
    role: 'Sales Associate',
    period: 'June 2024 – December 2024',
    location: 'Salem, NH',
    current: false,
    bullets: [
      'Provided personalized customer service with expert styling advice and seamless checkout experience',
      'Maintained store presentation and upholding visual merchandising standards',
      'Collaborated with team to drive sales and achieve performance targets in a fast-paced retail setting',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '120px 0', background: '#080d1a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 64px' }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: '72px' }}>
          <span className="section-tag">Career</span>
          <div style={{ width: '40px', height: '2px', background: '#C9A84C', margin: '16px 0 24px' }} />
          <h2 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: 'clamp(48px, 6vw, 80px)',
            lineHeight: '1',
            letterSpacing: '1px',
            color: '#ffffff',
          }}>
            Work<br /><span className="gold-text">Experience</span>
          </h2>
        </div>

        {/* PKF Banner */}
        <div className="reveal" style={{ marginBottom: '64px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #111827, #1a2438)',
            border: '1px solid rgba(201,168,76,0.15)',
            padding: '32px 40px',
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            flexWrap: 'wrap',
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '8px' }}>Current Employer</div>
              <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '28px', letterSpacing: '2px', color: '#ffffff' }}>PKF O'Connor Davies, LLP</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>Top 30 U.S. CPA Firm · Woburn, MA</div>
            </div>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {['CCH Axcess', 'ProSystem fx', 'BNA Planner', 'SurePrep', 'Microsoft Excel'].map((tool) => (
                <span key={tool} style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  color: 'rgba(255,255,255,0.5)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '6px 12px',
                }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '32px' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '4px',
            top: '8px',
            bottom: '8px',
            width: '1px',
            background: 'linear-gradient(to bottom, #C9A84C, rgba(201,168,76,0.1))',
          }} />

          {jobs.map((job, i) => (
            <div
              key={i}
              className="reveal card-hover"
              style={{
                position: 'relative',
                marginBottom: '48px',
                background: '#111827',
                border: '1px solid rgba(255,255,255,0.06)',
                padding: '36px 40px',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
            >
              {/* Dot */}
              <div style={{
                position: 'absolute',
                left: '-36px',
                top: '40px',
                width: '10px',
                height: '10px',
                background: job.current ? '#C9A84C' : 'rgba(201,168,76,0.4)',
                borderRadius: '50%',
                boxShadow: job.current ? '0 0 12px rgba(201,168,76,0.6)' : 'none',
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px', flexWrap: 'wrap' }}>
                    <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '22px', letterSpacing: '1px', color: '#ffffff' }}>
                      {job.role}
                    </h3>
                    {job.current && (
                      <span style={{
                        fontSize: '10px',
                        fontWeight: '700',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        background: 'rgba(201,168,76,0.15)',
                        color: '#C9A84C',
                        border: '1px solid rgba(201,168,76,0.3)',
                        padding: '3px 10px',
                      }}>
                        Current
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '14px', color: '#C9A84C', fontWeight: '500' }}>{job.company}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>{job.location}</div>
                </div>
                <div style={{
                  fontSize: '12px',
                  letterSpacing: '1px',
                  color: 'rgba(255,255,255,0.4)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '6px 14px',
                  whiteSpace: 'nowrap',
                }}>
                  {job.period}
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {job.bullets.map((b, j) => (
                  <li key={j} style={{ display: 'flex', gap: '12px', fontSize: '14px', lineHeight: '1.7', color: 'rgba(255,255,255,0.6)' }}>
                    <span style={{ color: '#C9A84C', flexShrink: 0, marginTop: '2px' }}>→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #experience > div { padding: 0 24px !important; }
          #experience > div > div:last-child { padding-left: 24px !important; }
        }
      `}</style>
    </section>
  )
}
