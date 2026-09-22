import { describe, expect, it } from "vitest";
import { projectsRepository } from "./projects-repository";

describe("projectsRepository", () => {
  it("returns all projects as domain entities", async () => {
    const projects = await projectsRepository.findAll();

    expect(projects.length).toBeGreaterThan(0);
    expect(projects[0]).toHaveProperty("details");
    expect(projects[0]).not.toHaveProperty("caseStudy");
  });

  it("applies the featured query in the data layer", async () => {
    const projects = await projectsRepository.findFeatured();

    expect(projects.every((project) => project.featured)).toBe(true);
  });

  it("keeps every case study complete in both locales", async () => {
    const projects = await projectsRepository.findAll();

    for (const project of projects) {
      for (const locale of ["pt-BR", "en-US"] as const) {
        expect(project.details.context[locale]).not.toBe("");
        expect(project.details.challenge[locale]).not.toBe("");
        expect(project.details.myRole[locale].length).toBeGreaterThan(0);
        expect(project.details.results[locale].length).toBeGreaterThan(0);
      }
      expect(project.details.myRole["pt-BR"]).toHaveLength(
        project.details.myRole["en-US"].length,
      );
      expect(project.details.results["pt-BR"]).toHaveLength(
        project.details.results["en-US"].length,
      );
    }
  });

  it("returns null for an unknown slug", async () => {
    await expect(
      projectsRepository.findBySlug("unknown-project"),
    ).resolves.toBeNull();
  });
});
