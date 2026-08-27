import { describe, expect, it } from "vitest";
import { testimonialRecords } from "@/data/testimonials";
import { mapTestimonialRecordToTestimonial } from "./testimonial-mapper";

describe("mapTestimonialRecordToTestimonial", () => {
  it("creates an entity independent from the record localization objects", () => {
    const record = testimonialRecords[0];
    const testimonial = mapTestimonialRecordToTestimonial(record);

    expect(testimonial.content).toEqual(record.content);
    expect(testimonial.content).not.toBe(record.content);
    expect(testimonial.role).not.toBe(record.role);
  });
});
