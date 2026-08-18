"use client";

import { useRef, useState, SubmitEvent } from "react";

// TODO: substituir pelo número real do restaurante (formato: 55DDDNÚMERO, sem espaços)
const WHATSAPP_NUMERO = "5500000000000";

export default function Reservas() {
  const [step, setStep] = useState<1 | 2>(1);
  const [enviado, setEnviado] = useState(false);

  const nomeRef = useRef<HTMLInputElement>(null);
  const telefoneRef = useRef<HTMLInputElement>(null);

  function irParaStep2() {
    if (!nomeRef.current?.checkValidity() || !telefoneRef.current?.checkValidity()) {
      nomeRef.current?.reportValidity();
      telefoneRef.current?.reportValidity();
      return;
    }
    setStep(2);
  }

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nome = form.get("nome");
    const telefone = form.get("telefone");
    const data = form.get("data");
    const hora = form.get("hora");
    const pessoas = form.get("pessoas");

    const mensagem = `Olá! Gostaria de reservar uma mesa no Manzi.%0A%0ANome: ${nome}%0ATelefone: ${telefone}%0AData: ${data}%0AHorário: ${hora}%0APessoas: ${pessoas}`;

    window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`, "_blank");
    setEnviado(true);
  }

  return (
    <section id="reservas" className="py-24 bg-manzi-cream">
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
            <>
              <div className="flex items-center mb-10">
                <div className={`form-step flex flex-col items-center gap-2 ${step === 1 ? "active" : "done"}`}>
                  <div className="step-circle">01</div>
                </div>
                <div className={`step-line ${step === 2 ? "done" : ""}`} />
                <div className={`form-step flex flex-col items-center gap-2 ${step === 2 ? "active" : ""}`}>
                  <div className="step-circle">02</div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="flex flex-col gap-4">
                    <input
                      ref={nomeRef}
                      name="nome"
                      type="text"
                      required
                      placeholder="Nome completo"
                      className="rounded-lg px-4 py-3.5 border border-black/15 bg-black/[0.03] outline-none focus:border-manzi-gold transition-colors"
                    />
                    <label className="font-bold text-black/70" style={{ fontSize: 13, marginBottom: -8 }}>
                      WhatsApp
                    </label>
                    <input
                      ref={telefoneRef}
                      name="telefone"
                      type="tel"
                      required
                      placeholder="(xx) xxxxx-xxxx"
                      className="rounded-lg px-4 py-3.5 border border-black/15 bg-black/[0.03] outline-none focus:border-manzi-gold transition-colors"
                    />

                    <button
                      type="button"
                      onClick={irParaStep2}
                      className="font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded-lg text-manzi-cream transition-opacity hover:opacity-90 mt-2"
                      style={{ background: "linear-gradient(135deg, #1c1712, #2a2119)" }}
                    >
                      Avançar
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="flex flex-col gap-4">
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

                    <label className="flex items-start gap-2.5 text-black/65 mt-1" style={{ fontSize: 13, lineHeight: 1.5 }}>
                      <input type="checkbox" required className="mt-0.5" style={{ accentColor: "#1c1712" }} />
                      <span>Aceito ser contatado(a) pelo Manzi para confirmação da reserva.</span>
                    </label>

                    <div className="flex gap-3 mt-1">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg transition-opacity hover:opacity-90"
                        style={{ background: "transparent", color: "rgba(28,23,18,0.65)", border: "1px solid rgba(28,23,18,0.2)" }}
                      >
                        Voltar
                      </button>
                      <button
                        type="submit"
                        className="flex-1 font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded-lg text-manzi-cream transition-opacity hover:opacity-90"
                        style={{ background: "linear-gradient(135deg, #1c1712, #2a2119)" }}
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </>
          ) : (
            <div className="text-center py-6">
              <p className="font-black uppercase tracking-tight mb-2" style={{ fontSize: 22 }}>
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
