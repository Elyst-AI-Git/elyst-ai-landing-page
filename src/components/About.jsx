import { useState } from "react";
import { motion } from "framer-motion";
import accelerator from "../assets/AI accelerator.jpg";
import business from "../assets/AI business.jpg";

// Replace these paths with actual images when ready
const BUSINESS_IMAGE = business;
const ACCELERATOR_IMAGE = accelerator;

const cardAnim = (delay) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: "easeOut" },
});

function HoverCard({ tag, badge, title, description, points, cta, onCtaClick, imageSrc, imagePlaceholder, light, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      {...cardAnim(delay)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 24,
        overflow: "hidden",
        minHeight: 420,
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {/* Background image or gradient placeholder */}
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

      {/* Base dark overlay - always present, slightly stronger on hover */}
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

      {/* Bottom gradient — always visible to make title readable */}
      <div
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: "70%",
          background: light
            ? "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Hover detail overlay */}
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
          justifyContent: "center",
          padding: "36px 32px",
          backdropFilter: "blur(4px)",
        }}
      >
        <p
          className="font-body"
          style={{
            color: light ? "#0d1a10" : "rgba(255,255,255,0.8)",
            fontSize: "0.95rem",
            lineHeight: 1.7,
            marginBottom: points?.length ? 20 : 0,
          }}
        >
          {description}
        </p>
        {points?.length > 0 && (
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
            {points.map((p) => (
              <li
                key={p}
                className="font-body text-sm"
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                  color: light ? "#0d1a10" : "rgba(255,255,255,0.85)",
                }}
              >
                <span style={{ color: light ? "#03624C" : "#2ec866", fontWeight: 700, flexShrink: 0 }}>✓</span>
                {p}
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={onCtaClick}
          className="font-body font-bold"
          style={{
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
            alignSelf: "flex-start",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85" }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1" }}
        >
          {cta} →
        </button>
      </div>

      {/* Always-visible content layer */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "24px 28px 28px",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.3s ease",
          pointerEvents: hovered ? "none" : "auto",
        }}
      >
        {/* Top row: tag + optional badge */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 28,
            right: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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

        {/* Bottom: title + arrow */}
        <div style={{ marginTop: "auto", display: "flex", alignItems: "flex-end", justifyContent: "space-between", minHeight: 340 }}>
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
          {/* <div
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: light ? "#2ec866" : "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              fontSize: "1.2rem",
              color: light ? "#060d09" : "#03624C",
              fontWeight: 700,
            }}
          >
            ↗
          </div> */}
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
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-14">
          <div>
            <h2 className="font-display font-bold text-h1 text-text-primary mb-6">
              What We Do
            </h2>
          </div>
          <p className="font-body text-body-size text-text-secondary leading-[1.7]">
            Elyst AI works at the intersection of AI systems and professional upskilling. We build AI infrastructure for businesses and we run a community where professionals learn to apply AI to their actual work, not in theory, but in practice.
          </p>
        </div>

        {/* Two hover cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <HoverCard
            delay={0}
            tag="Business Path"
            title="AI for Your Business"
            description="We work with a small number of companies at a time to build AI systems that fit how they actually operate. Deep work, not surface-level consulting."
            points={[
              "Content pipelines & workflow automation",
              "AI-assisted lead generation",
              "Team training & implementation",
            ]}
            cta="Start a Conversation"
            onCtaClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}
            imageSrc={BUSINESS_IMAGE}
            imagePlaceholder="linear-gradient(135deg, #071a10 0%, #0d3d25 50%, #1a5c35 100%)"
            light={false}
          />

          <HoverCard
            delay={0.12}
            tag="Learning Path"
            badge="Launching Soon"
            title="AI Accelerator"
            description="A curated community for professionals who want to use AI without the overwhelm. This is not a course. It is a room where serious people show up and do the work."
            points={[
              "Weekly AI Signal — curated, not noisy",
              "Live sessions & real challenges",
              "A network of people who are already ahead",
            ]}
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
