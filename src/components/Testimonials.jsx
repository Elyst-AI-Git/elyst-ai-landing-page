import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "It was helpful for an individual who has zero knowledge in technical background. Good to see you bringing insights on people on how to use the tools more efficiently.",
    name: "Swathi Pradeep",
    role: "AI Yathra 2.0 Learner",
  },
  {
    quote: "I learned a lot about AI tools and their practical use. The hands on approach of showing each things practically, showing how each tool actually works, made the sessions very effective. Looking forward to what's next.",
    name: "Muhammed Sinan B",
    role: "AI Yathra 1.0 Learner",
  },
  {
    quote: "AI YATHRA Broke My Brain in 48 Hours. If you're curious about AI but don't know where to start, I highly recommend keeping an eye out for their next event.",
    name: "Rahima SV",
    role: "AI Yathra 2.0 Learner",
  },
  {
    quote: "Big shoutout to Nihal Anas and Fathima Shirin from Elyst AI. Your passion to deliver value was obvious throughout the journey. Expecting more sessions like this!",
    name: "Muhammed Rasil N",
    role: "AI Yathra 1.0 Learner",
  },
  {
    quote: "Even though I use AI regularly, I realized there was an entire dimension I was missing until I attended AI Yathra. They created something truly valuable, a workshop that's both productive and transformative.",
    name: "Shaheen Raheem",
    role: "AI Yathra 2.0 Learner",
  },
  {
    quote: "Shirin and Nihal didn't just teach Gen AI, automations & AI tools. You guided us how to think, how to approach learning, it didn't feel like a webinar at all.",
    name: "Rohit P",
    role: "AI Yathra 1.0 Learner",
  },
];

const stats = [
  { value: 10, suffix: "+", label: "Businesses Worked With" },
  { value: 30, suffix: "+", label: "Sessions Delivered" },
  { value: 2, suffix: "", label: "Cohorts Completed" },
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
            <h2 className="font-display font-bold text-h2 text-white">What People Say After Our Sessions</h2>
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
