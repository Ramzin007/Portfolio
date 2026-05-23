import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type SkillCategory = {
  category: string;
  icon: LucideIcon;
  skills: {
    name: string;
    level: number;
    experience: string;
  }[];
};

export type Project = {
  id: string;
  title: string;
  status: "Live" | "Beta" | "Case Study" | "Open Source" | "In Progress" | "Done";
  featured: boolean;
  category: string;
  thumbnail: string;
  description: string;
  tech: string[];
  tags: string[];
  features: string[];
  challenges: string;
  architecture: string;
  performance: string;
  github: string;
  demo: string;
  screenshots: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  type: string;
  summary: string;
  achievements: string[];
  tech: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  credential: string;
  duration?: string;
  courseLength?: string;
  score?: string;
  credits?: string;
};

export type BlogPost = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  tags: string[];
  content: string;
};
