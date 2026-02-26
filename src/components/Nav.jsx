import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Athletics', href: '#athletics' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.4s ease, box-shadow 0.4s ease',
        background: scrolled ? 'rgba(10, 15, 30, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(201, 168, 76, 0.15)' : 'none',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 32px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: '22px',
            letterSpacing: '4px',
            color: '#C9A84C',
          }}>TG</span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className="hidden-mobile">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
          className="show-mobile"
        >
          <span style={{ width: '24px', height: '1px', background: menuOpen ? '#C9A84C' : '#ffffff', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span style={{ width: '24px', height: '1px', background: menuOpen ? '#C9A84C' : '#ffffff', display: 'block', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ width: '24px', height: '1px', background: menuOpen ? '#C9A84C' : '#ffffff', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(10, 15, 30, 0.98)',
          padding: '24px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          borderTop: '1px solid rgba(201, 168, 76, 0.2)',
        }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              style={{ fontSize: '14px' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
