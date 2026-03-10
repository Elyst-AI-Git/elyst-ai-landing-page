import { motion } from "framer-motion";

const recentPosts = [
  { category: "Tools", title: "5 AI Tools Every Malayalam Content Creator Needs in 2025", date: "Jan 15, 2025" },
  { category: "Education", title: "What is Prompt Engineering? A Beginner's Guide", date: "Jan 8, 2025" },
  { category: "Community", title: "How We Ran Kerala's First GenAI Cohort: AI Yathra 2.0", date: "Dec 28, 2024" },
];

const Blog = () => {
  return (
    <section
      id="blog"
      className="section-padding"
      style={{
        background: `linear-gradient(180deg, #03624C 0%, hsl(140 18% 97%) 5%, hsl(140 18% 97%) 100%)`,
      }}
    >
      <div className="max-w-300 mx-auto">
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
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-card overflow-hidden bg-surface-muted"
          >
            <div
              className="w-full aspect-video"
              style={{ background: "linear-gradient(135deg, #03624c, #00df82)" }}
            />
            <div className="p-5">
              <span className="inline-block font-body font-bold text-xs text-primary bg-background rounded-pill px-3 py-1 mb-2">
                AI Education
              </span>
              <p className="font-body text-text-muted-custom text-xs mb-1">Feb 1, 2025</p>
              <h3 className="font-display font-bold text-h3 text-text-primary mb-2 line-clamp-2">
                How AI is Changing Education in Kerala: A Practical Guide for Students
              </h3>
              <p className="font-body text-sm text-text-secondary line-clamp-2 mb-3">
                Discover how AI tools are transforming the learning experience for students across Kerala.
              </p>
              <a href="#" className="font-body font-bold text-sm text-primary hover:gap-3 transition-all duration-200 inline-flex items-center gap-2">
                Read More <span>→</span>
              </a>
            </div>
          </motion.div>

          {/* Recent posts */}
          <div className="flex flex-col">
            {recentPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="py-5 border-b border-surface-muted last:border-b-0"
              >
                <span className="inline-block font-body font-bold text-xs text-primary bg-surface-muted rounded-pill px-3 py-1 mb-2">
                  {post.category}
                </span>
                <h3 className="font-display font-bold text-h3 text-text-primary mb-2">{post.title}</h3>
                <div className="flex items-center justify-between">
                  <p className="font-body text-text-muted-custom text-sm">{post.date}</p>
                  <a href="#" className="font-body font-bold text-sm text-primary hover:gap-2 transition-all inline-flex items-center gap-1">
                    Read <span>→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
