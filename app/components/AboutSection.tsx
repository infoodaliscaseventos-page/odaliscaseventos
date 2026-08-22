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
                  ? "Brian Brandán, founder and artistic director specializing in Arabic music, percussion and artistic production"
                  : "Brian Brandán, fundador y director artístico especializado en música árabe, percusión y producción artística"
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
                ? "His connection with this artistic world also comes from his family. His father, musician Osvaldo “El Beryewe” Brandán, developed a career spanning more than five decades as a percussionist and artist. His mother was also a dancer and a leading performer of her generation during the 1970s and 1980s."
                : "Su vínculo con este universo artístico también nace de su familia. Su padre, el músico Osvaldo “El Beryewe” Brandán, desarrolló una trayectoria de más de cinco décadas como percusionista y artista. Su madre fue bailarina y una destacada intérprete de su generación durante las décadas del 70 y del 80."}
            </p>

            <p className="mt-6 text-base leading-8 text-zinc-400 md:text-lg md:leading-9">
              {isEnglish
                ? "That artistic heritage naturally led Brian to develop his own path within Arabic music, percussion and dance, working alongside professional dancers, musicians and artistic productions connected to this cultural universe."
                : "Ese legado artístico llevó naturalmente a Brian a desarrollar su propio camino dentro de la música árabe, la percusión y la danza, trabajando junto a bailarinas profesionales, músicos y diferentes producciones artísticas vinculadas a este universo cultural."}
            </p>

            <p className="mt-6 text-base leading-8 text-zinc-400 md:text-lg md:leading-9">
              {isEnglish
                ? "Today, Odaliscas Eventos brings together that experience to create Arabic artistic experiences ranging from belly dance shows and live Arabic music to complete artistic productions for private events, weddings, hotels, restaurants and international projects."
                : "Hoy, Odaliscas Eventos reúne toda esa experiencia para crear experiencias artísticas árabes que van desde shows de odaliscas y danza del vientre, música árabe en vivo y performances musicales, hasta producciones artísticas integrales para eventos privados, casamientos, hoteles, restaurantes y proyectos internacionales."}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}