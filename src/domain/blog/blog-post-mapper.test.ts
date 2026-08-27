import { describe, expect, it } from "vitest";
import { blogPostRecords } from "@/data/blog";
import { mapBlogPostRecordToBlogPost } from "./blog-post-mapper";

describe("mapBlogPostRecordToBlogPost", () => {
  it("converts the record date and isolates record arrays", () => {
    const record = blogPostRecords[0];
    const post = mapBlogPostRecordToBlogPost(record);

    expect(post.publishedAt).toEqual(new Date(record.date));
    expect(post).not.toHaveProperty("date");
    expect(post.tags).toEqual(record.tags);
    expect(post.tags).not.toBe(record.tags);
  });
});
