import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
  User,
  Code2,
  Brain,
  Mail,
  Menu,
  X,
  Download,
  Sun,
  Moon,
} from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#hero", label: "Home", icon: User },
    { href: "#technologies", label: "Skills", icon: Brain },
    { href: "#about", label: "About Me", icon: User },
    { href: "#projects", label: "Projects", icon: Code2 },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/85 backdrop-blur-md border-b border-border/80 shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center h-full justify-between">
          {/* Logo with Green accent */}
          <a href="#" className="relative group flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-card/90 backdrop-blur-md border border-border group-hover:border-primary flex items-center justify-center font-mono font-bold text-sm text-foreground shadow-sm transition-all duration-300">
              <span className="text-primary">K</span>R
            </div>
            <span className="font-mono text-sm font-semibold text-foreground hidden sm:inline-block tracking-tight">
              kartheeswaran<span className="text-primary">.dev</span>
            </span>
          </a>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center flex-1 justify-center">
            <div className="flex px-6 py-2 bg-card/80 backdrop-blur-md rounded-full border border-border shadow-sm">
              <div className="flex space-x-6 items-center justify-center font-mono text-xs">
                {navItems.map((item) => (
                  <IslandNavLink key={item.href} href={item.href}>
                    <item.icon className="w-3.5 h-3.5 mr-1.5 text-primary" />
                    {item.label}
                  </IslandNavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Right side CTAs: Theme Toggle, Resume & Contact */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-full bg-card/80 backdrop-blur-md border border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300 shadow-sm"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            <a 
              href="/Kartheeswaran_Resume.pdf" 
              download="Kartheeswaran_Resume.pdf"
              className="px-3.5 py-2 rounded-full bg-card/80 backdrop-blur-md border border-border hover:border-primary text-xs font-mono text-foreground hover:text-primary transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-primary" />
              Resume
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-border hover:border-primary text-xs font-mono text-foreground hover:text-primary transition-all flex items-center shadow-sm"
            >
              <Mail className="w-3.5 h-3.5 mr-1.5 text-primary" />
              Contact
            </a>
          </div>
          
          {/* Mobile menu button and theme toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-card border border-border text-foreground"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:bg-muted"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-foreground" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden p-4 bg-card/95 border-t border-border backdrop-blur-md shadow-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <MobileNavLink 
                key={item.href} 
                href={item.href} 
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="w-4 h-4 mr-2 text-primary" />
                {item.label}
              </MobileNavLink>
            ))}
            <a 
              href="/Kartheeswaran_Resume.pdf" 
              download="Kartheeswaran_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center px-3 py-2 text-muted-foreground hover:text-foreground font-mono text-xs hover:bg-muted rounded-md transition-all"
            >
              <Download className="w-4 h-4 mr-2 text-primary" />
              Download Resume (PDF)
            </a>
            <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Mail className="w-4 h-4 mr-2 text-primary" />
              Contact
            </MobileNavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const IslandNavLink = ({ 
  href, 
  children 
}: { 
  href: string; 
  children: React.ReactNode;
}) => {
  return (
    <a 
      href={href} 
      className="relative px-3 py-1.5 text-muted-foreground hover:text-foreground font-mono text-xs transition-all duration-300 group flex items-center"
    >
      <span className="relative z-10 flex items-center">{children}</span>
      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
    </a>
  );
};

const MobileNavLink = ({ 
  href, 
  children,
  onClick
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-muted-foreground hover:text-foreground font-mono text-xs py-2 px-3 block hover:bg-muted rounded-md transition-colors flex items-center"
  >
    {children}
  </a>
);

export default Navbar;
