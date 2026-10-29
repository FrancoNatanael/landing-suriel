import type { ChannelIconName } from "@/components/ui/ChannelIcon";

// Datos de contacto confirmados por el cliente (16/10/2026).
// Instagram queda fuera de esta versión: se suma acá cuando el cliente lo confirme.
export const contact = {
  phone: "+54 9 11 6367-2440",
  phoneHref: "tel:+5491163672440",
  email: "ventas@surielingenieria.com",
  linkedin: "https://www.linkedin.com/company/suriel-ingenier%C3%ADa-y-servicios/",
  linkedinLabel: "SURIEL Ingeniería y Servicios",
  whatsapp: "5491163672440",
  address: "Canning, Ezeiza, Buenos Aires, Argentina",
} as const;

export function whatsappHref(message: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type Channel = {
  label: string;
  icon: ChannelIconName;
  value: string;
  /** Sin href, el canal se muestra como texto (la ubicación). */
  href?: string;
  external?: boolean;
};

export const channels: readonly Channel[] = [
  { label: "Teléfono", icon: "phone", value: contact.phone, href: contact.phoneHref },
  { label: "Mail", icon: "mail", value: contact.email, href: `mailto:${contact.email}` },
  { label: "LinkedIn", icon: "linkedin", value: contact.linkedinLabel, href: contact.linkedin, external: true },
  { label: "Ubicación", icon: "pin", value: contact.address },
];

// Destino de las consultas del formulario (FormSubmit). Se define en .env.local (o en las
// variables del hosting) con NEXT_PUBLIC_FORM_RECIPIENT; no se guarda en el repo.
// La primera consulta envía un mail de activación a esa casilla.
export const formRecipient = process.env.NEXT_PUBLIC_FORM_RECIPIENT ?? "";
// Copia de cada consulta (FormSubmit, campo _cc). Se define con NEXT_PUBLIC_FORM_CC.
// Valores de producción: destino ventas@surielingenieria.com y copia christian.rodriguez@surielingenieria.com.
export const formCc = process.env.NEXT_PUBLIC_FORM_CC ?? "";
export const formEndpoint = `https://formsubmit.co/ajax/${formRecipient}`;
export const formSubject = "Nueva consulta desde la web de SURIEL";
