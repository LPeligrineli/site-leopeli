import { BlogPost } from "./blog.type";

export const blogPosts: BlogPost[] = [
  {
    slug: "react-server-components-guide",
    title: {
      "pt-BR": "Guia Completo de React Server Components",
      "en-US": "Complete Guide to React Server Components",
    },
    excerpt: {
      "pt-BR":
        "Entenda como RSC funciona, quando usar e como migrar sua aplicação para aproveitar ao máximo essa arquitetura.",
      "en-US":
        "Understand how RSC works, when to use it, and how to migrate your application to take full advantage of this architecture.",
    },
    content: {
      "pt-BR": "Conteúdo completo do artigo sobre React Server Components...",
      "en-US": "Full article content about React Server Components...",
    },
    date: "2024-01-15",
    readTime: 12,
    tags: ["React", "Next.js", "Performance"],
    image: "/blog/rsc.jpg",
    featured: true,
  },
  {
    slug: "typescript-advanced-patterns",
    title: {
      "pt-BR": "Padrões Avançados de TypeScript",
      "en-US": "Advanced TypeScript Patterns",
    },
    excerpt: {
      "pt-BR":
        "Explore técnicas avançadas como tipos condicionais, template literals e inferência para escrever código mais seguro.",
      "en-US":
        "Explore advanced techniques like conditional types, template literals, and inference to write safer code.",
    },
    content: {
      "pt-BR": "Conteúdo completo do artigo sobre TypeScript...",
      "en-US": "Full article content about TypeScript...",
    },
    date: "2024-01-08",
    readTime: 10,
    tags: ["TypeScript", "Best Practices"],
    image: "/blog/typescript.jpg",
    featured: true,
  },
  {
    slug: "web-performance-optimization",
    title: {
      "pt-BR": "Otimização de Performance Web em 2024",
      "en-US": "Web Performance Optimization in 2024",
    },
    excerpt: {
      "pt-BR":
        "Técnicas modernas para melhorar Core Web Vitals e entregar experiências ultra-rápidas aos usuários.",
      "en-US":
        "Modern techniques to improve Core Web Vitals and deliver ultra-fast experiences to users.",
    },
    content: {
      "pt-BR": "Conteúdo completo do artigo sobre performance...",
      "en-US": "Full article content about performance...",
    },
    date: "2023-12-20",
    readTime: 8,
    tags: ["Performance", "Web Vitals", "Optimization"],
    image: "/blog/performance.jpg",
    featured: false,
  },
];