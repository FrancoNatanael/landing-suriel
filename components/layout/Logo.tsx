import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Carga inmediata: solo para el logo del header, que se ve en la primera pantalla. */
  priority?: boolean;
};

/** Logo oscuro. Sobre fondo oscuro, pasar `brightness-0 invert`; sobre fondo claro, `brightness-0`. */
export function Logo({ className, priority }: LogoProps) {
  return (
    <Image
      src="/logos/logo-suriel.svg"
      alt="SURIEL Ingeniería y Servicios"
      width={152}
      height={56}
      unoptimized
      priority={priority}
      className={cn("h-14 w-38 object-contain object-left", className)}
    />
  );
}
