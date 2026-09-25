/**
 * Minimal, dependency-free parser for the markdown subset used in blog posts:
 * `## heading`, `### subheading`, paragraphs, `> quotes`, `- bullet` and `1. numbered`
 * lists, images with an optional italic caption on the next line, and inline
 * **strong**, *em*, `code` and [links](url).
 */

export type BlogInline =
  | { type: "text"; value: string }
  | { type: "strong"; value: string }
  | { type: "em"; value: string }
  | { type: "code"; value: string }
  | { type: "link"; value: string; href: string };

export type BlogContentBlock =
  | { type: "heading"; level: 2 | 3; id: string; text: string }
  | { type: "paragraph"; content: BlogInline[] }
  | { type: "quote"; content: BlogInline[] }
  | { type: "list"; ordered: boolean; items: BlogInline[][] }
  | { type: "image"; src: string; alt: string; caption?: string };

const INLINE_PATTERN =
  /\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`|\[([^\]]+)\]\(([^)\s]+)\)/g;

const IMAGE_PATTERN = /^!\[([^\]]*)\]\(([^)\s]+)\)$/;
const CAPTION_PATTERN = /^\*([^*]+)\*$/;
const BULLET_PATTERN = /^-\s+/;
const NUMBERED_PATTERN = /^\d+\.\s+/;

function parseListItems(lines: string[], marker: RegExp): BlogInline[][] {
  const items: string[] = [];
  for (const line of lines) {
    if (marker.test(line)) items.push(line.replace(marker, ""));
    else if (items.length > 0) items[items.length - 1] += ` ${line.trim()}`;
  }
  return items.map((item) => parseInline(item.trim()));
}

export function parseInline(text: string): BlogInline[] {
  const result: BlogInline[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(INLINE_PATTERN)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      result.push({ type: "text", value: text.slice(lastIndex, index) });
    }

    const [, strong, em, code, linkText, href] = match;
    if (strong !== undefined) result.push({ type: "strong", value: strong });
    else if (em !== undefined) result.push({ type: "em", value: em });
    else if (code !== undefined) result.push({ type: "code", value: code });
    else if (linkText !== undefined && href !== undefined)
      result.push({ type: "link", value: linkText, href });

    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    result.push({ type: "text", value: text.slice(lastIndex) });
  }

  return result;
}

export function slugifyHeading(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function parseBlogContent(markdown: string): BlogContentBlock[] {
  const chunks = markdown
    .replace(/\r\n/g, "\n")
    .split(/\n{2,}/)
    .map((chunk) => chunk.trim())
    .filter(Boolean);

  return chunks.map((chunk): BlogContentBlock => {
    const heading = /^(#{2,3})\s+(.+)$/.exec(chunk);
    if (heading) {
      const text = heading[2].trim();
      return {
        type: "heading",
        level: heading[1].length === 2 ? 2 : 3,
        id: slugifyHeading(text),
        text,
      };
    }

    const [firstLine, ...rest] = chunk.split("\n");
    const image = IMAGE_PATTERN.exec(firstLine.trim());
    if (image) {
      const captionLine = rest.join(" ").trim();
      const caption = CAPTION_PATTERN.exec(captionLine)?.[1];
      return { type: "image", alt: image[1], src: image[2], caption };
    }

    const lines = chunk.split("\n");
    if (BULLET_PATTERN.test(lines[0]) || NUMBERED_PATTERN.test(lines[0])) {
      const ordered = NUMBERED_PATTERN.test(lines[0]);
      return {
        type: "list",
        ordered,
        items: parseListItems(lines, ordered ? NUMBERED_PATTERN : BULLET_PATTERN),
      };
    }

    if (chunk.startsWith(">")) {
      const text = chunk
        .split("\n")
        .map((line) => line.replace(/^>\s?/, ""))
        .join(" ");
      return { type: "quote", content: parseInline(text) };
    }

    return { type: "paragraph", content: parseInline(chunk.replace(/\n/g, " ")) };
  });
}

export function countWords(markdown: string): number {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .split(/\s+/)
    .filter((word) => /[\p{L}\p{N}]/u.test(word)).length;
}
