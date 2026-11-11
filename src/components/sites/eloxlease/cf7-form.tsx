"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

// Contact Form 7's Dutch (nl_NL) messages.
const MESSAGES = {
  required: "Vul dit veld in.",
  email: "Vul een e-mailadres in.",
  tel: "Vul een telefoonnummer in.",
  number: "Vul een getal in.",
  validation: "Een of meer velden bevatten een fout. Controleer ze en probeer het opnieuw.",
  sent: "Bedankt voor je bericht. Het is verzonden.",
  failed: "Er is een fout opgetreden bij het verzenden van je bericht. Probeer het later opnieuw.",
};

type Status = "init" | "submitting" | "invalid" | "sent" | "failed";

type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function fieldError(field: Field): string | null {
  const value = field.value.trim();
  const required =
    field.getAttribute("aria-required") === "true" || field.classList.contains("wpcf7-validates-as-required");
  if (required && !value) return MESSAGES.required;
  if (!value) return null;
  if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return MESSAGES.email;
  if (field.type === "tel" && !/^[+()\d\s-]{6,}$/.test(value)) return MESSAGES.tel;
  if (field.type === "number" && Number.isNaN(Number(value))) return MESSAGES.number;
  return null;
}

/**
 * Wraps the source's Contact Form 7 markup (passed as children) with CF7's client behaviour:
 * the submit button stays disabled until the acceptance checkbox is ticked, invalid fields get an
 * inline tip, and a response message is shown under the form.
 */
export function Cf7Form({
  formName,
  className,
  children,
}: {
  formName: string;
  className?: string;
  children: React.ReactNode;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("init");
  const [accepted, setAccepted] = useState(false);
  const [hasAcceptance, setHasAcceptance] = useState(false);

  useEffect(() => {
    setHasAcceptance(Boolean(formRef.current?.querySelector(".wpcf7-acceptance input[type=checkbox]")));
  }, []);

  useEffect(() => {
    const submit = formRef.current?.querySelector<HTMLInputElement>("input[type=submit]");
    if (submit) submit.disabled = (hasAcceptance && !accepted) || status === "submitting";
  }, [accepted, hasAcceptance, status]);

  const onChange = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    if (target.closest(".wpcf7-acceptance")) setAccepted(target.checked);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = [...form.querySelectorAll<Field>("input:not([type=submit]):not([type=checkbox]), select, textarea")];

    let valid = true;
    for (const field of fields) {
      const error = fieldError(field);
      const wrap = field.closest(".wpcf7-form-control-wrap");
      field.setAttribute("aria-invalid", error ? "true" : "false");
      field.classList.toggle("wpcf7-not-valid", Boolean(error));
      if (error) {
        wrap?.setAttribute("data-error", error);
        valid = false;
      } else {
        wrap?.removeAttribute("data-error");
      }
    }
    if (!valid) {
      setStatus("invalid");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form: formName, fields: Object.fromEntries(new FormData(form)) }),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setAccepted(false);
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  };

  const message =
    status === "invalid"
      ? MESSAGES.validation
      : status === "sent"
        ? MESSAGES.sent
        : status === "failed"
          ? MESSAGES.failed
          : null;

  return (
    <div className="wpcf7" lang="nl-NL" dir="ltr">
      <form
        ref={formRef}
        className={cn("wpcf7-form", status, className)}
        aria-label="Contactformulier"
        noValidate
        data-status={status}
        onChange={onChange}
        onSubmit={onSubmit}
      >
        {children}
        <div
          className={cn(
            "wpcf7-response-output",
            status === "sent" && "wpcf7-mail-sent-ok",
            (status === "invalid" || status === "failed") && "wpcf7-validation-errors",
          )}
          aria-hidden={message ? undefined : true}
          role={message ? "status" : undefined}
        >
          {message}
        </div>
      </form>
    </div>
  );
}
