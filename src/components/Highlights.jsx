import { useState } from 'react'

const items = [
  {
    title: 'Individual & Corporate Tax Returns',
    tag: 'Tax Compliance',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80',
    detail: 'Prepare and review Forms 1040, 1120, 1120S, and 1065 for a diverse client base at PKF O\'Connor Davies — one of America\'s top 30 CPA firms. Leveraging CCH Axcess, ProSystem fx, SurePrep, and BNA Income Tax Planner for end-to-end workflow.',
  },
  {
    title: 'IRS & State Tax Research',
    tag: 'Technical Research',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    detail: 'Conduct in-depth technical tax research and draft formal responses and supporting documentation for IRS and state tax authority inquiries. Translate complex regulatory language into clear, actionable guidance for clients.',
  },
  {
    title: 'Client Relations & Communication',
    tag: 'Client Services',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80',
    detail: 'Communicate directly with clients to gather information, clarify requirements, and deliver a high-quality experience from onboarding through filing. Build trusted relationships in a hybrid professional environment.',
  },
  {
    title: 'Team Leadership & Captaincy',
    tag: 'Leadership',
    img: '/trey-running-1.jpeg',
    detail: 'Served as team captain for the Merrimack College Division I Cross Country & Track program (2024–25) and previously at Windham High School. Led by example, organized team events, and mentored teammates — bringing that same drive to the office.',
  },
  {
    title: 'AI in Accounting Workflows',
    tag: 'Innovation',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80',
    detail: 'Actively learning how AI tools — from ChatGPT and Claude to AI-integrated tax platforms — can enhance accuracy, reduce manual effort, and create better outcomes for clients. Exploring the intersection of accounting expertise and emerging technology.',
  },
]

export default function Highlights() {
  const [open, setOpen] = useState(null)

  return (
    <section id="highlights" style={{ padding: '120px 0 80px', background: '#080d1a' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 64px' }}>

        {/* Header */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <span className="section-tag">What I Do</span>
            <div style={{ width: 36, height: 2, background: '#C9A84C', margin: '14px 0 20px' }} />
            <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 1, letterSpacing: 1, color: '#fff' }}>
              Highlights
            </h2>
          </div>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', maxWidth: 280, lineHeight: 1.8, textAlign: 'right' }}>
            Hover to preview.<br />Click to expand.
          </p>
        </div>

        {/* Interactive list */}
        <div>
          {items.map((item, i) => (
            <div key={i}>
              <div
                className="highlights-row reveal"
                onClick={() => setOpen(open === i ? null : i)}
                style={{ paddingBottom: open === i ? 12 : 28 }}
              >
                <span className="hl-number">0{i + 1}</span>
                <span className="hl-title">{item.title}</span>
                <span className="hl-tag" style={{ display: window?.innerWidth > 700 ? 'block' : 'none' }}>{item.tag}</span>
                <span className="hl-arrow" style={{ transform: open === i ? 'rotate(45deg)' : 'none', color: open === i ? '#C9A84C' : 'rgba(255,255,255,0.3)' }}>
                  {open === i ? '×' : '+'}
                </span>
                {/* Hover image preview */}
                <div className="hl-img-wrap">
                  <img src={item.img} alt={item.title} />
                </div>
              </div>

              {/* Expandable content */}
              <div
                className="expand-panel"
                style={{
                  maxHeight: open === i ? 300 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.5s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, padding: '20px 0 32px 40px', alignItems: 'start' }}>
                  <p style={{ fontSize: 15, lineHeight: 1.9, color: 'rgba(255,255,255,0.6)', maxWidth: 600 }}>
                    {item.detail}
                  </p>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: 180, height: 120, objectFit: 'cover', flexShrink: 0, opacity: 0.8 }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #highlights > div { padding: 0 24px !important; }
          .hl-img-wrap { display: none !important; }
          .hl-title { font-size: 28px !important; }
        }
      `}</style>
    </section>
  )
}
