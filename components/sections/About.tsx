import Image from "next/image";
import { StatItem } from "@/components/blocks/StatItem";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { about } from "@/content/es";

export function About() {
  return (
    <section
      id="nosotros"
      className="bg-surface px-6 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto grid max-w-360 gap-12 md:gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <div className="reveal">
            <Eyebrow className="mb-6">{about.eyebrow}</Eyebrow>
            <h2 className="max-w-heading text-3xl font-semibold leading-heading text-heading md:text-4xl lg:text-title">
              {about.title}
            </h2>
          </div>

          <div className="reveal mt-8 flex max-w-prose flex-col gap-6">
            {about.paragraphs.map((text) => (
              <p key={text} className="text-base leading-body text-body">
                {text}
              </p>
            ))}
          </div>

          <div className="reveal mt-12 grid grid-cols-3 border-y border-line md:mt-16">
            {about.stats.map((stat, i) => (
              <StatItem
                key={stat.label}
                value={stat.value}
                label={stat.label}
                placeholder={stat.placeholder}
                className={i > 0 ? "border-l border-line" : undefined}
              />
            ))}
          </div>
        </div>

        {about.imageSrc ? (
          <div className="reveal relative min-h-96 overflow-hidden md:min-h-140">
            <Image
              src={about.imageSrc}
              alt=""
              fill
              sizes="(min-width: 64rem) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ) : (
          <ImagePlaceholder
            label={about.imageLabel}
            className="reveal min-h-96 p-4 text-sm md:min-h-140"
          />
        )}
      </div>
    </section>
  );
}
