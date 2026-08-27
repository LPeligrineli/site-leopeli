export interface TestimonialListItem {
  id: string;
  name: string;
  role: string;
  company: string;
  authorLabel: string;
  content: string;
  initial: string;
  print?: string;
  linkedinUrl?: string;
}

export interface TestimonialsViewModel {
  testimonials: TestimonialListItem[];
  title: string;
  subtitle: string;
  readMoreLabel: string;
  seeMoreLabel: string;
  originalVersionLabel: string;
  printVersionLabel: string;
  canShowMore: boolean;
  isEmpty: boolean;
  onShowMore: () => void;
}
