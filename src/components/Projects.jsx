import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A premium, high-performance e-commerce storefront with real-time inventory synchronization and dynamic cart logic.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    github: '#',
    live: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative productivity tool reflecting a simplistic but highly functional aesthetic with real-time updates.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    title: 'Design System',
    description: 'A comprehensive headless component library built for internal tooling, supporting rapid prototyping and robust theming.',
    tech: ['Vue', 'Storybook', 'Figma', 'CSS Modules'],
    github: '#',
    live: '#',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-1/2 left-0 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 opacity-10 dark:opacity-20 blur-[120px] rounded-full bg-primary pointer-events-none" />

      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Selected Work</h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-secondary to-transparent rounded-full" />
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative block rounded-3xl p-8 glass-card hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300 pointer-events-none" />
            
            <div className="flex justify-between items-center mb-6 relative z-10">
              <div className="p-3 bg-primary/10 text-primary rounded-xl">
                <Folder size={24} />
              </div>
              <div className="flex gap-4">
                <a href={project.github} className="text-subtle hover:text-primary transition-colors">
                  <Github size={20} />
                </a>
                <a href={project.live} className="text-subtle hover:text-primary transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="relative z-10 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-subtle text-base mb-8 flex-grow leading-relaxed font-light">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(tech => (
                  <span key={tech} className="text-xs font-semibold text-foreground/80 bg-black/5 dark:bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-md border border-border/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
