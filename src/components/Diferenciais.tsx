const ITENS = [
  {
    cor: "var(--color-manzi-gold)",
    titulo: "Carnes selecionadas",
    texto: "Cortes nobres, maturados e preparados no ponto certo.",
    icone: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
      </svg>
    ),
  },
  {
    cor: "var(--color-manzi-wine)",
    titulo: "Brasa lenta",
    texto: "Técnica e paciência para realçar cada sabor.",
    icone: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1.5-.8-2.5-1.5-3.5" />
        <path d="M9 15a3 3 0 0 0 6 0c0-1.5-1-2.2-1.5-3.5" />
      </svg>
    ),
  },
  {
    cor: "var(--color-manzi-ink)",
    titulo: "Ambiente aconchegante",
    texto: "Espaço pensado para momentos em boa companhia.",
    icone: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5 12 3l9 6.5" />
        <path d="M5 10v10h14V10" />
      </svg>
    ),
  },
  {
    cor: "var(--color-manzi-sage)",
    titulo: "Carta de vinhos",
    texto: "Rótulos selecionados para harmonizar cada prato.",
    icone: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2h8" />
        <path d="M7 2c0 5 0 7 2.5 9S12 13 12 17v5" />
        <path d="M17 2c0 5 0 7-2.5 9" />
        <path d="M8 22h8" />
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
          <h3 className="font-bold text-manzi-ink" style={{ fontSize: 16 }}>
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
    <section id="diferenciais" className="py-20 overflow-hidden bg-manzi-cream marquee-pause">
      <div className="text-center mb-14 px-4">
        <p className="text-manzi-gold text-xs font-bold uppercase tracking-[0.35em] mb-4">
          Diferenciais
        </p>
        <h2 className="font-display font-bold" style={{ fontSize: "clamp(28px,4vw,44px)", lineHeight: 1.1 }}>
          Por que o Manzi
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
