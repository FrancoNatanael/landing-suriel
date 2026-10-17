import { LabeledGrid } from "@/components/ui/LabeledGrid";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Statement } from "@/components/ui/Statement";
import { industriesV2 } from "@/content/es";

export function Industrias() {
  const { eyebrow, title, items } = industriesV2;
  return (
    <section id="industrias" className="bg-navy px-6 py-20 md:px-8 md:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-360">
        <LabeledGrid label={eyebrow} tone="dark" className="reveal">
          <Statement as="h2" tone="dark">
            {title}
          </Statement>
        </LabeledGrid>

        <ul className="reveal mt-12 grid grid-cols-2 gap-3 md:mt-16 md:gap-4 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.slug} className="group relative isolate aspect-4/5 overflow-hidden">
              <PhotoFrame
                src={item.image.src}
                alt={item.image.alt}
                sizes="(min-width: 64rem) 25vw, 50vw"
                className="absolute inset-0 size-full"
                imageClassName="transition-transform duration-700 ease-brand group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-navy-night via-navy-night/50 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4 md:p-6">
                <span className="text-xs font-semibold leading-body text-navy-soft">[{item.n}]</span>
                <h3 className="text-xl font-semibold leading-subheading text-white md:text-2xl">{item.name}</h3>
                <ul className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs leading-body text-white/80 md:text-sm">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
