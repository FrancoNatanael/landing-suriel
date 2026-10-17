export const nav = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Qué hacemos", href: "#que-hacemos" },
  { label: "Industrias", href: "#industrias" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contactar", href: "#contacto" },
] as const;

export const header = {
  home: "#inicio",
  menuOpen: "Menú",
  menuClose: "Cerrar",
  menuLabel: "Menú principal",
  linkedinLabel: "LinkedIn de SURIEL (se abre en una pestaña nueva)",
} as const;

export const whatsapp = {
  label: "Escribir por WhatsApp",
  message: "Hola SURIEL, quiero solicitar un presupuesto.",
} as const;

export const hero = {
  eyebrow: "Expertos en ingeniería",
  titleLine1: "Ingeniería, calidad y gestión.",
  titleLine2: "Un solo equipo.",
  lead: "Diseñamos, fabricamos, montamos e inspeccionamos para la industria. Quien decide habla directo con quien resuelve.",
  image: { src: "/images/hero-image.webp", alt: "Planta industrial" },
  primaryCta: { label: "Contactar", href: "#contacto" },
  secondaryCta: { label: "Ver proyectos", href: "#proyectos" },
  sectors: ["Oil & Gas", "Energía", "Química", "Siderurgia", "Alimenticia"],
} as const;

export const clients = {
  label: "Empresas que ya trabajan con nosotros",
  // Provisorio: todos usan logo1.svg.webp hasta tener los logos reales (P12).
  logos: [
    { name: "Cliente 1", src: "/logos/logo1.svg.webp" },
    { name: "Cliente 2", src: "/logos/logo1.svg.webp" },
    { name: "Cliente 3", src: "/logos/logo1.svg.webp" },
    { name: "Cliente 4", src: "/logos/logo1.svg.webp" },
    { name: "Cliente 5", src: "/logos/logo1.svg.webp" },
    { name: "Cliente 6", src: "/logos/logo1.svg.webp" },
  ],
} as const;

export const about = {
  eyebrow: "Nosotros",
  title: "Ingeniería, calidad y gestión en un mismo equipo.",
  paragraphs: [
    "SURIEL nació en 2012 y acompaña a plantas de petróleo y gas, energía, química, siderurgia y alimenticia. Diseñamos, fabricamos, montamos e inspeccionamos, siempre con un solo equipo.",
    "Esa integración es lo que nos distingue: no nos quedamos en detectar el problema, también lo resolvemos. Cada soldadura, ensayo e inspección queda registrado para que quien conduce el proyecto decida con información clara.",
    "Trabajamos donde se pierde el tiempo: en las interfaces entre disciplinas, proyecto y obra. Por eso nuestra estructura es flexible y no hay intermediarios entre quien decide y quien ejecuta.",
  ],
  stats: [
    { value: "15", label: "Años de experiencia", placeholder: false },
    { value: "+50", label: "Clientes", placeholder: false },
    { value: "+150", label: "Proyectos realizados", placeholder: false },
  ],
  imageLabel: "foto: obra o planta",
  imageSrc: "/images/nosotros.webp",
} as const;

export const services = {
  eyebrow: "Servicios",
  title: "Cuatro líneas de trabajo, un solo responsable.",
  intro:
    "Ingeniería, fabricación, obra e inspección bajo un mismo equipo. Un único interlocutor responde por el proyecto completo, con respuesta directa y trazabilidad en cada etapa.",
  items: [
    {
      n: "01",
      title: "Ingeniería",
      image: "foto: ingeniería, piping y estructuras",
      imageSrc: "/images/ingenieria.webp",
      keys: [
        "Conceptual, básica, de detalle y de fabricación",
        "Equipos de proceso y piping",
        "Estructuras metálicas",
        "Tanques API 650/653",
        "Recipientes ASME",
        "Stress analysis",
        "Redes de incendio",
        "Ingeniería de proyectos",
      ],
    },
    {
      n: "02",
      title: "Construcciones / Fabricaciones",
      image: "foto: fabricación de equipos y skids",
      imageSrc: "/images/construcciones.webp",
      keys: [
        "Equipos, skids y estructuras",
        "Montaje de piping",
        "Tanques y recipientes",
        "Soldaduras calificadas",
        "Control dimensional, QA/QC y END",
        "Trazabilidad y Data Book",
        "Aislaciones térmicas",
        "Mantenimiento industrial",
      ],
    },
    {
      n: "03",
      title: "Obras",
      image: "foto: obra y montaje en planta",
      imageSrc: "/images/obras.webp",
      keys: [
        "Montajes industriales",
        "Reparación y mantenimiento de calderas",
        "Montajes electromecánicos",
        "Ventilación industrial",
        "Dirección y supervisión de obras",
        "Paros de planta",
        "QA/QC",
      ],
    },
    {
      n: "04",
      title: "Soldadura y END",
      image: "foto: inspección de soldadura y END",
      imageSrc: "/images/soldarura.webp",
      keys: [
        "Inspección de soldadura y calificación (WPS, PQR, WPQ)",
        "Inspección de tanques, equipos a presión, recubrimientos, FAT/SAT",
        "END: VT, UT, PAUT, PT, MT, RT",
        "Medición de espesores, campana de vacío",
        "Certificación de elementos de izaje",
      ],
    },
  ],
} as const;

export const sectors = {
  eyebrow: "Industrias",
  title: "Plantas de seis sectores industriales.",
  intro:
    "Conocemos las exigencias de cada rubro: normas, tiempos de parada y modos de operar.",
  thumbLabel: "foto sector",
  items: [
    "Oil & Gas",
    "Energía",
    "Centrales eléctricas",
    "Química",
    "Siderurgia",
    "Alimenticia",
  ],
  // Misma posición que items; "" = sin foto (se muestra placeholder)
  thumbs: [
    "/images/hero-image.webp",
    "/images/energia.webp",
    "/images/central-electrica.webp",
    "/images/quimica.webp",
    "/images/siderurgia.webp",
    "/images/alimenticia.webp",
  ],
  link: { label: "Ver proyectos →", href: "#proyectos" },
} as const;

export type Case = {
  tag: string;
  title: string;
  client: string;
  location: string; // "" se muestra "Por definir"
  line: string;
  sector: string; // "" se muestra "Por definir"
  description: string;
  photos: string[];
};

const photosFor = (n: number) => [1, 2, 3].map((k) => `foto ${n}.${k} · 4:3`);

export const projects = {
  eyebrow: "Proyectos",
  title: "Trabajos realizados en planta.",
  intro: "Seis casos reales de ingeniería, fabricación y obra en planta.",
  galleryLabel: "Galería",
  fallback: "Por definir",
  labels: {
    client: "Cliente",
    location: "Ubicación",
    line: "Línea",
    sector: "Sector",
  },
  cases: [
    {
      tag: "Alimenticia",
      title: "Prefabricado y montaje de cañerías de proceso",
      client: "PepsiCo",
      location: "Mar del Plata",
      line: "Construcciones",
      sector: "Alimenticia",
      description:
        "Prefabricado y montaje de cañerías de proceso en la planta de producción de PepsiCo, en Mar del Plata.",
      photos: photosFor(1),
    },
    {
      tag: "Soldadura y END",
      title: "Soldadura de tubos aletados P22",
      client: "YPF Luz",
      location: "La Plata",
      line: "Soldadura y END",
      sector: "Energía",
      description:
        "Soldadura de tubos aletados en acero P22 para equipos de generación de YPF Luz, en La Plata.",
      photos: photosFor(2),
    },
    {
      tag: "Centrales eléctricas",
      title: 'Reemplazo de curva nariz de caldera Ø3"',
      client: "Central térmica",
      location: "Necochea",
      line: "Obras",
      sector: "Centrales eléctricas",
      description:
        'Reemplazo de la curva de nariz de caldera Ø3" en una central térmica de Necochea.',
      photos: photosFor(3),
    },
    {
      tag: "Química",
      title: "Intercambiadores de calor",
      client: "Termofluidos / SICA",
      location: "Santa Fe",
      line: "Construcciones",
      sector: "Química",
      description:
        "Fabricación y soldadura de intercambiadores de calor para Termofluidos / SICA, en Santa Fe.",
      photos: photosFor(4),
    },
    {
      tag: "Construcciones",
      title: "Aislación térmica tanques de proceso",
      client: "CALSA",
      location: "",
      line: "Construcciones",
      sector: "",
      description: "Aislación térmica de tanques de proceso para CALSA.",
      photos: photosFor(5),
    },
    {
      tag: "Ingeniería",
      title: "Cañería de red de incendio",
      client: "MercadoLibre",
      location: "Mar del Plata",
      line: "Ingeniería",
      sector: "",
      description:
        "Cañería de red de incendio para MercadoLibre, en Mar del Plata.",
      photos: photosFor(6),
    },
  ] satisfies Case[],
};

export const contactSection = {
  eyebrow: "Contacto",
  title: "Contanos qué necesitás.",
  intro:
    "Contanos tu proyecto y te respondemos con alguien que pueda resolverlo.",
  form: {
    name: "Nombre",
    company: "Empresa",
    email: "Mail",
    phone: "Teléfono",
    message: "Motivo de la consulta",
    industry: "Industria",
    industryDefault: "Opcional",
    industryOther: "Otra",
    channel: "Canal preferido",
    channelOptions: ["WhatsApp", "Teléfono", "Mail"],
    window: "Ventana horaria para responder",
    windowOptions: ["Mañana", "Tarde", "Indistinto"],
    submit: "Enviar consulta",
    errorContact: "Indicá un mail o un teléfono para responderte.",
    sending: "Enviando…",
    errorSend:
      "No pudimos enviar tu consulta. Probá de nuevo en unos minutos.",
    successTitle: "Recibimos tu consulta.",
    successBefore: "Te respondemos dentro de ",
    successToken: "[X]",
    successAfter: " horas hábiles.",
  },
} as const;

export const footer = {
  tagline: "Ingeniería, inspección y obras industriales desde 2012.",
  navLabel: "Navegación",
  contactLabel: "Contacto",
  copyright:
    "© 2026 SURIEL Ingeniería y Servicios. Todos los derechos reservados.",
} as const;
