import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'


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
        <div style={{ marginBottom: 32 }}>
          <motion.div
            {...anim(100)}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 4,
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

        {/* Primary CTA */}
        <motion.div
          {...anim(320)}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, marginBottom: 48 }}
        >
          <a
            href="https://forms.gle/fSmbvXiRoAqLK3ky7"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-bold"
            style={{
              background: '#2ec866',
              color: '#060d09',
              borderRadius: 999,
              padding: '15px 36px',
              fontSize: '1rem',
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
            className="font-body"
            style={{
              color: 'rgba(255,255,255,0.38)',
              fontSize: '0.85rem',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.38)' }}
          >
            See what's inside ↓
          </a>
        </motion.div>

        {/* Body paragraph */}
        <motion.div
          {...cardAnim(420)}
          style={{
            maxWidth: 620,
            margin: '0 auto 0',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.85,
            margin: 0,
          }}>
            At some point, you noticed people around you getting more out of AI than you.
            Not because they're smarter — but because they're closer to how it's actually being used.
            In the right rooms, with the right people, applying things you haven't seen yet.
          </p>
        </motion.div>

        {/* Punch line */}
        <motion.div
          {...cardAnim(500)}
          style={{
            maxWidth: 560,
            margin: '40px auto 0',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.93rem, 1.7vw, 1.02rem)',
            color: 'rgba(255,255,255,0.35)',
            lineHeight: 1.8,
            margin: '0 0 4px',
          }}>
            That gap doesn't close by following more people on LinkedIn.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.93rem, 1.7vw, 1.02rem)',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.8,
            margin: '0 0 4px',
          }}>
            It closes by being in the right circle.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.8,
            margin: 0,
            fontWeight: 600,
          }}>
            This is that circle — Elyst AI Circle.
          </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes heroPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.6)} }
      `}</style>
    </section>
  )
}

export default CommunityHero
