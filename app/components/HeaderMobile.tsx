"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function HeaderMobile() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const [open, setOpen] = useState(false);

  const whatsappText = isEnglish
    ? "Hello, I would like to request a proposal for an event."
    : "Hola, quisiera solicitar una propuesta para un evento.";

  const whatsappLink = `https://wa.me/541162721696?text=${encodeURIComponent(
    whatsappText
  )}`;

  const closeMenu = () => setOpen(false);

  return (
    <div className="lg:hidden">
      {/* Header */}

      <div className="fixed left-0 right-0 top-0 z-50 flex h-20 items-center justify-between border-b border-white/10 bg-black/70 px-5 backdrop-blur-md">
        <a
          href={isEnglish ? "/en" : "/"}
          onClick={closeMenu}
          className="flex items-center"
        >
          <img
            src="/images/logo/logo.png"
            alt="Odaliscas Eventos"
            className="h-11 w-11 object-contain"
          />
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-amber-400 hover:text-amber-400"
        >
          {open ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 7H20" strokeLinecap="round" />
              <path d="M4 12H20" strokeLinecap="round" />
              <path d="M4 17H20" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Menú */}

      {open && (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-black/95 px-8 pb-10 pt-28 backdrop-blur-xl">
          <nav className="flex flex-col gap-6 text-sm uppercase tracking-[0.25em] text-white">
            <a
              href={isEnglish ? "/en" : "/"}
              onClick={closeMenu}
              className="transition hover:text-amber-400"
            >
              {isEnglish ? "HOME" : "INICIO"}
            </a>

            <a
              href={isEnglish ? "/en#experiencias" : "#experiencias"}
              onClick={closeMenu}
              className="transition hover:text-amber-400"
            >
              {isEnglish ? "EXPERIENCES" : "EXPERIENCIAS"}
            </a>

            <a
              href={isEnglish ? "/en#artistas" : "#artistas"}
              onClick={closeMenu}
              className="transition hover:text-amber-400"
            >
              {isEnglish ? "ARTISTS" : "ARTISTAS"}
            </a>

            <a
              href={isEnglish ? "/en#gastronomia" : "#gastronomia"}
              onClick={closeMenu}
              className="transition hover:text-amber-400"
            >
              {isEnglish ? "GASTRONOMY" : "GASTRONOMÍA"}
            </a>

            <a
              href={isEnglish ? "/en#nosotros" : "#nosotros"}
              onClick={closeMenu}
              className="transition hover:text-amber-400"
            >
              {isEnglish ? "ABOUT" : "NOSOTROS"}
            </a>

            <a
              href={isEnglish ? "/en#contacto" : "#contacto"}
              onClick={closeMenu}
              className="transition hover:text-amber-400"
            >
              {isEnglish ? "CONTACT" : "CONTACTO"}
            </a>

            <div className="my-3 h-px w-full bg-white/10" />

            <div className="flex items-center gap-5">
              <a
                href="/"
                onClick={closeMenu}
                className={`transition ${
                  isEnglish ? "text-zinc-500" : "text-amber-400"
                }`}
              >
                ES
              </a>

              <a
                href="/en"
                onClick={closeMenu}
                className={`transition ${
                  isEnglish ? "text-amber-400" : "text-zinc-500"
                }`}
              >
                EN
              </a>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-3 rounded-full border border-amber-500 px-6 py-4 text-center text-xs tracking-[0.2em] text-amber-400 transition hover:bg-amber-500 hover:text-black"
            >
              {isEnglish
                ? "REQUEST A PROPOSAL"
                : "SOLICITAR PROPUESTA"}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}