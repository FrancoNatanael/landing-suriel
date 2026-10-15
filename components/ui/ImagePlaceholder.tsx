import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
  borderClassName?: string;
};

export function ImagePlaceholder({ label, className, borderClassName = "border-line-strong" }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "bg-hatch flex items-center justify-center border border-dashed text-center text-muted grayscale",
        borderClassName,
        className,
      )}
    >
      {label}
    </div>
  );
}
