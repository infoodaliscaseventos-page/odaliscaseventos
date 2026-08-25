"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import { usePathname } from "next/navigation";

const START_TIME = 1;

const artists = [
  {
    id: "julieta",
    image: "/media/artists/Julieta/julieta.jpg",
    video: "/media/artists/Julieta/Julieta-mobile-audio.mp4",
    group: 0,
  },
  {
    id: "maga",
    image: "/media/artists/Maga/maga.jpeg",
    video: "/media/artists/Maga/Maga-mobile-audio.mp4",
    group: 0,
  },
  {
    id: "anto",
    image: "/media/artists/Anto/anto.JPEG",
    video: "/media/artists/Anto/anto-mobile-audio.mp4",
    group: 0,
  },
  {
    id: "mica",
    image: "/media/artists/Mica/micafoto.jpeg",
    video: "/media/artists/Mica/mica-mobile-audio.mp4",
    group: 1,
  },
  {
    id: "vero",
    image: "/media/artists/Vero/verofoto.jpeg",
    video: "/media/artists/Vero/vero-mobile-audio.mp4",
    group: 1,
  },
  {
    id: "emi",
    image: "/media/artists/Emi/emi.jpeg",
    video: "/media/artists/Emi/emi-mobile-audio.mp4",
    group: 1,
  },
  {
    id: "selene",
    image: "/media/artists/Selene/selenejpeg.jpeg",
    video: "/media/artists/Selene/selene-mobile-audio.mp4",
    group: 2,
  },
  {
    id: "sheila",
    image: "/media/artists/Sheila/sheilaJPEG.jpeg",
    video: "/media/artists/Sheila/sheila-mobile-audio.mp4",
    group: 2,
  },
];

type ArtistCardProps = {
  id: string;
  image: string;
  video: string;
  group: number;
  delay: number;
  isEnglish: boolean;
  activeVideo: string | null;
  setActiveVideo: (id: string | null) => void;
  loadedGroups: boolean[];
  loadGroup: (group: number) => void;
};

function ArtistCard({
  id,
  image,
  video,
  group,
  delay,
  isEnglish,
  activeVideo,
  setActiveVideo,
  loadedGroups,
  loadGroup,
}: ArtistCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || loadedGroups[group]) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadGroup(group);
          observer.disconnect();
        }
      },
      {
        rootMargin: "1400px 0px",
        threshold: 0,
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [group, loadedGroups, loadGroup]);

  useEffect(() => {
    if (activeVideo !== id && isPlaying) {
      const videoElement = videoRef.current;

      if (videoElement) {
        videoElement.pause();
        videoElement.muted = true;
      }

      setIsPlaying(false);
      setIsMuted(true);
    }
  }, [activeVideo, id, isPlaying]);

  const handleLoadedMetadata = () => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    try {
      videoElement.currentTime = START_TIME;
    } catch {}
  };

  const startVideo = () => {
    loadGroup(group);
    setActiveVideo(id);

    const videoElement = videoRef.current;

    if (!videoElement) return;

    videoElement.pause();
    videoElement.muted = true;
    videoElement.volume = 1;

    setIsMuted(true);

    const playVideo = () => {
      try {
        videoElement.currentTime = START_TIME;
      } catch {}

      videoElement
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          videoElement.addEventListener(
            "canplay",
            () => {
              try {
                videoElement.currentTime = START_TIME;
              } catch {}

              videoElement
                .play()
                .then(() => {
                  setIsPlaying(true);
                })
                .catch(() => {});
            },
            { once: true }
          );
        });
    };

    if (videoElement.readyState >= 2) {
      playVideo();
    } else {
      videoElement.addEventListener("canplay", playVideo, {
        once: true,
      });

      videoElement.load();
    }
  };

  const toggleSound = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();

    const videoElement = videoRef.current;

    if (!videoElement) return;

    videoElement.muted = !videoElement.muted;
    videoElement.volume = 1;

    setIsMuted(videoElement.muted);
  };

  return (
    <FadeIn delay={delay}>
      <div
        ref={containerRef}
        className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#090909] transition duration-500 hover:border-amber-400/40"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
          <Image
            src={image}
            alt="Odaliscas Eventos artist"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`absolute inset-0 z-10 object-cover transition-opacity duration-300 ${
              isPlaying
                ? "pointer-events-none opacity-0"
                : "opacity-100"
            }`}
          />

          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            preload={loadedGroups[group] ? "auto" : "metadata"}
            onLoadedMetadata={handleLoadedMetadata}
            className={`absolute inset-0 z-20 h-full w-full object-contain transition-opacity duration-300 ${
              isPlaying ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          />

          {!isPlaying && (
            <button
              type="button"
              onClick={startVideo}
              className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/40 bg-black/60 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-amber-400 hover:bg-black/80 hover:text-amber-300"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/50 text-[8px]">
                ▶
              </span>

              {isEnglish ? "Watch video" : "Ver video"}
            </button>
          )}

          {isPlaying && (
            <button
              type="button"
              onClick={toggleSound}
              aria-label={isMuted ? "Turn sound on" : "Mute video"}
              className="absolute bottom-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white backdrop-blur-sm transition-all duration-300 hover:border-amber-400 hover:text-amber-400"
            >
              {isMuted ? "🔇" : "🔊"}
            </button>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

type VideoCardProps = {
  id: string;
  video: string;
  delay: number;
  activeVideo: string | null;
  setActiveVideo: (id: string | null) => void;
  startAtSecond?: boolean;
};

function VideoCard({
  id,
  video,
  delay,
  activeVideo,
  setActiveVideo,
  startAtSecond = true,
}: VideoCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "1600px 0px",
        threshold: 0,
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    if (activeVideo !== id && isPlaying) {
      const videoElement = videoRef.current;

      if (videoElement) {
        videoElement.pause();
        videoElement.muted = true;
      }

      setIsPlaying(false);
      setIsMuted(true);
    }
  }, [activeVideo, id, isPlaying]);

  const handleLoadedMetadata = () => {
    const videoElement = videoRef.current;

    if (!videoElement || !startAtSecond) return;

    try {
      videoElement.currentTime = START_TIME;
    } catch {}
  };

  const startVideo = () => {
    setShouldLoad(true);
    setActiveVideo(id);

    requestAnimationFrame(() => {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      videoElement.pause();
      videoElement.muted = true;
      videoElement.volume = 1;

      setIsMuted(true);

      const playVideo = () => {
        if (startAtSecond) {
          try {
            videoElement.currentTime = START_TIME;
          } catch {}
        }

        videoElement
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            videoElement.addEventListener(
              "canplay",
              () => {
                if (startAtSecond) {
                  try {
                    videoElement.currentTime = START_TIME;
                  } catch {}
                }

                videoElement
                  .play()
                  .then(() => {
                    setIsPlaying(true);
                  })
                  .catch(() => {});
              },
              { once: true }
            );
          });
      };

      if (videoElement.readyState >= 2) {
        playVideo();
      } else {
        videoElement.addEventListener("canplay", playVideo, {
          once: true,
        });

        videoElement.load();
      }
    });
  };

  const toggleSound = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();

    const videoElement = videoRef.current;

    if (!videoElement) return;

    videoElement.muted = !videoElement.muted;
    videoElement.volume = 1;

    setIsMuted(videoElement.muted);
  };

  return (
    <FadeIn delay={delay}>
      <div
        ref={containerRef}
        className="overflow-hidden rounded-[24px] border border-white/10 bg-[#090909] transition duration-500 hover:border-amber-400/40"
      >
        <div className="relative w-full overflow-hidden bg-black">
          {shouldLoad && (
            <video
              ref={videoRef}
              src={video}
              muted
              loop
              playsInline
              preload="auto"
              onLoadedMetadata={handleLoadedMetadata}
              className="block h-auto w-full"
            />
          )}

          {!isPlaying && (
            <button
              type="button"
              onClick={startVideo}
              className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/40 bg-black/60 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-amber-400 hover:bg-black/80 hover:text-amber-300"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/50 text-[8px]">
                ▶
              </span>

              Ver video
            </button>
          )}

          {isPlaying && (
            <button
              type="button"
              onClick={toggleSound}
              aria-label={isMuted ? "Turn sound on" : "Mute video"}
              className="absolute bottom-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white backdrop-blur-sm transition-all duration-300 hover:border-amber-400 hover:text-amber-400"
            >
              {isMuted ? "🔇" : "🔊"}
            </button>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

export default function ArtisticRosterSection() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const [loadedGroups, setLoadedGroups] = useState<boolean[]>([
    true,
    false,
    false,
  ]);

  const loadGroup = (group: number) => {
    setLoadedGroups((current) => {
      if (current[group]) return current;

      const next = [...current];
      next[group] = true;

      return next;
    });
  };

  const whatsappText = isEnglish
    ? "Hello, I would like to learn more about Odaliscas experiences for my event."
    : "Hola, quisiera conocer las experiencias de Odaliscas para mi evento.";

  const whatsappLink = `https://wa.me/541162721696?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <section id="experiencias" className="bg-black py-24 md:py-36">
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

        <div className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-2">
          <ArtistCard
            {...artists[0]}
            delay={0.05}
            isEnglish={isEnglish}
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
            loadedGroups={loadedGroups}
            loadGroup={loadGroup}
          />
          <ArtistCard
            {...artists[1]}
            delay={0.1}
            isEnglish={isEnglish}
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
            loadedGroups={loadedGroups}
            loadGroup={loadGroup}
          />
        </div>

        <div className="mx-auto mt-8 max-w-6xl">
          <VideoCard
            id="live-music"
            video="/media/live-music/videos/musica-ambiente-web.mp4"
            delay={0.15}
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
          />
        </div>

        <div className="mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-2">
          <ArtistCard
            {...artists[2]}
            delay={0.2}
            isEnglish={isEnglish}
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
            loadedGroups={loadedGroups}
            loadGroup={loadGroup}
          />
          <ArtistCard
            {...artists[3]}
            delay={0.25}
            isEnglish={isEnglish}
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
            loadedGroups={loadedGroups}
            loadGroup={loadGroup}
          />
        </div>

        <div className="mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-2">
          <ArtistCard
            {...artists[4]}
            delay={0.3}
            isEnglish={isEnglish}
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
            loadedGroups={loadedGroups}
            loadGroup={loadGroup}
          />
          <ArtistCard
            {...artists[5]}
            delay={0.35}
            isEnglish={isEnglish}
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
            loadedGroups={loadedGroups}
            loadGroup={loadGroup}
          />
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <VideoCard
            id="brian"
            video="/media/artists/brian/Brian-mobile-final.mp4"
            delay={0.4}
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
          />
        </div>

        <div className="mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-2">
          <ArtistCard
            {...artists[6]}
            delay={0.45}
            isEnglish={isEnglish}
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
            loadedGroups={loadedGroups}
            loadGroup={loadGroup}
          />
          <ArtistCard
            {...artists[7]}
            delay={0.5}
            isEnglish={isEnglish}
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
            loadedGroups={loadedGroups}
            loadGroup={loadGroup}
          />
        </div>

        <div className="mx-auto mt-8 max-w-6xl">
          <VideoCard
            id="sunset"
            video="/media/sunset/videos/sunset-web.mp4"
            delay={0.55}
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
          />
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <VideoCard
            id="handpan"
            video="/images/artists/handpan.mp4"
            delay={0.6}
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
            startAtSecond={false}
          />
        </div>

        <FadeIn delay={0.65}>
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
              {isEnglish ? "Design my experience" : "Diseñar mi experiencia"}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}