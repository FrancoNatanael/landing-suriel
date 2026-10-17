import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { hero } from "@/content/es";

const rise = (step: number) => ({ animationDelay: `${step * 0.12}s` });

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-svh min-h-160 overflow-hidden bg-hero-base"
    >
      <div className="absolute inset-0 animate-hero-zoom">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto flex h-full max-w-360 flex-col justify-end px-6 pt-18 pb-12 md:px-8 md:pb-16 lg:px-10 lg:pb-20">
        <div className="animate-rise" style={rise(0)}>
          <Eyebrow tone="white" subtle className="mb-6">
            {hero.eyebrow}
          </Eyebrow>
        </div>
        <h1
          className="animate-rise text-4xl font-bold leading-display text-white md:text-5xl lg:text-display"
          style={rise(1)}
        >
          {hero.titleLine1}
          <br />
          {hero.titleLine2}
        </h1>
        <p
          className="mt-6 max-w-140 animate-rise text-base leading-body text-white"
          style={rise(2)}
        >
          {hero.lead}
        </p>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div
            className="flex animate-rise flex-col gap-4 sm:flex-row"
            style={rise(3)}
          >
            <ButtonLink
              href={hero.primaryCta.href}
              variant="primary"
              className="w-full sm:w-auto"
            >
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink
              href={hero.secondaryCta.href}
              variant="outline"
              className="w-full sm:w-auto"
            >
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
          <p
            className="animate-rise text-base leading-body text-white md:text-lg lg:text-right"
            style={rise(4)}
          >
            {hero.sectors.join("  /  ")}
          </p>
        </div>
      </div>
    </section>
  );
}
