import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { projectsRepository } from '@/data/repositories/projects-repository';
import { FeaturedProjectsContainer } from '@/features/projects/components/featured-projects-container';
import { testimonialsRepository } from '@/data/repositories/testimonials-repository';
import { TestimonialsContainer } from '@/features/testimonials/components/testimonials-container';
import { Contact } from '@/components/sections/Contact';

const Index = async () => {
  const featuredProjects = await projectsRepository.findFeatured();
  const testimonials = await testimonialsRepository.findAll();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProjectsContainer projects={featuredProjects} />
        <TestimonialsContainer testimonials={testimonials} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
