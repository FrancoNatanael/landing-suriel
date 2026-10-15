import { cn } from "@/lib/utils";
import { Placeholder } from "@/components/ui/Placeholder";

type StatItemProps = {
  value: string;
  label: string;
  placeholder?: boolean;
  className?: string;
};

export function StatItem({ value, label, placeholder, className }: StatItemProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 px-2 py-8 text-center md:px-4 md:py-10",
        className,
      )}
    >
      <p className="text-4xl font-semibold leading-none md:text-5xl lg:text-display">
        {placeholder ? (
          <Placeholder variant="stat">{value}</Placeholder>
        ) : (
          <span className="text-navy">{value}</span>
        )}
      </p>
      <p className="text-xs uppercase leading-body text-muted">{label}</p>
    </div>
  );
}
