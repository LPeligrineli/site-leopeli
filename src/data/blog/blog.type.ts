import type { LocalizedText } from "@/shared/i18n/locale";

export interface BlogPostRecord {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  content: LocalizedText;
  date: string;
  readTime: number;
  tags: string[];
  image: string;
  featured: boolean;
}
