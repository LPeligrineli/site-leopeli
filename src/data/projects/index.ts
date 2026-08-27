import type { ProjectRecord } from "./project.type";

export const projectRecords: ProjectRecord[] = [
  {
    slug: "auren",
    title: {
      "pt-BR": "Dashboard de Energia",
      "en-US": "Energy Dashboard",
    },
    description: {
      "pt-BR":
        "Plataforma de análise de dados energéticos em tempo real para clientes de autoprodução de energia. Consolidava dados operacionais do data lake das usinas (curtailment, disponibilidade, geração) em dashboards de alta performance, integrados a múltiplas fontes e APIs do mercado de energia.",

      "en-US":
        "Real-time energy data analytics platform for self-generation energy clients. Consolidated operational data from power plant data lakes (curtailment, availability, generation) into high-performance dashboards, integrated with multiple energy market data sources and APIs.",
    },
    role: {
      "pt-BR": "Desenvolvedor Frontend Sênior",
      "en-US": "Senior Frontend Engineer",
    },
    impact: {
      "pt-BR":
        "Redução de 60% no tempo de análise de dados operacionais, com processamento de mais de 1 milhão de registros por dia",
      "en-US":
        "Achieved a 60% reduction in operational data analysis time, processing over 1 million records per day",
    },
    stack: [
      "React",
      "TypeScript",
      "Recharts",
      "TanStack Query",
      "Vite",
      "Tailwind CSS",
    ],
    image: "/images/projects/logo-auren.png",
    featured: true,
    year: 2025,
    projectPage: {
      description: {
        "pt-BR":
          "Autoprodução de energia é um dos produtos mais complexos do mercado energético, atendendo sócios de parques de energia, só cliente corporativo de alta renda. Nesse cenário, o AMP é um dataviz com UI premium e funcional, com informações estratégicas como performance dos ativos e contratos.",
        "en-US":
          "Energy self-generation is one of the most complex products in the energy market, serving partners of energy parks, exclusively high-income corporate clients. In this scenario, AMP is a premium, functional data-viz UI surfacing strategic information such as asset performance and contracts.",
      },
      challenges: {
        "pt-BR":
          "O principal desafio era apresentar um grande volume de dado complexo de forma clara e intuitiva, sem sacrificar performance. Os usuários precisavam acessar e interpretar rápido as informações que sustentam a gestão dos seus ativos energéticos.",
        "en-US":
          "The main challenge was presenting a large volume of complex data clearly and intuitively, without sacrificing performance. Users needed to quickly access and interpret the information behind managing their energy assets.",
      },
      solutions: {
        "pt-BR":
          "Adotamos React + Vite, Tailwind CSS, Recharts e shadcn/ui, com React Query para cache das requisições. Como o volume de dado tornava re-renderização desnecessária um problema real de performance, investimos em code-splitting, lazy loading e controle fino de re-render. A arquitetura seguiu o padrão MVVM, separando lógica de negócio da interface, o que facilitou manutenção e escalabilidade à medida que o produto cresceu.",
        "en-US":
          "We adopted React + Vite, Tailwind CSS, Recharts, and shadcn/ui, with React Query for request caching. Since data volume made unnecessary re-renders a real performance problem, we invested in code-splitting, lazy loading, and fine-grained re-render control. The architecture followed the MVVM pattern, separating business logic from the UI, which made the codebase easier to maintain and scale as the product grew.",
      },
      impact: {
        "pt-BR":
          "O AMP se tornou a ferramenta que os sócios de autoprodução de energia passaram a usar no dia a dia para monitorar e gerenciar seus ativos, com um padrão de qualidade que fez a própria Auren adotar a arquitetura como referência para outros times. As decisões técnicas tomadas permitiram entregar rápido e com alta performance, incluindo funcionalidades originalmente previstas só para a segunda fase.",
        "en-US":
          "AMP became the tool energy self-generation partners started using daily to monitor and manage their assets, with a quality bar that led Auren itself to adopt the architecture as a reference for other teams. The technical decisions made allowed for fast, high-performance delivery, including features originally scoped only for phase two.",
      },
      achievements: {
        "pt-BR": [
          "A arquitetura se mostrou tão sólida que virou padrão para novos projetos dentro da Auren.",
          "Antecipamos funcionalidades da segunda fase, como gerenciamento de documentos e uma página de notícias do setor energético.",
          "Acompanhei devs juniores do time, com foco em crescimento técnico e boas práticas.",
        ],
        "en-US": [
          "The architecture proved solid enough to become the standard for new projects within Auren.",
          "We anticipated phase-two features like document management and a news page for the energy sector.",
          "I mentored junior developers on the team, focused on technical growth and best practices.",
        ],
      },
      images: [
        {
          src: "/images/projects/auren/auren1.jpg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "Visão geral do dashboard, com os principais indicadores de performance dos ativos de autoprodução de energia.",
            "en-US":
              "Dashboard overview, with the key performance indicators for self-generation energy assets.",
          },
        },
        {
          src: "/images/projects/auren/auren2.jpg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "Detalhamento por usina, com dado de curtailment, disponibilidade e geração.",
            "en-US":
              "Per-plant breakdown, with curtailment, availability, and generation data.",
          },
        },
        {
          src: "/images/projects/auren/auren3.jpg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "Consulta de contratos e informação estratégica dos ativos.",
            "en-US":
              "Contract lookup and strategic asset information.",
          },
        },
        {
          src: "/images/projects/auren/auren4.jpg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "Comparação de período para acompanhar a evolução da performance ao longo do tempo.",
            "en-US":
              "Period comparison to track performance evolution over time.",
          },
        },
      ],
    },
  },
  {
    slug: "cenprot",
    title: {
      "pt-BR": "Plataforma para os cartórios",
      "en-US": "Notaryhouse Platform",
    },
    description: {
      "pt-BR":
        "Plataforma digital desenvolvida para atender cartórios, voltada à gestão e cobrança de débitos de emolumentos, taxas cartorárias e protestos, com dois módulos integrados: um para administração pelos cartórios e outro para consulta e regularização pelo devedor.",
      "en-US":
        "Digital platform built for notary offices, focused on the management and collection of notarial fees, service charges, and protest-related debts, featuring two integrated modules: an administrative portal for notary offices and a self-service portal for debtors.",
    },

    role: {
      "pt-BR": "Desenvolvedor Frontend Sênior",
      "en-US": "Senior Frontend Developer",
    },
    impact: {
      "pt-BR":
        "Automatizou o processo de cobrança de débitos cartorários, reduzindo o trabalho manual dos cartórios e permitindo que milhares de devedores consultassem e regularizassem pendências de forma digital e segura.",
      "en-US":
        "Automated the collection process for notarial debts, reducing manual workload for notary offices and enabling thousands of debtors to securely review and settle outstanding obligations through a digital platform.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node", "tanStack Query"],
    image: "/images/projects/logo-cenprot.svg",
    featured: true,
    year: 2024,
    projectPage: {
      description: {
        "pt-BR":
          "O projeto para os Cartórios de protestos do Brasil envolveu a criação de uma plataforma web robusta e escalável para gerenciar e facilitar os processos de protesto de títulos e documentos. A solução visava modernizar a operação dos cartórios, proporcionando uma interface intuitiva para os usuários e garantindo a segurança e integridade dos dados processados.",
        "en-US":
          "The project for the Brazilian Protest Offices involved creating a robust and scalable web platform to manage and facilitate protest processes for titles and documents. The solution aimed to modernize the operations of the protest offices, providing an intuitive interface for users and ensuring the security and integrity of processed data.",
      },
      challenges: {
        "pt-BR":
          "Este foi um projeto com vários desafios técnicos por causa da complexidade burocrática do setor de cartórios no Brasil. Precisávamos de uma interface simples e intuitiva que também atendesse às exigências legais e operacionais, garantindo que os usuários pudessem acessar, interpretar e quitar seus débitos facilmente, e que trouxesse praticidade para os cartórios no cadastro de débitos, no envio de intimações e na gestão dos processos de protesto.",
        "en-US":
          "This project came with several technical challenges due to the bureaucratic complexity of Brazil's notary sector. We needed a simple, intuitive interface that still met the legal and operational requirements, letting users easily access, interpret, and settle their debts while giving notary offices practical tools for debt registration, notifications, and protest process management.",
      },
      solutions: {
        "pt-BR":
          "Como tínhamos módulos diferentes com necessidades distintas, adotamos abordagens diferentes para cada um. No módulo de consulta pública, onde o foco era simplicidade e rapidez, optamos por um modelo SPA com React + Vite, para uma boa experiência sem onerar o custo de infraestrutura. Já no módulo de gestão dos cartórios, usamos Next.js para aproveitar o melhor dos dois mundos: server-side rendering para performance e client-side rendering para interatividade. Implementamos também um fluxo de autenticação robusto com AWS Cognito, para garantir a segurança dos dados sensíveis dos usuários e cartórios, além de uma interface de login pelo serviço .gov.",
        "en-US":
          "Given the different modules with distinct needs, we took a different approach for each. In the public consultation module, where simplicity and speed were key, we went with an SPA model using React + Vite, for a good user experience without driving up infrastructure cost. For the notary offices' management module, we used Next.js to get the best of both worlds: server-side rendering for performance and client-side rendering for interactivity. We also implemented a robust authentication flow with AWS Cognito to secure sensitive user and notary office data, plus a login option through Brazil's official .gov identity service.",
      },
      impact: {
        "pt-BR":
          "A solução trouxe uma transformação real para os cartórios que aderiram ao sistema: mais eficiência operacional, menos erro, melhor experiência para o usuário final. A plataforma permitiu que os cartórios gerenciassem seus processos de forma mais ágil e segura, e deu aos devedores uma forma fácil e transparente de acessar informações e quitar débitos relacionados a protestos.",
        "en-US":
          "The solution brought real change to the notary offices that adopted the system: greater operational efficiency, fewer errors, a better end-user experience. The platform let notary offices manage their processes faster and more securely, and gave debtors an easy, transparent way to access information and settle protest-related debts.",
      },
      achievements: {
        "pt-BR": [
          "Exerci liderança técnica no projeto, definindo a arquitetura e as boas práticas de desenvolvimento para garantir escalabilidade e manutenção futura da plataforma.",
          "Ganho de performance e redução de custo de infraestrutura graças à arquitetura híbrida adotada com Next.js e Vite para os módulos distintos.",
          "Criamos um padrão de UX/UI que facilitou navegação, usabilidade e acessibilidade para usuários e cartórios, e agilizou o desenvolvimento de futuras funcionalidades.",
        ],
        "en-US": [
          "I took on a technical leadership role in the project, defining the architecture and development best practices to ensure the platform's scalability and future maintainability.",
          "We achieved performance gains and infrastructure cost reductions thanks to the hybrid architecture adopted with Next.js and Vite across the distinct modules.",
          "We established a UX/UI standard that improved navigation, usability, and accessibility for both users and notary offices, and streamlined development of future features.",
        ],
      },
      images: [
        {
          src: "/images/projects/ineo/ineo-1.jpeg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "Painel administrativo do cartório, com visão consolidada dos débitos em aberto.",
            "en-US":
              "Notary office admin panel, with a consolidated view of outstanding debts.",
          },
        },
        {
          src: "/images/projects/ineo/ineo-2.jpeg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "Cadastro de débitos e emolumentos pelo cartório.",
            "en-US":
              "Debt and fee registration by the notary office.",
          },
        },
        {
          src: "/images/projects/ineo/ineo-3.jpeg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "Envio de intimações para os devedores.",
            "en-US":
              "Sending notifications to debtors.",
          },
        },
        {
          src: "/images/projects/ineo/ineo-4.jpeg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "Consulta pública de débitos pelo devedor.",
            "en-US":
              "Public debt lookup for debtors.",
          },
        },
        {
          src: "/images/projects/ineo/ineo-5.jpeg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "Detalhamento de um débito, com valores e prazo para regularização.",
            "en-US":
              "Debt detail view, with amounts and the deadline to settle.",
          },
        },
        {
          src: "/images/projects/ineo/ineo-6.jpeg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "Fluxo de pagamento e regularização online.",
            "en-US":
              "Online payment and settlement flow.",
          },
        },
        {
          src: "/images/projects/ineo/ineo-7.jpeg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "Login via serviço .gov para o módulo do devedor.",
            "en-US":
              "Login via the .gov service for the debtor module.",
          },
        },
        {
          src: "/images/projects/ineo/ineo-8.jpeg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "Gestão de processos de protesto pelo cartório.",
            "en-US":
              "Protest process management by the notary office.",
          },
        },
        {
          src: "/images/projects/ineo/ineo-9.jpeg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "Confirmação de regularização, com histórico de débitos quitados.",
            "en-US":
              "Settlement confirmation, with a history of paid debts.",
          },
        },
      ],
    },
  },

  {
    slug: "familhao",
    title: {
      "pt-BR": "Familhão — Plataforma de Engajamento, Benefícios e Sorteios",
      "en-US": "Familhão — Engagement, Benefits and Sweepstakes Platform",
    },
    description: {
      "pt-BR":
        "Plataforma digital de engajamento e benefícios para consumidores brasileiros, oferecendo cupons, créditos para troca por produtos/serviços e chances de participar de sorteios de prêmios, incluindo um prêmio milionário mensal.",
      "en-US":
        "Digital engagement and benefits platform for Brazilian consumers, providing discount coupons, credits redeemable for products/services, and opportunities to participate in prize draws, including a monthly million-real giveaway.",
    },
    role: {
      "pt-BR": "Arquiteto Frontend",
      "en-US": "Frontend Architect",
    },
    impact: {
      "pt-BR":
        "Aumentou o engajamento de usuários em programas de benefícios e ampliou o alcance de ofertas com parceiros comerciais, além de gerar visibilidade por meio de sorteios e experiências de gamificação.",
      "en-US":
        "Boosted user engagement in benefits programs and expanded the reach of partner offers, while also generating visibility through sweepstakes and gamified experiences.",
    },
    stack: ["React", "Storybook", "Radix UI", "Tailwind CSS", "Chromatic"],
    image: "/images/projects/logo-familhao-white.jpg",
    featured: true,
    year: 2024,
    projectPage: {
      description: {
        "pt-BR": "Familhão é uma plataforma digital de assinatura que oferece benefícios exclusivos aos usuários, como cupons de desconto, créditos em marketplace e participação em sorteios mensais de prêmios. A solução combina gamificação, e-commerce e sistema de recompensas em um ambiente 100% online, com foco em escala, alta disponibilidade e experiência do usuário.",
        "en-US": "Familhão is a subscription-based digital platform that provides users with exclusive benefits, including discount coupons, marketplace credits, and participation in monthly prize draws. The solution combines gamification, e-commerce features, and a rewards system in a fully online environment designed for scale, performance, and user experience.",
      },
      challenges: {
        "pt-BR": "Desde o início, o projeto exigiu decisões arquiteturais sólidas. Era necessário construir uma base robusta, escalável e altamente performática para sustentar múltiplos módulos e alto volume de interação. Paralelamente, o produto demandava uma experiência visual rica, com animações complexas e interativas para maximizar engajamento sem impactar negativamente métricas críticas como tempo de carregamento, renderização e responsividade.",
        "en-US": "From the start, the project required solid architectural decisions. It was necessary to build a robust, scalable, and extremely performant foundation to support multiple modules and high interaction volume. Simultaneously, the product required a rich visual experience, with complex and interactive animations to maximize engagement without negatively impacting critical metrics such as load time, rendering, and responsiveness.",
      },
      solutions: {
        "pt-BR": "Construímos o Familhão com foco total em performance usando React + Vite, TanStack Query e TanStack Router, com Tailwind CSS e Framer Motion para UI e animações. Criamos um design system próprio para padronização e velocidade de entrega. Para suportar múltiplos módulos com deploys independentes, adotamos uma arquitetura de Micro Frontends, garantindo escalabilidade e autonomia entre times. Em cada módulo, utilizamos arquitetura hexagonal para isolar domínio e integrações, facilitando troca de APIs, reuso de regras e preparando o terreno para uma futura versão React Native com reaproveitamento de parte da lógica.",
        "en-US": "We built Familhão with a focus on performance using React + Vite, TanStack Query and TanStack Router, with Tailwind CSS and Framer Motion for UI and animations. We created a custom design system for standardization and delivery speed. To support multiple modules with independent deployments, we adopted a Micro Frontends architecture, ensuring scalability and autonomy between teams. In each module, we used hexagonal architecture to isolate domain and integrations, facilitating API swaps, rule reuse, and preparing the ground for a future React-Native version with reuse of part of the logic.",
      },
      impact: {
        "pt-BR": "O Familhão se tornou um verdadeiro sucesso no mercado brasileiro, em dias de sorteios atingiamos cerca de 300 mil usuários online simultaneamente. A arquitetura adotada permitiu a entrega de módulos independentes e escaláveis, suportando múltiplos times e projetos com diferentes tecnologias e metodologias de desenvolvimento.",
        "en-US": "Familhão became a true success in the Brazilian market, reaching over 300,000 users online simultaneously during prize draws. The adopted architecture allowed for the delivery of independent and scalable modules, supporting multiple teams and projects with different technologies and development methodologies.",
      },
      images: [
        {
          src: "/images/projects/auren-dashboard.png",
          alt: "Auren Energy Dashboard",
          label: {
            "pt-BR": "Dashboard de Energia Auren",
            "en-US": "Auren Energy Dashboard",
          },
        },
      ],
    },
  },
  {
    slug: "Localiza-SemiNovos",
    title: {
      "pt-BR": "e-commerce Semi-Novos",
      "en-US": "Semi-New Cars e-commerce",
    },
    description: {
      "pt-BR":
        "Plataforma de e-commerce especializada em veículos semi-novos, com funcionalidades avançadas de busca, filtros e gerenciamento de estoque desenvolvida com Vtex/IO",
      "en-US":
        "E-commerce platform specialized in semi-new vehicles, featuring advanced search, filtering, and inventory management capabilities developed with Vtex/IO.",
    },
    role: {
      "pt-BR": "Desenvolvedor Frontend Sênior",
      "en-US": "Senior Frontend Engineer",
    },
    impact: {
      "pt-BR":
        "Refactor da plataforma, melhorando a performance e a experiência do usuário e de desenvolvimento.",
      "en-US":
        "Refactored the platform, improving performance and user/developer experience.",
    },
    stack: ["React", "Vtex", "GraphQl", "Styled Components"],
    image: "/images/projects/logo-seminovos-localiza-v1.png",
    featured: false,
    year: 2023,
    projectPage: {
      description: {
        "pt-BR": "Refatoração da loja de veículos semi-novos da Localiza na Vtex, com foco em busca, filtros e gestão de estoque em alto volume. Fez parte de um conjunto de entregas para grandes marcas (Localiza Seminovos, Drogaria Araujo, Woba, Reserva) construídas sobre a plataforma Vtex CMS e IO.",
        "en-US": "A refactor of Localiza's semi-new vehicle storefront on Vtex, focused on search, filtering, and high-volume inventory management. It was part of a set of deliveries for major brands (Localiza Seminovos, Drogaria Araujo, Woba, Reserva) built on the Vtex CMS and IO platform.",
      },
      challenges: {
        "pt-BR": "O maior desafio era performance em catálogo grande: milhares de veículos com filtro cruzado (modelo, ano, preço, cidade), dentro das limitações e convenções da própria Vtex, sem abrir mão de tempo de carregamento rápido para quem estava decidindo uma compra de alto valor.",
        "en-US": "The main challenge was performance on a large catalog: thousands of vehicles with cross-filtering (model, year, price, city), within Vtex's own constraints and conventions, without sacrificing load time for someone deciding on a high-value purchase.",
      },
      solutions: {
        "pt-BR": "Usamos React e GraphQL sobre a Vtex IO, com Styled Components para os componentes de UI, priorizando otimização de busca e renderização do catálogo. O trabalho fez parte de uma frente maior na Framework Digital, entregando interface de alta performance para múltiplas marcas na mesma plataforma.",
        "en-US": "We used React and GraphQL on top of Vtex IO, with Styled Components for the UI layer, prioritizing search and catalog rendering performance. This was part of a broader effort at Framework Digital, delivering high-performance interfaces for multiple brands on the same platform.",
      },
      impact: {
        "pt-BR": "O refactor melhorou a performance e a experiência de quem comprava, e também a experiência de quem desenvolvia em cima da plataforma, com componentes mais simples de manter e reaproveitar entre projetos.",
        "en-US": "The refactor improved performance and the buying experience, and the developer experience too, with components that were simpler to maintain and reuse across projects.",
      },
      images: [
        {
          src: "/images/projects/auren-dashboard.png",
          alt: "Auren Energy Dashboard",
          label: {
            "pt-BR": "Dashboard de Energia Auren",
            "en-US": "Auren Energy Dashboard",
          },
        },
      ],
    },
  },
];
