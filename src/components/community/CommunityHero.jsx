import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const statements = [
  {
    num: '01',
    headline: 'Not smarter. Better room.',
    body: 'Not because they are more technical. Because they are in conversations you have not been part of yet.',
  },
  {
    num: '02',
    headline: 'LinkedIn won\'t close the gap.',
    body: 'Following more people doesn\'t move you forward. Being in the right circle does.',
  },
  {
    num: '03',
    headline: 'This is that circle.',
    body: 'Elyst AI Circle — small by design, serious by default.',
  },
]

const CommunityHero = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setLoaded(true), 60) }, [])

  const anim = (delay) => ({
    initial: { opacity: 0, y: 32 },
    animate: loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 },
    transition: { delay: delay / 1000, duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  })

  const cardAnim = (delay) => ({
    initial: { opacity: 0, y: 24 },
    animate: loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { delay: delay / 1000, duration: 0.65, ease: 'easeOut' },
  })

  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#060d09',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '130px 24px 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow behind headline */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        height: 400,
        background: 'radial-gradient(ellipse, rgba(46,200,102,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Dot grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(46,200,102,0.15) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        opacity: 0.5,
        pointerEvents: 'none',
      }} />

      {/* Fade edges of dot grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, #060d09 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, width: '100%', textAlign: 'center' }}>

        {/* Badge */}
        <motion.div {...anim(0)} style={{ display: 'flex', justifyContent: 'center', marginBottom: 36 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: 'rgba(46,200,102,0.1)',
            border: '1px solid rgba(46,200,102,0.3)',
            borderRadius: 999,
            padding: '9px 20px',
            color: '#2ec866',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            <span style={{
              width: 6, height: 6, background: '#2ec866', borderRadius: '50%',
              animation: 'heroPulse 2s infinite',
              display: 'inline-block', flexShrink: 0,
            }} />
            Now Accepting Founding Members &nbsp;·&nbsp; 25 Spots Only
          </div>
        </motion.div>

        {/* Headline — 3-tier visual hierarchy */}
        <div style={{ marginBottom: 56 }}>
          <motion.div
            {...anim(100)}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}
          >
            The people in this circle
          </motion.div>

          <motion.h1
            {...anim(180)}
            style={{ margin: 0, lineHeight: 1.0 }}
          >
            <span
              className="font-display"
              style={{
                display: 'block',
                fontSize: 'clamp(3.2rem, 9vw, 7rem)',
                fontWeight: 900,
                color: '#ffffff',
                letterSpacing: '-0.03em',
              }}
            >
              are already
            </span>
            <span
              className="font-display"
              style={{
                display: 'block',
                fontSize: 'clamp(3.2rem, 9vw, 7rem)',
                fontWeight: 900,
                color: '#2ec866',
                letterSpacing: '-0.03em',
              }}
            >
              ahead of you.
            </span>
          </motion.h1>

          <motion.div
            {...anim(280)}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.55)',
              marginTop: 12,
            }}
          >
            Join them.
          </motion.div>
        </div>

        {/* Statement cards — 3 columns desktop, 1 column mobile */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 12,
            marginBottom: 48,
          }}
          className="hero-cards"
        >
          {statements.map(({ num, headline, body }, i) => (
            <motion.div
              key={num}
              {...cardAnim(380 + i * 80)}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16,
                padding: '24px 20px',
                textAlign: 'left',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                fontWeight: 800,
                color: '#2ec866',
                letterSpacing: '0.12em',
                marginBottom: 10,
              }}>
                {num}
              </div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: '#ffffff',
                marginBottom: 8,
                lineHeight: 1.3,
              }}>
                {headline}
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.6,
              }}>
                {body}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          {...anim(620)}
          style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#"
            className="font-body font-bold"
            style={{
              background: '#2ec866',
              color: '#060d09',
              borderRadius: 999,
              padding: '14px 32px',
              fontSize: '0.97rem',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
          >
            Apply for a Founding Spot →
          </a>
          <a
            href="#what-you-join"
            className="font-body font-semibold"
            style={{
              border: '1.5px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.7)',
              borderRadius: 999,
              padding: '14px 28px',
              fontSize: '0.97rem',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
              e.currentTarget.style.color = '#ffffff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
            }}
          >
            See What's Inside ↓
          </a>
        </motion.div>
      </div>

      <style>{`
        @keyframes heroPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.6)} }
        @media (max-width: 640px) {
          .hero-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default CommunityHero
