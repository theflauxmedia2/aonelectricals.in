import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaPair, TextNavLink, TextPhoneLink } from "@/components/cta-links";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/site-chrome";
import { areas, primaryAreas, secondaryLocalities } from "@/lib/areas";
import { photos } from "@/lib/photos";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Areas We Serve in South Bengaluru",
  description:
    "A One Electricals serves Kumaraswamy Layout, JP Nagar, Jayanagar, BTM Layout, and Konanakunte Cross from Ilyas Nagar. Distances, landmarks, and how to reach the shop. Call +91 70225 16735.",
  path: "/areas",
  keywords: [
    "electrician South Bengaluru",
    "mixer repair JP Nagar",
    "electrician Jayanagar",
    "electrician BTM Layout",
    "electrician Konanakunte Cross",
  ],
});

export default function AreasHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Areas", path: "/areas" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Areas", href: "/areas" },
        ]}
      />
      <PageHero
        kicker="Service areas · South Bengaluru"
        title="Areas we serve around Kumaraswamy Layout"
        lede="The workshop is at 8th Cross, Ilyas Nagar. The five pages below are for callers in those pockets — each with real distance, landmarks, and a different lead service. We do not claim a second shop in any of them."
        image={{
          label: "South Bengaluru service area from Kumaraswamy Layout",
          photo: photos.neighborhood,
          alt: "South Bengaluru calls handled from A One Electricals in Ilyas Nagar",
          ratio: "portrait",
        }}
      >
        <CtaPair message="Hi A One Electricals, I need help in South Bengaluru." />
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="font-heading text-[1.75rem] font-semibold md:text-3xl">
          Five South Bengaluru areas
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {primaryAreas.map((area) => (
            <li key={area.slug}>
              <Link
                href={area.href}
                className="block rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <p className="kicker">{area.distanceFromWorkshop}</p>
                <h3 className="mt-2 font-heading text-xl text-foreground md:text-2xl">
                  {area.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Lead focus: {area.leadService.label}. Near{" "}
                  {area.landmarks.slice(0, 2).join(" and ")}.
                </p>
                <p className="mt-3 text-sm font-medium text-primary underline underline-offset-4">
                  Open {area.name} page
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-3xl space-y-4 px-4 pb-12 text-[0.95rem] leading-relaxed text-muted-foreground md:pb-16 md:text-base">
        <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
          Also covered (no separate shop)
        </h2>
        <p>
          We also take calls from{" "}
          <TextNavLink href="/areas/banashankari">Banashankari</TextNavLink> and{" "}
          <TextNavLink href="/areas/bannerghatta-road">
            Bannerghatta Road
          </TextNavLink>
          . Secondary pockets without their own pages yet:{" "}
          {secondaryLocalities
            .filter((name) => name !== "Banashankari")
            .join(", ")}
          . Call <TextPhoneLink /> and name your cross.
        </p>
        <p>
          Shop address (same everywhere): {siteConfig.addressDisplay}. Browse{" "}
          <TextNavLink href="/services">all services</TextNavLink> or{" "}
          <TextNavLink href="/contact">contact and directions</TextNavLink>.
        </p>
        <ul className="grid grid-cols-2 gap-2 pt-2 text-sm sm:grid-cols-3">
          {areas.map((area) => (
            <li key={area.href}>
              <Link
                href={area.href}
                className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
              >
                {area.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
