"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink, Github } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type {
  ProjectCaseSectionId,
  ProjectDetailsViewModel,
} from "../types/projects-view-model";

function CaseSection({
  id,
  title,
  children,
}: {
  id: ProjectCaseSectionId;
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      aria-labelledby={`${id}-title`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="scroll-mt-28"
    >
      <h2
        id={`${id}-title`}
        className="text-2xl font-semibold text-foreground mb-4"
      >
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

function StackList({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <li
          key={tech}
          className="px-3 py-1.5 text-sm rounded-lg bg-secondary/50 text-secondary-foreground"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

export function ProjectDetailsPresenter({
  project,
  copy,
}: ProjectDetailsViewModel) {
  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {copy.notFound}
          </h1>
          <Button asChild>
            <Link href="/projects">{copy.backHome}</Link>
          </Button>
        </div>
      </div>
    );
  }

  const hasLinks = Boolean(project.liveUrl || project.githubUrl);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="section pb-12 md:pb-16 lg:pb-16 hero-gradient">
          <div className="container-tight">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                {copy.viewAll}
              </Link>

              <p className="text-primary font-medium">
                {project.company} · {project.period}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                {project.description}
              </p>

              <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5 max-w-3xl">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {copy.highlight}
                </span>
                <p className="text-foreground font-medium mt-1">
                  {project.highlight}
                </p>
              </div>

              {hasLinks && (
                <div className="flex flex-wrap gap-4 mt-8">
                  {project.liveUrl && (
                    <Button variant="hero" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {copy.visitProduct}
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="hero-outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container-tight grid gap-12 lg:grid-cols-[minmax(0,1fr)_15rem]">
            <article className="space-y-14 min-w-0">
              {project.context && (
                <CaseSection id="context" title={copy.context}>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.context}
                  </p>
                </CaseSection>
              )}

              {project.challenge && (
                <CaseSection id="challenge" title={copy.challenge}>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </CaseSection>
              )}

              {project.myRole.length > 0 && (
                <CaseSection id="my-role" title={copy.myRole}>
                  <ul className="space-y-3">
                    {project.myRole.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-muted-foreground leading-relaxed"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CaseSection>
              )}

              {project.architecture.length > 0 && (
                <CaseSection id="architecture" title={copy.architecture}>
                  <div className="space-y-8">
                    {project.architecture.map((block) => (
                      <div key={block.title}>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {block.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {block.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </CaseSection>
              )}

              {project.decisions.length > 0 && (
                <CaseSection id="decisions" title={copy.decisions}>
                  <div className="grid gap-4">
                    {project.decisions.map((decision) => (
                      <div
                        key={decision.title}
                        className="rounded-xl border border-border/50 border-l-2 border-l-primary bg-card p-5"
                      >
                        <h3 className="font-semibold text-foreground mb-2">
                          {decision.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {decision.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </CaseSection>
              )}

              {project.results.length > 0 && (
                <CaseSection id="results" title={copy.results}>
                  <ul className="space-y-3">
                    {project.results.map((result) => (
                      <li
                        key={result}
                        className="flex gap-3 text-foreground leading-relaxed"
                      >
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-1 h-4 w-4 shrink-0 text-primary"
                        />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </CaseSection>
              )}

              <div className="lg:hidden space-y-6 rounded-xl border border-border/50 bg-card/50 p-5">
                <div>
                  <h2 className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {copy.role}
                  </h2>
                  <p className="text-sm text-foreground font-medium">
                    {project.role}
                  </p>
                </div>
                <div>
                  <h2 className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                    {copy.stack}
                  </h2>
                  <StackList stack={project.stack} />
                </div>
              </div>
            </article>

            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-8 rounded-xl border border-border/50 bg-card/50 p-6">
                <div>
                  <h2 className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {copy.role}
                  </h2>
                  <p className="text-sm text-foreground font-medium">
                    {project.role}
                  </p>
                </div>
                <div>
                  <h2 className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {copy.period}
                  </h2>
                  <p className="text-sm text-foreground">{project.period}</p>
                </div>
                <div>
                  <h2 className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                    {copy.stack}
                  </h2>
                  <StackList stack={project.stack} />
                </div>
                <nav aria-label={copy.onThisPage}>
                  <h2 className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                    {copy.onThisPage}
                  </h2>
                  <ul className="space-y-2 text-sm">
                    {project.sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {section.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
          </div>
        </section>

        {project.images.length > 0 && (
          <section className="pb-20">
            <div className="container-tight">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                {copy.screenshots}
              </h2>
              <Carousel>
                <CarouselContent>
                  {project.images.map((image) => (
                    <CarouselItem key={image.src}>
                      {/* Existing project screenshots intentionally keep their native aspect ratio. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="rounded-lg w-full h-auto"
                      />
                      <span className="text-sm text-muted-foreground mt-2 block text-left">
                        {image.label}
                      </span>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
