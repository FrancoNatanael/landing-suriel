import { Eyebrow } from "@/components/ui/Eyebrow";
import { Value } from "@/components/ui/Value";
import { channels } from "@/content/contact";
import { footer, header, nav } from "@/content/es";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white px-6 pt-16 md:px-8 md:pt-20 lg:px-10 lg:pt-24">
      <div className="mx-auto max-w-360">
        <div className="reveal grid gap-12 border-b border-line pb-12 md:grid-cols-2 md:gap-x-20 md:pb-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-x-32 lg:pb-20">
          <div className="md:col-span-2 lg:col-span-1">
            <a href={header.home} className="inline-block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy">
              <Logo className="brightness-0" />
            </a>
            <p className="mt-6 max-w-96 text-base leading-body text-body">
              {footer.tagline}
            </p>
          </div>

          <nav aria-label={footer.navLabel}>
            <Eyebrow className="mb-6">{footer.navLabel}</Eyebrow>
            <ul className="border-t border-line">
              {nav.map((item) => (
                <li key={item.href} className="border-b border-paper">
                  <a
                    href={item.href}
                    className="block py-3 text-base leading-body text-heading transition-colors duration-300 hover:text-navy focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-navy"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <Eyebrow className="mb-6">{footer.contactLabel}</Eyebrow>
            <ul className="border-t border-line">
              {channels.map((channel) => (
                <li key={channel.label} className="border-b border-paper">
                  <a
                    href={channel.href}
                    className="flex items-center justify-between gap-6 py-3 text-base leading-body text-heading transition-colors duration-300 hover:text-navy focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-navy"
                  >
                    <span className="text-muted">{channel.label}</span>
                    <span>
                      <Value text={channel.value} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="py-8 text-sm leading-body text-muted">{footer.copyright}</p>
      </div>
    </footer>
  );
}
