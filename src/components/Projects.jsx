import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "CareerVision AI",
    description:
      "A full-stack AI-powered career development platform. Features an Agentic AI system using LangChain for personalized recommendations, an ATS resume builder, resume scoring, and real-time AI interview simulations.",
    tech: ["React", "Node.js", "FastAPI", "MongoDB", "LangChain"],
    github: "https://github.com/Harsh-jaiswal1202/ai-career-platform",
    live: "https://careervision.vercel.app",
  },
  {
    title: "FairFare",
    description:
      "A comprehensive expense management web application. Includes real-time balance tracking, group expenses, automated settlements, push notifications, and an AI assistant for natural-language expense queries.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/HarshPathak11/SplitWise",
    live: "https://fair-fare-phi.vercel.app",
  },
  {
    title: "FairFare Admin Panel",
    description:
      "A comprehensive full-stack expense management application with real-time balance tracking, group settlements, push notifications, and a natural-language AI assistant.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/FairFare007/FairFare-Admin",
    live: "https://fairfare-admin.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-1/2 left-0 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 opacity-10 dark:opacity-20 blur-[120px] rounded-full bg-primary pointer-events-none" />

      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Major Projects
        </h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-secondary to-transparent rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.2, filter: "blur(10px)", y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="group relative block rounded-3xl p-8 glass-card hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300 pointer-events-none" />

            <div className="flex justify-between items-center mb-6 relative z-10">
              <div className="p-3 bg-primary/10 text-primary rounded-xl">
                <Folder size={24} />
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 text-subtle hover:text-primary transition-colors p-2 -m-2"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 text-subtle hover:text-primary transition-colors p-2 -m-2"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="relative z-10 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="after:absolute after:inset-0 after:z-10 cursor-pointer"
                >
                  {project.title}
                </a>
              </h3>
              <p className="text-subtle text-base mb-8 flex-grow leading-relaxed font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-semibold text-foreground/80 bg-black/5 dark:bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-md border border-border/50"
                  >
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
