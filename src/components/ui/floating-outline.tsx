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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -40% 0px", // Trigger when element is mostly in center of viewport
        threshold: 0,
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
              absolute right-12 text-sm font-medium transition-all duration-300
              ${activeSection === id ? "opacity-100 text-teal-400 translate-x-0" : "opacity-0 text-neutral-500 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"}
            `}
          >
            {label}
          </span>
          
          {/* Indicator Line */}
          <div
            className={`
              h-[2px] transition-all duration-300 rounded-full
              ${activeSection === id ? "w-8 bg-teal-400" : "w-3 bg-neutral-700 group-hover:w-5 group-hover:bg-neutral-500"}
            `}
          />
        </div>
      ))}
    </div>
  );
};
