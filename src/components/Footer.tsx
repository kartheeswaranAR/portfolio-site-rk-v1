import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

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
  
  return (
    <footer className="w-full border-t border-border py-8 mt-16 bg-card/85 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-muted-foreground gap-4">
        <div>© {currentYear} Kartheeswaran Rajasekaran. All rights reserved.</div>
        <div className="text-primary font-medium">Built with React, TypeScript &amp; TailwindCSS</div>
      </div>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-2.5 rounded-md bg-card/90 backdrop-blur-md border border-border text-foreground hover:border-primary hover:text-primary transition-all shadow-lg cursor-pointer z-40"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 text-primary" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
