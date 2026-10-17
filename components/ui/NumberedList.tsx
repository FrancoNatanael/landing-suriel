import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

export function NumberedList({
  tone = "light",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <ul className={cn("border-t", tone === "dark" ? "border-white/50" : "border-line", className)}>
      {children}
    </ul>
  );
}

type NumberedRowProps = {
  /** Número que se muestra entre corchetes, por ejemplo "01". */
  index: string;
  title: string;
  text?: string;
  tags?: readonly string[];
  /** Miniatura a la derecha (siempre visible). Por debajo de `md` va debajo del texto. */
  media?: React.ReactNode;
  tone?: Tone;
  /** Fila más baja (Industrias). */
  dense?: boolean;
  className?: string;
};

/**
 * Fila numerada: [01], nombre, texto y miniatura opcional, separada por una línea fina.
 * Se usa en Industrias, en las áreas de Gestión de proyectos y en las ventajas de Outsourcing.
 */
export function NumberedRow({ index, title, text, tags, media, tone = "light", dense = false, className }: NumberedRowProps) {
  const dark = tone === "dark";
  return (
    <li
      className={cn(
        "grid gap-x-6 gap-y-3 border-b md:gap-x-8",
        dense ? "py-5 md:py-6" : "py-6 md:py-8",
        dark ? "border-white/28" : "border-line",
        media
          ? "grid-cols-[2.5rem_minmax(0,1fr)] md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.4fr)_10rem] lg:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.4fr)_12rem]"
          : "grid-cols-[2.5rem_minmax(0,1fr)] md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.4fr)]",
        className,
      )}
    >
      <span
        className={cn(
          "pt-1.5 text-xs font-semibold leading-body",
          dark ? "text-navy-soft" : "text-muted",
        )}
      >
        [{index}]
      </span>
      <h3
        className={cn(
          "text-xl font-semibold leading-subheading md:text-2xl",
          dark ? "text-white" : "text-heading",
        )}
      >
        {title}
      </h3>
      {text || tags ? (
        <div className="col-start-2 md:col-start-auto">
          {text ? (
            <p className={cn("text-base leading-body", dark ? "text-navy-soft" : "text-body")}>{text}</p>
          ) : null}
          {tags ? (
            <ul className={cn("flex flex-wrap gap-x-4 gap-y-1 text-sm leading-body", text && "mt-3", dark ? "text-white/80" : "text-muted")}>
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : (
        <span className="hidden md:block" />
      )}
      {media ? <div className="col-start-2 md:col-start-auto">{media}</div> : null}
    </li>
  );
}
