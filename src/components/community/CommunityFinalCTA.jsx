import { motion } from 'framer-motion'

const CommunityFinalCTA = () => (
  <section
    style={{
      background: '#ffffff',
      padding: '0 24px 80px',
    }}
  >
    <div className="max-w-275 mx-auto" style={{ paddingTop: 24 }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: '#000000',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 28,
          padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 72px)',
          textAlign: 'center',
          boxShadow: '0 0 80px rgba(46,200,102,0.12)',
        }}
      >
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600, height: 300,
          background: 'radial-gradient(ellipse, rgba(46,200,102,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Dot grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(46,200,102,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.6,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, rgba(13,61,37,0.7) 100%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', lineHeight: 1.2, marginBottom: 16, maxWidth: 700, margin: '0 auto 16px' }}
          >
            Everyone in this circle is <span style={{ color: '#2ec866' }}>moving.</span> The only question is whether you are <span style={{ color: '#2ec866' }}>in it</span> or watching from outside.
          </h2>
          <p
            className="font-body"
            style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', marginBottom: 36 }}
          >
            Early Bird spots are limited. Once they are gone, they are gone.
          </p>
          <a
            href="https://nas.io/elystaicircle"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-bold"
            style={{
              display: 'inline-block',
              background: '#2ec866',
              color: '#060d09',
              borderRadius: 999,
              padding: '16px 40px',
              textDecoration: 'none',
              fontSize: '1rem',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
          >
            Apply Now →
          </a>
        </div>
      </motion.div>
    </div>
  </section>
)

export default CommunityFinalCTA
