import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { PROFILE_DATA } from '@/data/portfolioData';

const DeveloperStats = () => (
  <Card className="bg-card/85 backdrop-blur-md border-border rounded-xl transition-all duration-300 overflow-hidden h-full flex flex-col justify-between shadow-md p-2">
    <CardHeader className="pb-3">
      <div className="flex items-center justify-between">
        <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">Systems Overview</CardTitle>
        <span className="px-2.5 py-1 rounded-full bg-primary/15 border border-primary/40 text-primary font-mono text-[10px] uppercase font-semibold">
          Verified Impact
        </span>
      </div>
      <p className="text-muted-foreground text-xs font-mono">Specialized benchmarks &amp; key engineering milestones</p>
    </CardHeader>
    
    <CardContent className="space-y-6">
      {/* Specialization Spotlight Box */}
      <div className="p-4 rounded-xl bg-background/85 border border-primary/30 shadow-sm">
        <div className="flex items-center gap-2 mb-1.5 font-mono text-xs font-bold text-primary">
          <span>⚡ What Makes My Architecture Unique</span>
        </div>
        <p className="text-xs text-foreground/90 leading-relaxed">
          Rare dual-domain expertise integrating <strong className="text-primary">high-concurrency enterprise microservices</strong> (ASP.NET Core, Django, Express) with <strong className="text-primary">real-time autonomous defense hardware protocols</strong> (MAVLink, WebSockets, Pixhawk, Kalman Filters).
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div className="bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-border hover:border-primary/50 transition-all">
          <div className="text-xl font-mono font-bold text-primary mb-0.5">{PROFILE_DATA.metrics.telemetryLatency}</div>
          <div className="text-[10px] font-mono text-muted-foreground">Telemetry Latency</div>
        </div>
        
        <div className="bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-border hover:border-primary/50 transition-all">
          <div className="text-xl font-mono font-bold text-primary mb-0.5">{PROFILE_DATA.metrics.dailyTransactions}</div>
          <div className="text-[10px] font-mono text-muted-foreground">Daily Transactions</div>
        </div>
        
        <div className="bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-border hover:border-primary/50 transition-all">
          <div className="text-xl font-mono font-bold text-primary mb-0.5">{PROFILE_DATA.metrics.productionUptime}</div>
          <div className="text-[10px] font-mono text-muted-foreground">Production Uptime</div>
        </div>
        
        <div className="bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-border hover:border-primary/50 transition-all">
          <div className="text-xl font-mono font-bold text-primary mb-0.5">8.1 / 10</div>
          <div className="text-[10px] font-mono text-muted-foreground">M.Tech Defence Tech</div>
        </div>

        <div className="bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-border hover:border-primary/50 transition-all">
          <div className="text-xl font-mono font-bold text-primary mb-0.5">{PROFILE_DATA.metrics.queryOptimization}</div>
          <div className="text-[10px] font-mono text-muted-foreground">DB Query Speedup</div>
        </div>

        <div className="bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-border hover:border-primary/50 transition-all">
          <div className="text-xl font-mono font-bold text-primary mb-0.5">IJASS</div>
          <div className="text-[10px] font-mono text-muted-foreground">Published Author</div>
        </div>
      </div>

      {/* Social Icons */}
      <div>
        <h4 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-3 text-center">Connect &amp; Verify</h4>
        <div className="flex flex-wrap justify-center gap-2.5">
          <a href={PROFILE_DATA.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="p-2.5 bg-background/80 border border-border rounded-lg text-foreground hover:text-primary hover:border-primary transition shadow-sm">
            <Github className="w-4 h-4 text-primary" />
          </a>
          <a href={PROFILE_DATA.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="p-2.5 bg-background/80 border border-border rounded-lg text-foreground hover:text-primary hover:border-primary transition shadow-sm">
            <Linkedin className="w-4 h-4 text-primary" />
          </a>
          <a href={`mailto:${PROFILE_DATA.email}`} title="Email" className="p-2.5 bg-background/80 border border-border rounded-lg text-foreground hover:text-primary hover:border-primary transition shadow-sm">
            <Mail className="w-4 h-4 text-primary" />
          </a>
          <a href={PROFILE_DATA.x} target="_blank" rel="noopener noreferrer" title="X (Twitter)" className="py-2.5 px-3 bg-background/80 border border-border rounded-lg text-foreground hover:text-primary hover:border-primary transition font-mono font-bold text-xs shadow-sm">
            X
          </a>
          <a href={PROFILE_DATA.devto} target="_blank" rel="noopener noreferrer" title="Dev.to" className="py-2.5 px-3 bg-background/80 border border-border rounded-lg text-foreground hover:text-primary hover:border-primary transition font-mono font-bold text-xs shadow-sm">
            DEV
          </a>
          <a href={PROFILE_DATA.medium} target="_blank" rel="noopener noreferrer" title="Medium" className="py-2.5 px-3 bg-background/80 border border-border rounded-lg text-foreground hover:text-primary hover:border-primary transition font-mono font-bold text-xs shadow-sm">
            M
          </a>
          <a href={PROFILE_DATA.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" className="py-2.5 px-3 bg-background/80 border border-border rounded-lg text-foreground hover:text-primary hover:border-primary transition font-mono font-bold text-xs shadow-sm">
            IG
          </a>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    collaborationType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate collaboration type selection
    if (!formData.collaborationType) {
      setSubmitStatus({
        type: 'error',
        message: 'Please select a collaboration type.'
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '82927390-3cc2-4ef8-8ce2-2249f91f37cc',
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          collaborationType: formData.collaborationType,
          message: formData.message,
          subject: 'New Contact Form Submission'
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.'
        });
        setFormData({ firstName: '', lastName: '', email: '', collaborationType: '', message: '' });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container shadow-md">
      <h2 className="text-xl font-bold text-foreground mb-2 font-mono">Direct Communication</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="flex gap-4">
          <div className="form-group flex-1">
            <label htmlFor="firstName">First Name</label>
            <input 
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              required
            />
          </div>
          
          <div className="form-group flex-1">
            <label htmlFor="lastName">Last Name</label>
            <input 
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Collaboration Type</label>
          <div className="flex gap-2.5 mt-2">
            {['Full-time', 'Contract', 'Consulting'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, collaborationType: type }))}
                className={`flex-1 py-2.5 px-3 rounded-lg border font-mono text-xs transition-all duration-300 cursor-pointer ${
                  formData.collaborationType === type
                    ? 'bg-primary/20 border-primary text-foreground font-semibold'
                    : 'bg-background/80 border-border text-muted-foreground hover:border-primary hover:text-foreground'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Project requirements, role details, or collaboration inquiry..."
            required
          />
        </div>
        
        {submitStatus.type && (
          <div className={`p-3 rounded-lg font-mono text-xs ${
            submitStatus.type === 'success' ? 'bg-primary/15 text-primary border border-primary/30' : 'bg-destructive/15 text-destructive border border-destructive/30'
          }`}>
            {submitStatus.message}
          </div>
        )}
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full py-3 px-4 rounded-lg bg-primary hover:bg-primary/90 text-xs font-mono text-primary-foreground font-semibold transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
        >
          {isSubmitting ? 'Transmitting...' : 'Send Message'} <Send size={14} />
        </button>
      </form>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Let's Connect</h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          Have an engineering challenge, backend architecture opportunity, or UAV systems project? Let's talk.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left: Developer Stats & Systems Overview */}
        <DeveloperStats />
        {/* Right: Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
