"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { useState } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a network request for the UI demo
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      console.log("Form submitted!");
      
      // Reset after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <BackgroundBeams />
      
      <div className="max-w-2xl mx-auto p-4 w-full relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-8">
          Let's Connect
        </h2>
        <p className="text-neutral-400 max-w-lg mx-auto my-2 text-center text-sm md:text-base">
          Whether you have a question about my work, want to collaborate on a data project, or just want to say hi, feel free to reach out. I'll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              required
              placeholder="Your Name"
              className="w-full rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950/50 backdrop-blur-sm text-white px-4 py-3 placeholder:text-neutral-500 outline-none transition-all"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              className="w-full rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950/50 backdrop-blur-sm text-white px-4 py-3 placeholder:text-neutral-500 outline-none transition-all"
            />
          </div>
          <textarea
            required
            rows={5}
            placeholder="Your Message"
            className="w-full rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950/50 backdrop-blur-sm text-white px-4 py-3 placeholder:text-neutral-500 outline-none transition-all resize-none"
          />
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting || submitted}
            type="submit"
            className="mt-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg px-4 py-3 transition-colors flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
            ) : submitted ? (
              "Message Sent!"
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>
      </div>
    </section>
  );
};
