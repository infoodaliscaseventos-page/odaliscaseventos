"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import { usePathname } from "next/navigation";

export default function ContactSection() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const whatsappText = isEnglish
    ? "Hello, I would like to request a proposal for an event."
    : "Hola, quisiera solicitar una propuesta para un evento.";

  const whatsappLink = `https://wa.me/541162721696?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <section
      id="contacto"
      className="bg-black py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        <p className="text-xs uppercase tracking-[0.55em] text-amber-400 md:text-sm">
          {isEnglish ? "CONTACT" : "CONTACTO"}
        </p>

        <div className="mt-10 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          <div className="order-first lg:order-last">

            <Image
              src="/images/contact/planning-premium.png"
              alt={
                isEnglish
                  ? "Premium event planning"
                  : "Planificación de eventos premium"
              }
              width={1100}
              height={1200}
              priority
              className="w-full rounded-[28px] object-cover shadow-2xl"
            />

          </div>

          <div>

            <h2 className="text-5xl font-light leading-tight text-white md:text-7xl">
              {isEnglish ? (
                <>
                  Let's talk about
                  <br />
                  your event.
                </>
              ) : (
                <>
                  Hablemos sobre
                  <br />
                  tu evento.
                </>
              )}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 md:mt-10 md:text-xl md:leading-10">
              {isEnglish
                ? "Every proposal is designed especially for each client. Tell us your idea and we will create a completely personalized experience."
                : "Cada propuesta es diseñada especialmente para cada cliente. Contanos tu idea y armaremos una experiencia completamente personalizada."}
            </p>

            <div className="mt-10 space-y-5 md:mt-14 md:space-y-6">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white transition hover:text-amber-400"
              >
                <Phone size={22} strokeWidth={1.5} />
                <span className="text-lg md:text-2xl">
                  +54 11 6272 1696
                </span>
              </a>

              <a
                href="mailto:info.odaliscaseventos@gmail.com"
                className="flex items-center gap-4 text-white transition hover:text-amber-400"
              >
                <Mail size={22} strokeWidth={1.5} />
                <span className="break-all text-base md:text-xl">
                  info.odaliscaseventos@gmail.com
                </span>
              </a>

            </div>

            <ContactForm />

          </div>

        </div>

      </div>
    </section>
  );
}