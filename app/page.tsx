import { Header } from "@/components/layout/Header";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { ClientsStrip } from "@/components/sections/ClientsStrip";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ClientsStrip />
        <About />
        <Services />
        {/* TEMPORAL: bloques para probar el scroll. Se reemplazan en las fases siguientes. */}
        <section id="contacto" className="h-screen bg-navy" />
      </main>
      <WhatsAppFloat />
    </>
  );
}
