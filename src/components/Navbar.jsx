import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 w-full z-50 flex justify-center px-4 pointer-events-none">
      <div 
        className={`flex items-center justify-between transition-all duration-500 pointer-events-auto ${
          isScrolled 
            ? 'glass-panel px-8 py-4 rounded-full w-full max-w-4xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
            : 'px-4 py-4 w-full max-w-7xl bg-transparent'
        }`}
      >
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-xl font-bold tracking-tighter text-white hover:text-[var(--color-neon-blue)] transition-all duration-300 active:scale-95">
          PORTFOLIO<span className="text-[var(--color-neon-pink)] text-glow">.</span>
        </a>
        
        <div className="flex items-center gap-4 md:gap-8">
          <ul className={`hidden md:flex items-center gap-8 ${isScrolled ? 'text-sm' : 'text-base'} font-medium transition-all`}>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-all duration-300 active:scale-95 inline-block">About</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-all duration-300 active:scale-95 inline-block">Works</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-all duration-300 active:scale-95 inline-block">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
