import React from 'react';
import { motion } from 'framer-motion';
import FeaturesSectionDemo from '@/components/ui/features-section-demo-2';

const Features = () => {
  return (
    <section id="features" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="section-title">Core Capabilities</h2>
        <p className="text-sm sm:text-base text-[#8b949e] max-w-2xl mx-auto">
          Domain expertise spanning sub-100ms hardware telemetry, high-concurrency cloud microservices, and autonomous control systems.
        </p>
      </motion.div>
      <FeaturesSectionDemo />
    </section>
  );
};

export default Features;