'use client';
import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import type { Locale } from '@/shared/i18n/locale';

export type { Locale } from '@/shared/i18n/locale';

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
    'hero.role': 'Senior Frontend Engineer',
    'hero.description': 'React e TypeScript no centro, mas o trabalho não para na tela. Mais de 8 anos participando de arquitetura, performance e decisão de produto em aplicações reais.',
    'hero.cta.cv': 'Baixar CV',
    'hero.cta.contact': 'Entrar em Contato',
    
    // About
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Não só componentes: arquitetura, performance e produto.',
    'about.intro': 'Mais de 8 anos construindo arquitetura front-end escalável e de alta performance para produtos digitais reais.',
    'about.highlight1.title': '+8 Anos',
    'about.highlight1.desc': 'de Experiência',
    'about.highlight2.title': '+50 Projetos',
    'about.highlight2.desc': 'Entregues',
    'about.highlight3.title': '99%',
    'about.highlight3.desc': 'Satisfação',
    'about.bio': 'Sou front-end sênior, focado em React e TypeScript, com mais de 8 anos de experiência. Já defini arquitetura, padronizei boilerplate e liderei tecnicamente times em produtos com alto volume de dado e usuário. Fora do código, é mentoria: ajudar dev júnior a virar sênior mais rápido do que eu virei.',
    'about.readMore': 'Saiba mais sobre mim',
    
    // Skills
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Onde entrego mais profundidade, e o ecossistema em volta',
    'skills.frontend': 'Frontend',
    'skills.uiux': 'UI/UX',
    'skills.testing': 'Testing',
    'skills.tooling': 'Tooling',
    
    // Projects
    'projects.title': 'Projetos',
    'projects.subtitle': 'Cases de arquitetura frontend',
    'projects.viewAll': 'Ver todos os projetos',
    'projects.viewProject': 'Ver case',
    'projects.role': 'Papel',
    'projects.highlight': 'Destaque',
    'projects.stack': 'Stack',
    'projects.period': 'Período',
    'projects.context': 'Contexto',
    'projects.challenge': 'Desafio',
    'projects.myRole': 'Minha atuação',
    'projects.architecture': 'Arquitetura e solução',
    'projects.decisions': 'Decisões e trade-offs',
    'projects.results': 'Resultados',
    'projects.screenshots': 'Telas',
    'projects.onThisPage': 'Neste case',
    'projects.visitProduct': 'Ver produto',
    'projects.notFound': 'Projeto não encontrado',
    
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
    'contact.description': 'Se o assunto é React, arquitetura de front-end ou manter um produto rápido enquanto ele escala, eu quero saber.',
    'contact.cta': 'Enviar Mensagem',
    'contact.watsapp': 'Olá, vim pelo seu portfólio e gostaria de conversar sobre um projeto.',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.madeWith': 'Feito com',
    
    // Common
    'common.loading': 'Carregando...',
    'common.error': 'Erro ao carregar',
    'common.backHome': 'Voltar ao início',
    'common.read_more': 'Leia mais',
    'common.seeMore': 'Veja mais',
    'common.viewOriginalVersion': 'versão original',
    'common.viewPrintVersion': 'versão texto',
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
    'hero.role': 'Senior Frontend Engineer',
    'hero.description': "React and TypeScript at the core, but the job doesn't stop at the screen. 8+ years making architecture, performance, and product calls on real applications.",
    'hero.cta.cv': 'Download CV',
    'hero.cta.contact': 'Get in Touch',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Beyond components: architecture, performance, product.',
    'about.intro': '8+ years building scalable, high-performance front-end architecture for real digital products.',
    'about.highlight1.title': '8+ Years',
    'about.highlight1.desc': 'of Experience',
    'about.highlight2.title': '50+ Projects',
    'about.highlight2.desc': 'Delivered',
    'about.highlight3.title': '99%',
    'about.highlight3.desc': 'Satisfaction',
    'about.bio': "Senior front-end developer focused on React and TypeScript, with 8+ years of experience. I've defined architecture, standardized boilerplate, and led frontend teams technically on products with heavy data and user load. Outside the code, it's mentoring: helping junior devs get to senior faster than I did.",
    'about.readMore': 'Learn more about me',
    
    // Skills
    'skills.title': 'Skills',
    'skills.subtitle': 'Where I go deep, and the ecosystem around it',
    'skills.frontend': 'Frontend',
    'skills.uiux': 'UI/UX',
    'skills.testing': 'Testing',
    'skills.tooling': 'Tooling',
    
    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'Frontend architecture case studies',
    'projects.viewAll': 'View all projects',
    'projects.viewProject': 'View case',
    'projects.role': 'Role',
    'projects.highlight': 'Highlight',
    'projects.stack': 'Tech stack',
    'projects.period': 'Period',
    'projects.context': 'Overview',
    'projects.challenge': 'Challenge',
    'projects.myRole': 'My role',
    'projects.architecture': 'Architecture',
    'projects.decisions': 'Key decisions & trade-offs',
    'projects.results': 'Results',
    'projects.screenshots': 'Screenshots',
    'projects.onThisPage': 'In this case',
    'projects.visitProduct': 'Visit product',
    'projects.notFound': 'Project not found',
    
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
    'contact.description': "If it's about React, front-end architecture, or keeping a growing product fast, I want to hear about it.",
    'contact.cta': 'Send Message',
    'contact.watsapp': "Hi, I came across your portfolio and would like to discuss a project.",
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error loading',
    'common.backHome': 'Back to home',
    'common.read_more': 'Read more',
    'common.seeMore': 'See more',
    'common.viewOriginalVersion': 'original version',
    'common.viewPrintVersion': 'text version',
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
