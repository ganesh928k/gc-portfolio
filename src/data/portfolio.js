export const profile = {
  name: "Ganesh Choudhary",
  role: "L2 DevOps Engineer",
  tagline: "Linux | VoIP | Cloud | Automation",
  location: "Jaipur, Rajasthan, India",
  email: "gjat928@gmail.com",
  phone: "+91-8696383333",
  linkedin: "https://www.linkedin.com/in/ganesh928",
  github: "https://github.com/jaatxog",
  bio: "Detail-oriented L2 DevOps Engineer with hands-on experience in Linux infrastructure, Asterisk-based VoIP systems, SIP/PRI/GSM gateway administration, cloud fundamentals, and enterprise automation. Passionate about building reliable, scalable systems and continuously expanding expertise in cloud-native and DevOps technologies.",
};

export const skills = [
  {
    category: "Linux & OS",
    icon: "🐧",
    color: "#00ff9f",
    items: [
      { name: "CentOS / RHEL / AlmaLinux", level: 95 },
      { name: "Ubuntu / Debian", level: 90 },
      { name: "openSUSE", level: 80 },
      { name: "System Hardening & Security", level: 88 },
      { name: "User & Service Management", level: 92 },
    ]
  },
  {
    category: "VoIP & Telephony",
    icon: "📡",
    color: "#00d4ff",
    items: [
      { name: "Asterisk PBX", level: 92 },
      { name: "VICIdial Dialer", level: 90 },
      { name: "SIP / RTP Protocols", level: 88 },
      { name: "PRI / GSM Gateways", level: 85 },
      { name: "Carrier Configuration", level: 83 },
    ]
  },
  {
    category: "Cloud & Infrastructure",
    icon: "☁️",
    color: "#7b2fff",
    items: [
      { name: "Oracle Cloud (OCI)", level: 80 },
      { name: "AWS Solutions", level: 72 },
      { name: "Apache / Nginx", level: 88 },
      { name: "MySQL / MariaDB", level: 85 },
      { name: "Backup & DR", level: 82 },
    ]
  },
  {
    category: "Networking & Automation",
    icon: "🔗",
    color: "#ff6b6b",
    items: [
      { name: "Firewall / Router Config", level: 85 },
      { name: "Shell Scripting (Bash)", level: 90 },
      { name: "System Monitoring", level: 88 },
      { name: "Log Analysis", level: 85 },
      { name: "SOP Creation & Docs", level: 80 },
    ]
  }
];

export const experience = [
  {
    company: "Avyukta Intellicall",
    role: "L2 DevOps Engineer",
    period: "2024 – Present",
    type: "Promoted",
    color: "#00ff9f",
    responsibilities: [
      "Leading infrastructure upgrades and DevOps pipeline improvements",
      "Architecting scalable dialer deployments across multi-server environments",
      "Implementing CI/CD practices for configuration management",
      "Mentoring L1 engineers and reviewing escalated support cases",
      "Cloud migration planning and OCI deployment strategies",
    ]
  },
  {
    company: "Avyukta Intellicall",
    role: "Linux System & VoIP Engineer",
    period: "Jan 2023 – 2024",
    type: "Full-time",
    color: "#00d4ff",
    responsibilities: [
      "Installed, configured, and supported Asterisk & VICIdial dialer environments",
      "Managed SIP/PRI/GSM gateway integrations and optimized call routing",
      "Troubleshot call failures, SIP errors, latency, and carrier-related issues",
      "Monitored dialers for performance, dropped calls, and server load",
      "Automated repetitive tasks using shell scripts to reduce manual work",
      "Performed Linux server administration: updates, hardening, user management",
      "Handled Apache/MySQL configurations for VICIdial web and DB services",
      "Coordinated with carriers and internal teams to resolve VoIP/network issues",
      "Implemented server monitoring and created troubleshooting SOPs",
    ]
  }
];

export const projects = [
  {
    title: "Linux From Scratch (LFS)",
    desc: "Built a complete Linux system from source — compiled toolchain, kernel, bootloader, and init system entirely from scratch. Deep dive into how Linux works under the hood.",
    tags: ["Linux", "GCC", "Kernel", "Bootloader", "LFS"],
    icon: "🔧",
    color: "#00ff9f",
    highlight: "Personal Build"
  },
  {
    title: "VICIdial Multi-Server Deployment",
    desc: "Designed and deployed a high-availability VICIdial cluster with load-balanced Asterisk nodes, MySQL replication, and automated failover scripts for a 200-seat call center.",
    tags: ["VICIdial", "Asterisk", "MySQL Replication", "HA", "Bash"],
    icon: "📞",
    color: "#00d4ff",
    highlight: "Production"
  },
  {
    title: "SIP Trunk Automation Suite",
    desc: "Developed shell script suite to auto-provision SIP trunks, test carrier connectivity, log RTP packet loss, and alert via email on SIP registration failures.",
    tags: ["SIP", "Bash", "Asterisk AMI", "Monitoring", "Alerts"],
    icon: "⚡",
    color: "#7b2fff",
    highlight: "Automation"
  },
  {
    title: "Server Monitoring & SOP System",
    desc: "Built comprehensive monitoring dashboards and created a library of 40+ SOPs for Asterisk, VICIdial, Apache, MySQL — reducing incident resolution time by 60%.",
    tags: ["Monitoring", "Documentation", "Apache", "MySQL", "ITIL"],
    icon: "📊",
    color: "#ff6b6b",
    highlight: "DevOps"
  },
  {
    title: "OCI Cloud Migration Blueprint",
    desc: "Designed migration architecture for moving on-prem VoIP infrastructure to Oracle Cloud, including networking, compute provisioning, and security hardening specs.",
    tags: ["OCI", "Cloud Migration", "Networking", "Security", "Architecture"],
    icon: "☁️",
    color: "#ffd700",
    highlight: "Cloud"
  },
  {
    title: "Firewall Hardening Framework",
    desc: "Created a repeatable hardening framework for CentOS/AlmaLinux servers using firewalld, SELinux, fail2ban, and custom iptables rules with automated compliance checks.",
    tags: ["Security", "firewalld", "SELinux", "fail2ban", "CentOS"],
    icon: "🛡️",
    color: "#00ff9f",
    highlight: "Security"
  }
];

export const certifications = [
  { name: "Red Hat Certified Engineer", short: "RHCE", org: "Red Hat", color: "#ee0000", icon: "🎓" },
  { name: "Red Hat Certified System Administrator", short: "RHCSA", org: "Red Hat", color: "#ee0000", icon: "🎓" },
  { name: "Oracle Cloud Foundations Associate", short: "OCI", org: "Oracle", color: "#f80000", icon: "☁️" },
  { name: "AWS Architecting Solutions", short: "AWS", org: "Amazon", color: "#ff9900", icon: "☁️" },
];

export const education = [
  { degree: "MCA – Cloud Computing", school: "Manipal University Jaipur", year: "2025–Present" },
  { degree: "B.Voc IT/Computing Skills", school: "Bharatiya Skill Dev. University", year: "2022–2025" },
  { degree: "Bachelor of Science", school: "Singhaniya University", year: "2019–2022" },
];
