import {
  Blocks,
  BrainCircuit,
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Handshake,
  Laptop,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  SquareTerminal,
  Wrench,
} from "lucide-react";
import type {
  BlogPost,
  Certification,
  Experience,
  NavItem,
  Project,
  SkillCategory,
} from "@/types/portfolio";

export const profile = {
  name: "Muhammed Ramzin P",
  role: "Full Stack Developer",
  location: "",
  email: "muhammedramzinp0@gmail.com",
  phone: "+91 62389 88808",
  availability: "Open to internships and freelance projects",
  tagline:
    "Passionate developer building full-stack web projects while growing deeper in backend engineering, APIs, and scalable systems.",
  resumeUrl: "/resume.pdf",
  github: "https://github.com/Ramzin007",
  linkedin: "https://www.linkedin.com/in/muhammedramzinp/",
  twitter: "",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Focus", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const counters = [
  { label: "Projects completed", value: 15, suffix: "+" },
  { label: "Technologies learned", value: 12, suffix: "+" },
  { label: "GitHub commits", value: 300, suffix: "+" },
  { label: "Certifications", value: 4, suffix: "+" },
];

export const highlights = [
  {
    title: "Full-stack foundation",
    description:
      "Building real-world web applications with responsive interfaces, API integration, and practical backend concepts.",
    icon: Rocket,
  },
  {
    title: "Backend-focused growth",
    description:
      "Currently moving from frontend-heavy development into backend systems, API architecture, databases, and system design fundamentals.",
    icon: ServerCog,
  },
  {
    title: "Clean engineering habits",
    description:
      "Focused on reusable components, maintainable project structure, responsive UI, and products that are usable in real contexts.",
    icon: ShieldCheck,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: Code2,
    skills: [
      { name: "React.js / Next.js", level: 82, experience: "Project-based" },
      { name: "Tailwind CSS", level: 84, experience: "Strong" },
      { name: "Responsive UI", level: 86, experience: "Strong" },
      { name: "API Integration", level: 78, experience: "Growing" },
    ],
  },
  {
    category: "Backend",
    icon: ServerCog,
    skills: [
      { name: "Node.js / Express.js", level: 72, experience: "Learning" },
      { name: "REST API Development", level: 74, experience: "Growing" },
      { name: "Authentication Concepts", level: 64, experience: "Learning" },
      { name: "Backend Architecture", level: 60, experience: "Learning" },
    ],
  },
  {
    category: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 58, experience: "Learning" },
      { name: "PostgreSQL", level: 54, experience: "Learning" },
      { name: "SQL", level: 56, experience: "Learning" },
      { name: "Schema Design Basics", level: 60, experience: "Basics" },
    ],
  },
  {
    category: "Platforms",
    icon: Cloud,
    skills: [
      { name: "Vercel", level: 78, experience: "Project-based" },
      { name: "Render", level: 52, experience: "Learning" },
      { name: "Supabase", level: 45, experience: "Exploring" },
      { name: "Firebase", level: 48, experience: "Basic" },
    ],
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 82, experience: "Strong" },
      { name: "Postman", level: 76, experience: "Project-based" },
      { name: "VS Code", level: 86, experience: "Daily" },
      { name: "Chrome DevTools", level: 72, experience: "Growing" },
    ],
  },
  {
    category: "Languages",
    icon: Braces,
    skills: [
      { name: "JavaScript", level: 82, experience: "Strong" },
      { name: "C / C++", level: 70, experience: "Academic" },
      { name: "Python", level: 52, experience: "Learning" },
      { name: "HTML / CSS", level: 88, experience: "Strong" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "bloodlink",
    title: "BloodLink",
    status: "Done",
    featured: true,
    category: "Full Stack",
    thumbnail: "/images/projects/bloodlink/bloodlink-home.jpg",
    description:
      "A blood donation and donor management platform designed to connect donors and recipients efficiently during emergencies.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Express.js", "MongoDB", "REST APIs"],
    tags: ["Healthcare", "Donor Management", "Full Stack"],
    features: [
      "Responsive donor and recipient workflows",
      "Organized donor data management concepts",
      "Emergency-focused search and access patterns",
      "Hospital and donor dashboard workflows",
    ],
    challenges:
      "Designing a clear information flow for emergency use cases while keeping the interface simple and accessible.",
    architecture:
      "React frontend with Node.js and Express API integration, MongoDB persistence, and modular full-stack project structure.",
    performance:
      "Mobile-first layout, reusable UI components, and lightweight client-side interactions for fast browsing.",
    github: "https://github.com/tmswalih/Bloodlink",
    demo: "",
    screenshots: [
      "/images/projects/bloodlink/bloodlink-home.jpg",
      "/images/projects/bloodlink/bloodlink-hospital-dashboard.jpg",
      "/images/projects/bloodlink/bloodlink-about.jpg",
      "/images/projects/bloodlink/bloodlink-donor-dashboard.jpg",
      "/images/projects/bloodlink/bloodlink-login.jpg",
    ],
  },
  {
    id: "movie-library",
    title: "Movie Library Website",
    status: "In Progress",
    featured: true,
    category: "Frontend",
    thumbnail: "/images/project-movie.svg",
    description:
      "A movie discovery platform using TMDB API for browsing, searching, and exploring movies through a responsive interface.",
    tech: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "TMDB API", "REST APIs"],
    tags: ["API Integration", "Search", "Responsive UI"],
    features: [
      "Dynamic movie search and discovery",
      "TMDB API integration",
      "Reusable card and listing components",
      "Responsive content-heavy layouts",
    ],
    challenges:
      "Handling dynamic API data in a way that stays easy to scan across mobile and desktop viewports.",
    architecture:
      "Component-based React/Next.js frontend with reusable movie cards, search states, and API data handling.",
    performance:
      "Optimized layout structure, lean API-driven rendering, and responsive image/card presentation.",
    github: "https://github.com/Ramzin007/Movie-Library",
    demo: "",
    screenshots: ["/images/project-movie.svg", "/images/project-blog.svg"],
  },
  {
    id: "hack-europa",
    title: "Hack Europa Official Website",
    status: "Live",
    featured: true,
    category: "Event Website",
    thumbnail: "/images/projects/hack-europa/hack-europa-prize.png",
    description:
      "An official event website for Hack Europa focused on event information, participant engagement, and a modern hackathon experience.",
    tech: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Responsive Design", "GitHub"],
    tags: ["Hackathon", "Live Site", "Event"],
    features: [
      "Modern event landing experience",
      "Organized event information structure",
      "Responsive participant-focused sections",
      "Production deployment on Vercel",
    ],
    challenges:
      "Presenting event information clearly while maintaining a polished visual experience for participants.",
    architecture:
      "Component-based frontend with reusable sections, structured content, and deployment-ready Next.js/Vercel workflow.",
    performance:
      "Static-friendly page structure, optimized section hierarchy, and responsive Tailwind styling.",
    github: "https://github.com/Ramzin007/hack-europa-2.0",
    demo: "https://hack-europa-2-0.vercel.app/",
    screenshots: [
      "/images/projects/hack-europa/hack-europa-prize.png",
      "/images/projects/hack-europa/hack-europa-about.png",
      "/images/projects/hack-europa/hack-europa-guidelines.png",
      "/images/projects/hack-europa/hack-europa-events-log.png",
      "/images/projects/hack-europa/hack-europa-awaits.png",
    ],
  },
  {
    id: "student-portal",
    title: "Student Portal",
    status: "Done",
    featured: false,
    category: "Dashboard",
    thumbnail: "/images/projects/student-portal/student-portal-home.jpg",
    description:
      "A student management platform concept for centralizing academic and student-related information through responsive dashboards.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Express.js", "SQL", "REST APIs"],
    tags: ["Dashboard", "Education", "Student Data"],
    features: [
      "Dashboard-style student information views",
      "Responsive academic data layouts",
      "Structured full-stack integration concepts",
      "SQL-backed data handling planned",
    ],
    challenges:
      "Designing a dashboard structure that can scale as more student modules and data views are added.",
    architecture:
      "React frontend with planned Node.js/Express backend, SQL data model, and REST API-based module integration.",
    performance:
      "Reusable dashboard components and predictable grid layouts for consistent rendering across screen sizes.",
    github: "https://github.com/muhammedma-2006/StudentPortal",
    demo: "",
    screenshots: [
      "/images/projects/student-portal/student-portal-home.jpg",
      "/images/project-student.svg",
    ],
  },
  {
    id: "phishguard",
    title: "PhishGuard",
    status: "Done",
    featured: false,
    category: "Security Awareness",
    thumbnail: "/images/project-phishguard.svg",
    description:
      "A cybersecurity-focused web application and Chrome extension concept for phishing awareness and unsafe link education.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Node.js", "REST APIs", "GitHub"],
    tags: ["Chrome Extension", "Security", "Awareness"],
    features: [
      "Security-oriented user workflows",
      "Unsafe link awareness concepts",
      "Responsive educational interface",
      "Chrome extension direction",
    ],
    challenges:
      "Communicating phishing risk in a practical, user-friendly way without claiming advanced cybersecurity automation.",
    architecture:
      "React-based interface with extension-oriented flows and planned API integration for link-checking concepts.",
    performance:
      "Simple UI flows and focused interaction states to keep security education quick and approachable.",
    github: "https://github.com/Ramzin007/PhishGuard",
    demo: "",
    screenshots: ["/images/project-phishguard.svg", "/images/project-hackeuropa.svg"],
  },
  {
    id: "blog-web-app",
    title: "Blog Web Application",
    status: "Done",
    featured: false,
    category: "Content Platform",
    thumbnail: "/images/projects/blog-web-app/blog-home.png",
    description:
      "A modern blog platform focused on clean content presentation, reusable frontend components, and full-stack blogging concepts.",
    tech: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Markdown", "REST APIs"],
    tags: ["Blog", "Content", "Full Stack"],
    features: [
      "Clean content presentation",
      "Dynamic content rendering concepts",
      "Reusable blog card components",
      "Responsive reading experience",
    ],
    challenges:
      "Designing a simple content system that can grow into a more complete full-stack blogging platform.",
    architecture:
      "React/Next.js frontend with structured content rendering and REST API integration concepts.",
    performance:
      "Focused typography, lightweight layouts, and responsive sections for comfortable reading.",
    github: "https://github.com/Ramzin007/Blog-web-application",
    demo: "https://blog-web-application-tazs.onrender.com/",
    screenshots: [
      "/images/projects/blog-web-app/blog-home.png",
      "/images/projects/blog-web-app/blog-search.png",
      "/images/projects/blog-web-app/blog-about.png",
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Self-Directed Full-Stack Development",
    company: "Project-Based Learning",
    period: "2024 - Present",
    type: "Independent",
    summary:
      "Focused on building responsive web applications while transitioning from frontend-heavy development into backend engineering and scalable system design.",
    achievements: [
      "Built projects involving REST API integration, component-based architecture, and responsive UI systems.",
      "Explored authentication concepts, backend project structure, error handling, and database design basics.",
      "Practiced clean engineering through BloodLink, Student Portal, Movie Library, PhishGuard, and Blog Web Application.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "REST APIs", "MongoDB", "SQL"],
  },
  {
    role: "Hackathon & Collaborative Development",
    company: "CUSAT / Student Projects",
    period: "2024 - Present",
    type: "Collaboration",
    summary:
      "Contributed to hackathon-oriented development projects and collaborative web solutions under time-constrained environments.",
    achievements: [
      "Developed rapid prototypes and participant-facing event interfaces.",
      "Worked on UI implementation, feature-focused development, and team-based problem solving.",
      "Built and deployed the Hack Europa Official Website for a real event context.",
    ],
    tech: ["React.js", "Next.js", "GitHub", "Vercel", "Responsive Design"],
  },
  {
    role: "Continuous Technical Learning",
    company: "Backend, DSA & Systems",
    period: "2024 - Present",
    type: "Learning",
    summary:
      "Actively expanding into backend development, database systems, API architecture, DSA, and system design fundamentals.",
    achievements: [
      "Completed Full Stack Open and continued strengthening modern full-stack fundamentals.",
      "Participated in AI/computational thinking and AR/VR workshops to broaden technical exposure.",
      "Improving through hands-on projects, debugging, deployment practice, and problem solving.",
    ],
    tech: ["Backend Systems", "API Architecture", "Database Design", "DSA", "System Design"],
  },
];

export const education = {
  degree: "Bachelor of Technology (BTech) in Information Technology",
  college: "CUSAT School of Engineering, Cochin University of Science and Technology",
  period: "2024 - 2028",
  cgpa: "8.94 / 10",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Web Technologies",
    "Object-Oriented Programming",
    "Software Engineering",
    "Computer Networks",
    "Operating Systems",
    "System Design Fundamentals",
  ],
  achievements: [
    "Hack Europa 2.0 participant",
    "Full Stack Open Certificate of Completion",
    "AI and Computational Thinking workshop participant",
    "Augmented and Virtual Reality Workshop participant",
  ],
  icon: GraduationCap,
};

export const certifications: Certification[] = [
  {
    title: "Full Stack Open - Certificate of Completion",
    issuer: "University of Helsinki & Houston Inc.",
    date: "2026",
    credential: "/certificates/fullstackopen.pdf",
  },
  {
    title: "Hack Europa 2.0 - Participation Certificate",
    issuer: "Students Association of Information Technology (SAIT), CUSAT",
    date: "2026",
    credential: "/certificates/hackeuropa-certificate.pdf",
  },
  {
    title: "AI and Computational Thinking Essentials: MATLAB and Simulink Hands-on",
    issuer: "MathWorks in collaboration with IEEE CUSAT SB",
    date: "2025",
    credential: "/certificates/mathlab-certificate.pdf",
  },
  {
    title: "Augmented and Virtual Reality Workshop",
    issuer: "YISL with IUSSTF and STEAM Varsity",
    date: "2026",
    credential: "/certificates/augmented-virtual-reality-workshop.jpg",
  },
];

export const services = [
  {
    title: "Full-Stack Development",
    price: "Hands-on",
    icon: Blocks,
    description:
      "Developing full-stack applications through practical project building, frontend/backend integration, and deployment practice.",
    features: ["React interfaces", "Node/Express APIs", "Database basics", "Project structure"],
  },
  {
    title: "Backend Systems",
    price: "Learning Focus",
    icon: ServerCog,
    description:
      "Strengthening backend fundamentals around APIs, authentication concepts, middleware, error handling, and scalable application thinking.",
    features: ["REST APIs", "Auth concepts", "Error handling", "Debugging"],
  },
  {
    title: "API Architecture",
    price: "Growing",
    icon: BrainCircuit,
    description:
      "Exploring clean API design, dynamic data handling, third-party integrations, and frontend-to-backend communication patterns.",
    features: ["API routing", "Postman testing", "Data fetching", "JSON workflows"],
  },
  {
    title: "Responsive UI Engineering",
    price: "Strong Base",
    icon: Laptop,
    description:
      "Creating mobile-first, accessible, and performance-conscious interfaces with reusable React components and Tailwind CSS.",
    features: ["Responsive layouts", "Reusable UI", "Theme support", "Basic accessibility"],
  },
  {
    title: "Technical Prototyping",
    price: "Fast Builds",
    icon: Sparkles,
    description:
      "Rapid MVP and hackathon-style development for ideas, student projects, and practical web application concepts.",
    features: ["MVP screens", "Hackathon workflows", "Feature demos", "Vercel deployment"],
  },
];

export const testimonials = [
  {
    quote:
      "Building real-world web projects while transitioning into backend engineering and scalable application thinking.",
    name: "Project-Based Growth",
    company: "Full-stack development",
    rating: 5,
  },
  {
    quote:
      "Comfortable collaborating in hackathons and team-based development environments where quick decisions matter.",
    name: "Collaborative Development",
    company: "Hackathons and student teams",
    rating: 5,
  },
  {
    quote:
      "Focused on clean UI architecture, responsive design, reusable components, and practical product usability.",
    name: "Interface Craft",
    company: "React and Tailwind projects",
    rating: 5,
  },
  {
    quote:
      "Continuously improving backend, APIs, DSA, system design fundamentals, and modern engineering practices.",
    name: "Continuous Learning",
    company: "Backend and systems",
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [];

export const githubStats = {
  repos: 15,
  stars: 6,
  contributions: 107,
  streak: 1,
  languages: [
    { name: "JavaScript", value: 46, color: "bg-yellow-300" },
    { name: "CSS", value: 24, color: "bg-pink-400" },
    { name: "HTML", value: 14, color: "bg-orange-400" },
    { name: "C++", value: 9, color: "bg-sky-400" },
    { name: "Other", value: 7, color: "bg-zinc-400" },
  ],
};

export const commandItems = [
  { label: "Contact Me", href: "#contact", icon: Sparkles },
  { label: "View Projects", href: "#projects", icon: SquareTerminal },
  { label: "Download Resume", href: profile.resumeUrl, icon: GitBranch },
  { label: "Open GitHub", href: profile.github, icon: GitBranch },
  { label: "Connect on LinkedIn", href: profile.linkedin, icon: Handshake },
];
