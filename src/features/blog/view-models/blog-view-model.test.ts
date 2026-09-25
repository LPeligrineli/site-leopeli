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

  it("parses post content into blocks and keeps the calendar day", async () => {
    const post = await blogRepository.findBySlug(
      "ser-ruim-em-alguma-coisa-de-novo",
    );
    const viewModel = createBlogPostDetailsViewModel(post, "pt-BR", translate);

    expect(viewModel.post?.content[0].type).toBe("paragraph");
    expect(
      viewModel.post?.content.some((block) => block.type === "image"),
    ).toBe(true);
    expect(viewModel.post?.publishedAtLabel).toContain("24");
  });

  it("shows the cover only when the image is not already in the content", async () => {
    const [withCover, withInlinePhoto] = await Promise.all([
      blogRepository.findBySlug("microfrontends-eu-faria-de-novo"),
      blogRepository.findBySlug("ser-ruim-em-alguma-coisa-de-novo"),
    ]);

    expect(
      createBlogPostDetailsViewModel(withCover, "en-US", translate).post?.cover,
    ).toMatchObject({ src: withCover?.image });
    expect(
      createBlogPostDetailsViewModel(withInlinePhoto, "en-US", translate).post
        ?.cover,
    ).toBeUndefined();
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
