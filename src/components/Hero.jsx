import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const streaks = Array.from({ length: 12 }, (_, i) => ({
	id: i,
	left: `${5 + Math.random() * 90}%`,
	top: `${Math.random() * 60}%`,
	height: 60 + Math.random() * 60,
	width: 1 + Math.random(),
	rotation: 30 + Math.random() * 15,
	duration: 3 + Math.random() * 2,
	delay: Math.random() * 4,
}))

const Hero = () => {
	const navigate = useNavigate()

	return (
		<section
			className="relative min-h-screen flex items-center justify-center overflow-hidden"
			style={{
				background: `
          radial-gradient(ellipse 65% 90% at -5% 50%, rgba(0, 223, 130, 0.625) 0%, transparent 70%),
          radial-gradient(ellipse 65% 90% at 105% 50%, rgba(0, 223, 130, 0.625) 0%, transparent 70%),
          linear-gradient(180deg, 
            #03624c 0%, 
            #03624c 20%,
            hsl(160 35% 28%) 40%,
            hsl(155 30% 42%) 60%,
            hsl(148 30% 65%) 78%,
            hsl(142 30% 85%) 90%,
            hsl(140 18% 97%) 100%
          )
        `,
			}}
		>
			{/* Streak lines */}
			{streaks.map((s) => (
				<div
					key={s.id}
					className="absolute animate-streak hidden md:block"
					style={{
						left: s.left,
						top: s.top,
						width: s.width,
						height: s.height,
						background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.15), transparent)',
						'--streak-duration': `${s.duration}s`,
						'--streak-delay': `${s.delay}s`,
					}}
				/>
			))}
			{/* Mobile: only 6 streaks */}
			{streaks.slice(0, 6).map((s) => (
				<div
					key={`m-${s.id}`}
					className="absolute animate-streak md:hidden"
					style={{
						left: s.left,
						top: s.top,
						width: s.width,
						height: s.height,
						background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.15), transparent)',
						'--streak-duration': `${s.duration}s`,
						'--streak-delay': `${s.delay}s`,
					}}
				/>
			))}

			<div className="relative z-10 max-w-215 mx-auto px-5 text-center" style={{ marginTop: -40 }}>
				<motion.h1
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
					className="font-display font-bold text-hero text-white leading-[1.05] mb-6 whitespace-nowrap w-max mx-auto max-md:whitespace-normal max-md:w-auto max-md:text-center max-md:text-[clamp(1.9rem,10vw,2.8rem)] max-md:leading-[1.12] max-md:px-1"
				>
					AI Won't Replace You.
					<br />
					Someone Using AI Will.
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
					className="font-body text-body-size text-white/75 max-w-140 mx-auto mb-10 leading-relaxed max-md:text-[0.95rem] max-md:max-w-[92vw]"
				>
					Elyst AI helps professionals and businesses put AI to actual use, not just talk about it. Through a curated AI community, live AI challenges and systems built for how you work, we help you adapt to the AI era.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.55, duration: 0.6, ease: 'easeOut' }}
					className="flex flex-col sm:flex-row items-center justify-center gap-4"
				>
					{/* <button
						className="font-body font-bold text-sm bg-white text-primary rounded-button h-13 px-8 hover:opacity-90 transition-opacity min-w-12 cursor-pointer"
						onClick={() => navigate('/community')}
					>
						Join the Elyst AI Circle →
					</button> */}
					<button
						className="font-body font-bold text-[0.95rem] bg-white text-primary rounded-button px-7 min-h-12 hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center"
						onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
					>
						See What's Coming →
					</button>
				</motion.div>
			</div>
		</section>
	)
}

export default Hero
