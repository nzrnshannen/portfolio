"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Mar 2026 - Jul 2026",
      content: (
        <div className="flex flex-col items-start text-left w-full">
          <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
            Software Quality Assurance Engineer
          </h4>
          <p className="text-sm md:text-base text-neutral-400 mb-4 font-medium leading-relaxed">
            Trax Technologies<br />
            Internship (Hybrid) • Cebu, Philippines<br />
            <span className="text-neutral-500">Mar 2026 - Jul 2026</span>
          </p>
          
          <div className="flex flex-wrap justify-start gap-2 mt-2">
            {["Playwright", "Automation Testing", "CI/CD", "Kafka", "API Testing", "SQL"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-neutral-900/50 text-neutral-400 text-xs rounded-full border border-neutral-800">
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
          <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
            Data Scientist
          </h4>
          <p className="text-sm md:text-base text-neutral-400 mb-4 font-medium leading-relaxed">
            AiiQ<br />
            Full-Time (Remote) • Las Vegas, Nevada<br />
            <span className="text-neutral-500">Sep 2025 - Feb 2026</span>
          </p>
          
          <div className="flex flex-wrap justify-start gap-2 mt-2">
            {["Python", "Apify API", "Google Gemini API", "Web Scraping", "Google Sheets Webhooks", "SendGrid"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-neutral-900/50 text-neutral-400 text-xs rounded-full border border-neutral-800">
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
          <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
            Lead Generation Specialist
          </h4>
          <p className="text-sm md:text-base text-neutral-400 mb-4 font-medium leading-relaxed">
            Cogniq AI<br />
            Internship (Remote) • India<br />
            <span className="text-neutral-500">Nov 2025 - Jan 2026</span>
          </p>
          
          <div className="flex flex-wrap justify-start gap-2 mt-2">
            {["Custom Gemini Gems", "LinkedIn", "Data Cleaning", "Lead Scraping", "Email Outreach"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-neutral-900/50 text-neutral-400 text-xs rounded-full border border-neutral-800">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    }
  ];

  return (
    <section id="experience" className="w-full bg-neutral-950 relative flex flex-col items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full pt-24 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
          My Experience
        </h2>
      </div>
      <Timeline data={experiences} />
    </section>
  );
};

