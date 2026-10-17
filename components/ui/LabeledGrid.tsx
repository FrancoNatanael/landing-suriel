import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

type LabeledGridProps = {
  label: string;
  tone?: "light" | "dark";
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
};

/**
 * Grilla editorial de las secciones: etiqueta chica a la izquierda y contenido a la derecha.
 * Por debajo de `lg` se apila, con la etiqueta arriba.
 */
export function LabeledGrid({ label, tone = "light", className, contentClassName, children }: LabeledGridProps) {
  return (
    <div className={cn("grid gap-8 lg:grid-cols-12 lg:gap-x-8", className)}>
      <div className="lg:col-span-3">
        <Eyebrow tone={tone === "dark" ? "white" : "navy"}>{label}</Eyebrow>
      </div>
      <div className={cn("lg:col-span-9", contentClassName)}>{children}</div>
    </div>
  );
}
