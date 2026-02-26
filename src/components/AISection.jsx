export default function AISection() {
  return (
    <section id="ai" style={{ padding: '120px 0', background: '#0a0f1e', position: 'relative', overflow: 'hidden' }}>

      {/* Animated grid bg */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />
      <div className="orb" style={{ width: 400, height: 400, background: '#C9A84C', top: 0, right: 0, opacity: 0.07 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 64px', position: 'relative' }}>

        <div className="reveal" style={{ marginBottom: 72 }}>
          <span className="section-tag">Innovation Mindset</span>
          <div style={{ width: 36, height: 2, background: '#C9A84C', margin: '14px 0 20px' }} />
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 1, color: '#fff' }}>
            Embracing <span className="gold-text">AI</span>
          </h2>
        </div>

        {/* Split layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, marginBottom: 32 }}>
          {/* Left — full image */}
          <div className="img-overlay reveal-left" style={{ minHeight: 460 }}>
            <img
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80"
              alt="AI and technology"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.7) hue-rotate(-10deg)' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,15,30,0.4), rgba(201,168,76,0.05))', zIndex: 1 }} />
            <div style={{ position: 'absolute', bottom: 32, left: 32, zIndex: 2 }}>
              <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 52, color: '#C9A84C', lineHeight: 1 }}>AI</div>
              <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Actively Learning</div>
            </div>
          </div>

          {/* Right — text */}
          <div className="reveal-right" style={{ background: '#111827', padding: '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 32, letterSpacing: 1, color: '#fff', marginBottom: 24, lineHeight: 1 }}>
              The Future of<br />Accounting Is AI
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: 'rgba(255,255,255,0.6)', marginBottom: 20 }}>
              While AI isn't on my resume yet, it's where I'm investing my personal time. The accountants who thrive in the next decade will be those who understand both the numbers and the technology that powers them.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>
              I'm actively exploring how AI tools can reduce manual effort in tax preparation, improve research accuracy, and create better client outcomes — not to replace human judgment, but to amplify it.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 8, height: 8, background: '#C9A84C', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#C9A84C' }}>Actively Learning</span>
            </div>
          </div>
        </div>

        {/* 4 horizontal capability strips */}
        <div className="reveal">
          {[
            { title: 'Language Models', desc: 'ChatGPT, Claude — for tax research, client drafts, regulatory summaries' },
            { title: 'AI in Tax Workflows', desc: 'Exploring AI integrations in CCH and ProSystem fx to cut prep time' },
            { title: 'Data Analysis', desc: 'AI-powered Excel tools and pattern recognition across financial datasets' },
            { title: 'Prompt Engineering', desc: 'Crafting precise prompts for accurate, actionable outputs in professional contexts' },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 32,
                padding: '20px 32px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                transition: 'background 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.05)'}
              onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent'}
            >
              <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 13, letterSpacing: 2, color: 'rgba(201,168,76,0.4)', width: 24, flexShrink: 0 }}>0{i + 1}</span>
              <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 20, letterSpacing: 1, color: '#fff', width: 220, flexShrink: 0 }}>{item.title}</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(201,168,76,0.5);} 50%{box-shadow:0 0 0 6px rgba(201,168,76,0);} }
        @media (max-width: 800px) {
          #ai > div > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) { #ai > div { padding: 0 24px !important; } }
      `}</style>
    </section>
  )
}
