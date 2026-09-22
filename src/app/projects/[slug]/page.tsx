import type { Metadata } from "next";
import { projectsRepository } from "@/data/repositories/projects-repository";
import { ProjectDetailsContainer } from "@/features/projects/components/project-details-container";

interface ProjectDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await projectsRepository.findAll();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await projectsRepository.findBySlug(slug);

  if (!project) {
    return {};
  }

  const title = `${project.title["en-US"]} | Leonidas Peligrineli`;
  const description = project.description["en-US"];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: "/images/imagem-og.png", width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = await projectsRepository.findBySlug(slug);

  return <ProjectDetailsContainer project={project} />;
}
