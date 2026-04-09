import { useEffect, useRef } from 'react'

const marqueeText = 'Tax Associate • CPA Candidate • Merrimack College • PKF O\'Connor Davies • Division I Athlete • Problem Solver • Organiser of Numbers • Strategic Thinker • '

export default function Hero() {
  const treyPupilRef = useRef(null)
  const gonzalezPupilRef = useRef(null)

  // Eye follows mouse — Colin's signature interaction
  useEffect(() => {
    const onMouseMove = (e) => {
      const move = (pupilEl, eyeEl) => {
        if (!pupilEl || !eyeEl) return
        const rect = eyeEl.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = e.clientX - cx
        const dy = e.clientY - cy
        const dist = Math.sqrt(dx * dx + dy * dy)
        const maxMove = rect.width * 0.18
        const scale = Math.min(dist, maxMove) / Math.max(dist, 1)
        pupilEl.style.transform = `translate(${dx * scale}px, ${dy * scale}px)`
      }
      move(treyPupilRef.current, treyPupilRef.current?.parentElement)
      move(gonzalezPupilRef.current, gonzalezPupilRef.current?.parentElement)
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <>
      {/* TREY — Colin's "COLIN" equivalent */}
      <div className="title-container-trey">
        <div className="title-line">
          <span className="title-normal-letter">TR</span>
          {/* "E" gets the eye treatment — closest to Colin's O */}
          <div className="title-eye-whites">
            <div className="title-eye-pupil" ref={treyPupilRef} />
          </div>
          <span className="title-normal-letter">Y</span>
        </div>
      </div>

      {/* Marquee — Colin's black pill with scrolling text */}
      <div className="marquee-outer">
        <div className="marquee-box">
          <div className="marquee-track">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="marquee-text">{marqueeText}</span>
            ))}
          </div>
        </div>
      </div>

      {/* GONZALEZ — Colin's "MOY" equivalent */}
      <div className="title-container-gonzalez">
        <div className="title-line">
          <span className="title-normal-letter">G</span>
          {/* "O" gets the eye treatment */}
          <div className="title-eye-whites">
            <div className="title-eye-pupil" ref={gonzalezPupilRef} />
          </div>
          <span className="title-normal-letter">NZALEZ</span>
        </div>
      </div>

      {/* Scroll down arrow — Colin's scroll indicator */}
      <div className="scroll-block">
        <a href="#about">
          <svg className="scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </>
  )
}
