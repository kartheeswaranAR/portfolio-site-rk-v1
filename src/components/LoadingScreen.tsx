import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Activity } from 'lucide-react';

const BOOT_LOGS = [
  "INITIALIZING SYSTEM ARCHITECTURE...",
  "LOADING REAL-TIME TELEMETRY PROTOCOLS...",
  "CONNECTING MAVLINK <100ms STREAM...",
  "STARTING ASP.NET CORE & DJANGO SERVICES...",
  "SYSTEM ONLINE. WELCOME TO KARTHEESWARAN.DEV"
];

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);

  useEffect(() => {
    const duration = 2000; // Snappy 2.0s
    const intervalTime = 30;
    const increment = (100 / (duration / intervalTime));

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    const logInterval = setInterval(() => {
      setCurrentLogIndex((prev) => (prev < BOOT_LOGS.length - 1 ? prev + 1 : prev));
    }, 400);

    return () => {
      clearInterval(timer);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden select-none">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />

      {/* Main Terminal Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[90%] max-w-md p-6 sm:p-8 bg-card/90 backdrop-blur-xl border border-border rounded-2xl shadow-2xl flex flex-col items-center"
      >
        {/* Revolving Spinner Logo */}
        <div className="relative mb-6 flex items-center justify-center">
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 rounded-full border-2 border-dashed border-primary/40 absolute"
          />
          {/* Inner Fast Spinner */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 rounded-full border-2 border-t-primary border-r-transparent border-b-primary/30 border-l-transparent absolute"
          />

          {/* Center KR Logo Badge */}
          <div className="w-16 h-16 rounded-xl bg-background border border-primary flex items-center justify-center shadow-md z-10">
            <span className="font-mono font-black text-2xl tracking-tighter">
              <span className="text-primary">K</span>
              <span className="text-foreground">R</span>
            </span>
          </div>
        </div>

        {/* Developer Name */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-bold text-foreground tracking-wide mb-1 font-sans text-center"
        >
          Kartheeswaran Rajasekaran
        </motion.h2>

        <p className="font-mono text-xs text-primary mb-6 flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 animate-pulse text-primary" />
        </p>

        {/* Boot Terminal Box */}
        <div className="w-full bg-background/90 border border-border rounded-lg p-3.5 mb-5 font-mono text-xs shadow-inner">
          <div className="flex items-center justify-between text-muted-foreground border-b border-border pb-2 mb-2 text-[10px]">
            <span className="flex items-center gap-1.5 text-foreground">
              <Terminal className="w-3 h-3 text-primary" />
              boot_sequence.sh
            </span>
            <span className="text-primary flex items-center gap-1">
              <Cpu className="w-3 h-3" /> ONLINE
            </span>
          </div>

          <div className="h-8 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLogIndex}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 5 }}
                transition={{ duration: 0.2 }}
                className="text-foreground text-[11px] truncate flex items-center gap-2"
              >
                <span className="text-primary font-bold">&gt;</span>
                <span className="text-muted-foreground">{BOOT_LOGS[currentLogIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="w-full space-y-2">
          <div className="flex justify-between items-center font-mono text-xs">
            <span className="text-muted-foreground">System Loading</span>
            <span className="text-primary font-bold">{Math.min(100, Math.round(progress))}%</span>
          </div>
          <div className="w-full h-2 bg-background border border-border rounded-full overflow-hidden p-0.5">
            <motion.div
              className="h-full bg-primary rounded-full shadow-[0_0_12px_rgba(46,160,67,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
