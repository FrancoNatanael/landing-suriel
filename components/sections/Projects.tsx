"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/blocks/ProjectCard";
import { ProjectDialog } from "@/components/blocks/ProjectDialog";
import { LabeledGrid } from "@/components/ui/LabeledGrid";
import { Statement } from "@/components/ui/Statement";
import { projectsV2, visibleProjects } from "@/content/es";

const text = {
  open: "Ver proyecto",
  close: "Cerrar",
  openImage: "Ver en grande la imagen",
  prev: "Imagen anterior",
  next: "Imagen siguiente",
  region: "Imágenes del proyecto",
} as const;

export function Projects() {
  const [selected, setSelected] = useState<{ slug: string; image: number } | null>(null);
  const project = visibleProjects.find((p) => p.slug === selected?.slug) ?? null;

  return (
    <section
      id="proyectos"
      className="bg-surface px-6 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-360">
        <LabeledGrid label={projectsV2.eyebrow} className="reveal">
          <Statement as="h2">{projectsV2.title}</Statement>
          <p className="mt-8 max-w-3xl text-base leading-body text-body">{projectsV2.intro}</p>
        </LabeledGrid>

        <ul className="reveal mt-16 grid gap-x-8 gap-y-12 md:mt-24 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((item, i) => (
            <ProjectCard
              key={item.slug}
              project={item}
              index={i}
              labels={text}
              onOpen={(image = 0) => setSelected({ slug: item.slug, image })}
            />
          ))}
        </ul>
      </div>

      <ProjectDialog
        project={project}
        initialImage={selected?.image ?? 0}
        onClose={() => setSelected(null)}
        labels={projectsV2.labels}
        closeLabel={text.close}
      />
    </section>
  );
}
