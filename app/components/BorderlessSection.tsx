"use client";

import FadeIn from "./FadeIn";
import { usePathname } from "next/navigation";

export default function BorderlessSection() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const whatsappText = isEnglish
    ? "Hello, I would like to discuss a project."
    : "Hola, me gustaría conversar sobre un proyecto.";

  const whatsappLink = `https://wa.me/541162721696?text=${encodeURIComponent(
    whatsappText
  )}`;

  const items = isEnglish
    ? [
        {
          title: "Available worldwide",
          description:
            "We develop and coordinate artistic experiences for events and clients anywhere in the world.",
        },
        {
          title: "Customized productions",
          description:
            "Each artistic production is designed around the space, audience and identity of every event.",
        },
        {
          title: "Hospitality & Venues",
          description:
            "We create proposals for hotels, restaurants, resorts, beach clubs and exclusive destinations.",
        },
        {
          title: "International coordination",
          description:
            "We coordinate artists and every artistic detail so each production can be developed smoothly from anywhere in the world.",
        },
      ]
    : [
        {
          title: "Disponible en todo el mundo",
          description:
            "Desarrollamos y coordinamos experiencias artísticas para eventos y clientes en cualquier parte del mundo.",
        },
        {
          title: "Producciones personalizadas",
          description:
            "Cada producción artística se diseña según el espacio, el público y la identidad de cada evento.",
        },
        {
          title: "Hospitality & Venues",
          description:
            "Creamos propuestas para hoteles, restaurantes, resorts, beach clubs y destinos exclusivos.",
        },
        {
          title: "Coordinación internacional",
          description:
            "Coordinamos artistas y cada detalle artístico para que cada producción pueda desarrollarse de manera fluida desde cualquier parte del mundo.",
        },
      ];

  return (
    <section className="bg-[#080808] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">

            <p className="text-xs uppercase tracking-[0.55em] text-amber-400 md:text-sm">
              {isEnglish ? "GLOBAL REACH" : "ALCANCE GLOBAL"}
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-5xl leading-tight text-white md:text-7xl">
              {isEnglish ? (
                <>
                  Artistic productions
                  <br />
                  with global reach.
                </>
              ) : (
                <>
                  Producciones artísticas
                  <br />
                  con alcance global.
                </>
              )}
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
              {isEnglish
                ? "From private events and weddings to hotels, restaurants, resorts and exclusive destinations, we develop customized artistic productions and Arabic experiences for projects anywhere in the world."
                : "Desde eventos privados y casamientos hasta hoteles, restaurantes, resorts y destinos exclusivos, desarrollamos producciones artísticas y experiencias árabes personalizadas para proyectos en cualquier parte del mundo."}
            </p>

          </div>
        </FadeIn>

        <div className="mt-20 grid gap-6 md:grid-cols-2">

          {items.map((item, index) => (
            <FadeIn
              key={item.title}
              delay={index * 0.1}
            >
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-10 transition duration-500 hover:border-amber-400/40 hover:bg-white/[0.05]">

                <div className="mb-6 h-2 w-16 bg-amber-400" />

                <h3 className="text-3xl font-light text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {item.description}
                </p>

              </div>
            </FadeIn>
          ))}

        </div>

        <FadeIn delay={0.4}>
          <div className="mx-auto mt-24 max-w-4xl text-center">

            <h3 className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-white md:text-5xl">
              {isEnglish
                ? "Artistic experiences designed for every occasion."
                : "Experiencias artísticas diseñadas para cada ocasión."}
            </h3>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex rounded-full bg-amber-400 px-10 py-5 text-lg font-semibold text-black transition duration-300 hover:scale-105 hover:bg-amber-300"
            >
              {isEnglish
                ? "Start a project"
                : "Comenzar un proyecto"}
            </a>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}