import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const faqs = [
  {
    q: 'Is this just another WhatsApp group?',
    a: 'No. The Circle is small, paid, and every member is reviewed before they get in. The experience inside is nothing like a free group, no random forwards, no noise, no irrelevant links. Everything that comes into the Circle is deliberate.',
  },
  {
    q: 'How much time does this actually take?',
    a: 'As much or as little as you want to put in. The Weekly AI Signal takes five minutes to read. The Monthly Catchup is an hour at most. The library is there when you need it. There is no pressure to be active every day, the value is in the quality of what is there, not the volume.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. There is no lock-in. If you decide the Circle is not for you, you can leave. The only thing you cannot take back is your founding rate - if you leave and want to rejoin later, you come back at whatever the current price is.',
  },
  {
    q: 'What makes this different from following Elyst AI on social media?',
    a: 'Social media is a broadcast. The Circle is a room. What gets shared inside is more specific, more honest, and more useful than anything designed for a public audience. And the people you are in it with are having conversations you will not find anywhere else.',
  },
  {
    q: 'I am not very technical. Will I be lost?',
    a: 'The Circle is not built for people who already have it figured out - it is built for people who are in the process of figuring it out. You do not need a technical background. You need the intention to actually apply what you learn.',
  },
]

const CommunityFAQ = () => {
  const [open, setOpen] = useState(null)

  return (
    <section
      style={{
        background: '#ffffff',
        padding: '96px 0',
      }}
    >
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 clamp(24px, 6vw, 48px)' }}>

        <motion.div {...anim(0)} style={{ marginBottom: 48, textAlign: 'center' }}>
          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', color: '#0d1a10', lineHeight: 1.15, marginBottom: 10 }}
          >
            Questions people ask{' '}
            <span style={{ color: '#1a7a4a' }}>before applying</span>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {faqs.map(({ q, a }, i) => (
            <motion.div key={i} {...anim(i * 0.06)}>
              <div
                style={{
                  background: open === i ? 'rgba(46,200,102,0.08)' : '#eaf5ee',
                  border: `1px solid ${open === i ? 'rgba(46,200,102,0.45)' : '#c8e6d4'}`,
                  borderRadius: 14,
                  overflow: 'hidden',
                  transition: 'background 0.25s, border-color 0.25s',
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full font-body font-semibold text-left cursor-pointer flex justify-between items-center gap-4"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '20px 24px',
                    color: open === i ? '#0d1a10' : '#2a4a35',
                    fontSize: '0.95rem',
                    transition: 'color 0.2s',
                    lineHeight: 1.5,
                  }}
                >
                  <span>{q}</span>
                  <span style={{
                    color: '#1a7a4a',
                    flexShrink: 0,
                    transform: open === i ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.3s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 28,
                    height: 28,
                    background: open === i ? 'rgba(46,200,102,0.15)' : 'rgba(46,200,102,0.08)',
                    borderRadius: '50%',
                    fontSize: '1rem',
                    fontWeight: 300,
                  }}>
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        className="font-body text-sm leading-relaxed"
                        style={{ padding: '0 24px 20px', color: '#4a6a55', lineHeight: 1.75, textAlign: 'left' }}
                      >
                        {a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommunityFAQ
