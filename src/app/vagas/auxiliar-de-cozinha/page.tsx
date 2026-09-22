import type { Metadata } from "next";
import Script from "next/script";

import FormularioVaga from "@/components/FormularioVaga";

/**
 * Defina NEXT_PUBLIC_META_PIXEL_ID no .env.local e nas variáveis de ambiente da
 * Vercel. Sem a variável, o pixel simplesmente não é injetado.
 */
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const metadata: Metadata = {
  title: "Vaga: Auxiliar de Cozinha | Manzi Restaurante",
  description:
    "Vaga de auxiliar de cozinha no Manzi Restaurante, Setor Centro Oeste, Goiânia. Registro em carteira desde o primeiro dia.",
  // A página recebe tráfego pago; não precisa de busca orgânica.
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      {PIXEL_ID && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}

      <FormularioVaga />
    </>
  );
}
