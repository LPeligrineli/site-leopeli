'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Home, FolderOpen } from "lucide-react";
import { motion } from "framer-motion";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";

export const NotFound = () => {
  const { locale } = useLanguage();

  const content = {
    'pt-BR': {
      title: '404',
      subtitle: 'Página não encontrada',
      description: 'Parece que esta página tirou um dia de folga. Vamos te colocar de volta no caminho certo.',
      homeButton: 'Voltar ao início',
      projectsButton: 'Ver projetos',
    },
    'en-US': {
      title: '404',
      subtitle: 'Page not found',
      description: "Looks like this page took a day off. Let's get you back on track.",
      homeButton: 'Go back home',
      projectsButton: 'View projects',
    },
  };

  const t = content[locale];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-lg mx-auto">
          {/* Abstract graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative"
          >
            <div className="w-48 h-48 mx-auto relative">
              {/* Glowing circles */}
              <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-primary/10" />
              <div className="absolute inset-8 rounded-full bg-primary/15" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-7xl font-bold gradient-text">?</span>
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-8xl md:text-9xl font-bold gradient-text mb-4"
          >
            {t.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-foreground mb-4"
          >
            {t.subtitle}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground text-lg mb-8 max-w-md mx-auto"
          >
            {t.description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild variant="hero" size="lg">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                {t.homeButton}
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <Link href="/projects">
                <FolderOpen className="w-4 h-4 mr-2" />
                {t.projectsButton}
              </Link>
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const GlobalNotFound = () => {
  return (
    <LanguageProvider>
      <NotFound />
    </LanguageProvider>
  )
}

export default GlobalNotFound;
