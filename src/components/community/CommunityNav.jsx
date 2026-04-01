import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CommunityNav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pt-4">
      <div
        className="max-w-290 w-full flex items-center justify-between px-6 md:px-10 transition-all duration-300"
        style={{
          height: 64,
          background: '#0d3d25',
          borderRadius: 22,
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: scrolled
            ? '0 8px 40px rgba(13,61,37,0.45)'
            : '0 4px 20px rgba(13,61,37,0.25)',
          transition: 'box-shadow 0.3s',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="font-display font-bold text-xl text-white" style={{ letterSpacing: '-0.05em' }}>
            elyst <span style={{ color: '#2ec866' }}>AI</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {['about', 'benefits', 'pricing', 'join'].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-body text-sm text-white/70 hover:text-white transition-colors duration-200 capitalize cursor-pointer min-h-12 flex items-center"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo('join')}
          className="hidden md:flex items-center font-body font-bold text-sm rounded-full px-6 py-2.5 transition-all duration-200 cursor-pointer hover:opacity-90"
          style={{ background: '#ffffff', color: '#0d3d25' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#2ec866'; e.currentTarget.style.color = '#ffffff' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#0d3d25' }}
        >
          Apply Now
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden min-w-12 min-h-12 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden overflow-hidden mt-2 mx-4 absolute top-16 left-0 right-0"
          style={{
            background: 'rgba(13,61,37,0.95)',
            backdropFilter: 'blur(16px)',
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div className="flex flex-col items-center gap-4 py-6 px-5">
            {['about', 'benefits', 'pricing', 'join'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="font-body text-base text-white/85 hover:text-white transition-colors min-h-12 capitalize cursor-pointer"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
            <button
              onClick={() => scrollTo('join')}
              className="font-body font-bold text-sm rounded-full px-6 min-h-12 mt-2 cursor-pointer"
              style={{ background: '#ffffff', color: '#0d3d25' }}
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default CommunityNav
