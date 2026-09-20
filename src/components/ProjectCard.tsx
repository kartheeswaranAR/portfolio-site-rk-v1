import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Project } from '@/data/portfolioData';

export type { Project };

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // small icon map for common tech tags (grayscale/minimized)
  const techIconMap: Record<string, string> = {
    React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    Stripe: 'https://seeklogo.com/images/S/stripe-logo-4C3A1E4C67-seeklogo.com.png'
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          stiffness: 70,
          duration: 0.6,
          delay: index * 0.1
        }
      }}
      viewport={{ once: true, amount: 0.1 }}
      className="h-full group"
    >
      <Card className="overflow-hidden transition-all duration-300 h-full flex flex-col bg-[#161b22]/75 backdrop-blur-md border-[#30363d] hover:border-[#2ea043]/50 rounded-xl relative shadow-xl hover:shadow-[0_0_25px_rgba(46,160,67,0.12)]">
        <div className="overflow-hidden h-44 relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-[#161b22]/40 to-transparent opacity-90"></div>
          {project.year && (
            <div className="absolute top-3 right-3 font-mono text-xs px-2.5 py-1 rounded-md bg-[#0d1117]/90 backdrop-blur-md text-[#8b949e] border border-[#30363d]">
              {project.year}
            </div>
          )}
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold text-[#e6edf3] leading-snug">
            {project.title}
          </CardTitle>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-[#0d1117]/80 backdrop-blur-sm text-[#8b949e] border border-[#30363d]">
                {tag}
              </span>
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow pt-2">
          <CardDescription 
            className="text-sm text-[#e6edf3] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />

          {/* Case study: Problem / Solution / Result */}
          {project.caseStudy && (
            <div className="mt-4 text-xs text-[#8b949e] space-y-2.5 bg-[#0d1117]/80 backdrop-blur-sm p-3.5 rounded-lg border border-[#30363d]">
              {project.caseStudy.problem && (
                <div>
                  <span className="font-mono text-[#2ea043] font-semibold">Problem: </span>
                  <span className="text-[#e6edf3]">{project.caseStudy.problem}</span>
                </div>
              )}
              {project.caseStudy.solution && (
                <div>
                  <span className="font-mono text-[#2ea043] font-semibold">Solution: </span>
                  <span className="text-[#e6edf3]">{project.caseStudy.solution}</span>
                </div>
              )}
              {project.caseStudy.result && (
                <div>
                  <span className="font-mono text-[#2ea043] font-semibold">Result: </span>
                  <span className="text-[#e6edf3]">{project.caseStudy.result}</span>
                </div>
              )}
            </div>
          )}
        </CardContent>
        
        <CardFooter className="pt-2 pb-4 px-6">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#2ea043] hover:underline flex items-center gap-1 font-semibold"
            >
              <span className="text-[#2ea043]">↗</span> View Architecture / GitHub
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
