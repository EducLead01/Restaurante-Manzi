import Header from "@/components/Header";
import Filosofia from "@/components/Filosofia";
import Experiencia from "@/components/Experiencia";
import Diferenciais from "@/components/Diferenciais";
import Identidade from "@/components/Identidade";
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
        <Experiencia />
        <Galeria />
        <Diferenciais />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
