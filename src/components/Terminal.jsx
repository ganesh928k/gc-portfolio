import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

const COMMANDS = {
  whoami: () => ["ganesh_choudhary", `${profile.role} @ Avyukta Intellicall`],
  help: () => [
    "Available commands:",
    "  whoami       — show identity",
    "  skills       — list tech skills",
    "  certs        — show certifications",
    "  experience   — work history",
    "  contact      — get in touch",
    "  clear        — clear terminal",
    "  uptime       — system uptime",
    "  uname        — system info",
    "  ls projects  — list projects",
  ],
  skills: () => [
    "LINUX: CentOS, RHEL, AlmaLinux, Ubuntu, openSUSE",
    "VOIP:  Asterisk, VICIdial, SIP, PRI, GSM Gateway",
    "CLOUD: Oracle OCI, AWS Foundations",
    "WEB:   Apache, Nginx",
    "DB:    MySQL, MariaDB",
    "NET:   Firewall, Router, Switch config",
    "AUTO:  Bash scripting, Shell automation",
    "MON:   Log analysis, System monitoring",
  ],
  certs: () => [
    "✓ Red Hat Certified Engineer (RHCE)",
    "✓ Red Hat Certified System Administrator (RHCSA)",
    "✓ Oracle Cloud Foundations Associate (OCI)",
    "✓ Amazon Cloud Foundations (AWS)",
  ],
  experience: () => [
    "Avyukta Intellicall | Jan 2023 – Present",
    "  Role: L2 DevOps Engineer (promoted 2024)",
    "  Prev: Linux System & VoIP Engineer",
    "  Stack: Asterisk · VICIdial · RHEL · Bash · OCI",
  ],
  contact: () => [
    `Email:    ${profile.email}`,
    `Phone:    ${profile.phone}`,
    "LinkedIn: linkedin.com/in/ganesh928",
    `GitHub:   github.com/${profile.githubUser}`,
    `Location: ${profile.location}`,
  ],
  uptime: () => {
    const s = 847392 + Math.floor(Date.now() / 1000) % 1000;
    const d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600), m = Math.floor((s % 3600) / 60);
    return [`up ${d} days, ${h} hours, ${m} minutes, load average: 0.42 0.38 0.31`];
  },
  uname: () => ["Linux ganesh-server 5.14.0-284.30.1.el9 #1 SMP AlmaLinux 9.3 x86_64 GNU/Linux"],
  "ls projects": () => [
    "drwxr-xr-x  linux-from-scratch/",
    "drwxr-xr-x  vicidial-cluster/",
    "drwxr-xr-x  sip-automation-suite/",
    "drwxr-xr-x  monitoring-sop-system/",
    "drwxr-xr-x  oci-migration-blueprint/",
    "drwxr-xr-x  firewall-hardening-fw/",
  ],
};

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: "system", text: "Welcome to Ganesh's Portfolio Terminal v1.0.0" },
    { type: "system", text: 'Type "help" to see available commands.' },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const run = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: "input", text: `$ ${cmd}` }];

    if (trimmed === "clear") {
      setHistory([{ type: "system", text: 'Terminal cleared. Type "help" for commands.' }]);
    } else if (COMMANDS[trimmed]) {
      const output = COMMANDS[trimmed]();
      setHistory([...newHistory, ...output.map(t => ({ type: "output", text: t }))]);
    } else if (trimmed === "") {
      setHistory([...newHistory]);
    } else {
      setHistory([...newHistory, {
        type: "error",
        text: `bash: ${cmd}: command not found. Type "help" for available commands.`
      }]);
    }

    setCmdHistory(h => [cmd, ...h].slice(0, 50));
    setHistIdx(-1);
    setInput("");
  };

  const onKey = (e) => {
    if (e.key === "Enter") { run(input); }
    else if (e.key === "ArrowUp") {
      const idx = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(idx);
      setInput(cmdHistory[idx] || "");
      e.preventDefault();
    }
    else if (e.key === "ArrowDown") {
      const idx = Math.max(histIdx - 1, -1);
      setHistIdx(idx);
      setInput(idx === -1 ? "" : cmdHistory[idx]);
      e.preventDefault();
    }
  };

  return (
    <section id="terminal" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Terminal window */}
          <div className="glow-border rounded-lg overflow-hidden bg-[#0a1628]">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0f2545]/80 border-b border-[#0f2545]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="font-mono text-xs text-slate-400 ml-3">ganesh@portfolio:~$</span>
              <span className="ml-auto font-mono text-xs text-[#00ff9f]">● ACTIVE</span>
            </div>

            {/* Output area */}
            <div
              className="p-4 h-72 overflow-y-auto font-mono text-sm cursor-text"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((line, i) => (
                <div
                  key={i}
                  className={`leading-6 ${
                    line.type === "input" ? "text-[#00d4ff]"
                    : line.type === "error" ? "text-[#ff6b6b]"
                    : line.type === "system" ? "text-[#7b2fff]"
                    : "text-[#00ff9f]"
                  }`}
                >
                  {line.text}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input row */}
            <div className="flex items-center gap-2 px-4 py-3 border-t border-[#0f2545] bg-[#020912]/50">
              <span className="font-mono text-xs text-[#00ff9f] flex-shrink-0">ganesh@portfolio:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={onKey}
                className="min-w-0 flex-1 bg-transparent outline-none font-mono text-sm text-white caret-[#00ff9f]"
                placeholder="type a command..."
                autoComplete="off"
                spellCheck={false}
              />
            </div>
          </div>

          {/* Quick commands */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {["help", "skills", "certs", "experience", "contact", "ls projects"].map(cmd => (
              <button
                key={cmd}
                onClick={() => run(cmd)}
                className="font-mono text-xs px-3 py-1.5 border border-[#0f2545] text-slate-400 rounded hover:border-[#00ff9f]/50 hover:text-[#00ff9f] transition-all duration-200"
              >
                {cmd}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
