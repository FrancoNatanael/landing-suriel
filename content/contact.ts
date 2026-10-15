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
