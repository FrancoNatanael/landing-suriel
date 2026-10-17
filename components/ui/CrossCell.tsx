import { cn } from "@/lib/utils";

/**
 * Celda translúcida con marcas de cruz en las esquinas (estilo plano técnico).
 * Pensada para ir sobre una foto oscura: cifras de Nosotros.
 */
export function CrossCell({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("cross-corners relative bg-white/8 text-white", className)}>
      {children}
    </div>
  );
}
