import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Sectors } from "@/components/sections/Sectors";
import { Services } from "@/components/sections/Services";
import { ClientsStrip } from "@/components/sections/ClientsStrip";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Header />
      <main className="flex-1">
        <Hero />
        <ClientsStrip />
        <About />
        <Services />
        <Sectors />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
