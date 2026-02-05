import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Home, Hammer, Wrench, HardHat } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const InBuilding = () => {
  const { locale } = useLanguage();

  const content = {
    'pt-BR': {
      title: 'Esta página está em construção',
      subtitle: 'Estamos construindo algo incrível aqui.',
      description: 'Esta seção ainda está em progresso. Volte em breve para ver a versão final.',
      homeButton: 'Voltar ao início',
    },
    'en-US': {
      title: 'This page is under construction',
      subtitle: "We're building something awesome here.",
      description: 'This section is still in progress. Come back soon to see the final version.',
      homeButton: 'Go back home',
    },
  };

  const t = content[locale];

  const floatingIcons = [
    { Icon: Hammer, delay: 0, x: -60, y: -40 },
    { Icon: Wrench, delay: 0.2, x: 60, y: -30 },
    { Icon: HardHat, delay: 0.4, x: 0, y: 50 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-card/50">
      <div className="flex-1 flex items-center justify-center px-4 mb-20">
        <div className="text-center max-w-lg mx-auto">
          {/* Construction illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-10 relative h-48"
          >
            {/* Central gear/cog icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
              </motion.div>
            </div>

            {/* Floating tool icons */}
            {floatingIcons.map(({ Icon, delay, x, y }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [y, y - 10, y],
                }}
                transition={{ 
                  opacity: { duration: 0.3, delay },
                  scale: { duration: 0.3, delay },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 }
                }}
                className="absolute left-1/2 top-1/2"
                style={{ 
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  marginLeft: x,
                  marginTop: y,
                }}
              >
                <div className="p-3 rounded-xl bg-secondary border border-border">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-48 h-1.5 mx-auto mb-8 bg-secondary rounded-full overflow-hidden"
          >
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1/3 h-full bg-primary rounded-full"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            {t.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl font-medium gradient-text mb-4"
          >
            {t.subtitle}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground text-lg mb-8 max-w-md mx-auto"
          >
            {t.description}
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button asChild variant="hero" size="lg">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                {t.homeButton}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InBuilding;
