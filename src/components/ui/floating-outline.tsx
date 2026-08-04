"use client";

import React, { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "tech", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const FloatingOutline = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const visibilityMap = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });

        let maxRatio = 0;
        let mostVisible = "";

        sections.forEach(({ id }) => {
          const ratio = visibilityMap.get(id) || 0;
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisible = id;
          }
        });

        if (mostVisible) {
          setActiveSection(mostVisible);
        }
      },
      {
        root: null,
        rootMargin: "-10% 0px -10% 0px", 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-6 xl:right-12 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map(({ id, label }) => (
        <div
          key={id}
          className="group relative flex items-center justify-end w-32 cursor-pointer h-6"
          onClick={() => handleClick(id)}
        >
          {/* Tooltip / Label */}
          <span
            className={`
              absolute right-12 px-2.5 py-1 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap
              ${activeSection === id ? "opacity-100 text-teal-400 bg-neutral-950/70 backdrop-blur-md border border-neutral-800/50 translate-x-0" : "opacity-0 text-neutral-500 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-neutral-950/70 group-hover:backdrop-blur-md group-hover:border group-hover:border-neutral-800/50"}
            `}
          >
            {label}
          </span>
          
          {/* Indicator Line */}
          <div
            className={`
              h-[2px] transition-all duration-300 rounded-full drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]
              ${activeSection === id ? "w-8 bg-teal-400" : "w-3 bg-neutral-700 group-hover:w-5 group-hover:bg-neutral-500"}
            `}
          />
        </div>
      ))}
    </div>
  );
};
