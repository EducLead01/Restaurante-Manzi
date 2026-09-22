import type { Metadata } from "next";

import FormularioVaga from "@/components/FormularioVaga";

export const metadata: Metadata = {
  title: "Vaga: Auxiliar de Cozinha | Manzi Restaurante",
  description:
    "Vaga de auxiliar de cozinha no Manzi Restaurante, Setor Centro Oeste, Goiânia. Registro em carteira desde o primeiro dia.",
};

export default function Page() {
  return <FormularioVaga />;
}
