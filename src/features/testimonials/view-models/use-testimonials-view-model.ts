"use client";

import { useCallback, useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Testimonial } from "@/domain/testimonials/testimonial";
import { createTestimonialsViewModel } from "./testimonials-view-model";

const initialVisibleCount = 3;

export function useTestimonialsViewModel(testimonials: Testimonial[]) {
  const { locale, t } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const onShowMore = useCallback(
    () => setVisibleCount(testimonials.length),
    [testimonials.length],
  );

  return useMemo(
    () =>
      createTestimonialsViewModel(
        testimonials,
        locale,
        t,
        visibleCount,
        onShowMore,
      ),
    [locale, onShowMore, t, testimonials, visibleCount],
  );
}

export function useTestimonialDialogViewModel() {
  const [showsOriginal, setShowsOriginal] = useState(false);
  const onToggleVersion = useCallback(
    () => setShowsOriginal((current) => !current),
    [],
  );

  return { showsOriginal, onToggleVersion };
}
