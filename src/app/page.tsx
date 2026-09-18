import Header from "@/components/Header";
import Filosofia from "@/components/Filosofia";
import Experiencia from "@/components/Experiencia";
import Diferenciais from "@/components/Diferenciais";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Filosofia />
        {/* Avaliações: oculta temporariamente, componente mantido para reativar depois */}
        <Experiencia />
        <Diferenciais />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
