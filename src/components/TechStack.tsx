import { Section, Eyebrow, Tag } from "./ui";
import { techStack } from "@/data/site";

export function TechStack() {
  return (
    <Section className="border-t border-border">
      <div className="max-w-2xl">
        <Eyebrow accent="teal">Technology</Eyebrow>
        <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          The stack behind every system.
        </h2>
      </div>

      <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category}>
            <p className="font-mono-tag text-xs uppercase tracking-wider text-muted-2">
              {category}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
