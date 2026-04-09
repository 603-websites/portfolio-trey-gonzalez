// Work.jsx — Colin Moy's portfolio grid style, Trey's career case studies

const cases = [
  {
    num: '01',
    title: 'Tax Associate',
    sub: "PKF O'Connor Davies, LLP",
    tag: 'Current Role',
    period: 'Nov 2025 – Present',
    img: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=900&q=80',
    desc: 'Prepare and review Forms 1040, 1120, and 1065. Draft IRS responses, collaborate with managers and partners on tax compliance, and communicate directly with clients.',
  },
  {
    num: '02',
    title: 'Business Tax Unit Intern',
    sub: "PKF O'Connor Davies, LLP",
    tag: 'Internship',
    period: 'Jan 2025 – Oct 2025',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
    desc: 'Prepared and finalized Forms 1120, 1120S, and 1040. Streamlined workflows using CCH ProSystem fx Engagement, Excel, and iChannel in a hybrid environment.',
  },
  {
    num: '03',
    title: 'Tax Co-op',
    sub: 'Baker Newman Noyes',
    tag: 'Co-op',
    period: 'Jan 2024 – Apr 2024',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80',
    desc: 'Prepared returns and extensions for entities and high-value individuals. Worked across GoSystems, ProFx, and Caseware in a fast-paced hybrid team.',
  },
  {
    num: '04',
    title: 'Division I Team Captain',
    sub: 'Merrimack College',
    tag: 'Athletics',
    period: '2021 – 2025',
    img: '/trey-running-1.jpeg',
    desc: 'Led the Cross Country & Track and Field program as team captain. The same discipline demanded in D1 competition drives every deadline I tackle in tax.',
  },
  {
    num: '05',
    title: 'BBA — Accounting & Management',
    sub: 'Merrimack College',
    tag: 'Education',
    period: '2021 – 2025',
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80',
    desc: 'Bachelor of Business Administration with dual concentrations in Accounting and Management. Active in the Accounting Club, networking with regional firms.',
  },
  {
    num: '06',
    title: 'Tax Research & Compliance',
    sub: 'Expertise',
    tag: 'Specialization',
    period: 'Ongoing',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80',
    desc: 'Specialized in federal and state tax compliance, IRS correspondence, and technical research across individual, corporate, and partnership returns.',
  },
  {
    num: '07',
    title: 'CPA Candidate',
    sub: 'Professional Development',
    tag: 'Certification',
    period: 'In Progress',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80',
    desc: 'Actively pursuing CPA licensure. Committed to continuous professional development and staying current with evolving tax law and compliance standards.',
  },
  {
    num: '08',
    title: 'Client Communication',
    sub: 'Professional Skills',
    tag: 'Core Skill',
    period: '3+ Years',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80',
    desc: 'Direct client-facing experience managing information requests, deliverables, and clear communication across complex tax situations.',
  },
]

export default function Work() {
  return (
    <section id="work" style={{ padding: '120px 0', background: '#f5f4f0', position: 'relative' }}>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 80px' }}>

        {/* Section header — Colin's minimal label + large Oswald heading */}
        <div className="reveal" style={{ marginBottom: 64 }}>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '5px', textTransform: 'uppercase', color: '#999', marginBottom: 16 }}>
            Portfolio
          </div>
          <div style={{ width: 32, height: 1, background: '#111', marginBottom: 20 }} />
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(44px, 6vw, 76px)', fontWeight: 700, lineHeight: 1, color: '#111', textTransform: 'uppercase', letterSpacing: -1 }}>
            Selected Work
          </h2>
        </div>

        {/* Colin's portfolio grid — 2 columns, image cards with dark overlay + text */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
          {cases.map((c, i) => (
            <div
              key={i}
              className={`work-card reveal`}
              style={{ height: i === 0 || i === 5 ? 520 : 360 }}
            >
              <img src={c.img} alt={c.title} />
              <div className="work-card-overlay" />
              <div className="work-card-content">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                    {c.tag}
                  </span>
                  <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.25)', letterSpacing: 2 }}>
                    {c.num}
                  </span>
                </div>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 600, color: '#fff', lineHeight: 1.1, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 4 }}>
                  {c.title}
                </div>
                <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.55)', marginBottom: 10 }}>
                  {c.sub} · {c.period}
                </div>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: 380 }}>
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 700px) {
          #work > div > div:last-child { grid-template-columns: 1fr !important; }
          .work-card { height: 320px !important; }
        }
        @media (max-width: 600px) {
          #work > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  )
}
