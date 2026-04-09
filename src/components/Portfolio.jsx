import { useState } from 'react'

// Trey's work/experience as Colin's portfolio case studies
const items = [
  {
    title: 'Tax Associate',
    sub: "PKF O'Connor Davies",
    img: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=900&q=80',
  },
  {
    title: 'BTU Intern',
    sub: "PKF O'Connor Davies",
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
  },
  {
    title: 'Tax Co-op',
    sub: 'Baker Newman Noyes',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80',
  },
  {
    title: 'D1 Team Captain',
    sub: 'Merrimack College',
    img: '/trey-running-1.jpeg',
  },
  {
    title: 'BBA Accounting',
    sub: 'Merrimack College',
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80',
  },
  {
    title: 'CPA Candidate',
    sub: 'In Progress',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80',
  },
  {
    title: 'Tax Research',
    sub: 'IRS · State · Federal',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80',
  },
  {
    title: 'Client Relations',
    sub: '3+ Years',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80',
  },
]

export default function Portfolio() {
  const [open, setOpen] = useState(false)

  return (
    <div id="portfolio" className="h2-section">
      {/* PORTF[O]LIO heading — clicking reveals the work grid */}
      <div
        className="h2-linkblock"
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}
      >
        <h2 className="h2-text">Portf</h2>
        {/* O circle — white with black pupil (Colin's "work" O style) */}
        <div className="h2-o work">
          <div style={{
            color: '#000',
            background: '#000',
            borderRadius: '1em',
            width: '1em',
            height: '1em',
            fontSize: '75px',
            lineHeight: '1em',
            overflow: 'hidden',
          }} />
        </div>
        <h2 className="h2-text">lio</h2>
      </div>

      {/* Pill card grid — exactly Colin's horizontal pill layout */}
      <div
        style={{
          overflow: 'hidden',
          maxHeight: open ? '2000px' : '0',
          transition: 'max-height 0.7s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div className="work-grid">
          {items.map((item, i) => (
            <div
              key={i}
              className="portfolio-pill"
              style={{ backgroundImage: `url("${item.img}")` }}
            >
              <div className="pill-overlay">
                <span className="pill-title">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
