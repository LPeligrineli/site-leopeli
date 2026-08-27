import { describe, expect, it, vi } from "vitest";
import { testimonialsRepository } from "@/data/repositories/testimonials-repository";
import { createTestimonialsViewModel } from "./testimonials-view-model";

const translate = (key: string) => key;

describe("createTestimonialsViewModel", () => {
  it("localizes, paginates and exposes the show-more command", async () => {
    const testimonials = await testimonialsRepository.findAll();
    const onShowMore = vi.fn();
    const viewModel = createTestimonialsViewModel(
      testimonials,
      "pt-BR",
      translate,
      3,
      onShowMore,
    );

    expect(viewModel.testimonials).toHaveLength(3);
    expect(viewModel.testimonials[0].content).toBe(
      testimonials[0].content["pt-BR"],
    );
    expect(viewModel.canShowMore).toBe(true);

    viewModel.onShowMore();
    expect(onShowMore).toHaveBeenCalledOnce();
  });

  it("exposes the empty state", () => {
    const viewModel = createTestimonialsViewModel(
      [],
      "en-US",
      translate,
      3,
      vi.fn(),
    );
    expect(viewModel).toMatchObject({
      testimonials: [],
      isEmpty: true,
      canShowMore: false,
    });
  });
});
