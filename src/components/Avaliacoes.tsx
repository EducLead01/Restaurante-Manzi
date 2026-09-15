// TODO: integrar com a API do Google Places (Place Details) para puxar nota,
// contagem e avaliações reais do Google Meu Negócio do Manzi. Precisa de:
// 1) uma API key do Google Cloud com Places API habilitada
// 2) o Place ID do restaurante
// Até lá, os dados abaixo são placeholder.

const NOTA = 4.8;
const TOTAL_AVALIACOES = 0; // placeholder
const GOOGLE_MAPS_URL = "#"; // TODO: link do perfil do Manzi no Google Maps

const DEPOIMENTOS = [
  {
    nome: "[Nome do cliente]",
    texto: "[Depoimento real do Google vai aparecer aqui após a integração.]",
  },
  {
    nome: "[Nome do cliente]",
    texto: "[Depoimento real do Google vai aparecer aqui após a integração.]",
  },
  {
    nome: "[Nome do cliente]",
    texto: "[Depoimento real do Google vai aparecer aqui após a integração.]",
  },
];

function Estrelas({ nota }: { nota: number }) {
  return (
    <div className="flex gap-1" aria-label={`Nota ${nota} de 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="20"
          height="20"
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

export default function Avaliacoes() {
  return (
    <section id="avaliacoes" className="py-24 bg-manzi-white-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-manzi-red text-xs font-bold uppercase tracking-[0.35em] mb-4">
            Avaliações
          </p>
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(28px,4vw,44px)", lineHeight: 1.1 }}
          >
            O que dizem sobre o Manzi
          </h2>

          <div className="flex flex-col items-center gap-2 mt-6">
            <Estrelas nota={NOTA} />
            <p className="text-manzi-black/70 text-sm">
              {NOTA} de 5 · {TOTAL_AVALIACOES} avaliações no Google
            </p>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 font-bold text-xs uppercase tracking-wider text-manzi-black underline underline-offset-4"
            >
              Ver todas as avaliações no Google
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DEPOIMENTOS.map((d, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 bg-manzi-white"
              style={{ border: "1px solid rgba(61,7,19,0.1)" }}
            >
              <Estrelas nota={5} />
              <p className="text-manzi-black/75 mt-4" style={{ fontSize: 14, lineHeight: 1.6 }}>
                {d.texto}
              </p>
              <p className="font-bold text-manzi-black mt-4" style={{ fontSize: 13 }}>
                {d.nome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
