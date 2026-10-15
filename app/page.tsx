import { Header } from "@/components/layout/Header";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { ClientsStrip } from "@/components/sections/ClientsStrip";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ClientsStrip />
        {/* TEMPORAL: bloques para probar el scroll. Se reemplazan en las fases siguientes. */}
        <section id="nosotros" className="h-screen bg-white" />
        <section id="contacto" className="h-screen bg-navy" />
      </main>
      <WhatsAppFloat />
    </>
  );
}
