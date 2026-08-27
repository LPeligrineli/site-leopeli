import { projectsRepository } from "@/data/repositories/projects-repository";
import { ProjectsPageContainer } from "@/features/projects/components/projects-page-container";

export default async function ProjectsPage() {
  const projects = await projectsRepository.findAll();
  return <ProjectsPageContainer projects={projects} />;
}
