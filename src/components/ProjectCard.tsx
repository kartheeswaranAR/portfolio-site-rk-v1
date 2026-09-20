import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from '@/data/portfolioData';

export type { Project };

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
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
      <Card className="overflow-hidden transition-all duration-300 h-full flex flex-col bg-card/85 backdrop-blur-md border-border hover:border-primary/50 rounded-xl relative shadow-md hover:shadow-xl">
        <div className="overflow-hidden h-44 relative bg-muted">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-90"></div>
          {project.year && (
            <div className="absolute top-3 right-3 font-mono text-xs px-2.5 py-1 rounded-md bg-background/90 backdrop-blur-md text-muted-foreground border border-border shadow-sm">
              {project.year}
            </div>
          )}
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-background/80 backdrop-blur-sm text-muted-foreground border border-border">
                {tag}
              </span>
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow pt-2">
          <CardDescription 
            className="text-sm text-foreground/80 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />

          {/* Case study: Problem / Solution / Result */}
          {project.caseStudy && (
            <div className="mt-4 text-xs text-muted-foreground space-y-2.5 bg-background/80 backdrop-blur-sm p-3.5 rounded-lg border border-border">
              {project.caseStudy.problem && (
                <div>
                  <span className="font-mono text-primary font-semibold">Problem: </span>
                  <span className="text-foreground/90">{project.caseStudy.problem}</span>
                </div>
              )}
              {project.caseStudy.solution && (
                <div>
                  <span className="font-mono text-primary font-semibold">Solution: </span>
                  <span className="text-foreground/90">{project.caseStudy.solution}</span>
                </div>
              )}
              {project.caseStudy.result && (
                <div>
                  <span className="font-mono text-primary font-semibold">Result: </span>
                  <span className="text-foreground/90">{project.caseStudy.result}</span>
                </div>
              )}
            </div>
          )}
        </CardContent>
        
        <CardFooter className="pt-2 pb-4 px-6 mt-auto border-t border-border/50">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono text-xs text-primary hover:underline flex items-center gap-1 font-semibold"
            >
              <span className="text-primary">↗</span> View Architecture / GitHub
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
