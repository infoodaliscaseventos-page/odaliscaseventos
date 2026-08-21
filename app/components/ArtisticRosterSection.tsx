"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import FadeIn from "./FadeIn";

const artists = [
  {
    name: "Julieta",
    image: "/media/artists/Julieta/julieta.jpg",
    video: "/media/artists/Julieta/Julieta-web-compressed.mp4",
  },
  {
    name: "Anto",
    image: "/media/artists/Anto/anto.JPEG",
    video: "/media/artists/Anto/anto-web-compressed.mp4",
  },
  {
    name: "Maga",
    image: "/media/artists/Maga/maga.jpeg",
    video: "/media/artists/Maga/Maga-web-compressed.mp4",
  },
  {
    name: "Vero",
    image: "/media/artists/Vero/verofoto.jpeg",
    video: "/media/artists/Vero/vero-web-compressed.mp4",
  },
  {
    name: "Emi",
    image: "/media/artists/Emi/emi.jpeg",
    video: "/media/artists/Emi/emi-web-compressed.mp4",
  },
  {
    name: "Selene",
    image: "/media/artists/Selene/selenejpeg.jpeg",
    video: "/media/artists/Selene/selene-web-compressed.mp4",
  },
  {
    name: "Sheila",
    image: "/media/artists/Sheila/sheilaJPEG.jpeg",
    video: "/media/artists/Sheila/sheila-web-compressed.mp4",
  },
  {
    name: "Mica",
    image: "/media/artists/Mica/micafoto.jpeg",
    video: "/media/artists/Mica/mica-web-compressed.mp4",
  },
];

function VolumeIcon({ muted }: { muted: boolean }) {
  return muted ? (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path
        d="M11 5L6 9H3v6h3l5 4V5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17 9L21 15M21 9L17 15" strokeLinecap="round" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path
        d="M11 5L6 9H3v6h3l5 4V5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 8.5a5 5 0 010 7M18 6a8.5 8.5 0 010 12"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArtistCard({
  image,
  video,
  name,
  delay,
}: {
  image: string;
  video: string;
  name: string;
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

  const toggleSound = (event: React.MouseEvent<HTMLButtonElement>) => {
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
            alt={`${name}, bailarina árabe profesional para eventos de Odaliscas Eventos`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
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

          <div
            className={`absolute bottom-4 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/60 bg-black/50 text-white shadow-[0_0_25px_rgba(245,158,11,0.15)] backdrop-blur-md transition-all duration-300 ${
              isHovered
                ? "scale-90 opacity-0"
                : "scale-100 opacity-100"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-0.5 h-4 w-4"
              aria-hidden="true"
            >
              <path d="M8 5.5v13l10-6.5-10-6.5Z" />
            </svg>
          </div>

          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Enable sound" : "Mute video"}
            className={`absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white backdrop-blur-sm transition-all duration-300 hover:border-amber-400 hover:text-amber-400 ${
              isHovered
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <VolumeIcon muted={isMuted} />
          </button>
        </div>
      </div>
    </FadeIn>
  );
}

function AutoVideoCard({
  video,
  title,
  subtitle,
  delay,
}: {
  video: string;
  title: string;
  subtitle: string;
  delay: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.muted = true;

          videoElement
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => {});
        } else {
          videoElement.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(videoElement);

    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    if (!videoRef.current) return;

    const nextMutedState = !isMuted;

    videoRef.current.muted = nextMutedState;
    setIsMuted(nextMutedState);

    if (!nextMutedState) {
      videoRef.current.play().catch(() => {});
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <FadeIn delay={delay}>
      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#090909] transition duration-500 hover:border-amber-400/40">
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="absolute bottom-4 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/60 bg-black/55 text-white backdrop-blur-md transition hover:border-amber-400 hover:text-amber-400"
          >
            {isPlaying ? (
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M7 5h3v14H7zM14 5h3v14h-3z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-0.5 h-4 w-4"
              >
                <path d="M8 5.5v13l10-6.5-10-6.5Z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Enable sound" : "Mute video"}
            className="absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white backdrop-blur-md transition hover:border-amber-400 hover:text-amber-400"
          >
            <VolumeIcon muted={isMuted} />
          </button>
        </div>

        <div className="px-5 py-4">
          <h3 className="text-lg font-medium tracking-wide text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-white/50">{subtitle}</p>
        </div>
      </div>
    </FadeIn>
  );
}

export default function ArtisticRosterSection() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <section
      id="artists"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-amber-400/80">
              {isEnglish ? "ARTISTIC ROSTER" : "NUESTROS ARTISTAS"}
            </p>

            <h2 className="text-4xl font-light tracking-tight text-white md:text-5xl">
              {isEnglish
                ? "Artists for unforgettable"
                : "Artistas para eventos"}
              <span className="block text-white/50">
                {isEnglish
                  ? "Arabic experiences."
                  : "y experiencias árabes."}
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/55">
              {isEnglish
                ? "Our artistic roster brings together professional Arabic dancers, musicians and selected performers available for private events, corporate celebrations, hotels, restaurants and exclusive productions."
                : "Nuestro elenco artístico reúne bailarinas árabes profesionales, músicos y artistas seleccionados para eventos privados, eventos corporativos, hoteles, restaurantes y producciones exclusivas."}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {artists.map((artist, index) => (
            <ArtistCard
              key={artist.name}
              image={artist.image}
              video={artist.video}
              name={artist.name}
              delay={index * 0.08}
            />
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-20">
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-400/80">
                {isEnglish ? "LIVE PERFORMANCE" : "MÚSICA EN VIVO"}
              </p>

              <h3 className="mt-2 text-2xl font-light text-white md:text-3xl">
                Brian Brandán
              </h3>

              <p className="mt-2 text-sm text-white/50">
                {isEnglish
                  ? "Arabic percussion · Live performance"
                  : "Percusionista árabe · Música en vivo"}
              </p>
            </div>

            <AutoVideoCard
              video="/media/artists/brian/Brian-web-mobile.mp4"
              title="Brian Brandán"
              subtitle={
                isEnglish
                  ? "Arabic percussion and live performance for premium events, private celebrations and artistic productions."
                  : "Percusionista especializado en música árabe y performance en vivo para eventos privados, celebraciones y producciones artísticas."
              }
              delay={0.4}
            />
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2">
          <AutoVideoCard
            video="/media/live-music/videos/musica-ambiente-web.mp4"
            title={isEnglish ? "Live Arabic Music" : "Música Árabe en Vivo"}
            subtitle={
              isEnglish
                ? "Professional Arabic musicians for receptions, cocktails, hotels, restaurants and exclusive events."
                : "Música árabe en vivo y músicos profesionales para recepciones, cocktails, hoteles, restaurantes y eventos exclusivos."
            }
            delay={0.5}
          />

          <AutoVideoCard
            video="/media/sunset/videos/sunset-web.mp4"
            title="Sunset Sessions"
            subtitle={
              isEnglish
                ? "An atmospheric experience for golden hour, combining music, rhythm and an immersive aesthetic."
                : "Una experiencia para el atardecer que combina música, ritmo y una estética envolvente."
            }
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}