export default function Footer() {
  return (
    <footer style={{
      background: '#080d1a',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '40px 64px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: '20px',
            letterSpacing: '4px',
            color: '#C9A84C',
          }}>TG</span>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', letterSpacing: '1px' }}>
            Trey Gonzalez · Tax Associate
          </span>
        </div>

        <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
          {['#about', '#experience', '#education', '#athletics', '#contact'].map((href) => (
            <a
              key={href}
              href={href}
              style={{
                fontSize: '11px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.target.style.color = '#C9A84C'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}
            >
              {href.replace('#', '')}
            </a>
          ))}
        </div>

        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', letterSpacing: '1px' }}>
          © {new Date().getFullYear()} Trey Gonzalez
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          footer { padding: 32px 24px !important; }
          footer > div { justify-content: center !important; text-align: center; }
        }
      `}</style>
    </footer>
  )
}
