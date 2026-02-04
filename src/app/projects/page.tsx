'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/content';
import Image from 'next/image';
import { MagicCard } from '@/components/ui/magic-card';

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

export default function ProjectsPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section hero-gradient">
          <div className="container-tight">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-primary font-medium mb-4">{t('projects.title')}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t('projects.subtitle')}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section">
          <div className="container-tight">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-8"
            >
              {projects.map((project) => (
                <motion.article
                  key={project.slug}
                  variants={itemVariants}
                  className="group flex flex-col rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <MagicCard className="w-full h-full flex flex-col">

                  {/* Image */}
                  <div className="aspect-video bg-white p-4 flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.title[locale]}
                      width={640}
                      height={360}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>

                    <h2 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title[locale]}
                    </h2>

                    <p className="text-muted-foreground mb-4 flex-1">
                      {project.description[locale]}
                    </p>

                    <div className="space-y-3 mb-4">
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {t('projects.role')}
                        </span>
                        <p className="text-sm text-foreground">{project.role[locale]}</p>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {t('projects.impact')}
                        </span>
                        <p className="text-sm text-primary">{project.impact[locale]}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      {t('projects.viewProject')}
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                  </MagicCard>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
