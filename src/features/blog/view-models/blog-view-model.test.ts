import { describe, expect, it } from "vitest";
import { blogRepository } from "@/data/repositories/blog-repository";
import {
  createBlogPostDetailsViewModel,
  createBlogViewModel,
} from "./blog-view-model";

const translate = (key: string) => key;

describe("blog view models", () => {
  it("delivers localized list items and presentation-ready labels", async () => {
    const posts = await blogRepository.findAll();
    const viewModel = createBlogViewModel(posts, "en-US", translate, false);

    expect(viewModel.posts[0]).toMatchObject({
      title: posts[0].title["en-US"],
      readTimeLabel: `${posts[0].readTime} blog.minRead`,
      href: `/blog/${posts[0].slug}`,
    });
    expect(viewModel.isActive).toBe(false);
  });

  it("exposes the post empty state", () => {
    const viewModel = createBlogPostDetailsViewModel(
      null,
      "pt-BR",
      translate,
    );
    expect(viewModel).toMatchObject({ post: null, isEmpty: true });
  });
});
