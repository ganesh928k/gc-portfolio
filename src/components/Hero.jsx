import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconDownload } from '@tabler/icons-react';
import { profile } from '../data/portfolio';
import Magnetic from './Magnetic';

// Floating tech icons for background
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
      <motion.div 
        animate={{ y: [0, -50, 0], rotate: [0, 15, 0], scale: [1, 1.2, 1] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/40 rounded-full blur-[100px] mix-blend-screen"
      />
      <motion.div 
        animate={{ y: [0, 60, 0], x: [0, -40, 0], scale: [1, 1.1, 1] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/30 rounded-full blur-[120px] mix-blend-screen"
      />
    </div>
  );
}

// Pulsing "Available for Work" badge
function AvailableBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald/30 bg-emerald/5 mb-3"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald" />
      </span>
      <span className="text-xs font-mono font-medium text-emerald tracking-wide">Available for Opportunities</span>
    </motion.div>
  );
}

// Profile Avatar with animated gradient ring
function ProfileAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="relative mx-auto mb-6 flex items-center justify-center"
      style={{ width: 160, height: 160 }}
    >
      {/* Spinning gradient ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #3b82f6, #6366f1, #06b6d4, #3b82f6)',
          padding: 3,
        }}
      >
        <div className="w-full h-full rounded-full" style={{ background: '#050810' }} />
      </motion.div>
      {/* Inner pulse ring */}
      <div className="absolute inset-1 rounded-full animate-pulse-ring opacity-40" />
      {/* Avatar initials fallback */}
      <div className="relative z-10 w-[140px] h-[140px] rounded-full bg-gradient-to-br from-indigo/20 to-cyan/10 border border-white/10 flex items-center justify-center overflow-hidden">
        {profile.avatarUrl ? (
          <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-center">
            <div className="text-4xl font-heading font-bold grad-text">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="text-xs font-mono text-muted mt-1">DevOps</div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function StatWidget() {
  const [uptime, setUptime] = useState(847392);

  useEffect(() => {
    const t = setInterval(() => setUptime(v => v + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const fmtUptime = (s) => {
    const d = Math.floor(s / 86400);
    const h = Math.floor((s % 86400) / 3600);
    const m = Math.floor((s % 3600) / 60);
    return `${d}d ${h}h ${m}m`;
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
      whileDrag={{ scale: 1.02, cursor: "grabbing" }}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="glass-lg p-6 relative overflow-hidden group cursor-grab"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 rounded-full bg-emerald animate-pulse" />
        <span className="font-mono text-sm text-muted">SYSTEM_STATUS: <span className="text-emerald">ONLINE</span></span>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between font-mono text-xs mb-1.5">
            <span className="text-muted">CPU_LOAD</span>
            <span className="text-cyan">34%</span>
          </div>
          <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }} animate={{ width: '34%' }} 
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-indigo to-cyan"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between font-mono text-xs mb-1.5">
            <span className="text-muted">MEM_USAGE</span>
            <span className="text-violet">68%</span>
          </div>
          <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }} animate={{ width: '68%' }} 
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              className="h-full bg-gradient-to-r from-violet to-indigo"
            />
          </div>
        </div>
        <div className="pt-2 border-t border-border mt-4 flex justify-between items-center font-mono text-xs">
          <span className="text-muted">UPTIME</span>
          <span className="text-text">{fmtUptime(uptime)}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-mesh">
      <FloatingShapes />
      
      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center z-10">
        
        {/* Left Col: Text */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AvailableBadge />
            <span className="badge bg-indigo/10 text-indigo border border-indigo/20 mb-4 inline-flex items-center min-w-[160px]">
              <TypeAnimation
                sequence={[
                  'Linux Engineer', 2000,
                  'VoIP Engineer', 2000,
                  'Cloud Engineer', 2000,
                  'Automation Engineer', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight tracking-tight mt-2 mb-4">
              Hi, I'm <br />
              <span className="grad-text pb-2">{profile.name.split(' ')[0]}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed">
              {profile.role} specializing in building scalable Linux infrastructure, automating deployments, and maintaining robust enterprise systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <button onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})} className="btn-grad">
                <span>View Projects</span>
              </button>
            </Magnetic>
            <Magnetic>
              <a href="mailto:ganesh928k@gmail.com" className="btn-outline">
                <IconMail size={20} />
                Contact Me
              </a>
            </Magnetic>
            <Magnetic>
              <a href="/Ganesh_Resume.pdf" download className="btn-outline">
                <IconDownload size={20} />
                Download CV
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-5 pt-4"
          >
            <Magnetic>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="text-muted hover:text-white transition-colors p-2 hover:bg-surface rounded-full">
                <IconBrandGithub size={24} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="text-muted hover:text-cyan transition-colors p-2 hover:bg-surface rounded-full">
                <IconBrandLinkedin size={24} />
              </a>
            </Magnetic>
            <div className="h-px w-12 bg-border"></div>
            <span className="text-sm font-mono text-muted">ganesh928k@gmail.com</span>
          </motion.div>
        </div>

        {/* Right Col: Visuals */}
        <div className="relative hidden md:block">
          {/* Main profile glow behind */}
          <div className="absolute inset-0 bg-grad blur-[100px] opacity-20 rounded-full" />
          
          <div className="relative z-10 flex flex-col gap-6">
            <ProfileAvatar />
            <StatWidget />
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="glass p-4 flex items-center justify-between group cursor-pointer w-[85%] ml-auto"
              onClick={() => window.open(profile.linkedin, '_blank')}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo/20 flex items-center justify-center text-indigo">
                  <IconBrandLinkedin size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white group-hover:text-cyan transition-colors">Connect on LinkedIn</h4>
                  <p className="text-xs text-muted font-mono">{profile.role}</p>
                </div>
              </div>
            </motion.div>

            {/* GitHub quick-link chip */}
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="glass p-4 flex items-center gap-3 group cursor-pointer w-[70%] hover:border-indigo/30 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-muted group-hover:text-white transition-colors">
                <IconBrandGithub size={18} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white">@{profile.githubUser}</h4>
                <p className="text-xs text-muted font-mono">github.com</p>
              </div>
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}
