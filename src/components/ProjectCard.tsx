import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const accentColor = project.accent === "amber" ? "var(--amber)" : "var(--teal)";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-bg-elevated p-7 transition-all hover:border-border-strong hover:bg-bg-inset sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className="font-mono-tag text-xs uppercase tracking-wider"
          style={{ color: accentColor }}
        >
          Case Study
        </span>
        <span className="font-mono-tag text-xs text-muted-2 transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold text-foreground sm:text-2xl">
        {project.name}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.tagline}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.workflow.map((step, i) => (
          <span key={step.label} className="flex items-center gap-2">
            <span className="font-mono-tag text-[11px] text-muted-2">{step.label}</span>
            {i !== project.workflow.length - 1 && (
              <span className="text-muted-2">→</span>
            )}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
        {project.technologies.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border-strong px-2.5 py-1 font-mono-tag text-[10px] uppercase tracking-wide text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
