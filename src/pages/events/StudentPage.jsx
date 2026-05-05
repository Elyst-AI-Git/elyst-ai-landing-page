import React, { useEffect, useState } from 'react'
import TestimonialDeck from '../../components/events/TestimonialDeck'
import StudentFeedback from '../../components/events/StudentFeedback'
import mentor from '../../assets/mentor.jpeg'
import websiteBuilding from '../../assets/website-building.png'
const CURRICULUM = '/AI-for-juniors-curriculum.pdf'

const StudentPage = () => {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sections = ['about', 'testimonials', 'curriculum']
    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.4 }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach((obs, i) => {
      const el = document.getElementById(sections[i])
      if (obs && el) obs.unobserve(el)
    })
  }, [])

  const navLink = (id, label) => {
    const isActive = activeSection === id
    return (
      <a
        className={`font-body font-medium transition-colors pb-1 ${isActive ? 'text-[#00DF82] font-bold border-b-2 border-[#00DF82]' : 'text-white/60 hover:text-[#00DF82]'}`}
        href={`#${id}`}
      >{label}</a>
    )
  }

  return (
    <div className="student-page text-[#1a1a1a]" style={{ zoom: '90%' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined { font-family: 'Material Symbols Outlined'; font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; vertical-align: middle; font-style: normal; line-height: 1; letter-spacing: normal; }
        .glass-nav { background: rgba(3, 98, 76, 0.82); backdrop-filter: blur(20px); }
        @keyframes urgency-pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .urgency-dot { animation: urgency-pulse 1.5s infinite; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* ── Nav (code1 dark green style) ── */}
      <nav className="fixed top-0 w-full z-50 glass-nav" style={{ zoom: '110%' }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <a href="/" className="font-display text-2xl font-bold text-white tracking-tight" style={{ letterSpacing: '-0.075em' }}>elyst AI</a>
          <div className="hidden md:flex gap-8 items-center">
            {navLink('about', 'About')}
            {navLink('testimonials', 'Testimonials')}
            {navLink('curriculum', 'Curriculum')}
          </div>
          <button className="bg-[#00DF82] text-[#004837] px-6 py-2 rounded-full font-bold active:scale-95 transition-all hover:opacity-90 font-body hover:cursor-pointer" onClick={() => window.open('https://forms.gle/V6a1TWy1qj7WzRTi9', '_blank', 'noopener,noreferrer')}>
            Join Challenge
          </button>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          SECTION 1: HERO  (code1.html style)
      ══════════════════════════════════════ */}
      <header id="Hero" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-230.25 flex items-center bg-linear-to-br from-[#106851] to-[#005b46]">
        {/* Tile grid background */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">

          {/* Left */}
          <div className="space-y-8 flex flex-col items-start">
            {/* badge pill */}
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
              <button className="bg-[#30ef90] text-[#00532d] font-bold px-10 py-5 rounded-full text-lg shadow-xl shadow-[#30ef90]/20 active:scale-95 transition-all font-body hover:cursor-pointer" onClick={() => window.open('https://forms.gle/V6a1TWy1qj7WzRTi9', '_blank', 'noopener,noreferrer')}>
                Enroll Your Child
              </button>
              <div className="flex items-center gap-3 px-4">
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-[#106851] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALi4YM7wghviCOo2Hwk8ucwZBstOEis2ADsc1JluCIo5oh8yQAq3ByqTEsd1v5gqN-G8ufyJjenVTfZNLYqxtBSqpeUWO3Jv13LjowgwMFCexWHtmUQaA_GSYg3g6jbMZPoGZgrPMhLHJxircDHlqN15VcXZMYbjyeGQPUgk9Q8ARRK1wKK8DNv6e9eCqaYF_58jr_M6pYT1VMNx1_bmqtIzJBewqCQ3XpG4Elfb0b30rjJKjDjTV40DdoeT1RBGyjRuEfaURj8Ng" alt="Student" />
                  <img className="w-10 h-10 rounded-full border-2 border-[#106851] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPb3b8Jygs7vnhzqAGOd2p7cXnFZo7Wg98uRZAFTjnWG02whClv0tUHB4PJG2IpQGNG9KbfFHeZaO41HOVl3pvigBNJtfOwiqLy17xGjDKFYIm7sq9AkDXpiRlzPJmYUui6fLJHaCNZaT-CAYa6GxCwAh86zsa_YLm5p9fya_tPj-pVIddEJtQhx9A6r4q39yYHCoMw3PAi-acd0yLBF3-0ODgFkVJOfx_hivyhfVSLBDWZVC6cAQr_jq0KnmxBAs2YH2a0N0TvvA" alt="Student" />
                  <img className="w-10 h-10 rounded-full border-2 border-[#106851] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXooV6aeTS4MhWir1z83_YwS9XR6oNQEh9Kvg0tOkWf9AD1Fq9XWDV4BkTCp59RiE0676AJHKwATY2QHmuJngaYGZfDFwGnCVufYpRApuTzdKLo7TSH1LUR1hE2jGwYWJa0ns7ONK7bhJHxHMfzqSyh4D_x6wpPtzToKXn-sOxfW-OrVrQMBvMHTmi8wDJNK3VFrSZb98e0A2U3j8iXeIrOwC1-ZhWrfQUTvdWFGnyzbmGCtvK2J4piGCY4jTZoUicO9Msh0Igz9k" alt="Student" />
                </div>
                <span className="font-body text-white/80 text-sm font-medium">2000+ Students Trained</span>
              </div>
            </div>
          </div>

          {/* Right: image card + floating badge (code1 style) */}
          <div className="relative">
            {/* main rotated card */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 transform rotate-3">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5VelJgmVev21V_a_myygDlEIVYlPO97d88QSqjQWa7n35fOivLPX71S9peNzdwPst6QW-m9Lk6_c6uEBmi0Q4vpI1IkFy45uM0lGmG1fVZVPZXj-v1dQAoI4jbAfxVkZY5wa1EwpSNcfz1YGA714HE4DKMZCPdF8Cw26DXQqxpE5TYM5-jO9wb3OjrU_1R0v842-unqg7kqAA8pDEoc87Yb4k3VPLUTknjhUUCiVlPbrmKB5_qNfK08f5xyIN8Y_c5RL_PBEUGFs"
                alt="Students building with AI"
                className="rounded-lg shadow-2xl w-full object-cover"
              />
            </div>

            {/* floating card bottom-left */}
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
          SECTION 2: STATS  (code2.html style)
      ══════════════════════════════════════ */}
      <section id="about" className="py-24 px-6 bg-[#bcfeef] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">

            {/* Left: 4 tilted stat cards */}
            <div className="flex-1 order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-8 rounded-lg shadow-sm transform -rotate-3 hover:rotate-0 transition-all cursor-default">
                  <h3 className="font-display text-4xl font-bold text-[#004837]">5 Days</h3>
                  <p className="font-body text-[#2c655b] font-medium">Live Challenge</p>
                </div>
                <div className="p-8 rounded-lg shadow-sm translate-y-6 transform rotate-2 hover:rotate-0 transition-all cursor-default"
                  style={{ background: '#30ef90' }}>
                  <h3 className="font-display text-4xl font-bold text-[#003d20]">90 Mins</h3>
                  <p className="font-body text-[#003d20]/80 font-medium">Per Day</p>
                </div>
                <div className="p-8 rounded-lg shadow-sm -translate-y-2 transform -rotate-1 hover:rotate-0 transition-all cursor-default"
                  style={{ background: '#004837' }}>
                  <h3 className="font-display text-4xl font-bold text-[#00DF82]">5–10</h3>
                  <p className="font-body text-white/80 font-medium">Grade Level</p>
                </div>
                <div className="bg-[#99ecdb] p-8 rounded-lg shadow-sm translate-y-4 transform rotate-3 hover:rotate-0 transition-all cursor-default">
                  <h3 className="font-display text-4xl font-bold text-[#00362e]">1</h3>
                  <p className="font-body text-[#2c655b] font-medium">Certificate</p>
                </div>
              </div>
            </div>

            {/* Right: description */}
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
          SECTION 3: BENTO CURRICULUM  (code2.html style)
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 bg-[#d6fff5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#00362e]">Master Every Medium</h2>
            <p className="font-body text-[#2c655b] max-w-2xl mx-auto">From pixels to polygons, learn to command the AI for any creative task.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* Row 1 */}

            {/* Card 1 — large (AI Video Generation) */}
            <div className="md:col-span-8 group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#7fb8ac]/10 h-72 md:h-80">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://blogs-cdn.imagine.art/Lighting_Static_fc6de099d4.webp"
                alt="AI Video Generation"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,44,56,0.9) 0%, transparent 60%)' }} />
              <div className="absolute bottom-0 p-8 text-left">
                <span className="font-body px-3 py-1 bg-[#01d2ff] text-[#002c38] rounded-full text-xs font-bold mb-4 inline-block">VIDEO</span>
                <h3 className="font-display text-3xl font-bold text-white">AI Video Generation</h3>
                <p className="font-body text-white/70 mt-2 max-w-md">Create stunning AI-generated videos and animations effortlessly.</p>
              </div>
            </div>

            {/* Card 2 — small (AI Prompting) */}
            <div className="md:col-span-4 group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#7fb8ac]/10 h-72 md:h-80">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="AI Prompting"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,17,14,0.9) 0%, transparent 60%)' }} />
              <div className="absolute bottom-0 p-6 text-left">
                <span className="font-body px-3 py-1 bg-[#30ef90] text-[#00532d] rounded-full text-xs font-bold mb-4 inline-block">AI PROMPTING</span>
                <h3 className="font-display text-2xl font-bold text-white">AI Prompting</h3>
                <p className="font-body text-white/70 mt-2">Learn how to talk to AI effectively — craft prompts that get real, useful results every time.</p>
              </div>
            </div>

            {/* Row 2 */}

            {/* Card 3 — small (Creating Poster) */}
            <div className="md:col-span-4 group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#7fb8ac]/10 h-72 md:h-80">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://i.redd.it/whats-your-opinion-on-ai-generated-posters-v0-cquazb2soyfe1.png?width=1024&format=png&auto=webp&s=ec08a71a62a2fff90669fdf4b3f05d2a647c2bcf"
                alt="Creating Poster"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(16,104,81,0.9) 0%, transparent 60%)' }} />
              <div className="absolute bottom-0 p-6 text-left">
                <span className="font-body px-3 py-1 bg-[#30ef90] text-[#00532d] rounded-full text-xs font-bold mb-4 inline-block">DESIGN</span>
                <h3 className="font-display text-2xl font-bold text-white">Creating Poster</h3>
                <p className="font-body text-white/70 mt-2">Design eye-catching posters using AI image tools in minutes.</p>
              </div>
            </div>

            {/* Card 4 — large (Website Development) */}
            <div className="md:col-span-8 group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#7fb8ac]/10 h-72 md:h-80">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={websiteBuilding}
                alt="Website Development"
              />
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
          SECTION 4: WHAT PARENTS SAY (deck of cards)
      ══════════════════════════════════════ */}
      <div id="testimonials"><TestimonialDeck /></div>

      {/* ══════════════════════════════════════
          SECTION 4b: WHAT STUDENTS SAY (videos + audio)
      ══════════════════════════════════════ */}
      <StudentFeedback />

      {/* ══════════════════════════════════════
          SECTION 5: FEATURES  (code3.html style)
      ══════════════════════════════════════ */}
      <section id="curriculum" className="py-24 px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left: image with floating testimonial */}
          <div className="order-2 md:order-1 relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full blur-3xl" style={{ background: 'rgba(48,239,144,0.15)' }} />
            <div className="relative bg-[#a4f1e1] rounded-xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
              <img
                src={`https://lh3.googleusercontent.com/aida-public/AB6AXuAxtccEUej7djpm1vC8bvDQLbVZp9jObzhiZ_Wl_IL9YOl573Jy3uGdkRlbW0TJoUDdmbTJymbd2k7uW8YdQTaR4QJDrtPk7apPgvPKYkq8gABOfTIYqyvpdU0s2v5B7f3h95TDoXtgkTGYRAwlgWykSJtMBitfuxZIuRb4FlntjmSKTN09TRtkyoc0kIL0CUxlQVk_-NNDsQRMi7z4ps2wxk5MFIllL4_PL4Wu0kJuZZOJdsVX8177QVOtX9-0csNtfjSDkl7wpwk`}
                alt="Students learning with AI"
                className="w-full h-full object-cover"
              />
            </div>
            {/* floating testimonial card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-2xl border border-[#7fb8ac]/20 max-w-60">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-[#006a3b] rounded-full" />
                <span className="font-body text-xs font-bold uppercase tracking-wider text-[#2c655b]">Student Feedback</span>
              </div>
              <p className="font-display font-bold text-lg leading-tight text-[#00362e] text-left">"I made my own website using AI!"</p>
              <p className="font-body text-sm text-[#2c655b] mt-2 text-left">Rahil Farzad <br /> Grade 6</p>
            </div>
          </div>

          {/* Right: features */}
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
                  title: ' 1 Hour a Day, Real Results',
                  desc: 'Five focused live sessions that go from "what is AI?" to actually building something. No overwhelm, just momentum.',
                },
                {
                  icon: 'shield',
                  title: ' Built for Their Age',
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
          SECTION 6: MENTOR  (code3.html style)
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#d6fff5] relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 border border-[#7fb8ac]/30 rounded-xl overflow-hidden shadow-2xl shadow-[#004837]/5">

            {/* Left: photo */}
            <div className="h-105 md:h-auto overflow-hidden relative">
              <img
                src={mentor}
                alt="Shirin Fathima P"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8" style={{ background: 'linear-gradient(to top, rgba(0,72,55,0.85) 0%, transparent 100%)' }}>
                <p className="font-display font-bold text-2xl text-white">Fathima Shirin P</p>
                <p className="font-body text-white/80">Co-Founder, Elyst AI</p>
              </div>
            </div>

            {/* Right: text */}
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
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 7: FINAL CTA  (code3.html style)
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#d6fff5]">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-[#004837] rounded-xl p-12 md:p-20 text-center overflow-hidden">
            {/* decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#006a3b] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-40" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00647b] rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-30" />

            <div className="relative z-10 space-y-8">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                The <span className="text-[#00DF82]">best investment</span> this summer? 
              </h2>
              <p className="font-body text-white/80 text-xl max-w-2xl mx-auto mb-12">
                5 Days · 1 Hour/Day · Live + 1 Month Recorded Access
              </p>

              {/* pricing callout */}
              <div className="flex items-baseline justify-center gap-4 mb-4">
                <span className="font-display text-7xl font-bold text-[#00DF82]">₹699</span>
              </div>
              <p className="font-body text-white/50 text-sm mb-8">Secure Your Child's Spot →</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#00DF82] text-[#004837] text-lg font-bold px-10 py-5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all font-body hover:cursor-pointer" onClick={() => window.open('https://forms.gle/V6a1TWy1qj7WzRTi9', '_blank', 'noopener,noreferrer')}>
                  Register Now →
                </button>
              </div>

              {/* urgency */}
              <div className="flex items-center justify-center gap-2 mt-6">
                <span className="urgency-dot w-2 h-2 rounded-full bg-[#00DF82] inline-block shrink-0" />
                <p className="font-body text-sm font-bold text-white/50 uppercase tracking-widest">BATCH FILLING FAST · ONLY LIMITED SEATS PER BATCH</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#022d22] py-12">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="font-display font-bold text-[#00DF82] text-xl block mb-2">elyst AI</span>
            <p className="font-body text-white/45 text-sm max-w-xs">Building AI skills for the next generation.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-body">
            {['Safety Guidelines', 'FAQ', 'Parent Resources', 'Privacy Policy'].map((link) => (
              <a key={link} className="text-[#00DF82] hover:opacity-75 transition-opacity" href="#">{link}</a>
            ))}
          </div>
          <p className="font-body text-white/25 text-xs text-center md:text-right">© 2026 Elyst AI. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default StudentPage
