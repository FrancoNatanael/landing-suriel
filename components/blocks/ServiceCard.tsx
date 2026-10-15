import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  n: string;
  title: string;
  keys: readonly string[];
  image: string;
  tone: "white" | "paper";
};

export function ServiceCard({ n, title, keys, image, tone }: ServiceCardProps) {
  return (
    <article
      className={cn(
        "reveal flex h-full min-h-80 flex-col gap-6 border border-line p-6 md:flex-row md:gap-8 lg:flex-col lg:gap-8 lg:p-8 xl:flex-row",
        tone === "paper" ? "bg-paper" : "bg-white",
      )}
    >
      <div className="flex flex-1 flex-col gap-6">
        <p className="text-xl leading-body text-muted">{n}</p>
        <div className="flex flex-col">
          <h3 className="min-h-[2.2em] text-2xl font-semibold leading-subheading text-navy md:text-2xl lg:text-3xl">
            {title}
          </h3>
          <ul className="mt-5 flex flex-col gap-1.5 border-t border-line pt-4 text-sm leading-body text-muted">
            {keys.map((key) => (
              <li key={key}>{key}</li>
            ))}
          </ul>
        </div>
      </div>
      <ImagePlaceholder
        label={image}
        className="aspect-video p-4 text-sm md:aspect-auto md:w-2/5 md:self-stretch lg:aspect-video lg:w-full lg:self-auto xl:aspect-auto xl:w-2/5 xl:self-stretch"
      />
    </article>
  );
}
