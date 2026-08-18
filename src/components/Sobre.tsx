export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-manzi-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-manzi-gold text-xs font-bold uppercase tracking-[0.35em] mb-4">
              Nossa história
            </p>
            <h2
              className="font-display font-bold mb-6"
              style={{ fontSize: "clamp(32px,4vw,48px)", lineHeight: 1.1 }}
            >
              Um novo endereço<br />para a boa mesa.
            </h2>
            <p className="text-black/65 font-light leading-relaxed mb-4" style={{ fontSize: 18 }}>
              [Texto de apresentação do Manzi: conte a origem do restaurante, quem
              está por trás da cozinha e o que torna a experiência única.]
            </p>
            <p className="text-black/65 font-light leading-relaxed mb-4" style={{ fontSize: 18 }}>
              [Fale sobre os ingredientes, o método de preparo — carnes na brasa,
              produtores locais, receitas autorais — e o cuidado em cada prato
              que sai da cozinha.]
            </p>
            <p className="text-black/65 font-light leading-relaxed" style={{ fontSize: 18 }}>
              [Descreva o ambiente: decoração, atmosfera, para quais ocasiões o
              Manzi é o lugar certo.]
            </p>
          </div>

          {/* TODO: substituir por foto real do salão/prato assinatura */}
          <div
            className="rounded-2xl overflow-hidden aspect-[4/3]"
            style={{
              background: "linear-gradient(135deg, #ece0cd 0%, #d9c4a3 100%)",
              border: "1px solid rgba(28,23,18,0.1)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
