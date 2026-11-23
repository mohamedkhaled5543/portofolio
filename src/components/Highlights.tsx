import { Section, Eyebrow } from "./ui";

const highlights = [
  { period: "2026", title: "Hindawi — LLM Internship", description: "Selected as the second top performer among internship participants after working on practical LLM and AI application tasks." },
  { period: "90 hours", title: "ITI Technical Training", description: "Completed training covering Machine Learning, Deep Learning, Data Science, and mathematics for Data Science." },
  { period: "Graduation Project", title: "EduPilot AI", description: "Working with a team on a multi-agent intelligent learning platform, currently in requirements definition and initial setup." },
];

export function Highlights() {
  return (
    <Section className="border-t border-border">
      <div className="max-w-2xl">
        <Eyebrow accent="teal">Experience &amp; Highlights</Eyebrow>
        <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Learning, building, and improving.</h2>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.title} className="rounded-2xl border border-border bg-bg-elevated p-6">
            <p className="font-mono-tag text-[11px] uppercase tracking-wider text-teal">{item.period}</p>
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}