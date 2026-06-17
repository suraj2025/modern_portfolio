import { useState } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "Email", value: "suraj.kumar5195609@gmail.com", href: "mailto:suraj.kumar5195609@gmail.com", color: "#A855F7" },
  { icon: Linkedin, label: "LinkedIn", value: "https://linkedin.com/in/suraj-kumar-16ba2b221", href: "https://linkedin.com/in/suraj-kumar-16ba2b221", color: "#0A66C2" },
  { icon: Github, label: "GitHub", value: "github.com/suraj2025", href: "https://github.com/suraj2025", color: "#c4b5fd" },
  { icon: MapPin, label: "Location", value: "India (Remote-friendly)", href: "#", color: "#10b981" },
];

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1400);
  };

  const inputStyle = {
    background: "rgba(168,85,247,0.06)",
    border: "1px solid rgba(168,85,247,0.18)",
    color: "#f0eeff",
    borderRadius: 12,
    padding: "10px 14px",
    fontSize: 14,
    width: "100%",
    outline: "none",
    transition: "all 0.2s",
  };

  const focusStyle = { borderColor: "rgba(168,85,247,0.5)", boxShadow: "0 0 0 3px rgba(168,85,247,0.1)" };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #A855F7, transparent 70%)", filter: "blur(80px)" }}
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
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
            Let's Build Something Amazing
          </h2>
          <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: "#8b7db5" }}>
            Open to full-time roles, freelance projects, and collaboration. Reach out and let's talk!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div
              className="p-6 rounded-2xl mb-2"
              style={{
                background: "rgba(13,10,37,0.6)",
                border: "1px solid rgba(168,85,247,0.15)",
                backdropFilter: "blur(14px)",
              }}
            >
              <h3 className="text-base font-bold text-white mb-2">Get in Touch</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#8b7db5" }}>
                I'm currently seeking exciting opportunities as a Full Stack Java Developer.
                Whether you have a project in mind or just want to connect — my inbox is always open.
              </p>
            </div>

            {contactItems.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 group"
                style={{
                  background: "rgba(13,10,37,0.6)",
                  border: "1px solid rgba(168,85,247,0.12)",
                  backdropFilter: "blur(12px)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${color}40`;
                  (e.currentTarget as HTMLElement).style.background = `${color}08`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.12)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(13,10,37,0.6)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <div className="text-xs" style={{ color: "#8b7db5" }}>{label}</div>
                  <div className="text-sm font-medium text-white">{value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-2xl"
            style={{
              background: "rgba(13,10,37,0.65)",
              border: "1px solid rgba(168,85,247,0.15)",
              backdropFilter: "blur(20px)",
            }}
          >
            <h3 className="text-base font-bold text-white mb-5">Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs mb-1.5 block" style={{ color: "#8b7db5" }}>Your Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Rahul Sharma"
                    style={inputStyle}
                    onFocus={(e) => Object.assign((e.target as HTMLElement).style, focusStyle)}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = "rgba(168,85,247,0.18)";
                      (e.target as HTMLElement).style.boxShadow = "none";
                    }}
                  />
                </div>
                <div>
                  <label className="text-xs mb-1.5 block" style={{ color: "#8b7db5" }}>Email Address</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="rahul@company.com"
                    style={inputStyle}
                    onFocus={(e) => Object.assign((e.target as HTMLElement).style, focusStyle)}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = "rgba(168,85,247,0.18)";
                      (e.target as HTMLElement).style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs mb-1.5 block" style={{ color: "#8b7db5" }}>Subject</label>
                <input
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Job Opportunity / Project Collaboration"
                  style={inputStyle}
                  onFocus={(e) => Object.assign((e.target as HTMLElement).style, focusStyle)}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = "rgba(168,85,247,0.18)";
                    (e.target as HTMLElement).style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label className="text-xs mb-1.5 block" style={{ color: "#8b7db5" }}>Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Hi Suraj, I'd love to discuss..."
                  style={{ ...inputStyle, resize: "vertical", minHeight: 110 }}
                  onFocus={(e) => Object.assign((e.target as HTMLElement).style, { ...focusStyle, resize: "vertical" })}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = "rgba(168,85,247,0.18)";
                    (e.target as HTMLElement).style.boxShadow = "none";
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={sending || sent}
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white transition-all duration-200 disabled:opacity-70"
                style={{
                  background: sent
                    ? "linear-gradient(135deg, #10b981, #059669)"
                    : "linear-gradient(135deg, #A855F7, #7c3aed)",
                  boxShadow: sent
                    ? "0 0 24px rgba(16,185,129,0.4)"
                    : "0 0 24px rgba(168,85,247,0.4)",
                }}
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : sending ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
