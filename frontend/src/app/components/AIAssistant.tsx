import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Send, Bot, User, Sparkles, RotateCcw } from "lucide-react";

type Message = {
  id: number;
  role: "user" | "assistant";
  text: string;
};

const suggestions = [
  "What technologies does Suraj use?",
  "Show backend projects.",
  "Tell me about DevBoard.",
  "Tell me about Suraj's experience.",
  "What is Suraj's strongest skill?",
  "What is Suraj's LeetCode profile?",
];

const qa: Record<string, string> = {
  "what technologies does suraj use":
    "Suraj is proficient in **Java, Spring Boot, Spring Security, Hibernate** on the backend, **React, TypeScript, and JavaScript** on the frontend, **PostgreSQL, MySQL, and MongoDB** for databases, and **Docker, Git, and Postman** for tooling. He also implements **JWT Authentication**, **REST APIs**, and modern full-stack development practices.",

  "show backend projects":
    "Suraj's backend-focused projects include:\n\n• **DevBoard** — Spring Boot 3 + PostgreSQL + JWT + Docker\n• **Employee Management System** — Spring Boot + RBAC + PostgreSQL\n• **Smart Contact Manager** — Spring Boot + OAuth2 + Cloudinary\n• **Guftgu Chat App** — WebSocket + MongoDB + JWT\n• **Ticket Support System** — Spring Boot + SLA Tracking\n• **Blogify** — Spring Boot + MySQL + REST APIs",

  "tell me about devboard":
    "DevBoard is a full-stack productivity platform built with **React, TypeScript, Spring Boot 3, PostgreSQL, JWT Authentication, and Docker**. It includes Kanban task management, habit tracking, analytics dashboards, protected routes, persistent authentication, and a scalable modern architecture.",

  "tell me about suraj's experience":
    "Suraj is currently working as a **Young Professional-I (Java Developer)** at **BISAG-N**. He develops production-grade applications using **Spring Boot**, **React**, **Spring Security**, **JWT Authentication**, and relational databases while contributing to government and public-sector software solutions.",

  "explain employee management system architecture":
    "The Employee Management System follows a clean layered architecture:\n\n**Frontend:** React SPA communicating through REST APIs\n**Backend:** Spring Boot using Controller → Service → Repository layers\n**Security:** Spring Security with JWT Authentication and Role-Based Access Control\n**Database:** PostgreSQL with Hibernate ORM\n**Features:** Employee management, attendance tracking, reporting, and audit logging",

  "what is suraj's strongest skill":
    "Suraj's strongest area is backend engineering with the **Spring ecosystem**. He has extensive experience building secure and scalable applications using **Spring Boot**, **Spring Security**, **JWT Authentication**, **Hibernate**, **REST APIs**, and **PostgreSQL**, while also delivering modern React-based user interfaces.",

  "is suraj available for hire":
    "Yes! Suraj is currently working as a **Young Professional-I (Java Developer)** at **BISAG-N** and is open to discussing exciting Full Stack Java and Backend Engineering opportunities. Feel free to connect through LinkedIn or the Contact section.",

  "what is suraj's leetcode profile":
    "Suraj has solved **505+ LeetCode problems** across Data Structures, Algorithms, Dynamic Programming, Graphs, Trees, and Greedy techniques. Current breakdown: **190 Easy**, **257 Medium**, and **58 Hard** problems. He actively practices problem solving to strengthen his software engineering and system design skills.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase().trim();

  for (const [key, val] of Object.entries(qa)) {
    if (lower === key) {
      return val;
    }
  }

  for (const [key, val] of Object.entries(qa)) {
    if (
      lower.includes(key) ||
      key.split(" ").every(word => lower.includes(word))
    ) {
      return val;
    }
  }

  return "I'm Suraj's AI portfolio assistant 🤖. You can ask about his experience at BISAG-N, DevBoard, backend projects, Spring Boot expertise, or LeetCode achievements.";
}

function renderText(text: string) {
  return text.split("\n").map((line, i) => (
    <span key={i} className="block">
      {line
        .split(/(\*\*[^*]+\*\*)/g)
        .map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={j} style={{ color: "#c4b5fd" }}>
              {part.slice(2, -2)}
            </strong>
          ) : (
            part
          )
        )}
    </span>
  ));
}

export function AIAssistant() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "assistant",
      text: "Hi! I'm Suraj's AI portfolio assistant 🤖 Ask me anything about his skills, projects, or experience. Use the suggestions below to get started!",
    },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(1);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  const send = (text: string) => {
    if (!text.trim() || thinking) return;
    const userMsg: Message = { id: idRef.current++, role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      const resp = getResponse(text);
      setMessages((prev) => [...prev, { id: idRef.current++, role: "assistant", text: resp }]);
      setThinking(false);
    }, 900 + Math.random() * 600);
  };

  const reset = () => {
    setMessages([
      {
        id: 0,
        role: "assistant",
        text: "Hi! I'm Suraj's AI portfolio assistant 🤖. I can answer questions about his experience at BISAG-N, Spring Boot expertise, DevBoard project, full-stack development skills, and LeetCode achievements. Try one of the suggestions below!"
      },
    ]);
    idRef.current = 1;
  };

  return (
    <section id="ai-chat" className="py-24 px-4 relative">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #A855F7, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span
            className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block"
            style={{ color: "#A855F7", background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)" }}
          >
            AI Assistant
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3">Portfolio Assistant</h2>
          <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: "#8b7db5" }}>
            Ask me anything about Suraj — his skills, projects, experience, or availability.
          </p>
        </motion.div>

        {/* Chat window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(13,10,37,0.7)",
            border: "1px solid rgba(168,85,247,0.2)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 60px rgba(168,85,247,0.1)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{ borderBottom: "1px solid rgba(168,85,247,0.12)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #A855F7, #7c3aed)" }}
              >
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Portfolio AI</div>
                <div className="flex items-center gap-1.5 text-xs" style={{ color: "#10b981" }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Online
                </div>
              </div>
            </div>
            <button
              onClick={reset}
              className="p-2 rounded-lg transition-colors"
              style={{ color: "#8b7db5" }}
              title="Reset chat"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#A855F7"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#8b7db5"; }}
            >
              <RotateCcw size={15} />
            </button>
          </div>

          {/* Messages */}
          <div
            className="px-5 py-5 space-y-4 overflow-y-auto"
            style={{ height: 220, scrollbarWidth: "none" }}
          >
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background:
                        msg.role === "assistant"
                          ? "linear-gradient(135deg, #A855F7, #7c3aed)"
                          : "rgba(168,85,247,0.2)",
                      border: msg.role === "user" ? "1px solid rgba(168,85,247,0.4)" : "none",
                    }}
                  >
                    {msg.role === "assistant" ? (
                      <Bot size={13} className="text-white" />
                    ) : (
                      <User size={13} style={{ color: "#A855F7" }} />
                    )}
                  </div>
                  <div
                    className="px-4 py-3 rounded-2xl text-xs leading-relaxed max-w-[80%]"
                    style={
                      msg.role === "assistant"
                        ? {
                          background: "rgba(168,85,247,0.08)",
                          border: "1px solid rgba(168,85,247,0.15)",
                          color: "#d4d0e8",
                        }
                        : {
                          background: "linear-gradient(135deg, #A855F7, #7c3aed)",
                          color: "#ffffff",
                        }
                    }
                  >
                    {msg.role === "assistant" ? renderText(msg.text) : msg.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {thinking && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-3"
              >
                <div
                  className="w-7 h-7 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #A855F7, #7c3aed)" }}
                >
                  <Bot size={13} className="text-white" />
                </div>
                <div
                  className="px-4 py-3 rounded-2xl flex items-center gap-1.5"
                  style={{ background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.15)" }}
                >
                  {[0, 0.15, 0.3].map((delay, i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                      transition={{ repeat: Infinity, duration: 0.9, delay }}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#A855F7" }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          <div
            className="px-5 pb-3 flex flex-wrap gap-2" style={{ scrollbarWidth: "none" }}
          >
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full transition-all duration-200"
                style={{
                  background: "rgba(168,85,247,0.08)",
                  border: "1px solid rgba(168,85,247,0.2)",
                  color: "#c4b5fd",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(168,85,247,0.18)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(168,85,247,0.08)";
                }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div
            className="px-5 pb-5 pt-2"
            style={{ borderTop: "1px solid rgba(168,85,247,0.1)" }}
          >
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="Ask about Suraj's skills, projects..."
                className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                style={{
                  background: "rgba(168,85,247,0.08)",
                  border: "1px solid rgba(168,85,247,0.2)",
                  color: "#f0eeff",
                }}
                onFocus={(e) => {
                  (e.target as HTMLElement).style.borderColor = "rgba(168,85,247,0.5)";
                }}
                onBlur={(e) => {
                  (e.target as HTMLElement).style.borderColor = "rgba(168,85,247,0.2)";
                }}
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim() || thinking}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-200 disabled:opacity-40"
                style={{ background: "linear-gradient(135deg, #A855F7, #7c3aed)" }}
              >
                <Send size={15} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
