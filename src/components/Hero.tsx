export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-end justify-start overflow-hidden min-h-screen"
    >
      {/*
        TODO: substituir por foto/vídeo real do ambiente ou de um prato.
        Por enquanto, um gradiente escuro faz o papel do hero.
      */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, #2a2119 0%, #1c1712 55%, #0f0c09 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "linear-gradient(to top, rgba(10,8,6,0.95) 0%, rgba(10,8,6,0.2) 55%, rgba(10,8,6,0.5) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-40 w-full">
        <p className="text-manzi-gold-light text-xs font-bold uppercase tracking-[0.35em] mb-6">
          Cozinha autoral &middot; Carnes nobres
        </p>
        <h1
          className="font-display font-bold text-manzi-cream mb-6"
          style={{ fontSize: "clamp(40px,7vw,84px)", lineHeight: 1.05 }}
        >
          Sabor que vira<br />memória.
        </h1>
        <p className="text-manzi-cream/70 font-light max-w-xl mb-10" style={{ fontSize: 18 }}>
          Ingredientes selecionados, brasa lenta e um ambiente feito para boas
          conversas. Venha viver a experiência Manzi.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#reservas"
            className="font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full text-manzi-ink transition-transform hover:scale-105"
            style={{ background: "linear-gradient(135deg, #e4c384, #b8863b)" }}
          >
            Reservar mesa
          </a>
          <a
            href="#cardapio"
            className="font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full text-manzi-cream border border-manzi-cream/30 transition-colors hover:border-manzi-cream/70"
          >
            Ver cardápio
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-manzi-cream/30">
        <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
