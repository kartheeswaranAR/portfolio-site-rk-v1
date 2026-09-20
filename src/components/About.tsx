import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

import { TIMELINE_DATA } from '@/data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section-container max-w-4xl mx-auto">
      <h2 className="font-mono text-xs uppercase tracking-widest text-[#8b949e] mb-8 flex items-center gap-3">
        <span>Work Experience & Education</span>
        <span className="flex-1 h-[1px] bg-[#30363d]"></span>
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Engineering Core Sidebar */}
        <div className="lg:col-span-1">
          <Card className="h-full bg-[#161b22]/75 backdrop-blur-md border-[#30363d] rounded-xl shadow-xl">
            <CardContent className="p-5">
              <h3 className="text-base font-semibold text-[#e6edf3] mb-4">// Engineering Core</h3>
              
              <div className="space-y-5">
                <div>
                  <h4 className="font-mono text-xs font-semibold text-[#2ea043] mb-2">Enterprise Backend</h4>
                  <div className="space-y-1.5 font-mono text-xs text-[#8b949e]">
                    {['ASP.NET Core', 'Django REST', 'Express.js / Node', 'Azure Cloud'].map((skill) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-semibold text-[#2ea043] mb-2">Aerospace & Defense</h4>
                  <div className="space-y-1.5 font-mono text-xs text-[#8b949e]">
                    {['MAVLink Protocol', 'WebSockets (<100ms)', 'Pixhawk Autopilot', 'OpenCV / Kalman'].map((skill) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#30363d]">
                <h3 className="text-sm font-semibold text-[#e6edf3] mb-3">// Research & Publication</h3>
                <div className="p-3.5 rounded-lg bg-[#0d1117]/80 backdrop-blur-sm border border-[#30363d]">
                  <div className="font-mono text-[10px] uppercase text-[#2ea043] font-semibold mb-1">IJASS Journal</div>
                  <div className="text-xs font-medium text-[#e6edf3] mb-1">Aerodynamic and Aero-acoustic Investigations of Hybrid Multi-rotor UAVs</div>
                  <div className="font-mono text-[10px] text-[#8b949e]">International Journal of Aeronautical and Space Sciences</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Timeline List */}
        <div className="lg:col-span-2 space-y-4">
          {TIMELINE_DATA.map((item) => (
            <Card key={item.id} className="bg-[#161b22]/75 backdrop-blur-md border-[#30363d] hover:border-[#2ea043]/50 rounded-xl transition-all shadow-xl hover:shadow-[0_0_20px_rgba(46,160,67,0.12)]">
              <CardContent className="p-5">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-base font-semibold text-[#e6edf3]">{item.title}</h3>
                  <span className="font-mono text-xs text-[#8b949e] whitespace-nowrap">{item.year}</span>
                </div>
                {item.company && (
                  <div className="font-mono text-xs text-[#2ea043] mb-3 font-semibold">
                    {item.company} {item.location ? `— ${item.location}` : ''}
                  </div>
                )}
                <p className="text-sm text-[#8b949e] leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    />
  </svg>
);

const GraduationIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M19.916 4.626a.75.75 0 01-.025 1.042l-7.25 6.5a.75.75 0 01-1 0l-7.25-6.5a.75.75 0 011.025-1.042L12 10.168l6.591-5.584a.75.75 0 01.975.042z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3.75 5.25h1.5M20.25 5.25h-1.5M3.75 18.75h1.5M20.25 18.75h-1.5M9 18.75v-4.5M12 18.75v-4.5M15 18.75v-4.5M1.5 12.75h21" 
    />
  </svg>
);

const AwardIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
    />
  </svg>
);

export default About;
