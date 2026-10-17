import { Callout } from "@/components/ui/Callout";
import { inspeccion } from "@/content/es";
import { ServiceBlock } from "./ServiceBlock";

export function Inspeccion() {
  return (
    <ServiceBlock service={inspeccion} tone="dark" flip>
      <ul className="border-t border-white/50">
        {inspeccion.groups.map((group) => (
          <li
            key={group.title}
            className="grid gap-x-8 gap-y-2 border-b border-white/28 py-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]"
          >
            <h3 className="text-xl font-semibold leading-subheading text-white">{group.title}</h3>
            <p className="text-base leading-body text-navy-soft">{group.items.join(", ")}</p>
          </li>
        ))}
      </ul>
      <Callout callout={inspeccion.callout} tone="dark" />
    </ServiceBlock>
  );
}
