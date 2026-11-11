// Receives submissions from the cloned Contact Form 7 forms.
//
// The source posts to its WordPress backend, which this clone does not have. Set CONTACT_WEBHOOK_URL
// to forward submissions (as JSON) to your own endpoint. Without it, development logs the submission
// and reports success; production reports a failure so visitors are never told a message was sent.

interface Submission {
  form: string;
  fields: Record<string, string>;
}

function isSubmission(value: unknown): value is Submission {
  if (typeof value !== "object" || value === null) return false;
  const { form, fields } = value as Record<string, unknown>;
  return (
    typeof form === "string" &&
    typeof fields === "object" &&
    fields !== null &&
    Object.values(fields).every((field) => typeof field === "string" && field.length <= 4000)
  );
}

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  if (!isSubmission(body)) {
    return Response.json({ status: "validation_failed" }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    const forwarded = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).catch(() => null);
    return forwarded?.ok
      ? Response.json({ status: "mail_sent" })
      : Response.json({ status: "mail_failed" }, { status: 502 });
  }

  if (process.env.NODE_ENV !== "production") {
    console.info("[contact] submission (not delivered: CONTACT_WEBHOOK_URL is not set)", body);
    return Response.json({ status: "mail_sent" });
  }
  return Response.json({ status: "mail_failed" }, { status: 503 });
}
