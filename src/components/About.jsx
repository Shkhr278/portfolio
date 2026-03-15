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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
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

      {/* Education Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass-panel p-8 md:p-12 w-full"
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">Education</h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-[var(--color-neon-purple)] to-transparent rounded-full" />
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--color-neon-purple)] before:via-[var(--color-neon-blue)] before:to-transparent">
          {education.map((item, index) => (
             <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
               {/* Icon */}
               <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050505] shadow-[0_0_15px_var(--color-neon-blue)] group-hover:scale-110 transition-transform shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative ${index === 0 ? 'bg-[var(--color-neon-pink)] shadow-[0_0_15px_var(--color-neon-pink)]' : 'bg-[var(--color-neon-blue)]'}`}></div>
               {/* Card */}
               <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-black/40 border border-white/5 p-6 rounded-2xl group-hover:bg-white/5 transition-colors">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-2 gap-2">
                    <h3 className="font-bold text-xl text-white">{item.degree}</h3>
                    <span className="text-sm font-mono text-[var(--color-neon-blue)] bg-white/5 px-2 py-1 rounded-md inline-block w-fit">{item.duration}</span>
                  </div>
                  <p className="text-gray-400 font-light">{item.institution}</p>
               </div>
             </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
