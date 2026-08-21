"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en");

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black">
      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute h-full w-full object-cover md:h-[90%] md:w-[90%]"
      >
        <source
          src="/images/hero/hero-web-new.mp4"
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/35" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 pb-16 pt-28 text-center md:px-10 md:pb-20">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="/images/logo/logo.png"
            alt="Odaliscas Eventos"
            width={280}
            height={120}
            priority
            className="mx-auto h-auto w-[180px] md:w-[220px]"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex max-w-4xl flex-col items-center"
        >
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-white/80 md:text-xs md:tracking-[0.4em]">
            {isEnglish
              ? "Premium Arabic Experiences"
              : "Experiencias Árabes Premium"}
          </p>

          <h1 className="max-w-4xl text-4xl font-light leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            {isEnglish
              ? "Arabic shows and unforgettable experiences."
              : "Shows árabes y experiencias que nadie olvida."}
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
            {isEnglish
              ? "Belly dancers, Arabic musicians, live orchestras and premium artistic productions for private events, hotels, restaurants and international productions."
              : "Shows de odaliscas, músicos y orquestas árabes en vivo y producciones artísticas premium para eventos privados, hoteles, restaurantes y producciones internacionales."}
          </p>

          {/* BUTTONS */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={
                isEnglish
                  ? "https://wa.me/5491125402146?text=Hello!%20I%20would%20like%20to%20design%20an%20event%20with%20Odaliscas%20Eventos."
                  : "https://wa.me/5491125402146?text=Hola!%20Quisiera%20dise%C3%B1ar%20un%20evento%20con%20Odaliscas%20Eventos."
              }
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-7 py-3 text-center text-xs font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-white/90 md:px-8 md:py-3.5 md:text-sm"
            >
              {isEnglish ? "Design my event" : "Diseñar mi evento"}
            </a>

            <a
              href={isEnglish ? "/en#experiencias" : "#experiencias"}
              className="
                rounded-full border border-white px-7 py-3 text-center
                text-xs text-white transition-all duration-300
                hover:bg-white hover:text-black
                md:px-8 md:py-3.5 md:text-sm
              "
            >
              {isEnglish ? "View experiences" : "Ver experiencias"}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}