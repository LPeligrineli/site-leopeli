"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { testimonials } from "@/data/testimonials";
import { MagicCard } from "../ui/magic-card";
import { TestimonialDialog } from "../layout/Testimonial";
import { useState } from "react";

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

export function Testimonials() {
  const { locale, t } = useLanguage();
  const [visibleTestimonial, setVisibleTestimonial] = useState(3);

  const displayedTestimonials = testimonials.slice(0, visibleTestimonial);

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
          <p className="text-primary font-medium mb-2">
            {t("testimonials.title")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("testimonials.subtitle")}
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          key={`testimonials-${visibleTestimonial}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedTestimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="relative rounded-xl transition-all duration-300"
              >
                <MagicCard className="p-6 h-full flex flex-col justify-start">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />

                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed line-clamp-5 flex-grow">
                    "{testimonial.content[locale]}"
                  </p>
                  <TestimonialDialog testimonial={testimonial} />

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary flex items-center justify-center text-lg font-semibold text-primary">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role[locale]} · {testimonial.company}
                      </p>
                    </div>
                  </div>
                </MagicCard>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        {visibleTestimonial < testimonials.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleTestimonial(testimonials.length)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              {t("common.seeMore")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
