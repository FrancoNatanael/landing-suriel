import { Header } from "@/components/layout/Header";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* TEMPORAL (fase 3): bloques para probar el header. Se reemplazan por el Hero en la fase 4. */}
        <section id="inicio" className="h-svh min-h-160 bg-hero-base" />
        <section id="nosotros" className="h-screen bg-white" />
        <section id="contacto" className="h-screen bg-navy" />
      </main>
      <WhatsAppFloat />
    </>
  );
}
