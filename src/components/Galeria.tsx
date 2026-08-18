const TONS_A = ["#2a2119", "#1c1712", "#7a2331", "#4a1520", "#2a2119", "#1c1712", "#7a2331", "#4a1520"];
const TONS_B = ["#b8863b", "#8a641f", "#5b6b4f", "#3d4a35", "#b8863b", "#8a641f", "#5b6b4f", "#3d4a35"];

function Coluna({ tons, className }: { tons: string[]; className: string }) {
  return (
    <div className="flex-1 overflow-hidden">
      <div className={`${className} flex flex-col gap-3`}>
        {tons.map((cor, i) => (
          <div key={i} className="w-full rounded-xl" style={{ height: 200, background: cor }} />
        ))}
      </div>
    </div>
  );
}

export default function Galeria() {
  return (
    <section id="galeria" className="py-24 bg-manzi-cream-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* TODO: substituir os blocos de cor por fotos reais do restaurante */}
          <div className="flex gap-4 overflow-hidden rounded-2xl" style={{ height: 480 }} aria-hidden="true">
            <Coluna tons={TONS_A} className="track-up" />
            <Coluna tons={TONS_B} className="track-down" />
          </div>

          <div>
            <h2
              className="font-display font-bold mb-6"
              style={{ fontSize: "clamp(32px,4vw,48px)", lineHeight: 1.1 }}
            >
              Momentos para<br />compartilhar para sempre.
            </h2>
            <p className="text-black/65 font-light leading-relaxed mb-8" style={{ fontSize: 18 }}>
              Acompanhe os bastidores, os pratos e os momentos do Manzi nas redes sociais.
            </p>
            <a
              href="#reservas"
              className="inline-flex items-center justify-center gap-2 font-black text-sm px-7 py-4 rounded-xl text-manzi-cream transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #1c1712, #2a2119)" }}
            >
              Reserve sua visita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
