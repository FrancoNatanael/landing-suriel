// Contenido del rediseño v2 (plan R1 a R10). Todavía NO lo usa ninguna sección:
// cada fase lo va conectando (R2 menú, R3 Nosotros, R4 y R5 servicios, R6 industrias, R7 proyectos)
// y al cerrar R10 se integra en content/es.ts. Los textos son borradores condensados de los
// documentos del cliente (Docs cliente) y se aprueban en cada fase.

export type Provisional = {
  /** true = imagen o dato a reemplazar antes de publicar (se lista en R10). */
  provisional?: boolean;
};

export type Img = { src: string; alt: string } & Provisional;

// ---------------------------------------------------------------- Menú

export type NavItem = { label: string; href: string };

/** Barra de escritorio: el logo hace de "Inicio" (decisión D3). */
export const navDesktop: readonly NavItem[] = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Ingeniería", href: "#ingenieria" },
  { label: "Inspección & QA/QC", href: "#inspeccion-qaqc" },
  { label: "Gestión de proyectos", href: "#gestion-de-proyectos" },
  { label: "Outsourcing", href: "#outsourcing" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

/** Menú móvil y footer: suman "Inicio". Industrias no está en el menú (decisión D2). */
export const navFull: readonly NavItem[] = [{ label: "Inicio", href: "#inicio" }, ...navDesktop];

// ---------------------------------------------------------------- Hero

/** Línea de sectores del hero (reemplaza la actual cuando se conecte en R3). */
export const heroSectors = ["Oil & Gas", "Energía", "Siderurgia", "Minería", "Otros sectores"] as const;

// ---------------------------------------------------------------- Servicios

export type ServiceGroup = { title: string; items: readonly string[] };
export type ServiceArea = { title: string; text: string };

export type ServiceV2 = {
  slug: "ingenieria" | "inspeccion-qaqc" | "gestion-de-proyectos" | "outsourcing";
  /** Ancla de la sección: coincide con el menú. */
  anchor: string;
  n: string;
  title: string;
  /** Frase grande de apertura. */
  lead: string;
  /** Texto de apoyo, debajo de la frase. */
  body: string;
  image: Img;
  cta: { label: string; href: string };
  /** Enlace a Proyectos (solo los servicios que tienen proyectos visibles). */
  projectsLink?: { label: string; href: string };
};

export const ingenieria: ServiceV2 & {
  works: readonly string[];
  deliverables: string;
  items: readonly string[];
  developments: { title: string; items: readonly string[] };
} = {
  slug: "ingenieria",
  anchor: "ingenieria",
  n: "01",
  title: "Ingeniería",
  lead: "Soluciones de ingeniería para proyectos industriales, desde las etapas conceptuales hasta la ingeniería de detalle y la documentación para fabricación y montaje.",
  body: "Combinamos cálculo, diseño, modelado y experiencia de campo para generar soluciones técnicamente confiables, ejecutables y alineadas con las normas y especificaciones de cada cliente.",
  image: { src: "/images/ingenieria.webp", alt: "Vista aérea de una planta industrial" },
  cta: { label: "Consultar por ingeniería", href: "#contacto" },
  projectsLink: { label: "Ver proyectos de ingeniería →", href: "#proyectos" },
  works: [
    "Estructuras metálicas",
    "Equipos de proceso",
    "Piping",
    "Recipientes a presión",
    "Tanques",
    "Skids",
    "Redes de incendio",
    "Sistemas industriales",
  ],
  deliverables:
    "Memorias de cálculo, planos de conjunto y detalle, modelos 3D, análisis estructurales y documentación técnica asociada.",
  items: [
    "Ingeniería conceptual, básica y de detalle",
    "Diseño y cálculo de estructuras metálicas",
    "Diseño de equipos de proceso y piping",
    "Stress analysis de cañerías",
    "Diseño de recipientes a presión según ASME",
    "Diseño de tanques según API",
    "Desarrollo de skids y paquetes de proceso",
    "Ingeniería para revamping y modificaciones",
    "Planos para fabricación y montaje",
    "Relevamientos e ingeniería de adecuación",
  ],
  developments: {
    title: "Desarrollos",
    items: [
      "Trampas de scraper",
      "Cuadros de regulación",
      "Skids de separación, medición, inyección química, bombeo y compresión",
      "Recipientes",
      "Intercambiadores",
      "Aeroenfriadores",
      "Tanques",
    ],
  },
};

export const inspeccion: ServiceV2 & {
  groups: readonly ServiceGroup[];
  highlight: { title: string; text: string };
} = {
  slug: "inspeccion-qaqc",
  anchor: "inspeccion-qaqc",
  n: "02",
  title: "Inspección & QA/QC",
  lead: "Inspección, control y aseguramiento de calidad para verificar que materiales, equipos, estructuras, soldaduras y procesos cumplan con los requisitos técnicos y normativos aplicables.",
  body: "Participamos desde el control durante la fabricación hasta las inspecciones en campo, la recepción de materiales, las pruebas, las liberaciones y el seguimiento documental.",
  // Provisoria: foto de soldadura existente, a reemplazar por fotos reales de QA/QC.
  image: { src: "/images/soldarura.webp", alt: "Soldador trabajando con máscara de protección", provisional: true },
  cta: { label: "Consultar por inspección", href: "#contacto" },
  groups: [
    {
      title: "Soldadura y ensayos",
      items: [
        "Inspección de soldaduras",
        "Inspección visual",
        "Ultrasonido",
        "Líquidos penetrantes",
        "Partículas magnetizables",
        "Medición de espesores",
      ],
    },
    {
      title: "Equipos y estructuras",
      items: [
        "Control dimensional",
        "Inspección de tanques",
        "Inspección de equipos a presión",
        "Seguimiento de fabricación",
      ],
    },
    {
      title: "Pruebas y documentación",
      items: [
        "Pruebas de hermeticidad",
        "Inspección de pruebas hidráulicas y neumáticas",
        "FAT / SAT",
        "Control de documentación y trazabilidad",
        "Elaboración y seguimiento de reportes de inspección",
      ],
    },
  ],
  highlight: {
    title: "WPS, PQR y WPQ",
    text: "En soldadura ofrecemos servicios vinculados con WPS, PQR y WPQ, evaluación de soldadores y revisión de procedimientos, con personal calificado para tareas de inspección.",
  },
};

export const gestion: ServiceV2 & { areas: readonly ServiceArea[] } = {
  slug: "gestion-de-proyectos",
  anchor: "gestion-de-proyectos",
  n: "03",
  title: "Gestión de proyectos",
  lead: "Gestión integral de proyectos industriales, desde la planificación inicial hasta la ejecución, el montaje y la puesta en marcha.",
  body: "Adaptamos nuestra participación al alcance de cada proyecto, con foco en el cumplimiento de plazos, calidad, seguridad y objetivos contractuales.",
  image: {
    src: "/images/proyectos/reacondicionamiento-hrsg8/01.webp",
    alt: "Obra de reacondicionamiento del HRSG 8 en Central Costanera",
  },
  cta: { label: "Consultar por gestión de proyectos", href: "#contacto" },
  projectsLink: { label: "Ver proyectos de gestión →", href: "#proyectos" },
  areas: [
    {
      title: "Planificación y programación",
      text: "Definimos etapas, secuencias, recursos y cronogramas, y hacemos seguimiento periódico de avances para anticipar interferencias y decidir con información actualizada.",
    },
    {
      title: "Project management y coordinación interdisciplinaria",
      text: "Coordinamos aspectos técnicos, contractuales y operativos, y actuamos como nexo entre ingeniería, construcción, inspección, contratistas y cliente.",
    },
    {
      title: "Dirección y supervisión de obra",
      text: "Dirección, supervisión y jefatura de obras mecánicas y electromecánicas, desde la etapa inicial hasta la puesta en servicio, con asistencia técnica permanente en campo.",
    },
    {
      title: "Control y seguimiento de avances",
      text: "Control físico y técnico de los trabajos: avance, hitos, desvíos, acciones correctivas e informes periódicos.",
    },
    {
      title: "Gestión documental",
      text: "Control de planos y revisiones, consultas y respuestas, informes y actas, y documentación final de obra, con trazabilidad en cada etapa.",
    },
    {
      title: "Calidad, desvíos y asistencia en campo",
      text: "Seguimiento de no conformidades y acciones correctivas, más visitas técnicas y relevamientos para ajustar la ingeniería a las condiciones reales de obra.",
    },
  ],
};

export const outsourcing: ServiceV2 & {
  steps: readonly ServiceArea[];
  advantages: readonly ServiceArea[];
  closing: string;
} = {
  slug: "outsourcing",
  anchor: "outsourcing",
  n: "04",
  title: "Outsourcing profesional administrado",
  lead: "Incorporamos profesionales a tu equipo de trabajo.",
  body: "Brindamos servicios de outsourcing profesional para empresas que necesitan incorporar personal calificado a sus proyectos y operaciones, sin ampliar su estructura permanente.",
  // Provisoria: el flyer del cliente no se usa. Se reemplaza por una foto limpia cuando llegue.
  image: { src: "/images/construcciones.webp", alt: "Estructura industrial en construcción", provisional: true },
  cta: { label: "Consultar por outsourcing", href: "#contacto" },
  steps: [
    {
      title: "Conocemos la necesidad",
      text: "Partimos de las necesidades del cliente y de las características del puesto a cubrir.",
    },
    {
      title: "Buscamos y evaluamos",
      text: "Búsqueda de candidatos, entrevistas y evaluación de antecedentes, conocimientos técnicos, experiencia y habilidades profesionales.",
    },
    {
      title: "Incorporamos y acompañamos",
      text: "Coordinamos la incorporación, asumimos la gestión administrativa y contractual, y mantenemos el seguimiento durante el servicio.",
    },
  ],
  advantages: [
    { title: "Personal calificado", text: "Selección de profesionales según los requisitos de cada posición." },
    { title: "Flexibilidad", text: "Contratación según las necesidades y la duración de cada proyecto." },
    {
      title: "Menor carga administrativa",
      text: "SURIEL se ocupa de la contratación y la administración del personal asignado.",
    },
    { title: "Optimización de tiempos", text: "Simplificamos la búsqueda, la evaluación y la incorporación." },
    { title: "Acompañamiento", text: "Mantenemos contacto con el cliente y el profesional durante la prestación." },
  ],
  closing: "Una solución adaptada a cada empresa, para necesidades puntuales o para períodos prolongados.",
};

export const servicesV2 = [ingenieria, inspeccion, gestion, outsourcing] as const;

// ---------------------------------------------------------------- Industrias

export type IndustryV2 = {
  slug: string;
  n: string;
  name: string;
  summary: string;
  /** Etiquetas de lo que se trabaja en el sector. */
  tags: readonly string[];
  /** null = sin foto: se muestra un placeholder marcado. */
  image: Img | null;
};

export const industriesV2 = {
  eyebrow: "Industrias",
  title: "Soluciones para distintos sectores industriales.",
  intro:
    "Adaptamos cada proyecto a los requerimientos técnicos, operativos y normativos de cada sector.",
  items: [
    {
      slug: "oil-and-gas",
      n: "01",
      name: "Oil & Gas",
      summary:
        "Ingeniería y asesoramiento para empresas que fabrican equipos destinados a la producción, tratamiento, transporte y almacenamiento de hidrocarburos.",
      tags: ["Piping", "Equipos de proceso", "Skids", "Recipientes a presión"],
      image: { src: "/images/industrias/oil-and-gas.webp", alt: "Plataforma petrolera en el mar" },
    },
    {
      slug: "energia",
      n: "02",
      name: "Energía",
      summary:
        "Ingeniería, inspección, montaje y asesoramiento en paradas de planta para proyectos de generación y producción de energía.",
      tags: ["Centrales eléctricas", "Calderas", "Piping", "Estructuras"],
      image: { src: "/images/industrias/energia.webp", alt: "Torre y equipos de una planta de generación" },
    },
    {
      slug: "siderurgia",
      n: "03",
      name: "Siderurgia",
      summary:
        "Soluciones de ingeniería y soporte técnico para instalaciones y equipos de la industria siderúrgica y metalúrgica.",
      tags: ["Estructuras metálicas", "Piping", "Soportación", "Equipos"],
      image: { src: "/images/siderurgia.webp", alt: "Colada de acero en una planta siderúrgica" },
    },
    {
      slug: "mineria",
      n: "04",
      name: "Minería",
      summary:
        "Ingeniería y soporte técnico para instalaciones, equipos y sistemas de la industria minera.",
      tags: ["Estructuras metálicas", "Piping", "Equipos de proceso", "Sistemas de transporte"],
      // Sin foto del cliente ni existente: placeholder marcado hasta recibirla.
      image: null,
    },
    {
      slug: "otros-sectores",
      n: "05",
      name: "Otros sectores",
      summary: "También acompañamos proyectos de:",
      tags: ["Alimentos", "Papelera", "Energía nuclear", "Automotriz", "Consumo masivo"],
      image: { src: "/images/alimenticia.webp", alt: "Línea de producción de una planta de alimentos", provisional: true },
    },
  ] satisfies readonly IndustryV2[],
} as const;

// ---------------------------------------------------------------- Proyectos

export type ProjectService = "ingenieria" | "gestion-de-proyectos" | "qaqc";

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
  "gestion-de-proyectos": "Gestión de proyectos",
  qaqc: "Inspección & QA/QC",
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
  intro: "Proyectos de ingeniería y de gestión en plantas industriales.",
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
      service: "gestion-de-proyectos",
      serviceLabel: SERVICE_LABEL["gestion-de-proyectos"],
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
      service: "gestion-de-proyectos",
      serviceLabel: SERVICE_LABEL["gestion-de-proyectos"],
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
      service: "qaqc",
      serviceLabel: SERVICE_LABEL.qaqc,
      title: "Reemplazo de válvulas de alta, media y baja presión",
      client: "Combumont, Central Costanera, Central Puerto",
      scope: ["Control de calidad (QA/QC)"],
      duration: "30 días",
      images: [],
      visible: false,
    },
    {
      slug: "pote-prefusion-canning",
      service: "qaqc",
      serviceLabel: SERVICE_LABEL.qaqc,
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
