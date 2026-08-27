import type { BlogPostRecord } from "@/data/blog/blog.type";
import type { BlogPost } from "./blog-post";

export function mapBlogPostRecordToBlogPost(record: BlogPostRecord): BlogPost {
  return {
    slug: record.slug,
    title: { ...record.title },
    excerpt: { ...record.excerpt },
    content: { ...record.content },
    publishedAt: new Date(record.date),
    readTime: record.readTime,
    tags: [...record.tags],
    image: record.image,
    featured: record.featured,
  };
}
