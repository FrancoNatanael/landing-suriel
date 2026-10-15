import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { projects, type Case } from "@/content/es";
import { cn } from "@/lib/utils";

type CaseCardProps = {
  data: Case;
  number: number;
  reverse?: boolean;
};

export function CaseCard({ data, number, reverse }: CaseCardProps) {
  const fields = [
    [projects.labels.client, data.client],
    [projects.labels.location, data.location],
    [projects.labels.line, data.line],
    [projects.labels.sector, data.sector],
  ] as const;

  return (
    <article
      className={cn(
        "reveal flex min-h-130 flex-col border border-line lg:flex-row",
        reverse && "lg:flex-row-reverse",
      )}
    >
      <div className="flex flex-col gap-6 p-6 lg:w-80 lg:shrink-0 lg:p-8">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase leading-body text-muted">
            {data.tag}
          </p>
          <p className="text-xs font-semibold leading-body text-subtle">
            {String(number).padStart(2, "0")}
          </p>
        </div>
        <h3 className="text-2xl font-semibold leading-subheading text-navy md:text-3xl lg:text-headline">
          {data.title}
        </h3>
        <p className="text-base leading-body text-body">{data.description}</p>
        <dl className="mt-auto grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-4">
          {fields.map(([label, value]) => (
            <div key={label}>
              <dt className="text-xs uppercase leading-body text-muted">{label}</dt>
              <dd className="text-base leading-body text-ink">
                {value || projects.fallback}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div
        role="region"
        tabIndex={0}
        aria-label={`${projects.galleryLabel}: ${data.title}`}
        className={cn(
          "flex min-w-0 snap-x snap-mandatory overflow-x-auto border-t border-line bg-paper focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-navy lg:flex-1 lg:border-t-0",
          reverse ? "lg:border-r" : "lg:border-l",
        )}
      >
        {data.photos.map((label) => (
          <ImagePlaceholder
            key={label}
            label={label}
            className="aspect-5/4 w-5/6 max-w-170 shrink-0 snap-start p-4 text-sm md:w-3/5 lg:h-full lg:w-auto"
          />
        ))}
      </div>
    </article>
  );
}
