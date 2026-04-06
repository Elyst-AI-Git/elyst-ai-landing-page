import { Linkedin, Instagram, Facebook } from "lucide-react";

const navLinks = ["About", "Events", /* "Blog", */ "Elyst AI Circle"];

const Footer = () => {
	return (
		<footer id="footer" className="relative overflow-hidden bg-surface-dark">
			<div className="px-(--section-px) pt-14 pb-10">
				<div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* Left - Nav Links */}
					<nav className="flex flex-col gap-3 items-start">
						{navLinks.map((link) => (
							<button
								key={link}
								href={`#${link.toLowerCase()}`}
								onClick={() => {
									if (link === "Events") {
										document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
										return;
									}
									// if (link === "Blog") {
									// 	window.open("https://elystai-newsletter.beehiiv.com/", "_blank");
									// 	return;
									// }
                                    if (link === "Elyst AI Circle") {
										window.location.href = "/circle";
										return;
									}
                                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
								}}
								className="font-body text-sm text-text-muted-dark hover:text-accent transition-colors duration-200 cursor-pointer"
							>
								{link}
							</button>
						))}
					</nav>

					{/* Right - Contact */}
					<div className="md:text-right">
						<p className="font-body font-bold text-text-on-dark text-xs uppercase tracking-wider mb-3">Follow us</p>
						<a
							href="mailto:mailofelystai@gmail.com"
							className="font-body text-sm text-text-muted-dark hover:text-accent transition-colors block mb-1"
						>
							mailofelystai@gmail.com
						</a>
						<a
							href="tel:+918137043653"
							className="font-body text-sm text-text-muted-dark hover:text-accent transition-colors block mb-1"
						>
							+91-8137043653
						</a>
						<p className="font-body text-sm text-text-muted-dark mb-4">Kerala, India</p>
						<div className="flex gap-2 md:justify-end">
							{[
								{ label: "LinkedIn", icon: <Linkedin size={16} />, url: "https://www.linkedin.com/company/elyst-ai/" },
								{ label: "Instagram", icon: <Instagram size={16} />, url: "https://www.instagram.com/elyst.ai/" },
							].map((s) => (
								<a
									key={s.label}
									href={s.url}
									target="_blank"
									rel="noopener noreferrer"
									className="w-9 h-9 rounded-full border border-accent/40 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200"
									aria-label={s.label}
								>
									{s.icon}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Credits bar */}
			<div className="border-t border-surface-dark-hover">
				<div className="max-w-300 mx-auto px-(--section-px) py-4 flex items-center justify-between">
					<p className="font-body text-xs text-text-muted-dark">© 2026 Elyst AI. All rights reserved.</p>
					<p className="font-body text-xs text-text-muted-dark">Terms & Conditions</p>
				</div>
			</div>

			{/* Large brand text at bottom - fully visible */}
			<div className="w-full overflow-hidden flex items-end justify-center pointer-events-none select-none px-4" style={{ lineHeight: 0.75 }}>
				<span
					className="font-display font-bold text-white block text-center whitespace-nowrap"
					style={{
						fontSize: "clamp(4rem, 18vw, 16rem)",
						letterSpacing: "-0.075em",
					}}
				>
					elyst AI
				</span>
			</div>
		</footer>
	);
};

export default Footer;
