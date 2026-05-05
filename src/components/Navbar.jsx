import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

const DEFAULT_NAV_LINKS = ['Home', 'About', 'Events', /* 'Blog' */]

// customLinks: optional [{ label, action }] — overrides the default nav links
const Navbar = ({ ctaText, ctaAction, customLinks }) => {
	const navigate = useNavigate();
	const navCTAText = ctaText || 'Join the Elyst AI Circle →'
	const navCTAAction = ctaAction || (() => navigate('/circle'))
	const [mobileOpen, setMobileOpen] = useState(false)

	const scrollTo = (id) => {
		setMobileOpen(false)
		if (id === 'Home') {
			if (window.location.pathname === '/') {
				window.scrollTo({ top: 0, behavior: 'smooth' })
			} else {
				navigate('/')
			}
			return
		}
		const el = document.getElementById(id.toLowerCase())
		el?.scrollIntoView({ behavior: 'smooth' })
	}

	const handleNavClick = (link) => {
		if (link === 'Courses') {
			window.open('https://elystai.course.link', '_blank')
			return
		}
		// if (link === 'Blog') {
		// 	window.open('https://elystai-newsletter.beehiiv.com/', '_blank')
		// 	return
		// }
		if (link === 'Community') {
			window.open('https://chat.whatsapp.com/Lq59BpZAz4dC2pWP5vKOjO', '_blank')
			return
		}
		scrollTo(link)
	}

	// Build link list — custom links take priority over defaults
	const renderLinks = customLinks
		? customLinks // [{ label, action }]
		: DEFAULT_NAV_LINKS.map(label => ({ label, action: () => handleNavClick(label) }))

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pt-4">
			<div
				className="nav-color max-w-300 w-full relative flex items-center justify-between px-6 md:px-10 transition-all duration-500"
				style={{
					height: 64,
					backdropFilter: 'blur(24px) saturate(1.4)',
					WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
					borderRadius: 22,
					boxShadow: '0 4px 30px rgba(3, 98, 76, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
				}}
			>
				<button onClick={() => navigate('/')} className="font-display font-bold text-2xl text-white cursor-pointer" style={{ letterSpacing: '-0.075em', background: 'none', border: 'none', padding: 0 }}>
					elyst AI
				</button>

				{/* Desktop nav - absolutely centered */}
				<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
					{renderLinks.map(({ label, action }) => (
						<button
							key={label}
							onClick={() => { action(); setMobileOpen(false) }}
							className="font-body text-[0.95rem] text-white/85 hover:text-white transition-colors duration-200 min-h-12 flex items-center cursor-pointer"
						>
							{label}
						</button>
					))}
				</div>

				<div className="flex items-center justify-end">
					<button
						onClick={navCTAAction}
						className="hidden md:flex items-center justify-center font-body font-bold text-[0.95rem] bg-white text-primary rounded-button px-7 min-h-12 hover:opacity-90 transition-opacity cursor-pointer"
					>
						{navCTAText}
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
			</div>

			{/* Mobile menu */}
			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="nav-color md:hidden overflow-hidden mt-2 mx-4"
						style={{
							backdropFilter: 'blur(16px)',
							WebkitBackdropFilter: 'blur(16px)',
							borderRadius: 16,
							boxShadow: '0 4px 24px rgba(3, 98, 76, 0.15)',
						}}
					>
						<div className="flex flex-col items-center gap-4 py-6 px-5">
							{renderLinks.map(({ label, action }) => (
								<button
									key={label}
									onClick={() => { action(); setMobileOpen(false) }}
									className="font-body text-base text-white/85 hover:text-white transition-colors min-h-12 cursor-pointer"
								>
									{label}
								</button>
							))}
							<button
								onClick={() => { setMobileOpen(false); navCTAAction() }}
								className="font-body font-bold text-sm bg-white text-primary rounded-button px-6 min-h-12 mt-2 hover:opacity-90 transition-opacity cursor-pointer"
							>
								{ctaText ? ctaText : 'Join →'}
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}

export default Navbar
