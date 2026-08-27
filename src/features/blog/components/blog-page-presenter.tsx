"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import InBuilding from "@/components/layout/InBuilding";
import type { BlogViewModel } from "../types/blog-view-model";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function BlogPagePresenter({ posts, copy, isActive }: BlogViewModel) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {isActive ? (
          <>
            <section className="section hero-gradient">
              <div className="container-tight">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-primary font-medium mb-4">{copy.title}</p>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    {copy.subtitle}
                  </h1>
                </motion.div>
              </div>
            </section>

            <section className="section">
              <div className="container-tight">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {posts.map((post) => (
                    <motion.article
                      key={post.slug}
                      variants={itemVariants}
                      className="group flex flex-col rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="aspect-[3/2] bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                        <span className="text-5xl font-bold text-primary/20">
                          {post.titleInitial}
                        </span>
                      </div>
                      <div className="flex-1 p-6 flex flex-col">
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
                        <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground text-sm mb-4 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTimeLabel}
                          </div>
                          <Link
                            href={post.href}
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            {copy.readMore}
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            </section>
          </>
        ) : (
          <InBuilding />
        )}
      </main>
      <Footer />
    </div>
  );
}
