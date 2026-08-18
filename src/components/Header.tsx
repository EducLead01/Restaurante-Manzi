"use client";

import { useState } from "react";

const LINKS = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#localizacao", label: "Localização" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-manzi-cream/95 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18" style={{ height: 72 }}>
          <a href="#hero" className="font-display font-bold text-xl tracking-wide text-manzi-ink">
            MANZI
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#reservas"
            className="hidden md:inline-flex items-center font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full text-manzi-cream transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #1c1712, #2a2119)" }}
          >
            Reservar mesa
          </a>

          <button
            aria-label="Abrir menu"
            className="md:hidden text-manzi-ink"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`mobile-menu-panel md:hidden bg-manzi-cream ${open ? "open" : ""}`}>
        <div className="px-6 pb-6 pt-2 flex flex-col gap-5">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-bold text-lg text-manzi-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservas"
            onClick={() => setOpen(false)}
            className="font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-full text-manzi-cream text-center"
            style={{ background: "linear-gradient(135deg, #1c1712, #2a2119)" }}
          >
            Reservar mesa
          </a>
        </div>
      </div>
    </header>
  );
}
