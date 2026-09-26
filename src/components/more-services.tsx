import Link from "next/link";
import { serviceDirectory } from "@/lib/site";

export function MoreServices({ current }: { current: string }) {
  const others = serviceDirectory.filter((service) => service.href !== current);

  return (
    <nav aria-label="Other services" className="mx-auto max-w-6xl px-4 pb-16">
      <h2 className="font-heading text-[1.75rem] font-semibold md:text-3xl">
        Other work from the same shop
      </h2>
      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        {others.map((service) => (
          <li key={service.href}>
            <Link
              href={service.href}
              className="text-primary underline-offset-4 hover:underline"
            >
              {service.navLabel}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
