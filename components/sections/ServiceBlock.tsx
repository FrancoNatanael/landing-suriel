import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { ButtonLink } from "@/components/ui/Button";
import { LabeledGrid } from "@/components/ui/LabeledGrid";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Statement } from "@/components/ui/Statement";
import type { ServiceV2 } from "@/content/es";
import { cn } from "@/lib/utils";

type ServiceBlockProps = {
  service: ServiceV2;
  tone?: "light" | "dark";
  /** Foto a la derecha en escritorio (para alternar el ritmo). */
  flip?: boolean;
  /** Contenido propio del servicio: listas, grupos, bloque destacado. */
  children: React.ReactNode;
};

/**
 * Bloque de servicio: etiqueta con número, frase de apertura, texto de apoyo, foto,
 * contenido propio y CTA. Se alterna claro y oscuro.
 */
export function ServiceBlock({ service, tone = "light", flip = false, children }: ServiceBlockProps) {
  const dark = tone === "dark";
  return (
    <section
      id={service.anchor}
      className={cn(
        "px-6 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40",
        dark ? "bg-navy-night text-white" : "bg-surface",
      )}
    >
      <div className="mx-auto max-w-360">
        <LabeledGrid label={`${service.n} · ${service.title}`} tone={tone} className="reveal">
          <Statement as="h2" size="md" tone={tone}>
            {service.lead}
          </Statement>
          <p className={cn("mt-8 max-w-3xl text-base leading-body", dark ? "text-navy-soft" : "text-body")}>
            {service.body}
          </p>
        </LabeledGrid>

        <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-12 lg:gap-x-8">
          <div className={cn("reveal lg:col-span-5", flip && "lg:order-2 lg:col-start-8")}>
            <PhotoFrame
              src={service.image.src}
              alt={service.image.alt}
              sizes="(min-width: 64rem) 40vw, 100vw"
              className="aspect-4/3 lg:sticky lg:top-28 lg:aspect-4/5"
            />
          </div>

          <div className={cn("reveal flex flex-col gap-12 lg:col-span-7", flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-6")}>
            {children}
            <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
              <ButtonLink href={service.cta.href} variant={dark ? "light" : "primary"} className="w-full sm:w-auto">
                {service.cta.label}
              </ButtonLink>
              {service.projectsLink ? (
                <a
                  href={service.projectsLink.href}
                  className={cn(
                    "group inline-flex items-center text-base font-semibold leading-body underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4",
                    dark ? "text-white focus-visible:outline-white" : "text-navy focus-visible:outline-navy",
                  )}
                >
                  {service.projectsLink.label}
                  <ArrowIcon className="ml-3 transition-transform duration-300 ease-brand group-hover:translate-x-1" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
