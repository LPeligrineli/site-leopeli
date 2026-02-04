"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/data/content";
import { MagicCard } from "../ui/magic-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function BlogPreview() {
  const { locale, t } = useLanguage();
  const featuredPosts = blogPosts.filter((p) => p.featured).slice(0, 2);

  return (
    <section className="section bg-card/30">
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">{t("blog.title")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("blog.subtitle")}
          </h2>
        </motion.div>

        {/* Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {featuredPosts.map((post) => (
            <motion.article
              key={post.slug}
              variants={itemVariants}
              className="group flex flex-col rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <MagicCard>
                {/* Image placeholder */}
                <div className="aspect-[2/1] bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary/20">
                    {post.title[locale].charAt(0)}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title[locale]}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {post.excerpt[locale]}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime} {t("blog.minRead")}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      {t("blog.readMore")}
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </MagicCard>
            </motion.article>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" asChild className="group">
            <Link href="/blog">
              {t("blog.viewAll")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
