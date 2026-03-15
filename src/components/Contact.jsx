import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-4 md:px-8 py-32 z-10 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass-panel neon-glow p-12 md:p-20 text-center flex flex-col items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-neon-purple)]/10 to-transparent pointer-events-none" />
        
        <h2 className="text-fluid-h2 mb-6 text-white font-bold tracking-tighter relative z-10">
          Let's Build Something <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)]">
            Extraordinary.
          </span>
        </h2>
        
        <p className="text-fluid-p max-w-xl text-subtle mb-10 text-center font-light relative z-10">
          My inbox is always open. Whether you have a question, an opportunity, or just want to engineer something cool together, I'll try my best to get back to you!
        </p>

        <a 
          href="mailto:shikhars.singh27@gmail.com" 
          className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-medium overflow-hidden transition-transform hover:scale-105 active:scale-95 bg-white text-black z-10"
        >
          <span className="relative z-10 font-bold tracking-wide text-lg flex items-center gap-2">
            <Mail size={20} />
            Say Hello
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-neon-blue)]/20 to-[var(--color-neon-pink)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </a>
      </motion.div>
      
      <footer className="mt-20 text-center text-sm text-subtle font-mono">
        <p>© {new Date().getFullYear()} Designed & Engineered with precision.</p>
      </footer>
    </section>
  );
}
