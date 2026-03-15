import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-border py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm font-medium text-subtle">
          © {currentYear} Shikhar Singh. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm font-medium">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors text-subtle">LinkedIn</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors text-subtle">GitHub</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors text-subtle">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
