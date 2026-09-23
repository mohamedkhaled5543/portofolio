import { site } from "@/data/site";
import { StartProjectButton } from "./StartProjectButton";

export function ContactCTA() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-elevated px-8 py-14 text-center sm:px-16">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full opacity-[0.15] blur-[100px]"
            style={{ background: "radial-gradient(circle, var(--amber) 0%, transparent 70%)" }}
          />
          <p className="relative font-mono-tag text-xs uppercase tracking-[0.2em] text-amber">
            Got a process worth automating?
          </p>
          <h2 className="relative mx-auto mt-5 max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s turn it into a system that runs on its own.
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
            Tell me what&apos;s eating your team&apos;s time, and I&apos;ll tell you honestly
            whether — and how — it should be automated.
          </p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <StartProjectButton />
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-border-strong px-7 py-3.5 font-mono-tag text-sm uppercase tracking-wider text-foreground transition-colors hover:border-teal hover:text-teal"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
