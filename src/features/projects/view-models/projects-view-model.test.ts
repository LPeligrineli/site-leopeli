import { describe, expect, it } from "vitest";
import { projectsRepository } from "@/data/repositories/projects-repository";
import {
  createProjectDetailsViewModel,
  createProjectsViewModel,
} from "./projects-view-model";

const translate = (key: string) => key;

describe("projects view models", () => {
  it("localizes and limits list data before presentation", async () => {
    const projects = await projectsRepository.findFeatured();
    const viewModel = createProjectsViewModel(
      projects,
      "en-US",
      translate,
      4,
    );

    expect(viewModel.projects[0].title).toBe(projects[0].title["en-US"]);
    expect(viewModel.projects[0].stack).toHaveLength(4);
    expect(viewModel.projects[0].hiddenStackCount).toBe(
      projects[0].stack.length - 4,
    );
    expect(viewModel.isEmpty).toBe(false);
  });

  it("exposes an empty state without persistence details", () => {
    const viewModel = createProjectsViewModel([], "pt-BR", translate);
    expect(viewModel).toMatchObject({ projects: [], isEmpty: true });
  });

  it("normalizes localized detail images for the presenter", async () => {
    const project = await projectsRepository.findBySlug("auren");
    const viewModel = createProjectDetailsViewModel(
      project,
      "pt-BR",
      translate,
    );

    expect(viewModel.project?.images[0].label).toBe(
      project?.details.images[0].label["pt-BR"],
    );
  });
});
