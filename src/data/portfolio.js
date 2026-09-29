export const profile = {
  name: "Ganesh Choudhary",
  role: "DevOps Engineer @ Lynx Solutions",
  tagline: "RHCE & RHCSA | Multi-Cloud Fleet & SRE | Observability & Telephony",
  location: "Jaipur, Rajasthan, India",
  email: "ganesh928k@gmail.com",
  phone: "+91-8696383333",
  linkedin: "https://www.linkedin.com/in/ganesh928k",
  github: "https://github.com/ganesh928k",
  githubUser: "ganesh928k",
  avatarUrl: "https://avatars.githubusercontent.com/u/125724916?v=4",
  bio: "RHCE & RHCSA certified DevOps Engineer managing 60+ active production Linux nodes across multi-cloud infrastructure. Specialized in zero-alert SRE observability (Prometheus/Grafana), Docker Compose container orchestration on ARM64, Redis in-memory streaming, and high-availability Asterisk/VICIdial telephony clusters.",
};

export const skills = [
  {
    category: "Linux Fleet & OS",
    icon: "🐧",
    color: "#6366f1",
    items: [
      { name: "Production Linux Fleet (60+ Nodes)", level: 96 },
      { name: "RHEL / Rocky / AlmaLinux / CentOS", level: 95 },
      { name: "Ubuntu / Debian / openSUSE", level: 90 },
      { name: "Kernel Tuning, LVM & Storage Recovery", level: 92 },
      { name: "System Hardening & Zero-Trust Access", level: 94 },
    ]
  },
  {
    category: "SRE, Cloud & Containers",
    icon: "☁️",
    color: "#8b5cf6",
    items: [
      { name: "Prometheus, Grafana & Node Exporter", level: 94 },
      { name: "Docker & Docker Compose (x86_64 / ARM64)", level: 92 },
      { name: "AWS & Oracle Cloud (OCI)", level: 85 },
      { name: "Redis In-Memory Streaming & Caching", level: 88 },
      { name: "FinOps & Multi-Cloud Infrastructure Audits", level: 86 },
    ]
  },
  {
    category: "VoIP & Telecom Infrastructure",
    icon: "📡",
    color: "#06b6d4",
    items: [
      { name: "Asterisk PBX & VICIdial Clusters", level: 95 },
      { name: "SIP / RTP / PRI / GSM Gateways", level: 90 },
      { name: "Kamailio SIP Proxy & Load Balancing", level: 86 },
      { name: "MariaDB Galera Multi-Master Replication", level: 88 },
      { name: "Keepalived VIP Automated Failover", level: 87 },
    ]
  },
  {
    category: "Automation, CI/CD & Security",
    icon: "🔗",
    color: "#10b981",
    items: [
      { name: "Shell Scripting (Bash) & Python Automation", level: 94 },
      { name: "Automated Role-Based SSH Governance CLI", level: 92 },
      { name: "CI/CD Deployment Pipelines & GitOps", level: 88 },
      { name: "Firewall (iptables / firewalld) & Network Tuning", level: 90 },
      { name: "Automated Offsite Backup (Rsync/SSH/GPG)", level: 90 },
    ]
  }
];

export const experience = [
  {
    company: "Lynx Solutions",
    role: "DevOps Engineer",
    period: "Aug 2026 – Present",
    type: "Current Role",
    color: "#6366f1",
    responsibilities: [
      "Manage 60+ active production Linux nodes across multi-cloud infrastructure ensuring 99.99% uptime and zero-alert observability",
      "Migrate monolithic enterprise workloads into containerized Docker Compose microservice fleets on ARM64 nodes with automated health checks",
      "Architect centralized Prometheus, Grafana, Node Exporter, and Alertmanager telemetry, achieving zero false-positive alerts",
      "Deploy and maintain Redis in-memory streaming pipelines for low-latency asynchronous workload processing",
      "Perform multi-cloud FinOps infrastructure audits optimizing recurring cloud spend across all operating regions"
    ]
  },
  {
    company: "Avyukta Intellicall Consulting",
    role: "L2 DevOps Engineer / Infra Lead",
    period: "2024 – Aug 2026",
    type: "Promoted",
    color: "#06b6d4",
    responsibilities: [
      "Architected high-availability VICIdial telephony clusters with MariaDB Galera multi-master replication and Keepalived VIP failover",
      "Developed automated role-based SSH governance and developer access CLI platforms to enforce least-privilege security",
      "Led production disaster recovery initiatives, securing 97.5% load reduction and 200+ GB saturated storage recovery with zero downtime",
      "Mentored L1 support engineers and served as final technical escalation authority for critical production incidents",
      "Configured and hardened Linux environments across CentOS, AlmaLinux, and openSUSE distributions"
    ]
  },
  {
    company: "Avyukta Intellicall Consulting",
    role: "Linux System & VoIP Engineer",
    period: "2023 – 2024",
    type: "Full-Time",
    color: "#8b5cf6",
    responsibilities: [
      "Provisioned and maintained production Linux servers for global telecom and VoIP clients",
      "Configured Asterisk PBX trunks, SIP routing logic, and PRI/GSM telecom gateways",
      "Troubleshot complex networking issues, packet drops, RTP latency, and firewall routing policies",
      "Engineered automated offsite backup routines using Rsync over SSH with GPG encryption"
    ]
  },
  {
    company: "Avyukta Intellicall Consulting",
    role: "L1 Support Engineer Intern",
    period: "Jan 2023 – Aug 2023",
    type: "Internship",
    color: "#10b981",
    responsibilities: [
      "Started career delivering foundational Linux support and telephony system troubleshooting",
      "Assisted senior infrastructure engineers with server maintenance, system health checks, and log monitoring",
      "Automated initial incident triaging workflows for customer server infrastructure"
    ]
  }
];

export const projects = [
  {
    title: "Enterprise Multi-Cloud Observability Suite",
    description: "Centralized monitoring and telemetry suite across 60+ active production Linux nodes in multi-cloud infrastructure. Engineered granular Node Exporter telemetry, custom Grafana operational dashboards, and proactive Alertmanager thresholds, achieving zero false-positive alerts.",
    tech: ["Prometheus", "Grafana", "Node Exporter", "Alertmanager", "Multi-Cloud"],
    github: "https://github.com/ganesh928k",
    link: null,
    icon: "📊"
  },
  {
    title: "Monolithic Enterprise Microservices Modernization",
    description: "Containerized legacy monolithic enterprise workloads into isolated Docker Compose microservice fleets running on cost-effective ARM64 Linux nodes. Implemented automated health check loops, isolated network bridges, and zero-downtime rolling maintenance.",
    tech: ["Docker Compose", "ARM64", "Microservices", "Nginx", "Linux"],
    github: "https://github.com/ganesh928k",
    link: null,
    icon: "🐳"
  },
  {
    title: "Automated Role-Based SSH Governance CLI Engine",
    description: "Engineered an automated Python/Bash CLI security platform managing developer SSH access, cryptographic key rotation, and granular sudo privileges across multi-cloud server fleets. Enforced zero-trust credential hygiene and instant revocation.",
    tech: ["Python", "Bash", "SSH Hardening", "Security", "Linux"],
    github: "https://github.com/ganesh928k",
    link: null,
    icon: "🔒"
  },
  {
    title: "High-Availability VICIdial VoIP Cluster",
    description: "Architected enterprise-grade telephony dialer infrastructure featuring MariaDB Galera multi-master clustering, Keepalived Virtual IP (VIP) automated failover, and Kamailio SIP load balancing to handle high-concurrency carrier call traffic with zero downtime.",
    tech: ["Asterisk", "VICIdial", "MariaDB Galera", "Keepalived", "Kamailio"],
    github: "https://github.com/ganesh928k",
    link: null,
    icon: "📞"
  }
];

export const certifications = [
  {
    name: "Red Hat Certified Engineer (RHCE)",
    issuer: "Red Hat",
    year: "2024",
    status: "Completed"
  },
  {
    name: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Red Hat",
    year: "2023",
    status: "Completed"
  },
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    year: "Target: April 2026",
    status: "In Progress"
  },
  {
    name: "Oracle Cloud Infrastructure (OCI) Foundations",
    issuer: "Oracle",
    year: "2023",
    status: "Completed"
  }
];
