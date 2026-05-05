import React, { useState } from 'react'

/* ─── Waveform SVG ─────────────────────────────────────────────── */
function WaveformSVG({ color = '#00DF82', secondaryColor = '#004837' }) {
  const bars = [35, 55, 80, 50, 90, 65, 42, 88, 60, 48, 78, 95, 58, 38, 82, 52, 72, 88, 44, 62]
  return (
    <svg width="88" height="32" viewBox="0 0 88 32" fill="none" aria-label="audio waveform">
      {bars.map((h, i) => {
        const barH = h * 0.3
        const y = (32 - barH) / 2
        return (
          <rect
            key={i}
            x={i * 4.4}
            y={y}
            width="3"
            height={barH}
            rx="1.5"
            fill={i % 3 === 0 ? secondaryColor : color}
            opacity={0.6 + (i % 4) * 0.1}
          />
        )
      })}
    </svg>
  )
}

/* ─── Video Card ───────────────────────────────────────────────── */
function VideoCard({ featured, thumbnailGradient, name, grade, quote, duration }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: thumbnailGradient,
        borderRadius: featured ? 20 : 16,
        overflow: 'hidden',
        position: 'relative',
        height: featured ? '100%' : '100%',
        minHeight: featured ? 340 : 180,
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: hovered ? 'scale(1.015)' : 'scale(1)',
        boxShadow: hovered
          ? '0 24px 64px rgba(0,72,55,0.28)'
          : '0 4px 24px rgba(0,72,55,0.12)',
      }}
    >
      {/* Subtle grid texture overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,72,55,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,72,55,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
      }} />

      {/* Play button */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
      }}>
        <div style={{
          width: featured ? 68 : 52,
          height: featured ? 68 : 52,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.96)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
          transform: hovered ? 'scale(1.12)' : 'scale(1)',
          transition: 'transform 0.3s ease',
        }}>
          <svg
            width={featured ? 22 : 17}
            height={featured ? 22 : 17}
            viewBox="0 0 24 24"
            fill="#004837"
            style={{ marginLeft: 3 }}
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Duration badge */}
      <div style={{
        position: 'absolute',
        top: 12,
        right: 12,
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(4px)',
        color: '#fff',
        fontSize: '0.68rem',
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 700,
        padding: '4px 10px',
        borderRadius: 8,
        zIndex: 3,
        letterSpacing: '0.05em',
      }}>
        {duration}
      </div>

      {/* Bottom gradient + info */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: featured ? '40px 24px 24px' : '28px 16px 16px',
        background: 'linear-gradient(to top, rgba(0,28,18,0.92) 0%, rgba(0,28,18,0.4) 60%, transparent 100%)',
        zIndex: 2,
      }}>
        <span style={{
          display: 'inline-block',
          background: '#00DF82',
          color: '#004837',
          fontSize: '0.62rem',
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 800,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '3px 10px',
          borderRadius: 999,
          marginBottom: 8,
        }}>
          {grade}
        </span>

        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: featured ? '1.1rem' : '0.92rem',
          color: '#fff',
          marginBottom: quote ? 8 : 0,
          letterSpacing: '-0.03em',
        }}>
          {name}
        </div>

        {quote && (
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: featured ? '0.9rem' : '0.8rem',
            color: 'rgba(255,255,255,0.72)',
            fontStyle: 'italic',
            borderLeft: '2px solid #00DF82',
            paddingLeft: 10,
            lineHeight: 1.45,
          }}>
            "{quote}"
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── Audio Pill ───────────────────────────────────────────────── */
function AudioPill({ name, teaser }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      onClick={() => setPlaying(p => !p)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        background: playing ? '#004837' : '#fff',
        border: `1.5px solid ${playing ? '#00DF82' : 'rgba(0,72,55,0.14)'}`,
        borderRadius: 999,
        padding: '12px 20px',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        flex: '1 1 300px',
        minWidth: 0,
        boxShadow: playing
          ? '0 4px 24px rgba(0,72,55,0.22)'
          : '0 2px 10px rgba(0,72,55,0.06)',
      }}
    >
      {/* Play / Pause icon */}
      <div style={{
        width: 38,
        height: 38,
        borderRadius: '50%',
        background: playing ? '#00DF82' : '#004837',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'background 0.25s ease',
      }}>
        {playing ? (
          <svg width="13" height="13" viewBox="0 0 14 14" fill="#004837">
            <rect x="2" y="1" width="4" height="12" rx="1.5" />
            <rect x="8" y="1" width="4" height="12" rx="1.5" />
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 14 14" fill="#fff" style={{ marginLeft: 2 }}>
            <path d="M2 1.5v11l10-5.5z" />
          </svg>
        )}
      </div>

      {/* Waveform */}
      <div style={{ flexShrink: 0 }}>
        <WaveformSVG
          color={playing ? '#00DF82' : '#30ef90'}
          secondaryColor={playing ? 'rgba(255,255,255,0.35)' : '#004837'}
        />
      </div>

      {/* Text */}
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '0.9rem',
          color: playing ? '#fff' : '#004837',
          transition: 'color 0.25s ease',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          letterSpacing: '-0.03em',
        }}>
          {name}
        </div>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.78rem',
          color: playing ? 'rgba(255,255,255,0.6)' : '#2c655b',
          transition: 'color 0.25s ease',
          marginTop: 2,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          {teaser}
        </div>
      </div>

      {/* AUDIO label */}
      <span style={{
        fontSize: '0.62rem',
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 800,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: playing ? '#00DF82' : 'rgba(0,72,55,0.35)',
        flexShrink: 0,
        transition: 'color 0.25s ease',
      }}>
        Audio
      </span>
    </div>
  )
}

/* ─── Main Section ─────────────────────────────────────────────── */
export default function StudentFeedback() {
  const stats = [
    { value: '60+', label: 'Students' },
    { value: '30+', label: 'Sessions' },
    { value: '95%', label: 'Completion' },
    { value: '4.9★', label: 'Avg Rating' },
  ]

  const videos = [
    {
      featured: true,
      thumbnailGradient: 'linear-gradient(135deg, #c8edd8 0%, #9edfc0 100%)',
      name: 'Student name here',
      grade: 'Grade 7',
      quote: 'Video testimonial coming soon',
      duration: '1:24',
    },
    {
      featured: false,
      thumbnailGradient: 'linear-gradient(135deg, #ffe8d6 0%, #ffcba4 100%)',
      name: 'Student name here',
      grade: 'Grade 6',
      quote: 'Video testimonial coming soon',
      duration: '0:58',
    },
    {
      featured: false,
      thumbnailGradient: 'linear-gradient(135deg, #dde8ff 0%, #b8ccff 100%)',
      name: 'Student name here',
      grade: 'Grade 8',
      quote: 'Video testimonial coming soon',
      duration: '1:10',
    },
  ]

  const audios = [
    {
      name: 'Student name here',
      teaser: 'Audio testimonial coming soon',
    },
    {
      name: 'Student name here',
      teaser: 'Audio testimonial coming soon',
    },
  ]

  return (
    <section style={{
      background: 'linear-gradient(180deg, #f0fdf8 0%, #e4fbf3 100%)',
      padding: 'clamp(72px, 10vw, 120px) clamp(20px, 6vw, 80px)',
      overflow: 'hidden',
    }}>
      <style>{`
        .sfeed-grid {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 16px;
          margin-bottom: 16px;
        }
        .sfeed-right {
          display: grid;
          grid-template-rows: 1fr 1fr;
          gap: 16px;
        }
        .sfeed-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
        }
        .sfeed-audio-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 52px;
        }
        @media (max-width: 768px) {
          .sfeed-grid { grid-template-columns: 1fr; }
          .sfeed-right { grid-template-rows: unset; grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .sfeed-stats { grid-template-columns: repeat(2, 1fr); }
          .sfeed-right { grid-template-columns: 1fr; }
          .sfeed-audio-row > * { flex: 1 1 100% !important; }
        }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 60px)' }}>
          <span style={{
            display: 'inline-block',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#004837',
            background: 'rgba(3,98,76,0.1)',
            padding: '6px 18px',
            borderRadius: '999px',
            marginBottom: 20,
          }}>
            Student Testimonials
          </span>

          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            color: '#004837',
            lineHeight: 1.15,
            letterSpacing: '-0.05em',
            margin: '0 0 14px',
          }}>
            In <span style={{ color: '#00DF82' }}>their</span> own words.
          </h2>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
            color: '#2c655b',
            lineHeight: 1.6,
            maxWidth: 520,
            margin: '0 auto',
          }}>
            Unscripted. Unedited. Real reactions from the students themselves.
          </p>
        </div>

        {/* ── Stats strip ── */}
        <div style={{
          background: '#004837',
          borderRadius: 16,
          overflow: 'hidden',
          marginBottom: 32,
        }}>
          <div className="sfeed-stats">
            {stats.map(({ value, label }, i) => (
              <div key={label} style={{
                textAlign: 'center',
                padding: 'clamp(16px, 3vw, 28px) clamp(12px, 2vw, 20px)',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                  color: '#00DF82',
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                }}>
                  {value}
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.72rem',
                  color: 'rgba(255,255,255,0.5)',
                  marginTop: 5,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Video grid ── */}
        <div className="sfeed-grid">
          {/* Featured card */}
          <VideoCard {...videos[0]} />

          {/* Two smaller cards */}
          <div className="sfeed-right">
            <VideoCard {...videos[1]} />
            <VideoCard {...videos[2]} />
          </div>
        </div>

        {/* ── Audio pills ── */}
        <div className="sfeed-audio-row">
          {audios.map((a, i) => (
            <AudioPill key={i} {...a} />
          ))}
        </div>

        {/* ── CTA ── */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1.05rem',
            color: '#2c655b',
            marginBottom: 22,
            lineHeight: 1.6,
          }}>
            Your child could be the next story we share.
          </p>
          <button
            onClick={() => window.open('https://forms.gle/V6a1TWy1qj7WzRTi9', '_blank', 'noopener,noreferrer')}
            style={{
              background: '#004837',
              color: '#00DF82',
              border: 'none',
              padding: '18px 44px',
              borderRadius: 999,
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 4px 24px rgba(0,72,55,0.2)',
              letterSpacing: '-0.02em',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 10px 36px rgba(0,72,55,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,72,55,0.2)'
            }}
          >
            Enroll Your Child →
          </button>
        </div>

      </div>
    </section>
  )
}
