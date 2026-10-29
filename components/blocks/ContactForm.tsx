"use client";

import { useEffect, useState } from "react";
import { buttonClasses } from "@/components/ui/Button";
import { formCc, formEndpoint, formRecipient, formSubject } from "@/content/contact";
import { contactSection, industriesV2 } from "@/content/es";
import { cn } from "@/lib/utils";

const f = contactSection.form;

const control =
  "w-full rounded-none border-0 border-b border-line-strong bg-transparent py-3 text-base leading-body text-ink outline-none";

function Field({
  label,
  name,
  required,
  full,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={cn(full && "sm:col-span-2")}>
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-semibold uppercase leading-body text-muted md:text-base"
      >
        {label}
        {required ? " *" : ""}
      </label>
      <div className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-navy after:transition-transform after:duration-500 after:ease-brand focus-within:after:scale-x-100">
        {children}
      </div>
    </div>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  // El aviso de éxito se oculta solo al minuto.
  useEffect(() => {
    if (!sent) return;
    const timer = setTimeout(() => setSent(false), 60_000);
    return () => clearTimeout(timer);
  }, [sent]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    setFailed(false);
    setSent(false);

    // Campo trampa para bots: si viene completo, se simula el éxito sin enviar.
    if (String(data.get("_honey") ?? "")) {
      setSent(true);
      form.reset();
      return;
    }

    const payload: Record<string, string> = {
      _subject: formSubject,
      _template: "table",
      _captcha: "false",
    };
    for (const [key, value] of data.entries()) {
      if (key === "_honey") continue;
      const text = String(value).trim();
      if (text) payload[key] = text;
    }
    if (email) payload._replyto = email;
    if (formCc) payload._cc = formCc;

    setSending(true);
    try {
      if (!formRecipient) throw new Error("NEXT_PUBLIC_FORM_RECIPIENT sin definir");
      const res = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => null);
      if (!res.ok || result?.success === "false" || result?.success === false) {
        throw new Error("send failed");
      }
      setSent(true);
      form.reset();
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-white bg-white p-6 lg:p-10"
    >
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
        <Field label={f.name} name="name" required>
          <input id="name" name="name" type="text" required autoComplete="name" className={control} />
        </Field>
        <Field label={f.company} name="company" required>
          <input id="company" name="company" type="text" required autoComplete="organization" className={control} />
        </Field>
        <Field label={f.email} name="email" required>
          <input id="email" name="email" type="email" required autoComplete="email" className={control} />
        </Field>
        <Field label={f.phone} name="phone">
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={control} />
        </Field>
        <Field label={f.message} name="message" required full>
          <textarea id="message" name="message" rows={2} required className={cn(control, "resize-y")} />
        </Field>
        <Field label={f.industry} name="industry">
          <select id="industry" name="industry" defaultValue="" className={control}>
            <option value="">{f.industryDefault}</option>
            {industriesV2.items.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </Field>
        <Field label={f.channel} name="channel">
          <select id="channel" name="channel" defaultValue="" className={control}>
            <option value="">{f.industryDefault}</option>
            {f.channelOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
        <Field label={f.window} name="window" full>
          <select id="window" name="window" defaultValue="" className={control}>
            <option value="">{f.industryDefault}</option>
            {f.windowOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {sent ? (
        <p role="status" className="mt-6 text-base leading-body text-navy">
          <span className="font-bold">{f.successTitle}</span>
        </p>
      ) : null}

      {failed ? (
        <p role="alert" className="mt-6 text-base leading-body text-danger">
          {f.errorSend}
        </p>
      ) : null}

      <div className="mt-8 flex sm:justify-end">
        <button
          type="submit"
          disabled={sending}
          className={buttonClasses("submit", "w-full sm:w-auto disabled:opacity-60")}
        >
          {sending ? f.sending : f.submit}
        </button>
      </div>
    </form>
  );
}
