import { Callout } from "@/components/ui/Callout";
import { NumberedList, NumberedRow } from "@/components/ui/NumberedList";
import { outsourcing } from "@/content/es";
import { ServiceBlock } from "./ServiceBlock";

const labels = { steps: "Cómo trabajamos" } as const;

export function Outsourcing() {
  return (
    <ServiceBlock service={outsourcing} tone="light" flip>
      <div>
        <p className="mb-4 text-xs font-semibold uppercase leading-body text-muted">{labels.steps}</p>
        <NumberedList>
          {outsourcing.steps.map((step, i) => (
            <NumberedRow key={step.title} index={`0${i + 1}`} title={step.title} text={step.text} />
          ))}
        </NumberedList>
      </div>
      <Callout callout={outsourcing.callout} tone="light" />
    </ServiceBlock>
  );
}
