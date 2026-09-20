import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Shield, Zap, Activity } from 'lucide-react';

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
    const duration = 2800; // Total 2.8s
    const intervalTime = 35;
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
    }, 520);

    return () => {
      clearInterval(timer);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1117] overflow-hidden select-none">
      {/* Dynamic Background Glow Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#2ea043 1px, transparent 1px), radial-gradient(#1f6feb 1px, #0d1117 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-[#0d1117] pointer-events-none" />

      {/* Main Terminal Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[90%] max-w-md p-6 sm:p-8 bg-[#161b22]/90 backdrop-blur-xl border border-[#30363d] rounded-2xl shadow-[0_0_50px_rgba(46,160,67,0.15)] flex flex-col items-center"
      >
        {/* Revolving Cyber-Spin Logo */}
        <div className="relative mb-6 flex items-center justify-center">
          {/* Outer Pulsing Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 rounded-full border-2 border-dashed border-[#2ea043]/50 absolute"
          />
          {/* Inner Fast Spinner */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 rounded-full border-2 border-t-[#2ea043] border-r-transparent border-b-[#2ea043]/30 border-l-transparent absolute"
          />

          {/* Center KR Logo Badge */}
          <div className="w-16 h-16 rounded-xl bg-[#0d1117] border border-[#2ea043] flex items-center justify-center shadow-[0_0_20px_rgba(46,160,67,0.3)] z-10">
            <span className="font-mono font-black text-2xl tracking-tighter">
              <span className="text-[#2ea043]">K</span>
              <span className="text-[#e6edf3]">R</span>
            </span>
          </div>
        </div>

        {/* Developer Name */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-bold text-[#e6edf3] tracking-wide mb-1 font-sans text-center"
        >
          Kartheeswaran Rajasekaran
        </motion.h2>

        <p className="font-mono text-xs text-[#2ea043] mb-6 flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 animate-pulse text-[#2ea043]" />
        </p>

        {/* Boot Terminal Box */}
        <div className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg p-3.5 mb-5 font-mono text-xs">
          <div className="flex items-center justify-between text-[#8b949e] border-b border-[#30363d] pb-2 mb-2 text-[10px]">
            <span className="flex items-center gap-1.5 text-[#e6edf3]">
              <Terminal className="w-3 h-3 text-[#2ea043]" />
              boot_sequence.sh
            </span>
            <span className="text-[#2ea043] flex items-center gap-1">
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
                className="text-[#e6edf3] text-[11px] truncate flex items-center gap-2"
              >
                <span className="text-[#2ea043] font-bold">&gt;</span>
                <span className="text-[#8b949e]">{BOOT_LOGS[currentLogIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="w-full space-y-2">
          <div className="flex justify-between items-center font-mono text-xs">
            <span className="text-[#8b949e]">System Loading</span>
            <span className="text-[#2ea043] font-bold">{Math.min(100, Math.round(progress))}%</span>
          </div>
          <div className="w-full h-2 bg-[#0d1117] border border-[#30363d] rounded-full overflow-hidden p-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-[#2ea043] to-[#3fb950] rounded-full shadow-[0_0_12px_rgba(46,160,67,0.8)]"
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
