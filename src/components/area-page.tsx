import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaPair, TextNavLink, TextPhoneLink } from "@/components/cta-links";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { ShopMap } from "@/components/shop-map";
import { PageHero } from "@/components/site-chrome";
import { getArea, primaryAreas, type AreaSlug } from "@/lib/areas";
import { photos } from "@/lib/photos";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { featuredServices, siteConfig } from "@/lib/site";

export function areaMetadata(slug: AreaSlug) {
  const area = getArea(slug);
  if (!area) throw new Error(`Unknown area: ${slug}`);
  return buildMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: area.href,
    keywords: [...area.keywords],
  });
}

export function AreaPage({ slug }: { slug: AreaSlug }) {
  const area = getArea(slug);
  if (!area) throw new Error(`Unknown area: ${slug}`);

  const others = primaryAreas.filter((item) => item.slug !== area.slug);
  const nearbyExtras = [
    { name: "Banashankari", href: "/areas/banashankari" },
    { name: "Bannerghatta Road", href: "/areas/bannerghatta-road" },
  ].filter((item) => item.href !== area.href);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Areas", path: "/areas" },
          { name: area.name, path: area.href },
        ])}
      />
      <JsonLd data={faqJsonLd([...area.faqs])} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Areas", href: "/areas" },
          { name: area.name, href: area.href },
        ]}
      />
      <PageHero
        kicker={area.kicker}
        title={area.h1}
        lede={area.lede}
        image={{
          label: `${area.name} calls, workshop in Kumaraswamy Layout`,
          photo: photos[area.heroPhoto],
          ratio: "portrait",
        }}
      >
        <CtaPair
          message={`Hi A One Electricals, I am in ${area.name} and need help.`}
        />
      </PageHero>

      <article className="mx-auto max-w-3xl space-y-5 px-4 py-12 text-[0.95rem] leading-relaxed text-muted-foreground md:py-14 md:text-base">
        <p className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground">
          <span className="font-medium text-foreground">From the workshop:</span>{" "}
          {area.distanceFromWorkshop}. Lead focus:{" "}
          <TextNavLink href={area.leadService.href}>
            {area.leadService.label}
          </TextNavLink>
          .
        </p>
        <p>{area.intro}</p>
        {area.sections.map((section) => (
          <div key={section.heading} className="space-y-3">
            <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
              {section.heading}
            </h2>
            <p>{section.body}</p>
          </div>
        ))}

        <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
          Landmarks and pockets in {area.name}
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          {area.landmarks.map((landmark) => (
            <li key={landmark}>{landmark}</li>
          ))}
        </ul>
        <p>
          Sub-localities we hear most: {area.subLocalities.join(", ")}.
        </p>

        <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
          Jobs we take from {area.name}
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          {area.jobs.map((job) => (
            <li key={job}>{job}</li>
          ))}
        </ul>

        <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
          Services for {area.name} callers
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {featuredServices.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className="flex min-h-12 items-center rounded-md border border-border bg-card px-3 py-3 text-sm text-primary underline-offset-4 hover:underline"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>

        <p>
          The workshop is at {siteConfig.addressDisplay}. Call <TextPhoneLink />.
          Same number for{" "}
          <TextNavLink href="/mixer-repair">mixer repair</TextNavLink>,{" "}
          <TextNavLink href="/building-wiring">building wiring</TextNavLink>,{" "}
          <TextNavLink href="/spares">spares</TextNavLink>,{" "}
          <TextNavLink href="/geyser-repair">geyser</TextNavLink>,{" "}
          <TextNavLink href="/ups-repair">UPS</TextNavLink>, and{" "}
          <TextNavLink href="/ceiling-fan">ceiling fan</TextNavLink>.
        </p>
      </article>

      {area.showMap ? (
        <section className="mx-auto max-w-6xl px-4 pb-4">
          <h2 className="font-heading text-[1.75rem] font-semibold md:text-3xl">
            Shop on the map
          </h2>
          <ShopMap className="mt-6" />
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 pb-14 md:pb-16">
        <h2 className="font-heading text-[1.75rem] font-semibold md:text-3xl">
          Nearby areas
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
          {others.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex min-h-12 items-center rounded-md border border-border bg-card px-3 py-3 text-sm text-primary underline-offset-4 hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {nearbyExtras.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex min-h-12 items-center rounded-md border border-border bg-card px-3 py-3 text-sm text-primary underline-offset-4 hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <FaqList items={[...area.faqs]} />
        </div>
      </section>
    </>
  );
}
