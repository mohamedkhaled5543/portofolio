"use client";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, X } from "lucide-react";
import { site } from "@/data/site";

export function StartProjectButton({ label = "Contact Me", variant = "solid", className = "" }: { label?: string; variant?: "solid" | "outline"; className?: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);
  const base = "rounded-full font-mono-tag text-sm uppercase tracking-wider transition-transform hover:scale-[1.03]";
  const style = variant === "solid" ? "bg-amber px-7 py-3.5 text-bg hover:shadow-[0_0_30px_-6px_var(--amber)]" : "border border-amber/40 bg-amber/10 px-4 py-2 text-[13px] text-amber hover:bg-amber hover:text-bg";
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={base + " " + style + " " + className}>{label}</button>
      {open && (
        <div role="dialog" aria-modal="true" aria-labelledby="connect-heading" className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <button type="button" aria-label="Close dialog" onClick={() => setOpen(false)} className="absolute inset-0 bg-bg/80 backdrop-blur-sm" />
          <div className="relative w-full max-w-lg rounded-2xl border border-border-strong bg-bg-elevated p-7 sm:p-9">
            <button type="button" aria-label="Close" onClick={() => setOpen(false)} className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-border-strong text-muted hover:border-amber hover:text-amber"><X size={16} /></button>
            <p className="font-mono-tag text-xs uppercase tracking-[0.2em] text-amber">Get in touch</p>
            <h2 id="connect-heading" className="mt-3 text-balance font-display text-2xl font-bold tracking-tight text-foreground">Let&apos;s connect.</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">I&apos;m open to AI/ML internships, collaboration, and conversations about practical AI projects.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <a href={"mailto:" + site.email} onClick={() => setOpen(false)} className="flex flex-col items-center gap-2 rounded-xl border border-border-strong bg-bg-inset p-4 text-sm text-foreground transition-colors hover:border-amber"><Mail size={20} /><span>Email</span></a>
              <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="flex flex-col items-center gap-2 rounded-xl border border-border-strong bg-bg-inset p-4 text-sm text-foreground transition-colors hover:border-teal"><Linkedin size={20} /><span>LinkedIn</span></a>
              <a href={site.links.github} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="flex flex-col items-center gap-2 rounded-xl border border-border-strong bg-bg-inset p-4 text-sm text-foreground transition-colors hover:border-teal"><Github size={20} /><span>GitHub</span></a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}