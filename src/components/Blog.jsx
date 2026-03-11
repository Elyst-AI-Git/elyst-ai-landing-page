import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const recentPosts = [
	{ category: 'Tools', title: '5 AI Tools Every Malayalam Content Creator Needs in 2025', date: 'Jan 15, 2025' },
	{ category: 'Education', title: "What is Prompt Engineering? A Beginner's Guide", date: 'Jan 8, 2025' },
	{ category: 'Community', title: "How We Ran Kerala's First GenAI Cohort: AI Yathra 2.0", date: 'Dec 28, 2024' },
]

const BEEHIIV_API_KEY = import.meta.env.VITE_BEEHIIV_API_KEY
const PUBLICATION_ID = import.meta.env.VITE_PUBLICATION_ID

const formatPostDate = (post) => {
	const rawDate = post?.publish_date || post?.created
	if (!rawDate) return 'Date unavailable'
	const date = new Date(rawDate * 1000)

	return date.toLocaleString('en-US', {
		timeZone: 'Asia/Kolkata',
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	})
}

const Blog = () => {
	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		const fetchPosts = async () => {
			if (!BEEHIIV_API_KEY || !PUBLICATION_ID) {
				console.warn('[Blog] Missing env vars', {
					hasApiKey: Boolean(BEEHIIV_API_KEY),
					hasPublicationId: Boolean(PUBLICATION_ID),
				})
				return
			}

			try {
				const response = await fetch(`/api/beehiiv/publications/${PUBLICATION_ID}/posts?direction=desc&limit=4`, {
					method: 'GET',
					headers: {
						Authorization: `Bearer ${BEEHIIV_API_KEY}`,
					},
				})

				if (!response.ok) {
					throw new Error(`HTTP ${response.status}: ${response.statusText}`)
				}

				const body = await response.json()
				const postCount = body?.data?.length || 0
				setBlogs(body.data)
			} catch (error) {
				console.error('Failed to fetch Beehiiv posts:', error)
			}
		}

		fetchPosts()
	}, [])

	return (
		<section
			id="blog"
			className="section-padding"
			style={{
				background: `linear-gradient(180deg, #03624C 0%, hsl(140 18% 97%) 5%, hsl(140 18% 97%) 100%)`,
			}}
		>
			<div className="max-w-300 mx-auto flex flex-col items-centre gap-10">
				<div className="mb-8">
					<span className="font-body font-bold text-primary uppercase tracking-widest text-xs mb-2 block">
						LATEST INSIGHTS
					</span>
					<h2 className="font-display font-bold text-h2 text-text-primary">From Our Blog</h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
					{/* Featured post */}
					<motion.div
						initial={{ opacity: 0, x: -24 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						className="rounded-card overflow-hidden bg-surface-muted"
					>
						<img
							src={blogs[0]?.thumbnail_url || 'https://placehold.co/1200x675?text=Blog+Image'}
							alt={blogs[0]?.title || 'Featured blog image'}
							className="w-full aspect-video object-cover"
							loading="lazy"
						/>
						<div className="p-5">
							<p className="font-body text-text-muted-custom text-xs mb-1">{formatPostDate(blogs[0])}</p>
							<h3 className="font-display font-bold text-h3 text-text-primary mb-2 line-clamp-2">
								{blogs[0]?.title}
							</h3>
							<p className="font-body text-sm text-text-secondary line-clamp-2 mb-3">{blogs[0]?.subtitle}</p>
							<a
								href={blogs[0]?.web_url}
								target="_blank"
								className="font-body font-bold text-sm text-primary hover:gap-3 transition-all duration-200 inline-flex items-center gap-2"
							>
								Read More <span>→</span>
							</a>
						</div>
					</motion.div>

					{/* Recent posts */}
					<div className="flex flex-col gap-3">
						{blogs.slice(1, 4).map((post, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: 24 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
								className="py-5 border-b border-surface-dark last:border-b-0"
							>
								<h3 className="font-display font-bold text-h3 text-text-primary mb-2">{post.title}</h3>
								<p className="font-body text-sm text-text-secondary line-clamp-2 mb-3">{post.subtitle}</p>
								<div className="flex items-center justify-between">
									<p className="font-body text-text-muted-custom text-sm">{formatPostDate(post)}</p>
									<a
										href={post.web_url}
										target="_blank"
										className="font-body font-bold text-sm text-primary hover:gap-2 transition-all inline-flex items-center gap-1"
									>
										Read <span>→</span>
									</a>
								</div>
							</motion.div>
						))}
					</div>
				</div>
				<button
					className="group font-body font-bold text-sm bg-primary text-primary-foreground rounded-button h-13 max-w-max px-8 gap-2 flex items-center justify-center hover:opacity-90 transition-all duration-200 min-h-12 hover:gap-3 cursor-pointer mt-12 self-center"
					onClick={() => {
						window.open('https://elystai.course.link', '_blank')
					}}
				>
					All Blogs
					<span className="inline-block transition-transform group-hover:translate-x-1">→</span>
				</button>
			</div>
		</section>
	)
}

export default Blog
