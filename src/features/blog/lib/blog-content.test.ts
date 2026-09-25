import { describe, expect, it } from "vitest";
import { countWords, parseBlogContent, parseInline } from "./blog-content";

describe("parseInline", () => {
  it("splits text into inline tokens", () => {
    expect(
      parseInline("a **b** *c* `d` [e](https://x.dev) f"),
    ).toEqual([
      { type: "text", value: "a " },
      { type: "strong", value: "b" },
      { type: "text", value: " " },
      { type: "em", value: "c" },
      { type: "text", value: " " },
      { type: "code", value: "d" },
      { type: "text", value: " " },
      { type: "link", value: "e", href: "https://x.dev" },
      { type: "text", value: " f" },
    ]);
  });
});

describe("parseBlogContent", () => {
  it("parses headings, paragraphs, quotes and captioned images", () => {
    const blocks = parseBlogContent(
      [
        "Primeiro parágrafo\ncontinua aqui.",
        "## Faixa branca",
        "> uma citação",
        "![Alt](/img.jpg)\n*Legenda da foto.*",
        "![Sem legenda](/b.jpg)",
      ].join("\n\n"),
    );

    expect(blocks).toEqual([
      {
        type: "paragraph",
        content: [{ type: "text", value: "Primeiro parágrafo continua aqui." }],
      },
      { type: "heading", level: 2, id: "faixa-branca", text: "Faixa branca" },
      { type: "quote", content: [{ type: "text", value: "uma citação" }] },
      { type: "image", src: "/img.jpg", alt: "Alt", caption: "Legenda da foto." },
      { type: "image", src: "/b.jpg", alt: "Sem legenda", caption: undefined },
    ]);
  });

  it("parses bullet and numbered lists with inline formatting", () => {
    const [bullets, numbered] = parseBlogContent(
      "- um **host**;\n- sete módulos\n  que continuam\n\n1. primeiro\n2. segundo",
    );

    expect(bullets).toEqual({
      type: "list",
      ordered: false,
      items: [
        [
          { type: "text", value: "um " },
          { type: "strong", value: "host" },
          { type: "text", value: ";" },
        ],
        [{ type: "text", value: "sete módulos que continuam" }],
      ],
    });
    expect(numbered).toMatchObject({ type: "list", ordered: true });
  });

  it("normalizes windows line endings", () => {
    expect(parseBlogContent("a\r\n\r\nb")).toHaveLength(2);
  });
});

describe("countWords", () => {
  it("ignores images and punctuation-only tokens", () => {
    expect(countWords("Olá, mundo — ![x](/y.jpg) de novo")).toBe(4);
  });
});
