import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const navLinks = [
	{ label: 'About', id: 'about' },
	{ label: 'Benefits', id: 'benefits' },
	{ label: 'Pricing', id: 'pricing' },
	{ label: 'Join', id: 'join' },
]

const CommunityNav = () => {
	const navigate = useNavigate()
	const [mobileOpen, setMobileOpen] = useState(false)

	const scrollTo = (id) => {
		setMobileOpen(false)
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
	}

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
				<span
					className="font-display font-bold text-2xl text-white cursor-pointer"
					style={{ letterSpacing: '-0.075em' }}
					onClick={() => navigate('/')}
				>
					elyst AI
				</span>

				{/* Desktop nav - absolutely centered */}
				<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
					{navLinks.map(({ label, id }) => (
						<button
							key={id}
							onClick={() => scrollTo(id)}
							className="font-body text-[0.95rem] text-white/85 hover:text-white transition-colors duration-200 min-h-12 flex items-center cursor-pointer"
						>
							{label}
						</button>
					))}
				</div>

				<div className="flex items-center justify-end">
					<button
						onClick={() => scrollTo('join')}
						className="hidden md:flex items-center justify-center font-body font-bold text-[0.95rem] bg-white text-primary rounded-button px-7 min-h-12 hover:opacity-90 transition-opacity cursor-pointer"
					>
						Apply Now →
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
							{navLinks.map(({ label, id }) => (
								<button
									key={id}
									onClick={() => scrollTo(id)}
									className="font-body text-base text-white/85 hover:text-white transition-colors min-h-12 cursor-pointer"
								>
									{label}
								</button>
							))}
							<button
								onClick={() => { setMobileOpen(false); scrollTo('join') }}
								className="font-body font-bold text-sm bg-white text-primary rounded-button px-6 min-h-12 mt-2 hover:opacity-90 transition-opacity cursor-pointer"
							>
								Apply →
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}

export default CommunityNav
