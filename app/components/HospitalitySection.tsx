"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { usePathname } from "next/navigation";

export default function HospitalitySection() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const whatsappText = isEnglish
    ? "Hello, I am interested in information about your artists and productions for my hotel, restaurant or venue."
    : "Hola, me interesa recibir información sobre sus artistas y producciones para mi hotel, restaurante o venue.";

  const whatsappLink = `https://wa.me/541162721696?text=${encodeURIComponent(
    whatsappText
  )}`;

  const services = isEnglish
    ? [
        "Professional dancers",
        "Live Arabic music",
        "Guest reception & welcome",
        "Sunset Sessions",
        "Musical ambiance",
        "Customized shows",
        "Full artistic productions",
        "Artists for international seasons",
      ]
    : [
        "Bailarinas profesionales",
        "Música árabe en vivo",
        "Recepciones y bienvenida de invitados",
        "Sunset Sessions",
        "Ambientación musical",
        "Shows personalizados",
        "Producciones artísticas integrales",
        "Artistas para temporadas internacionales",
      ];

  return (
    <section className="bg-[#050505] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <div className="space-y-6">
              <div className="overflow-hidden rounded-[30px] shadow-2xl">
                <Image
                  src="/images/hospitality/IA.png"
                  alt={
                    isEnglish
                      ? "Arabic artistic production for an exclusive hotel or venue"
                      : "Producción artística árabe para un hotel o venue exclusivo"
                  }
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="overflow-hidden rounded-[30px] shadow-2xl">
                <Image
                  src="/images/hospitality/sunset.png"
                  alt={
                    isEnglish
                      ? "Sunset Session with DJ and live percussion"
                      : "Sunset Session con DJ y percusión en vivo"
                  }
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-amber-400 md:text-sm">
                HOSPITALITY & VENUES
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-4xl leading-[1.08] text-white md:text-5xl">
                {isEnglish ? (
                  <>
                    Artistic productions
                    <br />
                    for hotels,
                    restaurants
                    <br />
                    and exclusive destinations.
                  </>
                ) : (
                  <>
                    Propuestas artísticas
                    <br />
                    para hoteles,
                    restaurantes
                    <br />
                    y destinos exclusivos.
                  </>
                )}
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 md:text-lg">
                {isEnglish
                  ? "From an elegant reception with live musicians to a complete artistic production, we develop customized proposals for hotels, restaurants, resorts, beach clubs, gastronomic events and exclusive venues."
                  : "Desde una recepción elegante con músicos en vivo hasta una producción artística completa, desarrollamos propuestas personalizadas para hoteles, restaurantes, resorts, beach clubs, eventos gastronómicos y espacios exclusivos."}
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400 md:text-lg">
                {isEnglish
                  ? "We represent professional artists and coordinate every detail to deliver authentic experiences tailored to the identity of each establishment."
                  : "Representamos artistas profesionales y coordinamos cada detalle para brindar experiencias auténticas adaptadas a la identidad de cada establecimiento."}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {services.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="h-2 w-2 shrink-0 rounded-full bg-amber-400" />

                    <span className="text-sm text-white md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-7">
                <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
                  {isEnglish
                    ? "Available worldwide"
                    : "Disponible para todo el mundo"}
                </p>

                <h3 className="mt-4 text-2xl font-light leading-tight text-white md:text-3xl">
                  {isEnglish
                    ? "We take our productions wherever the project requires."
                    : "Llevamos nuestras producciones donde el proyecto lo requiera."}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400 md:text-base">
                  {isEnglish
                    ? "We coordinate artists and productions for hotels, restaurants, resorts, private events and exclusive venues, offering customized solutions for clients anywhere in the world."
                    : "Coordinamos artistas y producciones para hoteles, restaurantes, resorts, eventos privados y venues exclusivos, ofreciendo soluciones personalizadas para clientes de cualquier parte del mundo."}
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex rounded-full bg-amber-400 px-9 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:bg-amber-300"
              >
                {isEnglish
                  ? "Request a personalized proposal"
                  : "Solicitar una propuesta personalizada"}
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}