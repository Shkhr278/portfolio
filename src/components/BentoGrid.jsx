import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Code2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'CareerVision AI',
    description: 'Agentic AI-powered career platform providing personalized recommendations and an ATS builder.',
    tags: ['React', 'Node.js', 'FastAPI'],
    colSpan: 'md:col-span-2 md:row-span-1',
    color: 'from-[var(--color-neon-purple)] to-[var(--color-neon-blue)]'
  },
  {
    id: 2,
    title: 'FairFare',
    description: 'Full-stack expense splitting platform with real-time balance tracking and automated settlement.',
    tags: ['MERN', 'Firebase'],
    colSpan: 'md:col-span-2 md:row-span-1',
    color: 'from-[var(--color-neon-pink)] to-[var(--color-neon-purple)]'
  },
  {
    id: 3,
    title: 'System Design',
    description: 'Building secure authentication, database architectures, and robust RESTful APIs.',
    tags: ['MongoDB', 'Express'],
    colSpan: 'md:col-span-2 md:row-span-1',
    color: 'from-[var(--color-neon-blue)] to-[var(--color-neon-pink)]'
  },
  {
    id: 4,
    title: 'Frontend API',
    description: 'Dynamic user interfaces.',
    tags: ['React', 'Tailwind'],
    colSpan: 'md:col-span-1 md:row-span-1',
    color: 'from-zinc-700 to-zinc-900'
  }
];

export default function BentoGrid() {
  return (
    <section id="projects" className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-24 z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-fluid-h2 mb-12 text-glow text-center md:text-left">
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-pink)] to-[var(--color-neon-purple)]">Works</span>
        </h2>
        
        {/* Mobile View: Standard Stack */}
        <div className="flex flex-col md:hidden gap-4 w-full">
          {projects.map((project, index) => (
             <motion.div
               key={`mob-${project.id}`}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="glass-panel neon-glow p-6 flex flex-col relative overflow-hidden"
             >
               <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 z-0`}></div>
               <div className="relative z-10 flex flex-col h-full">
                 <h3 className="text-2xl font-bold tracking-tight text-white mb-2">{project.title}</h3>
                 <p className="text-base mt-2 mb-6 font-light text-gray-300">{project.description}</p>
                 <div className="flex flex-wrap gap-2 mt-auto">
                   {project.tags.map(tag => (
                     <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 bg-black/40 text-subtle">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
             </motion.div>
          ))}
        </div>

        {/* Desktop View: Complex Squircle Masked Grid */}
        <div className="hidden md:block relative w-full aspect-[16/9] max-h-[800px]">
          
          {/* 
            Masked Grid Container:
            Radial mask cuts a perfectly centered hole (148px radius) to fit the 250px circle with a 24px gap.
          */}
          <div 
            className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-6"
            style={{
              maskImage: 'radial-gradient(circle at center, transparent 0px, transparent 152px, black 153px)',
              WebkitMaskImage: 'radial-gradient(circle at center, transparent 0px, transparent 152px, black 153px)'
            }}
          >
            {/* Top Left: Project 4 (Storefront) */}
            <div className="col-span-1 row-span-1 glass-panel p-8 flex flex-col justify-between group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black opacity-40 group-hover:opacity-60 transition-opacity duration-500 z-0"></div>
              <div className="relative z-10 flex flex-col h-full pointer-events-none group-hover:pointer-events-auto">
                <Code2 className="text-[var(--color-neon-blue)] mb-4" size={28} />
                <h3 className="text-2xl font-bold tracking-tight text-white mb-2">{projects[3].title}</h3>
                <p className="text-sm font-light text-gray-300 mt-auto">{projects[3].description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs font-mono px-2 py-1 rounded-full border border-white/10 bg-black/40 text-subtle">React</span>
                </div>
              </div>
            </div>

            {/* Top Center: Project 1 (DeFi Dashboard) */}
            <div className="col-span-2 row-span-1 glass-panel p-8 flex flex-col justify-between group overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${projects[0].color} opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-500 z-0`}></div>
              <div className="relative z-10 flex flex-col h-full pointer-events-none group-hover:pointer-events-auto">
                <div className="flex justify-between items-start">
                  <h3 className="text-3xl font-bold tracking-tight text-white">{projects[0].title}</h3>
                  <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 hover:text-[var(--color-neon-blue)] transition-all pointer-events-auto shadow-xl backdrop-blur-md">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-lg font-light text-gray-300 max-w-md mt-4">{projects[0].description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {projects[0].tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded-full border border-white/10 bg-black/40 text-subtle">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Right: Github / Resume CTA */}
            <div className="col-span-1 row-span-1 glass-panel p-8 flex flex-col justify-center items-center group overflow-hidden relative text-center hover:border-[var(--color-neon-pink)] transition-colors cursor-pointer text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-purple)] to-[var(--color-neon-pink)] opacity-5 group-hover:opacity-20 transition-opacity duration-500 z-0"></div>
              <Github size={48} className="mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500 text-[var(--color-neon-purple)] group-hover:text-white" />
              <h3 className="text-xl font-bold relative z-10 flex items-center gap-2">View GitHub <ArrowUpRight size={18} /></h3>
            </div>

            {/* Bottom Left: Project 2 (AI Vault) */}
            <div className="col-span-2 row-span-1 glass-panel p-8 flex flex-col justify-between group overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${projects[1].color} opacity-[0.12] group-hover:opacity-[0.25] transition-opacity duration-500 z-0`}></div>
              <div className="relative z-10 flex flex-col h-full pointer-events-none group-hover:pointer-events-auto">
                <div className="flex justify-between items-start">
                  <h3 className="text-3xl font-bold tracking-tight text-white">{projects[1].title}</h3>
                  <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 hover:text-[var(--color-neon-pink)] transition-all pointer-events-auto shadow-xl backdrop-blur-md">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-lg font-light text-gray-300 max-w-md mt-auto mb-6">{projects[1].description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {projects[1].tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded-full border border-white/10 bg-black/40 text-subtle">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Right: Project 3 (Real-time Comms) */}
            <div className="col-span-2 row-span-1 glass-panel p-8 flex flex-col justify-between group overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${projects[2].color} opacity-[0.12] group-hover:opacity-[0.25] transition-opacity duration-500 z-0`}></div>
              <div className="relative z-10 flex flex-col h-full pointer-events-none group-hover:pointer-events-auto">
                <div className="flex justify-between items-start">
                  <h3 className="text-3xl font-bold tracking-tight text-white text-right w-full">{projects[2].title}</h3>
                </div>
                <p className="text-lg font-light text-gray-300 max-w-md mt-auto mb-6 ml-auto text-right">{projects[2].description}</p>
                <div className="flex flex-wrap gap-2 mt-auto justify-end">
                  {projects[2].tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded-full border border-white/10 bg-black/40 text-subtle">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            
          </div>

          {/* 
            Center Circle:
            Absolute positioned perfectly in the middle. 
            Width 260px (Radius 130px). Gap is 22px (152 - 130).
          */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full glass-panel neon-glow flex flex-col items-center justify-center p-6 text-center z-20 border-[2px] border-white/10 hover:border-white/30 transition-colors"
          >
            <div className="absolute inset-0 bg-black/40 rounded-full z-0 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white tracking-tight uppercase">
                Works
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] mx-auto mt-4 rounded-full"></div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
