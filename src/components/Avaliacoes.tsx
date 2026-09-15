// TODO: integrar com a API do Google Places (Place Details) para puxar nota,
// contagem e avaliações reais do Google Meu Negócio do Manzi. Precisa de:
// 1) uma API key do Google Cloud com Places API habilitada
// 2) o Place ID do restaurante
// Até lá, os dados abaixo são placeholder.

const NOTA = 4.8;
const TOTAL_AVALIACOES = 0; // placeholder
const GOOGLE_MAPS_URL = "#"; // TODO: link do perfil do Manzi no Google Maps

const DEPOIMENTOS_BASE = [
  { nome: "[Nome do cliente]", texto: "[Depoimento real do Google vai aparecer aqui após a integração.]" },
  { nome: "[Nome do cliente]", texto: "[Depoimento real do Google vai aparecer aqui após a integração.]" },
  { nome: "[Nome do cliente]", texto: "[Depoimento real do Google vai aparecer aqui após a integração.]" },
  { nome: "[Nome do cliente]", texto: "[Depoimento real do Google vai aparecer aqui após a integração.]" },
];

const COLUNA_A = [...DEPOIMENTOS_BASE, ...DEPOIMENTOS_BASE];
const COLUNA_B = [...DEPOIMENTOS_BASE.slice().reverse(), ...DEPOIMENTOS_BASE.slice().reverse()];

function Estrelas({ nota, size = 20 }: { nota: number; size?: number }) {
  return (
    <div className="flex gap-1" aria-label={`Nota ${nota} de 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i <= Math.round(nota) ? "var(--color-manzi-red)" : "none"}
          stroke="var(--color-manzi-red)"
          strokeWidth={1.5}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function CartaoDepoimento({ nome, texto }: { nome: string; texto: string }) {
  return (
    <div
      className="w-full rounded-xl p-5 bg-manzi-white flex-shrink-0"
      style={{ height: 200, border: "1px solid rgba(61,7,19,0.1)" }}
    >
      <Estrelas nota={5} size={16} />
      <p className="text-manzi-black/75 mt-3" style={{ fontSize: 13, lineHeight: 1.5 }}>
        {texto}
      </p>
      <p className="font-bold text-manzi-black mt-3" style={{ fontSize: 12 }}>
        {nome}
      </p>
    </div>
  );
}

function Coluna({
  itens,
  className,
}: {
  itens: typeof DEPOIMENTOS_BASE;
  className: string;
}) {
  return (
    <div className="flex-1 overflow-hidden">
      <div className={`${className} flex flex-col gap-3`}>
        {itens.map((d, i) => (
          <CartaoDepoimento key={i} nome={d.nome} texto={d.texto} />
        ))}
      </div>
    </div>
  );
}

export default function Avaliacoes() {
  return (
    <section id="avaliacoes" className="py-24 bg-manzi-white-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex gap-4 overflow-hidden rounded-2xl" style={{ height: 480 }} aria-hidden="true">
            <Coluna itens={COLUNA_A} className="track-up" />
            <Coluna itens={COLUNA_B} className="track-down" />
          </div>

          <div>
            <p className="text-manzi-red text-xs font-bold uppercase tracking-[0.35em] mb-4">
              Avaliações
            </p>
            <h2
              className="font-display font-bold mb-6"
              style={{ fontSize: "clamp(32px,4vw,48px)", lineHeight: 1.1 }}
            >
              O que dizem sobre o Manzi
            </h2>

            <div className="flex items-center gap-3 mb-4">
              <Estrelas nota={NOTA} />
              <span className="text-manzi-black/70 text-sm">
                {NOTA} de 5 · {TOTAL_AVALIACOES} avaliações no Google
              </span>
            </div>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-black text-sm px-7 py-4 rounded-xl text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--color-manzi-red)" }}
            >
              Ver todas as avaliações no Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
