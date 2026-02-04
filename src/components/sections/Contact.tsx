'use client';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { profile } from '@/data/content';

export function Contact() {
  const { t, locale } = useLanguage();

  return (
    <section id="contact" className="section">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Header */}
          <p className="text-primary font-medium mb-2">{t('contact.title')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('contact.subtitle')}
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            {t('contact.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
              <a
                href={`mailto:${profile.email}`}
                className="gap-2"
              >
                <Mail className="w-5 h-5" />
                {t('contact.cta')}
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild className="w-full sm:w-auto">
              <a
                href={profile.linkedin[locale]}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Email display */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-muted-foreground"
          >
            {profile.email}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
