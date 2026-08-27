import type { TestimonialRecord } from "@/data/testimonials/testimonial.type";
import type { Testimonial } from "./testimonial";

export function mapTestimonialRecordToTestimonial(
  record: TestimonialRecord,
): Testimonial {
  return {
    name: record.name,
    role: { ...record.role },
    company: record.company,
    image: record.image,
    print: record.print,
    content: { ...record.content },
    linkedinUrl: record.linkedinUrl,
  };
}
