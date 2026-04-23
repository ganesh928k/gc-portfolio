import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

const ROLES = [
  "L2 DevOps Engineer",
  "Linux Systems Engineer",
  "VoIP Infrastructure Specialist",
  "Cloud & Automation Engineer",
  "RHCE Certified",
];

function useTyping(words, speed = 80, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    const current = words[wordIdx];
    if (!deleting && charIdx < current.length) {
      timeout.current = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout.current = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }
    setText(current.slice(0, charIdx));
    return () => clearTimeout(timeout.current);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return text;
}

// Floating particle
function Particle({ x, y, size, duration, delay }) {
  return (
    <motion.div
      className="absolute rounded-full bg-[#00ff9f] pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, opacity: 0.3 }}
      animate={{ y: [0, -30, 0], opacity: [0.1, 0.4, 0.1] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

// Stat widget
function StatWidget() {
  const [cpu, setCpu] = useState(42);
  const [mem, setMem] = useState(67);
  const [uptime, setUptime] = useState(847392);

  useEffect(() => {
    const t = setInterval(() => {
      setCpu(v => Math.max(15, Math.min(95, v + (Math.random() - 0.5) * 8 | 0)));
      setMem(v => Math.max(40, Math.min(90, v + (Math.random() - 0.5) * 4 | 0)));
      setUptime(v => v + 1);
    }, 1500);
    return () => clearInterval(t);
  }, []);

  const fmtUptime = (s) => {
    const d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600), m = Math.floor((s % 3600) / 60);
    return `${d}d ${h}h ${m}m`;
  };

  const bar = (val, color) => (
    <div className="skill-bar flex-1">
      <div className="skill-fill" style={{ width: `${val}%`, background: color }} />
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="glow-border corner-box bg-[#0a1628]/90 rounded-lg p-4 font-mono text-xs w-64"
    >
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#0f2545]">
        <span className="w-2 h-2 rounded-full bg-[#00ff9f] ping-slow inline-block" />
        <span className="text-[#00ff9f] tracking-wider">SYSTEM STATUS</span>
        <span className="ml-auto text-slate-500">LIVE</span>
      </div>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-slate-400 mb-1">
            <span>CPU LOAD</span>
            <span style={{ color: cpu > 70 ? "#ff6b6b" : "#00ff9f" }}>{cpu}%</span>
          </div>
          {bar(cpu, cpu > 70 ? "linear-gradient(90deg,#ff6b6b,#ff4444)" : "linear-gradient(90deg,#00ff9f,#00d4ff)")}
        </div>
        <div>
          <div className="flex justify-between text-slate-400 mb-1">
            <span>MEMORY</span>
            <span className="text-[#00d4ff]">{mem}%</span>
          </div>
          {bar(mem, "linear-gradient(90deg,#00d4ff,#7b2fff)")}
        </div>
        <div className="flex justify-between text-slate-400">
          <span>UPTIME</span>
          <span className="text-[#00ff9f]">{fmtUptime(uptime)}</span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>STATUS</span>
          <span className="text-[#00ff9f]">● ONLINE</span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>ENV</span>
          <span className="text-slate-300">AlmaLinux 9.3</span>
        </div>
      </div>
    </motion.div>
  );
}

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 3,
}));

export default function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section id="hero" className="relative min-h-screen grid-bg flex items-center overflow-hidden scanlines">
      {/* Particles */}
      {PARTICLES.map(p => <Particle key={p.id} {...p} />)}

      {/* Gradient blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#00ff9f]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#7b2fff]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left: Text content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-[#00ff9f] text-sm tracking-widest mb-4"
            >
              <span className="text-slate-500">$ </span>whoami
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-black mb-2 leading-none"
            >
              <span className="text-white">GANESH</span>
              <br />
              <span className="gradient-text">CHOUDHARY</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="font-mono text-lg sm:text-xl text-[#00d4ff] mb-6 h-8"
            >
              <span className="cursor">{typed}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="text-slate-400 max-w-lg text-base leading-relaxed mb-8"
            >
              {profile.bio}
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {["RHCE", "RHCSA", "OCI", "AWS", "Asterisk", "VICIdial", "AlmaLinux"].map(tag => (
                <span key={tag} className="font-mono text-xs px-3 py-1 border border-[#00ff9f]/30 text-[#00ff9f] rounded-sm bg-[#00ff9f]/5">
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="px-6 py-3 font-mono text-sm font-semibold bg-[#00ff9f] text-[#020912] rounded hover:bg-[#00d4ff] transition-all duration-200 tracking-widest"
              >
                HIRE ME
              </a>
              <a
                href="#projects"
                className="px-6 py-3 font-mono text-sm glow-border text-[#00ff9f] rounded hover:bg-[#00ff9f]/10 transition-all duration-200 tracking-widest"
              >
                VIEW WORK
              </a>
              <a
                href="https://github.com/ganesh928k"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 font-mono text-sm border border-[#0f2545] text-slate-400 rounded hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all duration-200 tracking-widest"
              >
                GITHUB ↗
              </a>
            </motion.div>
          </div>

          {/* Right: Stats widget */}
          <div className="flex flex-col gap-4 items-center lg:items-end">
            <StatWidget />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="font-mono text-xs text-slate-500 text-center"
            >
              📍 {profile.location}
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="font-mono text-xs text-slate-600 tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-[#00ff9f] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
