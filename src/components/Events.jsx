import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import aiYathra1 from '../assets/AI Yathra.png'
import aiYathra2 from '../assets/AI yathra 2.0.png'
import ai_for_juniors from '../assets/ai-for-juniors-poster.png'

const events = [
  {
    tag: 'Ongoing',
    tagStyle: 'bg-yellow-100 text-yellow-700',
    title: 'AI for Juniors',
    description: 'In 5 days, your child goes from using AI to building with it.',
    image: ai_for_juniors,
    imagePosition: 'center'
  },
  {
    tag: 'Completed',
    tagStyle: 'bg-emerald-100 text-emerald-700',
    title: 'AI Yathra 2.0',
    description:
    'The second cohort, bigger and more structured. AI Yathra 2.0 was ran upon popular demand and the success of the first edition.',
    image: aiYathra2,
    imagePosition: 'bottom',
  },
  {
    tag: 'Completed',
    tagStyle: 'bg-emerald-100 text-emerald-700',
    title: 'AI Yathra 1.0',
    description:
      'Our first public GenAI cohort, a 3-day virtual program that brought together professionals and early adopters to build with AI from scratch.',
    image: aiYathra1,
  },
]

const Events = () => {
  const navigate = useNavigate()
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
            What We Have Run & What's Going On
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
              onClick={event.title === 'AI for Juniors' ? () => {
                navigate('/events/ai-for-juniors')
                window.scrollTo(0, 0)
              } : undefined}
              className={`group rounded-card overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-250 relative flex flex-col${event.title === 'AI for Juniors' ? ' cursor-pointer' : ''}`}
              style={{ ...(event.image ? { backgroundImage: `url(${event.image})`, backgroundSize: 'cover', backgroundPosition: event.imagePosition || 'center' } : {}), aspectRatio: '1/1' }}
            >
              {/* Dark gradient overlay — fades out on hover to reveal image */}
              {event.image && (
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/80 to-black/60 rounded-card transition-opacity duration-400 group-hover:opacity-0" />
              )}

              {/* "OPEN NOW" ribbon for AI for Juniors — hides on hover */}
              {event.title === 'AI for Juniors' && (
                <div
                  className="transition-opacity duration-400 group-hover:opacity-0"
                  style={{
                    position: 'absolute',
                    top: 26,
                    right: -36,
                    width: 160,
                    textAlign: 'center',
                    transform: 'rotate(45deg)',
                    background: '#00DF82',
                    color: '#004837',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.58rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '7px 0',
                    zIndex: 20,
                    boxShadow: '0 2px 10px rgba(0,0,0,0.25)',
                  }}>
                  Open Now
                </div>
              )}

              {/* Text content — fades out on hover */}
              <div
                className="relative z-10 p-8 flex flex-col h-full gap-4 transition-opacity duration-400 group-hover:opacity-0"
                style={!event.image ? { background: 'linear-gradient(135deg, #0a3d2a 0%, #083d22 40%, #1a5c3a 100%)' } : {}}
              >
                <span className={`font-body text-xs font-bold rounded-pill px-3 py-1 self-start ${event.tagStyle}`}>
                  {event.tag}
                </span>
                <div className="mt-auto flex flex-col gap-2">
                  <h3
                    className="font-display font-bold leading-tight text-white"
                    style={{ fontSize: 'clamp(1.15rem, 2vw, 1.4rem)' }}
                  >
                    {event.title}
                  </h3>
                  <p className="font-body leading-relaxed text-white/80" style={{ fontSize: '1rem' }}>
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
