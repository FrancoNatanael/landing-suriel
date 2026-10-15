import { CaseCard } from "@/components/blocks/CaseCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/content/es";

export function Projects() {
  return (
    <section
      id="proyectos"
      className="bg-surface px-6 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-360">
        <SectionHeader
          className="reveal"
          eyebrow={projects.eyebrow}
          title={projects.title}
          intro={projects.intro}
        />
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
          {projects.cases.map((item, i) => (
            <CaseCard key={item.title} data={item} number={i + 1} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
