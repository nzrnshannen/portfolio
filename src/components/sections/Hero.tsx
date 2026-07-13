"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="about" className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-neutral-950">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10 max-w-4xl px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold text-center relative z-20 tracking-tight">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-300 to-indigo-400 drop-shadow-sm">
              Shannen Nazareno
            </span>
          </h1>
        </motion.div>

        <div className="mt-4 md:mt-6 w-full max-w-[40rem] px-2">
          <TextGenerateEffect
            words="Information Systems | Automation | Data Science"
            className="text-center text-neutral-300 md:text-2xl"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 text-neutral-400 max-w-2xl text-lg md:text-xl leading-relaxed"
        >
          I am passionate about turning complex data into actionable insights, building robust automation scripts, and designing modern, full-stack web applications. With a strong background in Information Systems, I bridge the gap between technical execution and strategic impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-10"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-white text-neutral-950 font-semibold text-lg hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            View My Work
          </a>
        </motion.div>
      </div>
      
      {/* Decorative gradient mask */}
      <div className="absolute inset-0 w-full h-full bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
    </section>
  );
};
