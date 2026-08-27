import { projectRecords } from "@/data/projects";
import { mapProjectRecordToProject } from "@/domain/projects/project-mapper";
import type { Project } from "@/domain/projects/project";

export interface ProjectsRepository {
  findAll(): Promise<Project[]>;
  findFeatured(): Promise<Project[]>;
  findBySlug(slug: string): Promise<Project | null>;
}

export const projectsRepository: ProjectsRepository = {
  async findAll() {
    return projectRecords.map(mapProjectRecordToProject);
  },

  async findFeatured() {
    return projectRecords
      .filter((record) => record.featured)
      .map(mapProjectRecordToProject);
  },

  async findBySlug(slug) {
    const record = projectRecords.find((project) => project.slug === slug);
    return record ? mapProjectRecordToProject(record) : null;
  },
};
