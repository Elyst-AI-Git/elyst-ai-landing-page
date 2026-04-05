import { useState } from 'react'
import { motion } from 'framer-motion'

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const standardFeatures = [
  { text: 'Weekly AI Signal' },
  { text: 'Monthly Catchup Call' },
  { text: 'The Content Library' },
  { text: 'The Network' },
  { text: 'Deals in AI' },
  { text: 'Member-Only Events' },
]

const earlyBirdExtras = [
  { text: 'Priority Access and Offers' },
  { text: 'Your Rate Stays Locked Forever' },
]

function PriceCard({ name, ribbon, price, sub, features, extraLabel, extras, cta, highlighted }) {
  const [btnHover, setBtnHover] = useState(false)
  return (
    <div style={{
      background: highlighted
        ? 'linear-gradient(145deg, #0d3d25, #1a5c35)'
        : '#ffffff',
      border: `1.5px solid ${highlighted ? '#2ec866' : '#e4f2e9'}`,
      borderRadius: 24,
      padding: 36,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: highlighted ? '0 0 60px rgba(46,200,102,0.18), 0 20px 60px rgba(13,61,37,0.15)' : '0 2px 12px rgba(0,0,0,0.04)',
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

      {/* Diagonal ribbon */}
      {ribbon && (
        <div style={{
          position: 'absolute',
          top: 28,
          right: -36,
          width: 160,
          textAlign: 'center',
          transform: 'rotate(45deg)',
          background: '#2ec866',
          color: '#060d09',
          fontFamily: 'var(--font-body)',
          fontSize: '0.62rem',
          fontWeight: 800,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '6px 0',
          boxShadow: '0 2px 8px rgba(46,200,102,0.4)',
          zIndex: 1,
        }}>
          {ribbon}
        </div>
      )}

      <div
        className="font-body font-bold"
        style={{
          fontSize: '0.72rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: highlighted ? 'rgba(255,255,255,0.5)' : '#1a7a4a',
          marginBottom: 10,
        }}
      >
        {name}
      </div>

      <div
        className="font-display font-bold"
        style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', color: highlighted ? '#ffffff' : '#0d1a10', lineHeight: 1, marginBottom: highlighted ? 6 : 4 }}
      >
        {price}
      </div>

      {highlighted ? (
        <div style={{ marginBottom: 24 }}>
          <div className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.55)', marginBottom: 3 }}>
            founding access until July 15
          </div>
          <div className="font-body text-sm" style={{ color: '#2ec866', fontWeight: 600 }}>
            then ₹199/month · your rate stays locked
          </div>
        </div>
      ) : (
        <div
          className="font-body text-sm"
          style={{ color: '#7a9a85', marginBottom: 24 }}
        >
          {sub}
        </div>
      )}

      <div style={{ height: '1px', background: highlighted ? 'rgba(255,255,255,0.08)' : '#e4f2e9', marginBottom: 20 }} />

      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {features.map(({ text }) => (
          <li
            key={text}
            className="font-body"
            style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: highlighted ? 'rgba(255,255,255,0.8)' : '#1a3a28', fontSize: '1rem' }}
          >
            <span style={{ color: highlighted ? 'rgba(255,255,255,0.7)' : '#2ec866', fontWeight: 700, flexShrink: 0, fontSize: '0.85rem', marginTop: 3 }}>✓</span>
            {text}
          </li>
        ))}
      </ul>

      {extras && (
        <div style={{ marginTop: 20 }}>
          <div style={{ height: '1px', background: highlighted ? 'rgba(255,255,255,0.08)' : '#e4f2e9', marginBottom: 14 }} />
          <div className="font-body font-bold" style={{ fontSize: '0.75rem', color: '#2ec866', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 10 }}>
            {extraLabel}
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {extras.map(({ text }) => (
              <li
                key={text}
                className="font-body font-bold"
                style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: highlighted ? '#ffffff' : '#0d1a10', fontSize: '1rem' }}
              >
                <span style={{ color: highlighted ? 'rgba(255,255,255,0.7)' : '#2ec866', fontWeight: 700, flexShrink: 0, fontSize: '0.85rem', marginTop: 3 }}>✓</span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      )}

      <a
        href={highlighted ? 'https://forms.gle/fSmbvXiRoAqLK3ky7' : undefined}
        target={highlighted ? '_blank' : undefined}
        rel={highlighted ? 'noopener noreferrer' : undefined}
        onClick={!highlighted ? (e) => e.preventDefault() : undefined}
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
            : (btnHover ? '#e4f2e9' : '#f0faf4'),
          border: highlighted ? 'none' : '1.5px solid #c8e6d4',
          color: highlighted ? '#060d09' : '#0d3d25',
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          fontSize: '0.95rem',
          textDecoration: 'none',
          transition: 'all 0.2s',
          cursor: highlighted ? 'pointer' : 'default',
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
    style={{ background: '#f5f9f6', padding: '96px 0' }}
  >
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(24px, 6vw, 100px)' }}>

      <motion.div {...anim(0)} style={{ marginBottom: 52 }}>
        <h2
          className="font-display font-bold"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', color: '#0d1a10', lineHeight: 1.15, marginBottom: 10 }}
        >
          Simple, transparent pricing.
        </h2>
        <p className="font-body" style={{ color: '#4a6a55', fontSize: '1rem' }}>
          One membership. Everything included. No hidden charges.
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
            ribbon="Limited Spots"
            price="₹199"
            sub="per month · rate locked forever"
            features={standardFeatures}
            extraLabel="Plus, exclusively:"
            extras={earlyBirdExtras}
            cta="Claim Early Bird Spot →"
            highlighted
          />
        </motion.div>
      </div>

      <motion.p {...anim(0.3)} className="font-body text-sm" style={{ color: '#7a9a85', marginTop: 18 }}>
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
