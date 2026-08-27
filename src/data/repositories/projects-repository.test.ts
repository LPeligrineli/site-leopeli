import { describe, expect, it } from "vitest";
import { projectsRepository } from "./projects-repository";

describe("projectsRepository", () => {
  it("returns all projects as domain entities", async () => {
    const projects = await projectsRepository.findAll();

    expect(projects.length).toBeGreaterThan(0);
    expect(projects[0]).toHaveProperty("details");
    expect(projects[0]).not.toHaveProperty("projectPage");
  });

  it("applies the featured query in the data layer", async () => {
    const projects = await projectsRepository.findFeatured();

    expect(projects.every((project) => project.featured)).toBe(true);
  });

  it("returns null for an unknown slug", async () => {
    await expect(
      projectsRepository.findBySlug("unknown-project"),
    ).resolves.toBeNull();
  });
});
