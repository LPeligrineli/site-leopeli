import type { LocalizedText } from "@/shared/i18n/locale";

export interface ProjectRecord {
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
  projectPage: {
    description: LocalizedText;
    challenges: LocalizedText;
    solutions: LocalizedText;
    impact: LocalizedText;
    achievements?: Record<keyof LocalizedText, string[]>;
    images: {
      src: string;
      alt: string;
      label: LocalizedText;
    }[];
  };
}
