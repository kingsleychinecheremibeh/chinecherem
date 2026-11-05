"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      onClick={copy}
      className="group inline-flex items-center gap-3 border-b border-line pb-1 font-serif text-3xl transition-colors hover:border-accent sm:text-5xl"
    >
      <span className="break-all text-left">{email}</span>
      <span className="font-mono text-xs text-muted group-hover:text-accent" aria-live="polite">
        {copied ? "copied" : "copy"}
      </span>
    </button>
  );
}
