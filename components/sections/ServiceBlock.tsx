import { ButtonLink } from "@/components/ui/Button";
import { LabeledGrid } from "@/components/ui/LabeledGrid";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Brand } from "@/components/ui/Brand";
import { Statement } from "@/components/ui/Statement";
import type { ServiceV2 } from "@/content/es";
import { cn } from "@/lib/utils";

type ServiceBlockProps = {
  service: Omit<ServiceV2, "callout">;
  tone?: "light" | "dark";
  /** Foto a la derecha en escritorio (para alternar el ritmo). */
  flip?: boolean;
  /** Tamaño de la frase de apertura (por defecto "md"). */
  leadSize?: "md" | "sm";
  /** Reemplaza la foto fija (por ejemplo, por un slider). */
  media?: React.ReactNode;
  /** Contenido propio del servicio: listas, grupos, bloque destacado. */
  children: React.ReactNode;
};

/**
 * Bloque de servicio: etiqueta con número, frase de apertura, texto de apoyo, foto,
 * contenido propio y CTA. Se alterna claro y oscuro.
 */
export function ServiceBlock({ service, tone = "light", flip = false, leadSize = "md", media, children }: ServiceBlockProps) {
  const dark = tone === "dark";
  return (
    <section
      id={service.anchor}
      className={cn(
        "px-6 py-20 md:px-8 md:py-24 lg:px-10 lg:py-32",
        dark ? "bg-navy-night text-white" : "bg-surface",
      )}
    >
      <div className="mx-auto max-w-360">
        <LabeledGrid label={`${service.n} · ${service.title}`} tone={tone} className="reveal">
          <Statement as="h2" size={leadSize} tone={tone}>
            <Brand text={service.lead} />
          </Statement>
          <div className={cn("mt-6 flex max-w-3xl flex-col gap-4 text-base leading-body", dark ? "text-navy-soft" : "text-body")}>
            {service.body.split("\n\n").map((paragraph) => (
              <p key={paragraph}>
                <Brand text={paragraph} />
              </p>
            ))}
          </div>
        </LabeledGrid>

        <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-12 lg:gap-x-8">
          <div className={cn("reveal lg:col-span-5", flip && "lg:order-2 lg:col-start-8")}>
            {media ?? (
              <PhotoFrame
                src={service.image.src}
                alt={service.image.alt}
                sizes="(min-width: 64rem) 40vw, 100vw"
                className="aspect-4/3 lg:sticky lg:top-28 lg:aspect-4/5"
              />
            )}
          </div>

          <div className={cn("reveal flex flex-col gap-10 lg:col-span-7", flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-6")}>
            {children}
            <div>
              <ButtonLink href={service.cta.href} variant={dark ? "light" : "primary"} className="w-full sm:w-auto">
                {service.cta.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
