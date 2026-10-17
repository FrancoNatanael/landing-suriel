import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { LabeledGrid } from "@/components/ui/LabeledGrid";
import { NumberedList, NumberedRow } from "@/components/ui/NumberedList";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Statement } from "@/components/ui/Statement";
import { ButtonLink } from "@/components/ui/Button";
import { industriesV2 } from "@/content/es";

const link = { label: "Ver proyectos", href: "#proyectos" } as const;
const placeholderLabel = "foto: minería";

export function Industrias() {
  const { eyebrow, title, intro, items } = industriesV2;
  return (
    <section
      id="industrias"
      className="bg-navy px-6 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-360">
        <LabeledGrid label={eyebrow} tone="dark" className="reveal">
          <Statement as="h2" tone="dark">
            {title}
          </Statement>
          <p className="mt-8 max-w-3xl text-base leading-body text-navy-soft">{intro}</p>
        </LabeledGrid>

        <NumberedList tone="dark" className="reveal mt-16 md:mt-24">
          {items.map((item) => (
            <NumberedRow
              key={item.slug}
              index={item.n}
              title={item.name}
              text={item.summary}
              tags={item.tags}
              tone="dark"
              media={
                item.image ? (
                  <PhotoFrame
                    src={item.image.src}
                    alt={item.image.alt}
                    sizes="(min-width: 64rem) 16rem, (min-width: 48rem) 12rem, 100vw"
                    className="aspect-16/10 w-full"
                  />
                ) : (
                  <ImagePlaceholder
                    label={placeholderLabel}
                    borderClassName="border-white/50"
                    className="aspect-16/10 w-full p-2 text-xs"
                  />
                )
              }
            />
          ))}
        </NumberedList>

        <ButtonLink href={link.href} variant="outline" className="reveal mt-12 w-full sm:w-auto">
          {link.label}
        </ButtonLink>
      </div>
    </section>
  );
}
