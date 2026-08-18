"use client";

import { useState } from "react";

const ICONE_TRADICAO = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);
const ICONE_AUTORAL = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.6.65 1.15 1.34 1.4 2.5" />
  </svg>
);
const ICONE_ACONCHEGO = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z" />
  </svg>
);

const IDENTIDADE = [
  {
    label: "Tradição",
    icone: ICONE_TRADICAO,
    itens: [
      {
        titulo: "Receitas preservadas",
        texto: "Técnicas clássicas de preparo, respeitadas geração após geração.",
      },
      {
        titulo: "Qualidade constante",
        texto: "O mesmo padrão de excelência em cada prato que sai da cozinha.",
      },
      {
        titulo: "Relação próxima com os clientes",
        texto: "Uma casa que conhece cada cliente e constrói relações de confiança.",
      },
    ],
  },
  {
    label: "Autoral",
    icone: ICONE_AUTORAL,
    itens: [
      {
        titulo: "Assinatura própria",
        texto: "Criações exclusivas que unem técnica apurada e criatividade.",
      },
      {
        titulo: "Ingredientes de ponta",
        texto: "Seleção cuidadosa de produtores para elevar cada receita.",
      },
      {
        titulo: "Cardápio em constante evolução",
        texto: "Sempre buscando novas combinações sem perder a essência da casa.",
      },
    ],
  },
  {
    label: "Aconchego",
    icone: ICONE_ACONCHEGO,
    itens: [
      {
        titulo: "Ambiente acolhedor",
        texto: "Um espaço pensado para boas conversas e momentos especiais.",
      },
      {
        titulo: "Atendimento atento",
        texto: "Equipe dedicada a tornar cada visita única, do início ao fim.",
      },
      {
        titulo: "Feito para compartilhar",
        texto: "O lugar certo para celebrar, reunir e criar memórias.",
      },
    ],
  },
];

export default function Identidade() {
  const [catIdx, setCatIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  const [openIdx, setOpenIdx] = useState(-1);

  const catAtiva = IDENTIDADE[catIdx];

  return (
    <section id="identidade" className="py-24 bg-manzi-cream-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            className="font-display font-bold text-manzi-ink"
            style={{ fontSize: "clamp(28px,4vw,44px)", lineHeight: 1.1 }}
          >
            Nossa Identidade
          </h2>
          <p className="mt-4 text-manzi-ink/60" style={{ fontSize: 16 }}>
            Nossa essência traduzida em uma equação.
          </p>
        </div>

        {/* Desktop: shields + painel */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-center gap-4 mb-16">
            {IDENTIDADE.map((cat, i) => (
              <div key={cat.label} className="flex items-center gap-4">
                <button
                  className={`identidade-shield font-black text-sm ${i === catIdx ? "active" : ""}`}
                  style={{ width: 190 }}
                  onClick={() => {
                    setCatIdx(i);
                    setSubIdx(0);
                  }}
                >
                  <div className="flex justify-center">{cat.icone}</div>
                  <div className="mt-2">{cat.label}</div>
                </button>
                {i < IDENTIDADE.length - 1 && (
                  <span className="font-black text-manzi-ink" style={{ fontSize: 24 }}>
                    {i === IDENTIDADE.length - 2 ? "=" : "+"}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-12 items-stretch">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "4/3",
                background: "linear-gradient(135deg, #ece0cd 0%, #d9c4a3 100%)",
              }}
            />
            <div className="flex flex-col justify-center gap-2">
              {catAtiva.itens.map((it, i) => (
                <div
                  key={it.titulo}
                  className={`identidade-subitem ${i === subIdx ? "active" : ""}`}
                  onClick={() => setSubIdx(i)}
                >
                  <h4 className="font-black text-manzi-ink" style={{ fontSize: 18 }}>
                    {it.titulo}
                  </h4>
                  <p className="text-manzi-ink/70 mt-1.5" style={{ fontSize: 14, lineHeight: 1.6 }}>
                    {it.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: acordeão */}
        <div className="lg:hidden flex flex-col gap-6">
          {IDENTIDADE.map((cat, i) => (
            <div key={cat.label}>
              {i > 0 && (
                <div className="text-center font-black text-manzi-ink mb-1.5" style={{ fontSize: 20 }}>
                  {i === IDENTIDADE.length - 1 ? "=" : "+"}
                </div>
              )}
              <button
                className="identidade-acc-pill font-black text-sm text-manzi-ink"
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              >
                <span className="text-manzi-wine flex">{cat.icone}</span>
                <span>{cat.label}</span>
                <span className="identidade-acc-toggle">{openIdx === i ? "−" : "+"}</span>
              </button>

              {openIdx === i && (
                <div className="flex flex-col gap-4 mt-4">
                  {cat.itens.map((it) => (
                    <div
                      key={it.titulo}
                      className="rounded-2xl p-5"
                      style={{
                        background: "linear-gradient(135deg, #ece0cd 0%, #d9c4a3 100%)",
                      }}
                    >
                      <h4 className="font-black text-manzi-ink" style={{ fontSize: 17 }}>
                        {it.titulo}
                      </h4>
                      <p className="text-manzi-ink/70 mt-1.5" style={{ fontSize: 13, lineHeight: 1.5 }}>
                        {it.texto}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
