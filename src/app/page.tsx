import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Cardapio from "@/components/Cardapio";
import Filosofia from "@/components/Filosofia";
import Experiencia from "@/components/Experiencia";
import Diferenciais from "@/components/Diferenciais";
import Identidade from "@/components/Identidade";
import Novidades from "@/components/Novidades";
import Galeria from "@/components/Galeria";
import Localizacao from "@/components/Localizacao";
import Reservas from "@/components/Reservas";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Filosofia />
        <Cardapio />
        <Experiencia />
        <Diferenciais />
        <Identidade />
        <Novidades />
        <Galeria />
        <Localizacao />
        <Reservas />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
