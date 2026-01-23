// Portfolio content for Meer Modi

export const personalInfo = {
  name: "Meer Modi",
  title: "Software Developer",
  tagline: "Crafting innovative solutions with modern tech stacks",
  location: "New Jersey, United States",
  email: "meer@meermodi.dev", // Update with your actual email
  linkedin: "https://linkedin.com/in/meermodi", // Update with your actual LinkedIn
  github: "https://github.com/meermodi", // Update with your actual GitHub
  resume: "/MeerModi_Resume.pdf"
};

export const about = {
  summary: "Software Developer with expertise in full-stack development, cloud infrastructure, and AI-driven solutions. Passionate about building scalable applications and solving complex technical challenges. Currently working on production systems serving 1200+ users while driving operational efficiency improvements.",
  highlights: [
    "Full-stack development with React, TypeScript, Node.js",
    "Cloud infrastructure and DevOps with Azure and AWS",
    "AI/ML integration and automation solutions",
    "Production systems serving 1200+ users",
    "Agile methodologies and CI/CD workflows"
  ]
};

export const experience = [
  {
    id: 1,
    company: "FM",
    logo: "FM", // You can replace with actual logo path later
    role: "Software Developer",
    duration: "Jul 2025 - Present",
    period: "7 mos",
    location: "New Jersey, United States • Remote",
    type: "Full-time",
    description: "Fixed critical production bugs, designed and developed feature requests, and resolved user reported issues across the Polaris application.",
    achievements: [
      "Implemented complex React/TypeScript components with GraphQL integration, Node.js backend, and Hasura GraphQL engine for real time data management serving 1200+ users",
      "Followed Azure DevOps CI/CD workflows with mandatory PR approvals progressing through Dev, QA, UAT, and Prod environments",
      "Tracked and prioritized production bugs using Kanban boards, ensured code quality through peer reviews and automated testing",
      "Maintained deployment standards via Docker containerization",
      "Collaborated across multiple teams using Agile methodologies including daily stand-ups and sprint planning",
      "Leveraged TailwindCSS component libraries to ensure consistent UI/UX across multiple application modules"
    ],
    skills: ["React", "TypeScript", "GraphQL", "Node.js", "Hasura", "Azure DevOps", "Docker", "TailwindCSS", "Agile"]
  },
  {
    id: 2,
    company: "New Jersey Courts",
    logo: "NJC",
    role: "Cyber Security Project Manager",
    duration: "Sep 2025 - Dec 2025",
    period: "4 mos",
    location: "Newark, New Jersey, United States • Remote",
    type: "Internship",
    description: "Architected and managed the development of a security-first fraud detection platform with AI-powered threat analysis.",
    achievements: [
      "Architected security-first fraud detection platform integrating Azure OpenAI-powered threat analysis, encrypted PostgreSQL storage, APIs, and automated alerting pipelines",
      "Reduced fraud detection time from 40 hours to 5 minutes while processing 4,000+ monthly transactions",
      "Designed and developed end-to-end workflows, technical documentation, risk thresholds, and reporting pipelines"
    ],
    skills: ["Azure OpenAI", "PostgreSQL", "API Development", "Security", "Project Management", "Documentation"]
  },
  {
    id: 3,
    company: "New Jersey Courts",
    logo: "NJC",
    role: "IT Analyst 1",
    duration: "Jun 2024 - Dec 2025",
    period: "1 yr 7 mos",
    location: "Bridgeton, New Jersey, United States • On-site",
    type: "Full-time",
    description: "Delivered comprehensive IT support and system administration for 500+ employees while implementing technology rollouts.",
    achievements: [
      "Assisted in planning, designing, and implementing technology rollouts, including Windows Server administration, Group Policy management, MECM software deployments, and Azure AD configurations",
      "Delivered technical support to 500+ employees through IT Helpdesk using Microsoft Teams and Outlook",
      "Collaborated with stakeholders using Agile processes, troubleshooting hardware/software issues and training end users",
      "Contributed to security compliance and system maintenance, documenting standards and applying updates"
    ],
    skills: ["Microsoft Azure", "Windows Server", "Group Policy", "MECM", "Azure AD", "Microsoft Teams", "IT Support"]
  },
  {
    id: 4,
    company: "Merck",
    logo: "Merck",
    role: "AI Cloud Engineer",
    duration: "May 2025 - Aug 2025",
    period: "4 mos",
    location: "Rahway, New Jersey, United States • Hybrid",
    type: "Internship",
    description: "Led AI initiatives within Merck's BlueSky Edge program, developing enterprise-grade AI agents and MCP servers.",
    achievements: [
      "Designed and implemented enterprise-grade AI Agents with LangChain on AgentGPT enabling autonomous ticket creation, editing, prioritization, and AI-powered contextual retrieval via natural language input",
      "Deployed Model Context Protocol (MCP) servers integrating GitHub Copilot with standardized AWS IaC Terraform modules",
      "Implemented semantic code analysis, compliance validation pipelines, and automated security policy enforcement",
      "Led initiatives achieving $20M in operational cost reduction through development of Agentic AI, MCP servers, and multi agent orchestration pipelines"
    ],
    skills: ["AI Agents", "LangChain", "GitHub Copilot", "AWS", "Terraform", "MCP", "Semantic Analysis", "Security"]
  },
  {
    id: 5,
    company: "P&F Solutions",
    logo: "P&F",
    role: "Cloud Engineer",
    duration: "Sep 2024 - Jan 2025",
    period: "5 mos",
    location: "New Jersey, United States • Remote",
    type: "Internship",
    description: "Architected scalable cloud infrastructure using Terraform IaC with optimized network design and security best practices.",
    achievements: [
      "Architected scalable cloud infrastructure using Terraform IaC with hub-spoke network, optimized CIDR allocation, VNet peering, and automated pipelines",
      "Achieved 25% deployment efficiency improvement",
      "Configured enterprise VMs, SDN components, and storage with security best practices including NSGs and Azure Policy governance",
      "Developed comprehensive technical documentation including network architecture diagrams, CIDR planning spreadsheets, and disaster recovery runbooks"
    ],
    skills: ["Terraform", "Azure", "Cloud Architecture", "Infrastructure as Code", "Networking", "Security", "Documentation"]
  },
  {
    id: 6,
    company: "New Jersey Institute of Technology",
    logo: "NJIT",
    role: "Teaching Assistant - Data & Computer Science",
    duration: "Jan 2023 - Dec 2024",
    period: "2 yrs",
    location: "Newark, New Jersey, United States • On-site",
    type: "Part-time",
    description: "Facilitated learning and provided technical guidance for Data Science and Computer Science courses.",
    achievements: [
      "Taught fundamentals of Java and Python, along with core software development concepts and Object-Oriented Programming (OOP)",
      "Provided expert guidance in debugging and software troubleshooting to solve technical issues",
      "Conducted comprehensive grading of assignments and hosted 20+ labs for Data Science and Computer Science courses",
      "Enhanced student learning outcomes through accuracy and constructive feedback"
    ],
    skills: ["Java", "Python", "Object-Oriented Programming", "Teaching", "Debugging", "Software Troubleshooting"]
  }
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Fraud Detection Platform",
    description: "Security-first fraud detection system with Azure OpenAI integration, reducing detection time from 40 hours to 5 minutes.",
    technologies: ["Azure OpenAI", "PostgreSQL", "APIs", "Security", "Azure"],
    highlights: [
      "40 hours → 5 minutes detection time",
      "4,000+ monthly transactions processed",
      "Encrypted PostgreSQL storage",
      "Automated alerting pipelines"
    ],
    type: "Security & AI",
    featured: true
  },
  {
    id: 2,
    title: "Enterprise AI Agents Platform",
    description: "Enterprise-grade AI agents with LangChain enabling autonomous ticket management and contextual retrieval.",
    technologies: ["LangChain", "AgentGPT", "AI Agents", "Natural Language Processing"],
    highlights: [
      "Autonomous ticket creation & editing",
      "AI-powered contextual retrieval",
      "Natural language input interface",
      "Enterprise-grade architecture"
    ],
    type: "AI & Automation",
    featured: true
  },
  {
    id: 3,
    title: "Polaris Application Platform",
    description: "Production React/TypeScript application serving 1200+ users with real-time data management.",
    technologies: ["React", "TypeScript", "GraphQL", "Node.js", "Hasura", "TailwindCSS"],
    highlights: [
      "1200+ active users",
      "Real-time data management",
      "Complex component architecture",
      "Production-ready deployment"
    ],
    type: "Full-Stack Development",
    featured: true
  },
  {
    id: 4,
    title: "Cloud Infrastructure Automation",
    description: "Scalable cloud infrastructure with Terraform IaC, achieving 25% deployment efficiency improvement.",
    technologies: ["Terraform", "Azure", "Infrastructure as Code", "Networking", "Security"],
    highlights: [
      "25% deployment efficiency improvement",
      "Hub-spoke network architecture",
      "Automated deployment pipelines",
      "Enterprise security compliance"
    ],
    type: "Cloud & DevOps",
    featured: false
  }
];

export const skills = {
  "Programming Languages": ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
  "Frontend": ["React", "Next.js", "TailwindCSS", "HTML5", "CSS3", "GraphQL"],
  "Backend": ["Node.js", "Express", "RESTful APIs", "Hasura", "PostgreSQL"],
  "Cloud & DevOps": ["Azure", "AWS", "Terraform", "Docker", "CI/CD", "Azure DevOps"],
  "AI & ML": ["LangChain", "Azure OpenAI", "AI Agents", "MCP", "Semantic Analysis"],
  "Tools & Methods": ["Git", "Agile", "Kanban", "MECM", "Windows Server", "Linux"]
};

export const contact = {
  title: "Let's Build Something Great Together",
  description: "I'm always interested in discussing new opportunities, innovative projects, or just connecting with fellow developers.",
  cta: "Get in Touch"
};