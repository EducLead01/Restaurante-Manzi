"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  { legenda: "Prato Executivo", imagem: "/DSC_0593.webp" },
  { legenda: "Petisco da Casa", imagem: "/DSC_0635.webp" },
  { legenda: "Recheio na Medida", imagem: "/DSC_0659.webp" },
  { legenda: "Sopa da Casa", imagem: "/DSC_0720.webp" },
];

const STATS = [
  { valor: "4.9★", texto: "Avaliação média dos clientes" },
  { valor: "10+", texto: "Anos de tradição em alta gastronomia" },
  { valor: "100%", texto: "Ingredientes selecionados diariamente" },
];

export default function Experiencia() {
  const [idx, setIdx] = useState(0);
  const n = SLIDES.length;

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % n), 6000);
    return () => clearInterval(id);
  }, [n]);

  return (
    <section className="relative bg-manzi-white-2">
      <div className="text-center pt-20 pb-10 px-4">
        <h2
          className="font-display font-bold text-manzi-black"
          style={{ fontSize: "clamp(28px,4vw,44px)", lineHeight: 1.1 }}
        >
          Conheça nosso cardápio além dos executivos
        </h2>
      </div>

      <div className="relative overflow-hidden" style={{ height: "60vh", minHeight: 380, maxHeight: 560 }}>
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ width: `${n * 100}%`, transform: `translateX(-${idx * (100 / n)}%)` }}
        >
          {SLIDES.map((slide, i) => (
            <div key={slide.legenda} className="h-full relative" style={{ width: `${100 / n}%` }}>
              <Image
                src={slide.imagem}
                alt={slide.legenda}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,8,6,0.5) 0%, rgba(10,8,6,0.05) 55%, rgba(10,8,6,0.15) 100%)",
                }}
              />
            </div>
          ))}
        </div>

        <button
          aria-label="Anterior"
          onClick={() => setIdx((i) => (i - 1 + n) % n)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer text-white"
          style={{ background: "rgba(10,8,6,0.5)", border: "1px solid rgba(255,255,255,0.15)" }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          aria-label="Próximo"
          onClick={() => setIdx((i) => (i + 1) % n)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer text-white"
          style={{ background: "rgba(10,8,6,0.5)", border: "1px solid rgba(255,255,255,0.15)" }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.legenda}
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => setIdx(i)}
              className="rounded-full transition-all"
              style={{
                width: i === idx ? 20 : 8,
                height: 8,
                background: i === idx ? "var(--color-manzi-red)" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ marginTop: -36, zIndex: 20 }}>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 rounded-2xl overflow-hidden bg-manzi-white"
          style={{ border: "1px solid rgba(61,7,19,0.1)" }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.texto}
              className={`py-7 px-6 text-center ${
                i < STATS.length - 1 ? "border-b sm:border-b-0 sm:border-r border-black/10" : ""
              }`}
            >
              <p className="font-display font-bold text-manzi-red" style={{ fontSize: 22 }}>
                {stat.valor}
              </p>
              <p className="text-black/60 text-xs mt-2 leading-relaxed">{stat.texto}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pb-16" />
    </section>
  );
}
