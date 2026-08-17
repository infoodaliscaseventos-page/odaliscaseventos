"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import { usePathname } from "next/navigation";

const artists = [
  {
    image: "/media/artists/Julieta/julieta.jpg",
    video: "/media/artists/Julieta/Julieta-web.mp4",
  },
  {
    image: "/media/artists/Anto/anto.JPEG",
    video: "/media/artists/Anto/anto-web.mp4",
  },
  {
    image: "/media/artists/Maga/maga.jpeg",
    video: "/media/artists/Maga/Maga-web.mp4",
  },
  {
    image: "/media/artists/Vero/verofoto.jpeg",
    video: "/media/artists/Vero/vero-web.mp4",
  },
  {
    image: "/media/artists/Emi/emi.jpeg",
    video: "/media/artists/Emi/emi-web.mp4",
  },
  {
    image: "/media/artists/Selene/selenejpeg.jpeg",
    video: "/media/artists/Selene/selene-web.mp4",
  },
  {
    image: "/media/artists/Sheila/sheilaJPEG.jpeg",
    video: "/media/artists/Sheila/sheila-web.mp4",
  },
];

function ArtistCard({
  image,
  video,
  delay,
}: {
  image: string;
  video: string;
  delay: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
    }

    setIsMuted(true);
  };

  const toggleSound = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();

    if (!videoRef.current) return;

    const nextMutedState = !isMuted;

    videoRef.current.muted = nextMutedState;
    setIsMuted(nextMutedState);

    if (!nextMutedState) {
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <FadeIn delay={delay}>
      <div
        className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#090909] transition duration-500 hover:border-amber-400/40"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">

          <Image
            src={image}
            alt="Odaliscas Eventos artist"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-all duration-700 ${
              isHovered
                ? "scale-105 opacity-0"
                : "scale-100 opacity-100"
            }`}
          />

          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            preload="metadata"
            className={`absolute inset-0 h-full w-full object-contain transition-all duration-700 ${
              isHovered
                ? "scale-100 opacity-100"
                : "scale-100 opacity-0"
            }`}
          />

          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Turn sound on" : "Mute video"}
            className={`absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 text-sm text-white backdrop-blur-sm transition-all duration-300 hover:border-amber-400 hover:text-amber-400 ${
              isHovered
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            {isMuted ? "🔇" : "🔊"}
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
  return (
    <FadeIn delay={delay}>
      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#090909] transition duration-500 hover:border-amber-400/40">
        <div className="w-full overflow-hidden bg-black">
          <video
            src={video}
            controls
            playsInline
            preload="metadata"
            className="block h-auto w-full"
          />
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
    <section
      id="experiencias"
      className="bg-black py-24 md:py-36"
    >
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

        <div className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">

          {artists.map((artist, index) => (
            <ArtistCard
              key={artist.image}
              image={artist.image}
              video={artist.video}
              delay={index * 0.08}
            />
          ))}

        </div>

        <div className="mx-auto mt-8 max-w-6xl">

          <FadeIn delay={0.65}>
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#090909]">

              <div className="flex justify-center overflow-hidden bg-black">

                <video
                  src="/media/artists/brian/Brian-web2.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="block max-h-[65vh] w-auto max-w-full object-contain"
                />

              </div>

            </div>
          </FadeIn>

        </div>

        <div className="mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-2">

          <VideoCard
            video="/media/live-music/videos/musica-ambiente-web.mp4"
            delay={0.7}
          />

          <VideoCard
            video="/media/sunset/videos/sunset-web.mp4"
            delay={0.8}
          />

        </div>

        <FadeIn delay={0.9}>
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