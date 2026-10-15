import { ServiceCard } from "@/components/blocks/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/content/es";

export function Services() {
  return (
    <section
      id="que-hacemos"
      className="bg-white px-6 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-360">
        <SectionHeader
          className="reveal mb-0 md:mb-0 lg:mb-0"
          eyebrow={services.eyebrow}
          title={services.title}
          intro={services.intro}
        />
        <div className="mt-12 grid auto-rows-fr gap-4 md:mt-16 md:gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-8">
          {services.items.map((item) => (
            <ServiceCard
              key={item.n}
              n={item.n}
              title={item.title}
              keys={item.keys}
              image={item.image}
              tone={item.tone}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
