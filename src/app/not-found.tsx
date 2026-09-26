import type { Metadata } from "next";
import Link from "next/link";
import { CtaPair } from "@/components/cta-links";

export const metadata: Metadata = {
  title: { absolute: "Page not found | A One Electricals" },
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="kicker">404</p>
      <h1 className="mt-4 font-heading text-4xl">This page is not here</h1>
      <p className="mt-4 text-muted-foreground">
        That link is not a page. Services, Kumar Swamy Layout, and contact are on the site. You can also call the shop.
      </p>
      <p className="mt-6">
        <Link href="/" className="text-primary underline-offset-4 hover:underline">
          Back to A One Electricals home
        </Link>
      </p>
      <div className="mt-8 flex justify-center">
        <CtaPair />
      </div>
    </div>
  );
}
