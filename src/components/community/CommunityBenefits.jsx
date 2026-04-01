import { motion } from 'framer-motion'

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const standardDeliverables = [
  {
    icon: '📡',
    title: 'Weekly AI Signal',
    desc: 'AI updates that actually matter to how you work — pulled using a custom-built system and filtered by the team.',
  },
  {
    icon: '🎙️',
    title: 'Monthly Catchup',
    desc: 'A monthly call on where things are heading and what\'s shifting. Less formal session, more honest conversation.',
  },
  {
    icon: '🤝',
    title: 'The Network',
    desc: 'Professionals and founders figuring out the same things as you — who ask better questions than most communities ever produce.',
  },
  {
    icon: '📚',
    title: 'The Content Library',
    desc: 'AI workflows, practical guides, and step-by-step processes built specifically for how this community works.',
  },
  {
    icon: '🎫',
    title: 'Member-Only Events',
    desc: 'Events and sessions never announced publicly — built exclusively for people inside the Circle.',
  },
  {
    icon: '🏷️',
    title: 'Deals in AI',
    desc: 'Curated discounts on AI tools and products we\'ve actually evaluated and think are worth your money.',
  },
]

const CommunityBenefits = () => (
  <section
    id="benefits"
    style={{
      background: '#0a1210',
      padding: '0 0 96px',
    }}
  >
    <div className="max-w-275 mx-auto px-(--section-px)" style={{ paddingTop: 96 }}>

      {/* Section heading */}
      <motion.div {...anim(0)} style={{ marginBottom: 56 }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.72rem',
          fontWeight: 800,
          color: '#2ec866',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: 12,
        }}>
          What's inside the Circle
        </span>
        <h2
          className="font-display font-bold text-white"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: 1.15, marginBottom: 10 }}
        >
          Built to solve{' '}
          <span style={{ color: '#2ec866' }}>real problems.</span>
        </h2>
        <p
          className="font-body"
          style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem', maxWidth: 480 }}
        >
          Everything here was decided because it solves a real problem that professionals and founders have with AI right now.
        </p>
      </motion.div>

      {/* ── Standard Tier label ── */}
      <motion.div {...anim(0.05)} style={{ marginBottom: 20 }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.7rem',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.35)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          Standard Tier — included in every membership
        </span>
      </motion.div>

      {/* Deliverables 2-column grid */}
      <div
        className="benefits-grid"
        style={{ display: 'grid', gap: 12, marginBottom: 80 }}
      >
        {standardDeliverables.map(({ icon, title, desc }, i) => (
          <motion.div
            key={title}
            {...anim(0.1 + i * 0.07)}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16,
              padding: '24px 22px',
              display: 'flex',
              gap: 16,
              alignItems: 'flex-start',
              transition: 'background 0.2s, border-color 0.2s',
              cursor: 'default',
            }}
            whileHover={{
              background: 'rgba(46,200,102,0.07)',
              borderColor: 'rgba(46,200,102,0.2)',
              transition: { duration: 0.2 },
            }}
          >
            <div style={{
              width: 40, height: 40,
              background: 'rgba(46,200,102,0.1)',
              borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.1rem',
              flexShrink: 0,
            }}>
              {icon}
            </div>
            <div>
              <div className="font-display font-bold" style={{ color: '#ffffff', fontSize: '0.95rem', marginBottom: 6 }}>
                {title}
              </div>
              <div className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>
                {desc}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ══ FOUNDING MEMBER PERKS — visually distinct block ══ */}
      <motion.div
        {...anim(0.15)}
        style={{
          background: 'linear-gradient(135deg, #1a0e00 0%, #261400 50%, #1a0e00 100%)',
          border: '1px solid rgba(255,180,50,0.35)',
          borderRadius: 24,
          padding: 'clamp(32px, 5vw, 48px)',
          marginBottom: 0,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Amber glow */}
        <div style={{
          position: 'absolute', top: -60, right: -60,
          width: 280, height: 280,
          background: 'radial-gradient(circle, rgba(255,180,50,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(255,180,50,0.15)',
          border: '1px solid rgba(255,180,50,0.4)',
          borderRadius: 999,
          padding: '6px 14px',
          marginBottom: 20,
        }}>
          <span style={{ fontSize: '0.85rem' }}>⭐</span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: 800,
            color: '#ffb432',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            Founding Member Perks
          </span>
        </div>

        <h3
          className="font-display font-bold"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#ffffff', marginBottom: 6 }}
        >
          Founding members get more.{' '}
          <span style={{ color: '#ffb432' }}>Always.</span>
        </h3>
        <p className="font-body" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.92rem', marginBottom: 28 }}>
          These things are exclusive to founding members and they stay exclusive, no matter how large the Circle grows.
        </p>

        <div className="founding-perks-grid" style={{ display: 'grid', gap: 14 }}>
          {[
            {
              icon: '🔑',
              title: 'Priority Access and Offers',
              desc: 'Every time Elyst AI launches something new, founding members get an exclusive rate that is not available to anyone else.',
            },
            {
              icon: '🔒',
              title: 'Your Rate, Locked Forever',
              desc: 'The price you join at is the price you pay, forever. Whatever the Circle costs later, your rate never changes.',
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              style={{
                background: 'rgba(255,180,50,0.06)',
                border: '1px solid rgba(255,180,50,0.18)',
                borderRadius: 14,
                padding: '18px 20px',
                display: 'flex',
                gap: 14,
                alignItems: 'flex-start',
              }}
            >
              <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{icon}</span>
              <div>
                <div className="font-display font-bold" style={{ color: '#ffb432', fontSize: '0.95rem', marginBottom: 5 }}>
                  {title}
                </div>
                <div className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
                  {desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>

    <style>{`
      .benefits-grid { grid-template-columns: repeat(2, 1fr); }
      .founding-perks-grid { grid-template-columns: repeat(2, 1fr); }
      @media (max-width: 640px) {
        .benefits-grid { grid-template-columns: 1fr; }
        .founding-perks-grid { grid-template-columns: 1fr; }
      }
    `}</style>
  </section>
)

export default CommunityBenefits
