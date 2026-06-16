import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Shield, ArrowRight, ArrowDown } from "lucide-react";

const authFlow = [
  { step: "1", label: "User Login", desc: "POST /api/auth/login with credentials" },
  { step: "2", label: "Validation", desc: "Spring Security authenticates user" },
  { step: "3", label: "JWT Issued", desc: "Server signs & returns access + refresh tokens" },
  { step: "4", label: "API Access", desc: "Client includes JWT in Authorization header" },
  { step: "5", label: "Filter Chain", desc: "JwtAuthenticationFilter validates token" },
  { step: "6", label: "Resource Served", desc: "Controller handles request & responds" },
];

const architectures = [
  {
    name: "DevBoard",
    color: "#6366f1",
    description:
      "Full-stack productivity platform featuring Kanban task management, habit tracking, analytics dashboards, JWT authentication, and Docker deployment.",
    flow: [
      "React + TypeScript",
      "TanStack Query",
      "Spring Boot 3",
      "Spring Security + JWT",
      "PostgreSQL",
      "Docker",
    ],
    features: ["Kanban Board", "Habit Tracking", "Analytics Dashboard", "JWT Authentication", "Dockerized"],
  },
  {
    name: "Employee Management",
    color: "#A855F7",
    description:
      "Enterprise employee management solution with secure authentication, role-based access control, attendance tracking, and reporting.",
    flow: ["React", "Axios", "Spring Boot", "Spring Security + JWT", "PostgreSQL"],
    features: ["RBAC", "Attendance Management", "Employee CRUD", "REST APIs"],
  },
  {
    name: "Smart Contact Manager",
    color: "#06b6d4",
    description:
      "Cloud-based contact management application with OAuth2 login, Cloudinary image uploads, and MongoDB persistence.",
    flow: ["Thymeleaf", "Spring Boot", "Spring Security", "MongoDB", "Cloudinary"],
    features: ["OAuth2", "Image Upload", "Cloudinary", "Pagination"],
  },
];

export function ArchitectureSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selected, setSelected] = useState(0);
  const active = architectures[selected];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
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
            Architecture
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3">Project Architecture</h2>
          <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: "#8b7db5" }}>
            A behind-the-scenes look at how my applications are designed, secured, and deployed.
          </p>
        </motion.div>

        {/* Project tabs */}
        <div className="flex justify-center gap-3 flex-wrap mb-10">
          {architectures.map((project, index) => (
            <motion.button
              key={project.name}
              onClick={() => setSelected(index)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all"
              style={{
                background: selected === index ? `${project.color}20` : "rgba(168,85,247,0.06)",
                border: `1px solid ${selected === index ? project.color : "rgba(168,85,247,0.15)"}`,
                color: selected === index ? project.color : "#c4b5fd",
              }}
            >
              {project.name}
            </motion.button>
          ))}
        </div>

        {/* Active project card */}
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="p-8 rounded-2xl"
          style={{
            background: "rgba(13,10,37,0.6)",
            border: `1px solid ${active.color}25`,
            backdropFilter: "blur(14px)",
          }}
        >
          <h3 className="text-xl font-bold mb-3 text-center" style={{ color: active.color }}>
            {active.name}
          </h3>
          <p className="text-sm text-center max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "#8b7db5" }}>
            {active.description}
          </p>

          {/* Tech flow — mobile: vertical, desktop: single centered row, no wrap */}
          {/* Mobile */}
          <div className="flex flex-col items-center lg:hidden">
            {active.flow.map((step, index) => (
              <div key={step} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.07 }}
                  className="px-5 py-3 rounded-xl text-sm font-medium text-white text-center"
                  style={{
                    background: `${active.color}18`,
                    border: `1px solid ${active.color}35`,
                    minWidth: "160px",
                  }}
                >
                  {step}
                </motion.div>
                {index < active.flow.length - 1 && (
                  <ArrowDown size={16} className="my-2" style={{ color: active.color, opacity: 0.6 }} />
                )}
              </div>
            ))}
          </div>

          {/* Desktop — overflow scroll so items never wrap */}
          <div className="hidden lg:flex items-center justify-center overflow-x-auto pb-2">
            <div className="flex items-center gap-0 flex-nowrap">
              {active.flow.map((step, index) => (
                <div key={step} className="flex items-center flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.07 }}
                    className="px-4 py-3 rounded-xl text-sm font-medium text-white text-center whitespace-nowrap"
                    style={{
                      background: `${active.color}18`,
                      border: `1px solid ${active.color}35`,
                    }}
                  >
                    {step}
                  </motion.div>
                  {index < active.flow.length - 1 && (
                    <ArrowRight
                      size={16}
                      className="mx-3 flex-shrink-0"
                      style={{ color: active.color, opacity: 0.6 }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Feature badges */}
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {active.features.map((feature) => (
              <span
                key={feature}
                className="px-3 py-1 rounded-lg text-xs font-medium"
                style={{
                  background: `${active.color}12`,
                  border: `1px solid ${active.color}25`,
                  color: active.color,
                }}
              >
                {feature}
              </span>
            ))}
          </div>
        </motion.div>

        {/* JWT Auth Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 p-6 rounded-2xl"
          style={{
            background: "rgba(13,10,37,0.6)",
            border: "1px solid rgba(168,85,247,0.2)",
            backdropFilter: "blur(14px)",
          }}
        >
          <h3 className="font-bold text-white mb-8 flex items-center gap-2">
            <Shield size={18} style={{ color: "#A855F7" }} />
            JWT Authentication Flow
          </h3>

          {/* Mobile — vertical */}
          <div className="flex flex-col items-start gap-0 md:hidden">
            {authFlow.map(({ step, label, desc }, i) => (
              <div key={step} className="flex flex-col items-start w-full">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #A855F7, #7c3aed)",
                      boxShadow: "0 0 12px rgba(168,85,247,0.3)",
                    }}
                  >
                    {step}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">{label}</div>
                    <div className="text-xs mt-0.5 leading-relaxed" style={{ color: "#8b7db5" }}>{desc}</div>
                  </div>
                </div>
                {i < authFlow.length - 1 && (
                  <div className="ml-4 my-2">
                    <ArrowDown size={14} style={{ color: "#A855F7", opacity: 0.4 }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop — horizontal, no wrap */}
          <div className="hidden md:flex items-start justify-between gap-1 overflow-x-auto pb-2">
            {authFlow.map(({ step, label, desc }, i) => (
              <div key={step} className="flex items-start gap-1 flex-shrink-0">
                <div className="flex flex-col items-center text-center" style={{ maxWidth: "100px" }}>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black text-white"
                    style={{
                      background: "linear-gradient(135deg, #A855F7, #7c3aed)",
                      boxShadow: "0 0 12px rgba(168,85,247,0.3)",
                    }}
                  >
                    {step}
                  </div>
                  <div className="mt-2">
                    <div className="text-xs font-semibold text-white leading-tight">{label}</div>
                    <div className="text-xs mt-1 leading-tight" style={{ color: "#8b7db5" }}>{desc}</div>
                  </div>
                </div>
                {i < authFlow.length - 1 && (
                  <div className="flex items-start pt-4 px-1">
                    <ArrowRight size={14} style={{ color: "#A855F7", opacity: 0.4 }} />
                  </div>
                )}
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}