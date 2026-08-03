"use client";

import React, { useState } from "react";
import { Award, FileBadge, CheckCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";

export const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const industryCredentials = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Coursera",
      date: "Issued Aug 2025",
      credentialId: "",
      image: "/certifications/googlecert.jpg",
    },
    {
      title: "Associate Data Scientist",
      issuer: "DataCamp",
      date: "Issued May 2025",
      credentialId: "Credential ID DSA0017300086124",
      image: "/certifications/associatedatasci.jpg",
    },
    {
      title: "Associate Data Analyst",
      issuer: "DataCamp",
      date: "Issued June 2024",
      credentialId: "Credential ID DAA0013656089695",
      image: "/certifications/associatedatanalayst.jpg",
    }
  ];

  const accomplishments = [
    {
      title: "Data Analysis with Excel Power Tools",
      issuer: "DataCamp",
      date: "June 21, 2025",
      image: "/certifications/DAwithexcel.jpg",
    },
    {
      title: "Excel Fundamentals",
      issuer: "DataCamp",
      date: "June 15, 2025",
      image: "/certifications/excelfundamentals.jpg",
    },
    {
      title: "Python Data Fundamentals",
      issuer: "DataCamp",
      date: "April 26, 2025",
      image: "/certifications/pythondatafundamentals.jpg",
    },
    {
      title: "Data Scientist in Python",
      issuer: "DataCamp",
      date: "April 15, 2025",
      image: "/certifications/datascipython.jpg",
    },
    {
      title: "Associate Data Scientist in Python",
      issuer: "DataCamp",
      date: "April 05, 2025",
      image: "/certifications/associatedatascipython.jpg",
    },
    {
      title: "Data Analyst in Power BI",
      issuer: "DataCamp",
      date: "June 29, 2024",
      image: "/certifications/dataanalystpbi.jpg",
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-neutral-950 relative flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="flex items-center justify-center gap-4 mb-16">
          <Award className="w-8 h-8 md:w-10 md:h-10 text-teal-400" />
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
            Certifications
          </h2>
        </div>
        
        {/* Industry Credentials Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FileBadge className="w-6 h-6 text-teal-400" />
            <h3 className="text-2xl font-semibold text-white">Industry Credentials</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryCredentials.map((cert, idx) => (
              <GlowCard
                key={idx}
                customSize={true}
                glowColor="teal"
                className="group cursor-pointer p-0 hover:scale-[1.02] transition-transform duration-500 flex flex-col h-full !bg-neutral-900/40"
              >
                <div 
                  onClick={() => setSelectedImage(cert.image)}
                  className="flex flex-col h-full w-full relative z-10 rounded-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-teal-400/10 to-transparent pointer-events-none" />
                  
                  {/* Image Section */}
                <div className="w-full h-48 relative overflow-hidden border-b border-neutral-800">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />
                  
                  {/* Icon floating on image */}
                  <div className="absolute top-4 right-4 p-2 bg-neutral-950/80 backdrop-blur-md rounded-lg border border-neutral-700/50 group-hover:border-teal-500/50 transition-colors z-10">
                    <Award className="w-5 h-5 text-teal-400" />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 relative z-10 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-neutral-400 font-medium mb-1">{cert.issuer}</p>
                    {cert.credentialId && (
                      <p className="text-neutral-500 text-xs font-mono mb-3">{cert.credentialId}</p>
                    )}
                  </div>
                  <p className="text-neutral-500 text-sm mt-4 font-medium">{cert.date}</p>
                </div>
              </div>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* Statement of Accomplishments Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle className="w-6 h-6 text-teal-400" />
            <h3 className="text-2xl font-semibold text-white">Statement of Accomplishments</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {accomplishments.map((acc, idx) => (
              <GlowCard
                key={idx}
                customSize={true}
                glowColor="teal"
                className="p-0 !rounded-xl cursor-pointer !bg-neutral-900/40"
              >
                <div 
                  onClick={() => setSelectedImage(acc.image)}
                  className="group p-5 rounded-xl bg-transparent transition-all duration-300 flex items-start gap-4 relative z-10 h-full w-full"
                >
                <div className="mt-1 p-2 bg-neutral-950 rounded-lg border border-neutral-800 group-hover:border-teal-500/30">
                  <CheckCircle className="w-4 h-4 text-teal-500" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white group-hover:text-teal-100 transition-colors">
                    {acc.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-neutral-400 text-sm">{acc.issuer}</span>
                    <span className="text-neutral-600 text-xs">•</span>
                    <span className="text-neutral-500 text-sm">{acc.date}</span>
                  </div>
                </div>
              </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-right-12 md:top-0 p-2 text-white bg-neutral-800 hover:bg-neutral-700 rounded-full transition-colors border border-neutral-600 z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage}
                alt="Zoomed Certificate"
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-neutral-800"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
