"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import type { TestimonialsViewModel } from "../types/testimonials-view-model";
import { TestimonialDialogContainer } from "./testimonial-dialog-container";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function TestimonialsPresenter({
  testimonials,
  title,
  subtitle,
  readMoreLabel,
  seeMoreLabel,
  originalVersionLabel,
  printVersionLabel,
  canShowMore,
  onShowMore,
}: TestimonialsViewModel) {
  return (
    <section className="section">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">{title}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {subtitle}
          </h2>
        </motion.div>

        <motion.div
          key={`testimonials-${testimonials.length}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {testimonials.map((testimonial) => (
              <motion.article
                key={testimonial.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="relative rounded-xl transition-all duration-300"
              >
                <MagicCard className="p-6 h-full flex flex-col justify-start">
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground leading-relaxed line-clamp-5 flex-grow">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <TestimonialDialogContainer
                    testimonial={testimonial}
                    readMoreLabel={readMoreLabel}
                    originalVersionLabel={originalVersionLabel}
                    printVersionLabel={printVersionLabel}
                  />
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary flex items-center justify-center text-lg font-semibold text-primary">
                      {testimonial.initial}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.authorLabel}
                      </p>
                    </div>
                  </div>
                </MagicCard>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {canShowMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={onShowMore}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              {seeMoreLabel}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
