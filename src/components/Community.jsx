import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const anim = (delay) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

const Community = () => {
  const navigate = useNavigate();
  return (
    <section id="community" className="py-12 md:py-16 px-(--section-px) bg-background">
      <div className="max-w-175 mx-auto">
        <motion.span
          {...anim(0)}
          className="inline-block font-body font-bold text-xs text-primary uppercase tracking-widest rounded-pill px-4 py-2 mb-6"
          style={{ border: "1px solid hsl(var(--primary) / 0.3)" }}
        >
          JOIN THE AI REVOLUTION
        </motion.span>

        <motion.h2
          {...anim(0.15)}
          className="font-display font-bold text-h1 text-text-primary mb-6"
        >
          Ready to Start Your AI Journey With Us?
        </motion.h2>

        <motion.p
          {...anim(0.3)}
          className="font-body text-body-size text-text-secondary mb-10 leading-relaxed"
        >
          Whether you're a professional who wants to actually use AI in your work or a business that needs AI built into how you operate, there's a place for you here.
        </motion.p>

        <motion.div
          {...anim(0.42)}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={() => navigate("/community")}
            className="group font-body font-bold text-sm bg-primary text-white rounded-button h-13 px-8 gap-2 flex items-center justify-center hover:opacity-90 transition-all duration-200 min-h-12 hover:gap-3 cursor-pointer"
          >
            Apply for a Founding Spot
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>

          <button
            onClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}
            className="group font-body font-bold text-sm bg-surface-dark text-white rounded-button h-13 px-8 gap-2 flex items-center justify-center hover:opacity-90 transition-all duration-200 min-h-12 hover:gap-3 cursor-pointer"
          >
            Start a Conversation
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
