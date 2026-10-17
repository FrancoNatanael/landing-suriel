import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

type StatementProps = {
  tone?: Tone;
  as?: "p" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
};

/** Frase grande de apertura de una sección. Peso normal, interlineado ajustado. */
export function Statement({ tone = "light", as: Tag = "p", className, children }: StatementProps) {
  return (
    <Tag
      className={cn(
        "max-w-4xl text-2xl font-normal leading-statement md:text-3xl lg:text-4xl xl:text-statement",
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
