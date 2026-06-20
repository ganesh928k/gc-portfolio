import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { IconMail, IconBrandLinkedin, IconBrandGithub, IconMapPin, IconPhone } from '@tabler/icons-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5 bg-bg2/30">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        <div className="text-center mb-16">
          <span className="section-label justify-center">06. Connect</span>
          <h2 className="section-title mt-4">Get In Touch</h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Currently open to new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
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
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-indigo group-hover:bg-indigo/10 group-hover:border-indigo/30 transition-all">
                  <IconPhone size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted font-mono mb-0.5">Phone</p>
                  <p className="text-white group-hover:text-indigo transition-colors">{profile.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-emerald group-hover:bg-emerald/10 group-hover:border-emerald/30 transition-all">
                  <IconMapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted font-mono mb-0.5">Location</p>
                  <p className="text-white group-hover:text-emerald transition-colors">{profile.location}</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-heading font-semibold text-white mb-4">Socials</h3>
            <div className="flex gap-4">
              <a href={profile.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-white hover:border-white/30 transition-all">
                <IconBrandGithub size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-[#0a66c2] hover:border-[#0a66c2]/30 transition-all">
                <IconBrandLinkedin size={20} />
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
            <form action={`https://formsubmit.co/${profile.email}`} method="POST" className="space-y-5">
              <input type="hidden" name="_subject" value="New submission from Portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm text-muted font-medium ml-1">Name</label>
                  <input type="text" name="name" required placeholder="John Doe" className="glass-input" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm text-muted font-medium ml-1">Email</label>
                  <input type="email" name="email" required placeholder="john@example.com" className="glass-input" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm text-muted font-medium ml-1">Subject</label>
                <input type="text" name="subject" required placeholder="Job Opportunity / Project" className="glass-input" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm text-muted font-medium ml-1">Message</label>
                <textarea name="message" required rows="4" placeholder="Hello Ganesh..." className="glass-input resize-none"></textarea>
              </div>
              
              <button type="submit" className="btn-grad w-full justify-center mt-2">
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
