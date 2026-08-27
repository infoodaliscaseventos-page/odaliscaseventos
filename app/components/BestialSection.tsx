"use client";

import { usePathname } from "next/navigation";

export default function BestialSection() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <section className="bg-[#050505] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* ENCABEZADO */}
        <div className="mb-14 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.5em] text-amber-400 md:text-sm">
            {isEnglish ? "RESIDENT ARTISTIC EXPERIENCE" : "EXPERIENCIA ARTÍSTICA RESIDENTE"}
          </p>

          <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-5xl leading-tight text-white md:text-7xl">
            Bestial Fly Bar
          </h2>

          <p className="mt-5 text-base leading-8 text-zinc-400 md:text-lg md:leading-9">
            {isEnglish
              ? "For more than two years, Odaliscas Eventos has been part of the resident artistic team at Bestial Fly Bar, creating live performances and Arabic-inspired experiences for one of Buenos Aires' most distinctive rooftop venues."
              : "Desde hace más de dos años, Odaliscas Eventos forma parte del staff artístico residente de Bestial Fly Bar, desarrollando performances en vivo y experiencias inspiradas en la cultura árabe en uno de los rooftops más distintivos de Buenos Aires."}
          </p>
        </div>

        {/* VIDEOS */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-[28px] bg-black">
            <video
              src="/media/bestial/bestial-experience-1.MP4"
              controls
              playsInline
              preload="metadata"
              className="aspect-[9/16] h-full w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-[28px] bg-black">
            <video
              src="/media/bestial/bestial-experience-2.MP4"
              controls
              playsInline
              preload="metadata"
              className="aspect-[9/16] h-full w-full object-cover"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="https://www.instagram.com/bestial.flybar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-amber-500 px-7 py-4 text-xs uppercase tracking-[0.2em] text-amber-400 transition hover:bg-amber-500 hover:text-black"
          >
            {isEnglish
              ? "VIEW BESTIAL FLY BAR ON INSTAGRAM ↗"
              : "VER BESTIAL FLY BAR EN INSTAGRAM ↗"}
          </a>
        </div>

      </div>
    </section>
  );
}