import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { InquiryForm } from "@/components/InquiryForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Let's Automate Your Workflow",
  description:
    "Tell me what you're doing manually. I'll figure out what's worth automating.",
};

export default function InquiryPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 pb-14 pt-16 lg:px-8 lg:pt-20">
            <p className="font-mono-tag text-xs uppercase tracking-[0.2em] text-amber">
              Project Inquiry
            </p>
            <h1 className="mt-4 max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Let&apos;s Automate Your Workflow
            </h1>
            <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-muted">
              Tell me what you&apos;re doing manually. I&apos;ll figure out what&apos;s worth
              automating.
            </p>
            <p className="mt-3 max-w-xl text-sm text-muted-2">
              Prefer working through a freelance platform instead?{" "}
              <a
                href={site.links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:underline"
              >
                Hire me on Upwork ↗
              </a>
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
              <div>
                <p className="font-mono-tag text-xs uppercase tracking-wider text-muted-2">
                  What happens next
                </p>
                <ol className="mt-4 space-y-4">
                  {[
                    "I review your inquiry and the process you've described.",
                    "I reply by email with initial thoughts and questions.",
                    "If it's a fit, we scope the system together before any build starts.",
                  ].map((text, i) => (
                    <li key={text} className="flex gap-3 text-sm text-muted">
                      <span className="font-mono-tag text-xs text-amber">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-border bg-bg-elevated p-6">
                <p className="font-mono-tag text-xs uppercase tracking-wider text-muted-2">
                  Prefer email?
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 block break-words font-display text-lg font-semibold text-foreground hover:text-amber"
                >
                  {site.email}
                </a>
              </div>
            </aside>

            <div className="rounded-2xl border border-border bg-bg-elevated p-7 sm:p-10">
              <InquiryForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
