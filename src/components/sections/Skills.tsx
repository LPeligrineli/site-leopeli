"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { skillCategories } from "@/data/content";
import { MagicCard } from "../ui/magic-card";
import { useMobile } from "@/hooks/useMobile";
import { BorderBeam } from "../ui/border-beam";

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

export function Skills() {
  const { t } = useLanguage();
  const isMobile = useMobile();

  console.log("isMobile:", isMobile);

  return (
    <section className="section">
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">{t("skills.title")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("skills.subtitle")}
          </h2>
        </motion.div>

        {/* Skills Grid */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.key}
              variants={itemVariants}
              className=" rounded-xl transition-all duration-300 w-full relative "
            >
             
                <MagicCard
                  className="p-6 w-full h-full flex"
                  gradientFrom="var(--primary)"
                  gradientTo="var(--accent)"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {t(`skills.${category.key}`)}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1.5 text-sm rounded-full bg-secondary/50 text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </MagicCard>
             
              {isMobile && (
                <BorderBeam
                  duration={9}
                  delay={3}
                  size={200}
                  borderWidth={2}
                  className="from-transparent via-blue-500 to-transparent"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
