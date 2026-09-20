import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Download, Award, CheckCircle2, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import { TIMELINE_DATA, CERTIFICATIONS_DATA, PROFILE_DATA } from '@/data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section-container max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-3 flex-1">
          <span>Engineering Journey, Experience &amp; Certifications</span>
          <span className="flex-1 h-[1px] bg-border"></span>
        </h2>
        <a 
          href={PROFILE_DATA.resumeUrl} 
          download="Kartheeswaran_Resume.pdf"
          className="self-start sm:self-auto px-3.5 py-1.5 rounded-md bg-card/80 backdrop-blur-md border border-border hover:border-primary text-xs font-mono text-foreground hover:text-primary transition-all flex items-center gap-1.5 shadow-sm"
        >
          <Download className="w-3.5 h-3.5 text-primary" />
          Download CV
        </a>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Engineering Core, Research & Certifications */}
        <div className="lg:col-span-1 space-y-6">
          {/* Engineering Core Card */}
          <Card className="bg-card/80 backdrop-blur-md border-border rounded-xl shadow-md">
            <CardContent className="p-5">
              <h3 className="text-sm font-semibold text-foreground mb-4 font-mono">Engineering Core</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-mono text-xs font-semibold text-primary mb-2 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" /> Enterprise Backend
                  </h4>
                  <div className="space-y-1.5 font-mono text-xs text-muted-foreground">
                    {['ASP.NET Core (Web API, MVC)', 'Django REST Framework', 'Express.js & Node.js', 'Azure Cloud & VPS'].map((skill) => (
                      <div key={skill} className="flex items-center justify-between py-0.5 border-b border-border/40 last:border-0">
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-semibold text-primary mb-2 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5" /> Aerospace &amp; Defense
                  </h4>
                  <div className="space-y-1.5 font-mono text-xs text-muted-foreground">
                    {['MAVLink Protocol', 'WebSockets (<100ms)', 'Pixhawk Autopilot', 'OpenCV & Kalman Filters'].map((skill) => (
                      <div key={skill} className="flex items-center justify-between py-0.5 border-b border-border/40 last:border-0">
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Research & Publication */}
              <div className="mt-5 pt-4 border-t border-border">
                <h3 className="text-xs font-semibold text-foreground mb-2 font-mono flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-primary" /> Research Publication
                </h3>
                <div className="p-3 rounded-lg bg-background/80 backdrop-blur-sm border border-border">
                  <div className="font-mono text-[10px] uppercase text-primary font-semibold mb-1">IJASS Journal</div>
                  <div className="text-xs font-medium text-foreground mb-1">Aerodynamic and Aero-acoustic Investigations of Hybrid Multi-rotor UAVs</div>
                  <div className="font-mono text-[10px] text-muted-foreground">International Journal of Aeronautical and Space Sciences</div>
                </div>
              </div>

              {/* Quick Resume Download Button */}
              <div className="mt-5 pt-4 border-t border-border">
                <a 
                  href={PROFILE_DATA.resumeUrl} 
                  download="Kartheeswaran_Resume.pdf"
                  className="w-full py-2 px-3 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/40 text-foreground hover:text-primary font-mono text-xs font-medium transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-primary" />
                  Download Complete CV
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Industry Certifications Card */}
          <Card className="bg-card/80 backdrop-blur-md border-border rounded-xl shadow-md">
            <CardContent className="p-5">
              <h3 className="text-sm font-semibold text-foreground mb-3 font-mono flex items-center gap-1.5">
                <Award className="w-4 h-4 text-primary" /> Certifications
              </h3>
              
              <div className="space-y-3">
                {CERTIFICATIONS_DATA.map((cert) => (
                  <div key={cert.id} className="p-2.5 rounded-lg bg-background/70 border border-border/60 hover:border-primary/40 transition-colors">
                    <div className="flex items-start justify-between gap-2">
                      <div className="text-xs font-semibold text-foreground leading-snug">{cert.title}</div>
                      <span className="font-mono text-[10px] text-muted-foreground whitespace-nowrap">{cert.date}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 font-mono text-[11px] text-primary">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{cert.issuer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right Column: Timeline List */}
        <div className="lg:col-span-2 space-y-4">
          {TIMELINE_DATA.map((item) => (
            <Card key={item.id} className="bg-card/80 backdrop-blur-md border-border hover:border-primary/50 rounded-xl transition-all shadow-md hover:shadow-lg">
              <CardContent className="p-5">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">{item.year}</span>
                </div>
                {item.company && (
                  <div className="font-mono text-xs text-primary mb-3 font-semibold">
                    {item.company} {item.location ? `— ${item.location}` : ''}
                  </div>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
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

export default About;
