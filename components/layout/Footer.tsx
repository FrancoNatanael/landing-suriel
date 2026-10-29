import { Brand } from "@/components/ui/Brand";
import { ChannelIcon } from "@/components/ui/ChannelIcon";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Value } from "@/components/ui/Value";
import { channels } from "@/content/contact";
import { footer, header, navFull } from "@/content/es";
import { Logo } from "./Logo";

const link =
  "transition-colors duration-300 hover:underline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white";

export function Footer() {
  return (
    <footer className="bg-navy px-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-360 border-t border-white/50 pt-16 md:pt-20 lg:pt-24">
        <div className="reveal grid gap-12 border-b border-white/28 pb-12 md:grid-cols-2 md:gap-x-20 md:pb-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-x-32 lg:pb-20">
          <div className="md:col-span-2 lg:col-span-1">
            <a
              href={header.home}
              className="inline-block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Logo className="brightness-0 invert" />
            </a>
            <p className="mt-6 max-w-96 text-base leading-body text-navy-soft">
              {footer.tagline}
            </p>
          </div>

          <nav aria-label={footer.navLabel}>
            <Eyebrow tone="white" className="mb-6">
              {footer.navLabel}
            </Eyebrow>
            <ul className="border-t border-white/50">
              {navFull.map((item) => (
                <li key={item.href} className="border-b border-white/28">
                  <a
                    href={item.href}
                    className={`block py-3 text-base leading-body text-white ${link}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <Eyebrow tone="white" className="mb-6">
              {footer.contactLabel}
            </Eyebrow>
            <ul className="border-t border-white/50">
              {channels.map((channel) => {
                const content = (
                  <>
                    <span className="flex shrink-0 items-center gap-3 text-navy-soft">
                      <ChannelIcon name={channel.icon} className="size-5 shrink-0" />
                      {channel.label}
                    </span>
                    <span className="text-right">
                      <Value text={channel.value} />
                    </span>
                  </>
                );
                const row = "flex items-center justify-between gap-6 py-3 text-base leading-body text-white";
                return (
                  <li key={channel.label} className="border-b border-white/28">
                    {channel.href ? (
                      <a
                        href={channel.href}
                        {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className={`${row} ${link}`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className={row}>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <p className="py-8 text-sm leading-body text-navy-soft"><Brand text={footer.copyright} /></p>
      </div>
    </footer>
  );
}
