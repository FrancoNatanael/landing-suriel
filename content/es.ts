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
