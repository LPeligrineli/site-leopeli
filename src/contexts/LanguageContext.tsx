'use client';
import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';

export type Locale = 'pt-BR' | 'en-US';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const translations: Record<Locale, Record<string, string>> = {
  'pt-BR': {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.role': 'Senior Frontend Developer',
    'hero.description': 'Construindo experiências digitais excepcionais com React, TypeScript e foco obsessivo em performance e UX.',
    'hero.cta.cv': 'Baixar CV',
    'hero.cta.contact': 'Entrar em Contato',
    
    // About
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Transformando ideias em código elegante',
    'about.intro': 'Com mais de 8 anos de experiência, construo arquiteturas frontend escaláveis e de alta performance que impulsionam produtos digitais modernos.',
    'about.highlight1.title': '+8 Anos',
    'about.highlight1.desc': 'de Experiência',
    'about.highlight2.title': '+50 Projetos',
    'about.highlight2.desc': 'Entregues',
    'about.highlight3.title': '99%',
    'about.highlight3.desc': 'Satisfação',
    'about.bio': 'Sou desenvolvedor frontend com mais de 8 anos de experiência construindo aplicações web escaláveis, performáticas e bem estruturadas. Especialista em React e TypeScript, gosto de transformar problemas complexos em interfaces simples, intuitivas e agradáveis de usar. Minha abordagem une solidez técnica com olhar apurado para design e experiência do usuário, resultando em produtos que não apenas funcionam bem — mas que realmente fazem sentido para quem usa.',
    'about.readMore': 'Saiba mais sobre mim',
    
    // Skills
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Tecnologias e ferramentas que domino',
    'skills.frontend': 'Frontend',
    'skills.uiux': 'UI/UX',
    'skills.testing': 'Testing',
    'skills.tooling': 'Tooling',
    
    // Projects
    'projects.title': 'Projetos em Destaque',
    'projects.subtitle': 'Soluções que fazem a diferença',
    'projects.viewAll': 'Ver todos os projetos',
    'projects.viewProject': 'Ver projeto',
    'projects.role': 'Papel',
    'projects.impact': 'Impacto',
    'projects.stack': 'Stack',
    
    // Testimonials
    'testimonials.title': 'Recomendações',
    'testimonials.subtitle': 'O que dizem sobre meu trabalho',
    
    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Artigos e insights sobre desenvolvimento',
    'blog.readMore': 'Ler artigo',
    'blog.viewAll': 'Ver todos os artigos',
    'blog.minRead': 'min de leitura',
    
    // Contact
    'contact.title': 'Vamos Conversar',
    'contact.subtitle': 'Interessado em trabalhar juntos?',
    'contact.description': 'Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de colaboração.',
    'contact.cta': 'Enviar Mensagem',
    'contact.watsapp': 'Olá, vim pelo seu portfólio e gostaria de conversar sobre um projeto.',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.madeWith': 'Feito com',
    
    // Common
    'common.loading': 'Carregando...',
    'common.error': 'Erro ao carregar',
    'common.backHome': 'Voltar ao início',
  },
  'en-US': {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': "Hi, I'm",
    'hero.role': 'Senior Frontend Developer',
    'hero.description': 'Building exceptional digital experiences with React, TypeScript, and an obsessive focus on performance and UX.',
    'hero.cta.cv': 'Download CV',
    'hero.cta.contact': 'Get in Touch',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Turning ideas into elegant code',
    'about.intro': "With over 8 years of experience, I build scalable and high-performance frontend architectures that power modern digital products.",
    'about.highlight1.title': '8+ Years',
    'about.highlight1.desc': 'of Experience',
    'about.highlight2.title': '50+ Projects',
    'about.highlight2.desc': 'Delivered',
    'about.highlight3.title': '99%',
    'about.highlight3.desc': 'Satisfaction',
    'about.bio': 'I’m a frontend developer with over 8 years of experience building scalable, high-performance, and well-structured web applications. Specialized in React and TypeScript, I enjoy turning complex problems into simple, intuitive, and enjoyable user interfaces. My approach combines strong technical foundations with a keen eye for design and user experience, resulting in products that not only work flawlessly — but truly make sense for the people who use them.',
    'about.readMore': 'Learn more about me',
    
    // Skills
    'skills.title': 'Skills',
    'skills.subtitle': 'Technologies and tools I master',
    'skills.frontend': 'Frontend',
    'skills.uiux': 'UI/UX',
    'skills.testing': 'Testing',
    'skills.tooling': 'Tooling',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Solutions that make a difference',
    'projects.viewAll': 'View all projects',
    'projects.viewProject': 'View project',
    'projects.role': 'Role',
    'projects.impact': 'Impact',
    'projects.stack': 'Stack',
    
    // Testimonials
    'testimonials.title': 'Recommendations',
    'testimonials.subtitle': 'What people say about my work',
    
    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Articles and insights about development',
    'blog.readMore': 'Read article',
    'blog.viewAll': 'View all articles',
    'blog.minRead': 'min read',
    
    // Contact
    'contact.title': "Let's Talk",
    'contact.subtitle': 'Interested in working together?',
    'contact.description': "I'm always open to discussing new projects, creative ideas, or collaboration opportunities.",
    'contact.cta': 'Send Message',
    'contact.watsapp': "Hi, I came across your portfolio and would like to discuss a project.",
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error loading',
    'common.backHome': 'Back to home',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en-US');

  useEffect(() => {
    const saved = localStorage.getItem('locale');
    if (saved === 'pt-BR' || saved === 'en-US') {
      setLocaleState(saved);
      return;
    }

    const browserLang = navigator.language;
    setLocaleState(browserLang.startsWith('pt') ? 'pt-BR' : 'en-US');
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  }, []);

  const t = useCallback(
    (key: string): string => translations[locale]?.[key] ?? key,
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
