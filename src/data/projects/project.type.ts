import type { LocalizedList, LocalizedText } from "@/shared/i18n/locale";

export interface ProjectCaseBlockRecord {
  title: LocalizedText;
  body: LocalizedText;
}

export interface ProjectImageRecord {
  src: string;
  alt: string;
  label: LocalizedText;
}

export interface ProjectRecord {
  slug: string;
  /** Product or project name shown as the case title. */
  title: LocalizedText;
  /** Company/client and, when relevant, the consultancy it was delivered through. */
  company: LocalizedText;
  period: LocalizedText;
  /** Short summary used on cards and at the top of the case page. */
  description: LocalizedText;
  role: LocalizedText;
  /** One-line technical differentiator shown on the card. */
  highlight: LocalizedText;
  stack: string[];
  image: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy: {
    context: LocalizedText;
    challenge: LocalizedText;
    myRole: LocalizedList;
    architecture: ProjectCaseBlockRecord[];
    decisions: ProjectCaseBlockRecord[];
    results: LocalizedList;
    images: ProjectImageRecord[];
  };
}
