"use client";

import type { Testimonial } from "@/domain/testimonials/testimonial";
import { useTestimonialsViewModel } from "../view-models/use-testimonials-view-model";
import { TestimonialsPresenter } from "./testimonials-presenter";

export function TestimonialsContainer({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const viewModel = useTestimonialsViewModel(testimonials);
  return <TestimonialsPresenter {...viewModel} />;
}
