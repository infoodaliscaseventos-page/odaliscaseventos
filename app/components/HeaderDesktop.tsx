"use client";

import { usePathname } from "next/navigation";

export default function HeaderDesktop() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const whatsappText = isEnglish
    ? "Hello, I would like to request a proposal for an event."
    : "Hola, quisiera solicitar una propuesta para un evento.";

  const whatsappLink = `https://wa.me/541162721696?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <div className="mx-auto hidden h-20 max-w-7xl items-center justify-between px-8 lg:flex">

      {/* Logo */}

      <a href={isEnglish ? "/en" : "/"} className="flex items-center">
        <img
          src="/images/logo/logo.png"
          alt="Odaliscas Eventos"
          className="h-12 w-12 object-contain transition duration-300 hover:scale-105"
        />
      </a>

      {/* Navegación */}

      <nav className="flex items-center gap-14 uppercase tracking-[0.24em] text-[15px] text-white">

        <a
          href={isEnglish ? "/en" : "/"}
          className="transition hover:text-amber-400"
        >
          {isEnglish ? "HOME" : "INICIO"}
        </a>

        <a
          href={isEnglish ? "/en#experiencias" : "#experiencias"}
          className="transition hover:text-amber-400"
        >
          {isEnglish ? "EXPERIENCES" : "EXPERIENCIAS"}
        </a>

        <a
          href={isEnglish ? "/en#nosotros" : "#nosotros"}
          className="transition hover:text-amber-400"
        >
          {isEnglish ? "ABOUT US" : "NOSOTROS"}
        </a>

        <a
          href={isEnglish ? "/en#contacto" : "#contacto"}
          className="transition hover:text-amber-400"
        >
          {isEnglish ? "CONTACT" : "CONTACTO"}
        </a>

      </nav>

      {/* Idioma + Botón */}

      <div className="flex items-center gap-6">

        <a
          href="/"
          className={`text-sm uppercase tracking-[0.2em] transition ${
            isEnglish
              ? "text-zinc-400 hover:text-amber-400"
              : "text-amber-400 hover:text-amber-300"
          }`}
        >
          ES
        </a>

        <a
          href="/en"
          className={`text-sm uppercase tracking-[0.2em] transition ${
            isEnglish
              ? "text-amber-400 hover:text-amber-300"
              : "text-zinc-400 hover:text-amber-400"
          }`}
        >
          EN
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-amber-500 px-8 py-3 text-[13px] uppercase tracking-[0.22em] text-amber-400 transition-all duration-300 hover:bg-amber-500 hover:text-black"
        >
          {isEnglish ? "REQUEST A PROPOSAL" : "SOLICITAR PROPUESTA"}
        </a>

      </div>

    </div>
  );
}