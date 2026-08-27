"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";
import type { ProjectsViewModel } from "../types/projects-view-model";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function FeaturedProjectsPresenter({
  projects,
  copy,
}: ProjectsViewModel) {
  return (
    <section className="section bg-card/30">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">{copy.title}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {copy.subtitle}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.slug}
              variants={itemVariants}
              className="group relative flex flex-col rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <MagicCard className="w-full h-full flex flex-col">
                <div className="aspect-video p-4 bg-white flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-fill"
                  />
                </div>

                <div className="flex-1 p-6 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {copy.role}
                      </span>
                      <p className="text-sm text-foreground">{project.role}</p>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {copy.impact}
                      </span>
                      <p className="text-sm text-primary">{project.impact}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.hiddenStackCount > 0 && (
                      <span className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-muted-foreground">
                        +{project.hiddenStackCount}
                      </span>
                    )}
                  </div>

                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    {copy.viewProject}
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </MagicCard>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" asChild className="group">
            <Link href="/projects">
              {copy.viewAll}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
