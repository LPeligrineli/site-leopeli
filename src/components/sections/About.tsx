"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { MyIconCloud } from "../layout/MyIconCloud";
import { useMobile } from "@/hooks/useMobile";

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

export function About() {
  const { t } = useLanguage();
  const isMobile = useMobile();

  return (
    <section className="section bg-card/30">
      <div className="container-tight">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <p className="text-primary font-medium mb-2">
                {t("about.title")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t("about.subtitle")}
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {t("about.intro")}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground leading-relaxed"
            >
              {t("about.bio")}
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button variant="outline" asChild className="group">
                <Link href="/about">
                  {t("about.readMore")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Highlights */}
          
            <motion.div
              variants={itemVariants}
              className="text-center w-full"
            >
              <MyIconCloud width={isMobile ? 300 : 400} height={isMobile ? 300 : 400} />
            </motion.div>
         
        </motion.div>
      </div>
    </section>
  );
}
