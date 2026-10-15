import { cn } from "@/lib/utils";

type EyebrowProps = {
  tone?: "navy" | "white";
  className?: string;
  children: React.ReactNode;
};

export function Eyebrow({ tone = "navy", className, children }: EyebrowProps) {
  const isWhite = tone === "white";
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-semibold uppercase leading-body",
        isWhite ? "text-white" : "text-navy",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn("size-2.5 shrink-0", isWhite ? "bg-white" : "bg-navy")}
      />
      {children}
    </p>
  );
}
