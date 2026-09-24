import type { Metadata } from "next";
import { blogRepository } from "@/data/repositories/blog-repository";
import { BlogPostDetailsContainer } from "@/features/blog/components/blog-post-details-container";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await blogRepository.findAll();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await blogRepository.findBySlug(slug);

  if (!post) {
    return {};
  }

  // Posts are written in Portuguese first and shared mostly with a
  // Portuguese-speaking audience, so social previews use pt-BR.
  const title = `${post.title["pt-BR"]} | Leonidas Peligrineli`;
  const description = post.excerpt["pt-BR"];
  const images = post.image ? [{ url: post.image }] : undefined;

  return {
    title,
    description,
    openGraph: {
      type: "article",
      title,
      description,
      publishedTime: post.publishedAt.toISOString(),
      ...(images ? { images } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await blogRepository.findBySlug(slug);
  return <BlogPostDetailsContainer post={post} />;
}
