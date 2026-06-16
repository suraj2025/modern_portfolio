import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { CodingActivity } from "./components/CodingActivity";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ArchitectureSection } from "./components/ArchitectureSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { AIAssistant } from "./components/AIAssistant";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(160deg, #04030f 0%, #060418 30%, #08052a 60%, #04030f 100%)",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        color: "#f0eeff",
      }}
    >
      {/* Ambient background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #A855F7, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute top-[60%] right-[5%] w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-[35%] right-[25%] w-[300px] h-[300px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #06b6d4, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <CodingActivity />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ArchitectureSection />
        <AIAssistant />
        {/* <TestimonialsSection /> */}
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
