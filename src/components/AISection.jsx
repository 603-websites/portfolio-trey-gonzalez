const aiTools = [
  {
    name: 'ChatGPT & Claude',
    desc: 'Using AI assistants to accelerate tax research, draft client communications, and synthesize complex regulatory guidance',
    category: 'Language Models',
  },
  {
    name: 'AI in Tax Workflows',
    desc: 'Exploring how AI integrations in platforms like CCH and ProSystem fx can reduce preparation time and improve accuracy',
    category: 'Tax Technology',
  },
  {
    name: 'Data Analysis with AI',
    desc: 'Leveraging AI-powered Excel tools and Python libraries to analyze financial datasets and flag anomalies faster',
    category: 'Analytics',
  },
  {
    name: 'Prompt Engineering',
    desc: 'Learning to craft precise prompts that extract accurate, actionable results from large language models in professional contexts',
    category: 'Skill Development',
  },
]

export default function AISection() {
  return (
    <section id="ai" style={{ padding: '120px 0', background: '#0a0f1e', position: 'relative', overflow: 'hidden' }}>

      {/* Decorative grid lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 64px', position: 'relative' }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: '72px' }}>
          <span className="section-tag">Innovation Mindset</span>
          <div style={{ width: '40px', height: '2px', background: '#C9A84C', margin: '16px 0 24px' }} />
          <h2 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: 'clamp(48px, 6vw, 80px)',
            lineHeight: '1',
            letterSpacing: '1px',
            color: '#ffffff',
          }}>
            Embracing<br /><span className="gold-text">Artificial Intelligence</span>
          </h2>
        </div>

        {/* Intro block */}
        <div className="reveal" style={{
          background: 'linear-gradient(135deg, #111827, #0f1720)',
          border: '1px solid rgba(201,168,76,0.2)',
          padding: '48px',
          marginBottom: '48px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center',
        }}>
          <div>
            <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '32px', letterSpacing: '1px', color: '#ffffff', marginBottom: '20px', lineHeight: '1' }}>
              THE FUTURE OF<br />ACCOUNTING IS AI
            </h3>
            <p style={{ fontSize: '15px', lineHeight: '1.9', color: 'rgba(255,255,255,0.65)' }}>
              While AI isn't on my resume yet, it's where I'm investing my personal time. I believe the accountants who thrive in the next decade will be those who understand both the numbers and the technology that powers them.
            </p>
          </div>
          <div>
            <p style={{ fontSize: '15px', lineHeight: '1.9', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
              I'm actively learning how AI tools can reduce manual effort in tax preparation, improve research accuracy, and create better client experiences — not to replace the human judgment that defines great accounting, but to amplify it.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '8px', height: '8px', background: '#C9A84C', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#C9A84C' }}>Actively Learning</span>
            </div>
          </div>
        </div>

        {/* Tools grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {aiTools.map((tool, i) => (
            <div
              key={i}
              className="reveal card-hover"
              style={{
                background: '#111827',
                border: '1px solid rgba(255,255,255,0.06)',
                padding: '32px',
                transition: 'border-color 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
            >
              <div style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(201,168,76,0.6)', marginBottom: '12px' }}>
                {tool.category}
              </div>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#ffffff', marginBottom: '12px' }}>{tool.name}</h4>
              <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(255,255,255,0.55)' }}>{tool.desc}</p>

              {/* Subtle number */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                right: '20px',
                fontFamily: "'Bebas Neue', cursive",
                fontSize: '64px',
                color: 'rgba(255,255,255,0.03)',
                lineHeight: '1',
                userSelect: 'none',
              }}>
                0{i + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="reveal" style={{
          marginTop: '48px',
          padding: '32px 40px',
          background: 'rgba(201,168,76,0.06)',
          border: '1px solid rgba(201,168,76,0.15)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff', marginBottom: '4px' }}>
              Looking to discuss AI in accounting?
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>
              Always open to conversations about where the industry is heading.
            </div>
          </div>
          <a
            href="#contact"
            style={{
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#C9A84C',
              border: '1px solid rgba(201,168,76,0.4)',
              padding: '12px 24px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.target.style.background = 'rgba(201,168,76,0.1)'; e.target.style.borderColor = '#C9A84C' }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.borderColor = 'rgba(201,168,76,0.4)' }}
          >
            Let's Connect →
          </a>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(201,168,76,0.4); }
          50% { opacity: 0.7; box-shadow: 0 0 0 6px rgba(201,168,76,0); }
        }
        @media (max-width: 800px) {
          #ai > div > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }
          #ai > div > div:nth-child(4) {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          #ai > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  )
}
