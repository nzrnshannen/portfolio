"use client";

import { Tabs } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export const Projects = () => {
  const websites = [
    {
      title: "Tuskee",
      description: "A cozy, retro-inspired personal dashboard and productivity application featuring a master notebook, task checklist, focus timer, embedded jukebox, and classic arcade games.",
      link: "https://tuskee-notebook.vercel.app/",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Vite", "Tailwind CSS", "Supabase"],
    },
    {
      title: "DevKwest",
      description: "A dynamic project generator designed for challenging developers with unique problem statements.",
      link: "https://devkwest.vercel.app/",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      title: "Scikit-Hero",
      description: "An interactive learning platform and introduction to Machine Learning for those who want to learn Scikit-Learn.",
      link: "https://scikit-hero.vercel.app/",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
      tags: ["Machine Learning", "Scikit-Learn", "React"],
    },
  ];

  const dataScience = [
    {
      title: "Foodpanda EDA",
      description: "Exploratory Data Analysis on Foodpanda restaurant data, uncovering insights on pricing, ratings, and delivery times.",
      link: "https://www.kaggle.com/code/nzrnshannen/foodpanda-eda-nzrnshannen",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Pandas", "Data Visualization"],
    },
    {
      title: "Coffee Sales EDA",
      description: "Detailed analysis of coffee sales, discovering peak hours, popular products, and revenue trends.",
      link: "https://www.kaggle.com/code/nzrnshannen/coffeesales-eda-nzrnshannen",
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
      tags: ["EDA", "Python", "Matplotlib"],
    },
    {
      title: "Mental Health EDA & Predictive Modeling",
      description: "Comprehensive exploratory analysis and predictive modeling to identify factors contributing to mental health challenges.",
      link: "https://www.kaggle.com/code/nzrnshannen/eda-predictivemodeling-mentalhealth-nzrnshannen",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
      tags: ["Predictive Modeling", "Scikit-Learn", "Python"],
    },
  ];

  const blogs = [
    {
      title: "The Global Water Crisis",
      description: "A deep dive into water scarcity risks and predictive outlooks for the next decade.",
      link: "https://medium.com/@nzrnshannen/the-global-water-crisis-risk-usage-and-the-2030-outlook-cd7f01e49a1a",
      image: "https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?auto=format&fit=crop&w=800&q=80",
      tags: ["Data Analysis", "Sustainability"],
    },
    {
      title: "Academic Stress Insights Among Students",
      description: "Analyzing the primary factors and impacts of academic stress on modern students.",
      link: "https://medium.com/@nzrnshannen/academic-stress-insights-among-students-cca82e3e0507",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      tags: ["Research", "Data Insights"],
    },
    {
      title: "Turning Restaurant Sales Data into Insights with Power BI",
      description: "How to leverage Power BI to transform raw restaurant data into actionable business intelligence.",
      link: "https://medium.com/@nzrnshannen/turning-restaurant-sales-data-into-insights-with-power-bi-58831478ec28",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
      tags: ["Power BI", "Data Visualization"],
    },
    {
      title: "A Snapshot of Crime Trends in the US (2020–2025)",
      description: "Tracking and forecasting major crime trends across the US using recent datasets.",
      link: "https://medium.com/@nzrnshannen/a-snapshot-of-crime-trends-in-the-united-states-2020-2025-78cebc84ebea",
      image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&w=800&q=80",
      tags: ["Forecasting", "Data Science"],
    },
    {
      title: "Sales Trends in the German Beverage Industry",
      description: "A data-driven look at revenue, products, and customer segments in Germany's beverage market.",
      link: "https://medium.com/@nzrnshannen/sales-trends-in-the-german-beverage-industry-2021-2023-a-data-driven-look-at-revenue-products-78ffa1ab1231",
      image: "https://images.unsplash.com/photo-1612528443702-f6741f70a049?auto=format&fit=crop&w=800&q=80",
      tags: ["Sales Analysis", "Market Trends"],
    },
  ];

  const GridContent = ({ items }: { items: any[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 pb-6">
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-gradient-to-br from-neutral-900/90 to-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-2xl overflow-hidden hover:bg-neutral-800 transition-all duration-500 hover:scale-[1.02] hover:border-teal-400 hover:shadow-[0_0_40px_rgba(45,212,191,0.3)] flex flex-col h-full relative"
        >
          {/* Subtle inner glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-teal-400/10 to-transparent pointer-events-none" />
          
          {item.image && (
            <div className="w-full h-40 relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          )}
          <div className="p-5 flex flex-col flex-grow relative z-10">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors line-clamp-2">
                {item.title}
              </h3>
              <ExternalLink className="text-neutral-500 group-hover:text-teal-400 w-5 h-5 flex-shrink-0 ml-2" />
            </div>
            <p className="text-neutral-400 text-sm mb-6 line-clamp-3">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {item.tags.map((tag: string, tagIdx: number) => (
                <span
                  key={tagIdx}
                  className="px-3 py-1 bg-neutral-950/80 text-neutral-300 text-xs rounded-full border border-neutral-700/50 group-hover:border-teal-500/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );

  const tabs = [
    {
      title: "Websites Developed",
      value: "websites",
      content: (
        <div className="w-full relative rounded-2xl p-5 md:p-8 text-white bg-neutral-950 border border-neutral-800 shadow-2xl">
          <h2 className="text-xl md:text-3xl font-bold mb-2">Web Applications</h2>
          <p className="text-neutral-400">Full-stack web applications and platforms.</p>
          <GridContent items={websites} />
        </div>
      ),
    },
    {
      title: "Data Science & Kaggle",
      value: "datascience",
      content: (
        <div className="w-full relative rounded-2xl p-5 md:p-8 text-white bg-neutral-950 border border-neutral-800 shadow-2xl">
          <h2 className="text-xl md:text-3xl font-bold mb-2">Data Science Portfolios</h2>
          <p className="text-neutral-400">Exploratory Data Analysis and Predictive Models.</p>
          <GridContent items={dataScience} />
        </div>
      ),
    },
    {
      title: "Technical Blogs",
      value: "blogs",
      content: (
        <div className="w-full relative rounded-2xl p-5 md:p-8 text-white bg-neutral-950 border border-neutral-800 shadow-2xl">
          <h2 className="text-xl md:text-3xl font-bold mb-2">Articles & Insights</h2>
          <p className="text-neutral-400">Published articles on Medium discussing data trends and insights.</p>
          <GridContent items={blogs} />
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="py-24 bg-neutral-950 relative min-h-screen flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-8">
          Projects & Publications
        </h2>
        
        <div className="relative flex flex-col max-w-6xl mx-auto w-full items-start justify-start">
          <Tabs tabs={tabs} containerClassName="sticky top-4 z-50 bg-neutral-950/80 backdrop-blur-md p-2 rounded-full border border-neutral-800/50" />
        </div>
      </div>
    </section>
  );
};
