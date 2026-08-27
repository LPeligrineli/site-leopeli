"use client";

import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Project } from "@/domain/projects/project";
import {
  createProjectDetailsViewModel,
  createProjectsViewModel,
} from "./projects-view-model";

export function useProjectsViewModel(
  projects: Project[],
  options: { stackLimit?: number } = {},
) {
  const { locale, t } = useLanguage();
  const { stackLimit } = options;

  return useMemo(
    () => createProjectsViewModel(projects, locale, t, stackLimit),
    [locale, projects, stackLimit, t],
  );
}

export function useProjectDetailsViewModel(project: Project | null) {
  const { locale, t } = useLanguage();

  return useMemo(
    () => createProjectDetailsViewModel(project, locale, t),
    [locale, project, t],
  );
}
