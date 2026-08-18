"use client";

import { useState, FormEvent } from "react";

// TODO: substituir pelo número real do restaurante (formato: 55DDDNÚMERO, sem espaços)
const WHATSAPP_NUMERO = "5500000000000";

export default function Reservas() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nome = form.get("nome");
    const data = form.get("data");
    const hora = form.get("hora");
    const pessoas = form.get("pessoas");
    const telefone = form.get("telefone");

    const mensagem = `Olá! Gostaria de reservar uma mesa no Manzi.%0A%0ANome: ${nome}%0AData: ${data}%0AHorário: ${hora}%0APessoas: ${pessoas}%0ATelefone: ${telefone}`;

    window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`, "_blank");
    setEnviado(true);
  }

  return (
    <section id="reservas" className="py-24 bg-manzi-cream-2">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-2xl overflow-hidden p-8 md:p-12 bg-white"
          style={{ border: "1px solid rgba(184,134,59,0.2)" }}
        >
          <div className="text-center mb-8">
            <p className="text-manzi-gold text-xs font-bold uppercase tracking-[0.35em] mb-4">
              Reservas
            </p>
            <h2
              className="font-display font-bold mb-3"
              style={{ fontSize: "clamp(24px,3.5vw,32px)", lineHeight: 1.1 }}
            >
              Reserve sua mesa
            </h2>
            <p className="text-black/60 font-light" style={{ fontSize: 15 }}>
              Preencha os dados e finalize a reserva pelo WhatsApp.
            </p>
          </div>

          {!enviado ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                name="nome"
                type="text"
                required
                placeholder="Nome completo"
                className="rounded-lg px-4 py-3.5 border border-black/15 bg-black/[0.03] outline-none focus:border-manzi-gold transition-colors"
              />
              <input
                name="telefone"
                type="tel"
                required
                placeholder="WhatsApp (xx) xxxxx-xxxx"
                className="rounded-lg px-4 py-3.5 border border-black/15 bg-black/[0.03] outline-none focus:border-manzi-gold transition-colors"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="data"
                  type="date"
                  required
                  className="rounded-lg px-4 py-3.5 border border-black/15 bg-black/[0.03] outline-none focus:border-manzi-gold transition-colors"
                />
                <input
                  name="hora"
                  type="time"
                  required
                  className="rounded-lg px-4 py-3.5 border border-black/15 bg-black/[0.03] outline-none focus:border-manzi-gold transition-colors"
                />
              </div>
              <input
                name="pessoas"
                type="number"
                min={1}
                required
                placeholder="Número de pessoas"
                className="rounded-lg px-4 py-3.5 border border-black/15 bg-black/[0.03] outline-none focus:border-manzi-gold transition-colors"
              />

              <button
                type="submit"
                className="font-bold text-sm uppercase tracking-wider px-7 py-4 rounded-lg text-manzi-cream transition-opacity hover:opacity-90 mt-2"
                style={{ background: "linear-gradient(135deg, #1c1712, #2a2119)" }}
              >
                Reservar via WhatsApp
              </button>
            </form>
          ) : (
            <div className="text-center py-6">
              <p className="font-bold uppercase tracking-tight mb-2" style={{ fontSize: 20 }}>
                Quase lá!
              </p>
              <p className="text-black/65 font-light" style={{ fontSize: 15 }}>
                Abrimos o WhatsApp com sua reserva pronta para enviar.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
