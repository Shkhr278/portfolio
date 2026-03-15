import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Linkedin,
  ArrowUpRight,
  Code2,
} from "lucide-react";

import { bentoProjects } from "../constants/data";

export default function BentoGrid() {
  return (
    <section
      id="projects"
      className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-24 z-10 relative"
    >
      <motion.div
        initial={{ opacity: 0.2, filter: "blur(8px)", y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
        viewport={{ once: false, margin: "-15%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-fluid-h2 mb-12 text-glow text-center md:text-left">
          Selected{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-pink)] to-[var(--color-neon-purple)]">
            Works
          </span>
        </h2>

        {/* Mobile View: Standard Stack */}
        <div className="flex flex-col md:hidden gap-4 w-full">
          {bentoProjects.map((project, index) => (
            <motion.div
              key={`mob-${project.id}`}
              initial={{ opacity: 0.2, filter: "blur(8px)", scale: 0.95 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="glass-panel neon-glow p-6 flex flex-col relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 z-0`}
              ></div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-base mt-2 mb-6 font-light text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 bg-black/40 text-subtle"
                    >
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
            Grid Container
          */}
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-6">
            {bentoProjects.map((project) => (
              <div
                key={`desktop-${project.id}`}
                className={`${project.colSpan} glass-panel p-8 flex flex-col items-center justify-center text-center group overflow-hidden relative`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} ${project.bgOpacityClass || "opacity-[0.15] group-hover:opacity-[0.25]"} transition-opacity duration-500 z-0`}
                ></div>
                <div className="relative z-10 flex flex-col h-full w-full items-center justify-center pointer-events-none group-hover:pointer-events-auto">
                  <div
                    className={"flex flex-col md:flex-row items-center justify-center gap-3 mb-4"}
                  >
                    {project.icon === "Code2" && (
                      <Code2
                        className="text-[var(--color-neon-blue)]"
                        size={28}
                      />
                    )}
                    <h3
                      className={
                        "text-3xl font-bold tracking-tight text-white mb-0"
                      }
                    >
                      {project.title}
                    </h3>
                    {project.hasExternalLink && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 bg-white/5 rounded-full hover:bg-white/20 ${project.linkColor || "hover:text-[var(--color-neon-blue)]"} transition-all pointer-events-auto shadow-xl backdrop-blur-md hidden md:flex`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>

                  <p
                    className={
                      "text-lg font-light text-gray-300 max-w-lg mx-auto mb-6 leading-relaxed"
                    }
                  >
                    {project.description}
                  </p>

                  <div
                    className={`flex flex-wrap items-center justify-center gap-2`}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={
                          "text-xs font-mono px-3 py-1.5 rounded-full border border-white/10 bg-black/40 text-subtle"
                        }
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Top Left: LinkedIn CTA */}
            <a
              href="https://linkedin.com/in/shikhars-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-1 md:col-start-1 md:row-start-1 glass-panel p-8 flex flex-col justify-center items-center group overflow-hidden relative text-center hover:border-[var(--color-neon-blue)] transition-colors cursor-pointer text-white block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] opacity-5 group-hover:opacity-20 transition-opacity duration-500 z-0"></div>
              <Linkedin
                size={48}
                className="mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500 text-[var(--color-neon-blue)] group-hover:text-white"
              />
              <h3 className="text-xl font-bold relative z-10 flex items-center justify-center gap-2">
                LinkedIn <ArrowUpRight size={18} />
              </h3>
            </a>

            {/* Top Right: Github / Resume CTA */}
            <a
              href="https://github.com/Shkhr278"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-1 md:col-start-4 md:row-start-1 glass-panel p-8 flex flex-col justify-center items-center group overflow-hidden relative text-center hover:border-[var(--color-neon-pink)] transition-colors cursor-pointer text-white block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-purple)] to-[var(--color-neon-pink)] opacity-5 group-hover:opacity-20 transition-opacity duration-500 z-0"></div>
              <Github
                size={48}
                className="mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500 text-[var(--color-neon-purple)] group-hover:text-white"
              />
              <h3 className="text-xl font-bold relative z-10 flex items-center justify-center gap-2">
                GitHub <ArrowUpRight size={18} />
              </h3>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
