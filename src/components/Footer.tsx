import React, { useState, useEffect } from 'react';
import { Code2, Heart, ArrowUp, Atom, FileCode, Palette, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const techStack = [
    { icon: Atom, label: "React" },
    { icon: FileCode, label: "TypeScript" },
    { icon: Palette, label: "Tailwind" },
    { icon: Zap, label: "Vite" },
  ];
  
  return (
    <footer className="w-full border-t border-[#30363d] py-8 mt-16 bg-[#0d1117]/90 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-[#8b949e] gap-4">
        <div>© {currentYear} Kartheeswaran Rajasekaran. All rights reserved.</div>
        <div className="text-[#2ea043]">Engineered with HTML &amp; CSS</div>
      </div>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-2.5 rounded-md bg-[#161b22]/90 backdrop-blur-md border border-[#30363d] text-[#e6edf3] hover:border-[#2ea043] transition-all shadow-xl"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 text-[#2ea043]" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
