"use client";

import { useState } from "react";

const PILARES = [
  {
    titulo: "Ingredientes Selecionados",
    texto:
      "Trabalhamos com fornecedores escolhidos a dedo, priorizando frescor e procedência em cada item do cardápio.",
  },
  {
    titulo: "Brasa e Técnica",
    texto:
      "Cortes preparados com tempo e precisão, valorizando o sabor natural de cada ingrediente.",
  },
  {
    titulo: "Hospitalidade Genuína",
    texto:
      "Cada cliente é recebido como convidado de honra — atenção de perto, do primeiro ao último minuto.",
  },
  {
    titulo: "Harmonização Perfeita",
    texto:
      "Vinhos e drinks selecionados para elevar cada prato e completar a experiência à mesa.",
  },
  {
    titulo: "Sazonalidade",
    texto:
      "Cardápio que acompanha as estações, sempre com o que há de melhor em cada época do ano.",
  },
  {
    titulo: "Experiência Completa",
    texto:
      "Do ambiente ao atendimento, cada detalhe é pensado para tornar a visita memorável.",
  },
];

export default function Filosofia() {
  const [idx, setIdx] = useState(0);

  return (
    <section id="filosofia" className="py-24 bg-manzi-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            className="font-display font-bold text-manzi-ink"
            style={{ fontSize: "clamp(28px,4vw,44px)", lineHeight: 1.1 }}
          >
            Nossa Filosofia
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-manzi-ink/60" style={{ fontSize: 16, lineHeight: 1.6 }}>
            Os pilares que guiam cada prato que sai da nossa cozinha.
          </p>
        </div>

        <div className="pilares-grid" style={{ display: "grid", gap: "2rem", alignItems: "start" }}>
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

          <div className="relative" style={{ minHeight: 340 }}>
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
              <h3
                className="font-display font-black text-manzi-ink"
                style={{ fontSize: "clamp(22px,2.6vw,30px)", lineHeight: 1.15 }}
              >
                {PILARES[idx].titulo}
              </h3>
              <p className="mt-4 text-manzi-ink/75" style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 520 }}>
                {PILARES[idx].texto}
              </p>
              <a
                href="#reservas"
                className="font-bold text-xs uppercase tracking-wider inline-block mt-8 rounded-full text-manzi-cream"
                style={{ background: "linear-gradient(135deg, #1c1712, #2a2119)", padding: "12px 26px" }}
              >
                Reserve sua mesa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
