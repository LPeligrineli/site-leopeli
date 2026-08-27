"use client";

import type { Project } from "@/domain/projects/project";
import { useProjectsViewModel } from "../view-models/use-projects-view-model";
import { ProjectsPagePresenter } from "./projects-page-presenter";

export function ProjectsPageContainer({ projects }: { projects: Project[] }) {
  const viewModel = useProjectsViewModel(projects);
  return <ProjectsPagePresenter {...viewModel} />;
}
