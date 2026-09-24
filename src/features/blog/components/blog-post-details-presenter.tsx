"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import type { BlogContentBlock, BlogInline } from "../lib/blog-content";
import type { BlogPostDetailsViewModel } from "../types/blog-view-model";

function InlineContent({ content }: { content: BlogInline[] }) {
  return (
    <>
      {content.map((token, index) => {
        switch (token.type) {
          case "strong":
            return (
              <strong key={index} className="font-semibold text-foreground">
                {token.value}
              </strong>
            );
          case "em":
            return <em key={index}>{token.value}</em>;
          case "code":
            return (
              <code
                key={index}
                className="rounded bg-secondary/60 px-1.5 py-0.5 font-mono text-[0.9em] text-foreground"
              >
                {token.value}
              </code>
            );
          case "link": {
            const isExternal = /^https?:\/\//.test(token.href);
            return (
              <a
                key={index}
                href={token.href}
                className="text-primary underline underline-offset-4 hover:text-primary/80"
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {token.value}
              </a>
            );
          }
          default:
            return <span key={index}>{token.value}</span>;
        }
      })}
    </>
  );
}

function ContentBlock({ block }: { block: BlogContentBlock }) {
  switch (block.type) {
    case "heading":
      return block.level === 2 ? (
        <h2
          id={block.id}
          className="scroll-mt-28 pt-6 text-2xl md:text-3xl font-semibold text-foreground"
        >
          {block.text}
        </h2>
      ) : (
        <h3
          id={block.id}
          className="scroll-mt-28 pt-4 text-xl font-semibold text-foreground"
        >
          {block.text}
        </h3>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-primary pl-5 italic text-foreground/90">
          <InlineContent content={block.content} />
        </blockquote>
      );
    case "image":
      return (
        <figure className="mx-auto max-w-md py-4">
          {/* Post images keep their native aspect ratio. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src}
            alt={block.alt}
            loading="lazy"
            className="w-full h-auto rounded-xl border border-border/50"
          />
          {block.caption && (
            <figcaption className="mt-3 text-center text-sm text-muted-foreground">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    default:
      return (
        <p>
          <InlineContent content={block.content} />
        </p>
      );
  }
}

export function BlogPostDetailsPresenter({
  post,
  copy,
}: BlogPostDetailsViewModel) {
  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {copy.notFound}
          </h1>
          <Button asChild>
            <Link href="/blog">{copy.backHome}</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="section pb-10 md:pb-12 lg:pb-12 hero-gradient">
          <div className="container-tight">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                {copy.viewAll}
              </Link>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {post.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.publishedAtLabel}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTimeLabel}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="pt-10 pb-20 md:pb-28">
          <div className="container-tight">
            <article className="max-w-2xl mx-auto space-y-6 text-lg leading-relaxed text-foreground/80">
              {post.content.map((block, index) => (
                <ContentBlock key={index} block={block} />
              ))}
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
