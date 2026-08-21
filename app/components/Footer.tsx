"use client";

import { Mail, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const whatsappText = isEnglish
    ? "Hello, I would like to request a proposal for an event."
    : "Hola, quisiera solicitar una propuesta para un evento.";

  const whatsappLink = `https://wa.me/541162721696?text=${encodeURIComponent(
    whatsappText
  )}`;

  const instagramLink = "https://instagram.com/odaliscas.eventos";

  return (
    <footer className="border-t border-white/10 bg-[#030303]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr_1fr]">

          {/* Marca */}

          <div>
            <img
              src="/images/logo/logo.png"
              alt={
                isEnglish
                  ? "Odaliscas Eventos - Arabic entertainment and artistic production"
                  : "Odaliscas Eventos - entretenimiento árabe y producción artística"
              }
              className="mb-8 w-20"
            />

            <h3 className="text-4xl font-light text-white">
              Odaliscas Eventos
            </h3>

            <div className="mt-6 h-px w-20 bg-amber-400" />

            <p className="mt-8 max-w-sm text-lg leading-9 text-zinc-400">
              {isEnglish
                ? "Arabic entertainment and artistic production for private events, weddings, hotels, restaurants, corporate events and special celebrations."
                : "Entretenimiento árabe y producción artística para eventos privados, casamientos, hoteles, restaurantes, eventos corporativos y celebraciones especiales."}
            </p>
          </div>

          {/* Navegación */}

          <div>
            <h4 className="mb-8 text-sm uppercase tracking-[0.45em] text-amber-400">
              {isEnglish ? "Navigation" : "Navegación"}
            </h4>

            <nav className="space-y-5">
              <a
                href={isEnglish ? "/en" : "#"}
                className="block text-zinc-300 transition hover:text-amber-400"
              >
                {isEnglish ? "Home" : "Inicio"}
              </a>

              <a
                href={isEnglish ? "/en#experiencias" : "#experiencias"}
                className="block text-zinc-300 transition hover:text-amber-400"
              >
                {isEnglish ? "Experiences" : "Experiencias"}
              </a>

              <a
                href={isEnglish ? "/en#nosotros" : "#nosotros"}
                className="block text-zinc-300 transition hover:text-amber-400"
              >
                {isEnglish ? "About us" : "Nosotros"}
              </a>

              <a
                href={isEnglish ? "/en#contacto" : "#contacto"}
                className="block text-zinc-300 transition hover:text-amber-400"
              >
                {isEnglish ? "Request a proposal" : "Solicitar propuesta"}
              </a>
            </nav>
          </div>

          {/* Contacto */}

          <div>
            <h4 className="mb-8 text-sm uppercase tracking-[0.45em] text-amber-400">
              {isEnglish ? "Contact" : "Contacto"}
            </h4>

            <div className="space-y-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-zinc-300 transition hover:text-amber-400"
              >
                <Phone size={18} strokeWidth={1.5} />

                <span>+54 11 6272 1696</span>
              </a>

              <a
                href="mailto:info.odaliscaseventos@gmail.com"
                className="flex items-center gap-4 text-zinc-300 transition hover:text-amber-400"
              >
                <Mail size={18} strokeWidth={1.5} />

                <span>info.odaliscaseventos@gmail.com</span>
              </a>

              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  isEnglish
                    ? "Odaliscas Eventos on Instagram"
                    : "Instagram de Odaliscas Eventos"
                }
                className="inline-flex items-center gap-4 text-zinc-300 transition hover:text-amber-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    width="20"
                    height="20"
                    x="2"
                    y="2"
                    rx="5"
                    ry="5"
                  />

                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

                  <line
                    x1="17.5"
                    x2="17.51"
                    y1="6.5"
                    y2="6.5"
                  />
                </svg>

                <span>@odaliscas.eventos</span>
              </a>
            </div>
          </div>
        </div>

        <div className="my-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row">
          <p className="text-sm tracking-wide text-zinc-500">
            © {new Date().getFullYear()} Odaliscas Eventos.{" "}
            {isEnglish
              ? "All rights reserved."
              : "Todos los derechos reservados."}
          </p>

          <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">
            {isEnglish
              ? "Arabic Entertainment & Artistic Production"
              : "Entretenimiento Árabe & Producción Artística"}
          </p>
        </div>
      </div>
    </footer>
  );
}