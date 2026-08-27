"use client";

import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { BlogPost } from "@/domain/blog/blog-post";
import {
  createBlogPostDetailsViewModel,
  createBlogViewModel,
} from "./blog-view-model";

export function useBlogViewModel(posts: BlogPost[], isActive: boolean) {
  const { locale, t } = useLanguage();
  return useMemo(
    () => createBlogViewModel(posts, locale, t, isActive),
    [isActive, locale, posts, t],
  );
}

export function useBlogPostDetailsViewModel(post: BlogPost | null) {
  const { locale, t } = useLanguage();
  return useMemo(
    () => createBlogPostDetailsViewModel(post, locale, t),
    [locale, post, t],
  );
}
