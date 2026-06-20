export const profile = {
  name: "Ganesh Choudhary",
  role: "L2 IT Support & DevOps Engineer",
  tagline: "Linux | VoIP | Cloud | Automation",
  location: "Jaipur, Rajasthan, India",
  email: "ganesh928k@gmail.com",
  phone: "+91-8696383333",
  linkedin: "https://www.linkedin.com/in/ganesh928k",
  github: "https://github.com/ganesh928k",
  githubUser: "ganesh928k",
  bio: "Detail-oriented L2 IT Support and DevOps Engineer with strong roots as a Linux System Administrator. I have hands-on experience in Linux infrastructure, Asterisk-based VoIP systems, SIP/PRI/GSM gateway administration, and enterprise automation. Passionate about building reliable, scalable systems.",
};

export const skills = [
  {
    category: "Linux & OS",
    icon: "🐧",
    color: "#6366f1",
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
    color: "#06b6d4",
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
    color: "#8b5cf6",
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
    color: "#10b981",
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
    color: "#06b6d4",
    responsibilities: [
      "Leading infrastructure upgrades and DevOps pipeline improvements",
      "Architecting scalable dialer deployments across multi-server environments",
      "Implementing CI/CD practices for configuration management",
      "Mentoring L1 support team and handling critical escalations",
      "Managing complex networking and firewall rules across global deployments",
    ]
  },
  {
    company: "Avyukta Intellicall",
    role: "Linux System & VoIP Engineer",
    period: "2023 – 2024",
    type: "Full-Time",
    color: "#6366f1",
    responsibilities: [
      "Installed, configured, and maintained Linux servers for global clients",
      "Managed PBX/Asterisk instances, trunk setups, and SIP routing",
      "Troubleshot networking issues, packet loss, and latency problems",
      "Handled backup, disaster recovery, and system hardening",
    ]
  },
  {
    company: "Avyukta Intellicall",
    role: "L1 Support Engineer Intern",
    period: "2023",
    type: "Internship",
    color: "#10b981",
    responsibilities: [
      "Started career by providing foundational IT support and troubleshooting.",
      "Assisted senior engineers in managing Linux servers and VoIP systems.",
      "Handled initial escalations and system monitoring tasks.",
    ]
  }
];

export const projects = [
  {
    title: "VICIdial Cluster Architecture",
    description: "Architected and deployed a highly available VICIdial cluster setup, segregating Web, MySQL, and Asterisk telephony servers to handle large-scale concurrent calls efficiently.",
    tech: ["Asterisk", "VICIdial", "MySQL", "Clustering"],
    github: "https://github.com/ganesh928k",
    link: null,
    icon: "📞"
  },
  {
    title: "Cross-Platform VICIdial Installations",
    description: "Performed from-scratch installations and configurations of VICIdial across multiple operating systems including openSUSE, CentOS, and AlmaLinux.",
    tech: ["Linux", "openSUSE", "CentOS", "AlmaLinux"],
    github: "https://github.com/ganesh928k",
    link: null,
    icon: "🐧"
  },
  {
    title: "Node.js OpenWA Docker Setup",
    description: "Configured and deployed a containerized Node.js application (OpenWA) using Docker for the internal development team, ensuring isolated and reproducible environments.",
    tech: ["Node.js", "Docker", "OpenWA", "Containers"],
    github: "https://github.com/ganesh928k",
    link: null,
    icon: "🐳"
  },
  {
    title: "Secure Remote Backup System",
    description: "Automated offsite backup strategy using Rsync over SSH with GPG encryption, ensuring data integrity and quick disaster recovery.",
    tech: ["Rsync", "SSH", "GPG", "Automation"],
    github: "https://github.com/ganesh928k",
    link: null,
    icon: "🔒"
  }
];

export const certifications = [
  {
    name: "Architecting Solutions on AWS",
    issuer: "Amazon Web Services",
    year: "April 2026",
    status: "Completed"
  },
  {
    name: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Red Hat",
    year: "2023",
    status: "Completed"
  },
  {
    name: "Red Hat Certified Engineer (RHCE)",
    issuer: "Red Hat",
    year: "2024",
    status: "Completed"
  },
  {
    name: "Oracle Cloud Infrastructure Foundations",
    issuer: "Oracle",
    year: "2023",
    status: "Completed"
  }
];
