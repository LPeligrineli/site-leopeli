import type { ProjectRecord } from "@/data/projects/project.type";
import type { Project } from "./project";

export function mapProjectRecordToProject(record: ProjectRecord): Project {
  return {
    slug: record.slug,
    title: { ...record.title },
    description: { ...record.description },
    role: { ...record.role },
    impact: { ...record.impact },
    stack: [...record.stack],
    image: record.image,
    featured: record.featured,
    liveUrl: record.liveUrl,
    githubUrl: record.githubUrl,
    year: record.year,
    details: {
      description: { ...record.projectPage.description },
      challenges: { ...record.projectPage.challenges },
      solutions: { ...record.projectPage.solutions },
      impact: { ...record.projectPage.impact },
      achievements: record.projectPage.achievements
        ? {
            "pt-BR": [...record.projectPage.achievements["pt-BR"]],
            "en-US": [...record.projectPage.achievements["en-US"]],
          }
        : undefined,
      images: record.projectPage.images.map((image) => ({
        ...image,
        label: { ...image.label },
      })),
    },
  };
}
