export default function HeaderDesktop() {
  const whatsappLink =
    "https://wa.me/541162721696?text=Hola,%20quisiera%20solicitar%20una%20propuesta%20para%20un%20evento.";

  return (
    <div className="mx-auto hidden h-20 max-w-7xl items-center justify-between px-8 lg:flex">

      {/* Logo */}

      <a href="#" className="flex items-center">
        <img
          src="/images/logo/logo.png"
          alt="Odaliscas Eventos"
          className="h-12 w-12 object-contain transition duration-300 hover:scale-105"
        />
      </a>

      {/* Navegación */}

      <nav className="flex items-center gap-14 uppercase tracking-[0.24em] text-[15px] text-white">

        <a
          href="#"
          className="transition hover:text-amber-400"
        >
          HOME
        </a>

        <a
          href="#experiencias"
          className="transition hover:text-amber-400"
        >
          EXPERIENCES
        </a>

        <a
          href="#nosotros"
          className="transition hover:text-amber-400"
        >
          ABOUT US
        </a>

        <a
          href="#contacto"
          className="transition hover:text-amber-400"
        >
          CONTACT
        </a>

      </nav>

      {/* Idioma + Botón */}

      <div className="flex items-center gap-6">

        <a
          href="/"
          className="text-sm uppercase tracking-[0.2em] text-zinc-400 transition hover:text-amber-400"
        >
          ES
        </a>

        <a
          href="/en"
          className="text-sm uppercase tracking-[0.2em] text-amber-400 transition hover:text-amber-300"
        >
          EN
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-amber-500 px-8 py-3 text-[13px] uppercase tracking-[0.22em] text-amber-400 transition-all duration-300 hover:bg-amber-500 hover:text-black"
        >
          REQUEST A PROPOSAL
        </a>

      </div>

    </div>
  );
}