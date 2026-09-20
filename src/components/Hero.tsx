import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import AnimatedText from './AnimatedText';
import { CloudDownload } from './CloudDownload';
import { LayoutGrid } from './LayoutGrid';
import { FileChartColumn } from './FileChartColumn';
import { Github, Linkedin, X } from 'lucide-react';

const Hero = () => {
  const handleResumeView = () => {
    window.open('/KalpResume.pdf', '_blank');
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/KalpResume.pdf';
    link.download = 'Kartheeswaran_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 pb-16">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-left px-4">
          
          {/* Live Availability Badge */}
          <motion.div 
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#2ea043]/10 backdrop-blur-md border border-[#2ea043]/30 text-[#e6edf3] font-mono text-xs mb-8 shadow-md"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ea043] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2ea043]"></span>
            </span>
            <span>Open to backend & systems engineering roles</span>
          </motion.div>

          {/* Name & Title */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#e6edf3] mb-3"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Kartheeswaran Rajasekaran
          </motion.h1>

          <motion.div 
            className="text-lg sm:text-xl font-medium text-[#8b949e] font-sans mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Backend Developer & Aerospace Systems Engineer
          </motion.div>
          
          {/* Core Bio */}
          <motion.p 
            className="text-base sm:text-lg text-[#e6edf3] leading-relaxed mb-8 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Software Engineer specializing in high-concurrency enterprise backend systems (ASP.NET Core, Django REST Framework, Express.js) integrated with real-time autonomous hardware protocols (MAVLink, WebSockets, Pixhawk). Focused on sub-100ms telemetry streaming, state estimation, and scalable distributed cloud architectures.
          </motion.p>

          {/* Human Touch Quote Block */}
          <motion.figure 
            className="bg-[#161b22]/75 backdrop-blur-md border-l-4 border-[#2ea043] border-y border-r border-[#30363d] rounded-r-xl p-5 mb-8 shadow-xl"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <blockquote className="italic text-sm sm:text-base text-[#e6edf3] leading-relaxed">
              "Good systems engineering is about predictability under pressure. Whether processing 100,000+ daily enterprise transactions or streaming real-time MAVLink telemetry in flight, quiet and resilient software always wins."
            </blockquote>
            <figcaption className="font-mono text-xs text-[#8b949e] mt-2">
              — Personal Engineering Philosophy
            </figcaption>
          </motion.figure>
          
          {/* Quick-Access Text Links */}
          <motion.div 
            className="flex flex-wrap items-center gap-5 font-mono text-xs sm:text-sm mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a href="mailto:kartheeswaran.dev@outlook.com" className="text-[#2ea043] hover:underline flex items-center gap-1.5 font-semibold">
              <span className="text-[#2ea043]">⚡</span> Email
            </a>
            <a href="https://github.com/kartheeswaranAR" target="_blank" rel="noopener noreferrer" className="text-[#e6edf3] hover:text-[#2ea043] hover:underline flex items-center gap-1.5">
              <span className="text-[#2ea043]">↗</span> GitHub
            </a>
            <a href="https://www.linkedin.com/in/kartheeswaranr/" target="_blank" rel="noopener noreferrer" className="text-[#e6edf3] hover:text-[#2ea043] hover:underline flex items-center gap-1.5">
              <span className="text-[#2ea043]">↗</span> LinkedIn
            </a>
            <a href="https://x.com/Karthees_offcl" target="_blank" rel="noopener noreferrer" className="text-[#e6edf3] hover:text-[#2ea043] hover:underline flex items-center gap-1.5">
              <span className="text-[#2ea043]">↗</span> X
            </a>
            <a href="https://dev.to/kartheeswaran1921" target="_blank" rel="noopener noreferrer" className="text-[#e6edf3] hover:text-[#2ea043] hover:underline flex items-center gap-1.5">
              <span className="text-[#2ea043]">↗</span> Dev.to
            </a>
            <a href="https://medium.com/@kartheeswaranoff" target="_blank" rel="noopener noreferrer" className="text-[#e6edf3] hover:text-[#2ea043] hover:underline flex items-center gap-1.5">
              <span className="text-[#2ea043]">↗</span> Medium
            </a>
            <a href="https://www.instagram.com/yurs_ark/" target="_blank" rel="noopener noreferrer" className="text-[#e6edf3] hover:text-[#2ea043] hover:underline flex items-center gap-1.5">
              <span className="text-[#2ea043]">↗</span> Instagram
            </a>
            <span className="text-[#8b949e] flex items-center gap-1.5">
              <span className="text-[#2ea043]">📞</span> +91 9025826572
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
              href="https://github.com/kartheeswaranAR" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2.5 rounded-md bg-[#161b22]/80 backdrop-blur-md border border-[#30363d] hover:border-[#2ea043] text-xs font-mono text-[#e6edf3] hover:text-[#2ea043] transition-all flex items-center gap-2 shadow-md"
            >
              <Github className="w-4 h-4 text-[#2ea043]" />
              View GitHub
            </a>
            <a 
              href="#projects" 
              className="px-5 py-2.5 rounded-md bg-[#161b22]/80 backdrop-blur-md border border-[#30363d] hover:border-[#2ea043] text-xs font-mono text-[#e6edf3] hover:text-[#2ea043] transition-all flex items-center gap-2 shadow-md"
            >
              <LayoutGrid className="w-4 h-4 text-[#2ea043]" />
              Selected Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
