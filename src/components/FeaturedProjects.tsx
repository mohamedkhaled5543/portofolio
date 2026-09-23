import { Section, Eyebrow } from "./ui";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { site } from "@/data/site";

export function FeaturedProjects() {
  return (
    <Section id="projects" className="border-t border-border">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>Featured Projects</Eyebrow>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Real systems, built and shipped to GitHub.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Each project below is a working automation system — not a demo. Open the case study
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

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
