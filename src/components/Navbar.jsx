import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = ['Home', 'About', 'Events', 'Blog']

const Navbar = () => {
	const [mobileOpen, setMobileOpen] = useState(false)
	
	const [scrolled, setScrolled] = useState(false)
	const changeBackgroundOnScroll = () => {
		const coursesEl = document.getElementById('courses')
		const blogEl = document.getElementById('blog')
		const coursesPosition = coursesEl?.offsetTop - 80
		const blogPosition = blogEl?.offsetTop - 80
		if (window.scrollY > coursesPosition) {
			if (window.scrollY > blogPosition) {
				setScrolled(false)
			} else {
				setScrolled(true)
			}
		} else {
			setScrolled(false)
		}
	}
	window.addEventListener('scroll', changeBackgroundOnScroll)

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
				className={`${scrolled ? 'nav-color-scroll' : 'nav-color'} max-w-300 w-full relative flex items-center justify-between px-6 md:px-10 transition-all duration-500`}
				style={{
					height: 64,
					backdropFilter: 'blur(24px) saturate(1.4)',
					WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
					borderRadius: 22,
					boxShadow: '0 4px 30px rgba(3, 98, 76, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
				}}
			>
				<span className={`font-display font-bold text-2xl ${scrolled ? 'text-[#03624cd9]' : 'text-white'}`} style={{ letterSpacing: '-0.075em' }}>
					elyst AI
				</span>

				{/* Desktop nav - absolutely centered */}
				<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
					{navLinks.map((link) => (
						<button
							key={link}
							onClick={() => {
								if (link === 'Courses') {
									window.open('https://elystai.course.link', '_blank')
									return
								} else if (link === 'Blog') {
									window.open('https://elystai-newsletter.beehiiv.com/', '_blank')
									return
								} else if (link === 'Community') {
									window.open('https://chat.whatsapp.com/Lq59BpZAz4dC2pWP5vKOjO', '_blank')
									return
								}
								scrollTo(link)
							}}
							className={`font-body text-[0.95rem] ${scrolled ? 'text-[#03624cd9] hover:text-[#00df82]' : 'text-white/85 hover:text-white'} transition-colors duration-200 min-h-12 flex items-center cursor-pointer`}
						>
							{link}
						</button>
					))}
				</div>

				<div className="flex items-center justify-end">
					<button
						onClick={() => window.open('#', '_blank')}
						className="hidden md:flex items-center justify-center font-body font-bold text-[0.95rem] bg-white text-primary rounded-button px-7 min-h-12 hover:opacity-90 transition-opacity cursor-pointer"
					>
						Join the Elyst AI Circle →
					</button>

					{/* Mobile hamburger */}
					<button
						onClick={() => setMobileOpen(!mobileOpen)}
						className="md:hidden min-w-12 min-h-12 flex items-center justify-center"
						aria-label="Toggle menu"
					>
						<div className="flex flex-col gap-1.5">
							<span
								className={`block w-6 h-0.5 ${scrolled ? 'bg-[#03624cd9] text-white' : 'bg-white text-primary'} transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
							/>
							<span
								className={`block w-6 h-0.5 ${scrolled ? 'bg-[#03624cd9]' : 'bg-white'} transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
							/>
							<span
								className={`block w-6 h-0.5 ${scrolled ? 'bg-[#03624cd9] text-white' : 'bg-white text-primary'} transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
							/>
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
						className={`${scrolled ? 'nav-color-scroll' : 'nav-color'} md:hidden overflow-hidden mt-2 mx-4`}
						style={{
							backdropFilter: 'blur(16px)',
							WebkitBackdropFilter: 'blur(16px)',
							borderRadius: 16,
							boxShadow: '0 4px 24px rgba(3, 98, 76, 0.15)',
						}}
					>
						<div className="flex flex-col items-center gap-4 py-6 px-5">
							{navLinks.map((link) => (
								<button
									key={link}
									onClick={() => {
										if (link === 'Courses') {
											window.open('https://elystai.course.link', '_blank')
											return
										} else if (link === 'Blog') {
											window.open('https://elystai-newsletter.beehiiv.com/', '_blank')
											return
										} else if (link === 'Community') {
											window.open('https://chat.whatsapp.com/Lq59BpZAz4dC2pWP5vKOjO', '_blank')
											return
										}
										scrollTo(link)
									}}
									className={`font-body text-base ${scrolled ? 'text-[#03624cd9] hover:text-[#00df82]' : 'text-white/85 hover:text-white'} transition-colors min-h-12 cursor-pointer`}
								>
									{link}
								</button>
							))}
							<button
								onClick={() => { setMobileOpen(false); window.open('#', '_blank') }}
								className="font-body font-bold text-sm bg-white text-primary rounded-button px-6 min-h-12 mt-2 hover:opacity-90 transition-opacity cursor-pointer"
							>
								Join →
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}

export default Navbar
