"use client";

import type { BlogPost } from "@/domain/blog/blog-post";
import { useBlogPostDetailsViewModel } from "../view-models/use-blog-view-model";
import { BlogPostDetailsPresenter } from "./blog-post-details-presenter";

export function BlogPostDetailsContainer({ post }: { post: BlogPost | null }) {
  const viewModel = useBlogPostDetailsViewModel(post);
  return <BlogPostDetailsPresenter {...viewModel} />;
}
