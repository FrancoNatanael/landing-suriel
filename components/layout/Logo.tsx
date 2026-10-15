import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

/** Logo oscuro. Sobre fondo oscuro, pasar `brightness-0 invert`; sobre fondo claro, `brightness-0`. */
export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/logos/logo-suriel.svg"
      alt="SURIEL Ingeniería y Servicios"
      width={152}
      height={56}
      unoptimized
      className={cn("h-14 w-38 object-contain object-left", className)}
    />
  );
}
