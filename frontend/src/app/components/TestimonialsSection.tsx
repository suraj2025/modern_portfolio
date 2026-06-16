import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Star, Linkedin } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Senior Software Engineer",
    company: "TechCorp India",
    avatar: "PS",
    color: "#A855F7",
    text: "Suraj is an exceptional developer with a deep understanding of Spring Boot architecture. His code is clean, well-structured, and follows best practices. He implemented our entire authentication system with JWT and Spring Security flawlessly.",
    stars: 5,
  },
  {
    name: "Rahul Verma",
    role: "Full Stack Developer",
    company: "StartupHub",
    avatar: "RV",
    color: "#06b6d4",
    text: "Working with Suraj was a pleasure. His ability to quickly grasp complex requirements and translate them into scalable solutions is impressive. The REST APIs he designed for our platform are incredibly well-documented and performant.",
    stars: 5,
  },
  {
    name: "Ananya Patel",
    role: "Project Lead",
    company: "DevSolutions",
    avatar: "AP",
    color: "#10b981",
    text: "Suraj brings both technical depth and excellent communication skills. He built our entire backend from scratch using Spring Boot and delivered it ahead of schedule. His attention to security — especially OAuth2 integration — was top-notch.",
    stars: 5,
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 px-4 relative">
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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3">What People Say</h2>
          <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: "#8b7db5" }}>
            Recommendations from teammates and colleagues who have worked with Suraj.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, company, avatar, color, text, stars }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="p-6 rounded-2xl flex flex-col gap-4 transition-all duration-200"
              style={{
                background: "rgba(13,10,37,0.6)",
                border: "1px solid rgba(168,85,247,0.15)",
                backdropFilter: "blur(14px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${color}45`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${color}12`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.15)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: stars }).map((_, si) => (
                  <Star key={si} size={13} fill="#f59e0b" style={{ color: "#f59e0b" }} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed flex-1 italic" style={{ color: "#a09bc0" }}>
                "{text}"
              </p>

              {/* Person */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}88)` }}
                  >
                    {avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{name}</div>
                    <div className="text-xs" style={{ color: "#8b7db5" }}>
                      {role} · {company}
                    </div>
                  </div>
                </div>
                <Linkedin size={16} style={{ color: "#0A66C2", opacity: 0.7 }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
