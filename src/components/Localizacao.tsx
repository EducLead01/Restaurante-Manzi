const HORARIOS = [
  { dia: "Terça a Sexta", hora: "18h às 23h" },
  { dia: "Sábado", hora: "12h às 23h" },
  { dia: "Domingo", hora: "12h às 17h" },
  { dia: "Segunda", hora: "Fechado" },
];

export default function Localizacao() {
  return (
    <section id="localizacao" className="py-24 bg-manzi-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* TODO: substituir por embed de mapa real (Google Maps) */}
          <div
            className="rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #ece0cd 0%, #d9c4a3 100%)" }}
          >
            <span className="text-black/40 text-sm font-bold uppercase tracking-widest">
              Mapa em breve
            </span>
          </div>

          <div>
            <p className="text-manzi-gold text-xs font-bold uppercase tracking-[0.35em] mb-4">
              Onde estamos
            </p>
            <h2
              className="font-display font-bold mb-8"
              style={{ fontSize: "clamp(32px,4vw,48px)", lineHeight: 1.1 }}
            >
              Localização &amp; horário
            </h2>

            <div className="mb-8">
              <h3 className="font-bold text-sm uppercase tracking-wider text-manzi-ink/60 mb-2">
                Endereço
              </h3>
              <p className="text-black/70" style={{ fontSize: 17 }}>
                [Rua, número, bairro — Cidade/UF]
              </p>
            </div>

            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider text-manzi-ink/60 mb-3">
                Horário de funcionamento
              </h3>
              <div className="flex flex-col gap-2">
                {HORARIOS.map((h) => (
                  <div key={h.dia} className="flex justify-between max-w-xs text-black/70" style={{ fontSize: 15 }}>
                    <span>{h.dia}</span>
                    <span className="font-bold">{h.hora}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
