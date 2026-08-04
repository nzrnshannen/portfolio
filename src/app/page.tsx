import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { FloatingOutline } from "@/components/ui/floating-outline";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-teal-500/30">
      <FloatingOutline />
      <Hero />
      <Experience />
      <TechStack />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
