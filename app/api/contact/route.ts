import type { NextRequest } from "next/server";

const REQUIRED_FIELDS = ["business", "name", "email", "message"] as const;

/**
 * POST /api/contact — enquiry intake for every business contact form.
 *
 * The form always sends `business`, `businessName` and the field values.
 * This route forwards to CONTACT_WEBHOOK_URL when configured; otherwise it
 * returns 501 so clients can show an honest "backend not connected" notice
 * (they never pretend a message was sent).
 */
export async function POST(request: NextRequest) {
  try {
    const body: Record<string, unknown> = await request.json();

    // Honeypot: silently accept bots without doing anything.
    if (typeof body.company === "string" && body.company !== "") {
      return Response.json({ ok: true, code: "ACCEPTED" });
    }

    for (const field of REQUIRED_FIELDS) {
      if (typeof body[field] !== "string" || (body[field] as string).trim() === "") {
        return Response.json(
          { ok: false, code: "VALIDATION_ERROR", field },
          { status: 400 },
        );
      }
    }

    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (webhook) {
      const upstream = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!upstream.ok) {
        return Response.json({ ok: false, code: "BACKEND_ERROR" }, { status: 502 });
      }
      return Response.json({ ok: true, code: "ACCEPTED" });
    }

    return Response.json(
      {
        ok: false,
        code: "NOT_CONFIGURED",
        hint: "Set CONTACT_WEBHOOK_URL to accept enquiries.",
      },
      { status: 501 },
    );
  } catch {
    return Response.json({ ok: false, code: "BAD_REQUEST" }, { status: 400 });
  }
}