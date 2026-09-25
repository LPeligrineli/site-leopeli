import type { BlogPostRecord } from "./blog.type";

export const blogPostRecords: BlogPostRecord[] = [
  {
    slug: "microfrontends-eu-faria-de-novo",
    title: {
      "pt-BR":
        "Microfrontends: eu já ajudei a transformar uma aplicação em 7. Eu faria de novo?",
      "en-US":
        "Microfrontends: I helped split one app into seven. Would I do it again?",
    },
    excerpt: {
      "pt-BR":
        "Quando decidimos quebrar a aplicação em microfrontends, eu fui o mais resistente do grupo. Hoje eu faria de novo, sabendo bem o preço.",
      "en-US":
        "When we decided to break our app into microfrontends, I was the one pushing back hardest. Today I'd make the same call, knowing exactly what it costs.",
    },
    content: {
      "pt-BR": `
Quando a ideia de quebrar a nossa aplicação em microfrontends apareceu, eu fui o mais resistente do grupo.

Meu argumento era simples. Não havia tantos times assim, nada que uma boa conversa não resolvesse na hora do deploy. E transformar um monorepo em microfrontends é bem mais fácil do que fazer o caminho contrário. Se um dia fosse necessário, dava para dividir depois.

O grupo decidiu dividir mesmo assim, em uns sete microfrontends, com React, single-spa e Module Federation. Eu participei do desenho e da implementação, e fiquei responsável pelo módulo do Achou Levou e pelo Design System compartilhado. O projeto era o Familhão, da Globo, e tem mais detalhes no [case do portfólio](/projects/familhao).

Hoje, olhando a proporção que o produto tomou, eu tomaria a mesma decisão. Este texto é sobre por que eu mudei de ideia e sobre o preço que vem junto. Não é um tutorial: para isso, a documentação do [single-spa](https://single-spa.js.org/) e do [Module Federation](https://module-federation.io/) faz um trabalho melhor.

## O que microfrontend resolve (e o que não resolve)

Microfrontend não é técnica de performance. Não deixa o código mais limpo. Não conserta componente mal escrito. Se a aplicação é bagunçada, você termina com sete aplicações bagunçadas, com o bônus de que agora elas precisam conversar entre si.

O que ele resolve é um problema de negócio: vários times mexendo no mesmo produto, precisando entregar rápido e sem pedir licença um para o outro.

No nosso caso, era isso. Vários times trabalhavam ao mesmo tempo em áreas bem diferentes: login, pagamentos, a área do Familhão, as ofertas do Achou Levou. Cada um com o seu ritmo. A dor principal era o deploy: um gargalo único para todo mundo e pouca independência entre os times.

Se o problema fosse de código, microfrontend seria a resposta errada. Era de organização.

## Como ficou

A estrutura era relativamente clássica:

- um **host**, que carrega e orquestra os módulos;
- uns **sete microfrontends**, cada um dono de uma área do produto ou de uma função específica;
- um **Design System** compartilhado;
- uma **API de estado compartilhado** para o que precisava atravessar os módulos.

Usamos single-spa e Module Federation juntos, o que às vezes confunde, porque os dois aparecem em tutoriais como "o jeito de fazer microfrontend". Eles resolvem partes diferentes do problema:

- O **single-spa** cuidava da orquestração: qual aplicação sobe em cada rota, o ciclo de vida de cada uma, montar, desmontar e fazer os módulos conviverem.
- O **Module Federation** cuidava do carregamento em tempo de execução e do compartilhamento: dependências como o React, componentes e recursos comuns, sem que cada módulo levasse a própria cópia.

A combinação foi decisão do grupo de arquitetura do qual eu fazia parte. A ideia era usar o single-spa só como camada de orquestração, sem empurrar para ele também a responsabilidade de resolver o compartilhamento de dependências e módulos. Para isso, o Module Federation encaixava melhor.

## A decisão que mais vale explicar: estado compartilhado

Alguns estados precisavam existir para todo mundo: usuário logado, sessão, informações da jornada, sinais de um módulo para outro.

O caminho óbvio é uma store global compartilhada. Um Redux no host, todo mundo importa e pronto. É simples no primeiro dia e vira problema no nonagésimo, porque todo microfrontend passa a depender da mesma biblioteca, na mesma versão, com o mesmo formato de estado. Você acabou de recriar o acoplamento que a arquitetura existia para quebrar.

Fomos por outro caminho: uma API própria para ler e atualizar esse estado. Por baixo dela havia um Zustand, mas nenhum módulo precisava saber disso. Os módulos conversavam com a API. Se a implementação interna mudasse, ninguém ficava sabendo.

O preço: mais uma camada para manter e uma disciplina chata sobre o que é global de verdade.

Um exemplo hipotético de como isso escapa: o time de pagamentos precisa saber se o usuário já viu um banner promocional. Colocar um campo "viu o banner" no estado compartilhado resolve em cinco minutos. Seis meses depois, três módulos dependem dele, ninguém lembra quem criou, e mudar o formato vira uma negociação entre times. Cada campo no estado global é um contrato. Antes de criar um, vale perguntar se mais de um módulo precisa mesmo dele.

## O que doeu

Esta é a parte que as palestras sobre microfrontend costumam atravessar correndo. Alguns desses problemas eu vivi de perto. Outros ainda estavam começando quando eu saí do projeto.

**Carregamento inicial.** Cada microfrontend é mais uma coisa para buscar pela rede antes de a tela aparecer. A nossa estratégia foi carregar por rota, sob demanda: o usuário só baixa o módulo da área em que está entrando. Isso resolve boa parte do problema, mas a primeira visita a cada área continua pagando o custo de buscar aquele módulo.

**Navegação.** Para o usuário é um produto só. Para o código, uma troca de rota pode significar desmontar uma aplicação e montar outra. Fazer isso parecer natural dá trabalho.

**Consistência visual.** Aqui o Design System, que era uma das minhas responsabilidades, pagou a conta. Ele era distribuído como pacote npm, com build em webpack, e não houve resistência dos times para adotar. O trabalho de verdade foi de cultura: entender o que deveria ir para o Design System, componentizar pensando em reúso e, principalmente, aceitar que componente do Design System não tem regra de negócio. É só estrutura e estilo. A lógica fica no microfrontend que usa o componente.

Com vários times publicando sozinhos, consistência não pode depender de boa vontade. Ela precisa estar dentro do componente que todo mundo usa.

**CSS.** Sete aplicações na mesma página poderiam brigar por estilo. No nosso caso isso doeu pouco: quase tudo era estilizado com Tailwind direto nos componentes, com pouquíssimo CSS global para conflitar.

**Bundle duplicado.** O que não é compartilhado é duplicado. Sem cuidado, cada módulo traz a própria cópia de bibliotecas utilitárias e o usuário baixa a mesma coisa várias vezes.

**Versões compartilhadas.** Com Module Federation, você declara as dependências compartilhadas (o React é a óbvia) e, em geral, quer uma única instância delas na página. Na prática, os times precisam concordar sobre versões. Autonomia total para atualizar dependência não existe; existe autonomia negociada. Eu saí do projeto antes de isso virar problema, mas é o tipo de conta que chega com o tempo, quando cada time quer atualizar no seu próprio ritmo.

Nenhum desses problemas é impossível de resolver. Mas todos deixam de ser problema de uma tela e passam a ser problema de arquitetura. E alguém precisa ser dono deles.

## Quando eu não usaria

É curioso reler esta lista, porque o primeiro item é basicamente o argumento que eu usava na época.

Eu desconfiaria de microfrontend quando:

- existe um time só, ou poucos times que ainda conseguem resolver o deploy numa conversa;
- a motivação é "organizar o código" (para isso existem módulos, pastas bem pensadas e monorepo);
- ninguém vai ser dono da plataforma: do host, dos contratos e das versões compartilhadas;
- o produto ainda está descobrindo o que é, e as fronteiras entre as áreas mudam todo mês.

Nesses cenários, um monorepo bem organizado entrega boa parte da organização sem cobrar o preço da integração em tempo de execução. E, se o cenário mudar, dividir depois é mais fácil do que juntar.

## Então, eu faria de novo?

Sim.

Na época eu não via tanto valor. Não havia tantos times a ponto de uma conversa não resolver o deploy, e eu achava mais prudente começar com um monorepo e dividir só quando doesse.

Olhando a proporção que o produto tomou e o backlog que se formou, eu tomaria a decisão de microfrontend de novo. Minha leitura estava certa para aquele momento e errada para o que veio depois.

Mesmo sabendo que, na prática, os projetos não eram tão *micro* assim. O que eles davam era autonomia e velocidade de desenvolvimento para cada time, e isso compensou o custo.

No fim, microfrontend é uma decisão sobre como times trabalham que, por acaso, tem uma implementação técnica. E às vezes é também uma aposta sobre quantos times você vai ter daqui a um ano.
`,
      "en-US": `
When the idea of breaking our application into microfrontends came up, I was the one pushing back the hardest.

My argument was simple. There weren't that many teams, nothing a good conversation couldn't sort out at deploy time. And turning a monorepo into microfrontends is much easier than going the other way. If we ever needed to, we could split later.

The group decided to split anyway, into around seven microfrontends, using React, single-spa and Module Federation. I took part in the design and implementation, and I owned the Achou Levou module and the shared Design System. The project was Familhão, from Globo, and there's more detail in the [portfolio case study](/projects/familhao).

Today, looking at how big the product got, I'd make the same decision. This post is about why I changed my mind and about the price that comes with it. It's not a tutorial: the [single-spa](https://single-spa.js.org/) and [Module Federation](https://module-federation.io/) docs do that better.

## What microfrontends solve (and what they don't)

Microfrontends aren't a performance technique. They don't make your code cleaner. They don't fix badly written components. If the app is a mess, you end up with seven messy apps, with the bonus that now they have to talk to each other.

What they solve is a business problem: several teams working on the same product, needing to ship fast without asking each other for permission.

That was our case. Several teams were working at the same time on very different areas: login, payments, the Familhão area, the Achou Levou offers. Each at its own pace. The main pain was deployment: a single bottleneck for everyone and little independence between teams.

If the problem had been the code, microfrontends would have been the wrong answer. It was an organizational problem.

## What we ended up with

The structure was fairly classic:

- a **host** that loads and orchestrates the modules;
- around **seven microfrontends**, each owning an area of the product or a specific function;
- a shared **Design System**;
- a **shared-state API** for whatever had to cross module boundaries.

We used single-spa and Module Federation together, which sometimes confuses people, because both show up in tutorials as "the way to do microfrontends". They solve different parts of the problem:

- **single-spa** handled orchestration: which app mounts on which route, each app's lifecycle, mounting, unmounting and keeping the modules living together.
- **Module Federation** handled runtime loading and sharing: dependencies like React, components and common resources, without each module shipping its own copy.

The combination was a decision made by the architecture group I was part of. The idea was to use single-spa purely as the orchestration layer, without also making it responsible for sharing dependencies and modules. Module Federation was a better fit for that.

## The decision most worth explaining: shared state

Some state had to exist for everyone: the logged-in user, the session, journey data, signals from one module to another.

The obvious path is a shared global store. Redux in the host, everyone imports it, done. It's simple on day one and a problem by day ninety, because every microfrontend now depends on the same library, the same version and the same state shape. You've just recreated the coupling the architecture was supposed to break.

We went another way: an in-house API to read and update that state. Under the hood it was Zustand, but no module needed to know that. Modules talked to the API. If the internal implementation changed, nobody noticed.

The price: one more layer to maintain, and an annoying discipline about what is really global.

A hypothetical example of how this gets away from you: the payments team needs to know whether the user has already seen a promo banner. Adding a "saw the banner" field to shared state takes five minutes. Six months later, three modules depend on it, nobody remembers who added it, and changing its shape turns into a negotiation between teams. Every field in global state is a contract. Before adding one, it's worth asking whether more than one module really needs it.

## What hurt

This is the part microfrontend talks tend to rush through. Some of these problems I lived through. Others were only starting when I left the project.

**Initial load.** Each microfrontend is one more thing to fetch over the network before the screen shows up. Our strategy was to load by route, on demand: users only download the module for the area they're entering. That solves a good part of it, but the first visit to each area still pays the cost of fetching that module.

**Navigation.** To the user it's one product. To the code, a route change can mean unmounting one app and mounting another. Making that feel natural takes work.

**Visual consistency.** This is where the Design System, one of my responsibilities, paid off. It was distributed as an npm package built with webpack, and teams didn't push back on adopting it. The real work was cultural: understanding what belonged in the Design System, building components for reuse and, above all, accepting that a Design System component has no business logic. It's just structure and style. The logic lives in the microfrontend that uses it.

With several teams shipping on their own, consistency can't depend on goodwill. It has to live inside the component everyone uses.

**CSS.** Seven apps on the same page could easily fight over styles. In our case this barely hurt: almost everything was styled with Tailwind directly in the components, with very little global CSS to clash.

**Duplicated bundles.** Whatever isn't shared gets duplicated. Without care, each module brings its own copy of utility libraries and users download the same thing several times.

**Shared versions.** With Module Federation you declare shared dependencies (React is the obvious one) and you usually want a single instance of them on the page. In practice, teams have to agree on versions. Full autonomy to upgrade dependencies doesn't exist; what you get is negotiated autonomy. I left the project before this became a problem, but it's the kind of bill that shows up over time, when each team wants to upgrade at its own pace.

None of these problems is impossible to solve. But they all stop being a single screen's problem and become an architecture problem. And someone has to own them.

## When I wouldn't use them

It's funny rereading this list, because the first item is basically the argument I was making back then.

I'd be suspicious of microfrontends when:

- there's a single team, or a few teams that can still sort out deploys in a conversation;
- the motivation is "organizing the code" (that's what modules, well-thought-out folders and monorepos are for);
- nobody is going to own the platform: the host, the contracts and the shared versions;
- the product is still figuring out what it is, and the boundaries between areas change every month.

In those scenarios, a well-organized monorepo gives you most of the organization without charging the price of runtime integration. And if things change, splitting later is easier than merging.

## So, would I do it again?

Yes.

Back then I didn't see much value in it. There weren't so many teams that a conversation couldn't sort out deploys, and I thought it was wiser to start with a monorepo and split only when it hurt.

Looking at how big the product got and the backlog that built up, I'd choose microfrontends again. My read was right for that moment and wrong for what came next.

Even knowing that, in practice, the projects weren't all that *micro*. What they gave each team was autonomy and development speed, and that was worth the cost.

In the end, microfrontends are a decision about how teams work that happens to have a technical implementation. And sometimes they're also a bet on how many teams you'll have a year from now.
`,
    },
    date: "2026-09-24",
    readTime: 7,
    tags: ["Microfrontends", "Arquitetura", "React"],
    image: "/images/blog/microfrontends-capa.png",
    imageAlt: {
      "pt-BR":
        "Avatar cartoon do Leo, pensativo, com o queixo apoiado no punho e pontos de interrogação em volta, ao lado de uma janela de navegador dividida em blocos coloridos, um deles com a logo do Familhão e outro chegando voando.",
      "en-US":
        "Leo's cartoon avatar, thoughtful, chin resting on his fist with question marks around him, next to a browser window split into colorful blocks, one showing the Familhão logo and another flying in.",
    },
    featured: true,
  },
  {
    slug: "zelda-breath-of-the-wild-deixar-o-jogador-se-perder",
    title: {
      "pt-BR": "Zelda: Breath of the Wild e a coragem de deixar o jogador se perder",
      "en-US": "Zelda: Breath of the Wild and the courage to let players get lost",
    },
    excerpt: {
      "pt-BR":
        "Um jogo que mostra o castelo do chefe final no primeiro minuto e diz: vai lá, se quiser.",
      "en-US":
        "A game that shows you the final boss's castle in the first minute and says: go ahead, if you want.",
    },
    content: {
      "pt-BR": `
Eu já tinha jogado Zelda antes, mas meio por jogar. Joguei no Super Nintendo, no Nintendo DS e o Ocarina of Time no 64. Hoje, um pouco mais velho, jogo com outra cabeça. Ganhei um Nintendo Switch 2 no Dia dos Pais, e o primeiro jogo que coloquei nele foi Breath of the Wild.

Tem um momento no começo que resume o jogo inteiro, e ele continua sendo um dos meus favoritos. O Link acorda, sai do santuário, a câmera se afasta e mostra Hyrule inteira na sua frente. É uma imensidão de mundo para explorar. Lá no fundo está o castelo, com uma nuvem escura girando em volta. É ali que está o chefe final.

E o jogo não te impede de ir. Depois de sair do Grande Platô, dá para caminhar até o castelo e enfrentar o Ganon com três corações e um galho na mão. Você provavelmente vai morrer. Mas pode.

O recado é claro desde o primeiro minuto: aqui ninguém vai te levar pela mão.

## O que o jogo deixa de fazer

Os Zeldas que eu tinha jogado seguiam uma estrutura bem conhecida: você entra na dungeon, pega o item, e o item abre o caminho para a próxima área. É cadeado e chave. Funciona muito bem, mas você quase sempre sabe onde deveria estar.

Breath of the Wild entrega praticamente todas as ferramentas no Grande Platô, na primeira hora de jogo: ímã, bombas, parar o tempo, criar blocos de gelo. Depois disso, o que te segura não é um item que falta. É o vigor para escalar, o frio, o calor, a falta de coragem para encarar aquele Lynel.

O mapa não vem preenchido. Você sobe numa torre, olha em volta e marca o que achou interessante. O jogo te dá carimbos para marcar o mapa, e não uma lista de tarefas.

## Curiosidade como recompensa

O que o jogo faz de mais esperto é transformar a curiosidade na própria recompensa.

Você vê alguma coisa estranha no horizonte e vai até lá. No caminho aparece outra. Chegando, tem um santuário, ou um Korok escondido debaixo de uma pedra, ou só uma vista bonita. Às vezes não tem nada, e tudo bem, porque no caminho você já se distraiu com outras três coisas.

Nada disso é por acaso. A equipe da Nintendo falou sobre essas escolhas na GDC de 2017, na palestra [Change and Constant: Breaking Conventions with The Legend of Zelda: Breath of the Wild](https://www.gdcvault.com/play/1024562/Change-and-Constant-Breaking-Conventions). Numa apresentação posterior, na CEDEC, explicaram a [regra do triângulo](https://www.nintendolife.com/news/2017/10/zelda_breath_of_the_wilds_ingenious_design_is_all_about_triangles_apparently): montanhas e morros em formato triangular escondem o que está atrás deles, e isso cria vontade de subir para ver.

É um jeito de guiar o jogador sem dizer para onde ir. O terreno faz o trabalho que em outros jogos fica com uma seta no canto da tela.

## A química

O outro pilar é o que a equipe chamou de gameplay multiplicativo. Em vez de cada puzzle ter uma solução pensada pelo designer, o jogo tem regras simples que se combinam: fogo queima grama; grama queimando cria uma corrente de ar quente; o ar quente te levanta com o parapente. Metal conduz eletricidade. Gelo desliza. Madeira flutua.

A graça é que as soluções que você inventa funcionam. Congelar a água para atravessar um rio, prender uma árvore no tempo e acertá-la até ela sair voando com você junto, descer a montanha usando o escudo de prancha.

O outro momento que ficou comigo foi a primeira Besta Divina: uma máquina gigante que é, ela inteira, um quebra-cabeça, com partes que você movimenta para resolver os desafios lá dentro.

## Deixar o jogador se perder

A escolha mais corajosa do jogo é a que está no título: confiar que o jogador vai querer explorar.

E eu me perdi muito. Quando o Link acorda, você não tem informação nenhuma. E o jogo inteiro segue assim: o que você recebe são pistas, nunca instruções.

A maioria dos jogos grandes tem medo de o jogador se perder, se frustrar e desistir. E compensa com marcador, seta, lista de missões e um personagem repetindo o que você deveria fazer agora. Breath of the Wild aposta que se perder faz parte da diversão.

## O único porém

Não é que eu não tenha gostado, mas gerenciar o inventário de armas é complicado. Elas quebram, o espaço é limitado, e boa parte do tempo vai em decidir o que carregar e o que jogar fora.

## Por que ainda penso nele

Este blog fala bastante de tecnologia, e este texto não é para tirar lição nenhuma sobre software. É só um jogo de que eu gosto muito.

E esse vai ser o tom daqui. Vai ter muita coisa de tecnologia, IA, comunicação e liderança, mas também vai ter esporte, videogame e família. A ideia é que você conheça o Leo além do profissional.

Enquanto isso, sigo degustando cada canto de Hyrule, conversando com cada NPC e fazendo as side quests. Ainda não joguei Tears of the Kingdom. O plano é derrotar o Ganon um dia antes do lançamento da nova versão de Ocarina of Time para o Switch 2, o mesmo Ocarina que eu joguei no 64. Que, aliás, já está comprado.
`,
      "en-US": `
I'd played Zelda before, but mostly just to play. I had it on the Super Nintendo, on the Nintendo DS, and Ocarina of Time on the N64. Now, a bit older, I play with a different head. I got a Nintendo Switch 2 for Father's Day, and the first game I put in it was Breath of the Wild.

There's a moment at the start that sums up the whole game, and it's still one of my favorites. Link wakes up, walks out of the shrine, the camera pulls back and shows all of Hyrule in front of you. It's a huge world waiting to be explored. Far in the distance there's the castle, with a dark cloud swirling around it. That's where the final boss is.

And the game doesn't stop you from going. Once you leave the Great Plateau, you can walk straight to the castle and face Ganon with three hearts and a tree branch. You'll probably die. But you can.

The message is clear from the first minute: nobody here is going to hold your hand.

## What the game stops doing

The Zelda games I'd played followed a well-known structure: you enter the dungeon, get the item, and the item opens the way to the next area. Lock and key. It works really well, but you almost always know where you're supposed to be.

Breath of the Wild hands you almost every tool on the Great Plateau, in the first hour: a magnet, bombs, stopping time, making ice blocks. After that, what holds you back isn't a missing item. It's stamina for climbing, the cold, the heat, and not having the nerve to face that Lynel.

The map doesn't come filled in. You climb a tower, look around and mark whatever caught your eye. The game gives you stamps to mark the map, not a to-do list.

## Curiosity as the reward

The smartest thing the game does is turn curiosity into its own reward.

You see something odd on the horizon and head over. On the way, something else shows up. When you get there, there's a shrine, or a Korok hiding under a rock, or just a nice view. Sometimes there's nothing, and that's fine, because on the way you already got distracted by three other things.

None of this is an accident. The Nintendo team talked about these choices at GDC 2017, in the talk [Change and Constant: Breaking Conventions with The Legend of Zelda: Breath of the Wild](https://www.gdcvault.com/play/1024562/Change-and-Constant-Breaking-Conventions). In a later presentation at CEDEC, they explained the [triangle rule](https://www.nintendolife.com/news/2017/10/zelda_breath_of_the_wilds_ingenious_design_is_all_about_triangles_apparently): triangle-shaped mountains and hills hide what's behind them, and that makes you want to climb up and see.

It's a way to guide the player without saying where to go. The terrain does the job that other games give to an arrow in the corner of the screen.

## The chemistry

The other pillar is what the team called multiplicative gameplay. Instead of every puzzle having one solution designed up front, the game has simple rules that combine: fire burns grass; burning grass creates a hot updraft; the updraft lifts you with the paraglider. Metal conducts electricity. Ice slides. Wood floats.

The fun part is that the solutions you come up with actually work. Freezing water to cross a river, freezing a tree in time and whacking it until it launches with you along for the ride, sliding down a mountain using your shield as a board.

The other moment that stuck with me was the first Divine Beast: a giant machine that is, as a whole, one big puzzle, with parts you move around to solve the challenges inside.

## Letting the player get lost

The game's bravest choice is the one in the title: trusting that the player will want to explore.

And I got lost a lot. When Link wakes up, you have no information at all. And the whole game stays that way: what you get are clues, never instructions.

Most big games are afraid the player will get lost, frustrated and quit. They make up for it with markers, arrows, quest lists and a character repeating what you should be doing right now. Breath of the Wild bets that getting lost is part of the fun.

## The one catch

It's not that I didn't like it, but managing the weapon inventory is a pain. Weapons break, space is limited, and a good chunk of time goes into deciding what to carry and what to drop.

## Why I still think about it

This blog talks a lot about technology, and this post isn't here to draw any lesson about software. It's just a game I really like.

And that's going to be the tone around here. There'll be plenty of technology, AI, communication and leadership, but also sports, video games and family. The idea is for you to get to know Leo beyond the professional side.

Meanwhile, I'm savoring every corner of Hyrule, talking to every NPC and doing the side quests. I haven't played Tears of the Kingdom yet. The plan is to beat Ganon the day before the new Ocarina of Time comes out on Switch 2, the same Ocarina I played on the N64. Which, by the way, is already bought.
`,
    },
    date: "2026-09-25",
    readTime: 4,
    tags: ["Videogames", "Zelda", "Game design"],
    image: "/images/blog/zelda-capa.png",
    imageAlt: {
      "pt-BR":
        "O Leo em cartoon, de costas, sentado no sofá jogando, com a TV mostrando Zelda: Breath of the Wild na luta contra a Besta Divina Vah Ruta.",
      "en-US":
        "Cartoon Leo seen from behind, sitting on the couch playing, with the TV showing Zelda: Breath of the Wild during the fight against the Divine Beast Vah Ruta.",
    },
    featured: true,
  },
  {
    slug: "ser-ruim-em-alguma-coisa-de-novo",
    title: {
      "pt-BR": "Ser ruim em alguma coisa de novo",
      "en-US": "Being bad at something again",
    },
    excerpt: {
      "pt-BR":
        "Voltei a treinar Jiu-Jitsu aos 38 e precisei me dar uma permissão que eu não me dava fazia tempo: a de ser ruim em alguma coisa.",
      "en-US":
        "I went back to Jiu-Jitsu at 38 and had to give myself a permission I hadn't granted in a long time: to be bad at something.",
    },
    content: {
      "pt-BR": `
Eu já tinha treinado Jiu-Jitsu quando era mais novo. Parei por falta de tempo ou por autossabotagem, dependendo de quão sincero eu estiver sendo no dia. Há mais ou menos um ano, aos 38, voltei. O motivo foi a minha filha.

E descobri rápido uma coisa que ninguém tinha me avisado: voltar é pior do que começar.

Quem começa do zero não tem expectativa nenhuma. Quem volta tem memória. A cabeça lembra que já soube fazer aquilo e sabe exatamente o que deveria acontecer. O corpo não foi avisado.

Existe um desconforto específico em ser iniciante depois de adulto. Não é o de criança, que não sabe nada e acha isso normal. É o de quem já é bom em outras coisas, já tem uma carreira, já é a pessoa consultada quando o assunto é a sua área, e de repente não entende o que está acontecendo.

No Jiu-Jitsu, esse desconforto tem forma física: alguém te prende no chão e você não faz ideia de por onde começar a sair.

Voltar ao tatame exigiu uma coisa que eu não me dava fazia tempo: permissão para ser ruim em alguma coisa.

## Faixa branca

A faixa branca é o começo de um caminho longo. Até a preta são, em média, de oito a dez anos, e não tem atalho: a graduação vem com tempo de tatame.

Os primeiros treinos seguem um roteiro bem previsível. Na parte técnica, você treina a posição, repete, entende e se sente quase competente. Aí começa o rola, o treino livre, e tudo o que fazia sentido dez minutos antes desaparece. Você passa uns vinte minutos sendo amassado por todo mundo, um de cada vez, com toda a educação.

E no dia seguinte está lá de novo.

Para quem não treina: quando você é finalizado, você "bate", dá uns tapinhas no adversário ou no chão, e o treino para. Ninguém se machuca, ninguém acha estranho. Faz parte.

No começo você bate muito. Muito mesmo. Várias vezes por minuto. Tem dia em que parece que você foi ao treino só para praticar o tapinha.

Até que um dia você resiste um pouco mais. Depois termina um rola inteiro sem ser finalizado. E um dia sai do tatame com uma sensação nova e perigosa: "acho que eu dominei esse rola".

## O menino de 14 anos

Essa sensação dura até o próximo rola que te coloca no seu lugar.

O meu foi com um menino de 14 anos. Eu estava às vésperas de pegar a faixa azul. Pareceu o meu primeiro treino: eu não entendia nada do que estava acontecendo. Ele, pelo visto, entendia tudo.

## O ego

Perder para alguém maior e mais forte é fácil de aceitar. Perder para alguém menor, que parece nem estar suando, mexe com outra coisa. O corpo entende que perdeu. O ego procura explicação: "eu estava cansado", "ele treina há anos", "numa situação de verdade seria diferente".

Quando o adversário tem 14 anos, a lista de desculpas acaba bem rápido.

Com o tempo você perde menos, mas continua perdendo. O que muda é a relação com a derrota. Bater deixa de ser vergonha e vira informação: aquele braço estava exposto, eu fiquei tempo demais naquela posição, eu achei que tinha dominado o rola.

## O que faz voltar

Hoje o Jiu-Jitsu é o meu recovery mental. É o momento em que eu paro de pensar no trabalho e nos problemas e consigo, finalmente, silenciar a cabeça.

Não é mérito meu. É que fica difícil pensar na lista de tarefas quando tem alguém tentando levar o seu braço para casa.

## A permissão de ser ruim

Eu não vou escrever aqui "5 coisas que o Jiu-Jitsu me ensinou sobre liderança". O Jiu-Jitsu é outra coisa, e é bom justamente por ser outra coisa.

O que ele faz é me treinar, toda semana, a ser resiliente. E uma frase que meu irmão Everaldo me ensinou e me marcou pra sempre: "dá para ser faixa branca em alguma coisa, desde que eu me permita ser ruim nela por um tempo".

Hoje estou na faixa azul e treino três vezes por semana. O tatame virou o meu momento de silenciar a cabeça. E virou também uma coisa que eu divido com a minha filha, que foi quem me trouxe de volta para lá e que treina também.

A gente trocou de faixa junto.

![Eu e minha filha no tatame, cada um apontando para a faixa nova do outro: a minha azul, a dela cinza e branca.](/images/blog/jiu-jitsu-troca-de-faixa.jpg)
*Cada um apontando para a faixa nova do outro.*
`,
      "en-US": `
I trained Jiu-Jitsu when I was younger. I stopped because of lack of time or self-sabotage, depending on how honest I'm being that day. About a year ago, at 38, I went back. The reason was my daughter.

And I quickly learned something nobody had warned me about: going back is worse than starting.

When you start from zero, you have no expectations. When you go back, you have memories. Your head remembers that you used to know how to do this and knows exactly what should happen. Your body didn't get the memo.

There's a specific kind of discomfort in being a beginner as an adult. It's not the kid kind, where you don't know anything and that feels normal. It's the kind that hits someone who's already good at other things, already has a career, is already the person people ask when it comes to their field, and suddenly has no idea what's going on.

In Jiu-Jitsu, that discomfort is physical: someone pins you to the mat and you have no clue where to even start getting out.

Going back to the mat required something I hadn't allowed myself in a long time: permission to be bad at something.

## White belt

The white belt is the start of a long road. Getting to black belt takes eight to ten years on average, and there are no shortcuts: rank comes with mat time.

The first classes follow a pretty predictable script. During the technique part, you drill the position, repeat it, understand it and feel almost competent. Then sparring starts (in Brazil we call it *rola*), and everything that made sense ten minutes earlier is gone. You spend twenty minutes getting smashed by everyone, one at a time, very politely.

And the next day you're back.

For those who don't train: when you get submitted, you tap, a few quick taps on your opponent or the mat, and the round stops. Nobody gets hurt, nobody thinks it's weird. It's part of it.

At first you tap a lot. A lot. Several times a minute. Some days it feels like you only showed up to practice tapping.

Until one day you hold out a little longer. Then you get through a whole round without being submitted. And one day you walk off the mat with a new and dangerous feeling: "I think I actually controlled that round."

## The 14-year-old

That feeling lasts until the next round puts you back in your place.

Mine was against a 14-year-old kid. I was about to get my blue belt. It felt like my first class: I had no idea what was happening. He, apparently, knew exactly what was happening.

## Ego

Losing to someone bigger and stronger is easy to accept. Losing to someone smaller who doesn't even seem to be sweating hits differently. Your body knows it lost. Your ego goes looking for excuses: "I was tired," "he's been training for years," "in a real fight it'd be different."

When your opponent is 14, you run out of excuses pretty fast.

Over time you lose less, but you keep losing. What changes is how you relate to losing. Tapping stops being embarrassing and becomes information: that arm was exposed, I stayed too long in that position, I thought I had controlled the round.

## What keeps me coming back

These days Jiu-Jitsu is my mental recovery. It's when I stop thinking about work and problems and finally get my head quiet.

That's not discipline on my part. It's just hard to think about your to-do list when someone is trying to take your arm home with them.

## Permission to be bad

I'm not going to write "5 things Jiu-Jitsu taught me about leadership" here. Jiu-Jitsu is something else, and it's good precisely because it's something else.

What it does is train me, every week, to be resilient. And a phrase my brother Everaldo taught me and marked me forever: "you can always be a white belt at something, as long as you let yourself be bad at it for a while".

Today I'm a blue belt and I train three times a week. The mat became my time to quiet my head. It also became something I share with my daughter, who's the reason I came back and who trains too.

We got promoted together.

![My daughter and me on the mat, each pointing at the other's new belt: mine blue, hers grey and white.](/images/blog/jiu-jitsu-troca-de-faixa.jpg)
*Each of us pointing at the other's new belt.*
`,
    },
    date: "2026-09-24",
    readTime: 4,
    tags: ["Jiu-Jitsu"],
    image: "/images/blog/jiu-jitsu-troca-de-faixa.jpg",
    featured: true,
  },
];
