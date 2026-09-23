import { Section, Eyebrow } from "./ui";
import { services } from "@/data/site";

export function Services() {
  return (
    <Section id="services">
      <div className="max-w-2xl">
        <Eyebrow accent="teal">What I Build</Eyebrow>
        <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Systems that remove manual work, not just automate the easy parts.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Each service below is built around the same idea: identify the repetitive part of a
          process, and replace it with a system that runs it consistently.
        </p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="group relative bg-bg-elevated p-7 transition-colors hover:bg-bg-inset"
          >
            <span className="font-mono-tag text-xs text-muted-2">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-amber transition-all duration-300 group-hover:w-full" />
          </div>
        ))}
      </div>
    </Section>
  );
}
