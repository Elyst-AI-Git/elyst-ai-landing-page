import { motion } from 'framer-motion'

const cardAnim = (delay) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const BottomCTA = () => {
  return (
    <section className="section-padding" style={{ background: 'hsl(140 18% 97%)' }}>
      <div className="max-w-300 mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-h1 text-text-primary mb-4">
            Two ways to work with Elyst AI.
          </h2>
          <p className="font-body text-body-size text-text-secondary max-w-160 mx-auto leading-relaxed">
            Whether you're a professional who wants to actually use AI in your work or a business that needs AI built into how you operate, there's a place for you here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Community card */}
          <motion.div
            {...cardAnim(0)}
            className="rounded-card p-8 flex flex-col gap-3 min-h-48"
            style={{
              background: 'rgba(0, 223, 130, 0.07)',
              border: '1px solid rgba(0, 223, 130, 0.15)',
            }}
          >
            <p className="font-body text-xs font-bold text-primary uppercase tracking-widest">Community</p>
            <h3 className="font-display font-bold text-h2 text-text-primary">AI Accelerator</h3>
            <p className="font-body text-body-size text-text-secondary leading-relaxed">
              A curated community for professionals who want to use AI without the overwhelm. Weekly updates, live sessions, real challenges.
            </p>
          </motion.div>

          {/* Business card */}
          <motion.div
            {...cardAnim(0.15)}
            className="rounded-card p-8 flex flex-col gap-3 min-h-48 bg-surface-dark"
          >
            <p className="font-body text-xs font-bold text-accent uppercase tracking-widest">Business</p>
            <h3 className="font-display font-bold text-h2 text-text-on-dark">AI for Business</h3>
            <p className="font-body text-body-size text-text-muted-dark leading-relaxed">
              We build AI systems that fit how your business actually operates. Deep work, not surface-level consulting.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BottomCTA
