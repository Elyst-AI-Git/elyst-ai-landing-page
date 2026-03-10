import { motion } from "framer-motion";
import { BookOpen, Clock } from "lucide-react";


const CourseCard = ({ category, title, modules, hours, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className="rounded-card overflow-hidden bg-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-250"
    >
      {/* Image area */}
      <div className="relative aspect-16/10 overflow-hidden m-3 rounded-2xl">
        <div
          className="w-full h-full"
          style={{
            background: `linear-gradient(135deg, hsl(var(--color-primary-light)), hsl(var(--color-primary)))`,
          }}
        />
      </div>

      {/* Body */}
      <div className="px-4 pb-5 pt-1">
        {/* Category */}
        <div className="mb-3">
          <span className="font-body text-xs font-bold bg-primary/10 text-primary rounded-pill px-3 py-1">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-h3 text-text-primary mb-3 leading-tight line-clamp-2">{title}</h3>

        {/* Meta */}
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 font-body text-text-muted-custom" style={{ fontSize: "0.8rem" }}>
            <BookOpen className="w-3.5 h-3.5" />
            {modules} Modules
          </span>
          <span className="inline-flex items-center gap-1.5 font-body text-text-muted-custom" style={{ fontSize: "0.8rem" }}>
            <Clock className="w-3.5 h-3.5" />
            {hours} Hours
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
