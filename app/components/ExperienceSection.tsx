"use client";

import { usePathname } from "next/navigation";
import FadeIn from "./FadeIn";

const experiencesEs = [
  {
    number: "01",
    title: "Recepción Árabe Premium",
    description:
      "Una recepción árabe elegante con músicos en vivo, bailarinas y una puesta artística diseñada para sorprender a tus invitados desde su llegada.",
  },
  {
    number: "02",
    title: "Música y Orquestas Árabes en Vivo",
    description:
      "Música árabe en vivo con músicos y orquestas para eventos privados, hoteles, restaurantes, celebraciones y producciones especiales.",
  },
  {
    number: "03",
    title: "Sunset Sessions",
    description:
      "Shows y performances creados para el golden hour, combinando música en vivo, movimiento y una estética pensada para transformar cada atardecer.",
  },
  {
    number: "04",
    title: "Producciones Artísticas a Medida",
    description:
      "Diseñamos shows árabes y producciones personalizadas para eventos corporativos, fiestas privadas, hoteles, restaurantes y proyectos especiales.",
  },
];

const experiencesEn = [
  {
    number: "01",
    title: "Premium Arabic Reception",
    description:
      "An elegant Arabic reception featuring live musicians, dancers and an artistic setting designed to surprise your guests from the moment they arrive.",
  },
  {
    number: "02",
    title: "Live Arabic Music & Orchestras",
    description:
      "Live Arabic music with musicians and orchestras for private events, hotels, restaurants, celebrations and special productions.",
  },
  {
    number: "03",
    title: "Sunset Sessions",
    description:
      "Shows and performances created for golden hour, combining live music, movement and an aesthetic designed to transform every sunset.",
  },
  {
    number: "04",
    title: "Tailor-Made Artistic Productions",
    description:
      "We design customized Arabic shows and artistic productions for corporate events, private celebrations, hotels, restaurants and special projects.",
  },
];

export default function ExperienceSection() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const experiences = isEnglish ? experiencesEn : experiencesEs;

  return (
    <section
      id="experiencias"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-400/80">
              {isEnglish ? "Experiences" : "Experiencias"}
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-white md:text-6xl">
              {isEnglish
                ? "Arabic experiences that"
                : "Experiencias árabes que"}
              <span className="block text-white/50">
                {isEnglish
                  ? "transform an event."
                  : "transforman un evento."}
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
              {isEnglish
                ? "From Arabic receptions and live music to tailor-made artistic productions, we bring together musicians, dancers, aesthetics and creative direction to give every event its own identity."
                : "Desde recepciones árabes y música en vivo hasta shows y producciones artísticas a medida, reunimos músicos, bailarinas, estética y dirección creativa para darle a cada evento una identidad propia."}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-2">
          {experiences.map((experience, index) => (
            <FadeIn key={experience.number} delay={index * 0.08}>
              <div className="group h-full bg-[#090909] p-8 transition duration-500 hover:bg-[#0d0d0d] md:p-10">
                <div className="flex items-start justify-between">
                  <span className="text-xs tracking-[0.3em] text-amber-400/70">
                    {experience.number}
                  </span>

                  <span className="text-white/20 transition duration-500 group-hover:translate-x-1 group-hover:text-amber-400">
                    →
                  </span>
                </div>

                <h3 className="mt-14 text-2xl font-light text-white md:text-3xl">
                  {experience.title}
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-white/50 md:text-base">
                  {experience.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}