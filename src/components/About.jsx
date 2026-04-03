import { useState } from "react";
import { motion } from "framer-motion";
import accelerator from "../assets/AI accelerator.jpg";
import business from "../assets/AI business.jpg";

const BUSINESS_IMAGE = business;
const ACCELERATOR_IMAGE = accelerator;

const cardAnim = (delay) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: "easeOut" },
});

function HoverCard({ tag, badge, title, description, cta, onCtaClick, imageSrc, imagePlaceholder, light, delay }) {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: light ? "#03624C" : "#ffffff",
    color: light ? "#ffffff" : "#03624C",
    border: "none",
    borderRadius: 999,
    padding: "12px 24px",
    fontSize: "0.9rem",
    cursor: "pointer",
    transition: "opacity 0.2s",
  };

  const hoverButtonStyle = {
    ...buttonStyle,
    padding: "10px 18px",
    fontSize: "0.82rem",
    alignSelf: "center",
  };

  return (
    <motion.div
      {...cardAnim(delay)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 24,
        overflow: "hidden",
        minHeight: 460,
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: imageSrc ? `url(${imageSrc})` : imagePlaceholder,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.6s ease",
          transform: hovered ? "scale(1.04)" : "scale(1)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: light
            ? `rgba(0,0,0,${hovered ? 0.3 : 0.15})`
            : `rgba(0,0,0,${hovered ? 0.55 : 0.38})`,
          transition: "background 0.4s ease",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "72%",
          background: light
            ? "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
          transition: "opacity 0.4s ease",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: light
            ? "rgba(0, 223, 130, 0.88)"
            : "rgba(3, 18, 10, 0.88)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "36px 32px",
          backdropFilter: "blur(4px)",
        }}
      >
        <p
          className="font-body"
          style={{
            color: light ? "#0d1a10" : "rgba(255,255,255,0.85)",
            fontSize: "0.98rem",
            lineHeight: 1.7,
            maxWidth: "32rem",
            marginBottom: 24,
          }}
        >
          {description}
        </p>
        <button
          onClick={onCtaClick}
          className="font-body font-bold"
          style={hoverButtonStyle}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
        >
          {cta} →
        </button>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "24px 28px 28px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 20,
          minHeight: 460,
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.3s ease",
          pointerEvents: hovered ? "none" : "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                width: 10,
                height: 10,
                background: light ? "#2ec866" : "#ffffff",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span
              className="font-body font-bold"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: light ? "#2ec866" : "rgba(255,255,255,0.85)",
              }}
            >
              {tag}
            </span>
          </div>
          {badge && (
            <span
              className="font-body font-bold"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: light ? "#2ec866" : "#ffffff",
                color: light ? "#060d09" : "#03624C",
                borderRadius: 4,
                padding: "4px 10px",
              }}
            >
              {badge}
            </span>
          )}
        </div>

        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 18, maxWidth: "34rem" }}>
          <h3
            className="font-display font-bold"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: "#ffffff",
              lineHeight: 1.1,
              maxWidth: "70%",
            }}
          >
            {title}
          </h3>
          <button
            onClick={onCtaClick}
            className="font-body font-bold"
            style={buttonStyle}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            {cta} →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-14">
          <div>
            <h2 className="font-display font-bold text-h1 text-text-primary mb-6">
              What We Do
            </h2>
          </div>
          <p className="font-body text-body-size text-text-secondary leading-[1.7] text-left">
            Elyst AI works at the intersection of AI systems and professional upskilling. We build AI systems for businesses and we run a community where professionals learn to apply AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <HoverCard
            delay={0}
            tag="Business Path"
            title="AI for Business"
            description="We work with a small number of companies at a time to build AI systems that fit how they actually operate - content pipelines, workflow automation, AI-assisted lead generation, and team training. Deep work, not surface-level consulting."
            cta="Start a Conversation"
            onCtaClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}
            imageSrc={BUSINESS_IMAGE}
            imagePlaceholder="linear-gradient(135deg, #071a10 0%, #0d3d25 50%, #1a5c35 100%)"
            light={false}
          />

          <HoverCard
            delay={0.12}
            tag="Upskilling Path"
            badge="Launching Soon"
            title="AI Accelerator"
            description="A curated community for professionals who want to use AI without the overwhelm. Weekly updates, live sessions, real challenges, and a network of people figuring it out alongside you. This is not a course. It is a room where serious people show up and do the work."
            cta="Apply for a Founding Spot"
            onCtaClick={() => window.open("#", "_blank")}
            imageSrc={ACCELERATOR_IMAGE}
            imagePlaceholder="linear-gradient(135deg, #00c96a 0%, #00df82 50%, #2ec866 100%)"
            light={true}
          />

        </div>
      </div>
    </section>
  );
};

export default About;
