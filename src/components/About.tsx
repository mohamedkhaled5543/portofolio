import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { Section, Eyebrow } from "./ui";
import { site } from "@/data/site";

const connectLinks = [
  { label: "LinkedIn", description: "Professional profile", href: site.links.linkedin, icon: LinkedinIcon },
  { label: "GitHub", description: "Source code and projects", href: site.links.github, icon: GithubIcon },
  { label: "Email", description: site.email, href: `mailto:${site.email}`, icon: Mail },
];

export function About() {
  return (
    <Section id="about" className="border-t border-border">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <Eyebrow>About</Eyebrow>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Curious about AI. Focused on building useful systems.</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
            <p>I&apos;m Mohamed, a final-year Computer Science student at Helwan National University in Egypt, working toward a career as an AI Engineer.</p>
            <p>My interests include Machine Learning, Generative AI, LLM applications, RAG, NLP, AI agents, and automation. I enjoy building end-to-end projects that connect models, data, APIs, and user-facing applications.</p>
            <p>I care about understanding the problem, choosing an appropriate technical approach, testing system behavior, and documenting what I build. I aim to keep my project descriptions honest about what is implemented and what is still planned.</p>
          </div>
          <div className="mt-10">
            <p className="font-mono-tag text-xs uppercase tracking-wider text-muted-2">Connect with me</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {connectLinks.map(({ label, description, href, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"} className="group flex items-center gap-4 rounded-xl border border-border-strong bg-bg-elevated px-5 py-4 transition-colors hover:border-teal hover:bg-bg-inset">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-strong text-teal transition-colors group-hover:border-teal group-hover:bg-teal/10"><Icon size={20} /></span>
                  <span className="min-w-0"><span className="block font-display text-[15px] font-semibold text-foreground">{label}</span><span className="block truncate text-[13px] text-muted">{description}</span></span>
                  <span className="ml-auto shrink-0 font-mono-tag text-muted-2 transition-transform group-hover:translate-x-1 group-hover:text-teal">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-bg-elevated p-7 sm:p-8">
          <p className="font-mono-tag text-xs uppercase tracking-wider text-muted-2">Profile</p>
          <div className="mt-4"><p className="font-display text-base font-semibold text-foreground">{site.education}</p><p className="mt-1 text-sm text-muted">Egypt</p></div>
          <div className="mt-8 space-y-5 border-t border-border pt-6">
            <div className="flex justify-between gap-4 text-sm"><span className="text-muted-2">Career direction</span><span className="text-right text-foreground">AI Engineering</span></div>
            <div className="flex justify-between gap-4 text-sm"><span className="text-muted-2">Technical focus</span><span className="text-right text-foreground">ML · LLMs · RAG · NLP</span></div>
            <div className="flex justify-between gap-4 text-sm"><span className="text-muted-2">Tools</span><span className="text-right text-foreground">Python · FastAPI · n8n</span></div>
            <div className="flex justify-between gap-4 text-sm"><span className="text-muted-2">Open to</span><span className="text-right text-teal">Internships &amp; opportunities</span></div>
          </div>
        </div>
      </div>
    </Section>
  );
}
