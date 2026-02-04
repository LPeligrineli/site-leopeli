"use client";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { skillCategories, profile } from "@/data/content";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";

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
  const { locale, t } = useLanguage();

  const bioContent = {
    "pt-BR": [
      "Com mais de 8 anos de experiência em desenvolvimento frontend, construí minha carreira focando na interseção entre tecnologia e experiência do usuário. Minha jornada começou quando descobri que código pode ser uma forma de arte - uma ferramenta para criar experiências que impactam milhões de pessoas.",
      "Ao longo dos anos, tive o privilégio de trabalhar com empresas de diversos segmentos, desde startups ágeis até corporações multinacionais. Cada projeto me ensinou algo novo sobre como criar interfaces que não apenas funcionam, mas encantam.",
      "Atualmente, meu foco está em React e TypeScript, mas sempre mantenho a mente aberta para novas tecnologias. Acredito que um bom desenvolvedor não é definido pelas ferramentas que usa, mas pela capacidade de resolver problemas de forma elegante e eficiente.",
      "Quando não estou codando, você pode me encontrar contribuindo para projetos open source, escrevendo artigos técnicos ou mentorando desenvolvedores em início de carreira.",
    ],
    "en-US": [
      "With over 8 years of frontend development experience, I've built my career focusing on the intersection of technology and user experience. My journey began when I discovered that code can be a form of art - a tool for creating experiences that impact millions of people.",
      "Throughout the years, I've had the privilege of working with companies across various sectors, from agile startups to multinational corporations. Each project taught me something new about creating interfaces that don't just work, but delight.",
      "Currently, my focus is on React and TypeScript, but I always keep an open mind for new technologies. I believe a good developer isn't defined by the tools they use, but by their ability to solve problems elegantly and efficiently.",
      "When I'm not coding, you can find me contributing to open source projects, writing technical articles, or mentoring early-career developers.",
    ],
  };

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
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="md:w-auto md:h-full md:aspect-square rounded-2xl object-cover"
                  />
                  <BorderBeam
                    duration={9}
                    delay={3}
                    size={400}
                    borderWidth={2}
                    className="from-transparent via-blue-500 to-transparent"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={itemVariants}
                className="md:col-span-2 space-y-6"
              >
                {bioContent[locale].map((paragraph, index) => (
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
              {skillCategories.map((category) => (
                <motion.div
                  key={category.key}
                  variants={itemVariants}
                  className=""
                >
                  <MagicCard className="p-8 rounded-xl relative">
                    <h3 className="text-xl font-semibold text-foreground mb-6">
                      {t(`skills.${category.key}`)}
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
