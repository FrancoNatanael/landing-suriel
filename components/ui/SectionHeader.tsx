import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  intro,
  tone = "light",
  className,
}: SectionHeaderProps) {
  const dark = tone === "dark";
  return (
    <header
      className={cn(
        "mb-12 flex flex-col gap-6 md:mb-16 lg:mb-20 lg:flex-row lg:items-end lg:justify-between lg:gap-16",
        className,
      )}
    >
      <div>
        <Eyebrow tone={dark ? "white" : "navy"} className="mb-6">
          {eyebrow}
        </Eyebrow>
        <h2
          className={cn(
            "max-w-heading text-3xl font-semibold leading-heading md:text-4xl lg:text-title",
            dark ? "text-white" : "text-heading",
          )}
        >
          {title}
        </h2>
      </div>
      {intro ? (
        <p
          className={cn(
            "max-w-120 text-base leading-body",
            dark ? "text-navy-soft" : "text-body",
          )}
        >
          {intro}
        </p>
      ) : null}
    </header>
  );
}
