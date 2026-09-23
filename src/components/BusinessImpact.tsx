import { Section, Eyebrow } from "./ui";

const impacts = [
  {
    title: "Less manual handling",
    description:
      "Repetitive steps — lookups, data entry, routing, status updates — move from a person's task list into the system.",
  },
  {
    title: "Consistent rules, every time",
    description:
      "Business logic is applied the same way on every request, instead of depending on who handles it or how busy they are.",
  },
  {
    title: "Tools that actually talk to each other",
    description:
      "Sheets, inboxes, databases, and messaging apps stay in sync automatically, instead of someone copying data between them.",
  },
  {
    title: "Humans stay in the loop where it matters",
    description:
      "AI handles understanding and routine decisions; confirmation and edge cases are still routed to a person when they should be.",
  },
];

export function BusinessImpact() {
  return (
    <Section className="border-t border-border">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <Eyebrow accent="teal">Business Impact</Eyebrow>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What changes once a process is automated.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Results depend on the process. These are the outcomes automation is designed to
            produce — not projections or numbers I haven&apos;t measured.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {impacts.map((impact) => (
            <div key={impact.title} className="bg-bg-elevated p-7">
              <div className="mb-4 h-px w-8 bg-amber" />
              <h3 className="font-display text-base font-semibold text-foreground">
                {impact.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
