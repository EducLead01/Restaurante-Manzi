import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Cardapio from "@/components/Cardapio";
import Diferenciais from "@/components/Diferenciais";
import Estatisticas from "@/components/Estatisticas";
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
        <Sobre />
        <Cardapio />
        <Diferenciais />
        <Estatisticas />
        <Localizacao />
        <Reservas />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
