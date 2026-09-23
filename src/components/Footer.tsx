import Link from "next/link";
import { Briefcase, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { site } from "@/data/site";

const connectItems = [
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
  { label: "LinkedIn", href: site.links.linkedin, icon: LinkedinIcon },
  { label: "GitHub", href: site.links.github, icon: GithubIcon },
  { label: "Upwork", href: site.links.upwork, icon: Briefcase },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 font-mono-tag text-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded border border-border-strong bg-bg-elevated text-amber">
                MK
              </span>
              <span className="text-foreground">{site.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.role} building automation systems that connect AI, APIs, and business logic
              into workflows that run on their own.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-14">
            <div>
              <p className="font-mono-tag text-xs uppercase tracking-wider text-muted-2">Site</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="/#services" className="text-muted hover:text-foreground">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#projects" className="text-muted hover:text-foreground">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-muted hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/inquiry" className="text-muted hover:text-foreground">
                    Project Form
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono-tag text-xs uppercase tracking-wider text-muted-2">Connect</p>
              <ul className="mt-4 space-y-3 text-sm">
                {connectItems.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className="group flex items-center gap-2.5 text-muted hover:text-foreground"
                    >
                      <Icon size={15} className="text-muted-2 transition-colors group-hover:text-teal" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start gap-4 border-t border-border pt-6 text-xs text-muted-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="font-mono-tag">Based in {site.location} · Available for freelance work</p>
        </div>
      </div>
    </footer>
  );
}
