import React from 'react';
import { motion } from 'framer-motion';
import { TECH_GROUPS } from '@/data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
    },
  },
};

const Technologies = () => {
  const [imageErrors, setImageErrors] = React.useState<Record<string, boolean>>({});

  const handleImageError = (techName: string) => {
    setImageErrors(prev => ({ ...prev, [techName]: true }));
  };

  return (
    <section id="technologies" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-title">
          Core Architecture &amp; Tech Stack
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          High-performance distributed systems, real-time defense protocols, and enterprise cloud technologies
        </p>
      </motion.div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TECH_GROUPS.map((group) => (
          <div 
            key={group.label} 
            className="flex flex-col items-center h-full bg-card/85 backdrop-blur-md p-6 rounded-xl border border-border hover:border-primary/50 transition-all shadow-md hover:shadow-lg"
          >
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-primary mb-6 text-center">
              {group.label}
            </h3>
            <motion.div
              className="grid grid-cols-2 gap-4 w-full"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {group.items.map((tech) => (
                <motion.a
                  key={tech.name}
                  href={tech.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group no-underline p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  <div className="relative p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border group-hover:border-primary shadow-sm group-hover:shadow-[0_0_18px_rgba(46,160,67,0.3)] transition-all duration-300 w-14 h-14 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    {!imageErrors[tech.name] ? (
                      <motion.img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-8 h-8 object-contain relative z-10 filter transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        onError={() => handleImageError(tech.name)}
                      />
                    ) : (
                      <div className="w-8 h-8 flex items-center justify-center border border-primary/40 rounded bg-background text-primary font-mono font-bold text-[10px] text-center z-10">
                        {tech.name.substring(0, 3)}
                      </div>
                    )}
                  </div>
                  <motion.span 
                    className="mt-2 font-mono text-[11px] font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300 text-center leading-tight"
                  >
                    {tech.name}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
