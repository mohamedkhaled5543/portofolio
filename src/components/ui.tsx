import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, accent = "amber" }: { children: ReactNode; accent?: "amber" | "teal" }) {
  return (
    <p
      className="mb-4 flex items-center gap-2 font-mono-tag text-xs uppercase tracking-[0.2em]"
      style={{ color: accent === "amber" ? "var(--amber)" : "var(--teal)" }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: accent === "amber" ? "var(--amber)" : "var(--teal)" }}
      />
      {children}
    </p>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border-strong bg-bg-elevated px-3 py-1 font-mono-tag text-[11px] uppercase tracking-wide text-muted">
      {children}
    </span>
  );
}
