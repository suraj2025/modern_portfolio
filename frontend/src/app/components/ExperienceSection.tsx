import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Award, BookOpen, Code, Layers, Star } from "lucide-react";

const milestones = [
{
date: "Feb 2026 - Present",
type: "experience",
icon: Award,
title: "Young Professional-I (BISAG-N)",
desc: "Working as a Full Stack Java Developer on production-grade government applications. Developing secure backend services using Spring Boot, implementing role-based authentication, and building responsive React frontends for municipal and public-sector systems.",
tags: ["Spring Boot", "React", "JWT", "Government Projects"],
},

{
date: "2025",
type: "project",
icon: Layers,
title: "DevBoard",
desc: "Built a full-stack productivity platform featuring Kanban task management, habit tracking, analytics dashboards, JWT authentication, PostgreSQL, and Dockerized deployment.",
tags: ["React", "TypeScript", "Spring Boot 3", "Docker"],
},

{
date: "2025",
type: "achievement",
icon: Award,
title: "505+ LeetCode Problems Solved",
desc: "Solved 505+ algorithmic problems covering Data Structures, Dynamic Programming, Graphs, Trees, Greedy Algorithms, and System Design fundamentals.",
tags: ["LeetCode", "DSA", "Problem Solving"],
},

{
date: "2024",
type: "project",
icon: Layers,
title: "Smart Contact Manager",
desc: "Developed a secure contact management system with OAuth2 authentication, Cloudinary integration, email verification, and advanced contact search functionality.",
tags: ["OAuth2", "Cloudinary", "MongoDB"],
},

{
date: "2024",
type: "project",
icon: Layers,
title: "Employee Management System",
desc: "Built a full-stack employee management platform with Spring Security, JWT authentication, role-based access control, and PostgreSQL integration.",
tags: ["Spring Security", "JWT", "PostgreSQL"],
},

{
date: "2023",
type: "project",
icon: Layers,
title: "Guftgu Chat Application",
desc: "Created a real-time messaging platform using WebSockets, STOMP protocol, JWT authentication, and MongoDB.",
tags: ["WebSocket", "STOMP", "MongoDB"],
},

{
date: "2022",
type: "learning",
icon: BookOpen,
title: "Java & Spring Ecosystem",
desc: "Established strong foundations in Java, Spring Boot, Hibernate, REST APIs, and backend development principles.",
tags: ["Java", "Spring Boot", "REST APIs"],
},
];


const typeColors: Record<string, string> = {
  learning: "#06b6d4",
  project: "#A855F7",
  achievement: "#f59e0b",
  experience: "#10b981"
};

const typeLabels: Record<string, string> = {
  learning: "Learning",
  project: "Project",
  achievement: "Achievement",
  experience: "Experience"
};

export function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
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
            Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3">Experience & Milestones</h2>
          <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: "#8b7db5" }}>
            A chronological record of my growth as a developer.
          </p>
        </motion.div>

        {/* Filter legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-10 flex-wrap"
        >
          {Object.entries(typeColors).map(([type, color]) => (
            <div key={type} className="flex items-center gap-2 text-xs" style={{ color: "#8b7db5" }}>
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
              {typeLabels[type]}
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(168,85,247,0.4), transparent)" }}
          />

          <div className="space-y-6 pl-14">
            {milestones.map(({ date, type, icon: Icon, title, desc, tags }, i) => {
              const color = typeColors[type];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="relative"
                >
                  {/* Node */}
                  <div
                    className="absolute -left-[2.2rem] top-5 w-8 h-8 rounded-xl flex items-center justify-center z-10"
                    style={{
                      background: `${color}20`,
                      border: `2px solid ${color}`,
                      boxShadow: `0 0 12px ${color}50`,
                    }}
                  >
                    <Icon size={14} style={{ color }} />
                  </div>

                  <div
                    className="p-5 rounded-2xl transition-all duration-200 group"
                    style={{
                      background: "rgba(13,10,37,0.6)",
                      border: "1px solid rgba(168,85,247,0.12)",
                      backdropFilter: "blur(12px)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${color}40`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${color}12`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.12)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-sm font-bold text-white">{title}</h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
                        >
                          {typeLabels[type]}
                        </span>
                        <span
                          className="text-xs font-mono"
                          style={{ color: "#8b7db5", fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {date}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs leading-relaxed mb-3" style={{ color: "#8b7db5" }}>{desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-md"
                          style={{
                            background: "rgba(168,85,247,0.07)",
                            border: "1px solid rgba(168,85,247,0.15)",
                            color: "#c4b5fd",
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
