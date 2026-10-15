import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

export function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "bg-hatch flex items-center justify-center border border-dashed border-line-strong p-4 text-center text-sm text-muted grayscale",
        className,
      )}
    >
      {label}
    </div>
  );
}
