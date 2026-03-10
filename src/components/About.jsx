import { motion } from "framer-motion";

const cardAnim = (delay) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: "easeOut"},
});

const About = () => {
  return (
    <section
      id="about"
      className="section-padding"
      style={{
        background: `linear-gradient(180deg, hsl(140 18% 97%) 0%, hsl(140 18% 97%) 95%, #03624C 100%)`,
      }}
    >
      <div className="max-w-300 mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-14">
          <div>
            <h2 className="font-display font-bold text-h1 text-text-primary mb-6">
              What is Elyst AI?
            </h2>
          </div>
          <p className="font-body text-body-size text-text-secondary leading-[1.7]">
            Elyst AI is Kerala's first Malayalam-first AI education and automation company. We help non-technical professionals, students, and businesses understand and apply AI — practically, affordably, and in a language that feels like home.
          </p>
        </div>

        {/* Two cards - reference style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 - Light accent */}
          <motion.div
            {...cardAnim(0)}
            className="rounded-card overflow-hidden flex flex-col justify-between min-h-80"
            style={{
              background: "rgba(0, 223, 130, 0.07)",
              border: "1px solid rgba(0, 223, 130, 0.15)",
            }}
          >
            <div className="p-8 flex flex-col h-full justify-between">
              <h3 className="font-display font-bold text-h2 text-text-primary mb-4">
                AI Education
              </h3>
              <p className="font-body text-body-size text-text-secondary leading-relaxed mt-auto">
                Learn AI practically through Malayalam-first workshops, cohorts, and courses designed for real-world application.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Dark */}
          <motion.div
            {...cardAnim(0.15)}
            className="rounded-card overflow-hidden flex flex-col justify-between min-h-80 bg-surface-dark"
          >
            <div className="p-8 flex flex-col h-full justify-between">
              <h3 className="font-display font-bold text-h2 text-text-on-dark mb-4">
                AI Automation
              </h3>
              <p className="font-body text-body-size text-text-muted-dark leading-relaxed mt-auto">
                We build AI automation solutions for businesses — from content pipelines to AI avatars and process optimization.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
