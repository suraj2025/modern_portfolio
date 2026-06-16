import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "DevBoard",
    description:
      "Enterprise-inspired productivity platform combining task management, habit tracking, and analytics. Features secure JWT authentication, Kanban workflows, streak monitoring, real-time dashboard insights, and a fully containerized deployment architecture.",
    tech: [
      "React",
      "TypeScript",
      "Spring Boot 3",
      "PostgreSQL",
      "JWT",
      "Docker",
    ],
    arch: [
      "Kanban Board",
      "JWT Auth",
      "Dockerized",
      "Analytics",
    ],
    highlights: [
      "TanStack Query",
      "JWT Authentication",
      "Docker Deployment",
    ],
    color: "#6366f1",
    icon: "🚀",
    github: "https://github.com/suraj2025/DevBoard",
    demo: "https://dev-board-bdew.vercel.app/",
    featured: true,
  },

  {
    title: "Employee Management System",
    description:
      "Full-stack enterprise application for managing employee records, departments, and payroll. Features role-based access control, audit logging, and comprehensive reporting dashboard.",
    tech: [
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Spring Security",
      "JWT",
      "Docker",
    ],
    arch: [
      "REST API",
      "RBAC",
      "Audit Logs",
    ],
    highlights: [
      "Spring Security",
      "Role-Based Access Control",
      "REST API Design",
    ],
    color: "#A855F7",
    icon: "👔",
    github: "https://github.com/suraj2025/Employee-Management-System",
    demo: "https://ems-app-iota.vercel.app",
    featured: true,
  },

  {
    title: "Smart Contact Manager",
    description:
      "Cloud-based contact management system with OAuth2 social login, email verification, image upload to Cloudinary, and intelligent contact search with pagination.",
    tech: [
      "Spring Boot",
      "Thymeleaf",
      "MySQL",
      "OAuth2",
      "Cloudinary",
      "Bootstrap",
    ],
    arch: [
      "OAuth2",
      "Cloud Storage",
      "Email Service",
    ],
    highlights: [
      "OAuth2 Authentication",
      "Cloudinary Integration",
      "MongoDB Data Modeling",
    ],
    color: "#06b6d4",
    icon: "📋",
    github: "https://github.com/suraj2025/SmartContactManager",
    demo: "https://smartcontactmanager-840v.onrender.com/",
    featured: true,
  },

  {
    title: "Guftgu Chat Application",
    description:
      "Real-time messaging platform with WebSocket support, private and group chats, message read receipts, typing indicators, and end-to-end encryption.",
    tech: [
      "Spring Boot",
      "WebSocket",
      "React",
      "MongoDB",
      "JWT",
      "STOMP",
    ],
    arch: [
      "WebSocket",
      "Real-time",
      "E2E Encrypted",
    ],
    highlights: [
      "WebSocket Communication",
      "Real-Time Messaging",
      "JWT Authentication",
    ],
    color: "#10b981",
    icon: "💬",
    github: "https://github.com/suraj2025/guftgu-chatapp",
    demo: "https://guftgu-chatapp-frontend.onrender.com",
    featured: false,
  },

  {
    title: "Ticket Support System",
    description:
      "Multi-tenant helpdesk solution with ticket lifecycle management, SLA tracking, automated email notifications, and analytics dashboard for support teams.",
    tech: [
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Spring Security",
      "REST API",
    ],
    arch: [
      "Multi-tenant",
      "SLA Tracking",
      "Email Alerts",
    ],
    highlights: [
      "Multi-Tenant Architecture",
      "SLA Tracking",
      "Email Automation",
    ],
    color: "#f59e0b",
    icon: "🎫",
    github: "https://github.com/suraj2025/ticket-support-system",
    demo: "YOUR_LIVE_LINK",
    featured: false,
  },

  {
    title: "Blogify",
    description:
      "Feature-rich blogging platform with markdown editor, category/tag system, comment threads, author profiles, SEO-optimized URLs, and an admin content management panel.",
    tech: [
      "Spring Boot",
      "React",
      "MySQL",
      "JWT",
      "Quill Editor",
      "REST API",
    ],
    arch: [
      "CMS",
      "Markdown",
      "SEO",
    ],
    highlights: [
      "Content Management System",
      "SEO-Friendly Routing",
      "Rich Text Editing",
    ],
    color: "#8b5cf6",
    icon: "✍️",
    github: "https://github.com/suraj2025/blogify",
    demo: "https://blogify-md5y.onrender.com/",
    featured: false,
  },

  {
    title: "Keeper App",
    description:
      "Google Keep-inspired note-taking application with rich text support, color-coded notes, labels, archive functionality, and responsive masonry grid layout.",
    tech: [
      "React",
      "JavaScript",
      "Material UI",
      "Local Storage",
    ],
    arch: [
      "SPA",
      "Responsive UI",
      "Local State",
    ],
    highlights: [
      "Component-Based Design",
      "State Management",
      "Responsive UI Development",
    ],
    color: "#ec4899",
    icon: "📝",
    github: "https://github.com/suraj2025/Keeper-App",
    demo: "https://keeper-807ae.web.app/",
    featured: false,
  },
];


function ProjectCard({ project, i }: { project: (typeof projects)[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: "rgba(13,10,37,0.65)",
        border: "1px solid rgba(168,85,247,0.15)",
        backdropFilter: "blur(14px)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `${project.color}60`;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 50px ${project.color}20, 0 20px 60px rgba(0,0,0,0.4)`;
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.15)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Header visual */}
      <div
        className="h-40 relative flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.color}18, ${project.color}08)`,
          borderBottom: `1px solid ${project.color}20`,
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(${project.color} 1px, transparent 1px), linear-gradient(90deg, ${project.color} 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div
          className="text-5xl z-10 p-4 rounded-2xl"
          style={{ background: `${project.color}18`, border: `1px solid ${project.color}30` }}
        >
          {project.icon}
        </div>
        {project.featured && (
          <div
            className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-semibold"
            style={{ background: `${project.color}25`, color: project.color, border: `1px solid ${project.color}40` }}
          >
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-white mb-2">{project.title}</h3>
        <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: "#8b7db5" }}>
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-4">
          <div
            className="text-xs font-semibold mb-2"
            style={{ color: project.color }}
          >
            Highlights
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.highlights.map((item) => (
              <span
                key={item}
                className="text-xs px-2 py-0.5 rounded-md"
                style={{
                  background: `${project.color}12`,
                  border: `1px solid ${project.color}25`,
                  color: "#cbd5e1",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.arch.map((a) => (
            <span
              key={a}
              className="text-xs px-2 py-0.5 rounded-md font-medium"
              style={{ background: `${project.color}12`, color: project.color, border: `1px solid ${project.color}25` }}
            >
              {a}
            </span>
          ))}
        </div>


        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-md"
              style={{
                background: "rgba(168,85,247,0.07)",
                border: "1px solid rgba(168,85,247,0.15)",
                color: "#c4b5fd",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <a
            href={project.github}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
            style={{
              background: "rgba(168,85,247,0.1)",
              border: "1px solid rgba(168,85,247,0.25)",
              color: "#c4b5fd",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(168,85,247,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(168,85,247,0.1)";
            }}
          >
            <Github size={13} />
            GitHub
          </a>
          <a
            href={project.demo}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold text-white transition-all duration-200"
            style={{
              background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
              boxShadow: `0 0 16px ${project.color}40`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 28px ${project.color}70`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${project.color}40`;
            }}
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div
        className="absolute top-0 right-0 w-80 h-80 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #A855F7, transparent 70%)", filter: "blur(80px)" }}
      />

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
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3">Featured Projects</h2>
          <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: "#8b7db5" }}>
            Production-grade applications showcasing end-to-end full stack development.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
