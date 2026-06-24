import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/portfolio';
import { IconMail, IconBrandLinkedin, IconBrandGithub, IconMapPin, IconSend, IconCheck, IconAlertCircle, IconBrandWhatsapp } from '@tabler/icons-react';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: 'New message from Portfolio!',
          _captcha: 'false',
        }),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5 bg-bg2/30">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        <div className="text-center mb-16">
          <span className="section-label justify-center">06. Connect</span>
          <h2 className="section-title mt-4">Get In Touch</h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Currently open to new opportunities. Whether you have a question, a project proposal, or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-heading font-semibold text-white mb-6">Contact Info</h3>
            
            <div className="space-y-6 mb-10">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-cyan group-hover:bg-cyan/10 group-hover:border-cyan/30 transition-all">
                  <IconMail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted font-mono mb-0.5">Email</p>
                  <p className="text-white group-hover:text-cyan transition-colors">{profile.email}</p>
                </div>
              </a>
              
              <a href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-emerald group-hover:bg-emerald/10 group-hover:border-emerald/30 transition-all">
                  <IconBrandWhatsapp size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted font-mono mb-0.5">WhatsApp / Phone</p>
                  <p className="text-white group-hover:text-emerald transition-colors">{profile.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-indigo">
                  <IconMapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted font-mono mb-0.5">Location</p>
                  <p className="text-white">{profile.location}</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-heading font-semibold text-white mb-4">Socials</h3>
            <div className="flex gap-4">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-white hover:border-white/30 transition-all">
                <IconBrandGithub size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-[#0a66c2] hover:border-[#0a66c2]/30 transition-all">
                <IconBrandLinkedin size={20} />
              </a>
              <a href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-emerald hover:border-emerald/30 transition-all">
                <IconBrandWhatsapp size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-lg p-8"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald/10 border border-emerald/30 flex items-center justify-center">
                    <IconCheck size={40} className="text-emerald" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-white">Message Sent!</h3>
                  <p className="text-muted max-w-xs">Thanks for reaching out. I&apos;ll get back to you as soon as possible.</p>
                  <button onClick={() => setStatus('idle')} className="btn-outline mt-4">Send Another</button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-sm text-rose-400">
                      <IconAlertCircle size={18} />
                      Something went wrong. Please email directly: {profile.email}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm text-muted font-medium ml-1">Name</label>
                      <input type="text" name="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} className="glass-input" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm text-muted font-medium ml-1">Email</label>
                      <input type="email" name="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} className="glass-input" />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-sm text-muted font-medium ml-1">Subject</label>
                    <input type="text" name="subject" required placeholder="Job Opportunity / Project" value={formData.subject} onChange={handleChange} className="glass-input" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-sm text-muted font-medium ml-1">Message</label>
                    <textarea name="message" required rows="4" placeholder="Hello Ganesh..." value={formData.message} onChange={handleChange} className="glass-input resize-none" />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-grad w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <IconSend size={18} />
                        Send Message
                      </span>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
