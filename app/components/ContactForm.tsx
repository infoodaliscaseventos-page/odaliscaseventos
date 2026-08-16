"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const PHONE = "541162721696";

export default function ContactForm() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  function sendWhatsapp() {
    if (!name.trim()) {
      setError(
        isEnglish
          ? "Please enter your name."
          : "Ingresá tu nombre."
      );
      return;
    }

    if (!whatsapp.trim()) {
      setError(
        isEnglish
          ? "Please enter your WhatsApp number."
          : "Ingresá tu WhatsApp."
      );
      return;
    }

    setError("");

    const text = isEnglish
      ? `✨ NEW PROPOSAL REQUEST ✨

👤 Name:
${name}

📱 WhatsApp:
${whatsapp}

📧 Email:
${email || "-"}

🎉 Event type:
${eventType || "-"}

📝 About the event:

${message || "-"}

I look forward to hearing from you so we can design an unforgettable experience together.

— Odaliscas Eventos
`
      : `✨ NUEVA SOLICITUD DE PROPUESTA ✨

👤 Nombre:
${name}

📱 WhatsApp:
${whatsapp}

📧 Email:
${email || "-"}

🎉 Tipo de evento:
${eventType || "-"}

📝 Sobre el evento:

${message || "-"}

Espero su contacto para diseñar juntos una experiencia inolvidable.

— Odaliscas Eventos
`;

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  }

  return (
    <div className="mt-10 space-y-5 md:mt-16 md:space-y-6">

      <input
        type="text"
        placeholder={isEnglish ? "Name *" : "Nombre *"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-2xl bg-zinc-900 px-6 py-5 text-white placeholder:text-zinc-500 outline-none transition focus:ring-1 focus:ring-amber-400 md:px-8 md:py-6"
      />

      <input
        type="tel"
        placeholder={isEnglish ? "WhatsApp *" : "WhatsApp *"}
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        className="w-full rounded-2xl bg-zinc-900 px-6 py-5 text-white placeholder:text-zinc-500 outline-none transition focus:ring-1 focus:ring-amber-400 md:px-8 md:py-6"
      />

      <input
        type="email"
        placeholder={isEnglish ? "Email" : "Email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-2xl bg-zinc-900 px-6 py-5 text-white placeholder:text-zinc-500 outline-none transition focus:ring-1 focus:ring-amber-400 md:px-8 md:py-6"
      />

      <select
        value={eventType}
        onChange={(e) => setEventType(e.target.value)}
        className="w-full rounded-2xl bg-zinc-900 px-6 py-5 text-white outline-none transition focus:ring-1 focus:ring-amber-400 md:px-8 md:py-6"
      >
        <option value="">
          {isEnglish ? "Event type" : "Tipo de evento"}
        </option>

        <option value={isEnglish ? "Wedding" : "Boda"}>
          {isEnglish ? "Wedding" : "Boda"}
        </option>

        <option value={isEnglish ? "Birthday" : "Cumpleaños"}>
          {isEnglish ? "Birthday" : "Cumpleaños"}
        </option>

        <option value={isEnglish ? "Corporate event" : "Evento corporativo"}>
          {isEnglish ? "Corporate event" : "Evento corporativo"}
        </option>

        <option value={isEnglish ? "Hotel" : "Hotel"}>
          Hotel
        </option>

        <option value={isEnglish ? "Private party" : "Fiesta privada"}>
          {isEnglish ? "Private party" : "Fiesta privada"}
        </option>

        <option value={isEnglish ? "Other" : "Otro"}>
          {isEnglish ? "Other" : "Otro"}
        </option>
      </select>

      <textarea
        rows={6}
        placeholder={
          isEnglish
            ? "Tell us about your event..."
            : "Contanos sobre tu evento..."
        }
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full rounded-2xl bg-zinc-900 px-6 py-5 text-white placeholder:text-zinc-500 outline-none transition focus:ring-1 focus:ring-amber-400 md:px-8 md:py-6"
      />

      {error && (
        <p className="text-red-400">
          {error}
        </p>
      )}

      <button
        onClick={sendWhatsapp}
        className="flex w-full justify-center rounded-full bg-amber-400 px-8 py-5 text-lg font-semibold text-black transition hover:bg-amber-300"
      >
        {isEnglish
          ? "Request a proposal"
          : "Solicitar propuesta"}
      </button>

    </div>
  );
}