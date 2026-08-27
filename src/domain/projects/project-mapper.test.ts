import { describe, expect, it } from "vitest";
import { projectRecords } from "@/data/projects";
import { mapProjectRecordToProject } from "./project-mapper";

describe("mapProjectRecordToProject", () => {
  it("maps the persistence shape to the application entity", () => {
    const record = projectRecords[0];
    const project = mapProjectRecordToProject(record);

    expect(project.slug).toBe(record.slug);
    expect(project.details.challenges).toEqual(record.projectPage.challenges);
    expect(project.details.images).toEqual(record.projectPage.images);
    expect(project).not.toHaveProperty("projectPage");
  });

  it("does not expose mutable record arrays", () => {
    const record = projectRecords[0];
    const project = mapProjectRecordToProject(record);

    expect(project.stack).not.toBe(record.stack);
    expect(project.details.images).not.toBe(record.projectPage.images);
  });
});
