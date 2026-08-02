"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaKaggle } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";

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
          className="flex flex-col items-center"
        >
          <div className="flex justify-center items-center gap-6 mb-6">
            <a href="https://github.com/nzrnshannen" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="group relative flex justify-center items-center text-white/80 hover:text-[#38bdf8] hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] transition-all duration-300">
              <FaGithub className="w-6 h-6 md:w-7 md:h-7" />
              <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-200 bg-neutral-800 border border-neutral-700 text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap">
                GitHub
              </span>
            </a>
            <a href="https://www.linkedin.com/in/nzrnshannen/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group relative flex justify-center items-center text-white/80 hover:text-[#818cf8] hover:drop-shadow-[0_0_10px_rgba(129,140,248,0.8)] transition-all duration-300">
              <FaLinkedinIn className="w-7 h-7 md:w-8 md:h-8" />
              <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-200 bg-neutral-800 border border-neutral-700 text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap">
                LinkedIn
              </span>
            </a>
            <a href="https://www.kaggle.com/nzrnshannen" target="_blank" rel="noopener noreferrer" aria-label="Kaggle" className="group relative flex justify-center items-center text-white/80 hover:text-[#38bdf8] hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] transition-all duration-300">
              <FaKaggle className="w-7 h-7 md:w-8 md:h-8 relative bottom-[2px]" />
              <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-200 bg-neutral-800 border border-neutral-700 text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap">
                Kaggle
              </span>
            </a>
            <a href="https://medium.com/@nzrnshannen" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="group relative flex justify-center items-center text-white/80 hover:text-[#818cf8] hover:drop-shadow-[0_0_10px_rgba(129,140,248,0.8)] transition-all duration-300">
              <FaMediumM className="w-7 h-7 md:w-8 md:h-8" />
              <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-200 bg-neutral-800 border border-neutral-700 text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap">
                Medium
              </span>
            </a>
          </div>

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
