import { useState, useRef, useEffect } from 'react'

export default function About() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)
  const [panelHeight, setPanelHeight] = useState(0)

  // Measure actual content height for smooth animation
  useEffect(() => {
    if (panelRef.current) {
      setPanelHeight(panelRef.current.scrollHeight)
    }
  }, [open])

  return (
    <div id="about" className="h2-section">
      {/* AB[O]UT — clicking reveals bio, exactly like Colin's site */}
      <div
        className="h2-linkblock"
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}
      >
        <h2 className="h2-text">Ab</h2>
        {/* The O circle — contains Trey's bio text (Colin's design) */}
        <div className="h2-o about" style={{
          transition: 'width 0.6s cubic-bezier(0.16,1,0.3,1), height 0.6s cubic-bezier(0.16,1,0.3,1)',
          width: open ? '80vw' : '4em',
          height: open ? 'auto' : '4em',
          minHeight: open ? '200px' : undefined,
          borderRadius: open ? '2em' : '50em',
        }}>
          {open && (
            <div className="about-inner-text">
              <p>Hello, I'm Trey.</p>
              <br />
              <p>
                I've been in tax and accounting for over 3 years. My philosophy has always been
                one of precision — precision of analysis and client communication. Achieving
                compliance requires the discipline of thoroughness. Self-editing, non-stop
                learning, and humility are the cornerstones of my practice.
              </p>
              <br />
              <p>
                I'm a Tax Associate at PKF O'Connor Davies — one of America's Top 30 CPA firms — with
                a BBA in Accounting and Management from Merrimack College, where I also captained
                the Division I Cross Country and Track & Field teams.
              </p>
              <br />
              <p>Let me help you tell your financial story.</p>
            </div>
          )}
        </div>
        <h2 className="h2-text">UT</h2>
      </div>
    </div>
  )
}
