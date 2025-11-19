import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Facebook, Instagram, MessageCircle, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Settings, Link2, Layers, Database, PenTool, MonitorSmartphone } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={22} strokeWidth={2} color="rgba(255,255,255,0.9)" />,
        src: "https://www.linkedin.com/in/moises-pereira-3a013767/",
    },
    {
        id: 2,
        logo: <Instagram size={22} strokeWidth={2} color="rgba(255,255,255,0.9)" />,
        src: "https://www.instagram.com/moisespe2010/",
    },
    {
        id: 3,
        logo: <Facebook size={22} strokeWidth={2} color="rgba(255,255,255,0.9)" />,
        src: "https://www.facebook.com/moises.pereira.543908/?locale=pt_BR",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Especialista em Automação & Integrações (Freelancer / Consultor)",
        subtitle: "Moises Pereira — Autônomo",
        description:
            "Desenvolvo automações avançadas usando n8n, Make, APIs REST, Webhooks, Supabase e PostgreSQL, criando fluxos inteligentes para negócios digitais. Atuo integrando plataformas, otimizando processos, reduzindo custos e acelerando operações de clientes que precisam de soluções rápidas e escaláveis.",
        date: "2025 – Atual",
    },
    {
        id: 2,
        title: "Criador de Soluções No-Code",
        subtitle: "Projetos Pessoais / Portfólio",
        description:
            "Criação de aplicativos e sistemas usando Bubble, FlutterFlow e WeWeb, abordando autenticação, banco de dados, workflows e integrações com serviços externos. Desenvolvimento de dashboards, automações híbridas e protótipos funcionais baseados em IA e No-Code.",
        date: "2024 – 2025",
    },
    {
        id: 3,
        title: "Desenvolvedor de Integrações e APIs (Independente)",
        subtitle: "Projetos via GitHub / Freelance",
        description:
            "Construção de integrações personalizadas utilizando Node.js, Python, JavaScript, Docker e APIs REST. Criação de middlewares, webhooks personalizados e serviços de automação para operações de marketing, vendas e atendimento.",
        date: "2023 – 2024",
    },
    {
        id: 4,
        title: "Designer & Prototyping UI/UX",
        subtitle: "Figma / WordPress / Projetos Pessoais",
        description:
            "Criação de protótipos, wireframes e interfaces utilizando Figma. Implementação de sites e landing pages otimizadas em WordPress, integrando automações e formulários inteligentes.",
        date: "2022 – 2023",
    },
];

export const dataCounter = [
    {
        id: 0,
        endCounter: 5,
        text: "Anos de experiência",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 12,
        text: "Clientes atendidos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 130,
        text: "Projetos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 12,
        text: "Ferramentas utilizadas",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Settings />,
        title: "Automação Avançada",
        description:
            "Automatizo processos com n8n e Make, conectando sistemas e eliminando tarefas manuais repetitivas. Você ganha fluxos mais rápidos, menos erros e mais tempo para focar no negócio.",
    },
    {
        icon: <Link2 />,
        title: "Integrações via APIs",
        description:
            "Integro CRM, WhatsApp, e-commerce, ERPs e meios de pagamento usando APIs REST e Webhooks. Tudo conversando entre si de forma segura e estável.",
    },
    {
        icon: <Layers />,
        title: "Soluções No-Code",
        description:
            "Crio sistemas em Bubble, FlutterFlow e WeWeb com autenticação, banco de dados e formulários avançados. Ideal para validar ideias e lançar produtos sem grandes equipes de desenvolvimento.",
    },
    {
        icon: <Database />,
        title: "Supabase & PostgreSQL",
        description:
            "Desenho a estrutura dos dados em Supabase e PostgreSQL com foco em performance e segurança, conectando regras de negócio, triggers e automações ao backend ou a fluxos No-Code.",
    },
    {
        icon: <PenTool />,
        title: "UI/UX & Protótipos",
        description:
            "Desenho interfaces e protótipos no Figma focados em clareza, usabilidade e conversão. Ajudo a testar ideias e acelerar o desenvolvimento final.",
    },
    {
        icon: <MonitorSmartphone />,
        title: "Sites & Landing Pages",
        description:
            "Desenvolvo sites e páginas de alta conversão com Lovable, Bolt.new, WeWeb, Bubble ou WordPress. Front-end integrado com formulários, automações e sistemas internos para entregar resultados rápidos e escaláveis.",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "Contratei o Moises para implementar uma automação completa entre meu formulário de captura, CRM e WhatsApp. Hoje todo o fluxo de leads roda sozinho e eu só entro na parte estratégica. O ganho de tempo e organização foi enorme.",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "O painel de vendas que o Moises construiu para minha empresa reúne dados do site, do gateway de pagamento e do CRM em um só lugar. Agora acompanho as métricas em tempo real e tomo decisões com muito mais segurança.",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Precisávamos lançar rápido um aplicativo interno para agendamento de serviços. O Moises criou tudo com ferramentas No-Code, integrado ao nosso banco de dados. Em poucas semanas já estávamos usando em produção.",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "O Moises reestruturou nossa base de dados em Supabase/PostgreSQL e conectou com automações e relatórios. As consultas ficaram muito mais rápidas e deixamos de sofrer com planilhas quebradas e dados duplicados.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Fizemos um redesign completo da interface do nosso sistema com a ajuda do Moises. A nova experiência é muito mais clara, moderna e fácil de usar, o que reduziu bastante o número de dúvidas e chamados de suporte.",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "A landing page criada pelo Moises para o nosso lançamento converte muito melhor do que as versões antigas. Já veio integrada com formulários, automações e analytics, o que facilitou demais a operação da campanha.",
        imageUrl: "/profile6.png",
    },
];