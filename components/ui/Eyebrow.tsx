import { cn } from "@/lib/utils";

type EyebrowProps = {
  tone?: "navy" | "white";
  /** Versión discreta: texto más liviano y menos contraste (hero). */
  subtle?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Eyebrow({ tone = "navy", subtle = false, className, children }: EyebrowProps) {
  const isWhite = tone === "white";
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs uppercase leading-body",
        subtle ? "font-normal" : "font-semibold",
        isWhite ? (subtle ? "text-white/70" : "text-white") : "text-navy",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "shrink-0",
          subtle ? "size-2" : "size-2.5",
          isWhite ? (subtle ? "bg-white/70" : "bg-white") : "bg-navy",
        )}
      />
      {children}
    </p>
  );
}
