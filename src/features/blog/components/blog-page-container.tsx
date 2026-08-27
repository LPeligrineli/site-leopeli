"use client";

import type { BlogPost } from "@/domain/blog/blog-post";
import { useBlogViewModel } from "../view-models/use-blog-view-model";
import { BlogPagePresenter } from "./blog-page-presenter";

export function BlogPageContainer({
  posts,
  isActive,
}: {
  posts: BlogPost[];
  isActive: boolean;
}) {
  const viewModel = useBlogViewModel(posts, isActive);
  return <BlogPagePresenter {...viewModel} />;
}
