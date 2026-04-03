import { motion } from 'framer-motion'

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const pillars = [
  {
    num: '01',
    title: 'One thing worth your attention, every week',
    body: 'Most AI content is written for volume, not value. Every week, we cut through what trended, what got overhyped, what genuinely matters and send you the updates worth building into how you work. It comes from actual research.',
  },
  {
    num: '02',
    title: 'A room that raises the conversation',
    body: 'The Circle is deliberately small because the quality of what happens inside depends entirely on who is in it. These are people already applying AI to real problems — people who ask better questions, share what actually worked, and make the whole room sharper by being in it.',
  },
  {
    num: '03',
    title: 'A library that builds as you do',
    body: 'Beyond the weekly signal, there is a growing collection of AI workflows, practical guides, and step-by-step processes built specifically for you. Not surface-level overviews — actual walkthroughs of tools and systems that take real time to figure out on your own.',
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
          {pillars.map(({ num, title, body }, i) => (
            <motion.div
              key={num}
              {...anim(0.1 + i * 0.1)}
              style={{
                background: '#ffffff',
                border: '1.5px solid #e8f0eb',
                borderRadius: 20,
                padding: '24px 24px',
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
                boxShadow: '0 2px 12px rgba(13,61,37,0.06)',
              }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div style={{
                minWidth: 36, height: 36,
                background: 'rgba(46,200,102,0.12)',
                borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  color: '#1a7a4a',
                  letterSpacing: '0.05em',
                }}>
                  {num}
                </span>
              </div>
              <div>
                <div className="font-display font-bold" style={{ fontSize: '0.97rem', color: '#0d1a10', lineHeight: 1.3, marginBottom: 8 }}>
                  {title}
                </div>
                <div className="font-body text-sm" style={{ color: '#5a7a65', lineHeight: 1.75 }}>
                  {body}
                </div>
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
        align-items: stretch;
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
