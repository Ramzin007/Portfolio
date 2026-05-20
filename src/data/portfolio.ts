import {
  Blocks,
  Bot,
  BrainCircuit,
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe2,
  GraduationCap,
  Layers3,
  PenTool,
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
  name: "Aarav Mehta",
  role: "Frontend Engineer & Product-Minded Full Stack Developer",
  location: "Bengaluru, India",
  email: "hello@aarav.dev",
  phone: "+91 98765 43210",
  availability: "Available for freelance and product teams",
  tagline:
    "I design and ship fast, accessible web products that turn complex workflows into calm, delightful interfaces.",
  resumeUrl: "/resume.txt",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const counters = [
  { label: "Projects completed", value: 38, suffix: "+" },
  { label: "Technologies learned", value: 42, suffix: "" },
  { label: "GitHub commits", value: 1280, suffix: "+" },
  { label: "Certifications", value: 9, suffix: "" },
];

export const highlights = [
  {
    title: "Product engineering",
    description:
      "Comfortable moving from discovery and wireframes to implementation, testing, analytics, and iteration.",
    icon: Rocket,
  },
  {
    title: "Interface systems",
    description:
      "Builds scalable component libraries, tokens, and interaction patterns that keep teams moving quickly.",
    icon: Layers3,
  },
  {
    title: "Performance craft",
    description:
      "Obsesses over Core Web Vitals, perceived speed, accessible motion, and progressive enhancement.",
    icon: ShieldCheck,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: Code2,
    skills: [
      { name: "React / Next.js", level: 94, experience: "Advanced" },
      { name: "TypeScript", level: 90, experience: "Advanced" },
      { name: "Tailwind CSS", level: 92, experience: "Advanced" },
      { name: "Framer Motion", level: 82, experience: "Strong" },
    ],
  },
  {
    category: "Backend",
    icon: ServerCog,
    skills: [
      { name: "Node.js", level: 84, experience: "Strong" },
      { name: "REST APIs", level: 88, experience: "Advanced" },
      { name: "Auth / RBAC", level: 78, experience: "Strong" },
      { name: "Webhooks", level: 75, experience: "Strong" },
    ],
  },
  {
    category: "Database",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 82, experience: "Strong" },
      { name: "MongoDB", level: 76, experience: "Strong" },
      { name: "Prisma", level: 80, experience: "Strong" },
      { name: "Redis", level: 68, experience: "Working" },
    ],
  },
  {
    category: "DevOps",
    icon: Cloud,
    skills: [
      { name: "Vercel", level: 90, experience: "Advanced" },
      { name: "Docker", level: 70, experience: "Working" },
      { name: "CI/CD", level: 78, experience: "Strong" },
      { name: "Observability", level: 72, experience: "Working" },
    ],
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: [
      { name: "Figma", level: 86, experience: "Strong" },
      { name: "Git / GitHub", level: 91, experience: "Advanced" },
      { name: "Linear", level: 78, experience: "Strong" },
      { name: "Playwright", level: 73, experience: "Working" },
    ],
  },
  {
    category: "Languages",
    icon: Braces,
    skills: [
      { name: "JavaScript", level: 93, experience: "Advanced" },
      { name: "TypeScript", level: 90, experience: "Advanced" },
      { name: "Python", level: 68, experience: "Working" },
      { name: "SQL", level: 76, experience: "Strong" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "atlas-crm",
    title: "Atlas CRM Command Center",
    status: "Live",
    featured: true,
    category: "SaaS",
    thumbnail: "/images/project-atlas.svg",
    description:
      "A revenue workspace for founders to track pipeline health, notes, follow-ups, and AI-scored account risk.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Framer Motion"],
    tags: ["Dashboard", "B2B", "Analytics"],
    features: [
      "Command palette-driven account search",
      "Pipeline kanban with keyboard shortcuts",
      "Role-based analytics views",
      "Optimistic updates and activity feed",
    ],
    challenges:
      "Balancing dense operational data with a calm interface that sales teams can scan repeatedly.",
    architecture:
      "App Router route groups, server actions for mutations, Prisma data layer, and component-level streaming boundaries.",
    performance:
      "Reduced dashboard interaction latency with memoized filters, partial hydration, and image placeholders.",
    github: "https://github.com",
    demo: "https://vercel.com",
    screenshots: ["/images/project-atlas.svg", "/images/project-pulse.svg"],
  },
  {
    id: "pulse-ai",
    title: "Pulse AI Support Copilot",
    status: "Beta",
    featured: true,
    category: "AI",
    thumbnail: "/images/project-pulse.svg",
    description:
      "A support triage product that clusters tickets, drafts replies, and highlights escalation risk for CX leads.",
    tech: ["React", "Node.js", "OpenAI", "Redis", "Tailwind"],
    tags: ["AI", "Support", "Realtime"],
    features: [
      "Semantic ticket clustering",
      "Human-in-the-loop approval workflow",
      "Realtime SLA risk monitor",
      "Audit trail for AI suggestions",
    ],
    challenges:
      "Keeping generated content transparent and reviewable while preserving agent speed.",
    architecture:
      "Event-driven ingestion pipeline, queue-backed scoring jobs, and a review-first React workspace.",
    performance:
      "Lazy-loaded conversation panes and virtualized long ticket lists kept time-to-interaction under budget.",
    github: "https://github.com",
    demo: "https://vercel.com",
    screenshots: ["/images/project-pulse.svg", "/images/project-nova.svg"],
  },
  {
    id: "nova-commerce",
    title: "Nova Commerce Studio",
    status: "Case Study",
    featured: true,
    category: "Ecommerce",
    thumbnail: "/images/project-nova.svg",
    description:
      "A headless storefront builder for boutique brands with reusable merchandising blocks and edge-ready pages.",
    tech: ["Next.js", "Shopify", "Stripe", "Zod", "Vercel"],
    tags: ["Commerce", "CMS", "Payments"],
    features: [
      "CMS-ready page sections",
      "Variant-aware product gallery",
      "Checkout handoff with analytics",
      "Editorial landing page builder",
    ],
    challenges:
      "Designing a premium storefront system flexible enough for campaigns without making every page feel generic.",
    architecture:
      "Composable content schema, server-rendered product routes, and client islands for cart interactions.",
    performance:
      "Edge caching, responsive images, and minimal client state delivered consistently fast product pages.",
    github: "https://github.com",
    demo: "https://vercel.com",
    screenshots: ["/images/project-nova.svg", "/images/project-atlas.svg"],
  },
  {
    id: "open-kit",
    title: "OpenKit Design System",
    status: "Open Source",
    featured: false,
    category: "Open Source",
    thumbnail: "/images/project-openkit.svg",
    description:
      "Accessible React primitives, tokens, and docs for shipping polished internal tools quickly.",
    tech: ["React", "Storybook", "Radix UI", "Tailwind", "Vitest"],
    tags: ["Design System", "A11y", "Docs"],
    features: [
      "Tokenized theming",
      "Accessible primitives",
      "Component recipes",
      "Visual regression workflow",
    ],
    challenges:
      "Creating defaults that feel refined while staying adaptable across product surfaces.",
    architecture:
      "Package-based component library with typed variants, Storybook docs, and automated release notes.",
    performance:
      "Tree-shakeable exports and CSS-variable theming keep consuming apps lean.",
    github: "https://github.com",
    demo: "https://vercel.com",
    screenshots: ["/images/project-openkit.svg", "/images/project-atlas.svg"],
  },
];

export const experiences: Experience[] = [
  {
    role: "Frontend Engineering Intern",
    company: "Northstar Labs",
    period: "Jan 2026 - Present",
    type: "Internship",
    summary:
      "Shipping customer-facing dashboard modules for a fintech analytics platform.",
    achievements: [
      "Improved dashboard load perception with skeletons and streaming sections.",
      "Built accessible filters, data tables, and export flows used by analyst teams.",
      "Partnered with design to formalize component usage guidelines.",
    ],
    tech: ["Next.js", "TypeScript", "TanStack Query", "Tailwind"],
  },
  {
    role: "Freelance Product Developer",
    company: "Independent",
    period: "2024 - 2026",
    type: "Freelance",
    summary:
      "Designed and built landing pages, booking tools, and internal apps for early-stage clients.",
    achievements: [
      "Delivered five paid client projects from brief to deployment.",
      "Set up analytics, SEO metadata, and Vercel deployment workflows.",
      "Reduced manual client operations through API integrations and admin panels.",
    ],
    tech: ["React", "Node.js", "Stripe", "Vercel"],
  },
  {
    role: "Open Source Contributor",
    company: "Frontend Ecosystem",
    period: "2023 - Present",
    type: "Open Source",
    summary:
      "Contributing docs, accessibility fixes, and reproduction cases to UI libraries.",
    achievements: [
      "Submitted fixes for focus management and responsive layout defects.",
      "Authored issue reproductions that accelerated maintainer triage.",
      "Mentored peers through project setup and pull request review.",
    ],
    tech: ["GitHub", "Radix UI", "Storybook", "Playwright"],
  },
];

export const education = {
  degree: "B.Tech in Computer Science",
  college: "Ramaiah Institute of Technology",
  period: "2022 - 2026",
  cgpa: "8.7 / 10",
  coursework: [
    "Data Structures",
    "Database Systems",
    "Computer Networks",
    "Human Computer Interaction",
    "Distributed Systems",
  ],
  achievements: [
    "Winner, campus product sprint 2025",
    "Top 5, regional hackathon 2024",
    "Design lead for developer club",
  ],
  icon: GraduationCap,
};

export const certifications: Certification[] = [
  {
    title: "Frontend Developer Professional",
    issuer: "Meta",
    date: "2025",
    credential: "https://example.com",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    credential: "https://example.com",
  },
  {
    title: "User Experience Design",
    issuer: "Google",
    date: "2024",
    credential: "https://example.com",
  },
];

export const services = [
  {
    title: "Web Development",
    price: "From $900",
    icon: Globe2,
    description: "Responsive marketing sites and product interfaces that feel sharp on every device.",
    features: ["Next.js builds", "SEO setup", "Analytics hooks", "CMS-ready sections"],
  },
  {
    title: "Full Stack Apps",
    price: "From $2,500",
    icon: Blocks,
    description: "Production-ready dashboards, portals, and workflow tools with strong data models.",
    features: ["Auth flows", "API routes", "Database schema", "Deployment pipeline"],
  },
  {
    title: "UI/UX Design",
    price: "From $700",
    icon: PenTool,
    description: "Polished product design, prototypes, and design systems for fast-moving teams.",
    features: ["Wireframes", "Component systems", "Interaction design", "Usability review"],
  },
  {
    title: "AI/API Consulting",
    price: "Custom",
    icon: Bot,
    description: "Practical AI integrations, automations, and API architecture for real workflows.",
    features: ["Prompt flows", "Webhook design", "Observability", "Human review UX"],
  },
];

export const testimonials = [
  {
    quote:
      "Aarav turned a fuzzy product idea into a polished dashboard our team could actually use every morning.",
    name: "Maya Iyer",
    company: "Founder, Finpilot",
    rating: 5,
  },
  {
    quote:
      "The interface quality was noticeably above what we normally get from freelance builds. Fast, thoughtful, and well documented.",
    name: "Daniel Stone",
    company: "Product Lead, Northstar",
    rating: 5,
  },
  {
    quote:
      "He cared about accessibility, performance, and edge cases without making the process feel heavy.",
    name: "Priya Shah",
    company: "Design Manager, Studio Nine",
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Designing dashboards that teams can read under pressure",
    excerpt:
      "A practical framework for hierarchy, defaults, empty states, and interaction density in SaaS dashboards.",
    category: "Product Design",
    date: "2026-04-12",
    tags: ["Design", "SaaS", "Dashboards"],
    content:
      "Great dashboards reduce decision friction. They emphasize the next action, make anomalies obvious, and avoid burying useful context behind decoration.",
  },
  {
    title: "What I measure before shipping a portfolio project",
    excerpt:
      "The performance, accessibility, SEO, and interaction checks that keep personal projects credible.",
    category: "Engineering",
    date: "2026-03-19",
    tags: ["Performance", "A11y", "Next.js"],
    content:
      "Portfolio projects are tiny product surfaces. Recruiters and clients notice polish, but they also notice broken keyboard focus and slow pages.",
  },
  {
    title: "Building an AI feature without hiding the human workflow",
    excerpt:
      "A pattern for AI suggestions that preserve trust: preview, provenance, approval, and undo.",
    category: "AI",
    date: "2026-02-28",
    tags: ["AI", "UX", "Workflow"],
    content:
      "The strongest AI interfaces expose confidence, context, and control. The user should always know what changed and why.",
  },
];

export const githubStats = {
  repos: 42,
  stars: 318,
  contributions: 1280,
  streak: 146,
  languages: [
    { name: "TypeScript", value: 48, color: "bg-sky-400" },
    { name: "JavaScript", value: 22, color: "bg-yellow-300" },
    { name: "CSS", value: 16, color: "bg-pink-400" },
    { name: "Python", value: 9, color: "bg-emerald-400" },
    { name: "Other", value: 5, color: "bg-zinc-400" },
  ],
};

export const commandItems = [
  { label: "Hire Me", href: "#contact", icon: Sparkles },
  { label: "View Projects", href: "#projects", icon: SquareTerminal },
  { label: "Download Resume", href: profile.resumeUrl, icon: GitBranch },
  { label: "Read Blog", href: "#blog", icon: BrainCircuit },
];
