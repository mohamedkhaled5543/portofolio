import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section, Tag } from "@/components/ui";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { ProjectCard } from "@/components/ProjectCard";
import { StartProjectButton } from "@/components/StartProjectButton";
import { projects, getProject } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: project.name,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const accentColor = project.accent === "amber" ? "var(--amber)" : "var(--teal)";
  const otherProjects = projects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <Nav />
      <main>
        <div className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 pb-16 pt-14 lg:px-8 lg:pt-20">
            <Link
              href="/#projects"
              className="font-mono-tag text-xs uppercase tracking-wider text-muted transition-colors hover:text-foreground"
            >
              ← All Projects
            </Link>

            <p
              className="mt-6 font-mono-tag text-xs uppercase tracking-[0.2em]"
              style={{ color: accentColor }}
            >
              Case Study
            </p>
            <h1 className="mt-4 max-w-3xl text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted">
              {project.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 font-mono-tag text-xs uppercase tracking-wider text-foreground transition-colors hover:border-teal hover:text-teal"
              >
                View on GitHub ↗
              </a>
              <StartProjectButton
                label="Discuss a similar system"
                className="!px-5 !py-2.5 !text-xs"
              />
            </div>
          </div>
        </div>

        <Section className="!pt-16">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="font-mono-tag text-xs uppercase tracking-wider text-muted-2">
                The Problem
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">{project.problem}</p>
            </div>
            <div>
              <p className="font-mono-tag text-xs uppercase tracking-wider text-muted-2">
                What It Does
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                {project.whatItDoes}
              </p>
            </div>
          </div>
        </Section>

        <Section className="border-t border-border !pt-16">
          <p className="font-mono-tag text-xs uppercase tracking-wider text-muted-2">
            How It Works
          </p>
          <h2 className="mt-3 text-balance font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            System architecture
          </h2>
          <div className="mt-10">
            <WorkflowDiagram steps={project.workflow} accent={project.accent} />
          </div>
        </Section>

        <Section className="border-t border-border !pt-16">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono-tag text-xs uppercase tracking-wider text-muted-2">
                Business Value
              </p>
              <h2 className="mt-3 text-balance font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Why it matters
              </h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {project.businessValue.map((value) => (
                <li
                  key={value}
                  className="flex items-start gap-3 rounded-xl border border-border bg-bg-elevated p-5 text-sm leading-relaxed text-muted"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section className="border-t border-border !pt-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Other projects
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {otherProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
