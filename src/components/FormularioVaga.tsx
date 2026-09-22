"use client";

import { useState } from "react";

const WHATSAPP_NUMERO = "5562942630696";

type Resposta = "sim" | "nao";

type Pergunta = {
  id: string;
  texto: string;
  ajuda?: string;
  /** Resposta que encerra a candidatura. */
  elimina?: Resposta;
  /** Rótulos dos botões, na ordem sim / não. */
  rotulos?: [string, string];
  /** Como a resposta aparece na mensagem do WhatsApp. */
  resumo: string;
};

const PERGUNTAS: Pergunta[] = [
  {
    id: "mulher",
    texto: "Você se identifica como mulher?",
    ajuda:
      "Esta vaga integra uma ação afirmativa para ampliar a presença de mulheres na nossa cozinha, nos termos do art. 373-A, parágrafo único, da CLT.",
    elimina: "nao",
    resumo: "Se identifica como mulher",
  },
  {
    id: "carteira",
    texto: "Está disposta a assinar a carteira imediatamente?",
    ajuda: "Contratação CLT, com registro desde o primeiro dia.",
    elimina: "nao",
    resumo: "Assina a carteira imediatamente",
  },
  {
    id: "fuma",
    texto: "Você fuma?",
    resumo: "Fuma",
  },
  {
    id: "regiao",
    texto: "Você mora na região da Av. Bernardo Sayão?",
    ajuda: "Setor Centro Oeste, Goiânia — perto do posto Fama.",
    resumo: "Mora na região da Bernardo Sayão",
  },
];

type Etapa = "perguntas" | "pronto" | "confirmando" | "recusada";

export default function FormularioVaga() {
  const [indice, setIndice] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, Resposta>>({});
  const [etapa, setEtapa] = useState<Etapa>("perguntas");

  const pergunta = PERGUNTAS[indice];

  function responder(resposta: Resposta) {
    const atualizadas = { ...respostas, [pergunta.id]: resposta };
    setRespostas(atualizadas);

    if (pergunta.elimina === resposta) {
      setEtapa("recusada");
      return;
    }

    if (indice + 1 < PERGUNTAS.length) {
      setIndice(indice + 1);
    } else {
      setEtapa("pronto");
    }
  }

  function recomecar() {
    setIndice(0);
    setRespostas({});
    setEtapa("perguntas");
  }

  const linhas = PERGUNTAS.map(
    (p) => `• ${p.resumo}: ${respostas[p.id] === "sim" ? "sim" : "não"}`
  ).join("\n");

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
    `Olá! Vim pela página da vaga de Auxiliar de Cozinha.\n\n${linhas}\n• Sei onde fica a região: sim`
  )}`;

  return (
    <main className="flex-grow bg-manzi-black text-manzi-white">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6 py-16">
        <header className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-manzi-red">
            Estamos contratando
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-brand)] text-4xl leading-tight sm:text-5xl">
            Auxiliar de Cozinha
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-manzi-white/70">
            Av. Bernardo Sayão, Nº 2159 — Setor Centro Oeste, Goiânia. Registro em
            carteira desde o primeiro dia. Responda quatro perguntas rápidas e, se o
            perfil bater, você fala com a gente no WhatsApp.
          </p>
        </header>

        <div
          className="rounded-2xl bg-manzi-white p-7 text-manzi-black sm:p-9"
          aria-live="polite"
        >
          {etapa === "perguntas" && (
            <>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-manzi-black/40">
                Pergunta {indice + 1} de {PERGUNTAS.length}
              </p>

              <h2 className="mt-3 font-[family-name:var(--font-brand)] text-2xl leading-snug sm:text-3xl">
                {pergunta.texto}
              </h2>

              {pergunta.ajuda && (
                <p className="mt-3 text-sm leading-relaxed text-manzi-black/60">
                  {pergunta.ajuda}
                </p>
              )}

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => responder("sim")}
                  className="min-h-[52px] flex-1 rounded-full bg-manzi-black px-6 text-sm font-bold uppercase tracking-wider text-manzi-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-manzi-red"
                >
                  {pergunta.rotulos?.[0] ?? "Sim"}
                </button>
                <button
                  type="button"
                  onClick={() => responder("nao")}
                  className="min-h-[52px] flex-1 rounded-full border-2 border-manzi-black/20 px-6 text-sm font-bold uppercase tracking-wider text-manzi-black transition-colors hover:border-manzi-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-manzi-red"
                >
                  {pergunta.rotulos?.[1] ?? "Não"}
                </button>
              </div>

              <div className="mt-7 flex gap-1.5" aria-hidden="true">
                {PERGUNTAS.map((p, i) => (
                  <span
                    key={p.id}
                    className={`h-1 flex-1 rounded-full ${
                      i <= indice ? "bg-manzi-red" : "bg-manzi-black/12"
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {etapa === "pronto" && (
            <>
              <h2 className="font-[family-name:var(--font-brand)] text-2xl leading-snug sm:text-3xl">
                Seu perfil bate com a vaga.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-manzi-black/60">
                Clique abaixo pra falar com a gente no WhatsApp — suas respostas vão
                junto na mensagem.
              </p>

              <button
                type="button"
                onClick={() => setEtapa("confirmando")}
                className="mt-7 flex min-h-[52px] w-full items-center justify-center rounded-full px-6 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-manzi-black"
                style={{ background: "#00674F" }}
              >
                Falar no WhatsApp
              </button>
            </>
          )}

          {etapa === "confirmando" && (
            <>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-manzi-black/40">
                Última pergunta
              </p>

              <h2 className="mt-3 font-[family-name:var(--font-brand)] text-2xl leading-snug sm:text-3xl">
                Você sabe onde fica a região da Av. Bernardo Sayão?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-manzi-black/60">
                O restaurante fica no Setor Centro Oeste, em Goiânia, na esquina com a
                Av. Marechal Rondon, ao lado do posto Fama.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[52px] flex-1 items-center justify-center rounded-full px-6 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-manzi-black"
                  style={{ background: "#00674F" }}
                >
                  Sei onde fica
                </a>
                <button
                  type="button"
                  onClick={() => setEtapa("recusada")}
                  className="min-h-[52px] flex-1 rounded-full border-2 border-manzi-black/20 px-6 text-sm font-bold uppercase tracking-wider text-manzi-black transition-colors hover:border-manzi-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-manzi-red"
                >
                  Não sei
                </button>
              </div>
            </>
          )}

          {etapa === "recusada" && (
            <>
              <h2 className="font-[family-name:var(--font-brand)] text-2xl leading-snug sm:text-3xl">
                Agradecemos seu interesse.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-manzi-black/60">
                Desta vez a vaga não é pra você. Obrigado pelo tempo — e boa sorte na
                busca.
              </p>

              <button
                type="button"
                onClick={recomecar}
                className="mt-6 text-sm font-bold text-manzi-red underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-manzi-red"
              >
                Responder de novo
              </button>
            </>
          )}
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-manzi-white/40">
          Manzi Restaurante · Av. Bernardo Sayão, Nº 2159 — Setor Centro Oeste,
          Goiânia&nbsp;—&nbsp;GO
        </p>
      </div>
    </main>
  );
}
