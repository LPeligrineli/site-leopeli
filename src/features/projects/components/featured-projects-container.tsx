"use client";

import type { Project } from "@/domain/projects/project";
import { useProjectsViewModel } from "../view-models/use-projects-view-model";
import { FeaturedProjectsPresenter } from "./featured-projects-presenter";

export function FeaturedProjectsContainer({ projects }: { projects: Project[] }) {
  const viewModel = useProjectsViewModel(projects, { stackLimit: 4 });
  return <FeaturedProjectsPresenter {...viewModel} />;
}
