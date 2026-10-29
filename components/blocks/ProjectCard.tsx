"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { ProjectV2 } from "@/content/es";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: ProjectV2;
  index: number;
  /** Abre el detalle, opcionalmente en una imagen puntual. */
  onOpen: (imageIndex?: number) => void;
  labels: { open: string; openImage: string; prev: string; next: string; region: string };
};

const arrow = "M5 12h14M13 6l6 6-6 6";

/**
 * Tarjeta de proyecto: portada deslizable (dedo, flechas y teclado), servicio, título, cliente
 * y dato destacado. Tocar una imagen o "Ver proyecto" abre el detalle.
 */
export function ProjectCard({ project, index, onOpen, labels }: ProjectCardProps) {
  const track = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const { images } = project;
  const last = images.length - 1;
  // Renders y análisis (ingeniería) se muestran enteros sobre fondo claro; las fotos de obra llenan el marco.
  const fit = project.service === "ingenieria" ? "object-contain" : "object-cover";

  const goTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollTo({ left: Math.min(last, Math.max(0, i)) * el.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = track.current;
    if (el) setCurrent(Math.round(el.scrollLeft / el.clientWidth));
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(current + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(current - 1);
    }
  };

  const control =
    "absolute top-1/2 flex size-10 -translate-y-1/2 items-center justify-center bg-white text-navy transition-opacity duration-300 hover:bg-navy hover:text-white focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy disabled:pointer-events-none disabled:opacity-0 lg:opacity-0 lg:group-hover/media:opacity-100";

  return (
    <li className="flex flex-col">
      <div className="group/media relative">
        {images.length === 0 ? (
          <button type="button" aria-label={`${labels.open}: ${project.title}`} onClick={() => onOpen()} className="block aspect-4/3 w-full">
            <ImagePlaceholder label="Imagen pendiente" className="size-full" />
          </button>
        ) : (
          <div
            ref={track}
            role="region"
            tabIndex={0}
            aria-roledescription="carrusel"
            aria-label={`${labels.region}: ${project.title}`}
            onScroll={onScroll}
            onKeyDown={onKeyDown}
            className="flex snap-x snap-mandatory overflow-x-auto bg-paper focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-navy [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                aria-label={`${labels.openImage} ${i + 1}: ${project.title}`}
                onClick={() => onOpen(i)}
                className="relative aspect-4/3 w-full shrink-0 snap-center cursor-zoom-in"
                tabIndex={-1}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 64rem) 30vw, (min-width: 48rem) 45vw, 100vw"
                  className={fit}
                />
              </button>
            ))}
          </div>
        )}

        <span className="pointer-events-none absolute top-0 left-0 bg-white px-3 py-1.5 text-xs font-semibold uppercase leading-body text-navy">
          {project.serviceLabel}
        </span>

        {images.length > 1 ? (
          <>
            <button type="button" aria-label={labels.prev} disabled={current === 0} onClick={() => goTo(current - 1)} className={cn(control, "left-3")}>
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 rotate-180">
                <path d={arrow} />
              </svg>
            </button>
            <button type="button" aria-label={labels.next} disabled={current === last} onClick={() => goTo(current + 1)} className={cn(control, "right-3")}>
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d={arrow} />
              </svg>
            </button>
            <div aria-hidden="true" className="pointer-events-none absolute right-0 bottom-3 left-0 flex justify-center gap-2">
              {images.map((img, i) => (
                <span key={img.src} className={cn("size-1.5 transition-colors duration-300", i === current ? "bg-navy" : "bg-navy/30")} />
              ))}
            </div>
          </>
        ) : null}
      </div>

      <button
        type="button"
        onClick={() => onOpen()}
        className="group flex flex-1 flex-col gap-3 border-b border-line py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
      >
        <span className="text-xs font-semibold leading-body text-muted">[{String(index + 1).padStart(2, "0")}]</span>
        <span className="text-xl font-semibold leading-subheading text-heading md:text-2xl">{project.title}</span>
        {project.client ? <span className="text-base leading-body text-body">{project.client}</span> : null}
        {project.highlight ? (
          <span className="text-sm font-semibold leading-body text-navy">{project.highlight}</span>
        ) : null}
        <span className="mt-auto inline-flex items-center pt-3 text-base font-semibold leading-body text-navy">
          {labels.open}
          <ArrowIcon className="ml-3 transition-transform duration-300 ease-brand group-hover:translate-x-1" />
        </span>
      </button>
    </li>
  );
}
