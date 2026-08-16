import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function GET(
  request: Request,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    const { id } = await context.params;

    const reviewId = Number(id);

    if (!Number.isInteger(reviewId)) {
      return new NextResponse("ID de reseña inválido.", {
        status: 400,
      });
    }

    const url = new URL(request.url);
    const token = url.searchParams.get("token");

    const approvalSecret = process.env.APPROVAL_SECRET;

    if (!approvalSecret || token !== approvalSecret) {
      return new NextResponse(
        "No autorizado.",
        {
          status: 403,
        }
      );
    }

    const result = await sql`
      UPDATE reviews
      SET status = 'approved'
      WHERE id = ${reviewId}
        AND status = 'pending'
      RETURNING id, name
    `;

    if (result.length === 0) {
      return new NextResponse(
        "La reseña no existe o ya fue procesada.",
        {
          status: 404,
        }
      );
    }

    const name = String(result[0].name);

    return new NextResponse(
      `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Reseña aprobada</title>
        </head>

        <body
          style="
            margin: 0;
            padding: 40px 20px;
            background: #050505;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
          "
        >

          <div
            style="
              max-width: 600px;
              margin: 80px auto;
            "
          >

            <div
              style="
                width: 64px;
                height: 64px;
                margin: 0 auto 25px;
                border: 1px solid #d4af37;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #d4af37;
                font-size: 30px;
              "
            >
              ✓
            </div>

            <h1
              style="
                font-weight: 400;
                font-size: 32px;
                margin-bottom: 15px;
              "
            >
              Reseña aprobada
            </h1>

            <p
              style="
                color: #aaa;
                font-size: 16px;
                line-height: 1.7;
              "
            >
              La reseña de
              <strong style="color: white;">
                ${name}
              </strong>
              fue aprobada correctamente.
            </p>

            <p
              style="
                color: #777;
                font-size: 13px;
                margin-top: 30px;
              "
            >
              La reseña ya está marcada como aprobada.
            </p>

          </div>

        </body>
      </html>
      `,
      {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      }
    );
  } catch (error) {
    console.error(
      "Error aprobando reseña:",
      error
    );

    return new NextResponse(
      "Ocurrió un error al aprobar la reseña.",
      {
        status: 500,
      }
    );
  }
}