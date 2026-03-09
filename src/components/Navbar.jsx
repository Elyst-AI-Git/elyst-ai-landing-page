import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = ['Home', 'About', 'Courses', 'Blog', 'Community']

const Navbar = () => {
	const [mobileOpen, setMobileOpen] = useState(false)

	const scrollTo = (id) => {
		setMobileOpen(false)
		if (id === 'Home') {
			window.scrollTo({ top: 0, behavior: 'smooth' })
			return
		}
		const el = document.getElementById(id.toLowerCase())
		el?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pt-4">
			<div
				className="max-w-300 w-full flex items-center justify-between px-6 md:px-10 transition-all duration-300"
				style={{
					height: 64,
					background: 'rgba(3, 98, 76, 0.85)',
					backdropFilter: 'blur(24px) saturate(1.4)',
					WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
					borderRadius: 22,
					border: '1px solid rgba(255, 255, 255, 0.15)',
					boxShadow: '0 4px 30px rgba(3, 98, 76, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
				}}
			>
				<span className="font-display font-bold text-2xl text-white" style={{ letterSpacing: '-0.075em' }}>
					elyst AI
				</span>

				{/* Desktop nav */}
				<div className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<button
							key={link}
							onClick={() => scrollTo(link)}
							className="font-body text-[0.95rem] text-white/85 hover:text-white transition-colors duration-200 min-h-12 flex items-center cursor-pointer"
						>
							{link}
						</button>
					))}
				</div>

				<button
					onClick={() => scrollTo('Community')}
					className="hidden md:flex items-center justify-center font-body font-bold text-[0.95rem] bg-white text-primary rounded-button px-7 min-h-12 hover:opacity-90 transition-opacity cursor-pointer"
				>
					Join Community
				</button>

				{/* Mobile hamburger */}
				<button
					onClick={() => setMobileOpen(!mobileOpen)}
					className="md:hidden min-w-12 min-h-12 flex items-center justify-center"
					aria-label="Toggle menu"
				>
					<div className="flex flex-col gap-1.5">
						<span
							className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
						/>
						<span
							className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
						/>
						<span
							className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
						/>
					</div>
				</button>
			</div>

			{/* Mobile menu */}
			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden overflow-hidden mt-2 mx-4"
						style={{
							background: 'rgba(3, 98, 76, 0.75)',
							backdropFilter: 'blur(16px)',
							WebkitBackdropFilter: 'blur(16px)',
							borderRadius: 16,
							border: '1px solid rgba(255, 255, 255, 0.15)',
							boxShadow: '0 4px 24px rgba(3, 98, 76, 0.15)',
						}}
					>
						<div className="flex flex-col items-center gap-4 py-6 px-5">
							{navLinks.map((link) => (
								<button
									key={link}
									onClick={() => scrollTo(link)}
									className="font-body text-base text-white/85 hover:text-white transition-colors min-h-12 cursor-pointer"
								>
									{link}
								</button>
							))}
							<button
								onClick={() => scrollTo('Community')}
								className="font-body font-bold text-sm bg-white text-primary rounded-button px-6 min-h-12 mt-2 hover:opacity-90 transition-opacity cursor-pointer"
							>
								Join Community
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}

export default Navbar
