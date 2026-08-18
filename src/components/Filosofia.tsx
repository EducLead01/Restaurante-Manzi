"use client";

import { useState } from "react";

const PILARES = [
  {
    titulo: "Executivo de Bife Bovino",
    texto:
      "[Descrição do prato: acompanhamentos, ponto da carne, o que vem no executivo.]",
  },
  {
    titulo: "Carne de Panela",
    texto:
      "[Descrição do prato: modo de preparo, acompanhamentos.]",
  },
  {
    titulo: "Filé de Frango Grelhado",
    texto:
      "[Descrição do prato: tempero, acompanhamentos.]",
  },
  {
    titulo: "Strogonoff de Frango",
    texto:
      "[Descrição do prato: acompanhamentos, porção.]",
  },
  {
    titulo: "Prato do Dia",
    texto:
      "[Descrição: opção que muda diariamente — combine com o cardápio da semana.]",
  },
  {
    titulo: "Tele Entregas",
    texto:
      "Peça pelo telefone ou WhatsApp e receba em casa — entrega grátis em um raio de até 3km do restaurante.",
  },
];

function PainelConteudo({ pilar }: { pilar: (typeof PILARES)[number] }) {
  return (
    <>
      <h3
        className="font-display font-black text-manzi-ink"
        style={{ fontSize: "clamp(22px,2.6vw,30px)", lineHeight: 1.15 }}
      >
        {pilar.titulo}
      </h3>
      <p className="mt-4 text-manzi-ink/75" style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 520 }}>
        {pilar.texto}
      </p>
      <a
        href="#reservas"
        className="font-bold text-xs uppercase tracking-wider inline-block mt-8 rounded-full text-manzi-cream"
        style={{ background: "linear-gradient(135deg, #1c1712, #2a2119)", padding: "12px 26px" }}
      >
        Reserve sua mesa
      </a>
    </>
  );
}

export default function Filosofia() {
  const [idx, setIdx] = useState(0);
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="filosofia" className="py-24 bg-manzi-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            className="font-display font-bold text-manzi-ink"
            style={{ fontSize: "clamp(28px,4vw,44px)", lineHeight: 1.1 }}
          >
            Nosso Cardápio
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-manzi-ink/60" style={{ fontSize: 16, lineHeight: 1.6 }}>
            Os pilares que guiam cada prato que sai da nossa cozinha.
          </p>
        </div>

        {/* Desktop: tabs + painel fixo ao lado */}
        <div
          className="hidden lg:grid pilares-grid"
          style={{ gap: "2rem", alignItems: "start" }}
        >
          <div className="flex flex-col gap-3">
            {PILARES.map((p, i) => (
              <button
                key={p.titulo}
                className={`pilar-tab ${i === idx ? "active" : ""}`}
                onClick={() => setIdx(i)}
              >
                {p.titulo}
              </button>
            ))}
          </div>

          <div className="relative" style={{ minHeight: 340, minWidth: 0 }}>
            <svg
              viewBox="0 0 400 200"
              preserveAspectRatio="none"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.05))",
              }}
            >
              <path
                d="M40,0 L386,0 Q400,0 400,14 L400,186 Q400,200 386,200 L40,200 L0,100 Z"
                fill="var(--color-manzi-cream)"
                stroke="var(--color-manzi-gold-light)"
                strokeWidth={2.5}
              />
            </svg>
            <div style={{ position: "relative", zIndex: 10, padding: "44px 40px 44px 68px" }}>
              <PainelConteudo pilar={PILARES[idx]} />
            </div>
          </div>
        </div>

        {/* Mobile/tablet: acordeão — clicar abre o conteúdo logo abaixo do próprio item */}
        <div className="lg:hidden flex flex-col gap-3">
          {PILARES.map((p, i) => (
            <div key={p.titulo}>
              <button
                className={`pilar-tab w-full ${i === openIdx ? "active" : ""}`}
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              >
                {p.titulo}
              </button>
              {openIdx === i && (
                <div
                  className="rounded-2xl mt-3 px-6 py-7"
                  style={{ background: "#fff", border: "1.5px solid var(--color-manzi-gold-light)" }}
                >
                  <PainelConteudo pilar={p} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
