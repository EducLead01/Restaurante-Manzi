const ITENS = [
  {
    cor: "var(--color-manzi-red)",
    titulo: "Molho da Casa",
    texto: "Receita exclusiva, o toque especial de cada prato.",
    icone: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12Z" />
      </svg>
    ),
  },
  {
    cor: "var(--color-manzi-marsala)",
    titulo: "Molho Barbecue",
    texto: "Agridoce e defumado, perfeito com carnes na brasa.",
    icone: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1.5-.8-2.5-1.5-3.5" />
        <path d="M9 15a3 3 0 0 0 6 0c0-1.5-1-2.2-1.5-3.5" />
      </svg>
    ),
  },
  {
    cor: "var(--color-manzi-black)",
    titulo: "Farofa Especial",
    texto: "Crocante e feita na hora, para completar o prato.",
    icone: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 11h16l-1.5 8.5a2 2 0 0 1-2 1.5H7.5a2 2 0 0 1-2-1.5Z" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      </svg>
    ),
  },
  {
    cor: "var(--color-manzi-bordo)",
    titulo: "Porção Extra",
    texto: "Reforce seu pedido com mais acompanhamento.",
    icone: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
];

function Card({ item }: { item: (typeof ITENS)[number] }) {
  return (
    <div className="flip-card flex-shrink-0" style={{ height: 260, width: 280 }}>
      <div className="flip-card-inner">
        <div
          className="flip-card-face flex flex-col items-center justify-center text-center px-6 bg-white"
          style={{ border: `1.5px solid ${item.cor}` }}
        >
          <div className="mb-4" style={{ color: item.cor }}>
            {item.icone}
          </div>
          <h3 className="font-bold text-manzi-black" style={{ fontSize: 16 }}>
            {item.titulo}
          </h3>
        </div>
        <div
          className="flip-card-face flip-card-back flex items-center justify-center text-center px-6"
          style={{ background: item.cor }}
        >
          <p className="text-white/90 text-sm leading-relaxed">{item.texto}</p>
        </div>
      </div>
    </div>
  );
}

export default function Diferenciais() {
  const track = [...ITENS, ...ITENS];

  return (
    <section id="diferenciais" className="py-20 overflow-hidden bg-manzi-white marquee-pause">
      <div className="text-center mb-14 px-4">
        <p className="text-manzi-red text-xs font-bold uppercase tracking-[0.35em] mb-4">
          Molhos e Adicionais
        </p>
        <h2 className="font-display font-bold" style={{ fontSize: "clamp(28px,4vw,44px)", lineHeight: 1.1 }}>
          Conheça nossos molhos e adicionais
        </h2>
      </div>

      <div className="marquee-track flex items-stretch gap-6" style={{ width: "max-content" }}>
        {track.map((item, i) => (
          <Card key={`${item.titulo}-${i}`} item={item} />
        ))}
      </div>
    </section>
  );
}
