import { blogRepository } from "@/data/repositories/blog-repository";
import { BlogPostDetailsContainer } from "@/features/blog/components/blog-post-details-container";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await blogRepository.findBySlug(slug);
  return <BlogPostDetailsContainer post={post} />;
}
