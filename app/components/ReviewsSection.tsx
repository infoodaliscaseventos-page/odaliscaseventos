"use client";

import { useState, useEffect, useRef } from "react";
import FadeIn from "./FadeIn";
import { usePathname } from "next/navigation";

type Review = {
  id: number;
  name: string;
  role: string | null;
  rating: number;
  text: string;
  created_at: string;
};

export default function ReviewsSection() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(5);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const [reviews, setReviews] = useState<Review[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(true);

  const formRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    name: "",
    role: "",
    text: "",
  });

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const response = await fetch("/api/reviews", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(
            isEnglish
              ? "Reviews could not be loaded."
              : "No se pudieron cargar las reseñas."
          );
        }

        const data = await response.json();
        setReviews(data.reviews || []);
      } catch (error) {
        console.error("Error cargando reseñas:", error);
      } finally {
        setLoadingReviews(false);
      }
    };

    loadReviews();
  }, [isEnglish]);

  useEffect(() => {
    if (showForm && formRef.current) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [showForm]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSending(true);
    setError("");

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          role: form.role,
          rating,
          text: form.text,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            (isEnglish
              ? "The review could not be submitted."
              : "No se pudo enviar la reseña.")
        );
      }

      setSubmitted(true);

      setForm({
        name: "",
        role: "",
        text: "",
      });

      setRating(5);
    } catch (error) {
      console.error("Error enviando reseña:", error);

      setError(
        isEnglish
          ? "We couldn't submit your review at this time. Please try again."
          : "No pudimos enviar la reseña en este momento. Por favor, intentá nuevamente."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="resenas"
      className="bg-black py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs uppercase tracking-[0.55em] text-amber-400 md:text-sm">
              {isEnglish
                ? "REAL EXPERIENCES"
                : "EXPERIENCIAS REALES"}
            </p>

            <h2
              className="
                mt-5
                font-[family-name:var(--font-cormorant)]
                text-4xl
                leading-tight
                text-white
                md:text-6xl
              "
            >
              {isEnglish ? (
                <>
                  What our
                  <br />
                  clients say.
                </>
              ) : (
                <>
                  Lo que dicen
                  <br />
                  quienes trabajaron con nosotros.
                </>
              )}
            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-2xl
                text-base
                leading-8
                text-zinc-400
                md:text-lg
              "
            >
              {isEnglish
                ? "Every experience leaves an impression. Here are the words of those who trusted our work."
                : "Cada experiencia deja una impresión. Compartimos las palabras de quienes confiaron en nuestro trabajo."}
            </p>

          </div>
        </FadeIn>

        {!loadingReviews && reviews.length > 0 && (
          <div
            className="
              mx-auto
              mt-14
              grid
              max-w-6xl
              gap-6
              md:mt-16
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {reviews.map((review, index) => (
              <FadeIn
                key={review.id}
                delay={0.1 + index * 0.05}
              >
                <article
                  className="
                    h-full
                    rounded-[26px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-7
                    transition
                    duration-300
                    hover:border-amber-400/20
                    hover:bg-white/[0.05]
                    md:p-8
                  "
                >

                  <div
                    className="
                      mb-5
                      text-lg
                      tracking-[0.15em]
                      text-amber-400
                    "
                  >
                    {"★".repeat(review.rating)}
                    <span className="text-zinc-700">
                      {"★".repeat(5 - review.rating)}
                    </span>
                  </div>

                  <p
                    className="
                      text-sm
                      leading-7
                      text-zinc-300
                      md:text-base
                    "
                  >
                    “{review.text}”
                  </p>

                  <div className="mt-7 border-t border-white/10 pt-5">

                    <p className="text-sm font-medium text-white">
                      {review.name}
                    </p>

                    {review.role && (
                      <p className="mt-1 text-xs text-zinc-500">
                        {review.role}
                      </p>
                    )}

                  </div>

                </article>
              </FadeIn>
            ))}
          </div>
        )}

        {!loadingReviews &&
          reviews.length === 0 &&
          !showForm && (
            <FadeIn delay={0.2}>
              <div
                className="
                  mx-auto
                  mt-14
                  max-w-2xl
                  rounded-[26px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-8
                  py-10
                  text-center
                  md:mt-16
                  md:px-12
                  md:py-12
                "
              >
                <p className="text-base leading-8 text-zinc-400 md:text-lg">
                  {isEnglish
                    ? "We are gathering experiences from our clients, artists and collaborators to share them soon."
                    : "Estamos recopilando las experiencias de nuestros clientes, artistas y colaboradores para compartirlas próximamente."}
                </p>
              </div>
            </FadeIn>
          )}

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">

            <button
              type="button"
              onClick={() => {
                setShowForm(!showForm);
                setSubmitted(false);
                setError("");
              }}
              className="
                inline-flex
                rounded-full
                border
                border-amber-400
                px-8
                py-4
                text-sm
                font-medium
                text-amber-400
                transition
                duration-300
                hover:bg-amber-400
                hover:text-black
              "
            >
              {showForm
                ? isEnglish
                  ? "Close form"
                  : "Cerrar formulario"
                : isEnglish
                  ? "Leave a review"
                  : "Dejar una reseña"}
            </button>

          </div>
        </FadeIn>

        {showForm && (
          <FadeIn>
            <div
              ref={formRef}
              className="
                mx-auto
                mt-12
                max-w-2xl
                scroll-mt-24
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.03]
                p-7
                md:p-10
              "
            >

              {!submitted ? (
                <>
                  <div className="text-center">

                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.45em]
                        text-amber-400
                      "
                    >
                      {isEnglish
                        ? "SHARE YOUR EXPERIENCE"
                        : "COMPARTÍ TU EXPERIENCIA"}
                    </p>

                    <h3
                      className="
                        mt-4
                        font-[family-name:var(--font-cormorant)]
                        text-3xl
                        text-white
                        md:text-4xl
                      "
                    >
                      {isEnglish
                        ? "Leave a review"
                        : "Dejá una reseña"}
                    </h3>

                    <p
                      className="
                        mx-auto
                        mt-4
                        max-w-lg
                        text-sm
                        leading-7
                        text-zinc-400
                      "
                    >
                      {isEnglish
                        ? "We would love to hear about your experience working with Odaliscas Eventos."
                        : "Nos gustaría conocer tu experiencia trabajando con Odaliscas Eventos."}
                    </p>

                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-6"
                  >

                    <div>
                      <label
                        htmlFor="name"
                        className="
                          mb-2
                          block
                          text-sm
                          text-zinc-300
                        "
                      >
                        {isEnglish ? "Name" : "Nombre"}
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder={
                          isEnglish
                            ? "Your name"
                            : "Tu nombre"
                        }
                        className="
                          w-full
                          rounded-2xl
                          border
                          border-white/10
                          bg-black/40
                          px-5
                          py-4
                          text-white
                          outline-none
                          placeholder:text-zinc-600
                          focus:border-amber-400/60
                        "
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="role"
                        className="
                          mb-2
                          block
                          text-sm
                          text-zinc-300
                        "
                      >
                        {isEnglish
                          ? "Company or profession"
                          : "Empresa o profesión"}

                        <span className="ml-2 text-zinc-600">
                          {isEnglish
                            ? "(optional)"
                            : "(opcional)"}
                        </span>
                      </label>

                      <input
                        id="role"
                        name="role"
                        type="text"
                        value={form.role}
                        onChange={handleChange}
                        placeholder={
                          isEnglish
                            ? "e.g. Hotel / Production Company / Artist"
                            : "Ej. Hotel / Productora / Artista"
                        }
                        className="
                          w-full
                          rounded-2xl
                          border
                          border-white/10
                          bg-black/40
                          px-5
                          py-4
                          text-white
                          outline-none
                          placeholder:text-zinc-600
                          focus:border-amber-400/60
                        "
                      />
                    </div>

                    <div>
                      <p
                        className="
                          mb-3
                          text-sm
                          text-zinc-300
                        "
                      >
                        {isEnglish
                          ? "Your rating"
                          : "Tu valoración"}
                      </p>

                      <div className="flex gap-2">

                        {Array.from({ length: 5 }).map(
                          (_, index) => {
                            const value = index + 1;

                            return (
                              <button
                                key={value}
                                type="button"
                                onClick={() => setRating(value)}
                                aria-label={
                                  isEnglish
                                    ? `${value} stars`
                                    : `${value} estrellas`
                                }
                                className={`
                                  text-3xl
                                  transition
                                  duration-200
                                  hover:scale-110
                                  ${
                                    value <= rating
                                      ? "text-amber-400"
                                      : "text-zinc-700"
                                  }
                                `}
                              >
                                ★
                              </button>
                            );
                          }
                        )}

                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="text"
                        className="
                          mb-2
                          block
                          text-sm
                          text-zinc-300
                        "
                      >
                        {isEnglish
                          ? "Your experience"
                          : "Tu experiencia"}
                      </label>

                      <textarea
                        id="text"
                        name="text"
                        required
                        rows={5}
                        value={form.text}
                        onChange={handleChange}
                        placeholder={
                          isEnglish
                            ? "Tell us briefly about your experience..."
                            : "Contanos brevemente cómo fue tu experiencia..."
                        }
                        className="
                          w-full
                          resize-none
                          rounded-2xl
                          border
                          border-white/10
                          bg-black/40
                          px-5
                          py-4
                          text-white
                          outline-none
                          placeholder:text-zinc-600
                          focus:border-amber-400/60
                        "
                      />
                    </div>

                    <p
                      className="
                        text-xs
                        leading-6
                        text-zinc-500
                      "
                    >
                      {isEnglish
                        ? "Reviews are reviewed before being published."
                        : "Las reseñas son revisadas antes de ser publicadas."}
                    </p>

                    {error && (
                      <div
                        className="
                          rounded-2xl
                          border
                          border-red-500/20
                          bg-red-500/5
                          px-5
                          py-4
                          text-sm
                          leading-6
                          text-red-300
                        "
                      >
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="
                        w-full
                        rounded-full
                        bg-amber-400
                        px-8
                        py-4
                        text-sm
                        font-semibold
                        text-black
                        transition
                        duration-300
                        hover:scale-[1.02]
                        hover:bg-amber-300
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                      "
                    >
                      {sending
                        ? isEnglish
                          ? "Sending..."
                          : "Enviando..."
                        : isEnglish
                          ? "Submit review"
                          : "Enviar reseña"}
                    </button>

                  </form>
                </>
              ) : (
                <div className="py-10 text-center">

                  <div
                    className="
                      mx-auto
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-amber-400/40
                      text-2xl
                      text-amber-400
                    "
                  >
                    ✓
                  </div>

                  <h3
                    className="
                      mt-6
                      font-[family-name:var(--font-cormorant)]
                      text-3xl
                      text-white
                    "
                  >
                    {isEnglish
                      ? "Thank you for sharing your experience!"
                      : "¡Gracias por compartir tu experiencia!"}
                  </h3>

                  <p
                    className="
                      mx-auto
                      mt-4
                      max-w-md
                      text-sm
                      leading-7
                      text-zinc-400
                    "
                  >
                    {isEnglish
                      ? "Your review has been received and will be reviewed before being published on Odaliscas Eventos."
                      : "Tu reseña fue recibida y será revisada antes de ser publicada en Odaliscas Eventos."}
                  </p>

                </div>
              )}

            </div>
          </FadeIn>
        )}

      </div>
    </section>
  );
}