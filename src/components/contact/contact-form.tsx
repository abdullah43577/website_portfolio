"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, fieldClasses } from "./field";

const budgets = [
  "Under $1,000",
  "$1,000 — $5,000",
  "$5,000 — $15,000",
  "$15,000+",
  "Not sure yet",
];

const empty = {
  firstName: "",
  lastName: "",
  email: "",
  budget: "",
  message: "",
};

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>("idle");

  const update = (key: keyof typeof empty) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/sendMail`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );
      if (!response.ok) throw new Error("Request failed");
      setForm(empty);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-border bg-surface p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" htmlFor="firstName">
          <input
            id="firstName"
            name="firstName"
            required
            autoComplete="given-name"
            value={form.firstName}
            onChange={(e) => update("firstName")(e.target.value)}
            className={fieldClasses}
            placeholder="Ada"
          />
        </Field>

        <Field label="Last name" htmlFor="lastName">
          <input
            id="lastName"
            name="lastName"
            required
            autoComplete="family-name"
            value={form.lastName}
            onChange={(e) => update("lastName")(e.target.value)}
            className={fieldClasses}
            placeholder="Obi"
          />
        </Field>

        <Field label="Email" htmlFor="email" className="sm:col-span-2">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email")(e.target.value)}
            className={fieldClasses}
            placeholder="you@company.com"
          />
        </Field>

        <Field label="Budget" htmlFor="budget" className="sm:col-span-2">
          <select
            id="budget"
            name="budget"
            required
            value={form.budget}
            onChange={(e) => update("budget")(e.target.value)}
            className={fieldClasses}
          >
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="What are you building?"
          htmlFor="message"
          className="sm:col-span-2"
        >
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={form.message}
            onChange={(e) => update("message")(e.target.value)}
            className={`${fieldClasses} resize-y`}
            placeholder="A mobile app for our members, an API to replace a spreadsheet, a dashboard nobody wants to use yet…"
          />
        </Field>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          disabled={status === "sending"}
          className="w-full sm:w-auto"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          {status !== "sending" ? (
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
          ) : null}
        </Button>

        {status === "sent" ? (
          <p className="flex items-center gap-2 text-sm text-fg">
            <Check className="h-4 w-4 text-accent" strokeWidth={2} />
            Sent — I&apos;ll reply within two days.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="flex items-center gap-2 text-sm text-fg">
            <TriangleAlert className="h-4 w-4 text-accent" strokeWidth={2} />
            Didn&apos;t send. Email me directly instead.
          </p>
        ) : null}
      </div>
    </form>
  );
}
