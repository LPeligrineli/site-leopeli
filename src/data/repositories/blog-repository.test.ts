import { describe, expect, it } from "vitest";
import { blogRepository } from "./blog-repository";

describe("blogRepository", () => {
  it("limits featured posts inside the repository", async () => {
    const posts = await blogRepository.findFeatured(1);
    expect(posts).toHaveLength(1);
    expect(posts[0].featured).toBe(true);
  });

  it("finds by slug and returns null when absent", async () => {
    await expect(
      blogRepository.findBySlug("react-server-components-guide"),
    ).resolves.toMatchObject({ slug: "react-server-components-guide" });
    await expect(blogRepository.findBySlug("absent")).resolves.toBeNull();
  });
});
