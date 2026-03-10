import CourseCard from "./CourseCard";

const courses = [
  {
    category: "AI Tools",
    title: "AI for Everyone: Getting Started",
    modules: 4,
    hours: "12+",
  },
  {
    category: "Prompt Engineering",
    title: "ChatGPT & Prompt Mastery",
    modules: 6,
    hours: "18+",
  },
  {
    category: "Automation",
    title: "AI Automation for Business",
    modules: 5,
    hours: "15+",
  },
];

const Courses = () => {
  return (
    <section
      id="courses"
      className="relative section-padding"
      style={{
        background: `#03624C`,
      }}
    >
      <div className="max-w-300 mx-auto">
        <div className="text-center mb-4">
          <span className="font-body font-bold text-white/70 uppercase tracking-widest text-xs mb-3 block">
            WHAT WE TEACH
          </span>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Our Popular Courses</h2>
          <p className="font-body text-white max-w-160 mx-auto leading-relaxed mb-12" style={{ fontSize: "1.125rem" }}>
            Develop your skills in a fresh, unique way by exploring hands-on experiences, creative problem-solving, and real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {courses.map((course, i) => (
            <CourseCard
              key={i}
              category={course.category}
              title={course.title}
              modules={course.modules}
              hours={course.hours}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
