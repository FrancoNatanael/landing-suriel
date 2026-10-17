// URL pública del sitio. Se define con NEXT_PUBLIC_SITE_URL cuando haya dominio (P3, P8).
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const site = {
  name: "SURIEL Ingeniería y Servicios",
  title: "SURIEL | Ingeniería y Servicios",
  description:
    "Ingeniería aplicada a proyectos industriales: ingeniería, inspección y gestión de proyectos en un solo equipo.",
  foundingDate: "2012",
} as const;
