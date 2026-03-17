import React, { memo } from 'react';
import { motion } from 'framer-motion';

const BackgroundAurora = memo(function BackgroundAurora() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
      {/* Static subtle gradient instead of multiple animated orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(176,38,255,0.08),transparent_70%)]"></div>
      
      {/* Single, slower, higher-performance orb for desktop, simplified for mobile */}
      <motion.div
        animate={{
          x: ['-5%', '5%', '-5%'],
          y: ['-5%', '5%', '-5%'],
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: 'linear' 
        }}
        className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-[var(--color-neon-purple)] opacity-[0.08] blur-[120px] mix-blend-screen hidden md:block"
      />
      
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[var(--color-neon-blue)] opacity-[0.06] blur-[100px] mix-blend-screen" />
      
      {/* Noise overlay - reduced complexity */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
});

export default BackgroundAurora;
