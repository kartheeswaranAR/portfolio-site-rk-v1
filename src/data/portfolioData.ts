export interface Project {
  id: number;
  title: string;
  year?: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  status?: string;
  statusColor?: string;
  statusGlow?: string;
  caseStudy?: {
    problem?: string;
    solution?: string;
    result?: string;
  };
}

export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  company?: string;
  location?: string;
  description: string;
  type: 'education' | 'experience' | 'publication';
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface TechItem {
  name: string;
  icon: string;
  docs: string;
}

export interface TechGroup {
  label: string;
  items: TechItem[];
}

export const PROFILE_DATA = {
  name: "Kartheeswaran Rajasekaran",
  role: "Software Engineer | Enterprise Backend & Real-Time UAV Systems",
  availability: "Open to backend & systems engineering roles",
  location: "Coimbatore, Tamil Nadu, India",
  email: "kartheeswaran.dev@outlook.com",
  github: "https://github.com/kartheeswaranar",
  linkedin: "https://www.linkedin.com/in/kartheeswaranr/",
  phone: "+91 9025826572",
  x: "https://x.com/Karthees_offcl",
  devto: "https://dev.to/kartheeswaran1921",
  medium: "https://medium.com/@kartheeswaranoff",
  instagram: "https://www.instagram.com/yurs_ark/",
  resumeUrl: "/Kartheeswaran_Resume.pdf",
  bio: "Software Engineer with 2.5+ years of experience designing scalable, high-performance web applications and enterprise backend microservices (ASP.NET Core, Django REST Framework, Express.js) integrated with real-time autonomous hardware protocols (MAVLink, WebSockets, Pixhawk). Experienced in secure API architectures (JWT, OAuth2, RBAC), cloud-native deployments on Azure and Linux VPS environments, database indexing, and CI/CD automation.",
  philosophy: "Good systems engineering is about predictability under pressure. Whether processing 100,000+ daily enterprise transactions or streaming real-time MAVLink telemetry in flight, quiet and resilient software always wins.",
  metrics: {
    telemetryLatency: "<100ms",
    dailyTransactions: "100k+",
    productionUptime: "99.5%",
    queryOptimization: "+40%",
    experienceYears: "2.5+"
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Political Party Management Portal",
    year: "Oct 2025 – Jan 2026",
    description: "Scalable party administration backend platform featuring <span class='gradient-highlight'>granular RBAC</span>, JWT authentication, and automated event scheduling.",
    caseStudy: {
      problem: "Manual administrative workflows and multi-role access control created data inconsistencies and operational bottlenecks.",
      solution: "Engineered backend microservices with JWT authentication, RBAC, request validation middleware, pagination, and secure media uploads.",
      result: "Improved operational efficiency by 30% across cloud deployments (Hostinger + Vercel) while serving thousands of active records."
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["React.js", "Express.js", "MySQL", "JWT", "VPS Deployment"],
    githubUrl: "https://github.com/kartheeswaranAR"
  },
  {
    id: 2,
    title: "Tamilarasu Government E-Magazine Portal",
    year: "Jul 2025 – Oct 2025",
    description: "High-throughput government e-commerce backend platform for official digital publications with <span class='gradient-highlight'>integrated Razorpay payments</span>.",
    caseStudy: {
      problem: "High read contention on digital publication catalogs during peak download hours degraded server responsiveness.",
      solution: "Architected secure e-commerce backend for government e-book purchases with Razorpay gateway, caching layers, and database query optimization.",
      result: "Improved read performance by 35% with zero payment transaction drops across scalable VPS deployment."
    },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    tags: ["PHP", "JavaScript", "MySQL", "Razorpay API", "VPS Deployment"],
    githubUrl: "https://github.com/kartheeswaranAR"
  },
  {
    id: 3,
    title: "Universal Drone Monitoring & Maneuvering System",
    year: "Jul 2024 – May 2025",
    description: "Real-time UAV telemetry platform delivering <span class='gradient-highlight'>sub-100ms packet updates</span> across concurrent drone sessions via MAVLink and WebSockets.",
    caseStudy: {
      problem: "Packet jitter and frame latency in ground control communication during multi-session UAV flight operations.",
      solution: "Built real-time UAV telemetry platform supporting concurrent drone sessions using asynchronous request processing and WebSocket streaming.",
      result: "Achieved <100ms API latency and enhanced communication stability by 20% directly interfacing with Pixhawk autopilot flight controllers."
    },
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
    tags: ["Django DRF", "MongoDB", "WebSockets", "MAVLink", "Pixhawk"],
    githubUrl: "https://github.com/kartheeswaranAR/Drone_Monitor-PR-4"
  },
  {
    id: 4,
    title: "Digital Signage Platform",
    year: "Sept 2021 – Dec 2022",
    description: "Enterprise multimedia content platform powered by .NET Core with <span class='gradient-highlight'>Azure AD SSO authentication</span>.",
    caseStudy: {
      problem: "Insecure access controls and deployment failures in distributed multi-tenant signage displays across retail branches.",
      solution: "Developed scalable multimedia content APIs integrated with Azure Active Directory Single Sign-On and OAuth2 security protocols.",
      result: "Increased deployment reliability by 20% across multi-tenant Azure cloud environments."
    },
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
    tags: [".NET Core", "React.js", "Azure AD", "OAuth2", "Multi-tenant"],
    githubUrl: "https://github.com/kartheeswaranAR"
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 1,
    year: "Jul 2025 – Present",
    title: "Software Developer",
    company: "LKPR Global",
    location: "Tamil Nadu, India",
    description: `• Architect scalable full-stack platforms using Express.js, React.js, and MySQL supporting 10,000+ users with 99.5% production uptime.
• Engineered 15+ secure REST APIs with JWT authentication, RBAC, validation middleware, and pagination, reducing security vulnerabilities by 35%.
• Optimized database indexing and query execution plans, improving API response performance by 40% under concurrent traffic.
• Orchestrated CI/CD workflows via GitHub Actions and containerized deployments, accelerating release cycles by 30%.`,
    type: "experience"
  },
  {
    id: 2,
    year: "Jul 2024 – May 2025",
    title: "Software Engineer Intern",
    company: "Trilochana Aerospace & Defence Technologies",
    location: "Remote",
    description: `• Engineered real-time UAV monitoring backend using Django REST Framework and MongoDB achieving <100ms latency for telemetry streaming.
• Integrated MAVLink protocol with Pixhawk drones, enhancing telemetry reliability and flight stability by 15%.
• Enabled concurrent drone session handling through WebSocket communication and asynchronous request processing.`,
    type: "experience"
  },
  {
    id: 3,
    year: "Feb 2022 – Jul 2023",
    title: "Backend Software Developer",
    company: "Abstract Tech Groups",
    location: "Remote, UK",
    description: `• Designed enterprise ASP.NET Core MVC systems supporting 100,000+ daily transactions for UK government platforms.
• Refactored LINQ queries and ORM access layers, improving backend throughput and reducing database load by 25%.
• Provisioned Azure App Services, Azure SQL, and Blob Storage ensuring secure and high-availability deployments.
• Strengthened authentication mechanisms using OAuth2 and Azure AD SSO, elevating access compliance standards.`,
    type: "experience"
  },
  {
    id: 4,
    year: "Aug 2023 – May 2025",
    title: "Master of Technology in Defence Technology",
    company: "Kumaraguru College of Technology",
    location: "Coimbatore, Tamil Nadu",
    description: "CGPA: 8.1 / 10 | Relevant Coursework: Computational Fluid Dynamics, Drone Design, Autonomous Systems & Navigation Systems, Embedded Software for Flight Controls.",
    type: "education"
  },
  {
    id: 5,
    year: "Sept 2018 – May 2022",
    title: "Bachelor of Engineering in Computer Science & Engineering",
    company: "PSR Engineering College",
    location: "Sivakasi, Tamil Nadu",
    description: "CGPA: 8.2 / 10 | Relevant Coursework: Data Structures, Algorithms, Networking & Routing, Cloud Services, Python Programming, Web & App Development.",
    type: "education"
  },
  {
    id: 6,
    year: "Peer-Reviewed Journal",
    title: "Aerodynamic and Aero-acoustic Investigations of Hybrid Multi-rotor UAVs",
    company: "International Journal of Aeronautical and Space Sciences (IJASS)",
    description: "Research paper investigating rotor interference, aerodynamic efficiency, and noise profiling in hybrid UAV flight configurations.",
    type: "publication"
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 1,
    title: "Introduction to Generative AI",
    issuer: "Google",
    date: "Mar 2025"
  },
  {
    id: 2,
    title: "AWS Solution Architect",
    issuer: "Amazon Web Services",
    date: "Dec 2021"
  },
  {
    id: 3,
    title: "Network Virtualization & Simulation",
    issuer: "VMware",
    date: "Aug 2021"
  },
  {
    id: 4,
    title: "Deep Learning & Natural Language Processing",
    issuer: "MathWorks Academy",
    date: "Aug 2020"
  },
  {
    id: 5,
    title: "CCNA – Routing and Switching",
    issuer: "Cisco Networking Academy",
    date: "Apr 2020"
  }
];

export const TECH_GROUPS: TechGroup[] = [
  {
    label: 'Backend & APIs',
    items: [
      { name: 'C# / .NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', docs: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
      { name: 'ASP.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', docs: 'https://learn.microsoft.com/en-us/aspnet/core/' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', docs: 'https://docs.python.org/3/' },
      { name: 'Django REST', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', docs: 'https://www.django-rest-framework.org/' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', docs: 'https://expressjs.com/' },
      { name: 'WebSockets', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg', docs: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API' },
    ],
  },
  {
    label: 'Cloud, DevOps & Data',
    items: [
      { name: 'Microsoft Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', docs: 'https://docs.microsoft.com/azure/' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', docs: 'https://docs.docker.com/' },
      { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg', docs: 'https://docs.github.com/actions' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', docs: 'https://dev.mysql.com/doc/' },
      { name: 'MSSQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', docs: 'https://www.microsoft.com/sql-server' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', docs: 'https://www.mongodb.com/docs/' },
    ],
  },
  {
    label: 'Aerospace & Protocols',
    items: [
      { name: 'MAVLink Protocol', icon: 'https://mavlink.io/en/assets/mavlink_logo.png', docs: 'https://mavlink.io/en/' },
      { name: 'Pixhawk Autopilot', icon: 'https://pixhawk.org/wp-content/uploads/2019/03/pixhawk_logo_red.png', docs: 'https://pixhawk.org/' },
      { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', docs: 'https://docs.opencv.org/' },
      { name: 'Kalman Filters', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', docs: 'https://en.wikipedia.org/wiki/Kalman_filter' },
      { name: 'Telemetry Stream', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', docs: 'https://ardupilot.org/' },
      { name: 'Linux VPS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg', docs: 'https://ubuntu.com/server/docs' },
    ],
  },
  {
    label: 'Frontend & Security',
    items: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', docs: 'https://react.dev/' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', docs: 'https://www.typescriptlang.org/docs/' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', docs: 'https://nextjs.org/docs' },
      { name: 'TailwindCSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', docs: 'https://tailwindcss.com/docs' },
      { name: 'JWT Auth', icon: 'https://jwt.io/img/pic_logo.svg', docs: 'https://jwt.io/' },
      { name: 'OAuth2 & RBAC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg', docs: 'https://oauth.net/2/' },
    ],
  },
];
