import { NextResponse } from "next/server";
import { Resend } from "resend";
import { neon } from "@neondatabase/serverless";

const resend = new Resend(process.env.RESEND_API_KEY);
const sql = neon(process.env.DATABASE_URL!);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getBaseUrl(request: Request) {
  const url = new URL(request.url);

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  return `${url.protocol}//${url.host}`;
}

// GET — obtiene solamente las reseñas aprobadas
export async function GET() {
  try {
    const reviews = await sql`
      SELECT
        id,
        name,
        role,
        rating,
        text,
        created_at
      FROM reviews
      WHERE status = 'approved'
      ORDER BY created_at DESC
    `;

    return NextResponse.json({
      reviews,
    });
  } catch (error) {
    console.error("Error obteniendo reseñas:", error);

    return NextResponse.json(
      {
        error: "No se pudieron obtener las reseñas.",
      },
      { status: 500 }
    );
  }
}

// POST — recibe y guarda una nueva reseña
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const role = String(body.role || "").trim();
    const text = String(body.text || "").trim();
    const rating = Number(body.rating);

    if (!name || !text || !rating) {
      return NextResponse.json(
        {
          error: "Faltan datos obligatorios.",
        },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        {
          error: "La valoración debe estar entre 1 y 5 estrellas.",
        },
        { status: 400 }
      );
    }

    // Guardamos la reseña como pendiente
    const result = await sql`
      INSERT INTO reviews (
        name,
        role,
        rating,
        text,
        status
      )
      VALUES (
        ${name},
        ${role || null},
        ${rating},
        ${text},
        'pending'
      )
      RETURNING id
    `;

    const reviewId = result[0].id;

    const safeName = escapeHtml(name);
    const safeRole = escapeHtml(role);
    const safeText = escapeHtml(text);

    const baseUrl = getBaseUrl(request);

    const approvalSecret = process.env.APPROVAL_SECRET;

if (!approvalSecret) {
  throw new Error("APPROVAL_SECRET no está configurado.");
}

const approveUrl =
  `${baseUrl}/api/reviews/${reviewId}/approve?token=${encodeURIComponent(
    approvalSecret
  )}`;

    const { error } = await resend.emails.send({
      from: "Odaliscas Eventos <onboarding@resend.dev>",
      to: ["info.odaliscaseventos@gmail.com"],
      subject: "Nueva reseña para Odaliscas Eventos",
      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #222;
            max-width: 650px;
            margin: 0 auto;
          "
        >

          <h2 style="color: #b8860b;">
            Nueva reseña para Odaliscas Eventos
          </h2>

          <p>
            Se recibió una nueva reseña desde la página web.
          </p>

          <hr />

          <p>
            <strong>Nombre:</strong><br />
            ${safeName}
          </p>

          ${
            safeRole
              ? `
                <p>
                  <strong>Empresa / profesión:</strong><br />
                  ${safeRole}
                </p>
              `
              : ""
          }

          <p>
            <strong>Valoración:</strong><br />
            ${"★".repeat(rating)}
            ${"☆".repeat(5 - rating)}
          </p>

          <p>
            <strong>Experiencia:</strong><br />
            ${safeText}
          </p>

          <hr />

          <p>
            <strong>Estado:</strong>
            Pendiente de aprobación
          </p>

          <p>
            <strong>ID de reseña:</strong>
            ${reviewId}
          </p>

          <div
            style="
              margin-top: 30px;
              text-align: center;
            "
          >

            <a
              href="${approveUrl}"
              style="
                display: inline-block;
                background-color: #b8860b;
                color: #ffffff;
                text-decoration: none;
                padding: 15px 28px;
                border-radius: 8px;
                font-weight: bold;
                margin: 5px;
              "
            >
              ✓ APROBAR RESEÑA
            </a>

          </div>

          <p
            style="
              margin-top: 30px;
              color: #777;
              font-size: 13px;
            "
          >
            La reseña no se publicará hasta que sea aprobada.
            Si decidís no aprobarla, simplemente no hagas nada.
          </p>

        </div>
      `,
    });

    if (error) {
      console.error("Error enviando email:", error);

      return NextResponse.json(
        {
          error:
            "La reseña se guardó, pero no se pudo enviar el email.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      reviewId,
    });

  } catch (error) {
    console.error("Error procesando reseña:", error);

    return NextResponse.json(
      {
        error: "Ocurrió un error al procesar la reseña.",
      },
      { status: 500 }
    );
  }
}