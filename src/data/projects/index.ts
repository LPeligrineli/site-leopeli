import type { ProjectRecord } from "./project.type";

export const projectRecords: ProjectRecord[] = [
  {
    slug: "auren",
    title: {
      "pt-BR": "AMP: plataforma de analytics de energia",
      "en-US": "AMP: energy analytics platform",
    },
    company: {
      "pt-BR": "Auren Energia · via Ewave do Brasil",
      "en-US": "Auren Energia · via Ewave do Brasil",
    },
    period: {
      "pt-BR": "2025 – atual",
      "en-US": "2025 – present",
    },
    description: {
      "pt-BR":
        "Plataforma de gestão e analytics para clientes de autoprodução de energia, construída a partir de um projeto vazio. Defini a arquitetura frontend, que depois virou o boilerplate de quatro aplicações do cliente.",
      "en-US":
        "Management and analytics platform for energy self-generation clients, built from an empty repository. I defined the frontend architecture, which later became the boilerplate for four of the client's applications.",
    },
    role: {
      "pt-BR": "Senior Frontend Engineer · arquitetura e referência técnica do frontend",
      "en-US": "Senior Frontend Engineer · frontend architecture and technical lead",
    },
    highlight: {
      "pt-BR":
        "MVP em cerca de 3 meses. A arquitetura virou base de 4 aplicações, além de Design System e SDK compartilhados.",
      "en-US":
        "MVP shipped in about 3 months. The architecture became the base for 4 apps, plus a shared Design System and SDK.",
    },
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "TanStack Router",
      "Tailwind CSS",
      "shadcn/ui",
      "Recharts",
      "GitHub Actions",
    ],
    image: "/images/projects/logo-auren.png",
    featured: true,
    caseStudy: {
      context: {
        "pt-BR":
          "A Auren atende clientes de autoprodução de energia: empresas sócias de parques de geração que acompanham a performance dos ativos e dos contratos. O AMP é a plataforma autenticada onde esses clientes consultam dashboards de geração, disponibilidade e curtailment alimentados pelo data lake, além de agenda integrada ao Google Calendar e conteúdo do setor.",
        "en-US":
          "Auren serves energy self-generation clients: companies that co-own generation parks and need to follow how their assets and contracts are performing. AMP is the authenticated platform where these clients look at generation, availability and curtailment dashboards fed by the data lake, plus a schedule integrated with Google Calendar and industry content.",
      },
      challenge: {
        "pt-BR":
          "O projeto começou praticamente do zero, com prazo curto para o MVP. Eram muitos dados do data lake e vários tipos de visualização. As regras de apresentação (agregar, comparar períodos, formatar unidades) tendiam a se espalhar pelas páginas. As decisões iniciais precisavam permitir uma entrega rápida sem gerar uma base difícil de manter conforme novos módulos entrassem.",
        "en-US":
          "The project started from an almost empty repository, with a tight deadline for the MVP. There was a lot of data coming from the data lake, several kinds of charts, and presentation rules (aggregating, comparing periods, formatting units) that tend to leak into every page. The early decisions had to let us ship fast without leaving a codebase that would be painful to extend as new modules came in.",
      },
      myRole: {
        "pt-BR": [
          "Defini a arquitetura frontend e a stack do zero e estruturei a aplicação em MVVM.",
          "Desenhei e documentei um boilerplate React com camadas, lint e testes. Ele foi adotado por outras aplicações do cliente, e acompanhei por code review as migrações vindas de Vue.",
          "Conduzi as iniciativas de Design System e de um SDK compartilhado, distribuídos como pacotes npm privados.",
          "Configurei CI/CD com GitHub Actions e estabeleci o code review como gate técnico, com revisão assistida por IA no fluxo.",
          "Participo das decisões técnicas com backend e produto, incluindo API design, e mentoro dois desenvolvedores júnior.",
        ],
        "en-US": [
          "Defined the frontend architecture and stack from scratch and structured the app around MVVM.",
          "Designed and documented a React boilerplate (layers, linting, testing) that other client applications adopted, and guided the Vue-to-React migrations through code review.",
          "Led the Design System and shared SDK initiatives, both published as private npm packages.",
          "Set up CI/CD with GitHub Actions and made code review a technical gate, including AI-assisted review in the workflow.",
          "Work with backend and product on technical decisions, including API design, and mentor two junior developers.",
        ],
      },
      architecture: [
        {
          title: {
            "pt-BR": "MVVM com responsabilidades separadas",
            "en-US": "MVVM with clear boundaries",
          },
          body: {
            "pt-BR":
              "Cada tela se divide em três partes. A view tem componentes React sem regra de negócio. O view model é um hook que orquestra dados, estado de UI e regras de apresentação. A camada de dados fala com a API e normaliza as respostas. O componente recebe os dados prontos para exibir, e a derivação de indicadores fica fora do JSX, onde é mais fácil testar e reaproveitar.",
            "en-US":
              "Each screen has three parts. The view holds React components with no business rules. The view model is a hook that coordinates data, UI state and presentation rules. The data layer talks to the API and normalizes responses. Components get data that is ready to render, and indicator logic lives outside JSX, where it is easier to test and reuse.",
          },
        },
        {
          title: {
            "pt-BR": "Server state separado de UI state",
            "en-US": "Server state kept apart from UI state",
          },
          body: {
            "pt-BR":
              "Dados da API ficam no TanStack Query, que cuida de cache, deduplicação e revalidação. O estado local fica restrito ao que é da interface, como filtros, período selecionado e abas. Isso evita copiar respostas da API para uma store global e reduz requisições repetidas ao navegar entre dashboards.",
            "en-US":
              "API data lives in TanStack Query, which handles caching, deduplication and revalidation. Local state only covers what belongs to the interface, like filters, the selected period and tabs. That avoids copying API responses into a global store and cuts repeated requests when users move between dashboards.",
          },
        },
        {
          title: {
            "pt-BR": "Performance nas telas de gráficos",
            "en-US": "Performance on chart-heavy screens",
          },
          body: {
            "pt-BR":
              "Rotas são carregadas sob demanda (code-splitting e lazy loading). Nas telas com gráficos, o re-render é controlado de forma fina, porque re-renderizar o Recharts sem necessidade pesa quando o volume de pontos cresce.",
            "en-US":
              "Routes are code-split and lazy loaded, and re-renders on chart screens are tightly controlled, since re-rendering Recharts for no reason gets expensive as the number of data points grows.",
          },
        },
        {
          title: {
            "pt-BR": "Boilerplate, Design System e SDK",
            "en-US": "Boilerplate, Design System and SDK",
          },
          body: {
            "pt-BR":
              "A estrutura do AMP virou um boilerplate documentado. Em volta dele há dois pacotes npm privados e versionados. O Design System reúne componentes, padrões visuais e comportamentos comuns. O SDK reúne cliente HTTP, fluxos de autenticação, formatações, integração com o data lake e abstrações para consumo de APIs. Uma aplicação nova começa com a mesma base e não reimplementa integração nem infraestrutura.",
            "en-US":
              "AMP's structure became a documented boilerplate, with two versioned private npm packages around it. The Design System holds components, visual patterns and shared behavior. The SDK holds the HTTP client, authentication flows, formatters, data lake integration and API abstractions. A new application starts from the same base instead of rebuilding integrations and infrastructure.",
          },
        },
      ],
      decisions: [
        {
          title: {
            "pt-BR": "Vite em vez de Next.js",
            "en-US": "Vite over Next.js",
          },
          body: {
            "pt-BR":
              "O AMP é uma aplicação autenticada, sem necessidade de SEO nem de SSR. Next.js traria um servidor para operar e um modelo de renderização que o produto não usaria. Com Vite, o resultado foi uma SPA mais simples de construir e operar. Abrimos mão da renderização no servidor, que não fazia falta nesse contexto.",
            "en-US":
              "AMP is an authenticated app with no SEO or SSR requirements. Next.js would have added a server to run and a rendering model the product would not use. Vite gave us a SPA that is simpler to build and operate. We gave up server rendering, which this product did not need.",
          },
        },
        {
          title: {
            "pt-BR": "MVVM desde o MVP",
            "en-US": "MVVM from day one",
          },
          body: {
            "pt-BR":
              "Separar view model e view cria mais arquivos e um pouco de cerimônia numa fase de prazo curto. A aposta era que esse custo se pagaria quando novos módulos entrassem. Foi o que aconteceu quando a mesma estrutura virou o boilerplate de outras aplicações.",
            "en-US":
              "Splitting view models from views means more files and some ceremony while the deadline is tight. The bet was that it would pay off as new modules arrived. It did, once the same structure became the boilerplate for other applications.",
          },
        },
        {
          title: {
            "pt-BR": "Manter o Recharts",
            "en-US": "Sticking with Recharts",
          },
          body: {
            "pt-BR":
              "Avaliamos alternativas junto com UX. O Recharts cobria os gráficos que o produto precisava com menos complexidade. Bibliotecas mais poderosas trariam curva de aprendizado e customização que os requisitos não pediam.",
            "en-US":
              "We evaluated alternatives together with UX. Recharts covered the charts the product needed with less complexity. More powerful libraries would have brought a learning curve and customization the requirements did not call for.",
          },
        },
      ],
      results: {
        "pt-BR": [
          "MVP entregue em cerca de 3 meses, partindo de um projeto vazio.",
          "O boilerplate virou base de 4 aplicações do cliente: 2 novas e 2 migradas de Vue.",
          "Design System e SDK em uso pelas aplicações, com menos componentes e integrações duplicados entre os times.",
          "Funcionalidades previstas para a segunda fase, como gestão de documentos e notícias do setor, foram antecipadas.",
          "Referência técnica de frontend para o time e para outros times do cliente.",
        ],
        "en-US": [
          "MVP shipped in about 3 months, starting from an empty repository.",
          "The boilerplate became the base for 4 client applications: 2 new ones and 2 migrated from Vue.",
          "Design System and SDK in use across the applications, cutting duplicated components and integrations between teams.",
          "Features planned for phase two, such as document management and industry news, shipped early.",
          "Frontend technical reference for my team and for other teams at the client.",
        ],
      },
      images: [
        {
          src: "/images/projects/auren/auren1.jpg",
          alt: "AMP dashboard overview",
          label: {
            "pt-BR":
              "Visão geral do dashboard, com os principais indicadores de performance dos ativos de autoprodução de energia.",
            "en-US":
              "Dashboard overview, with the key performance indicators for self-generation energy assets.",
          },
        },
        {
          src: "/images/projects/auren/auren2.jpg",
          alt: "AMP per-plant breakdown",
          label: {
            "pt-BR":
              "Detalhamento por usina, com dados de curtailment, disponibilidade e geração.",
            "en-US":
              "Per-plant breakdown, with curtailment, availability, and generation data.",
          },
        },
        {
          src: "/images/projects/auren/auren3.jpg",
          alt: "AMP contract lookup",
          label: {
            "pt-BR": "Consulta de contratos e informações estratégicas dos ativos.",
            "en-US": "Contract lookup and strategic asset information.",
          },
        },
        {
          src: "/images/projects/auren/auren4.jpg",
          alt: "AMP period comparison",
          label: {
            "pt-BR":
              "Comparação de períodos para acompanhar a evolução da performance ao longo do tempo.",
            "en-US":
              "Period comparison to track performance over time.",
          },
        },
      ],
    },
  },
  {
    slug: "familhao",
    title: {
      "pt-BR": "Achou Levou · Familhão",
      "en-US": "Achou Levou · Familhão",
    },
    company: {
      "pt-BR": "Globo",
      "en-US": "Globo",
    },
    period: {
      "pt-BR": "2023 – 2024",
      "en-US": "2023 – 2024",
    },
    description: {
      "pt-BR":
        "Plataforma de benefícios e sorteios da Globo, reorganizada em cerca de 7 microfrontends com Single-SPA e Module Federation para que vários times evoluíssem e publicassem suas áreas de forma independente.",
      "en-US":
        "Globo's benefits and prize-draw platform, split into around 7 microfrontends with Single-SPA and Module Federation so that several teams could build and ship their areas independently.",
    },
    role: {
      "pt-BR": "Frontend · arquitetura de microfrontends e Design System",
      "en-US": "Frontend · microfrontend architecture and Design System",
    },
    highlight: {
      "pt-BR":
        "Participei do desenho da migração para microfrontends. Fui responsável pelo MFE do Achou Levou e pelo Design System compartilhado.",
      "en-US":
        "Helped design the move to microfrontends. Owned the Achou Levou MFE and the shared Design System.",
    },
    stack: [
      "React",
      "TypeScript",
      "Single-SPA",
      "Module Federation",
      "Design System",
    ],
    image: "/images/projects/logo-familhao-white.jpg",
    featured: true,
    caseStudy: {
      context: {
        "pt-BR":
          "O Familhão é uma plataforma de assinatura com cupons de desconto, créditos para troca por produtos e serviços e sorteios mensais. O Achou Levou é uma das áreas desse ecossistema. O mesmo produto reunia jornadas bem diferentes, como login, pagamentos, a área Família e as ofertas do Achou Levou, e todas precisavam parecer uma experiência só para o usuário.",
        "en-US":
          "Familhão is a subscription platform with discount coupons, credits redeemable for products and services, and monthly prize draws. Achou Levou is one of the areas in that ecosystem. The product brought together very different journeys (login, payments, the Família area and Achou Levou's offers) that all had to feel like one experience to the user.",
      },
      challenge: {
        "pt-BR":
          "Quando entrei, a aplicação ainda não era dividida em microfrontends. Vários times trabalhavam ao mesmo tempo em áreas diferentes e precisavam evoluir, testar e publicar sem depender de um release único. Dividir a aplicação resolvia a autonomia, mas criava outro problema: fazer as partes funcionarem como um produto só, com a mesma sessão, a mesma navegação e a mesma identidade visual, sem acoplar os módulos entre si.",
        "en-US":
          "When I joined, the application was not split into microfrontends yet. Several teams were working on different areas at the same time and needed to build, test and release without waiting on a single release train. Splitting the app solved autonomy but created a new problem: keeping the pieces working as one product (same session, same navigation, same visual identity) without coupling modules to each other.",
      },
      myRole: {
        "pt-BR": [
          "Participei das discussões de arquitetura, da definição da estratégia e da implementação dos microfrontends com Single-SPA e Module Federation.",
          "Fui responsável pelo MFE do Achou Levou e pelo Design System compartilhado entre os módulos.",
          "Nos demais MFEs, atuei em integrações, na evolução da arquitetura e em problemas que atravessavam módulos.",
          "Ajudei a definir os padrões técnicos do frontend usados pelos times.",
        ],
        "en-US": [
          "Took part in the architecture discussions, the migration strategy and the implementation of the microfrontends with Single-SPA and Module Federation.",
          "Owned the Achou Levou MFE and the Design System shared across modules.",
          "Worked on the other MFEs on integrations, architectural changes and problems that cut across modules.",
          "Helped define the frontend technical standards the teams followed.",
        ],
      },
      architecture: [
        {
          title: {
            "pt-BR": "Host e cerca de 7 microfrontends",
            "en-US": "A host and around 7 microfrontends",
          },
          body: {
            "pt-BR":
              "Um host orquestra os módulos: login, pagamentos, Família, Achou Levou e outras áreas. O Single-SPA cuida do ciclo de vida de cada MFE, ou seja, quando ele é ativado pela rota, montado e desmontado. O Module Federation carrega os remotes em tempo de execução e compartilha dependências como o React, para que cada módulo não leve a própria cópia no bundle.",
            "en-US":
              "A host orchestrates the modules: login, payments, Família, Achou Levou and other areas. Single-SPA handles each MFE's lifecycle (activating it by route, mounting and unmounting). Module Federation loads remotes at runtime and shares dependencies such as React, so each module doesn't ship its own copy.",
          },
        },
        {
          title: {
            "pt-BR": "API de estado compartilhado",
            "en-US": "A shared-state API",
          },
          body: {
            "pt-BR":
              "O estado que precisava atravessar módulos ficava atrás de uma API própria: dados do usuário, sessão e autenticação, informações da jornada e sinais de comunicação entre MFEs. Cada microfrontend lia e atualizava esse estado pela API, sem importar Redux, Zustand ou qualquer store diretamente. Assim, a implementação interna podia mudar sem quebrar os consumidores, e nenhum módulo ficava preso à escolha de state manager de outro.",
            "en-US":
              "State that had to cross module boundaries (user data, session and auth, journey data and signals between MFEs) sat behind an in-house API. Each microfrontend read and updated it through that API instead of importing Redux, Zustand or any store directly. The internal implementation could change without breaking consumers, and no module was tied to another module's choice of state manager.",
          },
        },
        {
          title: {
            "pt-BR": "Design System como contrato visual",
            "en-US": "The Design System as a visual contract",
          },
          body: {
            "pt-BR":
              "Com vários times publicando de forma independente, a consistência visual não podia depender só de disciplina. O Design System compartilhado padronizou componentes, comportamento e identidade entre os módulos e reduziu a duplicação de componentes de um MFE para outro.",
            "en-US":
              "With several teams shipping independently, visual consistency could not rely on discipline alone. The shared Design System standardized components, behavior and identity across modules and cut down on components being rebuilt in each MFE.",
          },
        },
      ],
      decisions: [
        {
          title: {
            "pt-BR": "Por que microfrontends",
            "en-US": "Why microfrontends",
          },
          body: {
            "pt-BR":
              "O motivo principal era organizacional: vários times precisavam publicar suas áreas sem coordenar um deploy único. O ganho de autonomia veio com mais complexidade de integração. Compatibilidade de versões do React e das dependências compartilhadas, duplicação de bibliotecas no bundle, navegação entre módulos, conflitos de CSS e o carregamento inicial passaram a ser problemas de arquitetura, e não de cada tela.",
            "en-US":
              "The main driver was organizational: several teams needed to ship their areas without coordinating a single deploy. The autonomy came with more integration complexity. Keeping React and shared dependency versions compatible, avoiding duplicate libraries in the bundle, navigating between modules, CSS conflicts and initial load all became architecture problems rather than per-screen ones.",
          },
        },
        {
          title: {
            "pt-BR": "Estado compartilhado por API, não por store",
            "en-US": "Shared state through an API, not a store",
          },
          body: {
            "pt-BR":
              "Uma store global compartilhada seria mais simples no início, mas amarraria todos os MFEs à mesma biblioteca e à mesma versão. A API adicionou uma camada para manter e exigiu critério sobre o que é realmente global. Em troca, cada módulo pôde evoluir o próprio estado interno sem afetar os outros.",
            "en-US":
              "A shared global store would have been simpler at first, but it would have tied every MFE to the same library and version. The API added a layer to maintain and forced us to be strict about what was really global. In return, each module could evolve its internal state without affecting the others.",
          },
        },
        {
          title: {
            "pt-BR": "Single-SPA e Module Federation juntos",
            "en-US": "Single-SPA and Module Federation together",
          },
          body: {
            "pt-BR":
              "Cada ferramenta resolve uma parte do problema. O Single-SPA orquestra o ciclo de vida e o roteamento entre aplicações. O Module Federation resolve o carregamento em tempo de execução e o compartilhamento de dependências. O custo é configurar e manter as duas e garantir que as versões compartilhadas continuem compatíveis entre os times.",
            "en-US":
              "Each tool covers part of the problem. Single-SPA orchestrates lifecycle and routing between applications. Module Federation handles runtime loading and dependency sharing. The cost is configuring and maintaining both and keeping shared versions compatible across teams.",
          },
        },
      ],
      results: {
        "pt-BR": [
          "Aplicação reorganizada em cerca de 7 microfrontends, com deploy independente por área.",
          "Times passaram a evoluir, testar e publicar seus módulos sem depender de um release único.",
          "Sessão e dados do usuário compartilhados entre módulos sem acoplamento a uma biblioteca de estado.",
          "O Design System reduziu inconsistências visuais e a duplicação de componentes entre os MFEs.",
        ],
        "en-US": [
          "The application was reorganized into around 7 microfrontends, each area deployable on its own.",
          "Teams could build, test and ship their modules without waiting on a single release.",
          "Session and user data were shared across modules without coupling them to a state library.",
          "The Design System reduced visual inconsistencies and duplicated components across MFEs.",
        ],
      },
      images: [],
    },
  },
  {
    slug: "cenprot",
    title: {
      "pt-BR": "Resolve · Cenprot",
      "en-US": "Resolve · Cenprot",
    },
    company: {
      "pt-BR": "INEO",
      "en-US": "INEO",
    },
    period: {
      "pt-BR": "2024 – 2025",
      "en-US": "2024 – 2025",
    },
    description: {
      "pt-BR":
        "Plataforma para pagamento de dívidas e emolumentos em cartórios de protesto, com área autenticada para os cartórios e módulos públicos para o devedor. Liderei o frontend.",
      "en-US":
        "Platform for paying debts and notary fees at Brazilian protest offices, with an authenticated area for the offices and public modules for debtors. I led the frontend.",
    },
    role: {
      "pt-BR": "Senior Frontend Engineer · liderança técnica do frontend",
      "en-US": "Senior Frontend Engineer · frontend technical lead",
    },
    highlight: {
      "pt-BR":
        "RBAC baseado em capabilities e revisão da arquitetura híbrida Next.js + Vite, com a migração para Vite iniciada.",
      "en-US":
        "Capability-based RBAC and a review of the hybrid Next.js + Vite setup, with the move to Vite under way.",
    },
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "Vite",
      "TanStack Query",
      "Tailwind CSS",
      "AWS Cognito",
    ],
    image: "/images/projects/logo-cenprot.svg",
    featured: true,
    caseStudy: {
      context: {
        "pt-BR":
          "O Cenprot centraliza serviços eletrônicos dos cartórios de protesto do Brasil. O Resolve é a plataforma em que o devedor consulta e regulariza débitos e emolumentos, e em que o cartório cadastra débitos, envia intimações e acompanha os processos. O objetivo era trocar fluxos burocráticos de várias etapas por uma jornada direta.",
        "en-US":
          "Cenprot brings together the electronic services of Brazil's protest notary offices. Resolve is where debtors look up and settle debts and fees, and where offices register debts, send notices and track cases. The goal was to replace multi-step bureaucratic flows with a direct journey.",
      },
      challenge: {
        "pt-BR":
          "O mesmo produto atende dois públicos com necessidades opostas. O módulo dos cartórios é autenticado e oferece funcionalidades diferentes conforme a função de cada usuário. Os módulos públicos precisam ser simples e baratos de servir. A arquitetura inicial usava Next.js com SSR nas áreas dos cartórios e Vite nas demais. Com o produto em uso, ficou claro que parte do custo do SSR não se pagava.",
        "en-US":
          "Two audiences with opposite needs share the same product. The office module is authenticated and exposes different features depending on each user's function. The public modules need to be simple and cheap to serve. The initial architecture used Next.js with SSR for the office areas and Vite elsewhere. Once the product was live, it became clear that part of the SSR cost wasn't paying off.",
      },
      myRole: {
        "pt-BR": [
          "Liderei o desenvolvimento frontend da plataforma.",
          "Implementei o controle de acesso (RBAC) do módulo dos cartórios, modelado por capabilities.",
          "Avaliei a arquitetura híbrida e propus a consolidação em Vite. Discuti a proposta com a liderança técnica e o backend, e a migração começou enquanto eu estava no projeto.",
          "Introduzi o TanStack Query (React Query) com estratégias de cache e revalidação.",
          "Participei da implementação e integração dos fluxos de autenticação com AWS Cognito e gov.br.",
        ],
        "en-US": [
          "Led frontend development for the platform.",
          "Implemented role-based access control (RBAC) for the office module, modeled as capabilities.",
          "Reviewed the hybrid architecture and proposed consolidating on Vite. I discussed the proposal with the tech leads and backend, and the migration started while I was still on the project.",
          "Introduced TanStack Query (React Query) with caching and revalidation strategies.",
          "Took part in implementing and integrating the authentication flows with AWS Cognito and gov.br.",
        ],
      },
      architecture: [
        {
          title: {
            "pt-BR": "RBAC por capabilities",
            "en-US": "Capability-based RBAC",
          },
          body: {
            "pt-BR":
              "As permissões vinham dos dados de autenticação e da API para o usuário logado. A interface não pergunta qual é o perfil do usuário. Ela pergunta o que ele pode fazer, com algo como can('financial-document:create'). Essa verificação ficava centralizada e controlava acesso a rotas, visibilidade de módulos, exibição de ações e habilitação de funcionalidades, sem regra de autorização espalhada pelos componentes. A validação efetiva continuava no backend. O papel do front era expor a cada usuário apenas o que ele podia usar.",
            "en-US":
              "Permissions came from the auth data and from the API for the logged-in user. Instead of asking which profile the user has, the UI asks what they can do, with something like can('financial-document:create'). That check was centralized and drove route access, module visibility, which actions were shown and which features were enabled, so no authorization logic was scattered across components. Enforcement stayed on the backend. The frontend's job was to show each user only what they were allowed to use.",
          },
        },
        {
          title: {
            "pt-BR": "Server state com TanStack Query",
            "en-US": "Server state with TanStack Query",
          },
          body: {
            "pt-BR":
              "As chamadas à API passaram a ter cache e revalidação controlados pelo TanStack Query. Isso reduziu requisições repetidas entre telas e melhorou a resposta percebida, sem criar uma store manual para dados que pertencem ao servidor.",
            "en-US":
              "API calls moved to TanStack Query for caching and revalidation. That cut repeated requests between screens and made the app feel faster, without building a hand-rolled store for data that belongs to the server.",
          },
        },
        {
          title: {
            "pt-BR": "Dois modelos de renderização por módulo",
            "en-US": "Different rendering per module",
          },
          body: {
            "pt-BR":
              "Os módulos dos cartórios rodavam em Next.js com SSR, e os módulos públicos em React + Vite como SPA. Esse híbrido foi o ponto de partida. A etapa seguinte foi reavaliar essa divisão.",
            "en-US":
              "The office modules ran on Next.js with SSR, and the public modules ran as React + Vite SPAs. That hybrid was the starting point. Reassessing it was the next step.",
          },
        },
      ],
      decisions: [
        {
          title: {
            "pt-BR": "Reavaliar o SSR em vez de defendê-lo",
            "en-US": "Questioning SSR instead of defending it",
          },
          body: {
            "pt-BR":
              "Ao olhar os fluxos com o produto já no ar, a maioria era autenticada, dependia da API e não precisava de SEO. Nessas áreas, o SSR adicionava um servidor para operar e processamento sem ganho para o usuário. Propus consolidar em Vite, com distribuição estática via CDN e operação mais simples.",
            "en-US":
              "Looking at the flows once the product was live, most were authenticated, API-driven and had no SEO needs. There, SSR added a server to run and processing that gave users nothing. I proposed consolidating on Vite, with static delivery through a CDN and simpler operations.",
          },
        },
        {
          title: {
            "pt-BR": "Manter o híbrido durante a transição",
            "en-US": "Keeping the hybrid during the transition",
          },
          body: {
            "pt-BR":
              "Reescrever tudo de uma vez travaria a evolução de um produto já lançado. O híbrido foi mantido e a migração avançou por partes. A equipe aceitou conviver por um tempo com duas stacks para não parar as entregas.",
            "en-US":
              "Rewriting everything at once would have stalled a product that was already live. We kept the hybrid and migrated piece by piece, accepting two stacks side by side for a while so delivery didn't stop.",
          },
        },
        {
          title: {
            "pt-BR": "Capabilities em vez de nomes de perfil",
            "en-US": "Capabilities instead of role names",
          },
          body: {
            "pt-BR":
              "Checar o nome do perfil é mais rápido de implementar, mas espalha regra de negócio pela interface e quebra a cada perfil novo. Capabilities exigem mapear as permissões desde o início. Em troca, os perfis podem evoluir sem reescrever rotas e componentes.",
            "en-US":
              "Checking role names is quicker to build, but it spreads business rules across the UI and breaks every time a new role appears. Capabilities require mapping permissions upfront. In return, roles can change without rewriting routes and components.",
          },
        },
      ],
      results: {
        "pt-BR": [
          "Produto lançado com módulo autenticado para os cartórios e módulos públicos para os devedores.",
          "Migração para Vite iniciada durante minha atuação, com o objetivo de remover processamento server-side sem valor e servir a aplicação como estático via CDN.",
          "Regras de acesso centralizadas: perfis com capabilities específicas por usuário, sem reescrever rotas e componentes a cada mudança.",
          "Menos requisições redundantes e melhor resposta percebida com cache e revalidação no TanStack Query.",
        ],
        "en-US": [
          "Launched with an authenticated module for notary offices and public modules for debtors.",
          "Migration to Vite started while I was there, aiming to drop server-side work that added no value and serve the app statically from a CDN.",
          "Centralized access rules: per-user capabilities, with no route or component rewrites when roles change.",
          "Fewer redundant requests and a snappier feel thanks to TanStack Query caching and revalidation.",
        ],
      },
      images: [
        {
          src: "/images/projects/ineo/ineo-1.jpeg",
          alt: "Notary office admin panel",
          label: {
            "pt-BR":
              "Painel administrativo do cartório, com visão consolidada dos débitos em aberto.",
            "en-US":
              "Notary office admin panel, with a consolidated view of outstanding debts.",
          },
        },
        {
          src: "/images/projects/ineo/ineo-2.jpeg",
          alt: "Debt registration",
          label: {
            "pt-BR": "Cadastro de débitos e emolumentos pelo cartório.",
            "en-US": "Debt and fee registration by the notary office.",
          },
        },
        {
          src: "/images/projects/ineo/ineo-3.jpeg",
          alt: "Sending notices to debtors",
          label: {
            "pt-BR": "Envio de intimações para os devedores.",
            "en-US": "Sending notices to debtors.",
          },
        },
        {
          src: "/images/projects/ineo/ineo-4.jpeg",
          alt: "Public debt lookup",
          label: {
            "pt-BR": "Consulta pública de débitos pelo devedor.",
            "en-US": "Public debt lookup for debtors.",
          },
        },
        {
          src: "/images/projects/ineo/ineo-5.jpeg",
          alt: "Debt detail view",
          label: {
            "pt-BR":
              "Detalhamento de um débito, com valores e prazo para regularização.",
            "en-US": "Debt detail view, with amounts and the deadline to settle.",
          },
        },
        {
          src: "/images/projects/ineo/ineo-6.jpeg",
          alt: "Online payment flow",
          label: {
            "pt-BR": "Fluxo de pagamento e regularização online.",
            "en-US": "Online payment and settlement flow.",
          },
        },
        {
          src: "/images/projects/ineo/ineo-7.jpeg",
          alt: "gov.br login",
          label: {
            "pt-BR": "Login via gov.br para o módulo do devedor.",
            "en-US": "gov.br login for the debtor module.",
          },
        },
        {
          src: "/images/projects/ineo/ineo-8.jpeg",
          alt: "Protest case management",
          label: {
            "pt-BR": "Gestão de processos de protesto pelo cartório.",
            "en-US": "Protest case management by the notary office.",
          },
        },
        {
          src: "/images/projects/ineo/ineo-9.jpeg",
          alt: "Settlement confirmation",
          label: {
            "pt-BR":
              "Confirmação de regularização, com histórico de débitos quitados.",
            "en-US": "Settlement confirmation, with a history of paid debts.",
          },
        },
      ],
    },
  },
  {
    slug: "woba",
    title: {
      "pt-BR": "Woba: de Create React App para Next.js",
      "en-US": "Woba: from Create React App to Next.js",
    },
    company: {
      "pt-BR": "Woba · via Framework Digital",
      "en-US": "Woba · via Framework Digital",
    },
    period: {
      "pt-BR": "2022",
      "en-US": "2022",
    },
    description: {
      "pt-BR":
        "Reconstrução do frontend da Woba, antiga BeerOrCoffee, junto com o rebranding da empresa: migração de Create React App para Next.js e reorganização da arquitetura de componentes.",
      "en-US":
        "Rebuilt Woba's frontend (formerly BeerOrCoffee) alongside the company's rebrand: migrated from Create React App to Next.js and reorganized the component architecture.",
    },
    role: {
      "pt-BR": "Frontend Developer · referência técnica do frontend na consultoria",
      "en-US": "Frontend Developer · frontend technical lead on the agency side",
    },
    highlight: {
      "pt-BR":
        "Conduzi as decisões de arquitetura e implementação da migração num time de dois desenvolvedores.",
      "en-US":
        "Drove the architecture and implementation decisions for the migration in a two-developer team.",
    },
    stack: ["Next.js", "React"],
    image: "/images/projects/logo-woba.png",
    featured: false,
    liveUrl: "https://woba.com.br/",
    caseStudy: {
      context: {
        "pt-BR":
          "A Woba conecta empresas a escritórios e espaços de trabalho em todo o Brasil. Em 2022, a BeerOrCoffee virou Woba, e o rebranding foi a oportunidade de reconstruir um frontend que tinha crescido como uma aplicação Create React App.",
        "en-US":
          "Woba connects companies to offices and workspaces across Brazil. In 2022, BeerOrCoffee became Woba, and the rebrand was the chance to rebuild a frontend that had grown as a Create React App application.",
      },
      challenge: {
        "pt-BR":
          "Era preciso trocar a identidade visual inteira e a base técnica ao mesmo tempo, sem parar a evolução do produto. A aplicação precisava de uma estrutura que separasse páginas públicas e fluxos autenticados e que tornasse os componentes reaproveitáveis na nova identidade.",
        "en-US":
          "The whole visual identity and the technical foundation had to change at the same time, without stopping product work. The app needed a structure that separated public pages from authenticated flows and made components reusable under the new brand.",
      },
      myRole: {
        "pt-BR": [
          "Atuei como principal referência técnica do frontend dentro da consultoria, num time de dois desenvolvedores, e conduzi as decisões de arquitetura e implementação.",
          "Migrei a aplicação de Create React App para Next.js e reorganizei a arquitetura e os componentes.",
          "Adaptei fluxos e componentes que partiam de uma SPA pura para o modelo de roteamento e renderização do Next.js.",
        ],
        "en-US": [
          "Acted as the main frontend technical reference on the agency side, in a two-developer team, driving architecture and implementation decisions.",
          "Migrated the application from Create React App to Next.js and reorganized its architecture and components.",
          "Adapted flows and components built for a plain SPA to Next.js's routing and rendering model.",
        ],
      },
      architecture: [
        {
          title: {
            "pt-BR": "Estrutura em Next.js",
            "en-US": "Next.js structure",
          },
          body: {
            "pt-BR":
              "Roteamento por arquivos e renderização híbrida permitiram separar páginas públicas e fluxos autenticados de forma consistente, em vez de manter tudo como uma SPA única renderizada no cliente.",
            "en-US":
              "File-based routing and hybrid rendering made it possible to separate public pages from authenticated flows consistently, instead of keeping everything as a single client-rendered SPA.",
          },
        },
        {
          title: {
            "pt-BR": "Arquitetura baseada em componentes",
            "en-US": "Component-based architecture",
          },
          body: {
            "pt-BR":
              "A UI foi reconstruída a partir de componentes reutilizáveis já com a nova identidade, em vez de ajustar estilos tela por tela. A identidade visual passou a morar num lugar só, e páginas novas partem desses componentes.",
            "en-US":
              "The UI was rebuilt from reusable components carrying the new brand, instead of restyling screen by screen. The visual identity now lives in one place, and new pages start from those components.",
          },
        },
      ],
      decisions: [
        {
          title: {
            "pt-BR": "Next.js no lugar do CRA",
            "en-US": "Next.js instead of CRA",
          },
          body: {
            "pt-BR":
              "O Next.js foi escolhido pela combinação de roteamento, renderização híbrida e organização da aplicação. O custo foi adaptar a base ao modelo do framework, e boa parte da migração consistiu em ajustar componentes e fluxos que assumiam uma SPA pura.",
            "en-US":
              "Next.js was chosen for its mix of routing, hybrid rendering and project structure. The cost was adapting the codebase to the framework's model, and much of the migration went into reworking components and flows that assumed a plain SPA.",
          },
        },
        {
          title: {
            "pt-BR": "Migrar junto com o rebranding",
            "en-US": "Migrating during the rebrand",
          },
          body: {
            "pt-BR":
              "Fazer as duas mudanças juntas aumentou o escopo. Por outro lado, as telas seriam refeitas de qualquer forma para a nova identidade, e a migração aproveitou o mesmo ciclo em vez de mexer nelas duas vezes.",
            "en-US":
              "Doing both at once increased scope. But the screens were being redone for the new brand anyway, so the migration used the same cycle instead of touching them twice.",
          },
        },
      ],
      results: {
        "pt-BR": [
          "Frontend migrado de Create React App para Next.js dentro do projeto de rebranding (ago–out/2022).",
          "Componentes reutilizáveis com a nova identidade como base para a evolução do produto.",
          "Separação clara entre páginas públicas e fluxos autenticados.",
        ],
        "en-US": [
          "Frontend moved from Create React App to Next.js as part of the rebrand (Aug–Oct 2022).",
          "Reusable components with the new brand as the base for further product work.",
          "A clear split between public pages and authenticated flows.",
        ],
      },
      images: [],
    },
  },
  {
    slug: "Localiza-SemiNovos",
    title: {
      "pt-BR": "Localiza Seminovos: e-commerce em VTEX IO",
      "en-US": "Localiza Seminovos: VTEX IO storefront",
    },
    company: {
      "pt-BR": "Localiza · via Framework Digital",
      "en-US": "Localiza · via Framework Digital",
    },
    period: {
      "pt-BR": "2021 – 2022",
      "en-US": "2021 – 2022",
    },
    description: {
      "pt-BR":
        "Evolução do storefront de veículos seminovos da Localiza em VTEX IO, com foco em busca, filtros e jornada de compra de um catálogo grande, dentro das convenções da plataforma.",
      "en-US":
        "Ongoing work on Localiza's used-car storefront on VTEX IO, focused on search, filters and the buying journey for a large catalog, within the platform's conventions.",
    },
    role: {
      "pt-BR": "Frontend Developer",
      "en-US": "Frontend Developer",
    },
    highlight: {
      "pt-BR":
        "Interfaces e integrações da jornada de compra construídas com React sobre VTEX IO e GraphQL.",
      "en-US":
        "Buying-journey UI and integrations built with React on top of VTEX IO and GraphQL.",
    },
    stack: ["React", "VTEX IO", "GraphQL", "Styled Components"],
    image: "/images/projects/logo-seminovos-localiza-v1.png",
    featured: false,
    liveUrl: "https://seminovos.localiza.com/",
    caseStudy: {
      context: {
        "pt-BR":
          "A Localiza Seminovos vende os carros que saem da frota da locadora. A loja roda na VTEX, e a jornada de compra depende de busca e filtros num catálogo grande de veículos.",
        "en-US":
          "Localiza Seminovos sells cars coming out of the rental company's fleet. The store runs on VTEX, and the buying journey depends on search and filters across a large vehicle catalog.",
      },
      challenge: {
        "pt-BR":
          "Manter o catálogo rápido e fácil de filtrar, com filtros cruzados como modelo, ano, preço e cidade, trabalhando dentro das limitações e convenções da VTEX IO. Isso muda a forma de organizar componentes e dados em relação a uma aplicação React comum.",
        "en-US":
          "Keeping the catalog fast and easy to filter, with cross-filters such as model, year, price and city, while working within VTEX IO's limits and conventions. That changes how components and data are organized compared to a regular React app.",
      },
      myRole: {
        "pt-BR": [
          "Desenvolvi interfaces e integrações da jornada de compra em React sobre VTEX IO.",
          "Trabalhei na evolução e manutenção do storefront, com dados consumidos via GraphQL.",
          "Acompanhei desenvolvedores júnior e estagiários durante o projeto.",
        ],
        "en-US": [
          "Built buying-journey UI and integrations in React on VTEX IO.",
          "Worked on the storefront's evolution and maintenance, consuming data through GraphQL.",
          "Supported junior developers and interns during the project.",
        ],
      },
      architecture: [
        {
          title: {
            "pt-BR": "React dentro do modelo da VTEX IO",
            "en-US": "React inside the VTEX IO model",
          },
          body: {
            "pt-BR":
              "Na VTEX IO, a loja é composta por blocos e apps declarados no tema. Componentes React customizados entram nesse modelo, e os dados vêm da camada GraphQL da plataforma. Boa parte do trabalho é decidir o que precisa de customização própria e o que deve seguir o padrão da plataforma.",
            "en-US":
              "On VTEX IO, the store is composed of blocks and apps declared in the theme. Custom React components plug into that model, and data comes from the platform's GraphQL layer. Much of the work is deciding what needs custom code and what should follow the platform's defaults.",
          },
        },
      ],
      decisions: [],
      results: {
        "pt-BR": [
          "Evolução contínua da jornada de compra, com componentes mais simples de manter e reaproveitar.",
          "Parte de uma frente da Framework Digital que atendia várias marcas na VTEX, como Localiza Seminovos, Drogaria Araujo e Reserva.",
        ],
        "en-US": [
          "Continuous improvements to the buying journey, with components that are simpler to maintain and reuse.",
          "Part of a Framework Digital team serving several brands on VTEX, including Localiza Seminovos, Drogaria Araujo and Reserva.",
        ],
      },
      images: [],
    },
  },
];
