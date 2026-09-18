export default function Footer() {
  return (
    <footer className="bg-manzi-black text-manzi-white/70 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-[family-name:var(--font-brand)] text-xl text-manzi-white tracking-wide">
            MANZI
          </span>
          <p className="text-xs text-center">
            © {new Date().getFullYear()} Manzi Restaurante. Todos os direitos reservados.
          </p>
        </div>
        <p className="text-[10px] text-center text-manzi-white/50">
          Av. Bernardo Sayão, Nº 2159 - Setor Centro Oeste, ao lado do posto Fama, esquina da
          Av. Bernardo Sayão e Av. Marechal Rondon, Goiânia - GO, 74550-020
        </p>
      </div>
    </footer>
  );
}
