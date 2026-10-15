"use client";

import { useState } from "react";
import { Placeholder } from "@/components/ui/Placeholder";
import { buttonClasses } from "@/components/ui/Button";
import { contactSection, sectors } from "@/content/es";
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
  const [error, setError] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    if (!email && !phone) {
      setError(true);
      return;
    }
    setError(false);
    // Fase 12: acá se llama a submitContact(data) (Web3Forms). Por ahora no se envía nada.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="animate-fade-in border border-white bg-white p-6 lg:p-10">
        <p className="text-3xl font-bold leading-heading text-navy md:text-4xl">
          {f.successTitle}
        </p>
        <p className="mt-4 text-base leading-body text-body">
          {f.successBefore}
          <Placeholder variant="token">{f.successToken}</Placeholder>
          {f.successAfter}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-white bg-white p-6 lg:p-10"
    >
      <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
        <Field label={f.name} name="name" required>
          <input id="name" name="name" type="text" required autoComplete="name" className={control} />
        </Field>
        <Field label={f.company} name="company" required>
          <input id="company" name="company" type="text" required autoComplete="organization" className={control} />
        </Field>
        <Field label={f.email} name="email">
          <input id="email" name="email" type="email" autoComplete="email" className={control} />
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
            {sectors.items.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
            <option value={f.industryOther}>{f.industryOther}</option>
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

      {error ? (
        <p role="alert" className="mt-6 text-base leading-body text-danger">
          {f.errorContact}
        </p>
      ) : null}

      <div className="mt-8 flex sm:justify-end">
        <button type="submit" className={buttonClasses("submit", "w-full sm:w-auto")}>
          {f.submit}
        </button>
      </div>
    </form>
  );
}
