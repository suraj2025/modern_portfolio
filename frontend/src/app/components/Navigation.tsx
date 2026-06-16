import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Code2, Zap } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Activity", href: "#activity" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "AI Chat", href: "#ai-chat" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className="w-full max-w-6xl rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(6, 4, 24, 0.85)"
            : "rgba(6, 4, 24, 0.4)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(168, 85, 247, 0.18)",
          boxShadow: scrolled
            ? "0 4px 40px rgba(168, 85, 247, 0.12)"
            : "none",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "rgba(168, 85, 247, 0.2)", border: "1px solid rgba(168, 85, 247, 0.4)" }}
          >
            <Code2 size={16} style={{ color: "#A855F7" }} />
          </div>
          <span className="font-bold text-white text-sm tracking-tight">Suraj Kumar</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="px-3 py-1.5 rounded-lg text-sm transition-all duration-200 hover:text-white"
              style={{ color: "#8b7db5" }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "rgba(168, 85, 247, 0.12)";
                (e.target as HTMLElement).style.color = "#A855F7";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "transparent";
                (e.target as HTMLElement).style.color = "#8b7db5";
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollTo("#contact")}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #A855F7, #7c3aed)",
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.35)",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.boxShadow = "0 0 30px rgba(168, 85, 247, 0.6)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.boxShadow = "0 0 20px rgba(168, 85, 247, 0.35)";
            }}
          >
            <Zap size={13} />
            Hire Me
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#A855F7" }}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 rounded-2xl p-4 flex flex-col gap-1"
            style={{
              background: "rgba(6, 4, 24, 0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(168, 85, 247, 0.2)",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="w-full text-left px-4 py-3 rounded-xl text-sm transition-colors"
                style={{ color: "#c4b5fd" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(168, 85, 247, 0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
