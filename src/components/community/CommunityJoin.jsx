import { motion } from 'framer-motion'

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const steps = [
  {
    num: '01',
    title: 'Apply',
    desc: 'Fill out a short application. Two minutes, no long forms, no essays. Just enough for us to know who you are and what you are working on.',
    accent: '#2ec866',
  },
  {
    num: '02',
    title: 'Review',
    desc: 'We go through every application personally. Within 24 hours you will hear back — not an automated email, a real response.',
    accent: '#1a9e52',
  },
  {
    num: '03',
    title: 'Welcome',
    desc: 'Once you are in, you get a personal invite into the Circle. From that point, everything inside is yours.',
    accent: '#0d7a3e',
  },
]

const CommunityJoin = () => (
  <section
    id="join"
    style={{
      background: '#f5f9f6',
      padding: '0 0 96px',
    }}
  >
    <div className="max-w-275 mx-auto px-(--section-px)" style={{ paddingTop: 96 }}>

      <motion.div {...anim(0)} style={{ marginBottom: 52 }}>
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
          How it works
        </span>
        <h2
          className="font-display font-bold"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', color: '#0d1a10', lineHeight: 1.15, marginBottom: 10 }}
        >
          Three steps.{' '}
          <span style={{ color: '#1a7a4a' }}>Less than a week.</span>
        </h2>
        <p className="font-body" style={{ color: '#5a7a65', fontSize: '1rem', maxWidth: 420 }}>
          No long waitlists. No complex onboarding. The whole thing is designed to be quick.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="steps-grid" style={{ display: 'grid', gap: 14, marginBottom: 52, position: 'relative' }}>
        {/* Connector line on desktop */}
        <div
          className="steps-connector"
          style={{
            position: 'absolute',
            top: 36,
            left: 'calc(33.3% - 12px)',
            right: 'calc(33.3% - 12px)',
            height: 2,
            background: 'linear-gradient(to right, #2ec866, #1a9e52, #0d7a3e)',
            zIndex: 0,
            borderRadius: 2,
          }}
        />

        {steps.map(({ num, title, desc, accent }, i) => (
          <motion.div
            key={num}
            {...anim(0.1 + i * 0.12)}
            style={{
              background: '#ffffff',
              border: '1.5px solid #e4f2e9',
              borderRadius: 20,
              padding: '28px 24px',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{
              width: 64, height: 64,
              background: accent,
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontSize: '1.3rem',
              fontWeight: 800,
              color: '#ffffff',
              margin: '0 auto 20px',
              border: '4px solid #f5f9f6',
              boxShadow: `0 0 0 2px ${accent}`,
            }}>
              {num}
            </div>
            <div className="font-display font-bold" style={{ fontSize: '1.1rem', color: '#0d1a10', marginBottom: 10 }}>
              {title}
            </div>
            <div className="font-body text-sm" style={{ color: '#5a7a65', lineHeight: 1.7 }}>
              {desc}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Apply CTA */}
      <motion.div
        {...anim(0.4)}
        style={{
          background: 'linear-gradient(135deg, #0d3d25, #1a5c35)',
          borderRadius: 20,
          padding: 'clamp(32px, 5vw, 48px)',
          textAlign: 'center',
          border: '1px solid rgba(46,200,102,0.2)',
          boxShadow: '0 12px 48px rgba(13,61,37,0.25)',
        }}
      >
        <h3
          className="font-display font-bold text-white"
          style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', marginBottom: 10 }}
        >
          Ready to be in the right room?
        </h3>
        <p className="font-body" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', marginBottom: 24 }}>
          Founding spots are limited. The earlier you join, the better the rate you lock in.
        </p>
        <a
          href="#"
          className="font-body font-bold"
          style={{
            display: 'inline-block',
            background: '#ffffff',
            color: '#0d3d25',
            borderRadius: 999,
            padding: '14px 36px',
            textDecoration: 'none',
            fontSize: '0.97rem',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#2ec866'; e.currentTarget.style.color = '#ffffff' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#0d3d25' }}
        >
          Apply Now — It's Free to Apply →
        </a>
      </motion.div>
    </div>

    <style>{`
      .steps-grid { grid-template-columns: repeat(3, 1fr); }
      .steps-connector { display: block; }
      @media (max-width: 640px) {
        .steps-grid { grid-template-columns: 1fr; }
        .steps-connector { display: none; }
      }
    `}</style>
  </section>
)

export default CommunityJoin
