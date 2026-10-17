import { contact } from "@/content/contact";
import { site, siteUrl } from "@/content/site";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Sectors } from "@/components/sections/Sectors";
import { Gestion } from "@/components/sections/Gestion";
import { Ingenieria } from "@/components/sections/Ingenieria";
import { Inspeccion } from "@/components/sections/Inspeccion";
import { Outsourcing } from "@/components/sections/Outsourcing";
import { ServicesBand } from "@/components/sections/ServicesBand";
import { ClientsStrip } from "@/components/sections/ClientsStrip";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: siteUrl,
  logo: `${siteUrl}/logos/logo-suriel.svg`,
  description: site.description,
  foundingDate: site.foundingDate,
  email: contact.email,
  telephone: "+5491163672440",
  sameAs: [contact.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <RevealObserver />
      <Header />
      <main className="flex-1">
        <Hero />
        <ClientsStrip />
        <About />
        <ServicesBand />
        <Ingenieria />
        <Inspeccion />
        <Gestion />
        <Outsourcing />
        <Sectors />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
