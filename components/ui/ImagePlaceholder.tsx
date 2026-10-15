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
        "bg-hatch flex items-center justify-center border border-dashed border-line-strong text-center text-muted grayscale",
        className,
      )}
    >
      {label}
    </div>
  );
}
