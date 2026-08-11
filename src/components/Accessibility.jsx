export default function Accessibility() {
  return (
    <section id="accessibility" className="a11y-section" aria-labelledby="a11y-heading">
      <h2 id="a11y-heading" className="a11y-heading">Accessibility</h2>
      <div className="a11y-card">
        <p className="a11y-text">
          This site is built to be usable by everyone, including visitors who rely on
          assistive technologies.
        </p>
        <p className="a11y-text">
          It aims to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. The
          site uses semantic HTML and clear headings, supports keyboard navigation, respects
          your device's reduce-motion setting, provides text alternatives for meaningful
          images, and keeps color contrast readable.
        </p>
        <p className="a11y-text">
          Accessibility is ongoing work and some areas may still fall short. If you encounter a
          barrier or have a suggestion, reach out through the{' '}
          <a href="#contact" className="a11y-link">contact section</a> and it will be addressed
          promptly.
        </p>
      </div>
    </section>
  )
}
