import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { ButtonLink } from "@/components/ui/Button";
import { CrossCell } from "@/components/ui/CrossCell";
import { LabeledGrid } from "@/components/ui/LabeledGrid";
import { NumberedList, NumberedRow } from "@/components/ui/NumberedList";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Highlight, Statement } from "@/components/ui/Statement";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { gestion, industriesV2, navDesktop, navFull } from "@/content/v2";

// Página de prueba del sistema visual (R2). Solo existe en desarrollo y se elimina en R10.
export default function DesignSystemPage() {
  if (process.env.NODE_ENV === "production") notFound();

  const photo = "/images/industrias/oil-and-gas.webp";

  return (
    <>
      <Header items={navDesktop} mobileItems={navFull} />
      <main className="flex-1">
        <section id="inicio" className="relative isolate flex h-80 items-end overflow-hidden bg-hero-base px-6 pb-10 md:px-8 lg:px-10">
          <div className="absolute inset-0 -z-10">
            <PhotoFrame src={photo} alt="" sizes="100vw" className="size-full" priority />
          </div>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/45" />
          <p className="mx-auto w-full max-w-360 text-xs font-semibold uppercase text-white">
            Sistema visual R2 · solo en desarrollo
          </p>
        </section>

        <section className="bg-surface px-6 pt-24 pb-24 md:px-8 lg:px-10">
          <div className="mx-auto max-w-360">
            <LabeledGrid label="Grilla y frase de apertura">
              <Statement>
                Ingeniería que continúa <Highlight>más allá del plano</Highlight>, con un solo equipo
                de punta a punta.
              </Statement>
              <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
                <p className="max-w-prose text-base leading-body text-body">
                  En Suriel entendemos que un proyecto no termina con la emisión de documentación.
                </p>
                <p className="max-w-prose text-base leading-body text-body">
                  Acompañamos a nuestros clientes durante la fabricación, el montaje y la construcción.
                </p>
              </div>
            </LabeledGrid>
          </div>
        </section>

        <section className="bg-navy-night px-6 py-24 md:px-8 lg:px-10">
          <div className="mx-auto max-w-360">
            <LabeledGrid label="Sobre fondo oscuro" tone="dark">
              <Statement tone="dark">
                Inspección, control y aseguramiento de calidad que <Highlight tone="dark">verifica cada soldadura</Highlight>,
                ensayo y prueba.
              </Statement>
            </LabeledGrid>
          </div>
        </section>

        <section className="bg-surface px-6 py-24 md:px-8 lg:px-10">
          <div className="mx-auto max-w-360">
            <SectionHeader eyebrow="Títulos" title="Título de sección en peso 500." intro="Los títulos chicos se mantienen en 600." />
            <div className="flex flex-wrap items-center gap-4 bg-navy-night p-6">
              <ButtonLink href="#contacto">Primario con flecha</ButtonLink>
              <ButtonLink href="#contacto" variant="light">
                Claro
              </ButtonLink>
              <ButtonLink href="#contacto" variant="outline">
                Contorno
              </ButtonLink>
              <ButtonLink href="#contacto" arrow={false}>
                Sin flecha
              </ButtonLink>
              <span className="inline-flex items-center gap-2 text-base text-white">
                Enlace con flecha <ArrowIcon />
              </span>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-navy-night px-6 py-24 md:px-8 lg:px-10">
          <div className="absolute inset-0 -z-10">
            <PhotoFrame src={photo} alt="" sizes="100vw" className="size-full" />
          </div>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/45" />
          <div className="mx-auto max-w-360">
            <LabeledGrid label="Cifras sobre foto" tone="dark">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  ["15", "Años de experiencia"],
                  ["+50", "Clientes"],
                  ["+150", "Proyectos realizados"],
                ].map(([value, label]) => (
                  <CrossCell key={label} className="flex flex-col gap-3 p-6 md:p-8">
                    <p className="text-4xl font-medium leading-none md:text-5xl lg:text-display">{value}</p>
                    <p className="text-xs uppercase leading-body text-white/80">{label}</p>
                  </CrossCell>
                ))}
              </div>
            </LabeledGrid>
          </div>
        </section>

        <section className="bg-surface px-6 py-24 md:px-8 lg:px-10">
          <div className="mx-auto max-w-360">
            <LabeledGrid label="Filas numeradas, claro">
              <NumberedList>
                {gestion.areas.slice(0, 3).map((area, i) => (
                  <NumberedRow key={area.title} index={String(i + 1).padStart(2, "0")} title={area.title} text={area.text} />
                ))}
              </NumberedList>
            </LabeledGrid>
          </div>
        </section>

        <section className="bg-navy px-6 py-24 md:px-8 lg:px-10">
          <div className="mx-auto max-w-360">
            <LabeledGrid label="Filas numeradas con miniatura" tone="dark">
              <NumberedList tone="dark">
                {industriesV2.items.slice(0, 3).map((item) => (
                  <NumberedRow
                    key={item.slug}
                    tone="dark"
                    index={item.n}
                    title={item.name}
                    text={item.summary}
                    tags={item.tags}
                    media={
                      item.image ? (
                        <PhotoFrame
                          src={item.image.src}
                          alt={item.image.alt}
                          sizes="(min-width: 64rem) 16rem, 12rem"
                          className="aspect-16/10 w-full max-w-xs md:max-w-none"
                        />
                      ) : null
                    }
                  />
                ))}
              </NumberedList>
            </LabeledGrid>
          </div>
        </section>

        <section className="bg-surface px-6 py-24 md:px-8 lg:px-10">
          <div className="mx-auto max-w-360">
            <LabeledGrid label="Tratamiento de fotos">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs uppercase text-muted">Original</p>
                  <PhotoFrame src={photo} alt="" sizes="50vw" className="aspect-16/10" imageClassName="saturate-100" veil={false} />
                </div>
                <div>
                  <p className="mb-2 text-xs uppercase text-muted">Con tratamiento (desaturación y velo navy)</p>
                  <PhotoFrame src={photo} alt="" sizes="50vw" className="aspect-16/10" />
                </div>
              </div>
            </LabeledGrid>
          </div>
        </section>
      </main>
    </>
  );
}
