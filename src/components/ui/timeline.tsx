"use client";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 100%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const svgHeight = Math.max(0, height - 150);

  const heightTransform = useTransform(smoothProgress, [0, 1], [0, svgHeight]);
  const opacityTransform = useTransform(smoothProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full relative" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 flex flex-col items-center">
        
        {/* Animated Line (More Curly) */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[400px] pointer-events-none [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_80%,transparent_100%)]"
          style={{ height: svgHeight + "px" }}
        >
          <svg
            width="400"
            height={svgHeight}
            viewBox={`0 0 400 ${svgHeight}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background subtle curve */}
            <path
              d={`M 200 0 C 600 ${svgHeight * 0.3}, -200 ${svgHeight * 0.7}, 200 ${svgHeight}`}
              stroke="url(#gradient-bg)"
              strokeWidth="1.5"
            />
              <motion.path
                d={`M 200 0 C 600 ${svgHeight * 0.3}, -200 ${svgHeight * 0.7}, 200 ${svgHeight}`}
                stroke="url(#gradient-anim)"
                strokeWidth="2.5"
                style={{
                  pathLength: smoothProgress,
                  filter: "drop-shadow(0 0 10px rgba(236, 72, 153, 0.6))",
                }}
              />
            <defs>
              <linearGradient id="gradient-bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="10%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="90%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient id="gradient-anim" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="20%" stopColor="#3b82f6" /> {/* Blue */}
                <stop offset="50%" stopColor="#8b5cf6" /> {/* Violet */}
                <stop offset="80%" stopColor="#ec4899" /> {/* Pink */}
                <stop offset="100%" stopColor="#fbcfe8" /> {/* Bright Pink Tip */}
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content Items */}
        <div className="flex flex-col w-full relative z-10 space-y-40">
          {data.map((item, index) => (
            <div key={index} className="flex justify-center w-full px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ margin: "-30% 0px -30% 0px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-neutral-950 border border-neutral-800/50 rounded-2xl p-5 md:p-6 w-full max-w-sm shadow-[0_0_50px_rgba(0,0,0,0.8)] relative z-20"
              >
                {item.content}
              </motion.div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};
