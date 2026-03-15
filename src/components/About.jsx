import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    "HTML5", "CSS", "Tailwind CSS", "React.js", 
    "Node.js", "Express.js", "MongoDB", "MySQL", 
    "Java", "Git", "GitHub"
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "GL Bajaj Institute of Technology and Management",
      duration: "2022 – 2026",
    },
    {
      degree: "12th Grade",
      institution: "Spring Dale College, Lucknow",
      duration: "2022",
    },
    {
      degree: "10th Grade",
      institution: "Spring Dale College, Lucknow",
      duration: "2020",
    }
  ];

  return (
    <section id="about" className="py-24 relative max-w-7xl mx-auto px-4 md:px-8 z-10 w-full">
      <div className="absolute top-1/2 right-0 -z-10 h-[300px] w-[300px] translate-x-1/3 -translate-y-1/2 opacity-20 blur-[100px] rounded-full bg-[var(--color-neon-blue)] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0.2, filter: "blur(8px)", y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-panel p-8 md:p-12 mb-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">About Me</h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-[var(--color-neon-blue)] to-transparent rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
             <div className="flex items-center gap-3 flex-wrap">
               <span className="text-white font-medium text-lg">Shikhar Singh</span>
               <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-neon-pink)] animate-pulse" />
               <span className="text-subtle text-sm">Lucknow, UP • shikhars.singh27@gmail.com</span>
             </div>
            <p className="text-lg text-gray-300 leading-relaxed font-light">
               Passionate and self-driven Developer focused on building dynamic, responsive, and user-friendly web applications. Specialized in React/Express-based Software development with strong emphasis on clean code practices and modern UI design principles.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed font-light">
               Experienced in transforming real-world problems into efficient digital solutions while continuously learning and contributing to impactful web development projects. Core strengths include system design, problem solving, debugging, and team collaboration.
            </p>
          </div>
          
          <div className="bg-black/40 rounded-2xl p-6 md:p-8 border border-white/5">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
              <span className="w-2 h-2 rounded-full bg-[var(--color-neon-blue)] shadow-[0_0_10px_var(--color-neon-blue)]" />
              Core Technologies
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium text-gray-200 hover:border-white/30 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Education Timeline with Blur Scroll */}
      <div className="w-full mt-20 md:mt-32 relative">
        <div className="flex flex-col items-center justify-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">Education</h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[var(--color-neon-purple)] to-transparent" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[var(--color-neon-blue)] to-transparent md:-translate-x-1/2 opacity-30 shadow-[0_0_15px_var(--color-neon-blue)]" />
          
          <div className="space-y-16 md:space-y-24">
            {education.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0.2, filter: "blur(8px)", scale: 0.95 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Node (Dot) */}
                <div className="absolute left-[29px] md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-neon-pink)] shadow-[0_0_15px_var(--color-neon-pink)] transform -translate-x-1/2 z-10 md:translate-x-[-8px]" />
                
                {/* Content Card */}
                <div className={`w-full pl-24 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16 lg:pl-24' : 'md:pr-16 lg:pr-24'}`}>
                  <div className="glass-panel hover:bg-white/[0.04] border border-white/5 hover:border-[var(--color-neon-blue)]/50 rounded-2xl p-8 backdrop-blur-md transition-all duration-500 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-blue)]/0 to-[var(--color-neon-purple)]/0 group-hover:from-[var(--color-neon-blue)]/10 group-hover:to-[var(--color-neon-purple)]/10 transition-colors duration-500 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <span className="text-xs font-mono text-[var(--color-neon-blue)] mb-3 block tracking-widest uppercase">{item.duration}</span>
                      <h3 className="font-bold text-xl md:text-2xl text-white mb-2 leading-tight">{item.degree}</h3>
                      <p className="text-subtle font-light text-base">{item.institution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
