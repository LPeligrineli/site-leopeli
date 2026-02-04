"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Car, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/data/content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string | undefined;
  const { locale, t } = useLanguage();

  if (!slug) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Loading...
          </h1>
        </div>
      </div>
    );
  }

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Project not found
          </h1>
          <Button asChild>
            <Link href="/projects">{t("common.backHome")}</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section pb-0 hero-gradient">
          <div className="container-tight">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 mr-2"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("projects.viewAll")}
              </Link>

              <span className="text-primary font-medium">{project.year}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                {project.title[locale]}
              </h1>
              <p className="text-xl text-muted-foreground">
                {project.description[locale]}
              </p>
              <h2 className="text-2xl font-semibold text-foreground mt-6 mb-4">
                {t("projects.challenges")}
              </h2>
              <p className="text-xl text-muted-foreground">
                {project.projectPage.challenges[locale]}
              </p>
              <h2 className="text-2xl font-semibold text-foreground mt-6 mb-4">
                {t("projects.solutions")}
              </h2>
              <p className="text-xl text-muted-foreground">
                {project.projectPage.solutions[locale]}
              </p>

              {/* Actions */}
              <div className="flex gap-4 mt-8">
                {project.liveUrl && (
                  <Button variant="hero" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
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
            </motion.div>
          </div>
        </section>

        {/* Details */}
        <section className="py-6">
          <div className="container-tight">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Main Image */}
              <div className="md:col-span-2">
                <Carousel>
                  <CarouselContent>
                    {project.projectPage.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div>
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="rounded-lg object-cover w-full h-96"
                          />
                        </div>
                        <span className="text-sm text-muted-foreground mt-2 block text-left">
                          {image.label[locale]}
                        </span>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                    {t("projects.role")}
                  </h3>
                  <p className="text-foreground font-medium">
                    {project.role[locale]}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                    {t("projects.impact")}
                  </h3>
                  <p className="text-primary font-medium">
                    {project.projectPage.impact[locale]}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-3">
                    {t("projects.stack")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm rounded-lg bg-secondary/50 text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
