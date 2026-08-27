"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import FadeIn from "./FadeIn";

export default function GallerySection() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const images = [
    {
      src: "/images/gallery/IMG_1605.PNG",
      alt: isEnglish
        ? "Arabic dance show for a private event"
        : "Show de danza del vientre para evento privado",
    },
    {
      src: "/images/gallery/IMG_1606.PNG",
      alt: isEnglish
        ? "Arabic musicians performing live at an event"
        : "Músicos árabes en vivo durante un evento",
    },
    {
      src: "/images/gallery/IMG_1607.PNG",
      alt: isEnglish
        ? "Belly dancer performing at a premium event"
        : "Bailarina árabe realizando una presentación artística",
    },
    {
      src: "/images/gallery/IMG_1618.PNG",
      alt: isEnglish
        ? "Premium Arabic artistic experience"
        : "Experiencia artística árabe para una celebración especial",
    },
  ];

  return (
    <section
      id="galeria"
      className="bg-[#050505] py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <FadeIn>
          <div className="mx-auto mb-16 max-w-4xl text-center md:mb-20">
            <p className="text-xs uppercase tracking-[0.55em] text-amber-400 md:text-sm">
              {isEnglish ? "GALLERY" : "GALERÍA"}
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-5xl leading-tight text-white md:text-7xl">
              {isEnglish ? (
                <>
                  Every event
                  <br />
                  has its own story.
                </>
              ) : (
                <>
                  Cada evento
                  <br />
                  tiene su propia historia.
                </>
              )}
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg md:leading-9">
              {isEnglish
                ? "A selection of artistic moments created for private celebrations, hotels, corporate events and special productions."
                : "Una selección de momentos artísticos creados para celebraciones privadas, hoteles, eventos corporativos y producciones especiales."}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {images.map((image, index) => (
            <FadeIn
              key={image.src}
              delay={index * 0.1}
            >
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[28px] bg-black">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={1500}
                  className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.01]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <p className="mx-auto mt-14 max-w-3xl text-center text-base leading-8 text-zinc-400 md:mt-20 md:text-lg md:leading-9">
            {isEnglish
              ? "Dance, live music and artistic performance come together to create memorable atmospheres, always adapted to the identity of each occasion."
              : "La danza, la música en vivo y la puesta artística se integran para crear atmósferas memorables, siempre adaptadas a la identidad de cada ocasión."}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}