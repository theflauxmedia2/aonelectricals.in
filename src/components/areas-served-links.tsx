import Link from "next/link";
import { primaryAreas } from "@/lib/areas";

export function AreasServedLinks({
  heading = "Areas we serve for this service",
}: {
  heading?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14 md:pb-16">
      <h2 className="font-heading text-[1.75rem] font-semibold md:text-3xl">
        {heading}
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Same workshop in Ilyas Nagar. Each area page has local landmarks and FAQs.
      </p>
      <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
        {primaryAreas.map((area) => (
          <li key={area.href}>
            <Link
              href={area.href}
              className="text-sm font-medium text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
            >
              {area.name}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/areas"
            className="text-sm font-medium text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
          >
            All areas
          </Link>
        </li>
      </ul>
    </section>
  );
}
