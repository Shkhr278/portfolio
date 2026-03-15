import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundAurora() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(176,38,255,0.05),transparent_60%)]"></div>
      
      {/* Aurora Orbs */}
      <motion.div
        animate={{
          x: ['0%', '15%', '-15%', '0%'],
          y: ['0%', '15%', '-5%', '0%'],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[var(--color-neon-purple)] opacity-[0.12] blur-[150px] mix-blend-screen"
      />
      
      <motion.div
        animate={{
          x: ['0%', '-25%', '15%', '0%'],
          y: ['0%', '10%', '-25%', '0%'],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[var(--color-neon-blue)] opacity-[0.1] blur-[150px] mix-blend-screen"
      />
      
      <motion.div
        animate={{
          x: ['0%', '10%', '-15%', '0%'],
          y: ['0%', '-15%', '15%', '0%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[40%] left-[30%] w-[45vw] h-[45vw] rounded-full bg-[var(--color-neon-pink)] opacity-[0.08] blur-[120px] mix-blend-screen"
      />
      
      {/* Noise overlay for texture ensuring a premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
