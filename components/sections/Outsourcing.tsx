import { Callout } from "@/components/ui/Callout";
import { NumberedList, NumberedRow } from "@/components/ui/NumberedList";
import { outsourcing } from "@/content/es";
import { ServiceBlock } from "./ServiceBlock";

const labels = { steps: "Cómo trabajamos" } as const;

export function Outsourcing() {
  return (
    <ServiceBlock service={outsourcing} tone="dark" flip>
      <div>
        <p className="mb-4 text-xs font-semibold uppercase leading-body text-navy-soft">{labels.steps}</p>
        <NumberedList tone="dark">
          {outsourcing.steps.map((step, i) => (
            <NumberedRow key={step.title} index={`0${i + 1}`} title={step.title} text={step.text} tone="dark" />
          ))}
        </NumberedList>
      </div>
      <Callout callout={outsourcing.callout} tone="dark" />
    </ServiceBlock>
  );
}
