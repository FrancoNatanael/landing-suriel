import Image from "next/image";
import { Callout } from "@/components/ui/Callout";
import { fabricacion } from "@/content/es";
import { ServiceBlock } from "./ServiceBlock";

/** Fabricación y montaje: grupos de trabajo, industrias y galería de trabajos. */
export function Fabricacion() {
  return (
    <ServiceBlock service={fabricacion} tone="dark" flip>
      <div className="grid gap-8 md:grid-cols-2">
        {fabricacion.groups.map((group) => (
          <div key={group.title}>
            <p className="mb-4 text-xs font-semibold uppercase leading-body text-navy-soft">{group.title}</p>
            <ul className="flex flex-col gap-2 border-t border-white/28 pt-4 text-base leading-body text-white">
              {group.items.map((item) => (
                <li key={item} className="first-letter:uppercase">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Callout callout={fabricacion.callout} tone="dark" />
      <div>
        <p className="mb-4 text-xs font-semibold uppercase leading-body text-navy-soft">{fabricacion.galleryLabel}</p>
        <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:gap-3">
          {fabricacion.gallery.map((img) => (
            <li key={img.src} className="relative aspect-square overflow-hidden bg-navy">
              <Image src={img.src} alt={img.alt} fill sizes="(min-width: 64rem) 12vw, 25vw" className="object-cover" />
            </li>
          ))}
        </ul>
      </div>
    </ServiceBlock>
  );
}
