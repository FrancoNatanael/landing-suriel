import { FabricacionSlider } from "@/components/blocks/FabricacionSlider";
import { Callout } from "@/components/ui/Callout";
import { fabricacion } from "@/content/es";
import { ServiceBlock } from "./ServiceBlock";

/** Fabricación y montaje: grupos de trabajo, industrias y galería de trabajos. */
export function Fabricacion() {
  return (
    <ServiceBlock
      service={fabricacion}
      tone="dark"
      flip
      media={<FabricacionSlider images={fabricacion.gallery} label={fabricacion.galleryLabel} />}
    >
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
    </ServiceBlock>
  );
}
