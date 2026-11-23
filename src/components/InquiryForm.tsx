"use client";
import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

export function InquiryForm() {
  const [prepared, setPrepared] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent("Portfolio message from " + name);
    const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message);
    setPrepared(true);
    window.location.href = "mailto:" + site.email + "?subject=" + subject + "&body=" + body;
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <label className="block">
        <span className="font-mono-tag text-xs uppercase tracking-wider text-muted-2">Name</span>
        <input name="name" required placeholder="Your name" className="mt-2 w-full rounded-lg border border-border-strong bg-bg-inset px-4 py-3 text-[15px] text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-amber" />
      </label>
      <label className="block">
        <span className="font-mono-tag text-xs uppercase tracking-wider text-muted-2">Email</span>
        <input name="email" type="email" required placeholder="you@example.com" className="mt-2 w-full rounded-lg border border-border-strong bg-bg-inset px-4 py-3 text-[15px] text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-amber" />
      </label>
      <label className="block">
        <span className="font-mono-tag text-xs uppercase tracking-wider text-muted-2">Message</span>
        <textarea name="message" required rows={5} placeholder="Tell me about the opportunity, collaboration, or question..." className="mt-2 w-full resize-none rounded-lg border border-border-strong bg-bg-inset px-4 py-3 text-[15px] text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-amber" />
      </label>
      <div className="border-t border-border pt-6">
        <button type="submit" className="w-full rounded-full bg-amber px-7 py-4 font-mono-tag text-sm uppercase tracking-wider text-bg transition-transform hover:scale-[1.01] sm:w-auto">Prepare Email →</button>
        {prepared && <p className="mt-4 text-sm text-teal">Your email app should open with the message ready. If it does not, email me at {site.email}.</p>}
        <p className="mt-4 text-xs text-muted-2">This form opens your email app. It does not send or store your message on this website.</p>
      </div>
    </form>
  );
}