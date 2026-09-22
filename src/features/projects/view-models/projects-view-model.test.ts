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

  it("localizes case study blocks and lists only sections with content", async () => {
    const project = await projectsRepository.findBySlug("Localiza-SemiNovos");
    const viewModel = createProjectDetailsViewModel(
      project,
      "en-US",
      translate,
    );

    expect(viewModel.project?.architecture[0].title).toBe(
      project?.details.architecture[0].title["en-US"],
    );
    expect(viewModel.project?.decisions).toEqual([]);
    expect(viewModel.project?.sections.map((section) => section.id)).toEqual([
      "context",
      "challenge",
      "my-role",
      "architecture",
      "results",
    ]);
  });

  it("returns an empty details state for a missing project", () => {
    const viewModel = createProjectDetailsViewModel(null, "pt-BR", translate);
    expect(viewModel).toMatchObject({ project: null, isEmpty: true });
    expect(viewModel.copy.notFound).toBe("projects.notFound");
  });
});
