import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

type StatementProps = {
  tone?: Tone;
  as?: "p" | "h2" | "h3";
  /** "lg" para frases cortas de apertura; "md" para frases largas (bajadas de servicio); "sm" para párrafos de apertura extensos. */
  size?: "lg" | "md" | "sm";
  className?: string;
  children: React.ReactNode;
};

/** Frase grande de apertura de una sección. Peso normal, interlineado ajustado. */
export function Statement({ tone = "light", as: Tag = "p", size = "lg", className, children }: StatementProps) {
  return (
    <Tag
      className={cn(
        "max-w-4xl font-normal leading-statement",
        size === "lg"
          ? "text-2xl md:text-3xl lg:text-4xl xl:text-statement"
          : size === "md"
            ? "text-xl md:text-2xl lg:text-3xl"
            : "text-lg md:text-xl lg:text-2xl",
        tone === "dark" ? "text-white" : "text-heading",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Parte resaltada de una frase: navy sobre fondo claro, navy-soft sobre fondo oscuro. */
export function Highlight({ tone = "light", children }: { tone?: Tone; children: React.ReactNode }) {
  return <span className={tone === "dark" ? "text-navy-soft" : "text-navy"}>{children}</span>;
}
