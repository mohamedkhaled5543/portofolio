"use client";

import { useState, type FormEvent } from "react";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string> = { "form-name": "project-inquiry" };
    formData.forEach((value, key) => {
      payload[key] = String(value);
    });

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-teal/30 bg-teal/5 p-10 text-center">
        <p className="font-mono-tag text-xs uppercase tracking-wider text-teal">
          Message sent
        </p>
        <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
          Thanks — I&apos;ll get back to you soon.
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          I&apos;ll review your process and get back to you with the best approach, usually
          within a couple of days.
        </p>
      </div>
    );
  }

  return (
    <form
      name="project-inquiry"
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-7"
    >
      <input type="hidden" name="form-name" value="project-inquiry" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>

      <fieldset className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Your name" />
        <Field
          label="Work Email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
        />
      </fieldset>

      <TextAreaField
        label="What do you want to automate?"
        name="project"
        required
        placeholder="Tell me about the repetitive process you're dealing with..."
        rows={3}
      />

      <TextAreaField
        label="How do you handle it today?"
        name="currentProcess"
        required
        placeholder="Briefly describe the current process..."
        rows={3}
      />

      <Field
        label="What tools are involved?"
        name="currentTools"
        placeholder="Gmail, Sheets, CRM, Slack, etc."
      />

      <TextAreaField
        label="What would you like the automation to accomplish?"
        name="goal"
        required
        placeholder="Save time, reduce manual work, eliminate errors, improve response time..."
        rows={3}
      />

      <div className="border-t border-border pt-7">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-amber px-7 py-4 font-mono-tag text-sm uppercase tracking-wider text-bg transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Let's Talk Automation →"}
        </button>
        <p className="mt-4 text-xs text-muted-2">
          I&apos;ll review your process and get back to you with the best approach.
        </p>
      </div>

      {status === "error" && (
        <p className="rounded-xl border border-amber/30 bg-amber/5 px-4 py-3 text-sm text-amber">
          Something went wrong sending this. Please email me directly instead —
          mohamedeissa651@gmail.com
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono-tag text-xs uppercase tracking-wider text-muted-2">
        {label}
        {required && <span className="text-amber"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border-strong bg-bg-inset px-4 py-3 text-[15px] text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-amber"
      />
    </label>
  );
}

function TextAreaField({
  label,
  name,
  required = false,
  placeholder,
  rows = 3,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="font-mono-tag text-xs uppercase tracking-wider text-muted-2">
        {label}
        {required && <span className="text-amber"> *</span>}
      </span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className="mt-2 w-full resize-none rounded-lg border border-border-strong bg-bg-inset px-4 py-3 text-[15px] text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-amber"
      />
    </label>
  );
}
