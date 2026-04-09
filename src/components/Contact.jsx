import { useState } from 'react'

export default function Contact() {
  const [open, setOpen] = useState(false)

  return (
    <div id="contact" className="h2-section">
      {/* c[O]ntact — Colin's exact pattern */}
      <div
        className="h2-linkblock"
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}
      >
        <h2 className="h2-text">c</h2>
        <div className="h2-o contact">
          {/* Yellow "How can I Help?" text inside the O — Colin's exact treatment */}
          <div style={{
            color: '#f8cb74',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: 1,
            padding: '0 8px',
            textAlign: 'center',
            lineHeight: 1.3,
            opacity: open ? 1 : 0,
            transition: 'opacity 0.3s',
          }}>
            How can I Help?
          </div>
        </div>
        <h2 className="h2-text">ntact</h2>
      </div>

      {/* Contact info panel — slides down on click */}
      <div style={{
        overflow: 'hidden',
        maxHeight: open ? '300px' : '0',
        transition: 'max-height 0.6s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <div style={{ padding: '20px 20px 10px', fontSize: '16px' }}>
          <p className="contact-text">Contact me at </p>
          <a href="mailto:TR3YG@hotmail.com" className="contact-email-link">
            TR3YG@hotmail.com
          </a>
          <p className="contact-text">, or connect on LinkedIn.</p>
        </div>
      </div>

      {/* Social icons — Colin's exact footer */}
      <div className="social-icons-section">
        <a
          href="https://www.linkedin.com/in/trey-gonzalez-475659225"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
        >
          <svg
            className="social-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href="mailto:TR3YG@hotmail.com"
          className="social-icon-link"
        >
          <svg
            className="social-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </a>
      </div>
    </div>
  )
}
