const CATEGORIAS = [
  {
    nome: "Entradas",
    desc: "Para abrir o apetite",
    gradient: "linear-gradient(135deg, #7a2331 0%, #4a1520 100%)",
  },
  {
    nome: "Pratos Principais",
    desc: "Carnes na brasa e criações autorais",
    gradient: "linear-gradient(135deg, #2a2119 0%, #1c1712 100%)",
  },
  {
    nome: "Sobremesas",
    desc: "O ponto final perfeito",
    gradient: "linear-gradient(135deg, #b8863b 0%, #8a641f 100%)",
  },
];

export default function Cardapio() {
  return (
    <section id="cardapio" className="py-24 bg-manzi-cream-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-manzi-gold text-xs font-bold uppercase tracking-[0.35em] mb-4">
            Cardápio
          </p>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(32px,4.5vw,52px)", lineHeight: 1.05 }}
          >
            Destaques da casa
          </h2>
          <p className="text-black/65 font-light" style={{ fontSize: 18 }}>
            [Substitua pelos pratos e categorias reais do cardápio do Manzi]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIAS.map((cat) => (
            <div
              key={cat.nome}
              className="relative rounded-2xl overflow-hidden aspect-[3/4] flex items-end p-6"
              style={{ background: cat.gradient }}
            >
              <div>
                <h3 className="font-display font-bold text-manzi-cream text-2xl mb-2">
                  {cat.nome}
                </h3>
                <p className="text-manzi-cream/70 text-sm">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#reservas"
            className="inline-flex font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full text-manzi-cream transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #1c1712, #2a2119)" }}
          >
            Ver cardápio completo
          </a>
        </div>
      </div>
    </section>
  );
}
