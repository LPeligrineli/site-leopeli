"use client";

import { useTestimonialDialogViewModel } from "../view-models/use-testimonials-view-model";
import type { TestimonialListItem } from "../types/testimonials-view-model";
import { TestimonialDialogPresenter } from "./testimonial-dialog-presenter";

interface TestimonialDialogContainerProps {
  testimonial: TestimonialListItem;
  readMoreLabel: string;
  originalVersionLabel: string;
  printVersionLabel: string;
}

export function TestimonialDialogContainer(
  props: TestimonialDialogContainerProps,
) {
  const viewModel = useTestimonialDialogViewModel();
  return <TestimonialDialogPresenter {...props} {...viewModel} />;
}
