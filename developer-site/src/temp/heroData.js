import { NumberSquare, Bank, Mastercard, AppleStore, AppGalery, GooglePlay } from "../../public/assets/";

export const data = {
  title: "El API Center de BANHCAFE",
  description:
    "Somos una plataforma basada en OpenBanking API de integración rápida para startup, fintech y empresas. ¡Solicite su usuario y comience a transformar su negocio con nuestras APIs!",
  imageUrl:
    "https://img.freepik.com/foto-gratis/experiencia-programacion-persona-que-trabaja-codigos-computadora_23-2150010125.jpg?t=st=1710360187~exp=1710363787~hmac=3b9b6eab99beaa34b73c43b729244bd8798b636bcc7142efd58a9eb3eb4b58e5&w=826",
};

export const apis = [
  {
    id: 1,
    title: "Verificación de Identidad",
    src: NumberSquare,
    category: "Clientes",
    desc: "The Fintech Express program helps all fintech companies issue cards and credentials.",
    cover: "https://www.banhcafe.hn/promotion-background-top.webp",
    content:
      "For the digital connected consumer who seeks immediacy and convenience in their banking services, Digital First delivers an innovative and secure digital card experience.",
    authorName: "John Doe",
    authorImg: "https://www.banhcafe.hn/_next/image?url=%2Fpromotion-1.webp&w=640&q=75",
    authorDesc: "Web Developer",
    buttonColor: "bg-blue-500",
  },
  {
    id: 2,
    title: "Apertura de Cuentas",
    src: Bank,
    category: "Cuentas",
    desc: "The new Buy Now Pay Later program that meets the needs of lenders, merchants and consumers, offered at scale across the Mastercard network.",
    cover: "https://www.banhcafe.hn/promotion-background-top.webp",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos iure inventore.",
    authorName: "John Doe",
    authorImg: "https://www.banhcafe.hn/_next/image?url=%2Fpromotion-bottom-1.webp&w=640&q=75",
    authorDesc: "Web Developer",
    buttonColor: "bg-green-500",
  },
  {
    id: 3,
    title: "Tarjetas Prepago",
    src: Mastercard,
    category: "Tarjetas",
    desc: "Access more than 200 acquirers around the world with our API-powered gateway platform.",
    cover: "https://www.banhcafe.hn/background.webp",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos iure inventore.",
    authorName: "John Doe",
    authorImg: "https://www.banhcafe.hn/_next/image?url=%2Fhome-hero-2.webp&w=1200&q=75",
    authorDesc: "Web Developer",
    buttonColor: "bg-RED_DARK",
  },
];

export const solutions = [
  {
    id: 1,
    title: "Fintech Express",
    src: NumberSquare,
    srcColor: "bg-gradient-to-t from-cyan-500 to-blue-500",
    desc: "The Fintech Express program helps all fintech companies issue cards and credentials.",
    cover: "https://www.banhcafe.hn/background.webp",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos iure inventore.",
    authorName: "John Doe",
    authorImg: "https://www.banhcafe.hn/_next/image?url=%2Fhome-hero-2.webp&w=1200&q=75",
    authorDesc: "Web Developer",
    buttonColor: "bg-blue-500",
  },
  {
    id: 2,
    title: "Account Services Catalogue",
    src: Bank,
    srcColor: "bg-gradient-to-b from-green-400 to-blue-500",
    desc: "Receives Universal Specification, routes to Service Providers for processing and ensures a timely response to submitter.Receives Universal Specification, routes to Service Providers for processing and ensures a timely response to submitter.",
    cover: "https://www.banhcafe.hn/promotion-background-top.webp",
    content:
      "For the digital connected consumer who seeks immediacy and convenience in their banking services, Digital First delivers an innovative and secure digital card experience.",
    authorName: "John Doe",
    authorImg: "https://www.banhcafe.hn/_next/image?url=%2Fpromotion-1.webp&w=640&q=75",
    authorDesc: "Web Developer",
    buttonColor: "bg-green-500",
  },
  {
    id: 3,
    title: "Token",
    src: Mastercard,
    srcColor: "bg-gradient-to-t from-yellow-400 from-10% to-red-600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae",
    cover: "https://www.banhcafe.hn/promotion-background-top.webp",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos iure inventore.",
    authorName: "John Doe",
    authorImg: "https://www.banhcafe.hn/_next/image?url=%2Fpromotion-bottom-1.webp&w=640&q=75",
    authorDesc: "Web Developer",
    buttonColor: "bg-RED_DARK",
  },
];

export const sectionBlogs = [
  {
    id: 1,
    title: "usecases",
    label: "¡Transforme su modelo de negocio!",
    content:
      "Nuestras APIs le ofrecen una respuesta eficiente a las necesidades de su empresa y las hemos agrupado en casos de uso para que pueda descubrir fácilmente cómo usarlas para transformar su modelo de negocio.",
  },
  {
    id: 2,
    title: "solutions",
    label: "The tools you need",
    content:
      "Build world-leading services into your business, covering payments, data, fraud, identity, loyalty, consulting and more.",
  },
];

export const tabs = [
  {
    id: 1,
    title: "apis",
    desc: "Mastercard has additional resources that can help no matter your background or where you are in your journey.",
    cover: "https://www.banhcafe.hn/background.webp",
    authorImg: "https://www.banhcafe.hn/_next/image?url=%2Fpersonal-hero-1.webp&w=1200&q=75",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos iure inventore.",
    authorName: "John Doe",
    authorDesc: "Web Developer",
  },
  {
    id: 2,
    title: "solutions",
    desc: "Mastercard has additional resources that can help no matter your background or where you are in your journey.",
    cover: "",
    authorImg: "https://developer.mastercard.com/_/_/src/global/assets/svg/api-hero-small.svg",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos iure inventore.",
    authorName: "John Doe",
    bgColor: "#AFCE6D",
    authorDesc: "Web Developer",
  },
  {
    id: 3,
    title: "usecases",
    desc: "Impulsamos su empresa incorporando soluciones financieras a su plataforma digital",
    cover: "https://developer.lafise.com/imagenes/hero/casosUsoweb.webp",
    authorImg: "https://www.banhcafe.hn/_next/image?url=%2Fhero%2Fhero-divisas.webp&w=1200&q=75",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos iure inventore.",
    authorName: "John Doe",
    authorDesc: "Web Developer",
  },
];

export const storeLinks = {
  apple: AppleStore,
  appGalery: AppGalery,
  googlePlay: GooglePlay,
  hola: "hola",
};

export const footer = [
  {
    id: 1,
    title: "Sobre BANHCAFE",
    sections: [
      {
        id: 1,
        title: "Nuestra historia",
        href: "/sobre-nosotros",
      },
      {
        id: 2,
        title: "Fundación BANHCAFE",
        href: "/sobre-nosotros?tab=4#fundacion-banhcafe",
      },
      {
        id: 3,
        title: "Estados Financieros y balance general",
        href: "/sobre-nosotros?tab=3#estados-financieros",
      },
      {
        id: 4,
        title: "Valores",
        href: "/sobre-nosotros?tab=2#valores",
      },
    ],
  },

  {
    id: 2,
    title: "Ayuda y apoyo",
    sections: [
      {
        id: 1,
        title: "Ayuda y preguntas frecuentes",
        href: "/ayuda",
      },
      {
        id: 2,
        title: "Educación financiera",
        href: "/usuario-financiero/educacion-financiera",
      },
      {
        id: 3,
        title: "Encuentre su agencia",
        href: "/contactenos?tab=4#atms",
      },
      {
        id: 4,
        title: "Seguridad",
        href: "/seguridad",
      },
      {
        id: 5,
        title: "Contactos",
        href: "/contactenos",
      },
    ],
  },

  {
    id: 3,
    title: "Usuario financiero",
    sections: [
      {
        id: 1,
        title: "Comisión nacional de bancos y seguros",
        href: "/usuario-financiero/cnbs",
      },
      {
        id: 2,
        title: "Derechos y obligaciones",
        href: "/usuario-financiero/derechos-obligaciones-de-los-usuarios",
      },
      {
        id: 3,
        title: "Fondo de seguro de depósito (FOSEDE)",
        href: "/usuario-financiero/fosede",
      },
      {
        id: 4,
        title: "Tabla de comisiones",
        href: "/usuario-financiero/tabla-de-comisiones",
      },
      {
        id: 5,
        title: "Formularios y contratos",
        href: "/usuario-financiero/formularios-y-contratos",
      },
    ],
  },
];
