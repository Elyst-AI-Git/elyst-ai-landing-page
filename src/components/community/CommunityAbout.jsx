import { motion } from 'framer-motion'

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const pillars = [
  {
    icon: '📡',
    title: 'One thing worth your attention, every week',
    body: 'Most AI content is written for volume, not value. We cut through what trended, what got overhyped, and send you only what\'s worth building into how you work.',
  },
  {
    icon: '🧠',
    title: 'A room that raises the conversation',
    body: 'The Circle is deliberately small. These are people already applying AI to real problems — who ask better questions and make the whole room sharper by being in it.',
  },
  {
    icon: '📚',
    title: 'A library that builds as you do',
    body: 'A growing collection of AI workflows, practical guides, and step-by-step processes. Not surface-level overviews — actual walkthroughs of tools and systems.',
  },
]

const CommunityAbout = () => (
  <section
    id="what-you-join"
    style={{
      background: '#ffffff',
      padding: '0 0 96px',
    }}
  >
    <div className="max-w-275 mx-auto px-(--section-px)">

      {/* Section label + heading */}
      <motion.div {...anim(0)} style={{ paddingTop: 96, marginBottom: 20 }}>
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
          What you're actually joining
        </span>
        <h2
          className="font-display font-bold"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', color: '#0d1a10', lineHeight: 1.15, marginBottom: 0 }}
        >
          A private circle. <span style={{ color: '#1a7a4a' }}>Small by design.</span>
        </h2>
      </motion.div>

      {/* Opening statement — pull-quote style, not a paragraph */}
      <motion.blockquote
        {...anim(0.1)}
        style={{
          margin: '0 0 56px',
          padding: '20px 24px',
          borderLeft: '3px solid #2ec866',
          background: '#f0faf4',
          borderRadius: '0 12px 12px 0',
        }}
      >
        <p className="font-body" style={{ color: '#1a4a2e', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
          The Elyst AI Circle is a private, paid WhatsApp community where every single person has one thing in common —
          they are{' '}
          <strong>actively trying to get ahead of the AI shift.</strong>
          {' '}Whether implementing it into their work, building systems around it, or finally understanding it well enough to stop feeling left behind.
        </p>
      </motion.blockquote>

      {/* 3 pillar cards — side by side on desktop, stacked on mobile */}
      <div
        style={{ display: 'grid', gap: 16 }}
        className="pillars-grid"
      >
        {pillars.map(({ icon, title, body }, i) => (
          <motion.div
            key={title}
            {...anim(0.15 + i * 0.1)}
            style={{
              background: '#ffffff',
              border: '1.5px solid #e8f7ef',
              borderRadius: 20,
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div style={{
              width: 44, height: 44,
              background: 'rgba(46,200,102,0.1)',
              borderRadius: 12,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.3rem',
              flexShrink: 0,
            }}>
              {icon}
            </div>
            <div className="font-display font-bold" style={{ fontSize: '1rem', color: '#0d1a10', lineHeight: 1.3 }}>
              {title}
            </div>
            <div className="font-body text-sm" style={{ color: '#5a7a65', lineHeight: 1.7 }}>
              {body}
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    <style>{`
      .pillars-grid { grid-template-columns: repeat(3, 1fr); }
      @media (max-width: 768px) { .pillars-grid { grid-template-columns: 1fr; } }
    `}</style>
  </section>
)

export default CommunityAbout
