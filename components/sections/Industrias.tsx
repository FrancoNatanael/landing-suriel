import { LabeledGrid } from "@/components/ui/LabeledGrid";
import { NumberedList, NumberedRow } from "@/components/ui/NumberedList";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Statement } from "@/components/ui/Statement";
import { industriesV2 } from "@/content/es";

export function Industrias() {
  const { eyebrow, title, intro, items } = industriesV2;
  return (
    <section
      id="industrias"
      className="bg-navy px-6 py-20 md:px-8 md:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-360">
        <LabeledGrid label={eyebrow} tone="dark" className="reveal">
          <Statement as="h2" tone="dark">
            {title}
          </Statement>
          <p className="mt-6 max-w-3xl text-base leading-body text-navy-soft">{intro}</p>
        </LabeledGrid>

        <NumberedList tone="dark" className="reveal mt-12 md:mt-16">
          {items.map((item) => (
            <NumberedRow
              key={item.slug}
              index={item.n}
              title={item.name}
              text={item.summary}
              tags={item.tags}
              tone="dark"
              dense
              media={
                <PhotoFrame
                  src={item.image.src}
                  alt={item.image.alt}
                  sizes="(min-width: 64rem) 12rem, (min-width: 48rem) 10rem, 100vw"
                  className="aspect-16/7 w-full md:aspect-16/10"
                />
              }
            />
          ))}
        </NumberedList>

      </div>
    </section>
  );
}
