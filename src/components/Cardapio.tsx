const CATEGORIAS = [
  {
    nome: "Molhos e Temperos",
    desc: "Aquele toque especial no seu prato",
    gradient: "linear-gradient(135deg, #8c3a3d 0%, #4a0e15 100%)",
  },
  {
    nome: "Porções Extras",
    desc: "Reforce seu pedido com mais acompanhamento",
    gradient: "linear-gradient(135deg, #5D0018 0%, #3D0713 100%)",
  },
  {
    nome: "Bebidas",
    desc: "Para acompanhar sua refeição",
    gradient: "linear-gradient(135deg, #d91e2b 0%, #a81824 100%)",
  },
];

export default function Cardapio() {
  return (
    <section id="cardapio" className="py-24 bg-manzi-white-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-manzi-red text-xs font-bold uppercase tracking-[0.35em] mb-4">
            Cardápio
          </p>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(32px,4.5vw,52px)", lineHeight: 1.05 }}
          >
            Conheça nossos adicionais
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIAS.map((cat) => (
            <div
              key={cat.nome}
              className="relative rounded-2xl overflow-hidden aspect-[3/4] flex items-end p-6"
              style={{ background: cat.gradient }}
            >
              <div>
                <h3 className="font-display font-bold text-manzi-white text-2xl mb-2">
                  {cat.nome}
                </h3>
                <p className="text-manzi-white/70 text-sm">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#filosofia"
            className="inline-flex font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full text-manzi-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #3D0713, #5D0018)" }}
          >
            Ver cardápio completo
          </a>
        </div>
      </div>
    </section>
  );
}
