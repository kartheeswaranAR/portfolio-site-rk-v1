import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Server, Cpu, ShieldCheck, Database, Zap } from 'lucide-react';

export default function FeaturesSectionDemo() {
  const capabilities = [
    {
      icon: Activity,
      title: "Real-Time Telemetry & Hardware Protocols",
      description: "Asynchronous WebSocket telemetry pipelines for MAVLink & Pixhawk integration with sub-100ms packet delivery across active UAV flight sessions.",
      tags: ["MAVLink", "WebSockets", "Pixhawk", "Python", "<100ms Latency"]
    },
    {
      icon: Server,
      title: "Enterprise Backend Microservices",
      description: "High-concurrency, resilient microservices built with ASP.NET Core, Django REST Framework, and Express.js handling 100k+ daily transactions.",
      tags: ["ASP.NET Core", "Django DRF", "Express.js", "REST APIs", "C#"]
    },
    {
      icon: Cpu,
      title: "Autonomous Kinematics & State Estimation",
      description: "Predictive trajectory tracking engines using 2D/3D Kalman Filtering algorithms and OpenCV feature extraction for tactical target locking.",
      tags: ["Kalman Filters", "OpenCV", "State Estimation", "Kinematics"]
    },
    {
      icon: ShieldCheck,
      title: "RBAC & Enterprise Security Architecture",
      description: "Granular Role-Based Access Control, JWT token authentication, automated webhook pipelines, and secure cloud microservices compliance.",
      tags: ["RBAC", "JWT", "OAuth 2.0", "Security", "Webhooks"]
    },
    {
      icon: Database,
      title: "Scalable Data Storage & Systems Architecture",
      description: "Optimized relational (MySQL, MSSQL) and NoSQL (MongoDB, Redis) data models engineered for high-throughput, low-overhead transactional execution.",
      tags: ["MySQL", "MSSQL", "MongoDB", "Schema Indexing", "Data Modeling"]
    },
    {
      icon: Zap,
      title: "Cloud Infrastructure & Systems Optimization",
      description: "Containerized environments with Docker, GitHub Actions CI/CD workflows, Nginx reverse proxy configuration, and Linux VPS hosting.",
      tags: ["Docker", "Linux VPS", "Azure", "GitHub Actions", "CI/CD"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto py-4">
      {capabilities.map((cap, index) => (
        <CapabilityCard key={cap.title} {...cap} index={index} />
      ))}
    </div>
  );
}

interface CapabilityCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  tags: string[];
  index: number;
}

const CapabilityCard = ({ icon: Icon, title, description, tags, index }: CapabilityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 70,
          duration: 0.5,
          delay: index * 0.1
        }
      }}
      viewport={{ once: true, amount: 0.1 }}
      className="h-full group"
    >
      <div className="h-full bg-card/85 backdrop-blur-md border border-border hover:border-primary/50 rounded-xl p-6 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between relative overflow-hidden">
        {/* Subtle glow accent on hover */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        <div>
          {/* Header Icon */}
          <div className="mb-4 inline-flex p-3 rounded-lg bg-background/80 backdrop-blur-sm border border-border text-primary group-hover:border-primary transition-all duration-300 shadow-inner">
            <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          </div>

          {/* Title & Description */}
          <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60 mt-auto">
          {tags.map((tag, i) => (
            <span key={i} className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-background/80 backdrop-blur-sm text-muted-foreground border border-border">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};