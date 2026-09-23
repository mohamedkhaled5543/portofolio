import { Section, Eyebrow } from "./ui";
import { howIWork } from "@/data/site";

export function HowIWork() {
  return (
    <Section id="how-i-work" className="border-t border-border">
      <div className="max-w-2xl">
        <Eyebrow>How I Work</Eyebrow>
        <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          A straightforward process, built for systems that need to actually work.
        </h2>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-6">
        {howIWork.map((item, i) => (
          <div key={item.step} className="relative">
            <span className="font-mono-tag text-3xl font-medium text-border-strong">
              {item.step}
            </span>
            <h3 className="mt-3 font-display text-base font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            {i !== howIWork.length - 1 && (
              <span className="mt-6 hidden h-px w-full bg-gradient-to-r from-border-strong to-transparent lg:block" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
