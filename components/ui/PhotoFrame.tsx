import Image from "next/image";
import { cn } from "@/lib/utils";

type PhotoFrameProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  /** Clases del contenedor (proporción, ancho, etc.). */
  className?: string;
  imageClassName?: string;
  /** Velo navy sobre la foto. Se desactiva cuando ya hay un degradado encima. */
  veil?: boolean;
};

/**
 * Foto con el tratamiento común de la página: leve desaturación y velo navy.
 * Unifica las fotos de stock, que vienen con cielos y colores muy dispares.
 */
export function PhotoFrame({ src, alt, sizes, priority, className, imageClassName, veil = true }: PhotoFrameProps) {
  return (
    <div className={cn("relative isolate overflow-hidden bg-hero-base", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover saturate-75", imageClassName)}
      />
      {veil ? <div aria-hidden="true" className="absolute inset-0 bg-navy/20 mix-blend-multiply" /> : null}
    </div>
  );
}
