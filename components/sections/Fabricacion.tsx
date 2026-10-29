import { FabricacionSlider } from "@/components/blocks/FabricacionSlider";
import { fabricacion } from "@/content/es";
import { ServiceBlock } from "./ServiceBlock";

/** Fabricación y montaje: texto del Word del cliente completo, con slider de trabajos. */
export function Fabricacion() {
  return (
    <ServiceBlock
      service={fabricacion}
      tone="dark"
      flip
      media={<FabricacionSlider images={fabricacion.gallery} label={fabricacion.galleryLabel} />}
    >
      {fabricacion.sections.map((section) => (
        <div key={section.title}>
          <p className="mb-4 text-xs font-semibold uppercase leading-body text-navy-soft">{section.title}</p>
          <div className="flex flex-col gap-4 border-t border-white/28 pt-4 text-base leading-body text-white">
            <p>{section.intro}</p>
            {section.listIntro ? <p>{section.listIntro}</p> : null}
            <ul className="flex flex-col gap-2 pl-5 [&>li]:list-disc [&>li]:marker:text-navy-soft">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {section.outro ? <p>{section.outro}</p> : null}
          </div>
        </div>
      ))}
    </ServiceBlock>
  );
}
