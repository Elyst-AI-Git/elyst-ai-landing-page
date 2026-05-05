import React, { useState, useEffect, useRef, useCallback } from 'react'

const testimonials = [
  {
    name: 'Reshmi',
    role: 'AI for Juniors Parent',
    text: 'My son attended the program and really enjoyed it. The sessions were fun, engaging, and kept him actively involved throughout. He loved creating his own superhero-style images and even built a simple website using the Lovable app, which was a big highlight. Overall, it\'s a great program that encourages kids to be creative and actually build things with AI.',
    initials: 'R',
    color: '#004837',
  },
  {
    name: 'Sailna',
    role: 'AI for Juniors Parent',
    text: 'As a parent, I was happy to see my son so involved during the AI session. He got practical experience with posters, videos and website designing. He knows a bit already, but this still gave him a fresh perspective and boosted his interest. A good initiative for young learners.',
    initials: 'S',
    color: '#006851',
  },
  {
    name: 'Anusha',
    role: 'AI for Juniors Parent',
    text: 'Thank you Elyst AI for your guidance to understand the basics of AI.. I think my son get an idea about the language of future. Prompt Creation, web design using AI are so interesting for basic students..They can use this type of tools in many situations...😍',
    initials: 'A',
    color: '#00a36c',
  },
]

const CARD_TRANSITION = 'transform 0.58s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.58s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.58s ease'
const AUTO_ADVANCE_MS = 5000
const LEAVE_DURATION_MS = 580

function getCardStyle(pos, isLeaving, dir) {
  if (isLeaving) {
    // dir 1 = fly right, dir -1 = fly left
    const x = dir === 1 ? '100%' : '-100%'
    const r = dir === 1 ? '14deg' : '-14deg'
    return {
      transform: `translateX(${x}) rotate(${r}) scale(0.80)`,
      opacity: 0.75,
      zIndex: 10,
      transition: CARD_TRANSITION,
    }
  }
  const styles = [
    // Front — fully visible
    { transform: 'translateY(0px) rotate(0deg) scale(1)',                           zIndex: 3, boxShadow: '0 8px 40px rgba(3,98,76,0.18)' },
    // Middle — peek left
    { transform: 'translateY(14px) translateX(-6px) rotate(-3.5deg) scale(0.955)', zIndex: 2, boxShadow: '0 4px 24px rgba(3,98,76,0.10)' },
    // Back — peek right
    { transform: 'translateY(26px) translateX(6px) rotate(3.5deg) scale(0.915)',   zIndex: 1, boxShadow: '0 2px 12px rgba(3,98,76,0.07)' },
  ]
  return { ...styles[pos], transition: CARD_TRANSITION }
}

export default function TestimonialDeck() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [leavingIndex, setLeavingIndex] = useState(null)
  const [leavingDir, setLeavingDir] = useState(1)  // 1 = right, -1 = left
  const dirRef = useRef(1)                           // tracks next direction
  const timerRef = useRef(null)
  const isAnimatingRef = useRef(false)

  const advance = useCallback(() => {
    if (isAnimatingRef.current) return
    isAnimatingRef.current = true
    const dir = dirRef.current
    dirRef.current = dir * -1                        // flip for next time
    setLeavingDir(dir)
    setLeavingIndex(activeIndex)
    setTimeout(() => {
      setActiveIndex(prev => (prev + 1) % 3)
      setLeavingIndex(null)
      isAnimatingRef.current = false
    }, LEAVE_DURATION_MS)
  }, [activeIndex])

  useEffect(() => {
    timerRef.current = setInterval(advance, AUTO_ADVANCE_MS)
    return () => clearInterval(timerRef.current)
  }, [advance])

  const handleClick = () => {
    clearInterval(timerRef.current)
    advance()
    timerRef.current = setInterval(advance, AUTO_ADVANCE_MS)
  }

  return (
    <section
      style={{
        background: 'linear-gradient(160deg, #d6fff5 0%, #bcfeef 100%)',
        padding: 'clamp(72px, 10vw, 120px) clamp(20px, 6vw, 80px)',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .tdeck-card {
          position: absolute;
          inset: 0;
          background: #ffffff;
          border-radius: 20px;
          padding: clamp(18px, 4vw, 44px);
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 2vw, 20px);
          cursor: pointer;
          user-select: none;
          border: 1px solid rgba(3,98,76,0.08);
          will-change: transform, opacity;
          overflow: hidden;
        }
        /* White scrim sits on top of card content to dim back cards
           without making the card itself transparent */
        .tdeck-scrim {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: rgba(255,255,255,0);
          transition: background 0.58s cubic-bezier(0.4,0,0.2,1);
          pointer-events: none;
          z-index: 1;
        }
        .tdeck-scrim.pos-1 { background: rgba(255,255,255,0.30); }
        .tdeck-scrim.pos-2 { background: rgba(255,255,255,0.55); }

        .tdeck-quote {
          width: clamp(28px, 4vw, 40px);
          height: clamp(28px, 4vw, 40px);
          flex-shrink: 0;
        }
        .tdeck-text {
          font-family: 'DM Sans', sans-serif;
          letter-spacing: -0.025em;
          font-size: clamp(1rem, 2.6vw, 1.2rem);
          line-height: 1.7;
          color: #1a4034;
          flex: 1;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
        }
        .tdeck-avatar-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          padding-top: clamp(10px, 2vw, 16px);
          border-top: 1px solid rgba(3,98,76,0.08);
        }
        .tdeck-avatar {
          width: clamp(34px, 5vw, 44px);
          height: clamp(34px, 5vw, 44px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(0.7rem, 1.5vw, 0.9rem);
          color: #fff;
          flex-shrink: 0;
        }
        .tdeck-name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: #004837;
          letter-spacing: -0.05em;
          line-height: 1.2;
        }
        .tdeck-role {
          font-family: 'DM Sans', sans-serif;
          letter-spacing: -0.025em;
          font-size: 0.82rem;
          color: #2c655b;
          margin-top: 2px;
        }
        .tdeck-dots {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 28px;
        }
        .tdeck-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(3,98,76,0.2);
          transition: background 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }
        .tdeck-dot.active {
          background: #004837;
          transform: scale(1.25);
        }
        .tdeck-hint {
          font-family: 'DM Sans', sans-serif;
          letter-spacing: -0.025em;
          font-size: 0.8rem;
          color: rgba(3,98,76,0.5);
          text-align: center;
          margin-top: 14px;
        }
      `}</style>

      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(48px, 7vw, 80px)' }}>
          <span style={{
            display: 'inline-block',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: '0.75rem',
            letterSpacing: '-0.025em',
            textTransform: 'uppercase',
            color: '#004837',
            background: 'rgba(3,98,76,0.1)',
            padding: '6px 16px',
            borderRadius: '999px',
            marginBottom: '20px',
          }}>
            What Parents Say
          </span>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            color: '#004837',
            lineHeight: 1.15,
            letterSpacing: '-0.05em',
            margin: 0,
          }}>
            Real results the parents saw.
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '-0.025em',
            fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
            color: '#2c655b',
            marginTop: '14px',
            lineHeight: 1.6,
          }}>
            Every card is a story from someone who started exactly where you are now.
          </p>
        </div>

        {/* Deck */}
        <div
          onClick={handleClick}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '620px',
            margin: '0 auto',
            height: 'clamp(360px, 65vw, 420px)',
            cursor: 'pointer',
          }}
        >
          {testimonials.map((t, i) => {
            const isLeaving = leavingIndex === i
            const pos = ((i - activeIndex + 3) % 3)
            return (
              <div
                key={i}
                className="tdeck-card"
                style={getCardStyle(pos, isLeaving, leavingDir)}
              >
                {/* Scrim overlay dims back cards without making content transparent */}
                <div className={`tdeck-scrim${pos === 1 ? ' pos-1' : pos === 2 ? ' pos-2' : ''}`} />

                {/* Quote icon */}
                <svg className="tdeck-quote" viewBox="0 0 40 40" fill="none">
                  <path d="M4 20C4 11.163 11.163 4 20 4" stroke="#00DF82" strokeWidth="2" strokeLinecap="round"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 14H8C6.895 14 6 14.895 6 16V24C6 25.105 6.895 26 8 26H14L11 32H15L18 26V16C18 14.895 17.105 14 16 14ZM30 14H22C20.895 14 20 14.895 20 16V24C20 25.105 20.895 26 22 26H28L25 32H29L32 26V16C32 14.895 31.105 14 30 14Z" fill="#004837" fillOpacity="0.12"/>
                </svg>

                {/* Testimonial text */}
                <p className="tdeck-text">"{t.text}"</p>

                {/* Avatar + name */}
                <div className="tdeck-avatar-row">
                  <div className="tdeck-avatar" style={{ background: t.color }}>{t.initials}</div>
                  <div>
                    <div className="tdeck-name text-left">{t.name}</div>
                    {t.role && <div className="tdeck-role text-left">{t.role}</div>}
                  </div>
                  {/* Stars */}
                  <div style={{ marginLeft: 'auto', display: 'flex', gap: '3px' }}>
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} width="15" height="15" viewBox="0 0 15 15" fill="#00DF82">
                        <path d="M7.5 1l1.545 4.757H14l-4.045 2.938L11.5 13.5 7.5 10.562 3.5 13.5l2.045-4.805L1.5 5.757H5.955z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Dots */}
        <div className="tdeck-dots">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`tdeck-dot${i === activeIndex ? ' active' : ''}`}
              onClick={(e) => { e.stopPropagation(); handleClick() }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
