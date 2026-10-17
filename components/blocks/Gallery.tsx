"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Img } from "@/content/es";
import { cn } from "@/lib/utils";

const text = {
  region: "Galería de imágenes",
  prev: "Imagen anterior",
  next: "Imagen siguiente",
  thumb: (n: number) => `Ver imagen ${n}`,
} as const;

const arrow = "M5 12h14M13 6l6 6-6 6";

/**
 * Galería con desplazamiento por scroll-snap: se desliza con el dedo, se recorre con
 * las flechas del teclado y con los botones, y tiene miniaturas.
 */
export function Gallery({ images, title }: { images: readonly Img[]; title: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const last = images.length - 1;

  const goTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    const next = Math.min(last, Math.max(0, i));
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    setIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(index - 1);
    }
  };

  const control =
    "absolute top-1/2 flex size-12 -translate-y-1/2 items-center justify-center bg-white text-navy transition-opacity duration-300 hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy disabled:pointer-events-none disabled:opacity-0";

  return (
    <div>
      <div className="relative">
        <div
          ref={track}
          role="region"
          tabIndex={0}
          aria-roledescription="carrusel"
          aria-label={`${text.region}: ${title}`}
          onScroll={onScroll}
          onKeyDown={onKeyDown}
          className="flex snap-x snap-mandatory overflow-x-auto bg-paper focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-navy [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((img, i) => (
            <div key={img.src} className="relative aspect-4/3 w-full shrink-0 snap-center">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 64rem) 55vw, 100vw"
                className="object-contain"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {images.length > 1 ? (
          <>
            <button type="button" aria-label={text.prev} disabled={index === 0} onClick={() => goTo(index - 1)} className={cn(control, "left-3")}>
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 rotate-180">
                <path d={arrow} />
              </svg>
            </button>
            <button type="button" aria-label={text.next} disabled={index === last} onClick={() => goTo(index + 1)} className={cn(control, "right-3")}>
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d={arrow} />
              </svg>
            </button>
          </>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div className="mt-4 flex items-center justify-between gap-4">
          <ul className="flex gap-2">
            {images.map((img, i) => (
              <li key={img.src}>
                <button
                  type="button"
                  aria-label={text.thumb(i + 1)}
                  aria-current={i === index}
                  onClick={() => goTo(i)}
                  className={cn(
                    "relative block aspect-4/3 w-14 overflow-hidden bg-paper outline-offset-2 transition-opacity duration-300 focus-visible:outline-2 focus-visible:outline-navy md:w-16",
                    i === index ? "opacity-100 outline-2 outline-navy" : "opacity-60 hover:opacity-100",
                  )}
                >
                  <Image src={img.src} alt="" fill sizes="4rem" className="object-cover" />
                </button>
              </li>
            ))}
          </ul>
          <p aria-live="polite" className="shrink-0 whitespace-nowrap text-xs leading-body text-muted">
            {index + 1} / {images.length}
          </p>
        </div>
      ) : null}
    </div>
  );
}
