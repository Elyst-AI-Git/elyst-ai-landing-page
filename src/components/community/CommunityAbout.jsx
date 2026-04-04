import { motion } from 'framer-motion'

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const features = [
  {
    title: 'Weekly AI Signal',
    desc: 'AI updates that actually matter to your work — filtered, not trending.',
  },
  {
    title: 'Monthly Catchup',
    desc: 'Honest conversations about what\'s changing and where things are heading.',
  },
  {
    title: 'The Network',
    desc: 'People building with AI — asking better questions, sharing real insights.',
  },
  {
    title: 'The Content Library',
    desc: 'Real workflows and step-by-step systems. No surface-level guides.',
  },
  {
    title: 'Member-Only Events',
    desc: 'Private sessions and discussions only for Circle members.',
  },
  {
    title: 'Deals in AI',
    desc: 'Curated discounts on tools that are actually worth using.',
  },
]

const CommunityAbout = () => (
  <section
    id="what-you-join"
    style={{ background: '#ffffff', padding: '96px 0' }}
  >
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(24px, 6vw, 100px)' }}>
      <div className="about-layout">

        {/* Left — explanation text */}
        <motion.div {...anim(0)} className="about-left">
          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', color: '#0d1a10', lineHeight: 1.15, marginBottom: 0 }}
          >
            What you're actually joining
          </h2>
          <p className="font-body" style={{ color: '#4a6a55', fontSize: '1rem', lineHeight: 1.85, margin: '0 0 8px' }}>
            Elyst AI Circle is a private, paid WhatsApp community for people actively trying to get ahead of the AI shift.
          </p>
          <p className="font-body" style={{ color: '#4a6a55', fontSize: '1rem', lineHeight: 1.85, margin: '0 0 8px' }}>
            Not by consuming more content — but by seeing how it's actually being used, every week.
          </p>
          <p className="font-body" style={{ color: '#0d3d25', fontSize: '1rem', lineHeight: 1.85, margin: 0, fontWeight: 600 }}>
            Small by design. Intentional by default.
          </p>
        </motion.div>

        {/* Right — feature list */}
        <div className="about-right">
          {features.map(({ title, desc }, i) => (
            <motion.div
              key={title}
              {...anim(0.1 + i * 0.07)}
              style={{
                borderLeft: '3px solid #2ec866',
                paddingLeft: 24,
                paddingTop: 4,
                paddingBottom: 4,
              }}
            >
              <div className="font-display font-bold" style={{ fontSize: '1.05rem', color: '#0d1a10', marginBottom: 6, lineHeight: 1.3 }}>
                {title}
              </div>
              <div className="font-body" style={{ fontSize: '0.93rem', color: '#5a7a65', lineHeight: 1.75 }}>
                {desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    <style>{`
      .about-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 48px;
        align-items: center;
      }
      .about-left {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }
      .about-right {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }
      @media (max-width: 768px) {
        .about-layout { grid-template-columns: 1fr; gap: 40px; }
        .about-left { gap: 24px; }
      }
    `}</style>
  </section>
)

export default CommunityAbout
