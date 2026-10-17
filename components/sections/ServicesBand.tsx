import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Highlight, Statement } from "@/components/ui/Statement";
import { servicesV2 } from "@/content/v2";

const band = {
  eyebrow: "Servicios",
  before: "Cuatro líneas de trabajo, ",
  highlight: "un solo equipo",
  after: ".",
  image: { src: "/images/obras.webp", alt: "Montaje industrial en obra" },
} as const;

/** Banda de foto a ancho completo: los cuatro nombres de servicio funcionan como anclas. */
export function ServicesBand() {
  return (
    <section id="que-hacemos" aria-labelledby="servicios-titulo" className="relative isolate bg-navy-night text-white">
      <div className="absolute inset-0 -z-10">
        <PhotoFrame src={band.image.src} alt={band.image.alt} sizes="100vw" className="size-full" veil={false} />
        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-navy-night via-navy-night/70 to-navy-night/50" />
      </div>

      <div className="mx-auto flex min-h-140 max-w-360 flex-col justify-between gap-16 px-6 py-16 md:px-8 md:py-24 lg:px-10">
        <div className="reveal">
          <Eyebrow tone="white" className="mb-6">
            {band.eyebrow}
          </Eyebrow>
          <Statement as="h2" tone="dark" className="max-w-3xl">
            <span id="servicios-titulo">
              {band.before}
              <Highlight tone="dark">{band.highlight}</Highlight>
              {band.after}
            </span>
          </Statement>
        </div>

        <ul className="reveal grid border-t border-white/50 md:grid-cols-2 lg:grid-cols-4">
          {servicesV2.map((service) => (
            <li key={service.slug} className="border-b border-white/28 lg:border-b-0 lg:border-l lg:first:border-l-0">
              <a
                href={`#${service.anchor}`}
                className="group flex h-full flex-col justify-between gap-8 py-6 transition-colors duration-300 hover:bg-white/8 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white md:py-8 lg:px-6 lg:first:pl-0"
              >
                <span className="text-xs font-semibold leading-body text-navy-soft">[{service.n}]</span>
                <span className="flex items-end justify-between gap-4 text-xl font-semibold leading-subheading md:text-2xl">
                  {service.title}
                  <ArrowIcon className="shrink-0 transition-transform duration-300 ease-brand group-hover:translate-x-1" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
