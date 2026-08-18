const NOTICIAS = [
  {
    tag: "Eventos",
    titulo: "Noite de degustação harmonizada com vinhos selecionados",
    texto: "Uma noite especial reunindo pratos autorais e rótulos escolhidos a dedo pela nossa equipe.",
    gradient: "linear-gradient(135deg, #2a2119 0%, #1c1712 100%)",
  },
  {
    tag: "Cardápio",
    titulo: "Novos pratos chegam ao cardápio de inverno",
    texto: "Criações autorais pensadas para a estação, com ingredientes selecionados da safra atual.",
    gradient: "linear-gradient(135deg, #7a2331 0%, #4a1520 100%)",
  },
  {
    tag: "Reservas",
    titulo: "Reservas abertas para grupos e ocasiões especiais",
    texto: "Comemore datas importantes no Manzi — espaço reservado e atendimento personalizado.",
    gradient: "linear-gradient(135deg, #b8863b 0%, #8a641f 100%)",
  },
];

export default function Novidades() {
  return (
    <section id="novidades" className="py-24 bg-manzi-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-manzi-gold text-xs font-bold uppercase tracking-[0.35em] mb-4">
            Novidades
          </p>
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(32px,4.5vw,52px)", lineHeight: 1.05 }}
          >
            Fique por dentro
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NOTICIAS.map((n) => (
            <div
              key={n.titulo}
              className="rounded-2xl overflow-hidden bg-white"
              style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}
            >
              <div className="relative" style={{ aspectRatio: "4/3", background: n.gradient }} />
              <div className="p-6">
                <p className="text-manzi-gold text-xs font-black uppercase tracking-widest mb-2">
                  {n.tag}
                </p>
                <h3 className="font-black" style={{ fontSize: 18, lineHeight: 1.3 }}>
                  {n.titulo}
                </h3>
                <p className="text-black/60 font-light mt-3" style={{ fontSize: 14, lineHeight: 1.6 }}>
                  {n.texto}
                </p>
                <span className="inline-block mt-4 font-black text-xs uppercase tracking-wider text-manzi-ink">
                  Ler mais →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
