export default function Footer() {
  return (
    <footer className="site-footer">
      <nav aria-label="Footer" className="footer-nav">
        <a href="#accessibility" className="footer-link">Accessibility</a>
      </nav>
      <p className="footer-copyright">
        © Trey Gonzalez {new Date().getFullYear()}
      </p>
    </footer>
  )
}
