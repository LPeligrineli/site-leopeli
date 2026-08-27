import { blogPostRecords } from "@/data/blog";
import { mapBlogPostRecordToBlogPost } from "@/domain/blog/blog-post-mapper";
import type { BlogPost } from "@/domain/blog/blog-post";

export interface BlogRepository {
  findAll(): Promise<BlogPost[]>;
  findFeatured(limit?: number): Promise<BlogPost[]>;
  findBySlug(slug: string): Promise<BlogPost | null>;
}

export const blogRepository: BlogRepository = {
  async findAll() {
    return blogPostRecords.map(mapBlogPostRecordToBlogPost);
  },

  async findFeatured(limit) {
    const records = blogPostRecords.filter((record) => record.featured);
    return (limit === undefined ? records : records.slice(0, limit)).map(
      mapBlogPostRecordToBlogPost,
    );
  },

  async findBySlug(slug) {
    const record = blogPostRecords.find((post) => post.slug === slug);
    return record ? mapBlogPostRecordToBlogPost(record) : null;
  },
};
