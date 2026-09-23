"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { StartProjectButton } from "./StartProjectButton";
import { site } from "@/data/site";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#how-i-work", label: "How I Work" },
  { href: "/#about", label: "About" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur-md border-b border-border" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono-tag text-sm tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded border border-border-strong bg-bg-elevated text-amber transition-colors group-hover:border-amber">
            MK
          </span>
          <span className="hidden text-muted sm:inline">
            {site.name}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono-tag text-[13px] uppercase tracking-wider text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <StartProjectButton variant="outline" />
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded border border-border-strong text-foreground md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-4 bg-current transition-all ${
                open ? "top-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-[1.5px] w-4 bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-[1.5px] w-4 bg-current transition-all ${
                open ? "top-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg px-6 py-6 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-mono-tag text-sm uppercase tracking-wider text-muted transition-colors hover:bg-bg-elevated hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2" onClick={() => setOpen(false)}>
              <StartProjectButton
                variant="outline"
                className="!block w-full !py-3 text-center"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
