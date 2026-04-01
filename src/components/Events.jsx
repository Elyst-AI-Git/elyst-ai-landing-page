import { motion } from 'framer-motion'

const events = [
  {
    tag: 'Completed',
    tagStyle: 'bg-emerald-100 text-emerald-700',
    title: 'AI Yathra 1.0',
    description:
      'Our first public GenAI cohort, a 3-day virtual program that brought together professionals and early adopters to build with AI from scratch.',
  },
  {
    tag: 'Completed',
    tagStyle: 'bg-emerald-100 text-emerald-700',
    title: 'AI Yathra 2.0',
    description:
      'The second cohort, bigger and more structured. Hands-on sessions, real outputs. AI Yathra 2.0 happened because the first one worked.',
  },
  {
    tag: 'Coming Soon — April 9',
    tagStyle: 'bg-yellow-100 text-yellow-700',
    title: 'Launching Soon',
    description: 'Coming to you soon.',
  },
]

const Events = () => {
  return (
    <section
      id="events"
      className="relative section-padding"
      style={{ background: 'linear-gradient(180deg, #03624C 0%, #083d22 12%, #0a2a1a 28%, #0d2018 45%, #0d2018 55%, #0a2a1a 72%, #083d22 88%, #03624C 100%)' }}
    >
      <div className="max-w-300 mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-body font-bold text-white/70 uppercase tracking-widest text-xs mb-3 block">
            EVENTS & CHALLENGES
          </span>
          <h2
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            What We Have Run & What's Next
          </h2>
        </div>

        {/* Cards grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="rounded-card overflow-hidden bg-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-250 flex flex-col"
            >
              <div className="p-8 flex flex-col h-full gap-4">
                <span className={`font-body text-xs font-bold rounded-pill px-3 py-1 self-start ${event.tagStyle}`}>
                  {event.tag}
                </span>
                <h3
                  className="font-display font-bold text-text-primary leading-tight"
                  style={{ fontSize: 'clamp(1.15rem, 2vw, 1.4rem)' }}
                >
                  {event.title}
                </h3>
                <p className="font-body text-text-secondary leading-relaxed" style={{ fontSize: '1rem' }}>
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events