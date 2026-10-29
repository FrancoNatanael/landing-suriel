import Image from "next/image";
import { Brand } from "@/components/ui/Brand";
import { clients } from "@/content/es";

const SECONDS_PER_LOGO = 6;

export function ClientsStrip() {
  return (
    <section
      aria-label={clients.label}
      className="bg-surface px-6 py-10 md:px-8 md:py-12 lg:px-10"
    >
      <div className="reveal mx-auto flex max-w-360 flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
        <p className="shrink-0 text-base font-medium leading-body text-heading lg:w-58">
          <Brand text={clients.label} />
        </p>

        <div className="mask-marquee min-w-0 flex-1 overflow-hidden motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
          <div
            className="flex w-max animate-marquee motion-reduce:animate-none"
            // Misma velocidad con cualquier cantidad de logos: 6 s por logo.
            style={{ animationDuration: `${clients.logos.length * SECONDS_PER_LOGO}s` }}
          >
            {[0, 1, 2, 3].map((group) => (
              <ul
                key={group}
                aria-hidden={group > 0}
                className={
                  group > 0
                    ? "flex shrink-0 gap-16 pr-16 motion-reduce:hidden"
                    : "flex shrink-0 gap-16 pr-16"
                }
              >
                {clients.logos.map((logo) => (
                  <li key={logo.name} className="flex h-14 w-36 shrink-0 items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={group === 0 ? logo.name : ""}
                      width={logo.width}
                      height={logo.height}
                      unoptimized
                      className="h-auto max-h-full w-auto max-w-full object-contain"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
