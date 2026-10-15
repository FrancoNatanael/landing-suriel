// Tokens pendientes de datos definitivos (P4). Se reemplazan antes de publicar.
export const contact = {
  phone: "{{PHONE}}",
  email: "{{EMAIL}}",
  linkedin: "{{LINKEDIN}}",
  instagram: "{{INSTAGRAM}}",
  whatsapp: "{{WHATSAPP}}",
} as const;

export function whatsappHref(message: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const channels = [
  { label: "Teléfono", value: contact.phone, href: `tel:${contact.phone}` },
  { label: "Mail", value: contact.email, href: `mailto:${contact.email}` },
  { label: "LinkedIn", value: contact.linkedin, href: contact.linkedin },
  { label: "Instagram", value: contact.instagram, href: contact.instagram },
] as const;
