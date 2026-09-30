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
        That link is not a page. Try one of these, or call the shop.
      </p>
      <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
        {[
          { href: "/", label: "Home" },
          { href: "/services", label: "All services" },
          { href: "/mixer-repair", label: "Mixer repair" },
          { href: "/building-wiring", label: "Building wiring" },
          { href: "/areas", label: "Areas we serve" },
          { href: "/contact", label: "Contact" },
        ].map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-primary underline underline-offset-4">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-center">
        <CtaPair />
      </div>
    </div>
  );
}
