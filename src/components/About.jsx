import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';

export default function About() {
  const [statsError, setStatsError] = useState(false);
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <span className="section-label">01. Background</span>
          <h2 className="section-title mt-4">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-lg p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo/10 blur-3xl rounded-full mix-blend-screen" />

            <p className="text-muted leading-relaxed text-lg relative z-10">
              {profile.bio}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 relative z-10">
              <div className="border-l-4 border-indigo pl-4 relative py-2">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo/20 to-transparent -z-10 blur-md" />
                <p className="text-4xl font-heading font-bold text-white mb-1">3+</p>
                <p className="text-sm font-mono text-muted uppercase">Years Experience</p>
              </div>
              <div className="border-l-2 border-cyan/30 pl-4">
                <p className="text-3xl font-heading font-bold text-white mb-1">20+</p>
                <p className="text-sm font-mono text-muted uppercase">Servers Managed</p>
              </div>
              <div className="border-l-2 border-violet/30 pl-4">
                <p className="text-3xl font-heading font-bold text-white mb-1">50+</p>
                <p className="text-sm font-mono text-muted uppercase">VoIP Deployments</p>
              </div>
              <div className="border-l-2 border-emerald/30 pl-4">
                <p className="text-3xl font-heading font-bold text-white mb-1">4</p>
                <p className="text-sm font-mono text-muted uppercase">Certifications</p>
              </div>
            </div>

            {/* GitHub Profile Card - no external dependencies */}
            <div className="mt-8 relative z-10">
              <p className="text-xs font-mono text-muted mb-3 uppercase tracking-wider">GitHub Profile</p>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-white/5 bg-surface p-5 hover:border-indigo/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-10 h-10 rounded-full border border-white/10"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan transition-colors">@{profile.githubUser}</p>
                    <p className="text-xs text-muted font-mono">github.com</p>
                  </div>
                  <span className="ml-auto text-muted group-hover:text-white transition-colors text-sm">↗</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                  <div className="bg-indigo/10 rounded-lg p-3 border border-indigo/20 text-center">
                    <p className="text-white font-bold text-base">10+</p>
                    <p className="text-muted mt-0.5">Repos</p>
                  </div>
                  <div className="bg-cyan/10 rounded-lg p-3 border border-cyan/20 text-center">
                    <p className="text-white font-bold text-base">3+</p>
                    <p className="text-muted mt-0.5">Years</p>
                  </div>
                  <div className="bg-violet/10 rounded-lg p-3 border border-violet/20 text-center">
                    <p className="text-white font-bold text-base">4</p>
                    <p className="text-muted mt-0.5">Certs</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {['Linux', 'Bash', 'Docker', 'VoIP', 'AWS'].map(tag => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-muted border border-white/5">{tag}</span>
                  ))}
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-6 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-indigo/50 transition-all duration-300">
              <h3 className="text-xl font-heading font-semibold text-white mb-2 flex items-center gap-2">
                <span className="text-indigo">⚡</span> Infrastructure First
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                I believe in building resilient infrastructure that scales. From bare-metal Linux servers to cloud environments, I focus on security, performance, and automation.
              </p>
            </div>

            <div className="glass p-6 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-cyan/50 transition-all duration-300">
              <h3 className="text-xl font-heading font-semibold text-white mb-2 flex items-center gap-2">
                <span className="text-cyan">📞</span> Telephony Expert
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Specialized in Asterisk and VICIdial deployments. I handle complex SIP routing, trunk configurations, and troubleshoot deep VoIP network issues.
              </p>
            </div>

            <div className="glass p-6 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-emerald/50 transition-all duration-300">
              <h3 className="text-xl font-heading font-semibold text-white mb-2 flex items-center gap-2">
                <span className="text-emerald">☁️</span> Cloud & Automation
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                AWS & Oracle Cloud certified. I automate repetitive infrastructure tasks using Bash scripting, CI/CD pipelines, and configuration management tools.
              </p>
            </div>

            <div className="glass p-6 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-violet/50 transition-all duration-300">
              <h3 className="text-xl font-heading font-semibold text-white mb-2 flex items-center gap-2">
                <span className="text-violet-400">🛡️</span> Security Minded
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                System hardening, GPG encryption, firewall rules, and disaster recovery are core to my engineering approach — not afterthoughts.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
