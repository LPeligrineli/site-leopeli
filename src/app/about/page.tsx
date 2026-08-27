"use client";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAboutViewModel } from "@/features/site/view-models/use-site-content-view-model";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { useMobile } from "@/hooks/useMobile";
import Image from "next/image";

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

export default function AboutPage() {
  const { t } = useLanguage();
  const isMobile = useMobile();
  const viewModel = useAboutViewModel();

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
              className="max-w-3xl"
            >
              <p className="text-primary font-medium mb-4">
                {t("about.title")}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t("about.subtitle")}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t("about.intro")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Bio */}
        <section className="section">
          <div className="container-tight">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-12"
            >
              {/* Avatar */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center md:justify-start"
              >
                <div className="relative w-auto h-full md:w-full md:h-auto md:aspect-square rounded-2xl bg-gradient-to-br from-primary/30 to-secondary flex items-center justify-center text-8xl font-bold text-primary/30">
                  <Image
                    src={viewModel.profile.avatar}
                    alt={viewModel.profile.name}
                    width={800}
                    height={800}
                    className="md:w-auto md:h-full md:aspect-square rounded-2xl object-cover"
                  />
                  <BorderBeam
                    duration={9}
                    delay={3}
                    size={400}
                    borderWidth={2}
                    className="from-transparent via-primary to-transparent"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={itemVariants}
                className="md:col-span-2 space-y-6"
              >
                {viewModel.biography.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Detail */}
        <section className="section bg-card/30">
          <div className="container-tight">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t("skills.title")}
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-8"
            >
              {viewModel.categories.map((category) => (
                <motion.div
                  key={category.key}
                  variants={itemVariants}
                  className="relative rounded-xl transition-all duration-300 w-full "
                >
                  <MagicCard className="p-8 rounded-xl relative">
                    <h3 className="text-xl font-semibold text-foreground mb-6">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="px-4 py-2 rounded-lg bg-secondary/50 text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
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
      </main>
      <Footer />
    </div>
  );
}
