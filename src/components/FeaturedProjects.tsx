import { Section, Eyebrow } from "./ui";
import { ProjectExplorer } from "./ProjectExplorer";
import { site } from "@/data/site";

export function FeaturedProjects() {
  return (
    <Section id="projects" className="border-t border-border">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>Featured Projects</Eyebrow>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Selected projects across AI, ML, and automation.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            A selection of practical projects. Explore each case study
            for the architecture, or the repo for the code.
          </p>
        </div>
        <a
          href={site.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 font-mono-tag text-sm uppercase tracking-wider text-muted transition-colors hover:text-foreground sm:inline-flex sm:items-center sm:gap-2"
        >
          All repos on GitHub <span aria-hidden>↗</span>
        </a>
      </div>

      <ProjectExplorer />
    </Section>
  );
}
