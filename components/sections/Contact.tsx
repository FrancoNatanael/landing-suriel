import { ContactForm } from "@/components/blocks/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Value } from "@/components/ui/Value";
import { channels } from "@/content/contact";
import { contactSection } from "@/content/es";

export function Contact() {
  return (
    <section
      id="contacto"
      className="bg-navy px-6 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-360">
        <SectionHeader
          className="reveal"
          tone="dark"
          eyebrow={contactSection.eyebrow}
          title={contactSection.title}
          intro={contactSection.intro}
        />

        <div className="grid gap-12 md:gap-20 lg:grid-cols-2 lg:items-start lg:gap-32">
          <ul className="reveal self-start border-t border-white/50">
            {channels.map((channel) => (
              <li key={channel.label} className="border-b border-white/28">
                <a
                  href={channel.href}
                  className="flex items-center justify-between gap-6 py-5 text-white hover:underline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white"
                >
                  <span className="text-xs font-semibold uppercase leading-body text-navy-soft">
                    {channel.label}
                  </span>
                  <span className="text-base leading-body">
                    <Value text={channel.value} />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
