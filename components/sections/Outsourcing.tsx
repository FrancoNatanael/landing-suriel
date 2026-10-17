import { NumberedList, NumberedRow } from "@/components/ui/NumberedList";
import { Statement } from "@/components/ui/Statement";
import { outsourcing } from "@/content/es";
import { ServiceBlock } from "./ServiceBlock";

const labels = { steps: "Cómo trabajamos", advantages: "Ventajas" } as const;

export function Outsourcing() {
  const { steps, advantages, closing } = outsourcing;
  return (
    <ServiceBlock service={outsourcing} tone="dark" flip>
      <div>
        <p className="mb-4 text-xs font-semibold uppercase leading-body text-navy-soft">{labels.steps}</p>
        <NumberedList tone="dark">
          {steps.map((step, i) => (
            <NumberedRow key={step.title} index={`0${i + 1}`} title={step.title} text={step.text} tone="dark" />
          ))}
        </NumberedList>
      </div>

      <div>
        <p className="mb-4 text-xs font-semibold uppercase leading-body text-navy-soft">{labels.advantages}</p>
        <NumberedList tone="dark">
          {advantages.map((item, i) => (
            <NumberedRow key={item.title} index={`0${i + 1}`} title={item.title} text={item.text} tone="dark" />
          ))}
        </NumberedList>
      </div>

      <Statement size="md" tone="dark">
        {closing}
      </Statement>
    </ServiceBlock>
  );
}
