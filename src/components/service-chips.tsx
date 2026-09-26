import Link from "next/link";
import { addedServices, services } from "@/lib/site";

const chipOrder = [
  "building-wiring",
  "ups-repair",
  "geyser-repair",
  "water-pump",
  "ceiling-fan",
  "gas-stove",
  "mixer-repair",
  "spares",
  "washing-machine",
] as const;

const catalog = [...services, ...addedServices];

const chipServices = chipOrder.flatMap((slug) => {
  const service = catalog.find((item) => item.slug === slug);
  return service ? [service] : [];
});

export function ServiceChips() {
  return (
    <nav
      aria-label="Jump to a service"
      className="border-b border-border bg-background"
    >
      <ul className="flex snap-x gap-2 overflow-x-auto px-4 py-3.5 [-ms-overflow-style:none] [scrollbar-width:none] [mask-image:linear-gradient(90deg,transparent,#000_0.75rem,#000_calc(100%-1.5rem),transparent)] md:mx-auto md:max-w-6xl md:flex-wrap md:overflow-visible md:[mask-image:none] [&::-webkit-scrollbar]:hidden">
        {chipServices.map((service) => (
          <li key={service.href} className="snap-start">
            <Link
              href={service.href}
              className="pressable inline-flex h-11 min-h-11 items-center whitespace-nowrap rounded-full border border-border bg-card px-4 text-sm text-foreground transition-colors duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-primary/40 hover:text-primary"
            >
              {service.navLabel}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
