// URL pública del sitio. Dominio principal: https://surielingenieria.com (sin www), sin barra final.
// Se puede sobrescribir con NEXT_PUBLIC_SITE_URL (por ejemplo, http://localhost:3000 en desarrollo).
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://surielingenieria.com").replace(/\/+$/, "");

export const site = {
  name: "SURIEL Ingeniería y Servicios",
  title: "SURIEL | Ingeniería y Servicios",
  description:
    "Ingeniería aplicada a proyectos industriales: ingeniería, inspección de obra (QA/QC), obras y outsourcing profesional en un solo equipo.",
  foundingDate: "2012",
} as const;
