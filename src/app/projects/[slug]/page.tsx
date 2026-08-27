import { projectsRepository } from "@/data/repositories/projects-repository";
import { ProjectDetailsContainer } from "@/features/projects/components/project-details-container";

interface ProjectDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = await projectsRepository.findBySlug(slug);

  return <ProjectDetailsContainer project={project} />;
}
