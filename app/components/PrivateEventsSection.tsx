"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { usePathname } from "next/navigation";

export default function PrivateEventsSection() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const whatsappText = isEnglish
    ? "Hello, I am interested in information about Odaliscas Eventos' private celebration experiences."
    : "Hola, me interesa recibir información sobre las propuestas de Odaliscas Eventos para una celebración privada.";

  const whatsappLink = `https://wa.me/541162721696?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <section
      id="celebraciones"
      className="relative overflow-hidden bg-[#050505] py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* IMAGEN */}
          <FadeIn>
            <div className="group relative overflow-hidden rounded-[30px] shadow-2xl">
              <Image
                src="/images/private-events/private-events.png"
                alt={
                  isEnglish
                    ? "Arabic artistic experience for private celebrations"
                    : "Experiencia artística árabe para celebraciones privadas"
                }
                width={1200}
                height={1500}
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </FadeIn>

          {/* TEXTO */}
          <FadeIn delay={0.15}>
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-amber-400 md:text-sm">
                {isEnglish
                  ? "PRIVATE CELEBRATIONS"
                  : "CELEBRACIONES PRIVADAS"}
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-4xl leading-[1.08] text-white md:text-5xl">
                {isEnglish ? (
                  <>
                    An Arabic experience
                    <br />
                    to celebrate
                    <br />
                    <span className="text-white/55">in a different way.</span>
                  </>
                ) : (
                  <>
                    Una experiencia árabe
                    <br />
                    para celebrar
                    <br />
                    <span className="text-white/55">
                      de otra manera.
                    </span>
                  </>
                )}
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 md:text-lg">
                {isEnglish
                  ? "An artistic proposal designed for birthdays, weddings and private celebrations, combining dance, live music and interaction with guests."
                  : "Una propuesta artística pensada para cumpleaños, bodas y celebraciones privadas, combinando danza, música en vivo e interacción con los invitados."}
              </p>

              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
                {(isEnglish
                  ? ["Dance", "Live music", "Guest interaction"]
                  : ["Danza", "Música en vivo", "Interacción"]
                ).map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />

                    <span className="text-sm text-white md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-8 max-w-xl text-sm leading-7 text-zinc-500 md:text-base">
                {isEnglish
                  ? "Tailor-made proposals for private spaces, residential venues and event halls."
                  : "Propuestas a medida para espacios privados, SUM y salones."}
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex rounded-full bg-amber-400 px-9 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:bg-amber-300"
              >
                {isEnglish
                  ? "Request a proposal"
                  : "Consultar propuesta"}
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
