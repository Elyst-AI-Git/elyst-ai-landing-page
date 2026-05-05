import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import TestimonialDeck from '../../components/events/TestimonialDeck'
import StudentFeedback from '../../components/events/StudentFeedback'
import mentor from '../../assets/mentor.jpeg'
import juniorVideoGen from '../../assets/junior-video-gen.png'
import juniorPrompting from '../../assets/junior-prompting.png'
import juniorDesign from '../../assets/junior-design.png'
import juniorWebsite from '../../assets/junior-website.png'

const CURRICULUM = '/AI-for-juniors-curriculum.pdf'

/* ─── FAQ ────────────────────────────────────────────────────── */
const faqs = [
  {
    q: 'What grade levels is this for?',
    a: 'AI for Juniors is designed for students in Grades 5–10, roughly ages 10–16. Sessions are structured to match that range — clear enough for younger students, stimulating enough for older ones.',
    rotation: -2,
  },
  {
    q: 'Does my child need any technical background?',
    a: 'Not at all. We start from absolute scratch. No coding, no prior knowledge of AI — just curiosity. By Day 5, they\'ll have built something real.',
    rotation: 1.5,
  },
  {
    q: 'What will my child actually build?',
    a: 'Every student creates a real AI-powered website by Day 5, using prompt engineering, AI image tools, and video generation. It\'s hands-on from the very first session.',
    rotation: -1,
  },
  {
    q: 'Are sessions live or recorded?',
    a: 'All 5 sessions are live with the instructor. Students get full recorded access for 1 month after the program ends.',
    rotation: 2,
  },
  {
    q: "What's the total time commitment?",
    a: 'Just 90 minutes per day for 5 days. Short enough to stay focused, long enough to actually build something worth showing off.',
    rotation: -1.5,
  },
  {
    q: 'What if my child misses a session?',
    a: 'No worries — each session is recorded. Enrolled students get 1 month of access to all recordings so they can catch up at their own pace.',
    rotation: 1,
  },
]

function FAQCard({ q, a, rotation }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      onClick={() => setOpen(o => !o)}
      style={{
        background: open ? '#fff' : '#fff',
        border: `1.5px solid ${open ? '#00DF82' : 'rgba(0,72,55,0.1)'}`,
        borderRadius: 16,
        padding: '20px 22px',
        cursor: 'pointer',
        transform: open ? 'rotate(0deg)' : `rotate(${rotation}deg)`,
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s ease, border-color 0.25s ease',
        boxShadow: open ? '0 14px 44px rgba(0,72,55,0.14)' : '0 4px 16px rgba(0,72,55,0.08)',
        position: 'relative',
        zIndex: open ? 2 : 1,
        userSelect: 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
        <h4 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
          color: '#00362e', margin: 0, lineHeight: 1.4, textAlign: 'left',
        }}>{q}</h4>
        <div style={{
          width: 30, height: 30, borderRadius: '50%',
          background: open ? '#00DF82' : 'rgba(0,72,55,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          transition: 'background 0.25s ease, transform 0.35s ease',
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="#004837" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div style={{
        overflow: 'hidden',
        maxHeight: open ? 200 : 0,
        opacity: open ? 1 : 0,
        transition: 'max-height 0.35s ease, opacity 0.3s ease',
        marginTop: open ? 14 : 0,
        paddingTop: open ? 14 : 0,
        borderTop: open ? '1px solid rgba(0,72,55,0.1)' : '1px solid transparent',
      }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.94rem', color: '#2c655b',
          lineHeight: 1.7, margin: 0, textAlign: 'left',
        }}>{a}</p>
      </div>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */
const ENROLL_URL = 'https://forms.gle/PWZteGnuDJYDm84Y7'

const StudentPage = () => {
  const navigate = useNavigate()
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const navCustomLinks = [
    { label: 'Home', action: () => navigate('/') },
    { label: 'About', action: () => scrollTo('about') },
    { label: 'Curriculum', action: () => scrollTo('curriculum') },
    { label: 'Testimonials', action: () => scrollTo('testimonials') },
  ]
  return (
    <div className="student-page text-[#1a1a1a]">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined { font-family: 'Material Symbols Outlined'; font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; vertical-align: middle; font-style: normal; line-height: 1; letter-spacing: normal; }
        @keyframes urgency-pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .urgency-dot { animation: urgency-pulse 1.5s infinite; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* ── Main Navbar ── */}
      <Navbar
        ctaText="Enroll Now"
        ctaAction={() => window.open(ENROLL_URL, '_blank', 'noopener,noreferrer')}
        customLinks={navCustomLinks}
      />

      {/* ══════════════════════════════════════
          SECTION 1: HERO
      ══════════════════════════════════════ */}
      <header id="Hero" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-230.25 flex items-center bg-linear-to-br from-[#106851] to-[#005b46]">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <div className="space-y-8 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 bg-[#30ef90]/20 border border-[#30ef90]/30 rounded-full px-4 py-2 text-[#30ef90]">
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              <span className="font-body text-xs font-bold tracking-wider uppercase">Next-Gen AI Learning</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight text-left">
              Your Child Will Build with AI in <span className="text-[#30ef90]">Just 5 Days</span>
            </h1>

            <p className="font-body text-xl text-white/80 max-w-lg leading-relaxed text-left">
              Not just watching AI, your child will learn what AI is, how to talk to it, and build something real with it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#30ef90] text-[#00532d] font-bold px-10 py-5 rounded-full text-lg shadow-xl shadow-[#30ef90]/20 active:scale-95 transition-all font-body hover:cursor-pointer" onClick={() => window.open('https://forms.gle/PWZteGnuDJYDm84Y7', '_blank', 'noopener,noreferrer')}>
                Enroll Your Child
              </button>
              <div className="flex items-center gap-3 px-2">
                <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2.5">
                  <span className="font-display font-bold text-[#30ef90] text-lg leading-none">2000+</span>
                  <span className="font-body text-white/90 text-sm font-semibold">Students Trained</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 transform rotate-3">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5VelJgmVev21V_a_myygDlEIVYlPO97d88QSqjQWa7n35fOivLPX71S9peNzdwPst6QW-m9Lk6_c6uEBmi0Q4vpI1IkFy45uM0lGmG1fVZVPZXj-v1dQAoI4jbAfxVkZY5wa1EwpSNcfz1YGA714HE4DKMZCPdF8Cw26DXQqxpE5TYM5-jO9wb3OjrU_1R0v842-unqg7kqAA8pDEoc87Yb4k3VPLUTknjhUUCiVlPbrmKB5_qNfK08f5xyIN8Y_c5RL_PBEUGFs"
                alt="Students building with AI"
                className="rounded-lg shadow-2xl w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-2xl flex items-center gap-4 -rotate-3">
              <div className="bg-[#30ef90] p-3 rounded-full">
                <span className="material-symbols-outlined text-[#00532d]">rocket_launch</span>
              </div>
              <div>
                <div className="font-display font-bold text-[#1a1a1a]">5 Live Sessions</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════
          SECTION 2: WHAT IS AI FOR JUNIORS
      ══════════════════════════════════════ */}
      <section id="about" className="py-24 px-6 bg-[#bcfeef] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">

            <div className="flex-1 order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-8 rounded-lg shadow-sm transform -rotate-3 hover:rotate-0 transition-all cursor-default">
                  <h3 className="font-display text-4xl font-bold text-[#004837]">5 Days</h3>
                  <p className="font-body text-[#2c655b] font-medium">Live Challenge</p>
                </div>
                <div className="p-8 rounded-lg shadow-sm translate-y-6 transform rotate-2 hover:rotate-0 transition-all cursor-default" style={{ background: '#30ef90' }}>
                  <h3 className="font-display text-4xl font-bold text-[#003d20]">90 Mins</h3>
                  <p className="font-body text-[#003d20]/80 font-medium">Per Day</p>
                </div>
                <div className="p-8 rounded-lg shadow-sm -translate-y-2 transform -rotate-1 hover:rotate-0 transition-all cursor-default" style={{ background: '#004837' }}>
                  <h3 className="font-display text-4xl font-bold text-[#00DF82]">5–10</h3>
                  <p className="font-body text-white/80 font-medium">Grade Level</p>
                </div>
                <div className="bg-[#99ecdb] p-8 rounded-lg shadow-sm translate-y-4 transform rotate-3 hover:rotate-0 transition-all cursor-default">
                  <h3 className="font-display text-4xl font-bold text-[#00362e]">1</h3>
                  <p className="font-body text-[#2c655b] font-medium">Certificate</p>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-6 order-1 md:order-2">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#00362e] leading-tight text-left">
                What is <span className="text-[#006a3b]">AI for Juniors?</span>
              </h2>
              <p className="font-body text-lg text-[#2c655b] leading-relaxed text-left">
                Most kids use AI to cheat on homework. We teach them <span className="font-bold text-[#004837] italic">to create</span> with it. Over 5 live sessions, your child learns to prompt, design, and build the skills that actually matter.
              </p>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                <div className="w-12 h-12 bg-[#30ef90] rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#00532d]">school</span>
                </div>
                <div>
                  <p className="font-display font-bold text-[#00362e] text-left">No technical knowledge needed, we will start from scratch</p>
                  <p className="font-body text-sm text-[#2c655b] text-left">Grades 5-10</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3: MASTER EVERY MEDIUM
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 bg-[#d6fff5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#00362e]">Master Every Medium</h2>
            <p className="font-body text-[#2c655b] max-w-2xl mx-auto">From pixels to polygons, learn to command the AI for any creative task.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#7fb8ac]/10 h-72 md:h-80">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={juniorDesign} alt="AI Video Generation" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,44,56,0.9) 0%, transparent 60%)' }} />
              <div className="absolute bottom-0 p-8 text-left">
                <span className="font-body px-3 py-1 bg-[#01d2ff] text-[#002c38] rounded-full text-xs font-bold mb-4 inline-block">VIDEO</span>
                <h3 className="font-display text-3xl font-bold text-white">AI Video Generation</h3>
                <p className="font-body text-white/70 mt-2 max-w-md">Create stunning AI-generated videos and animations effortlessly.</p>
              </div>
            </div>

            <div className="md:col-span-4 group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#7fb8ac]/10 h-72 md:h-80">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={juniorVideoGen} alt="AI Prompting" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,17,14,0.9) 0%, transparent 60%)' }} />
              <div className="absolute bottom-0 p-6 text-left">
                <span className="font-body px-3 py-1 bg-[#30ef90] text-[#00532d] rounded-full text-xs font-bold mb-4 inline-block">AI PROMPTING</span>
                <h3 className="font-display text-2xl font-bold text-white">AI Prompting</h3>
                <p className="font-body text-white/70 mt-2">Learn how to talk to AI effectively — craft prompts that get real, useful results every time.</p>
              </div>
            </div>

            <div className="md:col-span-4 group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#7fb8ac]/10 h-72 md:h-80">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={juniorPrompting} alt="Creating Poster" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(16,104,81,0.9) 0%, transparent 60%)' }} />
              <div className="absolute bottom-0 p-6 text-left">
                <span className="font-body px-3 py-1 bg-[#30ef90] text-[#00532d] rounded-full text-xs font-bold mb-4 inline-block">DESIGN</span>
                <h3 className="font-display text-2xl font-bold text-white">Creating Poster</h3>
                <p className="font-body text-white/70 mt-2">Design eye-catching posters using AI image tools in minutes.</p>
              </div>
            </div>

            <div className="md:col-span-8 group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#7fb8ac]/10 h-72 md:h-80">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={juniorWebsite} alt="Website Development" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,106,59,0.9) 0%, transparent 60%)' }} />
              <div className="absolute bottom-0 p-8 text-left">
                <span className="font-body px-3 py-1 bg-[#9eecd0] text-[#005945] rounded-full text-xs font-bold mb-4 inline-block">DEVELOPMENT</span>
                <h3 className="font-display text-3xl font-bold text-white">Website Development</h3>
                <p className="font-body text-white/70 mt-2 max-w-md">Generate entire web architectures with just natural language prompts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4: AI WILL BE THEIR NEWEST SUPERPOWER (moved here)
      ══════════════════════════════════════ */}
      <section id="curriculum" className="py-24 px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="order-2 md:order-1 relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full blur-3xl" style={{ background: 'rgba(48,239,144,0.15)' }} />
            <div className="relative bg-[#a4f1e1] rounded-xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxtccEUej7djpm1vC8bvDQLbVZp9jObzhiZ_Wl_IL9YOl573Jy3uGdkRlbW0TJoUDdmbTJymbd2k7uW8YdQTaR4QJDrtPk7apPgvPKYkq8gABOfTIYqyvpdU0s2v5B7f3h95TDoXtgkTGYRAwlgWykSJtMBitfuxZIuRb4FlntjmSKTN09TRtkyoc0kIL0CUxlQVk_-NNDsQRMi7z4ps2wxk5MFIllL4_PL4Wu0kJuZZOJdsVX8177QVOtX9-0csNtfjSDkl7wpwk"
                alt="Students learning with AI"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-2xl border border-[#7fb8ac]/20 max-w-60">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-[#006a3b] rounded-full" />
                <span className="font-body text-xs font-bold uppercase tracking-wider text-[#2c655b]">Student Feedback</span>
              </div>
              <p className="font-display font-bold text-lg leading-tight text-[#00362e] text-left">"I made my own website using AI!"</p>
              <p className="font-body text-sm text-[#2c655b] mt-2 text-left">Rahil Farzad <br /> Grade 6</p>
            </div>
          </div>

          <div className="order-1 md:order-2 text-left">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#00362e] mb-8 text-left">
              AI will be their <span className="text-[#004837]">newest superpower.</span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  icon: 'bolt',
                  title: 'No Coding Required',
                  desc: 'We focus on Prompt Engineering — teaching kids to communicate with AI using plain language. Zero syntax, all creativity.',
                },
                {
                  icon: 'psychology',
                  title: '90 Mins a Day, Real Results',
                  desc: 'Five focused live sessions that go from "what is AI?" to actually building something. No overwhelm, just momentum.',
                },
                {
                  icon: 'shield',
                  title: 'Built for Their Age',
                  desc: 'Every session is designed for grades 5-10 — simple enough to follow, challenging enough to excite.',
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-[#004837] rounded-full flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold mb-2 text-[#00362e]">{title}</h4>
                    <p className="font-body text-[#2c655b]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-16">
              <a href={CURRICULUM} download="AI for juniors - Elyst AI.pdf" className="text-[#004837] bg-[#00DF82] text-lg font-bold px-10 py-5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all font-body hover:cursor-pointer">
                Curriculum
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 5: WHAT PARENTS SAY
      ══════════════════════════════════════ */}
      <div id="testimonials"><TestimonialDeck /></div>

      {/* ══════════════════════════════════════
          SECTION 6: WHAT STUDENTS SAY
      ══════════════════════════════════════ */}
      <StudentFeedback />

      {/* ══════════════════════════════════════
          SECTION 7: MENTOR
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#d6fff5] relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 border border-[#7fb8ac]/30 rounded-xl overflow-hidden shadow-2xl shadow-[#004837]/5">

            <div className="h-105 md:h-auto overflow-hidden relative">
              <img src={mentor} alt="Fathima Shirin P" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-8" style={{ background: 'linear-gradient(to top, rgba(0,72,55,0.85) 0%, transparent 100%)' }}>
                <p className="font-display font-bold text-2xl text-white">Fathima Shirin P</p>
                <p className="font-body text-white/80">Co-Founder, Elyst AI</p>
              </div>
            </div>

            <div className="p-12 md:p-16 flex flex-col justify-center bg-white">
              <div className="inline-block bg-[#004837]/10 text-[#004837] px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-6 font-body">Expert Guidance</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#00362e] mb-6 leading-tight text-left">
                Learn from Someone Who's Built It
              </h2>
              <p className="font-body text-[#2c655b] text-lg leading-relaxed mb-8 text-left">
                "Shirin is one of Kerala's first BTech AI graduates — and she's been teaching it ever since. Her superpower? Making AI feel like something your child can actually do, not just read about."
              </p>
              <div className="space-y-4 border-t border-[#7fb8ac]/20 pt-8">
                {[
                  '30+ sessions delivered',
                  '2,000+ Students Trained in AI',
                  'Co-founder of Elyst AI',
                ].map((cred) => (
                  <div key={cred} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#004837]">verified</span>
                    <span className="font-body font-bold text-[#00362e] text-left">{cred}</span>
                  </div>
                ))}
              </div>
              {/* Social links */}
              <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                <a
                  href="https://www.instagram.com/fathimashirin.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: '#004837',
                    border: '1px solid rgba(0,72,55,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', transition: 'background 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#00DF82'}
                  onMouseLeave={e => e.currentTarget.style.background = '#004837'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/fathimashirin-p/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: '#004837',
                    border: '1px solid rgba(0,72,55,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', transition: 'background 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#00DF82'}
                  onMouseLeave={e => e.currentTarget.style.background = '#004837'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 8: FINAL CTA
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#d6fff5]">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-[#004837] rounded-xl p-12 md:p-20 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#006a3b] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-40" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00647b] rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-30" />

            <div className="relative z-10 space-y-8">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                The <span className="text-[#00DF82]">best investment</span> this summer
              </h2>
              <p className="font-body text-white/80 text-xl max-w-2xl mx-auto mb-12">
                5 Days · 90 Mins/Day · Live + 1 Month Recorded Access
              </p>

              <div className="flex items-baseline justify-center gap-4 mb-4">
                <span className="font-display text-7xl font-bold text-[#00DF82]">₹999</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#00DF82] text-[#004837] text-lg font-bold px-10 py-5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all font-body hover:cursor-pointer" onClick={() => window.open('https://forms.gle/PWZteGnuDJYDm84Y7', '_blank', 'noopener,noreferrer')}>
                  Register Now →
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 mt-6">
                <span className="urgency-dot w-2 h-2 rounded-full bg-[#00DF82] inline-block shrink-0" />
                <p className="font-body text-sm font-bold text-white/50 uppercase tracking-widest">BATCH FILLING FAST · ONLY LIMITED SEATS PER BATCH</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 9: FAQ
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#bcfeef]">
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-14">
            <span style={{
              display: 'inline-block',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700, fontSize: '0.75rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#004837', background: 'rgba(3,98,76,0.12)',
              padding: '6px 18px', borderRadius: '999px', marginBottom: 20,
            }}>Got Questions?</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#00362e] leading-tight">
              Everything you need to <span className="text-[#006a3b]">know.</span>
            </h2>
            <p className="font-body text-[#2c655b] mt-4 text-lg">
              If it's not here, just reach out.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.map((faq, i) => (
              <FAQCard key={i} q={faq.q} a={faq.a} rotation={faq.rotation} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-body text-[#2c655b] mb-4">Still have a question?</p>
            <a
              href="tel:+919633288931"
              className="font-body font-bold text-[#004837] border-b-2 border-[#00DF82] pb-1 hover:opacity-70 transition-opacity"
            >
              +91-9633288931
            </a>
          </div>

        </div>
      </section>

      {/* ── Main Footer ── */}
      <Footer />

    </div>
  )
}

export default StudentPage
