import { describe, expect, it } from "vitest";
import { testimonialsRepository } from "./testimonials-repository";

describe("testimonialsRepository", () => {
  it("returns mapped testimonial entities", async () => {
    const testimonials = await testimonialsRepository.findAll();
    expect(testimonials.length).toBeGreaterThan(3);
    expect(testimonials[0]).toHaveProperty("content.en-US");
  });
});
