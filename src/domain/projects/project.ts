import type { LocalizedList, LocalizedText } from "@/shared/i18n/locale";

export interface ProjectImage {
  src: string;
  alt: string;
  label: LocalizedText;
}

export interface ProjectCaseBlock {
  title: LocalizedText;
  body: LocalizedText;
}

export interface ProjectDetails {
  context: LocalizedText;
  challenge: LocalizedText;
  myRole: LocalizedList;
  architecture: ProjectCaseBlock[];
  decisions: ProjectCaseBlock[];
  results: LocalizedList;
  images: ProjectImage[];
}

export interface Project {
  slug: string;
  title: LocalizedText;
  company: LocalizedText;
  period: LocalizedText;
  description: LocalizedText;
  role: LocalizedText;
  highlight: LocalizedText;
  stack: string[];
  image: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  details: ProjectDetails;
}
