"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { usePathname } from "next/navigation";

export default function ExtrasSection() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const extras = isEnglish
    ? [
        {
          number: "01",
          title: "International Arab Chefs",
          description:
            "Chefs specialized in Arab cuisine and signature culinary concepts for private events, exclusive experiences and special productions.",
          image: "/images/extras/chefpng.png",
        },
        {
          number: "02",
          title: "Signature Arab Cuisine",
          description:
            "Culinary experiences inspired by the flavors and traditions of the Arab world, designed to complement the identity of each event and celebration.",
          image: "/images/extras/comidapng.png",
        },
      ]
    : [
        {
          number: "01",
          title: "Chefs árabes internacionales",
          description:
            "Chefs especializados en gastronomía árabe y propuestas de autor para eventos privados, experiencias exclusivas y producciones especiales.",
          image: "/images/extras/chefpng.png",
        },
        {
          number: "02",
          title: "Gastronomía árabe de autor",
          description:
            "Experiencias gastronómicas inspiradas en los sabores y tradiciones del mundo árabe, diseñadas para complementar la identidad de cada evento y celebración.",
          image: "/images/extras/comidapng.png",
        },
      ];

  return (
    <section id="gastronomia" className="bg-[#050505] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        <FadeIn>
          <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">

            <p className="text-xs uppercase tracking-[0.55em] text-amber-400 md:text-sm">
              {isEnglish
                ? "COMPLEMENTARY EXPERIENCES"
                : "EXPERIENCIAS COMPLEMENTARIAS"}
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-white md:text-6xl">
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

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
              {isEnglish
                ? "We bring together gastronomy, artists and special proposals to transform every production into a complete experience."
                : "Integramos gastronomía, artistas y propuestas especiales para transformar cada producción en una experiencia integral."}
            </p>

          </div>
        </FadeIn>

        <div className="space-y-16 md:space-y-24">

          {extras.map((item, index) => (
            <FadeIn
              key={item.title}
              delay={index * 0.12}
            >

              <div
                className={`
                  grid items-center gap-8 md:grid-cols-2 md:gap-14 lg:gap-20
                  ${
                    index % 2 === 1
                      ? "md:[&>*:first-child]:order-2"
                      : ""
                  }
                `}
              >

                <div className="overflow-hidden rounded-[26px] shadow-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1000}
                    height={750}
                    className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 md:h-[430px]"
                  />
                </div>

                <div className="text-center md:text-left">

                  <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
                    {item.number}
                  </p>

                  <h3 className="mt-3 font-[family-name:var(--font-cormorant)] text-3xl leading-tight text-white md:text-5xl">
                    {item.title}
                  </h3>

                  <div className="mx-auto mt-5 h-px w-16 bg-amber-400 md:mx-0" />

                  <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
                    {item.description}
                  </p>

                </div>

              </div>

            </FadeIn>
          ))}

        </div>

        <FadeIn delay={0.25}>
          <div className="mx-auto mt-16 max-w-3xl text-center md:mt-24">

            <p className="text-base leading-8 text-zinc-400 md:text-lg md:leading-9">
              {isEnglish
                ? "Each proposal can be incorporated independently or become part of a complete artistic and culinary production designed especially for each occasion."
                : "Cada propuesta puede incorporarse de manera independiente o formar parte de una producción artística y gastronómica integral, diseñada especialmente para cada ocasión."}
            </p>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}