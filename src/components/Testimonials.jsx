import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "The AI Yathra 2.0 cohort completely changed how I think about technology. Elyst AI made it feel approachable and practical.",
    name: "Rahul M.",
    role: "Engineering Student, Thiruvananthapuram",
  },
  {
    quote: "Elyst AI helped us automate our content pipeline. We went from 3 posts a week to daily publishing without extra effort.",
    name: "Priya S.",
    role: "Business Owner, Kochi",
  },
  {
    quote: "Finally, an AI company that explains things in a way that actually makes sense. No jargon, just results.",
    name: "Arjun K.",
    role: "Marketing Professional, Kozhikode",
  },
];

const stats = [
  { value: 250, suffix: "+", label: "Community Members" },
  { value: 10, suffix: "+", label: "Sessions Taken" },
];

const CountUp = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const step = Math.max(1, Math.floor(target / 30));
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            setCount(current);
          }, 40);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-display font-bold text-h1 text-[#00df82]">
      {count}{suffix}
    </span>
  );
};

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrent((p) => (p + 1) % testimonials.length);
  };
  const prev = () => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className="mx-4 md:mx-6 mt-4 mb-8 rounded-4xl overflow-hidden relative"
      style={{
        background: "#1a1a1a",
      }}
    >
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #00df82 0.8px, transparent 0.8px)`,
          backgroundSize: "20px 20px",
          opacity: 0.25,
        }}
      />
      <div className="section-padding">
        <div className="max-w-300 mx-auto">
          {/* Header */}
          <div className="text-center mb-12 relative z-10">
            <span className="inline-block font-body font-bold text-xs text-[#00df82] uppercase tracking-widest bg-white/10 rounded-pill px-4 py-2 mb-4">
              WALL OF LOVE
            </span>
            <h2 className="font-display font-bold text-h2 text-white">What They're Saying</h2>
          </div>

          {/* Carousel */}
          <div className="relative flex items-center justify-center gap-4 mb-12 z-10">
            <button
              onClick={prev}
              className="hidden md:flex shrink-0 w-12 h-12 items-center justify-center rounded-full bg-white/10 shadow-card hover:bg-[#00df82] hover:text-black transition-all text-white"
              aria-label="Previous"
            >
              ←
            </button>

            <div className="w-full max-w-170 overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 40 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white/10 backdrop-blur-sm rounded-card p-8 md:p-10 shadow-card border border-white/10"
                >
                  <p className="font-body text-body-size text-white/90 leading-[1.8] mb-6 text-start">
                    "{testimonials[current].quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full shrink-0"
                      style={{ background: "linear-gradient(135deg, #00df82, #03624c)" }}
                    />
                    <div>
                      <p className="font-body font-bold text-sm text-white text-start ">{testimonials[current].name}</p>
                      <p className="font-body text-sm text-white/50">{testimonials[current].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={next}
              className="hidden md:flex shrink-0 w-12 h-12 items-center justify-center rounded-full bg-white/10 shadow-card hover:bg-[#00df82] hover:text-black transition-all text-white"
              aria-label="Next"
            >
              →
            </button>
          </div>

          {/* Mobile arrows */}
          <div className="flex md:hidden justify-center gap-4 mb-6 relative z-10">
            <button onClick={prev} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 shadow-card text-white">←</button>
            <button onClick={next} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 shadow-card text-white">→</button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mb-16 relative z-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className="h-2 rounded-pill transition-all duration-300"
                style={{
                  width: i === current ? 24 : 8,
                  background: i === current ? "#00df82" : "rgba(255,255,255,0.2)",
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-16 relative z-10">
            {stats.map((stat, i) => (
              <div key={i}>
                <CountUp target={stat.value} suffix={stat.suffix} />
                <p className="font-body text-sm text-white/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
