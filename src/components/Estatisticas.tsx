const STATS = [
  { valor: "4.9★", texto: "Avaliação média dos clientes" },
  { valor: "10+", texto: "Anos de tradição em alta gastronomia" },
  { valor: "100%", texto: "Ingredientes selecionados diariamente" },
];

export default function Estatisticas() {
  return (
    <section className="bg-manzi-cream-2 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 sm:grid-cols-3 rounded-2xl overflow-hidden bg-manzi-cream"
          style={{ border: "1px solid rgba(28,23,18,0.1)" }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.texto}
              className={`py-8 px-6 text-center ${
                i < STATS.length - 1 ? "border-b sm:border-b-0 sm:border-r border-black/10" : ""
              }`}
            >
              <p className="font-display font-bold text-manzi-gold" style={{ fontSize: 26 }}>
                {stat.valor}
              </p>
              <p className="text-black/60 text-xs mt-2 leading-relaxed">{stat.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
