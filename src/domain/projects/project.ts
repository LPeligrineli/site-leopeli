import type { LocalizedText, Locale } from "@/shared/i18n/locale";

export interface ProjectImage {
  src: string;
  alt: string;
  label: LocalizedText;
}

export interface ProjectDetails {
  description: LocalizedText;
  challenges: LocalizedText;
  solutions: LocalizedText;
  impact: LocalizedText;
  achievements?: Record<Locale, string[]>;
  images: ProjectImage[];
}

export interface Project {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  role: LocalizedText;
  impact: LocalizedText;
  stack: string[];
  image: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  year: number;
  details: ProjectDetails;
}
