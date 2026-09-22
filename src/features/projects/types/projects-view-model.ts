export interface ProjectListItem {
  slug: string;
  title: string;
  company: string;
  period: string;
  description: string;
  role: string;
  highlight: string;
  stack: string[];
  hiddenStackCount: number;
  image: string;
  href: string;
}

export interface ProjectsCopy {
  title: string;
  subtitle: string;
  viewAll: string;
  viewProject: string;
  role: string;
  highlight: string;
}

export interface ProjectsViewModel {
  projects: ProjectListItem[];
  copy: ProjectsCopy;
  isEmpty: boolean;
}

export interface ProjectCaseBlockView {
  title: string;
  body: string;
}

export interface ProjectDetailsCopy extends ProjectsCopy {
  stack: string;
  period: string;
  context: string;
  challenge: string;
  myRole: string;
  architecture: string;
  decisions: string;
  results: string;
  screenshots: string;
  onThisPage: string;
  visitProduct: string;
  backHome: string;
  notFound: string;
}

export type ProjectCaseSectionId =
  | "context"
  | "challenge"
  | "my-role"
  | "architecture"
  | "decisions"
  | "results";

export interface ProjectDetailsViewModel {
  project: {
    slug: string;
    title: string;
    company: string;
    period: string;
    description: string;
    role: string;
    highlight: string;
    stack: string[];
    liveUrl?: string;
    githubUrl?: string;
    context: string;
    challenge: string;
    myRole: string[];
    architecture: ProjectCaseBlockView[];
    decisions: ProjectCaseBlockView[];
    results: string[];
    images: Array<{ src: string; alt: string; label: string }>;
    /** Sections that have content, in reading order, for the in-page index. */
    sections: Array<{ id: ProjectCaseSectionId; label: string }>;
  } | null;
  copy: ProjectDetailsCopy;
  isEmpty: boolean;
}
