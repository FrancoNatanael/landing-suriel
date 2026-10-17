"use client";

import { useEffect, useRef } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { ProjectV2 } from "@/content/es";
import { Gallery } from "./Gallery";

type ProjectDialogProps = {
  project: ProjectV2 | null;
  /** Imagen con la que abre la galería. */
  initialImage?: number;
  onClose: () => void;
  labels: { client: string; scope: string; duration: string };
  closeLabel: string;
};

/**
 * Detalle del proyecto en un <dialog> nativo: el navegador atrapa el foco, cierra con Escape
 * y devuelve el foco a la tarjeta que lo abrió.
 */
export function ProjectDialog({ project, initialImage = 0, onClose, labels, closeLabel }: ProjectDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) {
      dialog.showModal();
      // Foco inicial en la galería, para recorrerla con las flechas del teclado.
      const gallery = dialog.querySelector<HTMLElement>("[role=region]");
      if (gallery) {
        gallery.scrollLeft = initialImage * gallery.clientWidth;
        gallery.focus();
      }
    }
    if (!project && dialog.open) dialog.close();
  // initialImage solo se lee al abrir: no debe reabrir ni mover la galería al cambiar.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project]);

  useEffect(() => {
    document.documentElement.style.overflow = project ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [project]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="proyecto-titulo"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
      className="m-auto max-h-svh w-full max-w-7xl overflow-y-auto bg-surface p-0 text-ink backdrop:bg-navy-night/80"
    >
      {project ? (
        <div className="relative grid gap-8 p-6 md:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
          <button
            type="button"
            onClick={() => ref.current?.close()}
            aria-label={closeLabel}
            className="absolute top-3 right-3 z-10 flex size-12 items-center justify-center bg-white text-navy transition-colors duration-300 hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy md:top-4 md:right-4"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-6">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div className="mt-12 lg:col-span-7 lg:mt-0">
            <Gallery key={project.slug} images={project.images} title={project.title} />
          </div>

          <div className="flex flex-col gap-8 lg:col-span-5 lg:pt-12">
            <div>
              <Eyebrow className="mb-4">{project.serviceLabel}</Eyebrow>
              <h2 id="proyecto-titulo" className="text-2xl font-medium leading-heading text-heading md:text-3xl">
                {project.title}
              </h2>
            </div>

            <dl className="flex flex-col border-t border-line">
              <div className="border-b border-line py-4">
                <dt className="text-xs uppercase leading-body text-muted">{labels.client}</dt>
                <dd className="mt-1 text-base leading-body text-ink">{project.client}</dd>
              </div>
              <div className="border-b border-line py-4">
                <dt className="text-xs uppercase leading-body text-muted">{labels.scope}</dt>
                <dd className="mt-2">
                  <ul className="flex flex-col gap-1 text-base leading-body text-ink">
                    {project.scope.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              {project.duration ? (
                <div className="border-b border-line py-4">
                  <dt className="text-xs uppercase leading-body text-muted">{labels.duration}</dt>
                  <dd className="mt-1 text-base leading-body text-ink">{project.duration}</dd>
                </div>
              ) : null}
              {project.highlight ? (
                <div className="border-b border-line py-4">
                  <dd className="text-base font-semibold leading-body text-navy">{project.highlight}</dd>
                </div>
              ) : null}
            </dl>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
