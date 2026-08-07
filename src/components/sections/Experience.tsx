"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Aug 2026 - Oct 2026",
      content: (
        <div className="flex flex-col items-start text-left w-full">
          <div className="flex justify-between items-start w-full mb-3">
            <div className="flex-1 pr-4">
              <h4 className="text-lg font-bold text-white leading-tight mb-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                Data Scientist
              </h4>
              <p className="text-sm text-neutral-400 font-medium">Talleco</p>
              <p className="text-xs text-neutral-500 mt-1">Aug 2026 - Oct 2026</p>
            </div>
            <div className="text-right text-xs text-neutral-400 font-medium leading-relaxed shrink-0">
              <p>Internship</p>
              <p>Hybrid</p>
              <p className="text-[10px] text-neutral-500">Cebu, Philippines</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-start gap-1.5 mt-1">
            {["Python", "SQL", "Data Analysis", "Data Visualization", "Git"].map((tech) => (
              <span key={tech} className="px-2.5 py-1 bg-neutral-900/50 text-neutral-400 text-[10px] rounded-full border border-neutral-800">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Mar 2026 - Jul 2026",
      content: (
        <div className="flex flex-col items-start text-left w-full">
          <div className="flex justify-between items-start w-full mb-3">
            <div className="flex-1 pr-4">
              <h4 className="text-lg font-bold text-white leading-tight mb-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                Software Quality Assurance Engineer
              </h4>
              <p className="text-sm text-neutral-400 font-medium">Trax Technologies</p>
              <p className="text-xs text-neutral-500 mt-1">Mar 2026 - Jul 2026</p>
            </div>
            <div className="text-right text-xs text-neutral-400 font-medium leading-relaxed shrink-0">
              <p>Internship</p>
              <p>Hybrid</p>
              <p className="text-[10px] text-neutral-500">Cebu, Philippines</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-start gap-1.5 mt-1">
            {["Playwright", "Automation Testing", "CI/CD", "Kafka", "API Testing", "SQL"].map((tech) => (
              <span key={tech} className="px-2.5 py-1 bg-neutral-900/50 text-neutral-400 text-[10px] rounded-full border border-neutral-800">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Sep 2025 - Feb 2026",
      content: (
        <div className="flex flex-col items-start text-left w-full">
          <div className="flex justify-between items-start w-full mb-3">
            <div className="flex-1 pr-4">
              <h4 className="text-lg font-bold text-white leading-tight mb-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                Data Scientist
              </h4>
              <p className="text-sm text-neutral-400 font-medium">AiiQ</p>
              <p className="text-xs text-neutral-500 mt-1">Sep 2025 - Feb 2026</p>
            </div>
            <div className="text-right text-xs text-neutral-400 font-medium leading-relaxed shrink-0">
              <p>Full-Time</p>
              <p>Remote</p>
              <p className="text-[10px] text-neutral-500">Las Vegas, Nevada</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-start gap-1.5 mt-1">
            {["Python", "Apify API", "A/B Testing", "Web Scraping", "Google Sheets Webhooks", "Data Visualization"].map((tech) => (
              <span key={tech} className="px-2.5 py-1 bg-neutral-900/50 text-neutral-400 text-[10px] rounded-full border border-neutral-800">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Nov 2025 - Jan 2026",
      content: (
        <div className="flex flex-col items-start text-left w-full">
          <div className="flex justify-between items-start w-full mb-3">
            <div className="flex-1 pr-4">
              <h4 className="text-lg font-bold text-white leading-tight mb-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                Lead Generation Specialist
              </h4>
              <p className="text-sm text-neutral-400 font-medium">Cogniq AI</p>
              <p className="text-xs text-neutral-500 mt-1">Nov 2025 - Jan 2026</p>
            </div>
            <div className="text-right text-xs text-neutral-400 font-medium leading-relaxed shrink-0">
              <p>Internship</p>
              <p>Remote</p>
              <p className="text-[10px] text-neutral-500">India</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-start gap-1.5 mt-1">
            {["Custom Gemini Gems", "Google Sheets", "Data Cleaning", "Lead Scraping", "Email Outreach"].map((tech) => (
              <span key={tech} className="px-2.5 py-1 bg-neutral-900/50 text-neutral-400 text-[10px] rounded-full border border-neutral-800">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    }
  ];

  return (
    <section id="experience" className="bg-neutral-950 w-full py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
          My Experience
        </h2>
      </div>
      <Timeline data={experiences} />
    </section>
  );
};
