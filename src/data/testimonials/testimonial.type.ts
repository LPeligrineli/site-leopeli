import type { LocalizedText } from "@/shared/i18n/locale";

export interface TestimonialRecord {
  name: string;
  role: LocalizedText;
  company: string;
  image: string;
  print?: string;
  content: LocalizedText;
  linkedinUrl?: string;
}
