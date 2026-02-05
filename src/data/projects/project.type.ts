import type { Locale } from "@/contexts/LanguageContext";

export interface Project {
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  role: Record<Locale, string>;
  impact: Record<Locale, string>;
  stack: string[];
  image: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  year: number;
  projectPage: {
    description: Record<Locale, string>;
    challenges: Record<Locale, string>;
    solutions: Record<Locale, string>;
    impact: Record<Locale, string>;
    achievements?: Record<Locale, string[]>;
    images: {
      src: string;
      alt: string;
      label: Record<Locale, string>;
    }[];
  };
}