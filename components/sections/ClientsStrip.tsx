import { clients } from "@/content/es";

export function ClientsStrip() {
  return (
    <section
      aria-label={clients.label}
      className="border-b border-line bg-navy px-6 py-10 md:px-8 md:py-12 lg:px-10"
    >
      <div className="reveal mx-auto flex max-w-360 flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
        <p className="shrink-0 text-base leading-body text-navy-soft lg:w-58">
          {clients.label}
        </p>

        <div className="mask-marquee min-w-0 flex-1 overflow-hidden motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
          <div className="flex w-max animate-marquee motion-reduce:animate-none">
            {[0, 1, 2, 3].map((group) => (
              <ul
                key={group}
                aria-hidden={group > 0}
                className={
                  group > 0
                    ? "flex shrink-0 gap-12 pr-12 motion-reduce:hidden"
                    : "flex shrink-0 gap-12 pr-12"
                }
              >
                {clients.names.map((name) => (
                  <li
                    key={name}
                    className="shrink-0 whitespace-nowrap text-lg font-semibold uppercase leading-body text-white/80"
                  >
                    {name}
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
