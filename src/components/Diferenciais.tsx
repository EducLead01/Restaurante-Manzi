"use client";

import { useEffect, useRef, useState } from "react";

const ITENS = [
  {
    cor: "var(--color-manzi-red)",
    titulo: "Molho Verde",
    texto: "Fresco e herbáceo, dá leveza a qualquer prato.",
  },
  {
    cor: "var(--color-manzi-marsala)",
    titulo: "Molho de Baconese",
    texto: "Maionese cremosa com bacon crocante, direto pro sabor.",
  },
  {
    cor: "var(--color-manzi-black)",
    titulo: "Adicional de Ovo",
    texto: "Ovo fresquinho para completar o seu prato.",
  },
  {
    cor: "var(--color-manzi-bordo)",
    titulo: "Adicional de Carne",
    texto:
      "Escolha entre carne de panela, bife bovino, filé de frango grelhado ou costelinha suína.",
  },
];

function Card({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof ITENS)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`diferenciais-flip flex-shrink-0 ${isOpen ? "is-open" : ""}`}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-label={item.titulo}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      <div className="diferenciais-flip-inner">
        <div className="diferenciais-card" style={{ border: `1.5px solid ${item.cor}` }}>
          <h3 className="font-bold" style={{ fontSize: 19, color: item.cor }}>
            {item.titulo}
          </h3>
          <span className="diferenciais-hint">Clique para abrir o card</span>
        </div>

        <div className="diferenciais-card-back" style={{ background: item.cor }}>
          <h3 className="font-bold text-white" style={{ fontSize: 17 }}>
            {item.titulo}
          </h3>
          <p className="text-white/85 font-light mt-3" style={{ fontSize: 14, lineHeight: 1.6 }}>
            {item.texto}
          </p>
          <span className="diferenciais-hint-back">Clique para fechar</span>
        </div>
      </div>
    </div>
  );
}

export default function Diferenciais() {
  const track = [...ITENS, ...ITENS];

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const cardAbertoRef = useRef(false);

  useEffect(() => {
    cardAbertoRef.current = openIdx !== null;
  }, [openIdx]);

  useEffect(() => {
    const sec = sectionRef.current;
    const trackEl = trackRef.current;
    const bar = barRef.current;
    const thumb = thumbRef.current;
    if (!sec || !trackEl || !bar || !thumb) return;

    const VELOCIDADE = 34; // px por segundo
    let deslocamento = 0;
    let metade = 0;
    let larguraThumb = 20;
    let ultimo = 0;
    let arrastando = false;
    let sobreposto = false;
    let raf = 0;

    function medir() {
      metade = trackEl!.scrollWidth / 2;
      larguraThumb = Math.max(16, Math.min(50, (sec!.clientWidth / metade) * 100));
      thumb!.style.width = larguraThumb + "%";
    }

    function aplicar() {
      if (metade <= 0) return;
      deslocamento = ((deslocamento % metade) + metade) % metade;
      trackEl!.style.transform = `translateX(${-deslocamento}px)`;
      const p = deslocamento / metade;
      thumb!.style.left = `${p * (100 - larguraThumb)}%`;
      bar!.setAttribute("aria-valuenow", String(Math.round(p * 100)));
    }

    function quadro(t: number) {
      const dt = ultimo ? (t - ultimo) / 1000 : 0;
      ultimo = t;
      if (!cardAbertoRef.current && !arrastando && !sobreposto && dt < 0.5) {
        deslocamento += VELOCIDADE * dt;
        aplicar();
      }
      raf = requestAnimationFrame(quadro);
    }

    function irPara(e: PointerEvent) {
      const r = bar!.getBoundingClientRect();
      const x = Math.min(Math.max(e.clientX - r.left, 0), r.width);
      deslocamento = (x / r.width) * metade;
      aplicar();
    }

    function onPointerDown(e: PointerEvent) {
      arrastando = true;
      bar!.setPointerCapture(e.pointerId);
      irPara(e);
      e.preventDefault();
    }
    function onPointerMove(e: PointerEvent) {
      if (arrastando) irPara(e);
    }
    function onPointerUp() {
      arrastando = false;
    }
    function onMouseEnter() {
      sobreposto = true;
    }
    function onMouseLeave() {
      sobreposto = false;
    }
    function onResize() {
      medir();
      aplicar();
    }

    bar.addEventListener("pointerdown", onPointerDown);
    bar.addEventListener("pointermove", onPointerMove);
    bar.addEventListener("pointerup", onPointerUp);
    bar.addEventListener("pointercancel", onPointerUp);
    sec.addEventListener("mouseenter", onMouseEnter);
    sec.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", onResize);

    medir();
    aplicar();
    raf = requestAnimationFrame(quadro);

    return () => {
      cancelAnimationFrame(raf);
      bar.removeEventListener("pointerdown", onPointerDown);
      bar.removeEventListener("pointermove", onPointerMove);
      bar.removeEventListener("pointerup", onPointerUp);
      bar.removeEventListener("pointercancel", onPointerUp);
      sec.removeEventListener("mouseenter", onMouseEnter);
      sec.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="diferenciais" ref={sectionRef} className="py-20 overflow-hidden bg-manzi-white">
      <div className="text-center mb-14 px-4">
        <p className="text-manzi-red text-xs font-bold uppercase tracking-[0.35em] mb-4">
          Molhos e Adicionais
        </p>
        <h2 className="font-display font-bold" style={{ fontSize: "clamp(28px,4vw,44px)", lineHeight: 1.1 }}>
          Conheça nossos molhos e adicionais
        </h2>
      </div>

      <div
        id="diferenciais-track"
        ref={trackRef}
        className="flex items-stretch gap-6"
        style={{ width: "max-content", willChange: "transform" }}
      >
        {track.map((item, i) => (
          <Card
            key={`${item.titulo}-${i}`}
            item={item}
            isOpen={openIdx === i}
            onToggle={() => setOpenIdx((cur) => (cur === i ? null : i))}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={barRef}
          className="diferenciais-bar"
          style={{ marginTop: 34 }}
          role="scrollbar"
          aria-orientation="horizontal"
          aria-controls="diferenciais-track"
          aria-label="Passar os cards de diferenciais"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={0}
        >
          <div ref={thumbRef} className="diferenciais-bar-thumb" />
        </div>
      </div>
    </section>
  );
}
