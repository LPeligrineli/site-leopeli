import { Project } from "./project.type";

export const projects: Project[] = [
  {
    slug: "auren",
    title: {
      "pt-BR": "Dashboard de Energia",
      "en-US": "Energy Dashboard",
    },
    description: {
      "pt-BR":
        "Plataforma corporativa de análise de dados energéticos em tempo real, voltada a clientes de autoprodução de energia. O sistema consolidava dados operacionais vindos do data lake das usinas — como curtailment, disponibilidade e geração — em dashboards interativos, com visualizações de alta performance e integração com múltiplas fontes e APIs do mercado de energia.",

      "en-US":
        "Enterprise real-time energy data analytics platform designed for self-generation energy clients. The system consolidated operational data from power plant data lakes — such as curtailment, availability, and generation metrics — into interactive dashboards with high-performance visualizations and integration with multiple energy market data sources and APIs.",
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
          " Autoproduçao Energia é um dos produtos mais complexos do mercado energético, que atendem sócios de parques de energia, só cliente corporativo de alta renda. Nesse cenario o amp, um dataviz com UI premium e funcional com informações estratégias, como Performance dos ativos e contratos.",
        "en-US":
          "Energetic Autoproduction is one of the most complex products in the energy market, serving partners of energy parks and high-income corporate clients. In this scenario, AMP is a premium UI dataviz with functional strategic information such as asset performance and contracts.",
      },
      challenges: {
        "pt-BR":
          "o projeto tinha como principal desafio a criação de um interface capaz de apresentar uma grande quantidade de dados complexos de forma clara e intuitiva, garantindo que os usuários pudessem facilmente acessar e interpretar as informações relevantes para a gestão de seus ativos energéticos e manter a performance da experiência do usuário em um nível elevado.",
        "en-US":
          "The main challenge of the project was to create an interface capable of presenting a large volume of complex data in a clear and intuitive way, ensuring that users could easily access and interpret the relevant information for managing their energy assets and maintaining a high level of user experience performance.",
      },
      solutions: {
        "pt-BR":
          "no frontend, adotamos uma stack composta por React + Vite, Tailwind CSS, Recharts e shadcn/ui e implementamos react-query para gerenciamento de cache das requisições, além de otimizações de performance como code-splitting, lazy loading e controles para evitar re-renderizações desnecessárias pois seria um processo extremamente custoso devido a quatidade de dados.Seguimos a arquitetura MVVM (Model-View-ViewModel) para garantir uma separação clara entre a lógica de negócios e a interface do usuário, facilitando a manutenção e escalabilidade do código.",
        "en-US":
          "In the frontend, we adopted a stack composed of React + Vite, Tailwind CSS, Recharts and shadcn/ui, and implemented react-query for cache management of requests, in addition to performance optimizations such as code-splitting, lazy loading and controls to avoid unnecessary re-renders because it would be an extremely costly process due to the large volume of data. We followed the MVVM (Model-View-ViewModel) architecture to ensure a clear separation between business logic and user interface, facilitating maintenance and scalability of the code.",
      },
      impact: {
        "pt-BR":
          "o amp resultou em uma ferramenta poderosa e eficiente para os sócios de autoprodução de energia, permitindo-lhes monitorar e gerenciar seus ativos de forma eficaz. A interface intuitiva e as funcionalidades avançadas proporcionaram uma experiência de usuário excepcional, contribuindo para a satisfação dos clientes e o sucesso do produto no mercado energético. As decisões tecnicas adotadas permitiram uma entrega extremamente rápida e com alta performance inclusive com features que estariam previstas para a segunda fase de desenvolvimento.",
        "en-US":
          "The AMP resulted in a powerful and efficient tool for energy producers, enabling them to monitor and manage their assets effectively. The intuitive interface and advanced features provided an exceptional user experience, contributing to customer satisfaction and product success in the energy market. The technical decisions adopted allowed for an extremely fast delivery with high performance, even including features that were initially planned for the second phase of development.",
      },
      achievements: {
        "pt-BR": [
          "A arquitetura implementada se mostrou tão eficiente que foi adotada por outros times dentro da Auren se tornando um padrão para novos projetos.",
          "antecipamos features complexas como gerenciamento de documentos, pagina de noticias relevantes para o setor energético entre outras.",
          " Acompanhamento de desenvolvedores juniores dentro do time, promovendo crescimento técnico e alinhamento com as melhores práticas de desenvolvimento.",
        ],
        "en-US": [
          "The implemented architecture proved so efficient that it was adopted by other teams within Auren, becoming a standard for new projects.",
          "We anticipated complex features such as document management, a news page relevant to the energy sector, among others.",
          "Mentorship of junior developers within the team, promoting technical growth and alignment with best development practices.",
        ],
      },
      images: [
        {
          src: "/images/projects/auren/auren1.jpg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "A home é composta por uma previa dos principais indicadores de performance dos ativos de autoprodução de energia.",
            "en-US":
              "The home screen displays previews of key performance indicators for energy production assets.",
          },
        },
        {
          src: "/images/projects/auren/auren2.jpg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "A home é composta por uma previa dos principais indicadores de performance dos ativos de autoprodução de energia.",
            "en-US":
              "The home screen displays previews of key performance indicators for energy production assets.",
          },
        },
        {
          src: "/images/projects/auren/auren3.jpg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "A home é composta por uma previa dos principais indicadores de performance dos ativos de autoprodução de energia.",
            "en-US":
              "The home screen displays previews of key performance indicators for energy production assets.",
          },
        },
        {
          src: "/images/projects/auren/auren4.jpg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "A home é composta por uma previa dos principais indicadores de performance dos ativos de autoprodução de energia.",
            "en-US":
              "The home screen displays previews of key performance indicators for energy production assets.",
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
          "Este foi um projeto com diversos desafios tecnicos devido a complexidade burocrática do setor de cartórios no Brasil por isso precisamos criar uma interface simples e intuitiva mas que atendesse as exigencias legais e operacionais dos cartórios, garantindo que os usuários pudessem acessar, interpretar e quitar seus débitos facilmente. e pelo lado dos cartórios trazer praticidade no cadastro de debitos, envio de intimações e gerenciamento dos processos de protesto.",
        "en-US":
          "This project presented several technical challenges due to the bureaucratic complexity of the protest office sector in Brazil. We needed to create a simple and intuitive interface that met the legal and operational requirements of the protest offices, ensuring that users could easily access, interpret, and settle their debts. On the protest offices' side, we aimed to provide practicality in debt registration, notification sending, and protest process management.",
      },
      solutions: {
        "pt-BR":
          "Como tinhamos modulos diferentes com necessidades distintas, adotamos abordagens diferentes para cada um deles. no modulo de consulta pública, onde o foco era simplicidade e rapidez, optamos por um modelo SPA com React + Vite para que o usuário tenha um boa experiência sem onerar custo de infraestrutura. Já no modulo de gestão dos cartórios utilizamos Next.js para aproveitar o melhor dos dois mundos, server-side rendering e performance, e client-side rendering para interatividade. Implementamos também um fluxo de autenticação robusta com cognito da AWS para garantir a segurança dos dados sensíveis dos usuários e cartórios também uma interface de login através do serviço .gov . ",
        "en-US":
          "Given the different modules with distinct needs, we adopted different approaches for each. In the public consultation module, where simplicity and speed were key, we opted for an SPA model with React + Vite to provide a good user experience without incurring high infrastructure costs. For the management module for the protest offices, we used Next.js to leverage the best of both worlds: server-side rendering for performance and client-side rendering for interactivity. We also implemented a robust authentication flow using AWS Cognito to ensure the security of sensitive user and protest office data, along with a login interface through the .gov service (it's a governamental service).",
      },
      impact: {
        "pt-BR":
          "A solução trouxe uma transformação significativa para os cartórios de protestos que aderiram ao sistema, resultando em maior eficiência operacional, redução de erros e melhoria na experiência do usuário final. A plataforma permitiu que os cartórios gerenciassem seus processos de forma mais ágil e segura, ao mesmo tempo em que oferecia aos usuários uma maneira fácil e transparente de acessar informações e realizar pagamentos relacionados aos protestos.",
        "en-US":
          "The solution brought significant transformation to the protest offices that adopted the system, resulting in greater operational efficiency, error reduction, and improved end-user experience. The platform enabled protest offices to manage their processes more quickly and securely while providing users with an easy and transparent way to access information and make payments related to protests.",
      },
      achievements: {
        "pt-BR": [
          "Tive a oportunidade de exercer uma liderança tecnica no projeto, definindo a arquitetura e as melhores práticas de desenvolvimento para garantir a escalabilidade e manutenção futura da plataforma.",
          "Tivemos um aumento de performance e redução de custos de infraestrutura graças a arquitetura adotada com Next.js e Vite para os modulos distintos.",
          "Criamos um padrão de UX/UI que facilitou a navegação, usabilidade e acessibilidade para os usuários e cartórios. Tmabém agilizou o processo de desenvolvimento para futuras funcionalidades.",
        ],
        "en-US": [
          "I had the opportunity to take on a technical leadership role in the project, defining the architecture and best development practices to ensure the platform's scalability and future maintainability.",
          "We achieved performance improvements and infrastructure cost reductions thanks to the architecture adopted with Next.js and Vite for the distinct modules.",
          "We established a UX/UI standard that enhanced navigation, usability, and accessibility for both users and protest offices. This also streamlined the development process for future functionalities.",
        ],
      },
      images: [
        {
          src: "/images/projects/auren/auren1.jpg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "A home é composta por uma previa dos principais indicadores de performance dos ativos de autoprodução de energia.",
            "en-US":
              "The home screen displays previews of key performance indicators for energy production assets.",
          },
        },
        {
          src: "/images/projects/auren/auren2.jpg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "A home é composta por uma previa dos principais indicadores de performance dos ativos de autoprodução de energia.",
            "en-US":
              "The home screen displays previews of key performance indicators for energy production assets.",
          },
        },
        {
          src: "/images/projects/auren/auren3.jpg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "A home é composta por uma previa dos principais indicadores de performance dos ativos de autoprodução de energia.",
            "en-US":
              "The home screen displays previews of key performance indicators for energy production assets.",
          },
        },
        {
          src: "/images/projects/auren/auren4.jpg",
          alt: "Home Amp",
          label: {
            "pt-BR":
              "A home é composta por uma previa dos principais indicadores de performance dos ativos de autoprodução de energia.",
            "en-US":
              "The home screen displays previews of key performance indicators for energy production assets.",
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
        "pt-BR": "Descrição detalhada do projeto Auren em português.",
        "en-US": "Detailed description of the Auren project in English.",
      },
      challenges: {
        "pt-BR": "Desafios enfrentados no projeto Auren em português.",
        "en-US": "Challenges faced in the Auren project in English.",
      },
      solutions: {
        "pt-BR": "Soluções implementadas no projeto Auren em português.",
        "en-US": "Solutions implemented in the Auren project in English.",
      },
      impact: {
        "pt-BR": "Resultados alcançados no projeto Auren em português.",
        "en-US": "Results achieved in the Auren project in English.",
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
        "pt-BR": "Descrição detalhada do projeto Auren em português.",
        "en-US": "Detailed description of the Auren project in English.",
      },
      challenges: {
        "pt-BR": "Desafios enfrentados no projeto Auren em português.",
        "en-US": "Challenges faced in the Auren project in English.",
      },
      solutions: {
        "pt-BR": "Soluções implementadas no projeto Auren em português.",
        "en-US": "Solutions implemented in the Auren project in English.",
      },
      impact: {
        "pt-BR": "Resultados alcançados no projeto Auren em português.",
        "en-US": "Results achieved in the Auren project in English.",
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
