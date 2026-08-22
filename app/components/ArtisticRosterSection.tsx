"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import FadeIn from "./FadeIn";
import { usePathname } from "next/navigation";

const artists = {
  julieta: "/media/artists/Julieta/Julieta-web-compressed.mp4",
  maga: "/media/artists/Maga/Maga-web-compressed.mp4",
  anto: "/media/artists/Anto/anto-web-compressed.mp4",
  mica: "/media/artists/Mica/mica-web-compressed.mp4",
  vero: "/media/artists/Vero/vero-web-compressed.mp4",
  emi: "/media/artists/Emi/emi-web-compressed.mp4",
  selene: "/media/artists/Selene/selene-web-compressed.mp4",
  sheila: "/media/artists/Sheila/sheila-web-compressed.mp4",
};

function ArtistVideo({
  video,
  delay,
}: {
  video: string;
  delay: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();

    if (!videoRef.current) return;

    const nextMuted = !isMuted;

    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);

    if (!nextMuted) {
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <FadeIn delay={delay}>
      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#090909] transition duration-500 hover:border-amber-400/40">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
          <video
            ref={videoRef}
            src={video}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-contain"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Activar sonido" : "Silenciar sonido"}
            className="absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-amber-400 hover:text-amber-400"
          >
            {isMuted ? (
              <VolumeX size={18} strokeWidth={1.5} />
            ) : (
              <Volume2 size={18} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>
    </FadeIn>
  );
}

function VideoCard({
  video,
  delay,
}: {
  video: string;
  delay: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (!videoRef.current) return;

    const nextMuted = !isMuted;

    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);

    if (!nextMuted) {
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <FadeIn delay={delay}>
      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#090909] transition duration-500 hover:border-amber-400/40">
        <div className="relative w-full overflow-hidden bg-black">
          <video
            ref={videoRef}
            src={video}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            className="block h-auto w-full"
          />

          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Activar sonido" : "Silenciar sonido"}
            className="absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-amber-400 hover:text-amber-400"
          >
            {isMuted ? (
              <VolumeX size={18} strokeWidth={1.5} />
            ) : (
              <Volume2 size={18} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>
    </FadeIn>
  );
}

export default function ArtisticRosterSection() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const whatsappText = isEnglish
    ? "Hello, I would like to learn more about Odaliscas experiences for my event."
    : "Hola, quisiera conocer las experiencias de Odaliscas para mi evento.";

  const whatsappLink = `https://wa.me/541162721696?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <section id="artistas" className="bg-black py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.55em] text-amber-400 md:text-sm">
              ARTISTIC ROSTER
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-5xl leading-tight text-white md:text-7xl">
              {isEnglish ? (
                <>
                  A selection of
                  <br />
                  artistic experiences.
                </>
              ) : (
                <>
                  Una selección de
                  <br />
                  experiencias artísticas.
                </>
              )}
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
              {isEnglish
                ? "Carefully selected artists and proposals for hotels, restaurants, private events and international productions."
                : "Artistas y propuestas cuidadosamente seleccionadas para hoteles, restaurantes, eventos privados y producciones internacionales."}
            </p>
          </div>
        </FadeIn>

        {/* JULIETA + MAGA */}
        <div className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-2">
          <ArtistVideo video={artists.julieta} delay={0.05} />
          <ArtistVideo video={artists.maga} delay={0.1} />
        </div>

        {/* ANTO + MICA */}
        <div className="mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-2">
          <ArtistVideo video={artists.anto} delay={0.15} />
          <ArtistVideo video={artists.mica} delay={0.2} />
        </div>

        {/* MÚSICA AMBIENTE */}
        <div className="mx-auto mt-8 max-w-6xl">
          <VideoCard
            video="/media/live-music/videos/musica-ambiente-web.mp4"
            delay={0.25}
          />
        </div>

        {/* VERO + EMI */}
        <div className="mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-2">
          <ArtistVideo video={artists.vero} delay={0.3} />
          <ArtistVideo video={artists.emi} delay={0.35} />
        </div>

       {/* BRIAN */}
<div className="mx-auto mt-8 max-w-6xl">
  <VideoCard
    video="/media/artists/brian/Brian-web-mobile.mp4"
    delay={0.4}
  />
</div>
        {/* SELENE + SHEILA */}
        <div className="mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-2">
          <ArtistVideo video={artists.selene} delay={0.45} />
          <ArtistVideo video={artists.sheila} delay={0.5} />
        </div>

        {/* SUNSET SESSIONS */}
        <div className="mx-auto mt-8 max-w-6xl">
          <VideoCard
            video="/media/sunset/videos/sunset-web.mp4"
            delay={0.55}
          />
        </div>

       {/* HANDPAN - CIERRE */}
<div className="mx-auto mt-8 max-w-xl">
  <VideoCard
    video="/images/artists/handpan.mp4"
    delay={0.6}
  />
</div>

        {/* CTA */}
        <FadeIn delay={0.7}>
          <div className="mt-20 text-center">
            <p className="mx-auto max-w-2xl text-lg leading-8 text-zinc-400">
              {isEnglish
                ? "Would you like to create a unique experience for your event? Tell us what you have in mind and we will design a tailored proposal."
                : "¿Querés crear una experiencia única para tu evento? Contanos qué estás imaginando y diseñamos una propuesta a medida."}
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-105 hover:bg-amber-300"
            >
              {isEnglish
                ? "Design my experience"
                : "Diseñar mi experiencia"}
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}