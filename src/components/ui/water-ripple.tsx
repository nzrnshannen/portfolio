"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const WaterRipple = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the comet tail effect
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* The glowing comet head that chases the mouse */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-teal-400 shadow-[0_0_30px_rgba(45,212,191,1),_0_0_60px_rgba(45,212,191,0.5)] blur-[2px]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: 25,
          height: 25,
        }}
      />
      {/* An inner core that is tighter and brighter */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
        }}
      />
    </>
  );
};
