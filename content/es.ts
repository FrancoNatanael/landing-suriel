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
  sectors: ["Oil & Gas", "Energía", "Siderurgia", "Minería", "Otros sectores"],
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
      "En Suriel entendemos que un proyecto no termina con la emisión de documentación.",
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
    "Contanos tu proyecto y te respondemos con alguien que pueda resolverlo.",
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
  tagline: "Ingeniería, inspección y obras industriales desde 2012.",
  navLabel: "Navegación",
  contactLabel: "Contacto",
  copyright:
    "© 2026 SURIEL Ingeniería y Servicios. Todos los derechos reservados.",
} as const;
