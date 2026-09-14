"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export interface ContactFormProps {
  /** Business name, sent with the enquiry payload. */
  businessName: string;
  /** Business slug, e.g. "fish". */
  businessSlug: string;
  /** Fallback recipient shown when no backend is configured. */
  recipientEmail: string;
  /** POST endpoint for enquiries. Defaults to the platform API route. */
  endpoint?: string;
  className?: string;
}

type Status = "idle" | "submitting" | "success" | "not-configured" | "error";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  /** Honeypot — must stay empty. */
  company: string;
}

const EMPTY: FormValues = { name: "", email: "", phone: "", subject: "", message: "", company: "" };

/**
 * Business enquiry form.
 *
 * It always validates fully and identifies the business in the payload. It
 * only claims "sent" when a backend actually accepted the request:
 *   - if `CONTACT_WEBHOOK_URL` is set in the environment, the platform API
 *     route forwards the enquiry and the form reports success;
 *   - otherwise the API returns 501 and the form honestly shows a "not yet
 *     connected" notice with direct contact details instead of faking it.
 */
export function ContactForm({
  businessName,
  businessSlug,
  recipientEmail,
  endpoint = "/api/contact",
  className,
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormValues, string>>>({});

  const set =
    (key: keyof FormValues) =>
    (event: { target: { value: string } }) => {
      setValues((v) => ({ ...v, [key]: event.target.value }));
    };

  function validate(v: FormValues): Partial<Record<keyof FormValues, string>> {
    const errors: Partial<Record<keyof FormValues, string>> = {};
    if (v.name.trim().length < 2) errors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errors.email = "Please enter a valid email address.";
    if (v.phone && !/^[+0-9()\-\s]{7,}$/.test(v.phone)) errors.phone = "Please enter a valid phone number.";
    if (v.message.trim().length < 10) errors.message = "Please write a short message (at least 10 characters).";
    return errors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const errors = validate(values);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus("submitting");
    setErrorMsg(null);

    const payload = { business: businessSlug, businessName, ...values };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.status === 501) {
        setStatus("not-configured");
        return;
      }
      if (!response.ok) {
        setStatus("error");
        setErrorMsg("The server could not accept this enquiry. Please reach us directly using the details on this page.");
        return;
      }
      setStatus("success");
      setValues(EMPTY);
    } catch {
      // Network unreachable — never pretend the message was delivered.
      setStatus("not-configured");
    }
  }

  const fieldClass = "input w-full";

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-5", className)} noValidate>
      <p className="sr-only" aria-live="polite">
        {status === "success"
          ? "Your enquiry was submitted successfully."
          : status === "not-configured"
            ? "The form is not connected to a backend yet. Please use the direct contact details."
            : ""}
      </p>

      <input
        type="text"
        name="company"
        value={values.company}
        onChange={set("company")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-muted-var">
            Full name <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-name"
            className={fieldClass}
            required
            value={values.name}
            onChange={set("name")}
            autoComplete="name"
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "cf-name-err" : undefined}
          />
          {fieldErrors.name ? <p id="cf-name-err" className="mt-1 text-xs text-[#C0392B]">{fieldErrors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-medium text-muted-var">
            Phone <span className="text-muted-var">(optional)</span>
          </label>
          <input
            id="cf-phone"
            className={fieldClass}
            value={values.phone}
            onChange={set("phone")}
            autoComplete="tel"
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "cf-phone-err" : undefined}
          />
          {fieldErrors.phone ? <p id="cf-phone-err" className="mt-1 text-xs text-[#C0392B]">{fieldErrors.phone}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-muted-var">
          Email <span className="text-accent" aria-hidden="true">*</span>
        </label>
        <input
          id="cf-email"
          type="email"
          className={fieldClass}
          required
          value={values.email}
          onChange={set("email")}
          autoComplete="email"
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? "cf-email-err" : undefined}
        />
        {fieldErrors.email ? <p id="cf-email-err" className="mt-1 text-xs text-[#C0392B]">{fieldErrors.email}</p> : null}
      </div>

      <div>
        <label htmlFor="cf-subject" className="mb-1.5 block text-sm font-medium text-muted-var">
          Subject <span className="text-muted-var">(optional)</span>
        </label>
        <input id="cf-subject" className={fieldClass} value={values.subject} onChange={set("subject")} placeholder={`Enquiry — ${businessName}`} />
      </div>

      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium text-muted-var">
          Message <span className="text-accent" aria-hidden="true">*</span>
        </label>
        <textarea
          id="cf-message"
          className={cn(fieldClass, "min-h-32 resize-y")}
          required
          rows={5}
          value={values.message}
          onChange={set("message")}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "cf-message-err" : undefined}
        />
        {fieldErrors.message ? <p id="cf-message-err" className="mt-1 text-xs text-[#C0392B]">{fieldErrors.message}</p> : null}
      </div>

      {status === "not-configured" ? (
        <div role="alert" className="flex items-start gap-2.5 rounded-md border border-accent bg-brand-soft px-4 py-3">
          <Icon name="mail" className="h-5 w-5 shrink-0 text-accent" />
          <p className="text-sm leading-snug text-muted-var">
            <strong className="font-semibold">This demo form is not connected to an email service yet.</strong>{" "}
            Your enquiry was not sent. Please email us directly at{" "}
            <a href={`mailto:${recipientEmail}`} className="font-medium underline">{recipientEmail}</a>.
          </p>
        </div>
      ) : null}

      {status === "error" ? (
        <div role="alert" className="flex items-start gap-2.5 rounded-md border border-line-var bg-[#FDECEA] px-4 py-3">
          <p className="text-sm text-muted-var">{errorMsg}</p>
        </div>
      ) : null}

      {status === "success" ? (
        <div role="status" className="flex items-start gap-2.5 rounded-md border border-brand bg-brand-soft px-4 py-3">
          <Icon name="check" className="h-5 w-5 shrink-0 text-brand" />
          <p className="text-sm text-muted-var">
            Thank you — your enquiry for <strong className="font-semibold">{businessName}</strong> has been received. We will respond within one working day.
          </p>
        </div>
      ) : null}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Submit enquiry"}
        <Icon name="arrow-right" className="h-4 w-4" />
      </Button>
    </form>
  );
}