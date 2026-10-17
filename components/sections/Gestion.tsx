import { NumberedList, NumberedRow } from "@/components/ui/NumberedList";
import { gestion } from "@/content/v2";
import { ServiceBlock } from "./ServiceBlock";

const labels = { areas: "Áreas de trabajo" } as const;

export function Gestion() {
  return (
    <ServiceBlock service={gestion} tone="light">
      <div>
        <p className="mb-4 text-xs font-semibold uppercase leading-body text-muted">{labels.areas}</p>
        <NumberedList>
          {gestion.areas.map((area, i) => (
            <NumberedRow key={area.title} index={`0${i + 1}`} title={area.title} text={area.text} />
          ))}
        </NumberedList>
      </div>
    </ServiceBlock>
  );
}
