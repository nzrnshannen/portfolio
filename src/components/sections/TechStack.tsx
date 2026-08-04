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
  { name: "MediaPipe", title: "Machine Learning", icon: "https://developers.google.com/static/mediapipe/images/mediapipe_icon.svg" },
  { name: "Supabase", title: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Firebase", title: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "FastAPI", title: "Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "Julia", title: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/julia/julia-original.svg" },
  { name: "R", title: "Data Science", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" },
  { name: "Matlab", title: "Data Science", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" },
  { name: "Express.js", title: "Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "Bootstrap", title: "Styling", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
  { name: "NumPy", title: "Data Science", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
  { name: "Tableau", title: "Data Visualization", icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
  { name: "C", title: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  { name: "C++", title: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "C#", title: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
  { name: "Java", title: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Visual Basic", title: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg" },
  { name: "Vue.js", title: "Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
  { name: "Node.js", title: "Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Jest", title: "Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" },
  { name: "PostgreSQL", title: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "VS Code", title: "Tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "Git", title: "Tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Figma", title: "Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Matplotlib", title: "Data Science", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
  { name: "Excel", title: "Tool", icon: "https://img.icons8.com/color/512/microsoft-excel-2019.png" },
  { name: "Notion", title: "Tool", icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
  { name: "DBeaver", title: "Database", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b5/DBeaver_logo.svg" },
  { name: "Miniconda", title: "Tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg" },
  { name: "GitKraken", title: "Tool", icon: "https://upload.wikimedia.org/wikipedia/commons/e/ee/GitKraken_Icon.png" },
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
