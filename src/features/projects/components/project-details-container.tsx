"use client";

import type { Project } from "@/domain/projects/project";
import { useProjectDetailsViewModel } from "../view-models/use-projects-view-model";
import { ProjectDetailsPresenter } from "./project-details-presenter";

export function ProjectDetailsContainer({ project }: { project: Project | null }) {
  const viewModel = useProjectDetailsViewModel(project);
  return <ProjectDetailsPresenter {...viewModel} />;
}
