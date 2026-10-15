import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { sectors } from "@/content/es";

export function Sectors() {
  return (
    <section
      id="industrias"
      className="overflow-hidden bg-navy px-6 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-360">
        <SectionHeader
          className="reveal"
          tone="dark"
          eyebrow={sectors.eyebrow}
          title={sectors.title}
          intro={sectors.intro}
        />

        <ul className="reveal border-t border-white/50">
          {sectors.items.map((name, i) => (
            <li
              key={name}
              className="group relative flex items-center justify-between gap-4 border-b border-white/28 py-5 transition-colors duration-300 md:py-6 lg:px-4 lg:py-8 lg:hover:bg-white/8"
            >
              <div className="grid grid-cols-[3.5rem_1fr] items-center">
                <span className="text-xl leading-body text-navy-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xl font-semibold leading-body text-white md:text-2xl lg:text-3xl">
                  {name}
                </span>
              </div>
              {sectors.thumbs[i] ? (
                <div
                  aria-hidden="true"
                  className="sector-thumb pointer-events-none relative aspect-16/10 w-36 shrink-0 overflow-hidden md:w-48 lg:absolute lg:top-1/2 lg:right-4 lg:w-56 lg:-translate-y-1/2 lg:translate-x-6 lg:scale-90 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:scale-100 lg:group-hover:-rotate-2 lg:group-hover:opacity-100"
                >
                  <Image
                    src={sectors.thumbs[i]}
                    alt=""
                    fill
                    sizes="(min-width: 64rem) 14rem, (min-width: 48rem) 12rem, 9rem"
                    className="object-cover"
                  />
                </div>
              ) : (
                <ImagePlaceholder
                  label={sectors.thumbLabel}
                  className="sector-thumb pointer-events-none aspect-16/10 w-36 shrink-0 p-1 text-xs md:w-48 lg:absolute lg:top-1/2 lg:right-4 lg:w-56 lg:-translate-y-1/2 lg:translate-x-6 lg:scale-90 lg:p-2 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:scale-100 lg:group-hover:-rotate-2 lg:group-hover:opacity-100"
                />
              )}
            </li>
          ))}
        </ul>

        <a
          href={sectors.link.href}
          className="mt-12 inline-block border-b border-white pb-1 text-base leading-body text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {sectors.link.label}
        </a>
      </div>
    </section>
  );
}
