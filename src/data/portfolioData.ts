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
  role: "Backend Developer & Aerospace Systems Engineer",
  availability: "Open to backend & systems engineering roles",
  location: "Tamil Nadu, India",
  email: "kartheeswaran.dev@outlook.com",
  github: "https://github.com/kartheeswaranAR",
  linkedin: "https://www.linkedin.com/in/kartheeswaranr/",
  phone: "+91 9025826572",
  x: "https://x.com/Karthees_offcl",
  devto: "https://dev.to/kartheeswaran1921",
  medium: "https://medium.com/@kartheeswaranoff",
  instagram: "https://www.instagram.com/yurs_ark/",
  bio: "Software Engineer specializing in high-concurrency enterprise backend systems (ASP.NET Core, Django REST Framework, Express.js) integrated with real-time autonomous hardware protocols (MAVLink, WebSockets, Pixhawk). Focused on sub-100ms telemetry streaming, state estimation, and scalable cloud microservices.",
  philosophy: "Good systems engineering is about predictability under pressure. Whether processing 100,000+ daily enterprise transactions or streaming real-time MAVLink telemetry in flight, quiet and resilient software always wins.",
  metrics: {
    telemetryLatency: "<100ms",
    dailyTransactions: "100k+",
    overheadCut: ">90%",
    experienceYears: "2+"
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Autonomous UAV Monitoring & Maneuvering Platform",
    year: "2024 – 2025",
    description: "Low-latency real-time telemetry backend delivering <span class='gradient-highlight'>sub-100ms packet updates</span> across concurrent drone sessions with MAVLink & Pixhawk integration.",
    caseStudy: {
      problem: "High packet jitter and frame drops in real-time ground control communication during multi-session UAV operations.",
      solution: "Engineered an asynchronous WebSocket streaming pipeline over Django REST Framework integrated with MAVLink C/Python bindings.",
      result: "Achieved sub-100ms update latency and a 15–20% increase in telemetry reliability and flight control stability."
    },
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
    tags: ["Django DRF", "MAVLink", "WebSockets", "MongoDB", "Pixhawk"],
    githubUrl: "https://github.com/kartheeswaranAR/Drone_Monitor-PR-4"
  },
  {
    id: 2,
    title: "Combat Vehicle Tracking Engine",
    year: "2024",
    description: "Autonomous defense tracking engine applying <span class='gradient-highlight'>Kalman Filter algorithms</span> and OpenCV for trajectory prediction in noisy optical feeds.",
    caseStudy: {
      problem: "Target occlusion and video feed noise caused target loss in live video stream tracking for tactical land vehicles.",
      solution: "Implemented a 2D/3D kinematic state estimation pipeline combining Kalman Filtering with OpenCV optical flow feature extraction.",
      result: "Filtered sensor noise and maintained predictive target lock even during high-frequency camera vibration and transient occlusions."
    },
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "OpenCV", "Kalman Filters", "State Estimation"],
    githubUrl: "https://github.com/kartheeswaranAR"
  },
  {
    id: 3,
    title: "Enterprise CRM & Political Data Automation Platform",
    year: "2025 – 2026",
    description: "High-concurrency enterprise CRM platform with <span class='gradient-highlight'>role-based access control</span> and automated multi-channel communication pipelines.",
    caseStudy: {
      problem: "Manual administrative workflows for multi-tier user roles created operational bottlenecks and compliance risks.",
      solution: "Architected Express/.NET Core backend microservices with granular RBAC, JWT validation, and automated webhook pipelines.",
      result: "Reduced manual operational overhead by over 90% while serving thousands of concurrent users with 99.5% uptime."
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["ASP.NET Core", "Express.js", "MySQL", "RBAC", "VPS"],
    githubUrl: "https://github.com/kartheeswaranAR"
  },
  {
    id: 4,
    title: "UK Enterprise & Government Backend Systems",
    year: "2022 – 2023",
    description: "High-throughput cloud backend powering mission-critical UK enterprise platforms supporting <span class='gradient-highlight'>100,000+ daily transactions</span>.",
    caseStudy: {
      problem: "Legacy database queries and unindexed ORM execution plans degraded application response under peak traffic loads.",
      solution: "Refactored ASP.NET Core MVC services, optimized LINQ query execution, and modernized Azure SQL indexing.",
      result: "Decreased core database load by 25% and maintained uninterrupted service under 100k+ daily transactions."
    },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    tags: ["ASP.NET Core", "Azure SQL", "Blob Storage", "OAuth2", "LINQ", "Azure AD"],
    githubUrl: "https://github.com/kartheeswaranAR"
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 1,
    year: "Jul 2025 – Jan 2026",
    title: "Software Developer & Solution Engineer",
    company: "LKPR Global",
    location: "Chennai, TN",
    description: `• Architected full-stack enterprise portals serving 10,000+ active users with 99.5% operational uptime.
• Engineered 15+ secure REST APIs with JWT authentication, granular RBAC, and pagination, reducing query response times by 40% through indexing.
• Deployed automated WhatsApp/CRM webhook pipelines and Express/.NET backend services integrated into CI/CD workflows.`,
    type: "experience"
  },
  {
    id: 2,
    year: "Jul 2024 – May 2025",
    title: "Software Engineering Intern",
    company: "Trilochana Aerospace & Defence Technologies",
    location: "Coimbatore, TN",
    description: `• Developed drone ground control software integrating real-time telemetry streaming over WebSockets and MAVLink protocols.
• Achieved sub-100ms packet update latency directly interfacing with Pixhawk autopilot flight controllers.
• Executed telemetry link stress testing, state estimation verification, and hardware-in-the-loop protocol validation for defense applications.`,
    type: "experience"
  },
  {
    id: 3,
    year: "Feb 2022 – Jul 2023",
    title: "Backend Software Developer",
    company: "Abstract Tech Groups",
    location: "Madurai, TN",
    description: `• Maintained and built mission-critical ASP.NET Core MVC systems for UK clients, managing 100,000+ daily transactions.
• Managed Azure cloud infrastructure (App Services, Blob Storage) and enterprise access standards via Azure AD SSO.
• Refactored LINQ queries and ORM layers to decrease database server load by 25%.`,
    type: "experience"
  },
  {
    id: 4,
    year: "2023 – 2025",
    title: "M.Tech in Defence Technology (Aerospace)",
    company: "Kumaraguru College of Technology",
    description: "CGPA: 8.2 / 10 | Specialized in UAV Aerodynamics, Flight Control Systems, Autonomous Navigation, and Defense Hardware Integration.",
    type: "education"
  },
  {
    id: 5,
    year: "2018 – 2022",
    title: "B.E. in Computer Science and Engineering",
    company: "PSR Engineering College",
    description: "CGPA: 8.2 / 10 | Core foundations in Object-Oriented System Design, High-Concurrency Architectures, Operating Systems, and Data Structures.",
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
      { name: 'CI/CD Pipelines', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg', docs: 'https://docs.github.com/actions' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', docs: 'https://www.postgresql.org/docs/' },
      { name: 'MSSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', docs: 'https://www.microsoft.com/sql-server' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', docs: 'https://www.mongodb.com/docs/' },
    ],
  },
  {
    label: 'Aerospace & Defense',
    items: [
      { name: 'MAVLink Protocol', icon: 'https://mavlink.io/en/assets/mavlink_logo.png', docs: 'https://mavlink.io/en/' },
      { name: 'Pixhawk Autopilot', icon: 'https://pixhawk.org/wp-content/uploads/2019/03/pixhawk_logo_red.png', docs: 'https://pixhawk.org/' },
      { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', docs: 'https://docs.opencv.org/' },
      { name: 'Kalman Filters', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', docs: 'https://en.wikipedia.org/wiki/Kalman_filter' },
      { name: 'Telemetry Stream', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', docs: 'https://ardupilot.org/' },
      { name: 'MATLAB/Simulink', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg', docs: 'https://www.mathworks.com/products/matlab.html' },
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
