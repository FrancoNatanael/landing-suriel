"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { Img } from "@/content/es";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 5000;
const arrow = "M5 12h14M13 6l6 6-6 6";

const MOTION = "(prefers-reduced-motion: reduce)";
const subscribeMotion = (cb: () => void) => {
  const mq = window.matchMedia(MOTION);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

type Props = { images: readonly Img[]; label: string };

/**
 * Foto principal de Fabricación y montaje: avanza sola cada 5 segundos y también
 * con flechas, puntos y teclado. Se detiene con el mouse encima, con el foco dentro
 * o si la persona pidió menos movimiento.
 */
export function FabricacionSlider({ images, label }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useSyncExternalStore(subscribeMotion, () => window.matchMedia(MOTION).matches, () => true);
  const last = images.length - 1;
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setInterval(() => setIndex((i) => (i >= last ? 0 : i + 1)), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, reduced, last, index]);

  const go = (i: number) => setIndex(i < 0 ? last : i > last ? 0 : i);

  const control =
    "absolute top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center bg-white text-navy transition-colors duration-300 hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  return (
    <div
      ref={root}
      role="region"
      tabIndex={0}
      aria-roledescription="carrusel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(index + 1);
        if (e.key === "ArrowLeft") go(index - 1);
      }}
      className="relative aspect-4/3 overflow-hidden bg-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:sticky lg:top-28 lg:aspect-4/5"
    >
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          sizes="(min-width: 64rem) 40vw, 100vw"
          priority={i === 0}
          aria-hidden={i !== index}
          className={cn("object-cover transition-opacity duration-700", i === index ? "opacity-100" : "opacity-0")}
        />
      ))}

      <button type="button" aria-label="Imagen anterior" onClick={() => go(index - 1)} className={cn(control, "left-3")}>
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 rotate-180">
          <path d={arrow} />
        </svg>
      </button>
      <button type="button" aria-label="Imagen siguiente" onClick={() => go(index + 1)} className={cn(control, "right-3")}>
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
          <path d={arrow} />
        </svg>
      </button>

      <p aria-live="off" className="pointer-events-none absolute bottom-3 left-3 bg-white px-3 py-1.5 text-xs font-semibold leading-body text-navy">
        {index + 1} / {images.length}
      </p>
    </div>
  );
}
