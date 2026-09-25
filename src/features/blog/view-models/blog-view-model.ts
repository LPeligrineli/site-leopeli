import type { BlogPost } from "@/domain/blog/blog-post";
import type { Locale } from "@/shared/i18n/locale";
import { parseBlogContent } from "../lib/blog-content";
import type {
  BlogCopy,
  BlogPostDetailsViewModel,
  BlogViewModel,
} from "../types/blog-view-model";

type Translate = (key: string) => string;

function createBlogCopy(t: Translate): BlogCopy {
  return {
    title: t("blog.title"),
    subtitle: t("blog.subtitle"),
    readMore: t("blog.readMore"),
    viewAll: t("blog.viewAll"),
    backHome: t("common.backHome"),
  };
}

function formatReadTime(readTime: number, t: Translate) {
  return `${readTime} ${t("blog.minRead")}`;
}

export function createBlogViewModel(
  posts: BlogPost[],
  locale: Locale,
  t: Translate,
  isActive: boolean,
): BlogViewModel {
  return {
    posts: posts.map((post) => ({
      slug: post.slug,
      title: post.title[locale],
      titleInitial: post.title[locale].charAt(0),
      image: post.image,
      excerpt: post.excerpt[locale],
      readTimeLabel: formatReadTime(post.readTime, t),
      tags: [...post.tags],
      href: `/blog/${post.slug}`,
    })),
    copy: createBlogCopy(t),
    isActive,
    isEmpty: posts.length === 0,
  };
}

export function createBlogPostDetailsViewModel(
  post: BlogPost | null,
  locale: Locale,
  t: Translate,
): BlogPostDetailsViewModel {
  const content = post ? parseBlogContent(post.content[locale]) : [];
  const imageIsInContent = content.some(
    (block) => block.type === "image" && block.src === post?.image,
  );

  return {
    post: post
      ? {
          slug: post.slug,
          title: post.title[locale],
          titleInitial: post.title[locale].charAt(0),
          excerpt: post.excerpt[locale],
          content,
          cover:
            post.image && !imageIsInContent
              ? { src: post.image, alt: post.imageAlt?.[locale] ?? "" }
              : undefined,
          // Dates are stored as calendar days (YYYY-MM-DD, parsed as UTC).
          // Formatting in UTC keeps the day stable in any viewer time zone.
          publishedAtLabel: post.publishedAt.toLocaleDateString(locale, {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          }),
          readTimeLabel: formatReadTime(post.readTime, t),
          tags: [...post.tags],
        }
      : null,
    copy: {
      ...createBlogCopy(t),
      notFound: t("blog.notFound"),
    },
    isEmpty: post === null,
  };
}
