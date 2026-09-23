import { Briefcase, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { Section, Eyebrow } from "./ui";
import { site } from "@/data/site";

const connectLinks = [
  {
    label: "LinkedIn",
    description: "Career background & recommendations",
    href: site.links.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    description: "Source code for every project",
    href: site.links.github,
    icon: GithubIcon,
  },
  {
    label: "Upwork",
    description: "Hire me through a verified profile",
    href: site.links.upwork,
    icon: Briefcase,
  },
  {
    label: "Email",
    description: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
];

export function About() {
  return (
    <Section id="about" className="border-t border-border">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <Eyebrow>About</Eyebrow>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            I build the systems behind the automation, not just the demo.
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
            <p>
              I&apos;m Mohamed, an AI Automation Engineer focused on building practical systems
              that combine AI, workflow automation, APIs, and data.
            </p>
            <p>
              I take repetitive manual processes and turn them into reliable workflows that
              operate automatically — while keeping people in the loop wherever a decision
              actually needs one. That means agents that check real data before acting, and
              automations built around a business&apos;s actual rules, not a simplified version of
              them.
            </p>
            <p>
              I&apos;m currently an <span className="text-foreground">LLMs Intern at Tips
              Hindawi</span> (since {site.currentRoleSince}), working hands-on with large language
              models alongside building automation systems independently.
            </p>
          </div>

          <div className="mt-10">
            <p className="font-mono-tag text-xs uppercase tracking-wider text-muted-2">
              Connect with me
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {connectLinks.map(({ label, description, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-4 rounded-xl border border-border-strong bg-bg-elevated px-5 py-4 transition-colors hover:border-teal hover:bg-bg-inset"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-strong text-teal transition-colors group-hover:border-teal group-hover:bg-teal/10">
                    <Icon size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[15px] font-semibold text-foreground">
                      {label}
                    </span>
                    <span className="block truncate text-[13px] text-muted">
                      {description}
                    </span>
                  </span>
                  <span className="ml-auto shrink-0 font-mono-tag text-muted-2 transition-transform group-hover:translate-x-1 group-hover:text-teal">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-bg-elevated p-7 sm:p-8">
          <p className="font-mono-tag text-xs uppercase tracking-wider text-muted-2">
            Currently
          </p>
          <div className="mt-4 flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 shrink-0 animate-pulse-dot rounded-full bg-teal" />
            <div>
              <p className="font-display text-base font-semibold text-foreground">
                {site.currentRole}
              </p>
              <p className="mt-1 text-sm text-muted">Since {site.currentRoleSince}</p>
            </div>
          </div>

          <div className="mt-8 space-y-5 border-t border-border pt-6">
            <div className="flex justify-between gap-4 text-sm">
              <span className="text-muted-2">Location</span>
              <span className="text-right text-foreground">{site.location}</span>
            </div>
            <div className="flex justify-between gap-4 text-sm">
              <span className="text-muted-2">Focus</span>
              <span className="text-right text-foreground">AI agents &amp; workflow automation</span>
            </div>
            <div className="flex justify-between gap-4 text-sm">
              <span className="text-muted-2">Works with</span>
              <span className="text-right text-foreground">n8n, LLMs, APIs, data pipelines</span>
            </div>
            <div className="flex justify-between gap-4 text-sm">
              <span className="text-muted-2">Availability</span>
              <span className="text-right text-teal">Open to freelance projects</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
