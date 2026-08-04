"use client";

import { useScroll, useTransform, motion } from "framer-motion";
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

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full relative" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 flex flex-col items-center">
        
        {/* Animated Line (Centered) */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-1/2 -translate-x-1/2 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-800 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-teal-500 via-teal-300 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>

        {/* Content Items */}
        <div className="flex flex-col w-full relative z-10 space-y-40">
          {data.map((item, index) => (
            <div key={index} className="flex justify-center w-full px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ margin: "-45% 0px -45% 0px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-[#111111]/90 border border-neutral-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-md w-full max-w-md shadow-2xl"
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
