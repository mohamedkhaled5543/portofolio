import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
        <p className="font-mono-tag text-xs uppercase tracking-[0.2em] text-amber">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          This route doesn&apos;t exist.
        </h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
          The page you&apos;re looking for was moved, removed, or never built.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-full border border-border-strong px-6 py-3 font-mono-tag text-sm uppercase tracking-wider text-foreground transition-colors hover:border-amber hover:text-amber"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
