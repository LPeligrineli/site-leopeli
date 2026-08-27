import type { Testimonial } from "@/domain/testimonials/testimonial";
import type { Locale } from "@/shared/i18n/locale";
import type {
  TestimonialListItem,
  TestimonialsViewModel,
} from "../types/testimonials-view-model";

type Translate = (key: string) => string;

export function createTestimonialListItems(
  testimonials: Testimonial[],
  locale: Locale,
): TestimonialListItem[] {
  return testimonials.map((testimonial) => ({
    id: testimonial.name,
    name: testimonial.name,
    role: testimonial.role[locale],
    company: testimonial.company,
    authorLabel: `${testimonial.role[locale]} · ${testimonial.company}`,
    content: testimonial.content[locale],
    initial: testimonial.name.charAt(0),
    print: testimonial.print,
    linkedinUrl: testimonial.linkedinUrl,
  }));
}

export function createTestimonialsViewModel(
  testimonials: Testimonial[],
  locale: Locale,
  t: Translate,
  visibleCount: number,
  onShowMore: () => void,
): TestimonialsViewModel {
  return {
    testimonials: createTestimonialListItems(testimonials, locale).slice(
      0,
      visibleCount,
    ),
    title: t("testimonials.title"),
    subtitle: t("testimonials.subtitle"),
    readMoreLabel: t("common.read_more"),
    seeMoreLabel: t("common.seeMore"),
    originalVersionLabel: t("common.viewOriginalVersion"),
    printVersionLabel: t("common.viewPrintVersion"),
    canShowMore: visibleCount < testimonials.length,
    isEmpty: testimonials.length === 0,
    onShowMore,
  };
}
