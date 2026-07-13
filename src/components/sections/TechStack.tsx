"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const skills = [
  { name: "Python", title: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "JavaScript / TypeScript", title: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "SQL", title: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "HTML & CSS", title: "Markup & Styling", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "Next.js", title: "Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "React", title: "Library", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Tailwind CSS", title: "Styling", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Playwright", title: "Automation / Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" },
  { name: "Selenium", title: "Automation / Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" },
  { name: "Pandas & Scikit", title: "Data Science", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { name: "Power BI", title: "Data Visualization", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
];

export const TechStack = () => {
  return (
    <section id="tech" className="py-24 bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
          My Tech Stack
        </h2>
        
        <div className="flex flex-col items-center justify-center">
          <InfiniteMovingCards
            items={skills}
            direction="right"
            speed="slow"
            className="mb-8"
          />
          <InfiniteMovingCards
            items={skills.slice().reverse()}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};
