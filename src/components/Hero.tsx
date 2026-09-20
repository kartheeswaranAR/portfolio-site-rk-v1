import React from 'react';
import { motion } from 'framer-motion';
import { Github, Download, FileText, LayoutGrid } from 'lucide-react';
import { PROFILE_DATA } from '@/data/portfolioData';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen min-h-[100dvh] w-full flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-left px-4">
          
          {/* Live Availability Badge */}
          <motion.div 
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-primary/10 backdrop-blur-md border border-primary/30 text-foreground font-mono text-xs mb-8 shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span>{PROFILE_DATA.availability}</span>
          </motion.div>

          {/* Name & Title */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-3"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {PROFILE_DATA.name}
          </motion.h1>

          <motion.div 
            className="text-lg sm:text-xl font-medium text-muted-foreground font-sans mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {PROFILE_DATA.role}
          </motion.div>
          
          {/* Core Bio */}
          <motion.p 
            className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-8 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {PROFILE_DATA.bio}
          </motion.p>

          {/* Engineering Philosophy Quote Block */}
          <motion.figure 
            className="bg-card/75 backdrop-blur-md border-l-4 border-primary border-y border-r border-border rounded-r-xl p-5 mb-8 shadow-md"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <blockquote className="italic text-sm sm:text-base text-foreground leading-relaxed">
              {PROFILE_DATA.philosophy}
            </blockquote>
            <figcaption className="font-mono text-xs text-muted-foreground mt-2 flex items-center gap-1.5">
              <span className="text-primary">—</span> Engineering Philosophy
            </figcaption>
          </motion.figure>
          
          {/* Quick-Access Text Links */}
          <motion.div 
            className="flex flex-wrap items-center gap-5 font-mono text-xs sm:text-sm mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a 
              href={PROFILE_DATA.resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline flex items-center gap-1.5 font-semibold"
            >
              <FileText className="w-3.5 h-3.5 text-primary" /> Resume (PDF)
            </a>
            <a 
              href={`mailto:${PROFILE_DATA.email}`} 
              className="text-muted-foreground hover:text-primary hover:underline flex items-center gap-1.5 font-semibold transition-colors"
            >
              <span className="text-primary">⚡</span> Email
            </a>
            <a 
              href={PROFILE_DATA.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary hover:underline flex items-center gap-1.5 transition-colors"
            >
              <span className="text-primary">↗</span> GitHub
            </a>
            <a 
              href={PROFILE_DATA.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary hover:underline flex items-center gap-1.5 transition-colors"
            >
              <span className="text-primary">↗</span> LinkedIn
            </a>
            <a 
              href={PROFILE_DATA.x} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary hover:underline flex items-center gap-1.5 transition-colors"
            >
              <span className="text-primary">↗</span> X
            </a>
            <a 
              href={PROFILE_DATA.devto} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary hover:underline flex items-center gap-1.5 transition-colors"
            >
              <span className="text-primary">↗</span> Dev.to
            </a>
            <span className="text-muted-foreground flex items-center gap-1.5">
              <span className="text-primary">📍</span> {PROFILE_DATA.location}
            </span>
          </motion.div>
          
          {/* Action CTAs */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a 
              href={PROFILE_DATA.resumeUrl} 
              download="Kartheeswaran_Resume.pdf"
              className="px-5 py-2.5 rounded-md bg-primary hover:bg-primary/90 text-xs font-mono text-primary-foreground font-semibold transition-all flex items-center gap-2 shadow-md hover:shadow-[0_0_20px_rgba(46,160,67,0.3)] cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a 
              href={PROFILE_DATA.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2.5 rounded-md bg-card/80 backdrop-blur-md border border-border hover:border-primary text-xs font-mono text-foreground hover:text-primary transition-all flex items-center gap-2 shadow-sm"
            >
              <Github className="w-4 h-4 text-primary" />
              View GitHub
            </a>
            <a 
              href="#projects" 
              className="px-5 py-2.5 rounded-md bg-card/80 backdrop-blur-md border border-border hover:border-primary text-xs font-mono text-foreground hover:text-primary transition-all flex items-center gap-2 shadow-sm"
            >
              <LayoutGrid className="w-4 h-4 text-primary" />
              Selected Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
