import type { Metadata } from "next";
import Script from "next/script";

import FormularioVaga from "@/components/FormularioVaga";

/**
 * Pixel da Meta do conjunto de dados "Manzi Site". ID de pixel não é segredo —
 * ele fica visível no HTML de qualquer página que o use. Dá pra apontar pra
 * outro pixel (um de teste, por exemplo) com NEXT_PUBLIC_META_PIXEL_ID.
 */
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1297798785700860";

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
