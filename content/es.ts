// Contenido de la landing en español: menú, hero, nosotros, servicios, industrias, proyectos y contacto.
// Los textos de servicios, industrias y proyectos son borradores condensados de los documentos del
// cliente (Docs cliente) y se aprueban con él antes de publicar. Los recursos provisorios llevan
// `provisional: true`.

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
  eyebrow: "Ingeniería aplicada a proyectos industriales",
  titleLine1: "Ingeniería, calidad y gestión.",
  titleLine2: "Un solo equipo.",
  lead: "Soluciones de ingeniería, inspección y asistencia técnica para proyectos industriales, del cálculo a la puesta en servicio.",
  image: { src: "/images/hero-image.webp", alt: "Planta industrial" },
  primaryCta: { label: "Contactar", href: "#contacto" },
  secondaryCta: { label: "Ver proyectos", href: "#proyectos" },
  sectors: ["Oil & Gas", "Energía", "Siderurgia", "Otros sectores"],
} as const;

export const clients = {
  label: "Empresas que confían en SURIEL",
  // Orden de aparición en la franja. width/height son las proporciones reales de cada archivo.
  logos: [
    { name: "Shell", src: "/logos/clientes/shell.webp", width: 548, height: 508 },
    { name: "Chevron", src: "/logos/clientes/chevron.webp", width: 483, height: 540 },
    { name: "Pan American Energy", src: "/logos/clientes/pan-american-energy.webp", width: 800, height: 320 },
    { name: "TGN", src: "/logos/clientes/tgn.webp", width: 757, height: 406 },
    { name: "ENAP Sipetrol", src: "/logos/clientes/enap-sipetrol.webp", width: 411, height: 112 },
    { name: "Futura", src: "/logos/clientes/futura.webp", width: 220, height: 315 },
  ],
} as const;

export const about = {
  eyebrow: "Nosotros",
  statement: { before: "Ingeniería que continúa ", highlight: "más allá del plano", after: "." },
  columns: [
    [
      "Desarrollamos soluciones de ingeniería, inspección y asistencia técnica para proyectos industriales, acompañando a nuestros clientes desde la conceptualización y el cálculo hasta la fabricación, montaje y puesta en servicio.",
      "Trabajamos para las industrias Oil & Gas, energía, petroquímica, siderúrgica, alimenticia y de procesos, combinando ingeniería, experiencia de campo y conocimiento normativo para desarrollar soluciones técnicamente confiables y ejecutables.",
    ],
    [
      "En SURIEL entendemos que un proyecto no termina con la emisión de documentación.",
      "Por eso acompañamos a nuestros clientes durante las etapas de fabricación, montaje y construcción, brindando soporte técnico, resolución de interferencias, seguimiento de fabricación y asistencia en campo, manteniendo una comunicación directa durante todo el desarrollo del proyecto.",
    ],
  ],
  stats: [
    { value: "15", label: "Años de experiencia" },
    { value: "+50", label: "Clientes" },
    { value: "+150", label: "Proyectos realizados" },
  ],
  image: { src: "/images/nosotros.webp", alt: "Personal de SURIEL en una planta industrial" },
} as const;

export const contactSection = {
  eyebrow: "Contacto",
  title: "Contanos qué necesitás.",
  intro:
    "Contanos tu proyecto y lo analizamos con nuestro equipo de ingeniería.",
  form: {
    name: "Nombre",
    company: "Empresa",
    email: "Mail",
    phone: "Teléfono",
    message: "Motivo de la consulta",
    industry: "Industria",
    industryDefault: "Opcional",
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
  tagline: "Ingeniería aplicada a proyectos industriales.",
  navLabel: "Navegación",
  contactLabel: "Contacto",
  copyright:
    "© 2026 SURIEL Ingeniería y Servicios. Todos los derechos reservados.",
} as const;

// ---------------------------------------------------------------- Servicios, industrias y proyectos

export type Provisional = {
  /** true = imagen o dato a reemplazar antes de publicar (se lista en R10). */
  provisional?: boolean;
};

export type Img = { src: string; alt: string } & Provisional;

// ---------------------------------------------------------------- Menú

export type NavItem = { label: string; href: string };

/** Barra de escritorio: el logo hace de "Inicio" (decisión D3). */
export const navDesktop: readonly NavItem[] = [
  { label: "Ingeniería", href: "#ingenieria" },
  { label: "Inspección de obra", href: "#inspeccion-de-obra" },
  { label: "Obras", href: "#obras" },
  { label: "Outsourcing Profesional", href: "#outsourcing" },
  { label: "Proyectos", href: "#proyectos" },
];

/**
 * Menú móvil y footer: las 8 entradas de la arquitectura del cliente, con "Inicio".
 * Industrias no está en el menú (decisión D2). La barra de escritorio puede mostrar menos.
 */
export const navFull: readonly NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Ingeniería", href: "#ingenieria" },
  { label: "Inspección de obra", href: "#inspeccion-de-obra" },
  { label: "Obras", href: "#obras" },
  { label: "Outsourcing Profesional", href: "#outsourcing" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

/**
 * Menú móvil: las mismas opciones que la barra de escritorio, más "Inicio" (en escritorio lo hace el logo).
 * Nosotros y Contacto quedan fuera; "Contactar" es el botón al pie del panel.
 */
export const navMobile: readonly NavItem[] = [{ label: "Inicio", href: "#inicio" }, ...navDesktop];

// ---------------------------------------------------------------- Servicios

export type ServiceGroup = { title: string; items: readonly string[] };
export type ServiceArea = { title: string; text: string };
/** Bloque destacado de cada servicio: título corto y lista que se lee de corrido. */
export type ServiceCallout = { title: string; items: readonly string[] };

export type ServiceV2 = {
  slug: "ingenieria" | "inspeccion-de-obra" | "obras" | "outsourcing";
  /** Ancla de la sección: coincide con el menú. */
  anchor: string;
  n: string;
  title: string;
  /** Frase grande de apertura. */
  lead: string;
  /** Texto de apoyo, debajo de la frase. */
  body: string;
  image: Img;
  /** Único botón de cada bloque. */
  cta: { label: string; href: string };
  callout: ServiceCallout;
};

const consultar = { label: "Consultar", href: "#contacto" } as const;

export const ingenieria: ServiceV2 & {
  items: readonly string[];
  /** Equipos, paquetizados, estructuras y tanques que se diseñan (presentación institucional). */
  equipmentLabel: string;
  equipment: readonly ServiceGroup[];
} = {
  slug: "ingenieria",
  anchor: "ingenieria",
  n: "01",
  title: "Ingeniería",
  lead: "Soluciones de ingeniería para proyectos industriales, desde la etapa conceptual hasta el detalle y la documentación para fabricación y montaje.",
  body: "Combinamos cálculo, diseño, modelado y experiencia de campo, alineados con las normas y especificaciones de cada cliente.",
  image: { src: "/images/ingenieria.webp", alt: "Vista aérea de una planta industrial" },
  cta: consultar,
  items: [
    "Ingeniería conceptual, básica y de detalle, también para revamping y modificaciones",
    "Estructuras metálicas, equipos de proceso, piping y redes de incendio",
    "Stress analysis de cañerías",
    "Recipientes a presión según ASME y tanques según API",
    "Skids y paquetes de proceso: separación, medición, inyección química, bombeo y compresión",
    "Trampas de scraper, cuadros de regulación, intercambiadores y aeroenfriadores",
  ],
  equipmentLabel: "Qué diseñamos",
  equipment: [
    {
      title: "Equipos",
      items: [
        "Trampas de scraper",
        "slug catchers",
        "calentadores indirectos",
        "freewaters (FWKO)",
        "aeroenfriadores",
        "hornos de hot-oil",
        "knock out drum (KOD)",
        "recipientes a presión (ASME)",
        "intercambiadores de calor",
        "separadores de polvo y líquido",
        "torres de proceso",
      ],
    },
    {
      title: "Paquetizados",
      items: [
        "Cuadros de regulación",
        "skids de separación y medición",
        "skids de inyección química",
        "skids de bombeo",
        "skids de compresión",
        "skid de filtrado",
        "plantas de tratamiento de efluentes",
        "cuadros de distribución de vapor",
        "planta de tratamiento de combustibles",
      ],
    },
    {
      title: "Estructuras metálicas",
      items: ["Parrales", "sendas", "bastidores", "soportes"],
    },
    {
      title: "Tanques",
      items: ["Tanques de almacenamiento (API 650)", "tanques acumuladores RCI", "cisternas y cámaras"],
    },
  ],
  callout: {
    title: "Entregables",
    items: [
      "Memorias de cálculo",
      "Planos de conjunto y detalle",
      "Modelos 3D",
      "Análisis estructurales",
      "Documentación técnica",
    ],
  },
};

export const inspeccion: ServiceV2 & {
  groups: readonly ServiceGroup[];
} = {
  slug: "inspeccion-de-obra",
  anchor: "inspeccion-de-obra",
  n: "02",
  title: "Inspección de obra",
  lead: "Inspección, control y aseguramiento de calidad (QA/QC) para verificar que materiales, equipos, estructuras y soldaduras cumplan los requisitos técnicos y normativos.",
  body: "Desde el control durante la fabricación hasta las inspecciones en campo, la recepción de materiales, las pruebas y las liberaciones.",
  // Provisoria: foto de soldadura existente, a reemplazar por fotos reales de QA/QC.
  image: { src: "/images/soldarura.webp", alt: "Soldador trabajando con máscara de protección", provisional: true },
  cta: consultar,
  groups: [
    {
      title: "Soldadura y ensayos",
      items: [
        "Inspección visual",
        "ultrasonido",
        "líquidos penetrantes",
        "partículas magnetizables",
        "medición de espesores",
      ],
    },
    {
      title: "Equipos y estructuras",
      items: ["Control dimensional", "tanques y equipos a presión", "seguimiento de fabricación"],
    },
    {
      title: "Pruebas y documentación",
      items: [
        "Hermeticidad",
        "pruebas hidráulicas y neumáticas",
        "FAT / SAT",
        "reportes de inspección",
        "trazabilidad documental",
      ],
    },
  ],
  callout: {
    title: "WPS, PQR y WPQ",
    items: ["Procedimientos y calificaciones de soldadura", "Evaluación de soldadores", "Personal calificado"],
  },
};

export const gestion: ServiceV2 & { areas: readonly ServiceArea[] } = {
  slug: "obras",
  anchor: "obras",
  n: "03",
  title: "Obras",
  lead: "Gestión integral de proyectos industriales, desde la planificación inicial hasta la ejecución, el montaje y la puesta en marcha.",
  body: "Adaptamos nuestra participación al alcance de cada proyecto.",
  image: { src: "/images/obras.webp", alt: "Estructuras metálicas y cañerías aisladas en una planta industrial" },
  cta: consultar,
  areas: [
    {
      title: "Planificación y seguimiento",
      text: "Etapas, recursos y cronogramas, con control de avances, hitos y desvíos para decidir con información actualizada.",
    },
    {
      title: "Coordinación interdisciplinaria",
      text: "Nexo entre ingeniería, construcción, inspección, contratistas y cliente en lo técnico, contractual y operativo.",
    },
    {
      title: "Dirección y supervisión de obra",
      text: "Obras mecánicas y electromecánicas, desde el inicio hasta la puesta en servicio, con asistencia técnica en campo.",
    },
    {
      title: "Gestión documental",
      text: "Planos y revisiones, consultas, informes, actas y documentación final de obra, con trazabilidad.",
    },
    {
      title: "Calidad y desvíos",
      text: "No conformidades y acciones correctivas, y relevamientos para ajustar la ingeniería a la obra real.",
    },
    {
      title: "Control de gestión",
      text: "Seguimiento y control de costos, plazos, recursos, productividad y avances físicos de proyectos industriales, mediante indicadores de desempeño, análisis de desvíos y reportes de gestión, facilitando la toma de decisiones y el cumplimiento de los objetivos del proyecto.",
    },
  ],
  callout: {
    title: "Foco",
    items: ["Plazos", "Calidad", "Seguridad", "Objetivos contractuales"],
  },
};

export const outsourcing: ServiceV2 & {
  steps: readonly ServiceArea[];
} = {
  slug: "outsourcing",
  anchor: "outsourcing",
  n: "04",
  title: "Outsourcing Profesional",
  lead: "Incorporamos profesionales técnicos a tu equipo de trabajo.",
  body: "Ingenieros, analistas, planificadores, programadores, proyectistas y project managers para tus proyectos y operaciones, sin ampliar tu estructura permanente.",
  // Provisoria: no refleja el perfil profesional (ingenieros, analistas, planificadores). A reemplazar por una foto
  // de profesionales en oficina o planta, sin texto ni logo superpuesto.
  image: {
    src: "/images/outsourcing-equipo.webp",
    alt: "Equipo de trabajadores con casco y chaleco sobre el armado de acero de una obra",
    provisional: true,
  },
  cta: consultar,
  steps: [
    {
      title: "Conocemos la necesidad",
      text: "Partimos de lo que necesita el cliente y del perfil profesional a cubrir.",
    },
    {
      title: "Buscamos y evaluamos",
      text: "Búsqueda, entrevistas y evaluación de antecedentes, formación técnica y experiencia en proyectos.",
    },
    {
      title: "Incorporamos y acompañamos",
      text: "Coordinamos la incorporación y mantenemos el seguimiento durante todo el servicio.",
    },
  ],
  callout: {
    title: "Ventajas",
    items: [
      "Selección según cada posición",
      "Contratación flexible según la duración del proyecto",
      "SURIEL se ocupa de la administración del personal",
    ],
  },
};

export const servicesV2 = [ingenieria, inspeccion, gestion, outsourcing] as const;

// ---------------------------------------------------------------- Industrias

export type IndustryV2 = {
  slug: string;
  n: string;
  name: string;
  /** Etiquetas de lo que se trabaja en el sector. */
  tags: readonly string[];
  image: Img;
};

export const industriesV2 = {
  eyebrow: "Industrias",
  title: "Soluciones para distintos sectores industriales.",
  items: [
    {
      slug: "oil-and-gas",
      n: "01",
      name: "Oil & Gas",
      tags: ["Piping", "Equipos de proceso", "Skids", "Recipientes a presión"],
      image: { src: "/images/industrias/oil-and-gas.webp", alt: "Plataforma petrolera en el mar" },
    },
    {
      slug: "energia",
      n: "02",
      name: "Energía",
      tags: ["Centrales eléctricas", "Calderas", "Piping", "Estructuras"],
      image: { src: "/images/industrias/energia.webp", alt: "Torre y equipos de una planta de generación" },
    },
    {
      slug: "siderurgia",
      n: "03",
      name: "Siderurgia",
      tags: ["Estructuras metálicas", "Piping", "Soportación", "Equipos"],
      image: { src: "/images/siderurgia.webp", alt: "Colada de acero en una planta siderúrgica" },
    },
    {
      slug: "otros-sectores",
      n: "04",
      name: "Otros sectores",
      tags: ["Minería", "Alimentos", "Papelera", "Energía nuclear", "Automotriz", "Consumo masivo"],
      image: { src: "/images/alimenticia.webp", alt: "Línea de producción de una planta de alimentos", provisional: true },
    },
  ] satisfies readonly IndustryV2[],
} as const;

// ---------------------------------------------------------------- Proyectos

export type ProjectService = "ingenieria" | "obras" | "inspeccion";

export type ProjectV2 = {
  slug: string;
  service: ProjectService;
  serviceLabel: string;
  title: string;
  client: string;
  /** Alcance en etiquetas. */
  scope: readonly string[];
  duration?: string;
  /** Dato destacado de la tarjeta, si el documento lo trae. */
  highlight?: string;
  /** La primera es la portada. */
  images: readonly Img[];
  /** false = cargado pero sin mostrar (sin fotos todavía). */
  visible: boolean;
};

// No hay Ubicación ni Sector: ningún documento del cliente los trae (decisión D9).
const SERVICE_LABEL: Record<ProjectService, string> = {
  ingenieria: "Ingeniería",
  obras: "Obras",
  inspeccion: "Inspección de obra",
};

const imgs = (slug: string, alts: readonly string[]): Img[] =>
  alts.map((alt, i) => ({ src: `/images/proyectos/${slug}/${String(i + 1).padStart(2, "0")}.webp`, alt }));

const FULL_ENGINEERING = [
  "Ingeniería completa",
  "Memorias de cálculo mecánicas y estructurales",
  "Modelado 3D",
  "Planos de conjunto y detalle",
] as const;

export const projectsV2 = {
  eyebrow: "Proyectos",
  title: "Trabajos realizados.",
  intro: "Proyectos de ingeniería, obras e inspección en plantas industriales.",
  labels: { client: "Cliente", scope: "Alcance", duration: "Duración" },
  items: [
    {
      slug: "percha-izaje",
      service: "ingenieria",
      serviceLabel: SERVICE_LABEL.ingenieria,
      title: "Percha de izaje adaptativa, 15 t (verificada para 60 t)",
      client: "Futura",
      scope: ["Ingeniería completa", "Memoria de cálculo", "Modelado 3D", "Planos de conjunto y detalle"],
      highlight: "Verificada para 60 t",
      images: imgs("percha-izaje", [
        "Render 3D de la percha de izaje adaptativa, vista isométrica",
        "Render 3D de la percha de izaje adaptativa, segunda vista isométrica",
        "Análisis por elementos finitos de la percha: tensiones de von Mises",
        "Malla de elementos finitos de la percha",
        "Desplazamientos resultantes del análisis de la percha",
      ]),
      visible: true,
    },
    {
      slug: "skid-separador-sk307",
      service: "ingenieria",
      serviceLabel: SERVICE_LABEL.ingenieria,
      title: "Separador de control mínimo, skid SK307",
      client: "Tycsa, Tecpetrol",
      scope: ["Ingeniería de detalle", "Modelado 3D del conjunto"],
      images: imgs("skid-separador-sk307", [
        "Render 3D del skid separador SK307, vista isométrica",
        "Render 3D del skid separador SK307, segunda vista isométrica",
        "Render 3D del skid separador SK307, vista frontal",
        "Render 3D del skid separador SK307, vista lateral",
      ]),
      visible: true,
    },
    {
      slug: "trampas-scraper-30400",
      service: "ingenieria",
      serviceLabel: SERVICE_LABEL.ingenieria,
      title: "Trampas lanzadoras y receptoras de scraper (20x24, 24x26, 30x32)",
      client: "Futura, Contreras, SESA",
      scope: FULL_ENGINEERING,
      images: imgs("trampas-scraper-30400", [
        "Render 3D de la trampa de scraper, vista isométrica",
        "Render 3D de la trampa de scraper, segunda vista isométrica",
        "Render 3D de la trampa de scraper, vista frontal",
        "Render 3D de la trampa de scraper, vista lateral",
      ]),
      visible: true,
    },
    {
      slug: "trampas-scraper-pecom",
      service: "ingenieria",
      serviceLabel: SERVICE_LABEL.ingenieria,
      title: "Trampas lanzadoras y receptoras de scraper 16x12",
      client: "Futura, Pecom, Pluspetrol",
      scope: FULL_ENGINEERING,
      images: imgs("trampas-scraper-pecom", [
        "Render 3D del conjunto de trampas de scraper 16x12, vista isométrica",
        "Render 3D del conjunto de trampas de scraper 16x12, segunda vista isométrica",
        "Render 3D del conjunto de trampas de scraper 16x12, vista frontal",
        "Render 3D del conjunto de trampas de scraper 16x12, vista lateral",
      ]),
      visible: true,
    },
    {
      slug: "ventilacion-plataforma-am6",
      service: "obras",
      serviceLabel: SERVICE_LABEL.obras,
      title: "Adecuación del sistema de ventilación de la sala de generación, plataforma offshore AM-6 (Área Magallanes)",
      client: "IMC, ENAP Sipetrol",
      scope: [
        "Relevamiento",
        "Ingeniería",
        "Planificación",
        "Gestión del proyecto",
        "Control de calidad",
        "Dirección y supervisión de montaje",
      ],
      duration: "Proyecto ejecutivo de 8 meses, montaje de 22 días",
      highlight: "Montaje en 22 días",
      images: imgs("ventilacion-plataforma-am6", [
        "Ducto de ventilación instalado en la plataforma offshore AM-6",
        "Codo de ducto de ventilación metálico montado en el borde de la plataforma offshore AM-6, con el mar de fondo",
      ]),
      visible: true,
    },
    {
      slug: "reacondicionamiento-hrsg8",
      service: "obras",
      serviceLabel: SERVICE_LABEL.obras,
      title: "Reacondicionamiento de HRSG 8 MHI, Central Costanera (MAPRO 2025)",
      client: "Grupo MTR, Central Costanera, Central Puerto",
      scope: [
        "Análisis de costos y oferta técnica",
        "Ingeniería de detalle",
        "Planificación y programación",
        "Gestión de recursos",
        "Gestión de proveedores",
        "Supervisión y dirección de obra",
      ],
      duration: "Proyecto ejecutivo de 4 meses, obra de 75 días en doble turno",
      highlight: "70 personas en obra",
      images: imgs("reacondicionamiento-hrsg8", [
        "Interior de la caldera HRSG 8 durante el reacondicionamiento, con andamios y piping",
        "Operario trabajando sobre una chapa en el interior del HRSG 8",
        "Personal en el interior del HRSG 8 sobre una superficie con pernos soldados",
        "Personal y autoelevador en el interior de la caldera HRSG 8, con andamios y una estructura metálica en montaje",
      ]),
      visible: true,
    },
    // Cargados sin mostrar: faltan fotos. Se activan con visible: true cuando lleguen.
    {
      slug: "valvulas-central-costanera",
      service: "inspeccion",
      serviceLabel: SERVICE_LABEL.inspeccion,
      title: "Reemplazo de válvulas de alta, media y baja presión",
      client: "Combumont, Central Costanera, Central Puerto",
      scope: ["Control de calidad (QA/QC)"],
      duration: "30 días",
      images: [],
      visible: false,
    },
    {
      slug: "pote-prefusion-canning",
      service: "inspeccion",
      serviceLabel: SERVICE_LABEL.inspeccion,
      title: "Montaje de pote de prefusión y sistema de carga, Planta Canning",
      client: "Semeniuk, Ternium (Siderar)",
      scope: ["Control de calidad (QA/QC)", "Ensayos no destructivos"],
      duration: "12 meses",
      images: [],
      visible: false,
    },
  ] satisfies readonly ProjectV2[],
} as const;

export const visibleProjects = projectsV2.items.filter((p) => p.visible);
