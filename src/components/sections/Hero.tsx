"use client";
import { motion } from "framer-motion";
import { ArrowDown, Download, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { profile } from "@/data/content";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/useMobile";

const socialLinks = [
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Hero() {
  const { locale, t } = useLanguage();
  const isMobile = useMobile();

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden w-full">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-tight relative z-10 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-primary font-medium mb-4"
          >
            {t("hero.greeting")}
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
          >
            {profile.name}
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-medium gradient-text mb-6"
          >
            {t("hero.role")}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            {t("hero.description")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="hero" size="lg" asChild>
              <a href={profile.cv[locale]} download className="gap-2">
                <Download className="w-5 h-5" />
                {t("hero.cta.cv")}
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a
                href={`https://wa.me/5511985545299?text=${encodeURIComponent(t("contact.watsapp"))}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("hero.cta.contact")}
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={t(profile.linkedin[locale])}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full border border-border text-muted-foreground"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
      {isMobile ? (
        <AnimatedGridPattern
          numSquares={40}
          duration={3}
          repeatDelay={1}
          className={cn(
            "inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,white,transparent)]",
          )}
        />
      ) : (
        <InteractiveGridPattern
          squares={[100, 40]}
          width={80}
          height={80}
          className={cn(
            "inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,white,transparent)]",
          )}
        />
      )}
    </section>
  );
}
