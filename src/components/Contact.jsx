export default function Contact() {
  return (
    <section id="contact" style={{ padding: '120px 0', background: '#0a0f1e', position: 'relative', overflow: 'hidden' }}>

      {/* Big background text */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: "'Bebas Neue', cursive",
        fontSize: 'clamp(120px, 20vw, 240px)',
        lineHeight: '1',
        color: 'rgba(255,255,255,0.02)',
        userSelect: 'none',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        letterSpacing: '-4px',
      }}>
        CONNECT
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 64px', position: 'relative' }}>

        <div className="reveal" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <span className="section-tag">Get In Touch</span>
          <div style={{ width: '40px', height: '2px', background: '#C9A84C', margin: '16px auto 24px' }} />
          <h2 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: 'clamp(48px, 8vw, 100px)',
            lineHeight: '1',
            letterSpacing: '1px',
            color: '#ffffff',
            marginBottom: '20px',
          }}>
            Let's Talk
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.8' }}>
            Whether you're exploring tax services, looking to connect professionally, or just want to say hello — I'd love to hear from you.
          </p>
        </div>

        {/* Contact cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '48px' }}>
          {[
            {
              label: 'Email',
              value: 'TR3YG@hotmail.com',
              href: 'mailto:TR3YG@hotmail.com',
              icon: '✉',
            },
            {
              label: 'Phone',
              value: '(603) 809-8487',
              href: 'tel:+16038098487',
              icon: '☎',
            },
            {
              label: 'LinkedIn',
              value: 'Trey Gonzalez',
              href: 'https://www.linkedin.com/in/trey-gonzalez-475659225',
              icon: 'in',
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="reveal card-hover"
              style={{
                display: 'block',
                background: '#111827',
                border: '1px solid rgba(255,255,255,0.06)',
                padding: '40px 32px',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
            >
              <div style={{
                width: '48px',
                height: '48px',
                border: '1px solid rgba(201,168,76,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '18px',
                color: '#C9A84C',
                fontFamily: item.icon === 'in' ? 'sans-serif' : 'inherit',
                fontWeight: item.icon === 'in' ? '700' : 'normal',
              }}>
                {item.icon}
              </div>
              <div style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '8px' }}>
                {item.label}
              </div>
              <div style={{ fontSize: '14px', color: '#C9A84C', fontWeight: '500', wordBreak: 'break-all' }}>
                {item.value}
              </div>
            </a>
          ))}
        </div>

        {/* Location */}
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '8px' }}>
            Based in
          </div>
          <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)' }}>
            Windham, NH · Open to opportunities
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #contact > div > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          #contact > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  )
}
