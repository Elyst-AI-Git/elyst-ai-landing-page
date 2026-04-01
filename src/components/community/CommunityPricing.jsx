import { useState } from 'react'
import { motion } from 'framer-motion'

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const standardFeatures = [
  { icon: '📡', text: 'Weekly AI Signal' },
  { icon: '🎙️', text: 'Monthly Catchup Call' },
  { icon: '📚', text: 'The Content Library' },
  { icon: '🤝', text: 'The Network' },
  { icon: '🏷️', text: 'Deals in AI' },
  { icon: '🎫', text: 'Member-Only Events' },
]

const earlyBirdExtras = [
  { icon: '🔑', text: 'Priority Access and Offers' },
  { icon: '🔒', text: 'Your Rate Stays Locked Forever' },
]

function PriceCard({ name, badge, price, sub, features, extraLabel, extras, cta, highlighted }) {
  const [btnHover, setBtnHover] = useState(false)
  return (
    <div style={{
      background: highlighted
        ? 'linear-gradient(145deg, #0d3d25, #1a5c35)'
        : 'rgba(255,255,255,0.05)',
      border: `1.5px solid ${highlighted ? '#2ec866' : 'rgba(255,255,255,0.1)'}`,
      borderRadius: 24,
      padding: 36,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: highlighted ? '0 0 60px rgba(46,200,102,0.18), 0 20px 60px rgba(13,61,37,0.4)' : 'none',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {highlighted && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 70% 0%, rgba(46,200,102,0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
      )}

      {badge && (
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          background: 'rgba(46,200,102,0.15)',
          border: '1px solid rgba(46,200,102,0.35)',
          borderRadius: 999,
          padding: '5px 12px',
          marginBottom: 20,
          alignSelf: 'flex-start',
        }}>
          <span style={{ width: 6, height: 6, background: '#2ec866', borderRadius: '50%', flexShrink: 0 }} />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.68rem',
            fontWeight: 800,
            color: '#2ec866',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            {badge}
          </span>
        </div>
      )}

      <div
        className="font-body font-bold"
        style={{
          fontSize: '0.72rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: highlighted ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.35)',
          marginBottom: 10,
        }}
      >
        {name}
      </div>

      <div
        className="font-display font-bold"
        style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', color: '#ffffff', lineHeight: 1, marginBottom: 4 }}
      >
        {price}
      </div>

      <div
        className="font-body text-sm"
        style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 24 }}
      >
        {sub}
      </div>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: 20 }} />

      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {features.map(({ icon, text }) => (
          <li
            key={text}
            className="font-body text-sm"
            style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.8)' }}
          >
            <span style={{ color: highlighted ? '#2ec866' : 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}>{icon}</span>
            {text}
          </li>
        ))}
      </ul>

      {extras && (
        <div style={{ marginTop: 20 }}>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: 14 }} />
          <div className="font-body font-bold" style={{ fontSize: '0.75rem', color: '#2ec866', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 10 }}>
            {extraLabel}
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {extras.map(({ icon, text }) => (
              <li
                key={text}
                className="font-body text-sm font-bold"
                style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#ffffff' }}
              >
                <span style={{ fontSize: '0.9rem' }}>{icon}</span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      )}

      <a
        href="#"
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        style={{
          display: 'block',
          textAlign: 'center',
          marginTop: 28,
          padding: '14px',
          borderRadius: 999,
          background: highlighted
            ? (btnHover ? '#3ad077' : '#2ec866')
            : (btnHover ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)'),
          border: highlighted ? 'none' : '1px solid rgba(255,255,255,0.15)',
          color: highlighted ? '#060d09' : '#ffffff',
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          fontSize: '0.95rem',
          textDecoration: 'none',
          transition: 'all 0.2s',
        }}
      >
        {cta}
      </a>
    </div>
  )
}

const CommunityPricing = () => (
  <section
    id="pricing"
    style={{
      background: '#030b06',
      padding: '0 0 96px',
    }}
  >
    <div className="max-w-275 mx-auto px-(--section-px)" style={{ paddingTop: 96 }}>

      <motion.div {...anim(0)} style={{ marginBottom: 52 }}>
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
          Pricing
        </span>
        <h2
          className="font-display font-bold text-white"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: 1.15, marginBottom: 10 }}
        >
          Simple, transparent pricing.
        </h2>
        <p className="font-body" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem' }}>
          One membership. Everything included.{' '}
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>No hidden charges.</span>
        </p>
      </motion.div>

      <div className="pricing-grid" style={{ display: 'grid', gap: 16, alignItems: 'start' }}>
        <motion.div {...anim(0.1)} style={{ height: '100%' }}>
          <PriceCard
            name="Standard"
            price="₹299/month"
            sub="per month · cancel anytime"
            features={standardFeatures}
            cta="Get Started"
          />
        </motion.div>
        <motion.div {...anim(0.2)} style={{ height: '100%' }}>
          <PriceCard
            name="Early Bird"
            badge="Limited spots"
            price="₹199/month"
            sub="per month · rate locked forever"
            features={standardFeatures}
            extraLabel="Plus, exclusively:"
            extras={earlyBirdExtras}
            cta="Claim Early Bird Spot →"
            highlighted
          />
        </motion.div>
      </div>

      <motion.p {...anim(0.3)} className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.35)', marginTop: 18 }}>
        Early Bird spots are limited. Once they are gone, the standard rate is all that remains.
      </motion.p>
    </div>

    <style>{`
      .pricing-grid { grid-template-columns: repeat(2, 1fr); }
      @media (max-width: 640px) { .pricing-grid { grid-template-columns: 1fr; } }
    `}</style>
  </section>
)

export default CommunityPricing
