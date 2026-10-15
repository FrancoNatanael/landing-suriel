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
} as const;

export const whatsapp = {
  label: "Escribir por WhatsApp",
  message: "Hola SURIEL, quiero solicitar un presupuesto.",
} as const;

export const hero = {
  eyebrow: "Expertos en ingeniería",
  titleLine1: "Ingeniería, calidad y gestión.",
  titleLine2: "Un solo equipo.",
  lead: "Más de 15 años acompañando proyectos industriales, con respuesta directa a quienes toman las decisiones.",
  image: { src: "/images/hero-image.jpg", alt: "Planta industrial" },
  primaryCta: { label: "Contactar", href: "#contacto" },
  secondaryCta: { label: "Ver proyectos →", href: "#proyectos" },
  sectors: ["Oil & Gas", "Energía", "Química", "Siderurgia", "Alimenticia"],
} as const;

export const clients = {
  label: "Empresas que confían en SURIEL",
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
    "SURIEL nació en 2012 y hoy acompaña a plantas de petróleo y gas, energía, química, siderurgia y alimenticia. Diseñamos, fabricamos, montamos e inspeccionamos, siempre con un solo equipo.",
    "Esa integración de Ingeniería, Calidad y Gestión es lo que nos distingue: no nos quedamos en detectar el problema, también lo resolvemos. Cada soldadura, ensayo e inspección queda registrado para que quien conduce el proyecto decida con información clara.",
    "Trabajamos en las interfaces entre disciplinas, proyecto y obra, que es donde suele perderse el tiempo. Y lo hacemos con una estructura flexible: quien decide habla directo con quien resuelve.",
  ],
  stats: [
    { value: "15", label: "Años de experiencia", placeholder: false },
    { value: "XX", label: "Clientes", placeholder: true },
    { value: "XX", label: "Países alcanzados", placeholder: true },
  ],
  imageLabel: "foto: obra o planta",
} as const;

export const services = {
  eyebrow: "Servicios",
  title: "Cuatro líneas de trabajo, un solo responsable.",
  intro:
    "Trabajamos en las interfaces entre disciplinas, proyecto y obra, que es donde suele perderse el tiempo.",
  items: [
    {
      n: "01",
      title: "Ingeniería",
      tone: "white",
      image: "foto: ingeniería, piping y estructuras",
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
      tone: "paper",
      image: "foto: fabricación de equipos y skids",
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
      tone: "paper",
      image: "foto: obra y montaje en planta",
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
      tone: "white",
      image: "foto: inspección de soldadura y END",
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
