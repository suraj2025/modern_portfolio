import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Shield, Database, Code, Globe, Lock, Key, User } from "lucide-react";

const highlights = [
  { icon: Code, label: "Spring Boot", desc: "Enterprise Java framework" },
  { icon: Globe, label: "React", desc: "Modern UI development" },
  { icon: Database, label: "PostgreSQL", desc: "Relational DB mastery" },
  { icon: Shield, label: "REST APIs", desc: "Scalable API design" },
  { icon: Lock, label: "Spring Security", desc: "Application security" },
  { icon: Key, label: "JWT Auth", desc: "Stateless authentication" },
];

const timeline = [
  { year: "2022", title: "Started Java Journey", desc: "Core Java, OOP, Data Structures & Algorithms" },
  { year: "2023", title: "Spring Ecosystem", desc: "Spring Boot, Spring MVC, Hibernate, REST APIs" },
  { year: "2023", title: "Frontend Development", desc: "React, JavaScript, HTML/CSS, Bootstrap" },
  { year: "2024", title: "Full Stack Projects", desc: "Built Employee Management System, Smart Contact Manager, Chat App" },
  { year: "2024", title: "Advanced Topics", desc: "Spring Security, JWT, Docker, Cloud deployment" },
  { year: "2025", title: "Professional Growth", desc: "Open source contributions, system design, LeetCode practice" },
  {
    year: "2026",
    title: "Young Professional-I @ BISAG-N",
    desc: "Working on production-grade government applications using Spring Boot and React.",
  },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function AboutSection() {

  const [stats, setStats] = useState(null);

useEffect(() => {
  fetch(
    "https://modern-portfolio-g72z.onrender.com/api/leetcode/stats"
    // "http://localhost:8080/api/leetcode/stats"
  )
    .then(res => res.json())
    .then(data => setStats(data));
}, []);
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block"
              style={{ color: "#A855F7", background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)" }}
            >
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
              Crafting Digital Experiences
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Photo + bio */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-6">
                {/* Avatar */}
                <div
                  className="w-26 h-34 rounded-2xl flex-shrink-0 flex items-center justify-center relative"
                  style={{
                    background: "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(124,58,237,0.2))",
                    border: "2px solid rgba(168,85,247,0.4)",
                    boxShadow: "0 0 40px rgba(168,85,247,0.2)",
                  }}
                >
                  <img src ="./PROFILE.jpg" alt="profile" className="p-1 rounded-2xl"/>
                  {/* <User size={40} style={{ color: "#A855F7" }} /> */}
                  <div
                    className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "#10b981", border: "2px solid #04030f" }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Suraj Kumar</h3>
                  <p className="text-sm mb-2" style={{ color: "#A855F7" }}>Full Stack Java Developer</p>
                  <div className="flex items-center gap-2 text-xs" style={{ color: "#8b7db5" }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Available for opportunities
                  </div>
                </div>
              </div>

              <p className="leading-relaxed text-base" style={{ color: "#8b7db5" }}>
                I'm a Full Stack Java Developer currently working as a{" "}
                <span style={{ color: "#c4b5fd" }}>Young Professional-I</span> at{" "}
                <span style={{ color: "#c4b5fd" }}>BISAG-N</span>, where I contribute to
                building production-grade government applications using{" "}
                <span style={{ color: "#c4b5fd" }}>Spring Boot</span> and{" "}
                <span style={{ color: "#c4b5fd" }}>React</span>. My expertise spans the
                entire development lifecycle—from designing secure backend systems with{" "}
                <span style={{ color: "#c4b5fd" }}>Spring Security</span> and{" "}
                <span style={{ color: "#c4b5fd" }}>JWT Authentication</span> to developing
                responsive user interfaces and scalable RESTful services.
              </p>

              <p className="leading-relaxed text-base" style={{ color: "#8b7db5" }}>
                I enjoy solving complex engineering challenges and transforming business
                requirements into clean, maintainable solutions. With hands-on experience in{" "}
                <span style={{ color: "#c4b5fd" }}>Java</span>,{" "}
                <span style={{ color: "#c4b5fd" }}>Spring Boot</span>,{" "}
                <span style={{ color: "#c4b5fd" }}>React</span>,{" "}
                <span style={{ color: "#c4b5fd" }}>MySQL</span>, and{" "}
                <span style={{ color: "#c4b5fd" }}>MongoDB</span>, along with consistent{" "}
                <span style={{ color: "#c4b5fd" }}>LeetCode practice</span> and multiple
                full-stack projects, I bring both strong problem-solving abilities and
                practical software engineering skills to every project.
              </p>

              <div className="flex gap-4 pt-2">
                {[
                  { label: "Projects", value: "10+" },
                  { label: "LeetCode", value: stats?.totalSolved ?? "..." },
                  { label: "Technologies", value: "15+" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex-1 text-center rounded-xl py-3"
                    style={{ background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.15)" }}
                  >
                    <div className="text-xl font-black text-white">{value}</div>
                    <div className="text-xs" style={{ color: "#8b7db5" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Highlights grid */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="p-4 rounded-2xl cursor-default group transition-all duration-200"
                  style={{
                    background: "rgba(13,10,37,0.6)",
                    border: "1px solid rgba(168,85,247,0.15)",
                    backdropFilter: "blur(12px)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.45)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(168,85,247,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.15)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(13,10,37,0.6)";
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.25)" }}
                  >
                    <Icon size={18} style={{ color: "#A855F7" }} />
                  </div>
                  <div className="text-sm font-semibold text-white mb-0.5">{label}</div>
                  <div className="text-xs" style={{ color: "#8b7db5" }}>{desc}</div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Learning Timeline */}
        <FadeIn delay={0.1}>
          <h3 className="text-xl font-bold text-white mb-8 text-center">Learning Journey</h3>
        </FadeIn>
        <div className="relative">
          <div
            className="absolute left-6 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-px"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(168,85,247,0.5), transparent)" }}
          />
          <div className="space-y-6">
            {timeline.map(({ year, title, desc }, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className={`flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`hidden md:flex md:w-1/2 ${i % 2 === 0 ? "md:pr-10 md:justify-end" : "md:pl-10 md:justify-start"}`}>
                    <div
                      className="px-4 py-3 rounded-xl max-w-xs"
                      style={{
                        background: "rgba(13,10,37,0.6)",
                        border: "1px solid rgba(168,85,247,0.15)",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <div className="text-xs font-mono font-semibold mb-1" style={{ color: "#A855F7" }}>{year}</div>
                      <div className="text-sm font-semibold text-white mb-0.5">{title}</div>
                      <div className="text-xs" style={{ color: "#8b7db5" }}>{desc}</div>
                    </div>
                  </div>
                  <div className="relative flex items-start gap-4 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div
                      className="w-3 h-3 rounded-full mt-3 flex-shrink-0 z-10 ml-4 md:ml-0"
                      style={{ background: "#A855F7", boxShadow: "0 0 10px rgba(168,85,247,0.6)" }}
                    />
                    {/* Mobile card */}
                    <div
                      className="md:hidden px-4 py-3 rounded-xl flex-1"
                      style={{
                        background: "rgba(13,10,37,0.6)",
                        border: "1px solid rgba(168,85,247,0.15)",
                      }}
                    >
                      <div className="text-xs font-mono font-semibold mb-1" style={{ color: "#A855F7" }}>{year}</div>
                      <div className="text-sm font-semibold text-white mb-0.5">{title}</div>
                      <div className="text-xs" style={{ color: "#8b7db5" }}>{desc}</div>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
