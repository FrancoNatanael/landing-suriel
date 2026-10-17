import { ContactForm } from "@/components/blocks/ContactForm";
import { ChannelIcon } from "@/components/ui/ChannelIcon";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Statement } from "@/components/ui/Statement";
import { Value } from "@/components/ui/Value";
import { channels } from "@/content/contact";
import { contactSection } from "@/content/es";

export function Contact() {
  return (
    <section
      id="contacto"
      className="bg-navy px-6 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto grid max-w-360 gap-x-8 gap-y-12 lg:grid-cols-12 lg:gap-y-16">
        <div className="reveal lg:col-span-3 lg:row-start-1">
          <Eyebrow tone="white">{contactSection.eyebrow}</Eyebrow>
        </div>

        <div className="reveal lg:col-span-9 lg:col-start-4 lg:row-start-1">
          <Statement as="h2" tone="dark">
            {contactSection.title}
          </Statement>
          <p className="mt-8 max-w-3xl text-base leading-body text-navy-soft">{contactSection.intro}</p>
        </div>

        <div className="reveal lg:col-span-9 lg:col-start-4 lg:row-start-2">
          <ContactForm />
        </div>

        <ul className="reveal self-start border-t border-white/50 lg:col-span-3 lg:col-start-1 lg:row-start-2">
          {channels.map((channel) => (
            <li key={channel.label} className="border-b border-white/28">
              <a
                href={channel.href}
                {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex flex-col gap-1 py-4 text-white hover:underline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white"
              >
                <span className="flex items-center gap-3 text-xs font-semibold uppercase leading-body text-navy-soft">
                  <ChannelIcon name={channel.icon} className="size-5 shrink-0" />
                  {channel.label}
                </span>
                <span className="text-base leading-body break-words">
                  <Value text={channel.value} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
