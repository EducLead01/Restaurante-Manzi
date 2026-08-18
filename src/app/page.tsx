import Header from "@/components/Header";
import Cardapio from "@/components/Cardapio";
import Filosofia from "@/components/Filosofia";
import Experiencia from "@/components/Experiencia";
import Diferenciais from "@/components/Diferenciais";
import Identidade from "@/components/Identidade";
import Novidades from "@/components/Novidades";
import Galeria from "@/components/Galeria";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Filosofia />
        <Identidade />
        <Cardapio />
        <Experiencia />
        <Novidades />
        <Galeria />
        <Diferenciais />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
