import { testimonialRecords } from "@/data/testimonials";
import { mapTestimonialRecordToTestimonial } from "@/domain/testimonials/testimonial-mapper";
import type { Testimonial } from "@/domain/testimonials/testimonial";

export interface TestimonialsRepository {
  findAll(): Promise<Testimonial[]>;
}

export const testimonialsRepository: TestimonialsRepository = {
  async findAll() {
    return testimonialRecords.map(mapTestimonialRecordToTestimonial);
  },
};
