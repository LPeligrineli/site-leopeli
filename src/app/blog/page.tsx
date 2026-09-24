import { blogRepository } from "@/data/repositories/blog-repository";
import { BlogPageContainer } from "@/features/blog/components/blog-page-container";

const isBlogActive = true;

export default async function BlogPage() {
  const posts = await blogRepository.findAll();
  return <BlogPageContainer posts={posts} isActive={isBlogActive} />;
}
