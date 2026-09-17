"use client";

import Image from "next/image";
import { useState } from "react";

const WHATSAPP_NUMERO = "5562942630696";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
  "Olá! Quero fazer um pedido."
)}`;

const LINKS = [
  { href: "#filosofia", label: "Nosso Cardápio" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#identidade", label: "Nossa Identidade" },
  { href: "#galeria", label: "Localização" },
  { href: "#diferenciais", label: "Molhos e Adicionais" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-manzi-white/95 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center" style={{ height: 72 }}>
          <nav className="col-start-1 hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-wider justify-start">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#" className="col-start-2 flex items-center justify-self-center">
            <Image
              src="/InstaAvatarV2@2x.png"
              alt="Manzi"
              width={2160}
              height={2160}
              className="h-12 w-12 rounded-full"
            />
          </a>

          <div className="col-start-3 flex items-center justify-end">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full text-white transition-opacity hover:opacity-90"
              style={{ background: "#25D366" }}
            >
              Peça pelo WhatsApp
            </a>

            <button
              aria-label="Abrir menu"
              className="md:hidden text-manzi-black"
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
      </div>

      <div className={`mobile-menu-panel md:hidden bg-manzi-white ${open ? "open" : ""}`}>
        <div className="px-6 pb-6 pt-2 flex flex-col gap-5">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-bold text-lg text-manzi-black"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-full text-white text-center"
            style={{ background: "#25D366" }}
          >
            Peça pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
