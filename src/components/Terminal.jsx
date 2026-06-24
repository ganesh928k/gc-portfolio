import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const COMMANDS = {
  help:       'Available commands: whoami, skills, experience, certs, contact, uptime, clear',
  whoami:     'Ganesh Choudhary\nRole    : L2 DevOps & Linux Systems Engineer\nLocation: Jaipur, Rajasthan, India\nStatus  : ● Available for Opportunities',
  skills:     'Linux     : CentOS / AlmaLinux / Ubuntu / RHEL [95%]\nVoIP      : Asterisk PBX / VICIdial / SIP / PRI  [92%]\nCloud     : Oracle OCI / AWS Solutions Architect  [80%]\nScripting : Bash / Shell Automation               [90%]\nDatabase  : MySQL / MariaDB                       [85%]\nNetworking: Firewall / Routing / Packet Analysis  [85%]',
  experience: 'Avyukta Intellicall — L2 DevOps Engineer (2024–Present)\n  ↳ Promoted: Leading infra upgrades & CI/CD improvements\n\nAvyukta Intellicall — Linux & VoIP Engineer (2023–2024)\n  ↳ PBX/Asterisk, SIP routing, system hardening\n\nAvyukta Intellicall — L1 Support Intern (2023)\n  ↳ Foundational IT support & server monitoring',
  certs:      '✓ RHCSA — Red Hat Certified System Administrator (2023)\n✓ RHCE  — Red Hat Certified Engineer (2024)\n✓ AWS   — Architecting Solutions on AWS (April 2026)\n✓ OCI   — Oracle Cloud Infrastructure Foundations (2023)',
  contact:    'Email   : ganesh928k@gmail.com\nPhone   : +91-8696383333\nLinkedIn: linkedin.com/in/ganesh928k\nGitHub  : github.com/ganesh928k',
  uptime:     'System uptime: 9d 14h 22m\nServices: asterisk ● | nginx ● | mysqld ● | sshd ●\nLoad avg: 0.42, 0.38, 0.31',
  sudo:       '[sudo] password for guest: \nSorry, try again.\n[sudo] password for guest: \nSorry, user guest is not in the sudoers file. This incident will be reported.',
};

const Typewriter = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 20); // typing speed
    return () => clearInterval(interval);
  }, [text, onComplete]);

  return <span className="whitespace-pre-wrap">{displayedText}</span>;
};

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to gc-portfolio terminal v2.0.0', isTyping: false },
    { type: 'output', text: 'Type "help" for available commands.', isTyping: false }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleCommand = (e) => {
    if (e.key === 'Enter' && !isTyping) {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: 'input', text: `guest@gc-portfolio:~$ ${cmd}` }];
      
      if (cmd === 'clear') {
        setHistory([]);
      } else if (cmd === '') {
        setHistory(newHistory);
      } else if (COMMANDS[cmd]) {
        setIsTyping(true);
        newHistory.push({ type: 'output', text: COMMANDS[cmd], isTyping: true });
        setHistory(newHistory);
      } else {
        setIsTyping(true);
        newHistory.push({ type: 'error', text: `bash: ${cmd}: command not found`, isTyping: true });
        setHistory(newHistory);
      }
      
      setInput('');
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
    }
  };

  const handleTypingComplete = (index) => {
    setIsTyping(false);
    setHistory(prev => prev.map((item, i) => i === index ? { ...item, isTyping: false } : item));
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
  };

  return (
    <section className="py-4 relative z-10" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0A0E17] hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-shadow duration-500"
        >
          {/* Terminal Window Chrome */}
          <div className="bg-[#1C212B] px-4 py-3 flex items-center border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="flex-1 text-center font-mono text-xs text-muted/70 flex items-center justify-center gap-2">
              <span className="text-cyan">~</span> /home/guest
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm h-80 overflow-y-auto" onClick={() => document.getElementById('term-input')?.focus()}>
            {history.map((line, i) => (
              <div key={i} className={`mb-2 ${line.type === 'error' ? 'text-rose' : 'text-slate-300'}`}>
                {line.type === 'input' ? (
                  <span dangerouslySetInnerHTML={{ __html: line.text.replace('guest@gc-portfolio:~$', '<span class="text-emerald">guest@gc-portfolio</span><span class="text-white">:</span><span class="text-cyan">~</span><span class="text-white">$</span>') }} />
                ) : (
                  line.isTyping ? <Typewriter text={line.text} onComplete={() => handleTypingComplete(i)} /> : <span className="whitespace-pre-wrap">{line.text}</span>
                )}
              </div>
            ))}
            
            <div className={`flex items-center text-slate-300 ${isTyping ? 'opacity-50 pointer-events-none' : ''}`}>
              <span className="text-emerald">guest@gc-portfolio</span><span className="text-white">:</span><span className="text-cyan">~</span><span className="text-white mr-2">$</span>
              <input
                id="term-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="bg-transparent border-none outline-none focus:outline-none focus-visible:outline-none flex-1 text-slate-300 font-mono"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
