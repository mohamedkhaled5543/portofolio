import type { WorkflowStep } from "@/data/projects";

export function WorkflowDiagram({
  steps,
  accent = "amber",
}: {
  steps: WorkflowStep[];
  accent?: "amber" | "teal";
}) {
  const accentColor = accent === "amber" ? "var(--amber)" : "var(--teal)";

  return (
    <div className="rounded-2xl border border-border bg-bg-inset p-5 sm:p-8">
      <p className="mb-6 font-mono-tag text-xs uppercase tracking-wider text-muted-2">
        System flow
      </p>

      {/* Mobile: vertical flow */}
      <ol className="flex flex-col gap-0 lg:hidden">
        {steps.map((step, i) => (
          <li key={step.label} className="relative flex gap-4 pb-8 last:pb-0">
            {i !== steps.length - 1 && (
              <span
                className="absolute left-[15px] top-8 h-[calc(100%-1.5rem)] w-px"
                style={{
                  backgroundImage: `linear-gradient(${accentColor}, ${accentColor} 4px, transparent 4px, transparent 8px)`,
                  backgroundSize: "1px 8px",
                }}
              />
            )}
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono-tag text-xs"
              style={{ borderColor: accentColor, color: accentColor }}
            >
              {i + 1}
            </span>
            <div className="pt-0.5">
              <p className="font-display text-[15px] font-semibold text-foreground">
                {step.label}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* Desktop: horizontal flow */}
      <div className="hidden lg:block">
        <div className="flex items-stretch">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-1 items-stretch last:flex-none">
              <div className="flex w-full min-w-[150px] flex-col">
                <div className="flex items-center gap-2">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono-tag text-[11px]"
                    style={{ borderColor: accentColor, color: accentColor }}
                  >
                    {i + 1}
                  </span>
                  <p className="font-display text-sm font-semibold text-foreground">
                    {step.label}
                  </p>
                </div>
                <p className="mt-2 pr-4 text-[13px] leading-relaxed text-muted">
                  {step.detail}
                </p>
              </div>
              {i !== steps.length - 1 && (
                <div className="mx-1 flex w-8 shrink-0 items-center justify-center">
                  <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
                    <line
                      x1="0"
                      y1="5"
                      x2="20"
                      y2="5"
                      stroke={accentColor}
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    <path d="M18 1L23 5L18 9" stroke={accentColor} strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
