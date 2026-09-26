import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaPair, TextNavLink, TextPhoneLink } from "@/components/cta-links";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/site-chrome";
import { getNeighborhood, type NeighborhoodSlug } from "@/lib/neighborhoods";
import { photos } from "@/lib/photos";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { coverageAreas, siteConfig } from "@/lib/site";

export function neighborhoodMetadata(slug: NeighborhoodSlug): Metadata {
  const area = getNeighborhood(slug);
  return buildMetadata({
    title: area.title,
    description: area.description,
    path: area.href,
    keywords: [...area.keywords],
  });
}

export function NeighborhoodPage({ slug }: { slug: NeighborhoodSlug }) {
  const area = getNeighborhood(slug);
  const others = coverageAreas.filter((item) => item.href !== area.href);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Bengaluru", path: "/bengaluru" },
          { name: area.name, path: area.href },
        ])}
      />
      <JsonLd data={faqJsonLd([...area.faqs])} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Bengaluru", href: "/bengaluru" },
          { name: area.name, href: area.href },
        ]}
      />
      <PageHero
        kicker={area.kicker}
        title={area.h1}
        lede={area.lede}
        image={{
          label: `${area.name} calls, workshop in Kumar Swamy Layout`,
          photo: photos.neighborhood,
          ratio: "portrait",
        }}
      >
        <CtaPair
          message={`Hi A One Electricals, I am in ${area.name} and need help.`}
        />
      </PageHero>

      <article className="mx-auto max-w-3xl space-y-5 px-4 py-12 text-[0.95rem] leading-relaxed text-muted-foreground md:py-14 md:text-base">
        <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
          {area.heading}
        </h2>
        {area.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          The workshop is at {siteConfig.addressDisplay}. Call <TextPhoneLink />.
          The same number covers{" "}
          <TextNavLink href="/building-wiring">building wiring</TextNavLink>,{" "}
          <TextNavLink href="/mixer-repair">mixer repair</TextNavLink>,{" "}
          <TextNavLink href="/geyser-repair">geyser</TextNavLink>,{" "}
          <TextNavLink href="/ups-repair">UPS</TextNavLink>,{" "}
          <TextNavLink href="/ceiling-fan">ceiling fan</TextNavLink>, and{" "}
          <TextNavLink href="/spares">spares</TextNavLink>.
        </p>
        <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
          Jobs we take from {area.name}
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          {area.jobs.map((job) => (
            <li key={job}>{job}</li>
          ))}
        </ul>
        <p>
          Read the shop page for{" "}
          <TextNavLink href="/kumar-swamy-layout">
            the Kumar Swamy Layout workshop
          </TextNavLink>{" "}
          or the city page for{" "}
          <TextNavLink href="/bengaluru">calls across Bengaluru</TextNavLink>.
        </p>
      </article>

      <section className="mx-auto max-w-6xl px-4 pb-14 md:pb-16">
        <h2 className="font-heading text-[1.75rem] font-semibold md:text-3xl">
          Other areas on this site
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
          {others.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex min-h-12 items-center rounded-md border border-border bg-card px-3 py-3 text-sm text-foreground"
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
