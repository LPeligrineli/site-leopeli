import type {
  ProjectCaseBlockRecord,
  ProjectRecord,
} from "@/data/projects/project.type";
import type { LocalizedList } from "@/shared/i18n/locale";
import type { Project, ProjectCaseBlock } from "./project";

function copyList(list: LocalizedList): LocalizedList {
  return {
    "pt-BR": [...list["pt-BR"]],
    "en-US": [...list["en-US"]],
  };
}

function copyBlock(block: ProjectCaseBlockRecord): ProjectCaseBlock {
  return {
    title: { ...block.title },
    body: { ...block.body },
  };
}

export function mapProjectRecordToProject(record: ProjectRecord): Project {
  const { caseStudy } = record;

  return {
    slug: record.slug,
    title: { ...record.title },
    company: { ...record.company },
    period: { ...record.period },
    description: { ...record.description },
    role: { ...record.role },
    highlight: { ...record.highlight },
    stack: [...record.stack],
    image: record.image,
    featured: record.featured,
    liveUrl: record.liveUrl,
    githubUrl: record.githubUrl,
    details: {
      context: { ...caseStudy.context },
      challenge: { ...caseStudy.challenge },
      myRole: copyList(caseStudy.myRole),
      architecture: caseStudy.architecture.map(copyBlock),
      decisions: caseStudy.decisions.map(copyBlock),
      results: copyList(caseStudy.results),
      images: caseStudy.images.map((image) => ({
        ...image,
        label: { ...image.label },
      })),
    },
  };
}
