import { motion } from 'framer-motion'

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const CommunityBenefits = () => (
  <section
    id="founding"
    style={{ background: '#ffffff', padding: '80px 0' }}
  >
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(24px, 6vw, 100px)' }}>
      {/* Founding member perks */}
      <motion.div
        {...anim(0.15)}
        style={{
          background: 'linear-gradient(135deg, #1a0e00 0%, #261400 50%, #1a0e00 100%)',
          border: '1px solid rgba(255,180,50,0.35)',
          borderRadius: 24,
          padding: 'clamp(32px, 5vw, 48px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Corner ribbon */}
        <div style={{
          position: 'absolute',
          top: 28,
          right: -36,
          width: 160,
          textAlign: 'center',
          transform: 'rotate(45deg)',
          background: '#ffb432',
          color: '#1a0e00',
          fontFamily: 'var(--font-body)',
          fontSize: '0.62rem',
          fontWeight: 800,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '6px 0',
          boxShadow: '0 2px 8px rgba(255,180,50,0.4)',
        }}>
          25 Spots Only
        </div>

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
              title: 'Priority Access and Offers',
              desc: 'Every time Elyst AI launches something new, founding members get an exclusive rate that is not available to anyone else.',
            },
            {
              title: 'Your Rate, Locked Forever',
              desc: 'The price you join at is the price you pay, forever. Whatever the Circle costs later, your rate never changes.',
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              style={{
                background: 'rgba(255,180,50,0.06)',
                border: '1px solid rgba(255,180,50,0.18)',
                borderRadius: 14,
                padding: '18px 20px',
              }}
            >
              <div className="font-display font-bold" style={{ color: '#ffb432', fontSize: '0.95rem', marginBottom: 5 }}>
                {title}
              </div>
              <div className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
                {desc}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>

    <style>{`
      .founding-perks-grid { grid-template-columns: repeat(2, 1fr); }
      @media (max-width: 768px) {
        .founding-perks-grid { grid-template-columns: 1fr; }
      }
    `}</style>
  </section>
)

export default CommunityBenefits
