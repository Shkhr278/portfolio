import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[var(--color-neon-purple)] selection:text-white">
      <Navbar />
      {/* Removed max-w constraints so children can handle their own fluid layout */}
      <main className="flex-1 w-full pt-20 pb-10 relative z-10 flex flex-col items-center">
        {children}
      </main>
    </div>
  );
}
