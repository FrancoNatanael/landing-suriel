import { ServiceCard } from "@/components/blocks/ServiceCard";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { hero, services } from "@/content/es";

export function Services() {
  return (
    <section id="que-hacemos" className="bg-white pt-24 md:pt-32 lg:pt-40">
      <div className="grid auto-rows-fr gap-0 md:grid-cols-2 lg:grid-cols-3">
        <div className="reveal flex flex-col justify-between gap-12 bg-navy-night p-6 pb-12 text-white md:col-span-2 md:p-8 md:pb-16 lg:col-span-1 lg:row-span-2 lg:p-10">
          <div>
            <Eyebrow tone="white" className="mb-6">
              {services.eyebrow}
            </Eyebrow>
            <h2 className="text-3xl font-semibold leading-heading text-white md:text-4xl lg:text-4xl xl:text-title">
              {services.title}
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <p className="max-w-120 text-base leading-body text-navy-soft">
              {services.intro}
            </p>
            <ButtonLink
              href={hero.primaryCta.href}
              variant="light"
              className="w-full sm:w-auto sm:self-start"
            >
              {hero.primaryCta.label}
            </ButtonLink>
          </div>
        </div>
        {services.items.map((item) => (
          <ServiceCard
            key={item.n}
            n={item.n}
            title={item.title}
            keys={item.keys}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
