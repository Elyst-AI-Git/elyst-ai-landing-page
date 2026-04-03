import { motion } from 'framer-motion'

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const pillars = [
  {
    title: 'AI updates worth your attention, every week without the hype.',
  },
  {
    title: 'A small, intentional room of people already building with AI.',
  },
  {
    title: 'A growing library of real workflows, not surface-level guides.',
  },
]

const CommunityAbout = () => (
  <section
    id="what-you-join"
    style={{ background: '#ffffff', padding: '96px 0' }}
  >
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(24px, 6vw, 100px)' }}>
      <div className="about-layout">

        {/* Left — fills height of right column */}
        <motion.div {...anim(0)} className="about-left">
          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', color: '#0d1a10', lineHeight: 1.15, marginBottom: 0 }}
          >
            What you're actually joining
          </h2>
          <p className="font-body" style={{ color: '#4a6a55', fontSize: '1rem', lineHeight: 1.85, margin: 0 }}>
            The Elyst AI Circle is a private, paid WhatsApp community where every single person in it has one thing in common — they are actively trying to get ahead of the AI shift, whether that means implementing it into their work, building systems around it or finally understanding it well enough to stop feeling left behind. Small by design, with every member showing up intentionally.
          </p>
        </motion.div>

        {/* Right — 3 cards stacked */}
        <div className="about-right">
          {pillars.map(({ title }, i) => (
            <motion.div
              key={i}
              {...anim(0.1 + i * 0.1)}
              style={{
                background: '#ffffff',
                border: '1.5px solid #e8f0eb',
                borderRadius: 20,
                padding: '24px 28px',
                boxShadow: '0 2px 12px rgba(13,61,37,0.06)',
              }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="font-display font-bold" style={{ fontSize: '1.1rem', color: '#0d1a10', lineHeight: 1.4 }}>
                {title}
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
        gap: 14px;
      }
      @media (max-width: 768px) {
        .about-layout { grid-template-columns: 1fr; gap: 40px; }
        .about-left { gap: 24px; }
      }
    `}</style>
  </section>
)

export default CommunityAbout
