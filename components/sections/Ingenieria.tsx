import { Callout } from "@/components/ui/Callout";
import { ingenieria } from "@/content/es";
import { ServiceBlock } from "./ServiceBlock";

const labels = { items: "Alcance" } as const;

export function Ingenieria() {
  return (
    <ServiceBlock service={ingenieria} tone="light">
      <div>
        <p className="mb-4 text-xs font-semibold uppercase leading-body text-muted">{labels.items}</p>
        <ul className="grid border-t border-line md:grid-cols-2 md:gap-x-8">
          {ingenieria.items.map((item) => (
            <li key={item} className="border-b border-line py-4 text-base leading-body text-body">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Callout callout={ingenieria.callout} tone="light" />
    </ServiceBlock>
  );
}
