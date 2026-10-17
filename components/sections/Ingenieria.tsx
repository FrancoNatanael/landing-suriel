import { Eyebrow } from "@/components/ui/Eyebrow";
import { ingenieria } from "@/content/es";
import { ServiceBlock } from "./ServiceBlock";

const labels = {
  works: "Qué trabajamos",
  deliverables: "Entregables",
  items: "Alcance",
} as const;

export function Ingenieria() {
  const { works, deliverables, items, developments } = ingenieria;
  return (
    <ServiceBlock service={ingenieria} tone="light">
      <div>
        <p className="mb-4 text-xs font-semibold uppercase leading-body text-muted">{labels.works}</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xl font-medium leading-subheading text-heading md:text-2xl">
          {works.map((work) => (
            <li key={work}>{work}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className="mb-4 text-xs font-semibold uppercase leading-body text-muted">{labels.items}</p>
        <ul className="grid border-t border-line md:grid-cols-2 md:gap-x-8">
          {items.map((item) => (
            <li key={item} className="border-b border-line py-4 text-base leading-body text-body">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="mb-4 text-xs font-semibold uppercase leading-body text-muted">{labels.deliverables}</p>
        <p className="max-w-3xl text-base leading-body text-body">{deliverables}</p>
      </div>

      <div className="bg-paper p-6 md:p-8">
        <Eyebrow className="mb-4">{developments.title}</Eyebrow>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-base leading-body text-heading">
          {developments.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </ServiceBlock>
  );
}
