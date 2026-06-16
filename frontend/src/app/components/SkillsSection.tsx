import { motion, useInView } from "motion/react";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Backend",
    icon: "⚙️",
    color: "#A855F7",
    skills: [
      { name: "Java", level: 92 },
      { name: "Spring Boot", level: 88 },
      { name: "Spring Security", level: 82 },
      { name: "Hibernate", level: 80 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    color: "#06b6d4",
    skills: [
      { name: "React", level: 85 },
      { name: "JavaScript", level: 83 },
      { name: "HTML/CSS", level: 90 },
      { name: "Bootstrap", level: 78 },
      { name: "Tailwind CSS", level: 75 },
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    color: "#10b981",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 82 },
      { name: "MongoDB", level: 72 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    color: "#f59e0b",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Docker", level: 70 },
      { name: "Postman", level: 90 },
      { name: "Maven", level: 80 },
    ],
  },
];

const badgeSets = [
  ["Java", "Spring Boot", "Spring Security", "Hibernate", "JPA", "Maven"],
  ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap"],
  ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  ["Git", "GitHub", "Docker", "Postman", "Linux", "REST", "JWT"],
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between text-xs mb-1.5">
        <span className="text-white font-medium">{name}</span>
        <span style={{ color, fontFamily: "'JetBrains Mono', monospace" }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block"
            style={{ color: "#A855F7", background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)" }}
          >
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3">Technical Arsenal</h2>
          <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: "#8b7db5" }}>
            A curated set of technologies I work with daily to build production-ready applications.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map(({ title, icon, color, skills }, catIdx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl transition-all duration-200"
              style={{
                background: "rgba(13,10,37,0.6)",
                border: "1px solid rgba(168,85,247,0.15)",
                backdropFilter: "blur(14px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${color}55`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${color}15`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.15)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: `${color}18`, border: `1px solid ${color}35` }}
                >
                  {icon}
                </div>
                <h3 className="font-bold text-white">{title}</h3>
                <div
                  className="ml-auto text-xs px-2 py-0.5 rounded-full"
                  style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}
                >
                  {skills.length} skills
                </div>
              </div>
              {skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={color}
                  delay={catIdx * 0.1 + si * 0.07}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Skill badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl"
          style={{
            background: "rgba(13,10,37,0.6)",
            border: "1px solid rgba(168,85,247,0.15)",
            backdropFilter: "blur(14px)",
          }}
        >
          <div className="text-sm font-semibold text-white mb-4">All Technologies</div>
          <div className="flex flex-wrap gap-2">
            {badgeSets.flat().map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.025, duration: 0.3 }}
                className="px-3 py-1.5 rounded-lg text-xs font-medium cursor-default transition-all duration-200"
                style={{
                  background: "rgba(168,85,247,0.08)",
                  border: "1px solid rgba(168,85,247,0.2)",
                  color: "#c4b5fd",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(168,85,247,0.2)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.5)";
                  (e.currentTarget as HTMLElement).style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(168,85,247,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.2)";
                  (e.currentTarget as HTMLElement).style.color = "#c4b5fd";
                }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
