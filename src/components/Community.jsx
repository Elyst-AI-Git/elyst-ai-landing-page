import { motion } from "framer-motion";

const anim = (delay) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

const Community = () => {
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
          className="font-body text-body-size text-text-secondary mb-8 leading-relaxed"
        >
          Join Kerala's fastest-growing AI community. Get free resources, live sessions, and connect with 80+ members on WhatsApp.
        </motion.p>

        <motion.div
          {...anim(0.45)}
          className="flex justify-center"
        >
          {/* <button className="font-body font-bold text-sm bg-primary text-primary-foreground rounded-button h-13 px-8 hover:opacity-90 transition-opacity min-h-12">
            Get Started
          </button> */}
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="font-body font-bold text-sm text-text-primary rounded-button h-13 px-8 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-200 min-h-12"
            style={{ border: "1.5px solid hsl(var(--border))" }}
          >
            Join WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;