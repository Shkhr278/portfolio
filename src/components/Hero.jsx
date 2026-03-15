import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  // As the user scrolls down, the hero scales down, fades out, and moves down slightly
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] flex flex-col justify-center items-center text-center px-4 md:px-8 overflow-hidden"
    >
      <motion.div 
        style={{ scale, opacity, y }}
        className="max-w-7xl mx-auto flex flex-col items-center z-10 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-fluid-p uppercase tracking-[0.3em] text-[var(--color-neon-blue)] block mb-6 font-medium">
            Software Engineer & Designer
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-fluid-h1 mb-6 text-glow"
        >
          Building <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] via-[var(--color-neon-purple)] to-[var(--color-neon-pink)]">
            Immersive
          </span> Experiences
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-fluid-p max-w-2xl text-subtle font-light mt-4 mb-12 mix-blend-plus-lighter"
        >
          Focusing on high-performance, fluid, and visually stunning web applications that break away from standard templates and provide exceptional user experiences.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <a 
            href="#projects" 
            className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full font-medium overflow-hidden transition-transform hover:scale-105 active:scale-95 glass-panel text-foreground"
          >
            <span className="relative z-10 font-semibold tracking-wide text-lg">Explore Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-neon-purple)]/40 to-[var(--color-neon-blue)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
