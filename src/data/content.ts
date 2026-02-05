import type { Locale } from "@/contexts/LanguageContext";

// Profile data
export const profile = {
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

// Skills data
export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  key: string;
  skills: Skill[];
}

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



// Blog posts data



