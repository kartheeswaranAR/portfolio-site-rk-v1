import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Send, Download, Eye, FileText, X, Code2, MessageSquare, User, MessageCircle } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kartheeswaran.dev@outlook.com',
    href: 'mailto:kartheeswaran.dev@outlook.com',
    bg: 'bg-blue-700',
    iconColor: 'text-white',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/kartheeswaranAR',
    href: 'https://github.com/kartheeswaranAR',
    bg: 'bg-gray-700',
    iconColor: 'text-white',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/kartheeswaranr',
    href: 'https://www.linkedin.com/in/kartheeswaranr/',
    bg: 'bg-blue-800',
    iconColor: 'text-white',
  },
];

// LeetCode SVG
const LeetCodeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35.5 36.5L14 25.5L35.5 14.5" stroke="#FFA116" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 25.5H35.5" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const codingPlatforms = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/kartheeswaranAR',
    bg: 'bg-white',
    iconColor: '',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kartheeswaranr/',
    bg: 'bg-white',
    iconColor: '',
  },
];

const DeveloperStats = () => (
  <Card className="bg-[#161b22]/75 backdrop-blur-md border-[#30363d] rounded-xl transition-all duration-300 overflow-hidden h-full flex flex-col justify-between shadow-xl p-2">
    <CardHeader className="pb-3">
      <div className="flex items-center justify-between">
        <CardTitle className="text-xl sm:text-2xl font-bold text-[#e6edf3]">Systems Overview</CardTitle>
        <span className="px-2.5 py-1 rounded-full bg-[#2ea043]/15 border border-[#2ea043]/40 text-[#2ea043] font-mono text-[10px] uppercase font-semibold">
          Verified Impact
        </span>
      </div>
      <p className="text-[#8b949e] text-xs font-mono">Specialized benchmarks &amp; key engineering milestones</p>
    </CardHeader>
    
    <CardContent className="space-y-6">
      {/* Specialization Spotlight Box */}
      <div className="p-4 rounded-xl bg-[#0d1117]/90 border border-[#2ea043]/30 shadow-md">
        <div className="flex items-center gap-2 mb-1.5 font-mono text-xs font-bold text-[#2ea043]">
          <span>⚡ What Makes My Architecture Unique</span>
        </div>
        <p className="text-xs text-[#e6edf3] leading-relaxed">
          Rare dual-domain expertise integrating <strong className="text-[#2ea043]">high-concurrency enterprise microservices</strong> (ASP.NET Core, Django, Express) with <strong className="text-[#2ea043]">real-time autonomous defense hardware protocols</strong> (MAVLink, WebSockets, Pixhawk, Kalman Filters).
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div className="bg-[#0d1117]/80 backdrop-blur-sm rounded-lg p-3 border border-[#30363d] hover:border-[#2ea043]/50 transition-all">
          <div className="text-xl font-mono font-bold text-[#2ea043] mb-0.5">&lt;100ms</div>
          <div className="text-[10px] font-mono text-[#8b949e]">Telemetry Latency</div>
        </div>
        
        <div className="bg-[#0d1117]/80 backdrop-blur-sm rounded-lg p-3 border border-[#30363d] hover:border-[#2ea043]/50 transition-all">
          <div className="text-xl font-mono font-bold text-[#2ea043] mb-0.5">100k+</div>
          <div className="text-[10px] font-mono text-[#8b949e]">Daily Transactions</div>
        </div>
        
        <div className="bg-[#0d1117]/80 backdrop-blur-sm rounded-lg p-3 border border-[#30363d] hover:border-[#2ea043]/50 transition-all">
          <div className="text-xl font-mono font-bold text-[#2ea043] mb-0.5">IJASS</div>
          <div className="text-[10px] font-mono text-[#8b949e]">Published Author</div>
        </div>
        
        <div className="bg-[#0d1117]/80 backdrop-blur-sm rounded-lg p-3 border border-[#30363d] hover:border-[#2ea043]/50 transition-all">
          <div className="text-xl font-mono font-bold text-[#2ea043] mb-0.5">8.2 / 10</div>
          <div className="text-[10px] font-mono text-[#8b949e]">M.Tech Defence Tech</div>
        </div>

        <div className="bg-[#0d1117]/80 backdrop-blur-sm rounded-lg p-3 border border-[#30363d] hover:border-[#2ea043]/50 transition-all">
          <div className="text-xl font-mono font-bold text-[#2ea043] mb-0.5">&gt;90%</div>
          <div className="text-[10px] font-mono text-[#8b949e]">Ops Overhead Cut</div>
        </div>

        <div className="bg-[#0d1117]/80 backdrop-blur-sm rounded-lg p-3 border border-[#30363d] hover:border-[#2ea043]/50 transition-all">
          <div className="text-xl font-mono font-bold text-[#2ea043] mb-0.5">-25%</div>
          <div className="text-[10px] font-mono text-[#8b949e]">DB Query Load</div>
        </div>
      </div>

      {/* Social Icons */}
      <div>
        <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#8b949e] mb-3 text-center">// Connect &amp; Verify</h4>
        <div className="flex flex-wrap justify-center gap-2.5">
          <a href="https://github.com/kartheeswaranAR" target="_blank" rel="noopener noreferrer" title="GitHub" className="p-2.5 bg-[#0d1117]/80 border border-[#30363d] rounded-lg text-[#e6edf3] hover:text-[#2ea043] hover:border-[#2ea043] transition shadow-md">
            <Github className="w-4 h-4 text-[#2ea043]" />
          </a>
          <a href="https://www.linkedin.com/in/kartheeswaranr/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="p-2.5 bg-[#0d1117]/80 border border-[#30363d] rounded-lg text-[#e6edf3] hover:text-[#2ea043] hover:border-[#2ea043] transition shadow-md">
            <Linkedin className="w-4 h-4 text-[#2ea043]" />
          </a>
          <a href="mailto:kartheeswaran.dev@outlook.com" title="Email" className="p-2.5 bg-[#0d1117]/80 border border-[#30363d] rounded-lg text-[#e6edf3] hover:text-[#2ea043] hover:border-[#2ea043] transition shadow-md">
            <Mail className="w-4 h-4 text-[#2ea043]" />
          </a>
          <a href="https://x.com/Karthees_offcl" target="_blank" rel="noopener noreferrer" title="X (Twitter)" className="py-2.5 px-3 bg-[#0d1117]/80 border border-[#30363d] rounded-lg text-[#e6edf3] hover:text-[#2ea043] hover:border-[#2ea043] transition font-mono font-bold text-xs shadow-md">
            X
          </a>
          <a href="https://dev.to/kartheeswaran1921" target="_blank" rel="noopener noreferrer" title="Dev.to" className="py-2.5 px-3 bg-[#0d1117]/80 border border-[#30363d] rounded-lg text-[#e6edf3] hover:text-[#2ea043] hover:border-[#2ea043] transition font-mono font-bold text-xs shadow-md">
            DEV
          </a>
          <a href="https://medium.com/@kartheeswaranoff" target="_blank" rel="noopener noreferrer" title="Medium" className="py-2.5 px-3 bg-[#0d1117]/80 border border-[#30363d] rounded-lg text-[#e6edf3] hover:text-[#2ea043] hover:border-[#2ea043] transition font-mono font-bold text-xs shadow-md">
            M
          </a>
          <a href="https://www.instagram.com/yurs_ark/" target="_blank" rel="noopener noreferrer" title="Instagram" className="py-2.5 px-3 bg-[#0d1117]/80 border border-[#30363d] rounded-lg text-[#e6edf3] hover:text-[#2ea043] hover:border-[#2ea043] transition font-mono font-bold text-xs shadow-md">
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
    <div className="form-container shadow-xl">
      <h2 className="text-xl font-bold text-[#e6edf3] mb-2">// Direct Communication</h2>
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
                className={`flex-1 py-2.5 px-3 rounded-lg border font-mono text-xs transition-all duration-300 ${
                  formData.collaborationType === type
                    ? 'bg-[#2ea043]/20 border-[#2ea043] text-[#e6edf3]'
                    : 'bg-[#0d1117]/80 border-[#30363d] text-[#8b949e] hover:border-[#2ea043] hover:text-[#e6edf3]'
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
            submitStatus.type === 'success' ? 'bg-[#2ea043]/20 text-[#2ea043] border border-[#2ea043]/40' : 'bg-red-500/20 text-red-400 border border-red-500/40'
          }`}>
            {submitStatus.message}
          </div>
        )}
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full py-3 px-4 rounded-lg bg-[#0d1117]/90 border border-[#30363d] hover:border-[#2ea043] text-xs font-mono text-[#e6edf3] hover:text-[#2ea043] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
        >
          {isSubmitting ? 'Transmitting...' : 'Send Message'} <Send size={14} className="text-[#2ea043]" />
        </button>
      </form>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Let's connect</h2>
          </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left: Developer Stats, Contact Methods, Coding Platforms */}
        <DeveloperStats />
        {/* Right: Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
