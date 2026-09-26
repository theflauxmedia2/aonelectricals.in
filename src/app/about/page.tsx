import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaPair, TextNavLink, TextPhoneLink } from "@/components/cta-links";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/site-chrome";
import { SocialButtons } from "@/components/social-buttons";
import { photos } from "@/lib/photos";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About A One Electricals",
  description:
    "About A One Electricals in Kumar Swamy Layout, Bengaluru: mixer repair, building wiring, geyser, UPS, ceiling fan, and spares. Call +91 70225 16735.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      <PageHero
        kicker="Workshop · Kumar Swamy Layout"
        title="The Kumar Swamy Layout workshop behind A One Electricals"
        lede="A Kumar Swamy Layout electrical shop that still answers the phone: wiring, repair, and installation."
        image={{
          label: "Workshop interior",
          photo: photos.workshop,
          ratio: "portrait",
        }}
      >
        <CtaPair message="Hi A One Electricals, I want to ask about your workshop." />
      </PageHero>

      <article className="mx-auto max-w-3xl space-y-5 px-4 py-12 text-[0.95rem] leading-relaxed text-muted-foreground md:py-14 md:text-base">
        <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
          What we actually do
        </h2>
        <p>
          {siteConfig.name} works out of Kumar Swamy Layout, Bengaluru. The public work is{" "}
          <TextNavLink href="/building-wiring">building wiring</TextNavLink>,{" "}
          <TextNavLink href="/geyser-repair">geyser repair and installation</TextNavLink>
          , <TextNavLink href="/ups-repair">UPS work</TextNavLink>,{" "}
          <TextNavLink href="/ceiling-fan">ceiling-fan rewind</TextNavLink>,{" "}
          <TextNavLink href="/mixer-repair">mixer repair</TextNavLink>, and{" "}
          <TextNavLink href="/spares">spare parts</TextNavLink>.
        </p>
        <p>
          The workshop is at {siteConfig.addressDisplay}. The contact that converts is
          still the phone and WhatsApp line: <TextPhoneLink />.
        </p>
        <SocialButtons />
        <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
          The work happens in the shop
        </h2>
        <p>
          The photos are from the shop: repair work, switchboards, and ceiling
          points. Mixer photos show the machines we repair. The words stay local:
          Kumar Swamy Layout kitchens and South Bengaluru flats, because that is who
          calls.
        </p>
        <p>
          If you need the neighborhood angle, open{" "}
          <TextNavLink href="/kumar-swamy-layout">Kumar Swamy Layout</TextNavLink>. If you are elsewhere in
          the city, open <TextNavLink href="/bengaluru">Bengaluru</TextNavLink>. To
          start a job, go to <TextNavLink href="/contact">contact</TextNavLink>.
        </p>
      </article>
    </>
  );
}
