import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, Download, ChevronDown, Terminal } from "lucide-react";
import { FileText } from "lucide-react";
import { useState } from "react";
const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/suraj2025" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/suraj-kumar-16ba2b221" },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
    ),
    label: "LeetCode",
    href: "https://leetcode.com/suraj025",
  },
  { icon: Mail, label: "Email", href: "mailto:suraj.kumar5195609@gmail.com" },
];

const techPills = ["Spring Boot", "React", "Java", "PostgreSQL", "REST APIs", "Docker", "JWT", "MongoDB"];

export function HeroSection() {
  const [showResume, setShowResume] = useState(false);
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-24">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #A855F7 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating code snippet decoration */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute right-8 top-32 hidden xl:block"
        style={{
          background: "rgba(13,10,37,0.8)",
          border: "1px solid rgba(168,85,247,0.25)",
          backdropFilter: "blur(12px)",
          borderRadius: "14px",
          padding: "16px 20px",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "12px",
        }}
      >
        <div style={{ color: "#8b7db5" }}>// Suraj's stack</div>
        <div><span style={{ color: "#A855F7" }}>const</span> <span style={{ color: "#06b6d4" }}>skills</span> = {"{"}</div>
        <div style={{ paddingLeft: 12 }}><span style={{ color: "#c084fc" }}>backend</span>: <span style={{ color: "#10b981" }}>"Spring Boot"</span>,</div>
        <div style={{ paddingLeft: 12 }}><span style={{ color: "#c084fc" }}>frontend</span>: <span style={{ color: "#10b981" }}>"React"</span>,</div>
        <div style={{ paddingLeft: 12 }}><span style={{ color: "#c084fc" }}>db</span>: <span style={{ color: "#10b981" }}>"PostgreSQL"</span></div>
        <div>{"}"}</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute left-8 bottom-40 hidden xl:block"
        style={{
          background: "rgba(13,10,37,0.8)",
          border: "1px solid rgba(168,85,247,0.25)",
          backdropFilter: "blur(12px)",
          borderRadius: "14px",
          padding: "14px 18px",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "12px",
        }}
      >
        <div className="flex items-center gap-2" style={{ color: "#10b981" }}>
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span>Available for opportunities</span>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
          style={{
            background: "rgba(168, 85, 247, 0.1)",
            border: "1px solid rgba(168, 85, 247, 0.3)",
          }}
        >
          <Terminal size={13} style={{ color: "#A855F7" }} />
          <span className="text-sm" style={{ color: "#c4b5fd" }}>
            Full Stack Java Developer
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.05] tracking-tight"
        >
          Hi, I'm{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #A855F7, #c084fc, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Suraj Kumar
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#8b7db5" }}
        >
          Building scalable web applications with{" "}
          <span style={{ color: "#c4b5fd" }}>Spring Boot</span>,{" "}
          <span style={{ color: "#c4b5fd" }}>React</span>, and modern cloud
          technologies. Passionate about clean architecture and developer
          experience.
        </motion.p>

        {/* Tech pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {techPills.map((tech, i) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: "rgba(168,85,247,0.08)",
                border: "1px solid rgba(168,85,247,0.2)",
                color: "#c4b5fd",
                animationDelay: `${i * 0.05}s`,
              }}
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #A855F7, #7c3aed)",
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(168, 85, 247, 0.65)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(168, 85, 247, 0.4)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <ExternalLink size={16} />
            View Projects
          </button>
          <button
          onClick={() => setShowResume(true)}
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200"
            style={{
              background: "rgba(168, 85, 247, 0.08)",
              border: "1px solid rgba(168, 85, 247, 0.3)",
              color: "#c4b5fd",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(168, 85, 247, 0.16)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(168, 85, 247, 0.08)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <FileText size={16} />
  <a href="/suraj_kumar.pdf" target="_blank">
   View Resume
</a>
          </button>
         
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
              style={{
                background: "rgba(168, 85, 247, 0.08)",
                border: "1px solid rgba(168, 85, 247, 0.2)",
                color: "#8b7db5",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(168, 85, 247, 0.2)";
                (e.currentTarget as HTMLElement).style.color = "#A855F7";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(168, 85, 247, 0.5)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(168, 85, 247, 0.08)";
                (e.currentTarget as HTMLElement).style.color = "#8b7db5";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(168, 85, 247, 0.2)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-opacity hover:opacity-70"
        style={{ color: "#8b7db5" }}
      >
        <span className="text-xs">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
