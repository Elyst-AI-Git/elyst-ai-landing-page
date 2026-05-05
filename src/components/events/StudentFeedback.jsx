import React, { useState, useCallback, useRef } from 'react'

/* ─── Waveform ───────────────────────────────────────────────── */
function Waveform({ active }) {
  const bars = [35, 55, 80, 50, 90, 65, 42, 88, 60, 48, 78, 95, 58, 38, 82, 52, 72, 88, 44, 62]
  return (
    <svg width="80" height="28" viewBox="0 0 80 28" fill="none">
      {bars.map((h, i) => {
        const barH = Math.max(4, h * 0.26)
        const y = (28 - barH) / 2
        const isAccent = i % 3 === 0
        return (
          <rect
            key={i} x={i * 4} y={y} width="3" height={barH} rx="1.5"
            fill={active
              ? (isAccent ? 'rgba(255,255,255,0.35)' : '#00DF82')
              : (isAccent ? '#004837' : '#30ef90')}
            opacity={0.55 + (i % 4) * 0.12}
          />
        )
      })}
    </svg>
  )
}

/* ─── Audio Card (tilted, card style) ───────────────────────── */
function AudioCard({ src, name, teaser, rotation }) {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <div
      onClick={toggle}
      style={{
        background: playing ? '#004837' : '#ffffff',
        border: `1.5px solid ${playing ? '#00DF82' : 'rgba(0,72,55,0.13)'}`,
        borderRadius: 18,
        padding: '20px 22px',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        cursor: 'pointer',
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s ease, background 0.25s ease, border-color 0.25s ease',
        boxShadow: playing ? '0 10px 36px rgba(0,72,55,0.22)' : '0 4px 18px rgba(0,72,55,0.09)',
        userSelect: 'none',
      }}
    >
      {src && <audio ref={audioRef} src={src} onEnded={() => setPlaying(false)} />}

      {/* Play/Pause button */}
      <div style={{
        width: 42, height: 42, borderRadius: '50%',
        background: playing ? '#00DF82' : '#004837',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, transition: 'background 0.25s ease',
      }}>
        {playing ? (
          <svg width="12" height="12" viewBox="0 0 14 14" fill="#004837">
            <rect x="2" y="1" width="4" height="12" rx="1.5" />
            <rect x="8" y="1" width="4" height="12" rx="1.5" />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 14 14" fill="#fff" style={{ marginLeft: 2 }}>
            <path d="M2 1.5v11l10-5.5z" />
          </svg>
        )}
      </div>

      <Waveform active={playing} />

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700, fontSize: '0.92rem',
          color: playing ? '#fff' : '#004837',
          letterSpacing: '-0.03em',
          transition: 'color 0.25s',
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>{name}</div>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.78rem',
          color: playing ? 'rgba(255,255,255,0.58)' : '#2c655b',
          transition: 'color 0.25s', marginTop: 2,
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>{teaser}</div>
      </div>

      <span style={{
        fontSize: '0.6rem', fontFamily: "'DM Sans', sans-serif",
        fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
        color: playing ? '#00DF82' : 'rgba(0,72,55,0.32)',
        flexShrink: 0, transition: 'color 0.25s',
      }}>Audio</span>
    </div>
  )
}

/* ─── Video Deck ─────────────────────────────────────────────── */
const CARD_T = 'transform 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.55s ease'

function getCardStyle(pos, isLeaving) {
  if (isLeaving) {
    return { transform: 'translateX(110%) rotate(14deg) scale(0.85)', opacity: 0.7, zIndex: 10, transition: CARD_T }
  }
  const s = [
    { transform: 'translateY(0px) rotate(0deg) scale(1)',                          zIndex: 3, boxShadow: '0 16px 52px rgba(0,72,55,0.22)' },
    { transform: 'translateY(22px) translateX(-10px) rotate(-4deg) scale(0.93)',   zIndex: 2, boxShadow: '0 4px 20px rgba(0,72,55,0.10)' },
  ]
  return { ...(s[Math.min(pos, 1)] || { opacity: 0, zIndex: 0 }), transition: CARD_T }
}

function VideoDeck({ videos }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [leavingIndex, setLeavingIndex] = useState(null)
  const isAnimRef = useRef(false)
  const videoRefs = useRef({})
  const [playingIndex, setPlayingIndex] = useState(null)
  const total = videos.length

  const advance = useCallback(() => {
    if (isAnimRef.current || total < 2) return
    const curVid = videoRefs.current[activeIndex]
    if (curVid) { curVid.pause(); curVid.currentTime = 0 }
    setPlayingIndex(null)
    isAnimRef.current = true
    setLeavingIndex(activeIndex)
    setTimeout(() => {
      setActiveIndex(prev => (prev + 1) % total)
      setLeavingIndex(null)
      isAnimRef.current = false
    }, 560)
  }, [activeIndex, total])

  const handlePlay = (e, i) => {
    e.stopPropagation()
    const vid = videoRefs.current[i]
    if (!vid) return
    if (playingIndex === i) {
      vid.pause(); setPlayingIndex(null)
    } else {
      vid.play().then(() => setPlayingIndex(i)).catch(() => {})
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Deck + arrows row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>

        {/* Left arrow */}
        <button
          onClick={advance}
          aria-label="Previous video"
          style={{
            width: 44, height: 44, borderRadius: '50%',
            background: '#fff',
            border: '1.5px solid rgba(0,72,55,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', flexShrink: 0,
            boxShadow: '0 2px 12px rgba(0,72,55,0.1)',
            transition: 'background 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#004837' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#fff' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="#004837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

      {/* Deck wrapper */}
      <div
        onClick={advance}
        style={{
          position: 'relative',
          width: 'min(260px, 68vw)',
          aspectRatio: '9 / 16',
          cursor: 'pointer',
        }}
      >
        {videos.map((v, i) => {
          const isLeaving = leavingIndex === i
          const pos = (i - activeIndex + total) % total
          const isActive = pos === 0
          const isPlaying = playingIndex === i

          return (
            <div
              key={i}
              style={{
                position: 'absolute', inset: 0,
                borderRadius: 20, overflow: 'hidden',
                ...getCardStyle(pos, isLeaving),
              }}
            >
              {/* Video or placeholder */}
              {v.src ? (
                <video
                  ref={el => { videoRefs.current[i] = el }}
                  src={v.src}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  playsInline
                  onEnded={() => setPlayingIndex(null)}
                  onClick={e => e.stopPropagation()}
                />
              ) : (
                <div style={{ width: '100%', height: '100%', background: v.gradient }}>
                  {v.comingSoon && (
                    <div style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center', gap: 10,
                    }}>
                      <div style={{
                        width: 52, height: 52, borderRadius: '50%',
                        background: 'rgba(0,72,55,0.15)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#004837" opacity="0.5">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '0.75rem', fontWeight: 700,
                        color: 'rgba(0,72,55,0.5)',
                        textTransform: 'uppercase', letterSpacing: '0.1em',
                      }}>Coming Soon</span>
                    </div>
                  )}
                </div>
              )}

              {/* Top overlay: grade + name */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                padding: '14px 14px',
                background: 'linear-gradient(to bottom, rgba(0,22,12,0.74) 0%, transparent 100%)',
                zIndex: 2,
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{
                  background: '#00DF82', color: '#004837',
                  fontSize: '0.58rem', fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 800, letterSpacing: '0.08em',
                  textTransform: 'uppercase', padding: '3px 10px', borderRadius: 999,
                }}>{v.grade}</span>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700, fontSize: '0.86rem',
                  color: '#fff', letterSpacing: '-0.03em',
                }}>{v.name}</span>
              </div>

              {/* Play button — active card with real video, not playing */}
              {isActive && v.src && !isPlaying && (
                <div
                  onClick={e => handlePlay(e, i)}
                  style={{
                    position: 'absolute', inset: 0, zIndex: 3,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(0,0,0,0.1)', cursor: 'pointer',
                  }}
                >
                  <div style={{
                    width: 60, height: 60, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.94)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 8px 28px rgba(0,0,0,0.2)',
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#004837" style={{ marginLeft: 3 }}>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Pause button — playing */}
              {isPlaying && (
                <div
                  onClick={e => handlePlay(e, i)}
                  style={{ position: 'absolute', bottom: 14, right: 14, zIndex: 4, cursor: 'pointer' }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'rgba(0,0,0,0.62)', backdropFilter: 'blur(4px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="white">
                      <rect x="2" y="1" width="4" height="12" rx="1.5" />
                      <rect x="8" y="1" width="4" height="12" rx="1.5" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Scrim on back cards */}
              {!isActive && (
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(255,255,255,0.32)',
                  borderRadius: 20, pointerEvents: 'none', zIndex: 4,
                }} />
              )}
            </div>
          )
        })}
      </div>{/* end deck wrapper */}

        {/* Right arrow */}
        <button
          onClick={advance}
          aria-label="Next video"
          style={{
            width: 44, height: 44, borderRadius: '50%',
            background: '#004837',
            border: '1.5px solid #004837',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', flexShrink: 0,
            boxShadow: '0 2px 12px rgba(0,72,55,0.22)',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="#00DF82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

      </div>{/* end arrows row */}

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
        {videos.map((_, i) => (
          <div key={i} style={{
            width: i === activeIndex ? 22 : 8, height: 8,
            borderRadius: 999,
            background: i === activeIndex ? '#004837' : 'rgba(0,72,55,0.2)',
            transition: 'all 0.3s ease',
          }} />
        ))}
      </div>
    </div>
  )
}

/* ─── Main Section ───────────────────────────────────────────── */
export default function StudentFeedback() {
  const videos = [
    {
      src: '/student-video-1.mp4',
      name: 'Fathima Akleema',
      grade: 'Grade 5',
    },
    {
      src: '/student-video-2.mp4',
      name: 'Aradhya',
      grade: 'Grade 6',
    },
  ]

  const audios = [
    {
      src: '/student-audio-1.ogg',
      name: 'Farha',
      teaser: 'Grade 9',
      rotation: -2,
    },
    {
      src: null,
      name: 'Coming Soon',
      teaser: 'Audio testimonial coming soon',
      rotation: 2.5,
    },
  ]

  return (
    <section style={{
      background: 'linear-gradient(180deg, #e4fbf3 0%, #f0fdf8 100%)',
      padding: 'clamp(72px, 10vw, 120px) clamp(20px, 6vw, 80px)',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 60px)' }}>
          <span style={{
            display: 'inline-block',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700, fontSize: '0.75rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#004837', background: 'rgba(3,98,76,0.1)',
            padding: '6px 18px', borderRadius: '999px', marginBottom: 20,
          }}>Student Testimonials</span>

          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700, fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            color: '#004837', lineHeight: 1.15,
            letterSpacing: '-0.05em', margin: '0 0 14px',
          }}>
            In <span style={{ color: '#00DF82' }}>their</span> own words.
          </h2>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
            color: '#2c655b', lineHeight: 1.6,
          }}>
            Real reactions from the students themselves.
          </p>
        </div>

        {/* Video deck */}
        <div style={{ marginBottom: 64 }}>
          <VideoDeck videos={videos} />
        </div>

        {/* Audio section */}
        <div style={{ marginBottom: 56 }}>
          <p style={{
            textAlign: 'center',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'rgba(0,72,55,0.45)', marginBottom: 32,
          }}>Also hear from them</p>

          <div style={{
            maxWidth: 500, margin: '0 auto',
            display: 'flex', flexDirection: 'column', gap: 20,
            padding: '0 12px',
          }}>
            {audios.map((a, i) => <AudioCard key={i} {...a} />)}
          </div>
        </div>


      </div>
    </section>
  )
}
