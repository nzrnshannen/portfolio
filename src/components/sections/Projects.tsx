"use client";

import React, { useState } from "react";
import { Tabs } from "@/components/ui/tabs";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const GridContent = ({ items }: { items: any[] }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  
  const pagesArray = [];
  for (let i = 0; i < totalPages; i++) {
    pagesArray.push(items.slice(i * itemsPerPage, (i + 1) * itemsPerPage));
  }

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="flex flex-col h-full w-full relative">
      <div className="w-full flex-grow overflow-hidden">
        <motion.div 
          className="flex flex-row w-full h-full"
          animate={{ x: `-${(page - 1) * 100}%` }}
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
        >
          {pagesArray.map((pageItems, pageIndex) => (
            <div key={pageIndex} className="w-full h-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-4 pb-2 px-1">
              {pageItems.map((item, idx) => (
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
                    <div className="w-full h-36 relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        style={item.imageStyle}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />
                    </div>
                  )}
                  
                  <div className="p-4 md:p-5 flex flex-col flex-grow relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-neutral-500 group-hover:text-teal-400 transition-colors flex-shrink-0 ml-2" />
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
          ))}
        </motion.div>
      </div>
      
      {totalPages > 1 && (
        <>
          <button 
            onClick={handlePrev} 
            disabled={page === 1}
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-neutral-950/90 backdrop-blur-md border border-neutral-700/50 text-white shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:bg-neutral-900 hover:border-teal-500/50 hover:text-teal-400 disabled:opacity-0 disabled:pointer-events-none transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handleNext} 
            disabled={page === totalPages}
            className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-neutral-950/90 backdrop-blur-md border border-neutral-700/50 text-white shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:bg-neutral-900 hover:border-teal-500/50 hover:text-teal-400 disabled:opacity-0 disabled:pointer-events-none transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Floating page indicator at top right */}
          <div className="absolute -top-10 right-0 z-20 px-3 py-1 rounded-full bg-neutral-950/90 backdrop-blur-md border border-neutral-800/80 text-xs font-semibold text-neutral-400 shadow-lg pointer-events-none">
            {page} / {totalPages}
          </div>
        </>
      )}
    </div>
  );
};

const MovingBorderContainer = ({ title, subtitle, items }: { title: string, subtitle: string, items: any[] }) => (
  <div className="projects-cards-view w-full relative rounded-2xl p-4 md:p-6 text-white bg-neutral-950 border border-neutral-800 shadow-2xl flex flex-col">
    {/* Moving border overlay */}
    <div className="absolute inset-[-1px] rounded-[17px] pointer-events-none overflow-hidden [transform:translateZ(0)]">
      <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_24s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_20%,#ffffff_40%,#38bdf8_48%,transparent_50%,transparent_70%,#ffffff_90%,#38bdf8_98%,transparent_100%)]" />
      <div className="absolute inset-[1px] bg-neutral-950 rounded-2xl" />
    </div>

    {/* Inner content */}
    <div className="relative z-10 w-full h-full flex flex-col flex-grow">
      <h2 className="text-xl md:text-3xl font-bold mb-2">{title}</h2>
      <p className="text-neutral-400">{subtitle}</p>
      <GridContent items={items} />
    </div>
  </div>
);

export const Projects = () => {
  const websites = [
    {
      title: "Tuskee",
      description: "A cozy, retro-inspired personal dashboard and productivity app with a notebook, focus timer, and arcade games.",
      link: "https://tuskee-notebook.vercel.app/",
      image: "/projects/tuskee.jpg",
      tags: ["React", "Vite", "Tailwind CSS", "Supabase"],
    },
    {
      title: "Scikit-Hero",
      description: "An interactive learning platform and introduction to Machine Learning for those who want to learn Scikit-Learn.",
      link: "https://scikit-hero.vercel.app/",
      image: "/projects/scikit-hero.jpg",
      tags: ["Machine Learning", "Scikit-Learn", "React"],
    },
    {
      title: "Xpanse",
      description: "Xpanse is a high-performance, real-time team collaboration ecosystem built utilizing Python, FastAPI, and React. It represents a structural, modern approach to productivity, dissolving the barrier between isolated project management platforms and rapid-fire team communication layers by unifying them into a highly responsive, nested workspace layout.",
      link: "https://xpanse-beta.vercel.app/",
      image: "/projects/xpanse.jpg",
      imageStyle: { objectPosition: "50% 25%" },
      tags: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      title: "DevKwest",
      description: "A dynamic project generator designed for challenging developers with unique problem statements.",
      link: "https://devkwest.vercel.app/",
      image: "/projects/devkwest.png",
      tags: ["Next.js", "React", "Tailwind CSS"],
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



  const tabs = [
    {
      title: "Websites Developed",
      value: "websites",
      content: (
        <MovingBorderContainer 
          title="Web Applications" 
          subtitle="Full-stack web applications and platforms." 
          items={websites} 
        />
      ),
    },
    {
      title: "Data Science & Kaggle",
      value: "datascience",
      content: (
        <MovingBorderContainer 
          title="Data Science Portfolios" 
          subtitle="Exploratory Data Analysis and Predictive Models." 
          items={dataScience} 
        />
      ),
    },
    {
      title: "Technical Blogs",
      value: "blogs",
      content: (
        <MovingBorderContainer 
          title="Articles & Insights" 
          subtitle="Published articles on Medium discussing data trends and insights." 
          items={blogs} 
        />
      ),
    },
  ];

  return (
    <section id="projects" className="pt-8 pb-16 bg-neutral-950 relative min-h-screen flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-6">
          Projects & Publications
        </h2>
        
        <div className="relative flex flex-col max-w-6xl mx-auto w-full items-start justify-start">
          <Tabs tabs={tabs} containerClassName="sticky top-4 z-50 bg-neutral-950/80 backdrop-blur-md p-2 rounded-full border border-neutral-800/50" />
        </div>
      </div>
    </section>
  );
};
