export default function Contact() {
  return (
    <section id="contact" style={{ padding: '120px 0', background: '#0a0f1e', position: 'relative', overflow: 'hidden' }}>

      {/* Big bg word */}
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(120px,18vw,220px)', lineHeight: 1, color: 'rgba(255,255,255,0.015)', userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap' }}>
        CONNECT
      </div>

      <div className="orb" style={{ width: 500, height: 500, background: '#C9A84C', bottom: -200, right: -150, opacity: 0.07 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 64px', position: 'relative' }}>

        <div className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="section-tag">Get In Touch</span>
          <div style={{ width: 36, height: 2, background: '#C9A84C', margin: '14px auto 20px' }} />
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(56px, 10vw, 120px)', lineHeight: 1, color: '#fff', marginBottom: 20 }}>
            Let's Talk
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', maxWidth: 480, margin: '0 auto', lineHeight: 1.9 }}>
            Whether you're exploring tax services, looking to connect professionally, or want to discuss where accounting and AI are heading — reach out.
          </p>
        </div>

        {/* 3 contact channels */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, marginBottom: 48 }}>
          {[
            { label: 'Email', value: 'TR3YG@hotmail.com', href: 'mailto:TR3YG@hotmail.com', icon: '✉', detail: 'Preferred method' },
            { label: 'Phone', value: '(603) 809-8487', href: 'tel:+16038098487', icon: '☎', detail: 'Windham, NH' },
            { label: 'LinkedIn', value: 'Trey Gonzalez', href: 'https://www.linkedin.com/in/trey-gonzalez-475659225', icon: 'in', detail: 'Connect professionally' },
          ].map((item, i) => (
            <a
              key={i}
              className="reveal"
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                display: 'block',
                background: i === 1 ? '#C9A84C' : '#111827',
                padding: '48px 36px',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'transform 0.3s ease, background 0.3s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; if (i !== 1) e.currentTarget.style.background = '#151e30' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; if (i !== 1) e.currentTarget.style.background = '#111827' }}
            >
              <div style={{ fontSize: 28, marginBottom: 16, color: i === 1 ? '#0a0f1e' : '#C9A84C', fontFamily: item.icon === 'in' ? 'sans-serif' : 'inherit', fontWeight: item.icon === 'in' ? 700 : 'normal' }}>{item.icon}</div>
              <div style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: i === 1 ? 'rgba(10,15,30,0.5)' : 'rgba(255,255,255,0.3)', marginBottom: 10 }}>{item.label}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: i === 1 ? '#0a0f1e' : '#fff', marginBottom: 6, wordBreak: 'break-all' }}>{item.value}</div>
              <div style={{ fontSize: 12, color: i === 1 ? 'rgba(10,15,30,0.55)' : 'rgba(255,255,255,0.35)' }}>{item.detail}</div>
            </a>
          ))}
        </div>

        {/* Location bar */}
        <div className="reveal" style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 40 }}>
          <div style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 8 }}>Based in</div>
          <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)' }}>Windham, NH · Open to opportunities</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) { #contact > div > div[style*="repeat(3"] { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { #contact > div { padding: 0 24px !important; } }
      `}</style>
    </section>
  )
}
