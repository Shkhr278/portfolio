import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js", 
    "Node.js", "Tailwind CSS", "Figma", "Git"
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-1/2 right-0 -z-10 h-[300px] w-[300px] translate-x-1/3 -translate-y-1/2 opacity-20 dark:opacity-30 blur-[100px] rounded-full bg-secondary mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-3xl p-8 md:p-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">About Me</h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <p className="text-lg text-subtle leading-relaxed font-light">
              Hello! I'm a software engineer with a passion for building clean, visually stunning applications. My journey in tech started with a curiosity about how things work on the web, which grew into a full-fledged career.
            </p>
            <p className="text-lg text-subtle leading-relaxed font-light">
              Today, I specialize in building minimal, accessible, and high-performance web applications. I believe in the power of simplicity and focus on writing code that is as elegant as the user interfaces they power.
            </p>
          </div>
          
          <div className="bg-black/5 dark:bg-white/5 rounded-2xl p-6 md:p-8 border border-border/50">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Technologies I work with:
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {skills.map((skill) => (
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  key={skill}
                  className="px-4 py-2 bg-background/50 backdrop-blur-sm border border-border/50 rounded-full text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
