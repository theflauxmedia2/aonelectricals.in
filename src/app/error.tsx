"use client";

import { CtaPair } from "@/components/cta-links";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="kicker text-destructive">
        Something went wrong
      </p>
      <h1 className="mt-4 font-heading text-4xl">This page did not load</h1>
      <p className="mt-4 text-muted-foreground">
        The site hit an error. Call or WhatsApp the shop in Kumaraswamy Layout, or try again.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="pressable h-12 rounded-md border border-border px-5 text-sm font-semibold"
        >
          Try again
        </button>
        <CtaPair message="Hi A One Electricals, the website error page sent me." />
      </div>
    </div>
  );
}
