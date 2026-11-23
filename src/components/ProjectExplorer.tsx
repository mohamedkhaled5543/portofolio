"use client";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

const filters = ["All", "Generative AI", "Automation", "Machine Learning", "Graduation Project"] as const;
type Filter = (typeof filters)[number];

function categoryFor(slug: string): Filter {
  if (slug === "edupilot-ai") return "Graduation Project";
  if (slug === "hotel-operations" || slug === "customer-support" || slug === "order-cancellation-agent") return "Automation";
  if (slug === "network-attack-detector") return "Machine Learning";
  return "Generative AI";
}

export function ProjectExplorer() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [search, setSearch] = useState("");
  const visibleProjects = useMemo(() => {
    const term = search.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesFilter = activeFilter === "All" || categoryFor(project.slug) === activeFilter;
      const searchable = [project.name, project.tagline, ...project.technologies].join(" ").toLowerCase();
      return matchesFilter && (!term || searchable.includes(term));
    });
  }, [activeFilter, search]);

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-4">
        <label className="block">
          <span className="sr-only">Search projects</span>
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search projects or technologies..." className="w-full rounded-xl border border-border-strong bg-bg-elevated px-5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-2 focus:border-teal" />
        </label>
        <div className="flex flex-wrap gap-2" aria-label="Filter projects by category">
          {filters.map((filter) => (
            <button key={filter} type="button" onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter} className={"rounded-full border px-4 py-2 font-mono-tag text-[11px] uppercase tracking-wider transition-colors " + (activeFilter === filter ? "border-teal bg-teal/10 text-teal" : "border-border-strong text-muted hover:border-teal hover:text-teal")}>
              {filter}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-5 font-mono-tag text-[11px] uppercase tracking-wider text-muted-2" aria-live="polite">Showing {visibleProjects.length} of {projects.length} projects</p>
      {visibleProjects.length > 0 ? (
        <div className="mt-5 grid gap-6 lg:grid-cols-3">
          {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-border bg-bg-elevated px-6 py-12 text-center text-sm text-muted">No projects match that search. Try another keyword or category.</div>
      )}
    </div>
  );
}