import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { PROFILE_DATA } from '@/data/portfolioData';

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
      <h2 className="text-xl font-bold text-foreground mb-2 font-mono text-center">Direct Communication</h2>
      <p className="text-xs text-muted-foreground text-center mb-4">
        Fill in your project or role details below and I will respond promptly.
      </p>
      <form onSubmit={handleSubmit} className="form">
        <div className="flex flex-col sm:flex-row gap-4">
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
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2 className="section-title">Let's Connect</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Have an engineering challenge, backend architecture opportunity, or UAV systems project? Let's talk.
        </p>

        {/* Quick Connect Channels */}
        <div className="flex flex-wrap justify-center items-center gap-3 mt-6">
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="px-4 py-2 rounded-full bg-card/80 border border-border hover:border-primary text-xs font-mono text-foreground hover:text-primary transition-all flex items-center gap-2 shadow-sm"
          >
            <Mail className="w-3.5 h-3.5 text-primary" />
            <span>{PROFILE_DATA.email}</span>
          </a>
          <a
            href={PROFILE_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-card/80 border border-border hover:border-primary text-foreground hover:text-primary transition-all shadow-sm"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4 text-primary" />
          </a>
          <a
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-card/80 border border-border hover:border-primary text-foreground hover:text-primary transition-all shadow-sm"
            title="GitHub"
          >
            <Github className="w-4 h-4 text-primary" />
          </a>
          <a
            href={PROFILE_DATA.x}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-full bg-card/80 border border-border hover:border-primary text-foreground hover:text-primary transition-all font-mono font-bold text-xs shadow-sm"
            title="X (Twitter)"
          >
            X
          </a>
          <a
            href={PROFILE_DATA.devto}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-full bg-card/80 border border-border hover:border-primary text-foreground hover:text-primary transition-all font-mono font-bold text-xs shadow-sm"
            title="Dev.to"
          >
            DEV
          </a>
          <span className="px-3.5 py-2 rounded-full bg-card/50 border border-border/60 text-xs font-mono text-muted-foreground flex items-center gap-1.5 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span>{PROFILE_DATA.location}</span>
          </span>
        </div>
      </div>

      {/* Centered Form */}
      <div className="max-w-xl mx-auto w-full flex justify-center">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
