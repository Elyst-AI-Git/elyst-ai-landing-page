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
    desc: 'AI updates that matter to your work — filtered, not trending.',
  },
  {
    title: 'Monthly Catchup',
    desc: 'Honest conversations about what\'s changing in AI.',
  },
  {
    title: 'The Network',
    desc: 'People building with AI — sharing real insights, not noise.',
  },
  {
    title: 'The Content Library',
    desc: 'Step-by-step workflows, not surface-level guides.',
  },
  {
    title: 'Member-Only Events',
    desc: 'Private sessions only for Circle members.',
  },
  {
    title: 'Deals in AI',
    desc: 'Curated discounts on tools actually worth using.',
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
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', color: '#0d1a10', lineHeight: 1.15, marginBottom: 24 }}
          >
            What you're actually joining
          </h2>
          <p className="font-body" style={{ color: '#4a6a55', fontSize: '1.02rem', lineHeight: 1.9, margin: '0 0 16px', textAlign: 'left' }}>
            Elyst AI Circle is a private, paid WhatsApp community for people actively trying to get ahead of the AI shift.
          </p>
          <p className="font-body" style={{ color: '#4a6a55', fontSize: '1.02rem', lineHeight: 1.9, margin: '0 0 20px', textAlign: 'left' }}>
            Not by consuming more content — but by seeing how it's actually being used every week.
          </p>
          <p className="font-body" style={{ color: '#0d3d25', fontSize: '1.02rem', lineHeight: 1.9, margin: 0, fontWeight: 700, textAlign: 'left' }}>
            Small by design. Intentional by default.
          </p>
        </motion.div>

        {/* Right — 2×3 card grid */}
        <div className="about-right">
          {features.map(({ title, desc }, i) => (
            <motion.div
              key={title}
              {...anim(0.08 + i * 0.06)}
              style={{
                background: '#f2f9f5',
                border: '1.5px solid #cce8d8',
                borderRadius: 14,
                padding: '18px 20px',
                boxShadow: '0 2px 10px rgba(46,200,102,0.08)',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              whileHover={{ boxShadow: '0 6px 20px rgba(46,200,102,0.14)', transition: { duration: 0.2 } }}
            >
              <div className="font-display font-bold" style={{ fontSize: '0.98rem', color: '#0d1a10', marginBottom: 6, lineHeight: 1.3, textAlign: 'left' }}>
                {title}
              </div>
              <div className="font-body" style={{ fontSize: '0.9rem', color: '#5a7a65', lineHeight: 1.7, textAlign: 'left' }}>
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
        gap: 64px;
        align-items: start;
      }
      .about-left {
        display: flex;
        flex-direction: column;
        position: sticky;
        top: 96px;
      }
      .about-right {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
      }
      @media (max-width: 900px) {
        .about-layout { grid-template-columns: 1fr; gap: 40px; }
        .about-left { position: static; }
      }
      @media (max-width: 480px) {
        .about-right { grid-template-columns: 1fr; }
      }
    `}</style>
  </section>
)

export default CommunityAbout
