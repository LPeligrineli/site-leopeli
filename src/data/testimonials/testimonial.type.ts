import type { Locale } from "@/contexts/LanguageContext";

export interface Testimonial {
  name: string;
  role: Record<Locale, string>;
  company: string;
  image: string;
  print?: string;
  content: Record<Locale, string>;
  linkedinUrl?: string;
}