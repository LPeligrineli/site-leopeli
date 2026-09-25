import type { LocalizedText } from "@/shared/i18n/locale";

export interface BlogPost {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  content: LocalizedText;
  publishedAt: Date;
  readTime: number;
  tags: string[];
  image?: string;
  imageAlt?: LocalizedText;
  featured: boolean;
}
