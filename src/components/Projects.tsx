import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA } from '@/data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title">Featured Projects &amp; Architecture</h2>
      
      {/* Project Description */}
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Production systems bridging real-time hardware telemetry, protocol-level robotics integration, and high-concurrency enterprise cloud architectures.
        </p>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
