import Link from "next/link";
import { site } from "@/data/site";
import { StartProjectButton } from "./StartProjectButton";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--amber) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-[-10%] h-[420px] w-[420px] rounded-full opacity-[0.12] blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--teal) 0%, transparent 70%)" }}
      />

      <div className="mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-20">
        <div className="animate-fade-up">
          <p className="flex items-center gap-2 font-mono-tag text-xs uppercase tracking-[0.2em] text-teal">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-teal" />
            {site.role} · {site.location}
          </p>

          <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Turn repetitive business
            <br />
            processes into{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 text-amber">intelligent systems.</span>
              <svg
                className="absolute -bottom-1 left-0 z-0 w-full"
                height="10"
                viewBox="0 0 300 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7 Q 75 2, 150 6 T 298 5"
                  stroke="var(--amber)"
                  strokeWidth="2.5"
                  strokeOpacity="0.4"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted">
            I design and build AI agents, workflows, and integrations that take manual, repetitive
            work off your team&apos;s plate — connecting the tools you already use into systems that
            run reliably on their own.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <StartProjectButton />
            <Link
              href="/#projects"
              className="rounded-full border border-border-strong px-6 py-3.5 font-mono-tag text-sm uppercase tracking-wider text-foreground transition-colors hover:border-teal hover:text-teal"
            >
              View Projects
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-8 font-mono-tag text-xs uppercase tracking-wider text-muted-2">
            <span>n8n</span>
            <span className="h-1 w-1 rounded-full bg-muted-2" />
            <span>AI Agents</span>
            <span className="h-1 w-1 rounded-full bg-muted-2" />
            <span>FastAPI</span>
            <span className="h-1 w-1 rounded-full bg-muted-2" />
            <span>PostgreSQL</span>
            <span className="h-1 w-1 rounded-full bg-muted-2" />
            <span>REST APIs</span>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <SystemGlyph />
        </div>
      </div>
    </div>
  );
}

function SystemGlyph() {
  const nodes = [
    { label: "Trigger", sub: "Form · Message · Webhook", y: 20 },
    { label: "AI Agent", sub: "Understand · Decide", y: 130 },
    { label: "Business Rules", sub: "Verify · Apply logic", y: 240 },
    { label: "Action", sub: "Execute · Notify · Sync", y: 350 },
  ];

  return (
    <div className="relative mx-auto max-w-sm rounded-2xl border border-border bg-bg-elevated/60 p-6 grain">
      <p className="mb-6 font-mono-tag text-[11px] uppercase tracking-wider text-muted-2">
        system.trace()
      </p>
      <svg viewBox="0 0 320 400" className="w-full" fill="none">
        <line
          x1="40"
          y1="45"
          x2="40"
          y2="370"
          stroke="var(--border-strong)"
          strokeWidth="1"
        />
        <line
          x1="40"
          y1="45"
          x2="40"
          y2="370"
          stroke="var(--amber)"
          strokeOpacity="0.6"
          strokeWidth="1.5"
          className="animate-dash"
        />
        {nodes.map((n, i) => (
          <g key={n.label} transform={`translate(0, ${n.y})`}>
            <circle cx="40" cy="0" r="6" fill="var(--bg-elevated)" stroke={i === 1 ? "var(--amber)" : "var(--border-strong)"} strokeWidth="1.5" />
            {i === 1 && <circle cx="40" cy="0" r="2.5" fill="var(--amber)" />}
            <text x="64" y="-2" fill="var(--foreground)" fontSize="14" fontFamily="var(--font-display)" fontWeight="600">
              {n.label}
            </text>
            <text x="64" y="16" fill="var(--muted-2)" fontSize="10.5" fontFamily="var(--font-mono)">
              {n.sub}
            </text>
          </g>
        ))}
      </svg>
      <div className="mt-2 flex items-center justify-between border-t border-border pt-4 font-mono-tag text-[11px] text-muted-2">
        <span>status: running</span>
        <span className="flex items-center gap-1.5 text-teal">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-teal" />
          live
        </span>
      </div>
    </div>
  );
}
