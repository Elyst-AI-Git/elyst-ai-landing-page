import { motion } from 'framer-motion'

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const cards = [
  {
    label: 'The Professional',
    desc: 'You\'re good at what you do. You know AI is changing your field faster than most people around you are willing to admit.',
    checks: [
      'You\'ve tried AI tools but none of it has really stuck',
      'You want to know what\'s actually worth your time and what isn\'t',
      'You\'re done learning in isolation and want to be around people who are ahead',
    ],
  },
  {
    label: 'The Business Owner / Founder',
    desc: 'You\'re building something. And you\'re realising that the people who figure out AI first will have an edge that\'s very hard to close later.',
    checks: [
      'You\'re not looking for a tool recommendation — you want clarity on where to actually start',
      'Every week you don\'t move on this, someone in your space is',
      'You want to be in a room where people are building with AI, not just talking about it',
    ],
    dark: true,
  },
]

const CommunityForWho = () => (
  <section
    id="for-who"
    style={{
      background: '#f5f9f6',
      padding: '0 0 96px',
    }}
  >
    <div className="max-w-275 mx-auto px-(--section-px)" style={{ paddingTop: 96 }}>

      {/* Heading */}
      <motion.div {...anim(0)} style={{ marginBottom: 12 }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.72rem',
          fontWeight: 800,
          color: '#1a7a4a',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: 12,
        }}>
          Who this is for
        </span>
        <h2
          className="font-display font-bold"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', color: '#0d1a10', lineHeight: 1.15, marginBottom: 0 }}
        >
          Sound like you?
        </h2>
      </motion.div>

      {/* Opening line — highlighted, not a paragraph */}
      <motion.div
        {...anim(0.1)}
        style={{ marginBottom: 40 }}
      >
        <div style={{
          display: 'inline-block',
          background: 'rgba(26,122,74,0.08)',
          border: '1px solid rgba(26,122,74,0.18)',
          borderRadius: 10,
          padding: '12px 18px',
        }}>
          <p className="font-body" style={{ color: '#1a4a2e', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
            If you work on a computer, use AI occasionally but haven't made it stick, and feel like the gap is quietly growing —
            {' '}<strong>you're exactly who this was built for.</strong>
          </p>
        </div>
      </motion.div>

      {/* 2-column cards on desktop, stacked on mobile */}
      <div className="for-who-grid" style={{ display: 'grid', gap: 16, marginBottom: 36 }}>
        {cards.map(({ label, desc, checks, dark }, i) => (
          <motion.div
            key={label}
            {...anim(0.15 + i * 0.1)}
            style={{
              background: dark ? '#0d3d25' : '#ffffff',
              border: `1.5px solid ${dark ? '#1a7a4a' : '#e4f2e9'}`,
              borderRadius: 20,
              padding: '32px 28px',
              boxShadow: dark ? '0 12px 40px rgba(13,61,37,0.25)' : '0 2px 12px rgba(0,0,0,0.04)',
            }}
          >
            <div
              className="font-body font-bold"
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: dark ? '#2ec866' : '#1a7a4a',
                marginBottom: 12,
              }}
            >
              {label}
            </div>
            <div
              className="font-body"
              style={{ fontSize: '0.95rem', color: dark ? 'rgba(255,255,255,0.65)' : '#3a5a45', lineHeight: 1.65, marginBottom: 20, fontStyle: 'italic' }}
            >
              {desc}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {checks.map((c) => (
                <li
                  key={c}
                  className="font-body text-sm"
                  style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: dark ? 'rgba(255,255,255,0.85)' : '#1a3a28', lineHeight: 1.6 }}
                >
                  <span style={{ color: dark ? '#2ec866' : '#1a7a4a', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Closing line — styled as a callout */}
      <motion.div {...anim(0.35)}>
        <div style={{
          borderLeft: '3px solid #2ec866',
          paddingLeft: 18,
        }}>
          <p className="font-body" style={{ color: '#3a6a4a', fontSize: '1rem', margin: 0, lineHeight: 1.6 }}>
            If either of those sounds like you,{' '}
            <strong style={{ color: '#0d3d25' }}>the application takes two minutes.</strong>
          </p>
        </div>
      </motion.div>
    </div>

    <style>{`
      .for-who-grid { grid-template-columns: repeat(2, 1fr); }
      @media (max-width: 640px) { .for-who-grid { grid-template-columns: 1fr; } }
    `}</style>
  </section>
)

export default CommunityForWho
