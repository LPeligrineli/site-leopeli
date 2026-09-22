import type { Project, ProjectCaseBlock } from "@/domain/projects/project";
import type { Locale } from "@/shared/i18n/locale";
import type {
  ProjectCaseBlockView,
  ProjectCaseSectionId,
  ProjectDetailsCopy,
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
    highlight: t("projects.highlight"),
  };
}

function createDetailsCopy(t: Translate): ProjectDetailsCopy {
  return {
    ...createCopy(t),
    stack: t("projects.stack"),
    period: t("projects.period"),
    context: t("projects.context"),
    challenge: t("projects.challenge"),
    myRole: t("projects.myRole"),
    architecture: t("projects.architecture"),
    decisions: t("projects.decisions"),
    results: t("projects.results"),
    screenshots: t("projects.screenshots"),
    onThisPage: t("projects.onThisPage"),
    visitProduct: t("projects.visitProduct"),
    backHome: t("common.backHome"),
    notFound: t("projects.notFound"),
  };
}

function localizeBlocks(
  blocks: ProjectCaseBlock[],
  locale: Locale,
): ProjectCaseBlockView[] {
  return blocks.map((block) => ({
    title: block.title[locale],
    body: block.body[locale],
  }));
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
        company: project.company[locale],
        period: project.period[locale],
        description: project.description[locale],
        role: project.role[locale],
        highlight: project.highlight[locale],
        stack,
        hiddenStackCount: project.stack.length - stack.length,
        image: project.image,
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
  const copy = createDetailsCopy(t);

  if (!project) {
    return { project: null, copy, isEmpty: true };
  }

  const { details } = project;
  const myRole = [...details.myRole[locale]];
  const architecture = localizeBlocks(details.architecture, locale);
  const decisions = localizeBlocks(details.decisions, locale);
  const results = [...details.results[locale]];

  const candidateSections: Array<{
    id: ProjectCaseSectionId;
    label: string;
    hasContent: boolean;
  }> = [
    { id: "context", label: copy.context, hasContent: Boolean(details.context[locale]) },
    { id: "challenge", label: copy.challenge, hasContent: Boolean(details.challenge[locale]) },
    { id: "my-role", label: copy.myRole, hasContent: myRole.length > 0 },
    { id: "architecture", label: copy.architecture, hasContent: architecture.length > 0 },
    { id: "decisions", label: copy.decisions, hasContent: decisions.length > 0 },
    { id: "results", label: copy.results, hasContent: results.length > 0 },
  ];

  return {
    project: {
      slug: project.slug,
      title: project.title[locale],
      company: project.company[locale],
      period: project.period[locale],
      description: project.description[locale],
      role: project.role[locale],
      highlight: project.highlight[locale],
      stack: [...project.stack],
      liveUrl: project.liveUrl,
      githubUrl: project.githubUrl,
      context: details.context[locale],
      challenge: details.challenge[locale],
      myRole,
      architecture,
      decisions,
      results,
      images: details.images.map((image) => ({
        src: image.src,
        alt: image.alt,
        label: image.label[locale],
      })),
      sections: candidateSections
        .filter((section) => section.hasContent)
        .map(({ id, label }) => ({ id, label })),
    },
    copy,
    isEmpty: false,
  };
}
