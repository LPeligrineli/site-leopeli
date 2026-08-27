import type { Profile } from "@/domain/profile/profile";
import type { SkillCategory } from "@/domain/skills/skill";
import type { Locale } from "@/shared/i18n/locale";

export const profile: Profile = {
  name: "Leonidas Peligrineli",
  role: "Senior Frontend Developer",
  email: "l.peligrineli@gmail.com",
  avatar: "/images/leonidas.png",
  linkedin: {
    "pt-BR": "https://www.linkedin.com/in/leopeli/",
    "en-US": "https://www.linkedin.com/in/leopeli/?locale=en_US",
  },
  cv: {
    "pt-BR": "/docs/cv-leonidas-peligrineli-pt.pdf",
    "en-US": "/docs/cv-leonidas-peligrineli-en.pdf",
  },
};

export const skillCategories: SkillCategory[] = [
  {
    key: "frontend",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
      { name: "Zustand" },
      { name: "React Query" },
      { name: "GraphQL" },
    ],
  },
  {
    key: "uiux",
    skills: [
      { name: "Figma" },
      { name: "Design Systems" },
      { name: "Responsive Design" },
      { name: "Accessibility (a11y)" },
      { name: "Motion Design" },
      { name: "Framer Motion" },
    ],
  },
  {
    key: "testing",
    skills: [
      { name: "Jest" },
      { name: "React Testing Library" },
      { name: "Cypress" },
      { name: "Playwright" },
      { name: "Storybook" },
      { name: "TDD" },
    ],
  },
  {
    key: "tooling",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "Webpack" },
      { name: "Vite" },
      { name: "Vercel" },
      { name: "AWS" },
      { name: "Node.js" },
    ],
  },
];

export const biography: Record<Locale, string[]> = {
  "pt-BR": [
    "Antes do código, eu fechava balanço. Comecei na contabilidade, no Itaú, e migrei para desenvolvimento quando percebi que resolver problema com lógica me prendia muito mais do que resolver com planilha. De lá pra cá, foram mais de 8 anos subindo a régua: comecei com landing page e e-commerce, passei por Angular, e hoje sou responsável por decisão de arquitetura em produto com alto volume de dado e usuário simultâneo, majoritariamente em React e TypeScript.",
    "Nos últimos anos, liderei tecnicamente o frontend de produtos como a plataforma de análise energética da Auren (arquitetura MVVM, mais de 1 milhão de registros processados por dia) e a plataforma de cartórios digitais da INEO (arquitetura híbrida Next.js + Vite, reduzindo custo de infraestrutura sem perder performance). Também assumi a arquitetura do Familhão, uma plataforma de benefícios que chegou a 300 mil usuários simultâneos em dias de sorteio, com micro frontends e arquitetura hexagonal.",
    "Gosto de estar perto de quem toma a decisão de negócio, entender o porquê antes do como. E gosto ainda mais de tirar dev júnior do papel: já conduzi mentoria, palestra interna e revisão técnica que ajudaram times inteiros a evoluir, não só a entregar.",
    "Hoje meu foco continua sendo front-end (React, TypeScript, arquitetura de aplicação), mas venho estudando IA nos últimos meses, e isso me tirou da zona de conforto de olhar só pra nossa própria camada. Voltei a estudar Node, banco de dado e o padrão de arquitetura por trás do front, porque entender o sistema inteiro é o que separa quem implementa tela de quem toma decisão técnica.",
  ],
  "en-US": [
    "Before code, I closed accounting ledgers. I started out in accounting at Itaú, and moved into development when I realized solving problems with logic hooked me a lot more than solving them with a spreadsheet. Since then, it's been 8+ years of raising the bar: I started with landing pages and e-commerce, worked through Angular, and now I own architecture decisions on products with heavy data and concurrent-user load, mostly in React and TypeScript.",
    "In recent years I've led frontend architecture for products like Auren's real-time energy analytics platform (MVVM, 1M+ records processed daily) and INEO's digital notary platform (a hybrid Next.js + Vite architecture that cut infrastructure cost without sacrificing performance). I also owned the architecture for Familhão, a benefits platform that hit 300K concurrent users on sweepstake days, built on micro-frontends and hexagonal architecture.",
    "I like being close to whoever's making the business call, understanding the why before the how. And I like getting junior devs off the ground even more: mentoring, internal talks, and code reviews that helped whole teams level up, not just ship.",
    "Front-end is still where I live (React, TypeScript, application architecture), but studying AI these last few months pushed me out of my comfort zone of only looking at our own layer. I've been getting back into Node, databases, and the architecture patterns underneath the front-end, because understanding the whole system is what separates implementing a screen from owning the technical decision.",
  ],
};
