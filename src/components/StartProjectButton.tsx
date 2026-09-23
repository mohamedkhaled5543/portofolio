"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Briefcase, FileText, X } from "lucide-react";
import { site } from "@/data/site";

export function StartProjectButton({
  label = "Start a Project",
  variant = "solid",
  className = "",
}: {
  label?: string;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const baseClasses =
    "rounded-full font-mono-tag text-sm uppercase tracking-wider transition-transform hover:scale-[1.03]";
  const solidClasses = "bg-amber px-7 py-3.5 text-bg hover:shadow-[0_0_30px_-6px_var(--amber)]";
  const outlineClasses =
    "border border-amber/40 bg-amber/10 px-4 py-2 text-[13px] text-amber hover:bg-amber hover:text-bg";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${baseClasses} ${variant === "solid" ? solidClasses : outlineClasses} ${className}`}
      >
        {label}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="start-project-heading"
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
          />

          <div className="relative w-full max-w-lg animate-fade-up rounded-2xl border border-border-strong bg-bg-elevated p-7 sm:p-9">
            <button
              type="button"
              aria-label="Close dialog"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-border-strong text-muted transition-colors hover:border-amber hover:text-amber"
            >
              <X size={16} />
            </button>

            <p className="font-mono-tag text-xs uppercase tracking-[0.2em] text-amber">
              Let&apos;s Work Together
            </p>
            <h2
              id="start-project-heading"
              className="mt-3 text-balance font-display text-2xl font-bold tracking-tight text-foreground"
            >
              How would you like to get started?
            </h2>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <a
                href={site.links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="group flex flex-col rounded-xl border border-border-strong bg-bg-inset p-5 text-left transition-colors hover:border-teal"
              >
                <Briefcase className="text-teal" size={22} />
                <p className="mt-4 font-display text-base font-semibold text-foreground">
                  Hire me on Upwork
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  Work through my verified freelance profile with built-in payment protection.
                </p>
                <span className="mt-4 font-mono-tag text-[11px] uppercase tracking-wider text-teal">
                  Open profile ↗
                </span>
              </a>

              <Link
                href="/inquiry"
                onClick={() => setOpen(false)}
                className="group flex flex-col rounded-xl border border-border-strong bg-bg-inset p-5 text-left transition-colors hover:border-amber"
              >
                <FileText className="text-amber" size={22} />
                <p className="mt-4 font-display text-base font-semibold text-foreground">
                  Fill out a project form
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  Tell me about the process you want to automate — goes straight to my inbox.
                </p>
                <span className="mt-4 font-mono-tag text-[11px] uppercase tracking-wider text-amber">
                  Open form →
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
