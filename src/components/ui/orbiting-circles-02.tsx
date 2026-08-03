"use client";

import React from "react";
import { Globe } from "lucide-react";
import { FaReact, FaPython, FaFigma, FaSlack } from "react-icons/fa";
import { SiSupabase, SiGooglegemini, SiMake, SiAnthropic } from "react-icons/si";

const orbits = [
  {
    size: "w-[440px] h-[440px] md:w-[720px] md:h-[720px]",
    duration: 18,
    icons: [
      { icon: <SiSupabase />, angle: -60 },
      { icon: <SiGooglegemini />, angle: 0 },
      { icon: <SiMake />, angle: 60 },
    ],
  },
  {
    size: "w-[600px] h-[600px] md:w-[880px] md:h-[880px]",
    duration: 24,
    icons: [
      { icon: <FaFigma />, angle: 0 },
      { icon: <FaSlack />, angle: -90 },
    ],
  },
  {
    size: "w-[720px] h-[720px] md:w-[1060px] md:h-[1060px]",
    duration: 30,
    icons: [
      { icon: <SiAnthropic />, angle: -60 },
      { icon: <FaReact />, angle: 0 },
      { icon: <FaPython />, angle: 60 },
    ],
  },
];

export default function OrbitingCirclesGlobeDemo() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden flex justify-center pointer-events-none opacity-30">
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) + 360deg)) }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) - 360deg)) }
        }
        @keyframes counter-cw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) - 360deg)) }
        }
        @keyframes counter-ccw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) + 360deg)) }
        }
      `}</style>

      {/* Center particle globe substitute */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 aspect-square w-[300px] md:w-[580px] z-10 flex items-center justify-center opacity-30">
        <Globe className="w-full h-full text-teal-500 animate-[spin_60s_linear_infinite]" strokeWidth={0.5} />
        <div className="absolute inset-0 bg-neutral-950/40 rounded-full backdrop-blur-[2px]" />
      </div>

      {/* Orbiting rings */}
      {orbits.map((orbit, index) => {
        const isCW = index % 2 === 0;
        const orbitAnim = isCW ? "orbit-cw" : "orbit-ccw";
        const counterAnim = isCW ? "counter-cw" : "counter-ccw";

        const allIcons = [
          ...orbit.icons,
          ...orbit.icons.map((ic) => ({
            ...ic,
            angle: ic.angle + 180,
          })),
        ];

        return (
          <div
            key={index}
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border border-neutral-800/50 ${orbit.size}`}
          >
            {allIcons.map((iconData, iconIndex) => (
              <div
                key={iconIndex}
                className="absolute top-0 left-1/2 h-1/2 -ml-8 origin-bottom flex flex-col justify-start items-center"
                style={
                  {
                    "--start-angle": `${iconData.angle}deg`,
                    animation: `${orbitAnim} ${orbit.duration}s linear infinite`,
                  } as React.CSSProperties
                }
              >
                <div
                  className="p-3 sm:p-4 border border-neutral-700 rounded-full bg-neutral-900 text-teal-400 text-xl sm:text-2xl -mt-8 relative z-10 shadow-[0_0_15px_rgba(45,212,191,0.2)]"
                  style={
                    {
                      "--counter-offset": `${-iconData.angle}deg`,
                      animation: `${counterAnim} ${orbit.duration}s linear infinite`,
                    } as React.CSSProperties
                  }
                >
                  {iconData.icon}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
