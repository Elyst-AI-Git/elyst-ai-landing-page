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
    desc: 'You\'re good at what you do — but AI is moving faster than most people admit.',
    checks: [
      'You\'ve tried tools, but nothing has really stuck',
      'You want to know what\'s actually worth your time',
      'You want to be around people who are ahead, not guessing',
    ],
    dark: false,
  },
  {
    label: 'The Business Owner / Founder',
    desc: 'You\'re building something — and you know AI will change how it works.',
    checks: [
      'You don\'t want more tools, you want clarity on where to start',
      'Every week you delay, someone else moves ahead',
      'You want to be around people actually building, not just talking',
    ],
    dark: true,
  },
]

const CommunityForWho = () => (
  <section
    id="for-who"
    style={{ background: '#f5f9f6', padding: '96px 0' }}
  >
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(24px, 6vw, 100px)' }}>

      {/* Heading */}
      <motion.div {...anim(0)} style={{ marginBottom: 16 }}>
        <h2
          className="font-display font-bold"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', color: '#0d1a10', lineHeight: 1.15, marginBottom: 0, textAlign: 'center' }}
        >
          Who this is for
        </h2>
      </motion.div>

      {/* Opening line */}
      <motion.p
        {...anim(0.1)}
        className="font-body"
        style={{ color: '#4a6a55', fontSize: '1rem', lineHeight: 1.8, maxWidth: 720, marginBottom: 48, textAlign: 'center', margin: '0 auto 48px' }}
      >
        If you work on a computer, use AI occasionally but feel like you are lagging behind in AI, this circle is for you.
      </motion.p>

      {/* 2-column cards */}
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
            {/* Popping heading */}
            <div
              className="font-display font-bold"
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                color: dark ? '#2ec866' : '#0d3d25',
                lineHeight: 1.2,
                marginBottom: 14,
              }}
            >
              {label}
            </div>

            <div
              className="font-body"
              style={{ fontSize: '0.95rem', color: dark ? 'rgba(255,255,255,0.6)' : '#3a5a45', lineHeight: 1.7, marginBottom: 22, fontStyle: 'italic' }}
            >
              {desc}
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {checks.map((c) => (
                <li
                  key={c}
                  className="font-body"
                  style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: dark ? 'rgba(255,255,255,0.85)' : '#1a3a28', fontSize: '0.95rem', lineHeight: 1.65 }}
                >
                  <span style={{ color: dark ? '#2ec866' : '#1a7a4a', fontWeight: 700, flexShrink: 0, marginTop: 2, fontSize: '0.85rem' }}>✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Closing line */}
      <motion.div {...anim(0.35)}>
        <div style={{ borderLeft: '3px solid #2ec866', paddingLeft: 18 }}>
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
