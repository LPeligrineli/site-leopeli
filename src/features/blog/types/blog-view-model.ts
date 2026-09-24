import type { BlogContentBlock } from "../lib/blog-content";

export interface BlogListItem {
  slug: string;
  title: string;
  titleInitial: string;
  image?: string;
  excerpt: string;
  readTimeLabel: string;
  tags: string[];
  href: string;
}

export interface BlogCopy {
  title: string;
  subtitle: string;
  readMore: string;
  viewAll: string;
  backHome: string;
}

export interface BlogViewModel {
  posts: BlogListItem[];
  copy: BlogCopy;
  isActive: boolean;
  isEmpty: boolean;
}

export interface BlogPostDetailsViewModel {
  post: {
    slug: string;
    title: string;
    titleInitial: string;
    excerpt: string;
    content: BlogContentBlock[];
    publishedAtLabel: string;
    readTimeLabel: string;
    tags: string[];
  } | null;
  copy: BlogCopy & { notFound: string };
  isEmpty: boolean;
}
