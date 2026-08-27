import type { Project } from "@/domain/projects/project";
import type { Locale } from "@/shared/i18n/locale";
import type {
  ProjectDetailsViewModel,
  ProjectsCopy,
  ProjectsViewModel,
} from "../types/projects-view-model";

type Translate = (key: string) => string;

function createCopy(t: Translate): ProjectsCopy {
  return {
    title: t("projects.title"),
    subtitle: t("projects.subtitle"),
    viewAll: t("projects.viewAll"),
    viewProject: t("projects.viewProject"),
    role: t("projects.role"),
    impact: t("projects.impact"),
  };
}

export function createProjectsViewModel(
  projects: Project[],
  locale: Locale,
  t: Translate,
  stackLimit?: number,
): ProjectsViewModel {
  return {
    projects: projects.map((project) => {
      const stack = stackLimit
        ? project.stack.slice(0, stackLimit)
        : [...project.stack];

      return {
        slug: project.slug,
        title: project.title[locale],
        description: project.description[locale],
        role: project.role[locale],
        impact: project.impact[locale],
        stack,
        hiddenStackCount: project.stack.length - stack.length,
        image: project.image,
        year: project.year,
        href: `/projects/${project.slug}`,
      };
    }),
    copy: createCopy(t),
    isEmpty: projects.length === 0,
  };
}

export function createProjectDetailsViewModel(
  project: Project | null,
  locale: Locale,
  t: Translate,
): ProjectDetailsViewModel {
  return {
    project: project
      ? {
          slug: project.slug,
          title: project.title[locale],
          description: project.description[locale],
          role: project.role[locale],
          impact: project.details.impact[locale],
          challenges: project.details.challenges[locale],
          solutions: project.details.solutions[locale],
          stack: [...project.stack],
          year: project.year,
          liveUrl: project.liveUrl,
          githubUrl: project.githubUrl,
          images: project.details.images.map((image) => ({
            src: image.src,
            alt: image.alt,
            label: image.label[locale],
          })),
        }
      : null,
    copy: {
      ...createCopy(t),
      stack: t("projects.stack"),
      challenges: t("projects.challenges"),
      solutions: t("projects.solutions"),
      backHome: t("common.backHome"),
      notFound: "Project not found",
    },
    isEmpty: project === null,
  };
}
