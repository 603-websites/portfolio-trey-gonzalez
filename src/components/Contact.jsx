export default function Contact() {
  return (
    <section id="contact" style={{ padding: '120px 0', background: '#fff', position: 'relative', overflow: 'hidden' }}>

      {/* Big background word — Colin's typographic bg element */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        fontFamily: "'Oswald', sans-serif",
        fontSize: 'clamp(100px, 16vw, 200px)',
        fontWeight: 700,
        lineHeight: 1,
        color: 'rgba(0,0,0,0.03)',
        userSelect: 'none',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        textTransform: 'uppercase',
      }}>
        CONTACT
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 80px', position: 'relative' }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: 72 }}>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '5px', textTransform: 'uppercase', color: '#999', marginBottom: 16 }}>
            Contact
          </div>
          <div style={{ width: 32, height: 1, background: '#111', marginBottom: 20 }} />
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(52px, 9vw, 110px)', fontWeight: 700, lineHeight: 1, color: '#111', textTransform: 'uppercase', letterSpacing: -1, marginBottom: 20 }}>
            Get In Touch
          </h2>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14.5, color: '#888', maxWidth: 480, lineHeight: 1.9 }}>
            Whether you're exploring tax services, looking to connect professionally, or just want to reach out — I'd love to hear from you.
          </p>
        </div>

        {/* 3 contact channels — Colin's card grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, marginBottom: 48 }}>
          {[
            { label: 'Email', value: 'TR3YG@hotmail.com', href: 'mailto:TR3YG@hotmail.com', icon: '✉', detail: 'Preferred method', dark: false },
            { label: 'Phone', value: '(603) 809-8487', href: 'tel:+16038098487', icon: '☎', detail: 'Windham, NH', dark: true },
            { label: 'LinkedIn', value: 'Trey Gonzalez', href: 'https://www.linkedin.com/in/trey-gonzalez-475659225', icon: 'in', detail: 'Connect professionally', dark: false },
          ].map((item, i) => (
            <a
              key={i}
              className="reveal"
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                display: 'block',
                background: item.dark ? '#111' : '#f5f4f0',
                padding: '52px 36px',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                border: item.dark ? 'none' : '1px solid #e8e8e4',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{ fontSize: 26, marginBottom: 18, color: item.dark ? '#f5f4f0' : '#111', fontFamily: item.icon === 'in' ? 'sans-serif' : 'inherit', fontWeight: item.icon === 'in' ? 700 : 'normal' }}>
                {item.icon}
              </div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: '4px', textTransform: 'uppercase', color: item.dark ? 'rgba(255,255,255,0.4)' : '#aaa', marginBottom: 10 }}>
                {item.label}
              </div>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, fontWeight: 600, color: item.dark ? '#fff' : '#111', marginBottom: 6, wordBreak: 'break-all' }}>
                {item.value}
              </div>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, color: item.dark ? 'rgba(255,255,255,0.35)' : '#bbb' }}>
                {item.detail}
              </div>
            </a>
          ))}
        </div>

        {/* Location bar */}
        <div className="reveal" style={{ textAlign: 'center', borderTop: '1px solid #e8e8e4', paddingTop: 40 }}>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: '4px', textTransform: 'uppercase', color: '#ccc', marginBottom: 10 }}>Based in</div>
          <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: '#888' }}>Windham, NH · Open to opportunities</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #contact > div > div[style*="repeat(3"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          #contact > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  )
}
