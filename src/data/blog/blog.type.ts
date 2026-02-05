import type { Locale } from "@/contexts/LanguageContext";

export interface BlogPost {
  slug: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  content: Record<Locale, string>;
  date: string;
  readTime: number;
  tags: string[];
  image: string;
  featured: boolean;
}