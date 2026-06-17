import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="py-10 px-4 relative"
      style={{ borderTop: "1px solid rgba(168,85,247,0.12)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "rgba(168,85,247,0.2)", border: "1px solid rgba(168,85,247,0.35)" }}
          >
            <Code2 size={13} style={{ color: "#A855F7" }} />
          </div>
          <span className="text-sm font-bold text-white">Suraj Kumar</span>
        </div>

        {/* Copyright */}
        <p className="text-xs flex items-center gap-1.5" style={{ color: "#8b7db5" }}>
          Built with
          <Heart size={11} fill="#A855F7" style={{ color: "#A855F7" }} />
          using React &amp; Spring Boot · © {new Date().getFullYear()} Suraj Kumar
        </p>

        {/* Social */}
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: "https://github.com/suraj2025", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/suraj-kumar-16ba2b221", label: "LinkedIn" },
            { icon: Mail, href: "mailto:suraj.kumar5195609@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{
                background: "rgba(168,85,247,0.08)",
                border: "1px solid rgba(168,85,247,0.15)",
                color: "#8b7db5",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(168,85,247,0.2)";
                (e.currentTarget as HTMLElement).style.color = "#A855F7";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(168,85,247,0.08)";
                (e.currentTarget as HTMLElement).style.color = "#8b7db5";
              }}
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
