export default function Footer() {
  return (
    <footer className="bg-manzi-ink text-manzi-cream/70 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-manzi-cream text-lg tracking-wide">
          MANZI
        </span>
        <p className="text-xs text-center">
          © {new Date().getFullYear()} Manzi Restaurante. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
