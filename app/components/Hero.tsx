"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const whatsappText = isEnglish
    ? "Hello, I would like to request a proposal for an event."
    : "Hola, quisiera solicitar una propuesta para un evento.";

  const whatsappLink = `https://wa.me/541162721696?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <section className="relative overflow-hidden bg-black">

      <div
        className="
          relative flex min-h-[120vh] w-full items-start justify-center
          overflow-hidden bg-black md:min-h-[260vh]
        "
      >

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="
            absolute left-1/2 top-0 h-[120vh] w-auto max-w-none
            -translate-x-1/2 object-contain md:h-[260vh]
          "
        >
          <source
            src="/images/hero/hero-web.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/50" />

        <div
          className="
            relative z-10 flex min-h-[120vh] w-full items-center justify-center
            px-5 pt-20 md:min-h-screen md:px-6 md:pt-24
          "
        >

          <div
            className="
              mx-auto flex max-w-5xl flex-col items-center text-center
            "
          >

            <motion.img
              src="/images/logo/logo.png"
              alt="Odaliscas Eventos"
              className="mb-4 w-16 md:mb-8 md:w-48"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />

            <motion.p
              className="
                mb-3 text-[8px] uppercase tracking-[3px] text-amber-400
                md:mb-5 md:text-xs md:tracking-[7px]
              "
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              {isEnglish
                ? "PREMIUM ARABIC EXPERIENCES"
                : "EXPERIENCIAS ÁRABES PREMIUM"}
            </motion.p>

            <motion.h1
              className="
                max-w-[340px] font-[family-name:var(--font-cormorant)]
                text-[30px] font-medium leading-[1.05] tracking-tight text-white
                md:max-w-4xl md:text-6xl
              "
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              {isEnglish ? (
                <>
                  We create experiences
                  <br />
                  no one forgets.
                </>
              ) : (
                <>
                  Creamos experiencias
                  <br />
                  que nadie olvida.
                </>
              )}
            </motion.h1>

            <motion.p
              className="
                mt-4 max-w-[320px] text-[12px] leading-5 text-white/80
                md:mt-7 md:max-w-3xl md:text-lg md:leading-8
              "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
            >
              {isEnglish
                ? "We create premium artistic experiences for hotels, restaurants, private events and international productions."
                : "Creamos experiencias artísticas premium para hoteles, restaurantes, eventos privados y producciones internacionales."}
            </motion.p>

            <motion.div
              className="
                mt-7 flex w-full max-w-[300px] flex-col gap-3
                md:mt-10 md:max-w-none md:flex-row md:justify-center
              "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full bg-amber-400 px-7 py-3 text-center text-xs
                  font-semibold text-black transition-all duration-300
                  hover:scale-105 hover:bg-amber-300
                  md:px-8 md:py-3.5 md:text-sm
                "
              >
                {isEnglish
                  ? "Design my event"
                  : "Diseñar mi evento"}
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
                {isEnglish
                  ? "View experiences"
                  : "Ver experiencias"}
              </a>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}