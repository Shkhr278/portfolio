import React, { memo } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Linkedin,
  ArrowUpRight,
  Code2,
} from "lucide-react";

import { bentoProjects } from "../constants/data";

const ProjectCard = memo(({ project, index }) => (
  <motion.div
    key={project.id}
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    className={`${project.colSpan} glass-panel p-6 md:p-8 flex flex-col items-center justify-center text-center group overflow-hidden relative order-1 md:order-none`}
  >
    <div
      className={`absolute inset-0 bg-gradient-to-br ${project.color} ${project.bgOpacityClass || "opacity-[0.12] group-hover:opacity-[0.25]"} transition-opacity duration-500 z-0`}
    ></div>
    <div className="relative z-10 flex flex-col h-full w-full items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-4">
        {project.icon === "Code2" && (
          <Code2 className="text-[var(--color-neon-blue)]" size={28} />
        )}
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-0">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0 after:z-10 cursor-pointer group-hover:text-[var(--color-neon-blue)] transition-colors"
          >
            {project.title}
          </a>
        </h3>
        {project.hasExternalLink && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative z-20 p-2 bg-white/5 rounded-full hover:bg-white/20 ${project.linkColor || "hover:text-[var(--color-neon-blue)]"} transition-all hidden md:flex`}
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>

      <p className="text-base md:text-lg font-light text-gray-300 max-w-lg mx-auto mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-3 py-1.5 rounded-full border border-white/10 bg-black/40 text-subtle"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
));

export default function BentoGrid() {
  return (
    <section
      id="projects"
      className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-24 z-10 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-fluid-h2 mb-12 text-glow text-center md:text-left">
          Major{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-pink)] to-[var(--color-neon-purple)]">
            Projects
          </span>
        </h2>

        {/* Unified Responsive Grid (Mobile First) */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 relative w-full md:aspect-[16/9] md:max-h-[800px]">
          {/* LinkedIn CTA */}
          <a
            href="https://linkedin.com/in/shikhars-singh"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-start-1 md:row-start-1 glass-panel p-6 md:p-8 flex flex-col justify-center items-center group overflow-hidden relative text-center hover:border-[var(--color-neon-blue)] transition-colors cursor-pointer text-white order-2 md:order-none"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] opacity-5 group-hover:opacity-20 transition-opacity duration-500 z-0"></div>
            <Linkedin
              size={48}
              className="mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500 text-[var(--color-neon-blue)] group-hover:text-white"
            />
            <h3 className="text-xl font-extrabold relative z-10 flex items-center justify-center gap-2">
              LinkedIn <ArrowUpRight size={18} />
            </h3>
          </a>

          {/* GitHub CTA */}
          <a
            href="https://github.com/Shkhr278"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-start-4 md:row-start-1 glass-panel p-6 md:p-8 flex flex-col justify-center items-center group overflow-hidden relative text-center hover:border-[var(--color-neon-pink)] transition-colors cursor-pointer text-white order-3 md:order-none"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-purple)] to-[var(--color-neon-pink)] opacity-5 group-hover:opacity-20 transition-opacity duration-500 z-0"></div>
            <Github
              size={48}
              className="mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500 text-[var(--color-neon-purple)] group-hover:text-white"
            />
            <h3 className="text-xl font-extrabold relative z-10 flex items-center justify-center gap-2">
              GitHub <ArrowUpRight size={18} />
            </h3>
          </a>

          {/* Dynamic Project Cards */}
          {bentoProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
