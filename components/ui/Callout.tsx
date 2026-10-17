import type { ServiceCallout } from "@/content/es";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

/** Bloque destacado de cada servicio: eyebrow con cuadrado y lista que se lee de corrido. */
export function Callout({
  callout,
  tone = "light",
  className,
}: {
  callout: ServiceCallout;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={cn("p-6 md:p-8", dark ? "bg-white/8" : "bg-paper", className)}>
      <Eyebrow tone={dark ? "white" : "navy"} className="mb-4">
        {callout.title}
      </Eyebrow>
      <ul
        className={cn(
          "flex flex-wrap gap-x-6 gap-y-2 text-base leading-body",
          dark ? "text-white" : "text-heading",
        )}
      >
        {callout.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
