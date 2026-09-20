import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
  User,
  Code2,
  BookOpen,
  Brain,
  Mail,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          ? 'bg-[#0d1117]/80 backdrop-blur-md border-b border-[#30363d]/60 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center h-full">
          {/* Logo with Telemetry Signal Green accent */}
          <a href="#" className="relative group flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#161b22]/90 backdrop-blur-md border border-[#30363d] group-hover:border-[#2ea043] flex items-center justify-center font-mono font-bold text-sm text-[#e6edf3] shadow-md transition-all duration-300">
              <span className="text-[#2ea043]">K</span>R
            </div>
            <span className="font-mono text-sm font-semibold text-[#e6edf3] hidden sm:inline-block tracking-tight">
              kartheeswaran<span className="text-[#2ea043]">.dev</span>
            </span>
          </a>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center flex-1 justify-center">
            {/* Main Navigation */}
            <div className="flex px-6 py-2 bg-[#161b22]/80 backdrop-blur-md rounded-full border border-[#30363d] shadow-xl">
              <div className="flex space-x-6 items-center justify-center font-mono text-xs">
                {navItems.map((item) => (
                  <IslandNavLink key={item.href} href={item.href}>
                    <item.icon className="w-3.5 h-3.5 mr-1.5 text-[#2ea043]" />
                    {item.label}
                  </IslandNavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Contact button - Right side */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <a href="#contact" className="px-4 py-2 rounded-full bg-[#161b22]/80 backdrop-blur-md border border-[#30363d] hover:border-[#2ea043] text-xs font-mono text-[#e6edf3] hover:text-[#2ea043] transition-all flex items-center">
              <Mail className="w-3.5 h-3.5 mr-1.5 text-[#2ea043]" />
              Contact
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#e6edf3] hover:bg-[#161b22]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#2ea043]" /> : <Menu className="w-6 h-6 text-[#e6edf3]" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden p-4 bg-[#0d1117]/95 border-t border-[#30363d] backdrop-blur-md"
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
                <item.icon className="w-4 h-4 mr-2 text-[#2ea043]" />
                {item.label}
              </MobileNavLink>
            ))}
            <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Mail className="w-4 h-4 mr-2 text-[#2ea043]" />
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
      className="relative px-3 py-1.5 text-[#8b949e] hover:text-[#e6edf3] font-mono text-xs transition-all duration-300 group flex items-center"
    >
      <span className="relative z-10 flex items-center">{children}</span>
      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#2ea043] group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
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
    className="text-[#8b949e] hover:text-[#e6edf3] font-mono text-xs py-2 px-4 block hover:bg-[#161b22] rounded-md transition-colors flex items-center"
  >
    {children}
  </a>
);

export default Navbar;
