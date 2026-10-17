import { cn } from "@/lib/utils";

/** Flecha chica de los botones y enlaces. Hereda el color del texto. */
export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-4 shrink-0", className)}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
