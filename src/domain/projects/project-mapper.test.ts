import { describe, expect, it } from "vitest";
import { projectRecords } from "@/data/projects";
import { mapProjectRecordToProject } from "./project-mapper";

describe("mapProjectRecordToProject", () => {
  it("maps the persistence shape to the application entity", () => {
    const record = projectRecords[0];
    const project = mapProjectRecordToProject(record);

    expect(project.slug).toBe(record.slug);
    expect(project.details.challenge).toEqual(record.caseStudy.challenge);
    expect(project.details.decisions).toEqual(record.caseStudy.decisions);
    expect(project.details.images).toEqual(record.caseStudy.images);
    expect(project).not.toHaveProperty("caseStudy");
  });

  it("does not expose mutable record arrays", () => {
    const record = projectRecords[0];
    const project = mapProjectRecordToProject(record);

    expect(project.stack).not.toBe(record.stack);
    expect(project.details.images).not.toBe(record.caseStudy.images);
    expect(project.details.myRole["pt-BR"]).not.toBe(
      record.caseStudy.myRole["pt-BR"],
    );
  });
});
