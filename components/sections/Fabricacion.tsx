import { FabricacionSlider } from "@/components/blocks/FabricacionSlider";
import { fabricacion, type FabricacionSection } from "@/content/es";
import { ServiceBlock } from "./ServiceBlock";

const label = "mb-4 text-xs font-semibold uppercase leading-body text-navy-soft";
const body = "flex flex-col gap-3 border-t border-white/28 pt-4 text-base leading-body text-white";

/** Lista con puntos: en dos columnas cuando hay lugar. */
function Bullets({ items, columns }: { items: readonly string[]; columns?: boolean }) {
  return (
    <ul
      className={
        columns
          ? "grid gap-x-8 gap-y-1.5 pl-5 sm:grid-cols-2 [&>li]:list-disc [&>li]:marker:text-navy-soft"
          : "flex flex-col gap-1.5 pl-5 [&>li]:list-disc [&>li]:marker:text-navy-soft"
      }
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Section({ section, columns }: { section: FabricacionSection; columns?: boolean }) {
  return (
    <div>
      <p className={label}>{section.title}</p>
      <div className={body}>
        <p>{section.intro}</p>
        {section.listIntro ? <p>{section.listIntro}</p> : null}
        <Bullets items={section.items} columns={columns} />
        {section.outro ? <p>{section.outro}</p> : null}
      </div>
    </div>
  );
}

/** Industrias como etiquetas en línea. */
function Industries({ section }: { section: FabricacionSection }) {
  return (
    <div>
      <p className={label}>{section.title}</p>
      <div className={body}>
        <p>{section.intro}</p>
        <ul className="flex flex-wrap gap-2">
          {section.items.map((item) => (
            <li key={item} className="border border-white/28 px-3 py-1.5 text-sm leading-body">
              {item}
            </li>
          ))}
        </ul>
        {section.outro ? <p>{section.outro}</p> : null}
      </div>
    </div>
  );
}

/** Fabricación y montaje: texto del Word del cliente completo, con slider de trabajos. */
export function Fabricacion() {
  const [fab, mant, ind] = fabricacion.sections;
  return (
    <ServiceBlock
      service={fabricacion}
      tone="dark"
      flip
      leadSize="sm"
      media={<FabricacionSlider images={fabricacion.gallery} label={fabricacion.galleryLabel} />}
    >
      <Section section={fab} columns />
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-8">
        <Section section={mant} />
        <Industries section={ind} />
      </div>
    </ServiceBlock>
  );
}
