export interface ProjectListItem {
  slug: string;
  title: string;
  description: string;
  role: string;
  impact: string;
  stack: string[];
  hiddenStackCount: number;
  image: string;
  year: number;
  href: string;
}

export interface ProjectsCopy {
  title: string;
  subtitle: string;
  viewAll: string;
  viewProject: string;
  role: string;
  impact: string;
}

export interface ProjectsViewModel {
  projects: ProjectListItem[];
  copy: ProjectsCopy;
  isEmpty: boolean;
}

export interface ProjectDetailsViewModel {
  project: {
    slug: string;
    title: string;
    description: string;
    role: string;
    impact: string;
    challenges: string;
    solutions: string;
    stack: string[];
    year: number;
    liveUrl?: string;
    githubUrl?: string;
    images: Array<{ src: string; alt: string; label: string }>;
  } | null;
  copy: ProjectsCopy & {
    stack: string;
    challenges: string;
    solutions: string;
    backHome: string;
    notFound: string;
  };
  isEmpty: boolean;
}
