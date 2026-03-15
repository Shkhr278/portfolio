import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-4 z-10 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side: Typography & Info */}
        <motion.div
          initial={{ opacity: 0.2, filter: "blur(8px)", x: -40, scale: 0.95 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, scale: 1 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-fluid-h2 text-white font-bold tracking-tighter">
            Let's Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)]">
              Extraordinary.
            </span>
          </h2>

          <p className="text-fluid-p text-subtle font-light max-w-lg mt-2">
            My inbox is always open. Whether you have a question, an
            opportunity, or just want to engineer something cool together, I'll
            try my best to get back to you!
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href="mailto:shikhars.singh27@gmail.com"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold overflow-hidden transition-transform hover:scale-105 active:scale-95 bg-white text-black"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail size={18} />
                Say Hello
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-neon-blue)]/20 to-[var(--color-neon-purple)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </a>

            <a
              href="https://github.com/Shkhr278"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:text-[var(--color-neon-purple)] transition-all hover:scale-105 active:scale-95"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>

            <a
              href="https://linkedin.com/in/shikhars-singh"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:text-[var(--color-neon-blue)] transition-all hover:scale-105 active:scale-95"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0.2, filter: "blur(8px)", x: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, scale: 1 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="glass-panel neon-glow p-8 md:p-10 rounded-2xl flex flex-col gap-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-blue)]/5 to-[var(--color-neon-purple)]/5 pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-xs text-subtle font-medium uppercase tracking-wider ml-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-neon-blue)] focus:ring-1 focus:ring-[var(--color-neon-blue)] transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="relative z-10 flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-xs text-subtle font-medium uppercase tracking-wider ml-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-neon-purple)] focus:ring-1 focus:ring-[var(--color-neon-purple)] transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="relative z-10 flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-xs text-subtle font-medium uppercase tracking-wider ml-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-neon-pink)] focus:ring-1 focus:ring-[var(--color-neon-pink)] transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              href="mailto:shikhars.singh27@gmail.com"
              type="submit"
              className="relative z-10 group flex items-center justify-center gap-3 bg-white text-black font-bold py-4 px-8 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] mt-2 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Send Message
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-neon-blue)]/20 to-[var(--color-neon-purple)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </button>
          </form>
        </motion.div>
      </div>

      <motion.footer 
        initial={{ opacity: 0.2, filter: "blur(8px)", scale: 0.95 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        viewport={{ once: false, margin: "-5%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-12 text-center text-sm text-subtle font-mono border-t border-white/5 pt-8"
      >
        <p>
          © {new Date().getFullYear()} Designed & Engineered with precision.
        </p>
      </motion.footer>
    </section>
  );
}
