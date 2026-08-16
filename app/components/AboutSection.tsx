"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AboutSection() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <section
      id="nosotros"
      className="bg-[#050505] py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* ENCABEZADO */}

        <div className="mb-16 max-w-4xl">

          <p className="text-xs uppercase tracking-[0.55em] text-amber-400 md:text-sm">
            {isEnglish ? "ABOUT US" : "NOSOTROS"}
          </p>

          <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-5xl leading-tight text-white md:text-7xl">
            {isEnglish ? (
              <>
                Behind every experience,
                <br />
                there is a story.
              </>
            ) : (
              <>
                Detrás de cada experiencia,
                <br />
                hay una historia.
              </>
            )}
          </h2>

        </div>

        {/* FUNDADOR */}

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          {/* FOTO */}

          <div className="relative overflow-hidden rounded-[30px] bg-black">

            <Image
              src="/images/founder/brian-founder.jpg"
              alt={
                isEnglish
                  ? "Brian Brandán - Founder and Artistic Director of Odaliscas Eventos"
                  : "Brian Brandán - Fundador y Director Artístico de Odaliscas Eventos"
              }
              width={1000}
              height={1200}
              priority
              className="
                h-auto
                w-full
                object-contain
                transition
                duration-700
                hover:scale-[1.02]
              "
            />

          </div>

          {/* TEXTO */}

          <div>

            <p className="text-xs uppercase tracking-[0.45em] text-amber-400">
              {isEnglish
                ? "FOUNDER & ARTISTIC DIRECTOR"
                : "FUNDADOR & DIRECTOR ARTÍSTICO"}
            </p>

            <h3 className="mt-5 font-[family-name:var(--font-cormorant)] text-5xl leading-tight text-white md:text-6xl">
              Brian Brandán
            </h3>

            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
              {isEnglish
                ? "25+ YEARS OF ARTISTIC EXPERIENCE"
                : "MÁS DE 25 AÑOS DE TRAYECTORIA ARTÍSTICA"}
            </p>

            <div className="mt-6 h-px w-20 bg-amber-400" />

            <p className="mt-8 text-base leading-8 text-zinc-300 md:text-lg md:leading-9">
              {isEnglish
                ? "Odaliscas Eventos is the result of more than 25 years dedicated to Arabic music, percussion, dance and artistic production. Brian Brandán began his artistic journey at an early age and, at just 12 years old, joined a renowned orchestra, beginning a path that would shape his professional career."
                : "Odaliscas Eventos es el resultado de más de 25 años dedicados a la música árabe, la percusión, la danza y la producción artística. Brian Brandán comenzó su recorrido artístico desde muy joven y, a los 12 años, se incorporó a una reconocida orquesta, iniciando un camino que marcaría toda su trayectoria profesional."}
            </p>

            <p className="mt-6 text-base leading-8 text-zinc-400 md:text-lg md:leading-9">
              {isEnglish
                ? "His connection with this artistic world also comes from his family. His father, the renowned musician Osvaldo “El Beryewe” Brandán, was an Arabic percussionist, while his mother was a renowned dancer during the 1970s and 1980s. This artistic heritage became an essential part of his identity."
                : "Su vínculo con este universo artístico también nace de su familia. Su padre, el reconocido músico Osvaldo “El Beryewe” Brandán, fue percusionista árabe, mientras que su madre fue una reconocida bailarina durante las décadas del 70 y 80. Esta herencia artística se convirtió en una parte esencial de su identidad."}
            </p>

            <p className="mt-6 text-base leading-8 text-zinc-400 md:text-lg md:leading-9">
              {isEnglish
                ? "Throughout the years, he developed his career as a musician, Arabic percussionist, teacher, artistic director and producer, performing on major stages and working on concerts, shows and international projects."
                : "A lo largo de los años desarrolló su carrera como músico, percusionista árabe, docente, director artístico y productor, participando en grandes escenarios, conciertos, espectáculos y proyectos internacionales."}
            </p>

            <p className="mt-6 text-base leading-8 text-zinc-400 md:text-lg md:leading-9">
              {isEnglish
                ? "Today, that experience is the foundation of Odaliscas Eventos: a production company created to bring together artists, music, culture and premium production in experiences designed specifically for each client."
                : "Hoy, toda esa experiencia es la base de Odaliscas Eventos: una productora creada para reunir artistas, música, cultura y producción premium en experiencias diseñadas especialmente para cada cliente."}
            </p>

            {/* FRASE */}

            <div className="mt-10 border-l border-amber-400 pl-6">

              <p className="font-[family-name:var(--font-cormorant)] text-2xl leading-relaxed text-white md:text-3xl">
                {isEnglish
                  ? "“We don't simply create shows. We create moments with identity, emotion and memory.”"
                  : "“No buscamos simplemente ofrecer un espectáculo. Creamos momentos con identidad, emoción y memoria.”"}
              </p>

              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
                Brian Brandán
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}