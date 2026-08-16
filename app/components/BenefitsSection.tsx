"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function BenefitsSection() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const benefits = isEnglish
    ? [
        "Professional dancers",
        "Live music",
        "Arabic percussion",
        "Themed ambiance",
        "Full production",
      ]
    : [
        "Bailarinas profesionales",
        "Música en vivo",
        "Percusión árabe",
        "Ambientación temática",
        "Producción integral",
      ];

  return (
    <section className="bg-black py-20 md:py-36">

      <div className="mx-auto max-w-7xl px-6 md:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">

          <div>

            <p className="mb-4 text-xs uppercase tracking-[0.55em] text-amber-400 md:mb-6 md:text-sm">
              {isEnglish
                ? "PREMIUM EXPERIENCE"
                : "EXPERIENCIA PREMIUM"}
            </p>

            <h2 className="text-5xl font-light leading-tight text-white md:text-6xl">
              {isEnglish ? (
                <>
                  Much more than
                  <br />
                  a show.
                </>
              ) : (
                <>
                  Mucho más que
                  <br />
                  un espectáculo.
                </>
              )}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 md:mt-8 md:text-xl md:leading-9">
              {isEnglish
                ? "We bring together art, music and flawless production to create unique experiences your guests will remember forever."
                : "Fusionamos arte, música y una producción impecable para crear experiencias únicas que tus invitados recordarán para siempre."}
            </p>

            <div className="mt-10 space-y-6 md:mt-16 md:space-y-8">

              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 md:gap-5"
                >
                  <div className="h-2 w-2 rounded-full bg-amber-400" />

                  <span className="text-xl font-light text-white md:text-2xl">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

          <div className="relative order-first lg:order-last lg:sticky lg:top-32 lg:scale-110">

            <Image
              src="/images/ambience/lounge-premium.png"
              alt={
                isEnglish
                  ? "Premium Arabic ambiance"
                  : "Ambientación Árabe Premium"
              }
              width={1100}
              height={1400}
              priority
              className="w-full rounded-[28px] object-cover shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}