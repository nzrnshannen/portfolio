import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-teal-500/30">
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
