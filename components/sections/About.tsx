import { CrossCell } from "@/components/ui/CrossCell";
import { LabeledGrid } from "@/components/ui/LabeledGrid";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Highlight, Statement } from "@/components/ui/Statement";
import { about } from "@/content/es";

export function About() {
  const { statement } = about;
  return (
    <section
      id="nosotros"
      className="bg-surface px-6 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-360">
        <LabeledGrid label={about.eyebrow} className="reveal">
          <Statement as="h2">
            {statement.before}
            <Highlight>{statement.highlight}</Highlight>
            {statement.after}
          </Statement>

          <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-12">
            {about.columns.map((paragraphs) => (
              <div key={paragraphs[0]} className="flex flex-col gap-6">
                {paragraphs.map((text) => (
                  <p key={text} className="text-base leading-body text-body">
                    {text}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </LabeledGrid>

        <div className="reveal relative mt-16 md:mt-24">
          <div className="absolute inset-0">
            <PhotoFrame
              src={about.image.src}
              alt={about.image.alt}
              sizes="(min-width: 90rem) 90rem, 100vw"
              className="size-full"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-black/35" />
          <dl className="relative grid min-h-96 grid-cols-1 content-end gap-6 p-4 md:min-h-140 md:grid-cols-3 md:gap-8 md:p-8">
            {about.stats.map((stat) => (
              <CrossCell key={stat.label} className="flex flex-col gap-3 p-6 md:p-8">
                <dd className="order-1 text-5xl font-medium leading-none lg:text-display">{stat.value}</dd>
                <dt className="order-2 text-xs uppercase leading-body text-white">{stat.label}</dt>
              </CrossCell>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
