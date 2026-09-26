import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaPair, TextNavLink, TextPhoneLink } from "@/components/cta-links";
import { FaqList } from "@/components/faq-list";
import { ShopMap } from "@/components/shop-map";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/site-chrome";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { photos } from "@/lib/photos";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Ilyas Nagar Electrician, Bangalore",
  description:
    "A One Electricals workshop at 8th Cross, Ilyas Nagar, Kumar Swamy Layout, Bengaluru 560111. Wiring, mixer, geyser, UPS, fan, stove, pump, washer, and cooler repair. Call +91 70225 16735.",
  path: "/kumar-swamy-layout",
  keywords: [
    "electrician Kumar Swamy Layout",
    "mixer repair Kumar Swamy Layout",
    "geyser repair Kumar Swamy Layout",
    "UPS repair Kumar Swamy Layout",
    "ceiling fan rewind Kumar Swamy Layout",
    "electrical shop Kumar Swamy Layout Bengaluru",
  ],
});

const faqs = [
  {
    question: "Are you in Kumar Swamy Layout?",
    answer:
      "Yes. The shop is at 8th Cross, Ilyas Nagar, Kumar Swamy Layout, Bengaluru 560111. We take jobs from the surrounding South Bengaluru fabric — Jayanagar, Bannerghatta Road, and nearby.",
  },
  {
    question: "Can I walk in with a mixer?",
    answer: `Yes. We are at ${siteConfig.addressDisplay}. Call or WhatsApp ${siteConfig.phoneDisplay} before you come, so we know you are on the way.`,
  },
];

export default function KumarSwamyLayoutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Kumar Swamy Layout", path: "/kumar-swamy-layout" },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Kumar Swamy Layout", href: "/kumar-swamy-layout" },
        ]}
      />
      <PageHero
        kicker="Location · Kumar Swamy Layout"
        title="Electrician at 8th Cross, Ilyas Nagar, Kumar Swamy Layout"
        lede="The shop is at 8th Cross, Ilyas Nagar, Kumar Swamy Layout 560111. Mixers and ceiling fans come in here, spare jars are here, and geyser, UPS, and wiring calls from nearby are answered here."
        image={{
          label: "Kumar Swamy Layout neighborhood",
          photo: photos.neighborhood,
          ratio: "portrait",
        }}
      >
        <CtaPair message="Hi A One Electricals, I am in Kumar Swamy Layout and need help." />
      </PageHero>

      <article className="mx-auto max-w-3xl space-y-5 px-4 py-12 text-[0.95rem] leading-relaxed text-muted-foreground md:py-14 md:text-base">
        <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
          An electrician in Kumar Swamy Layout, not a citywide chain
        </h2>
        <p>
          People search “mixer repair Kumar Swamy Layout”, “geyser repair Kumar Swamy Layout”, “electrician
          Kumar Swamy Layout”, and “electrical shop near Sarakki” because a dead wet jar
          does not travel to Whitefield. {siteConfig.name} is a Kumar Swamy Layout workshop:
          mixer making and repair in the shop,{" "}
          <TextNavLink href="/building-wiring">building wiring</TextNavLink> on site,
          plus <TextNavLink href="/geyser-repair">geyser</TextNavLink>,{" "}
          <TextNavLink href="/ups-repair">UPS</TextNavLink>, and{" "}
          <TextNavLink href="/ceiling-fan">ceiling-fan</TextNavLink> jobs on the same
          number, and <TextNavLink href="/spares">spares</TextNavLink> for the parts
          that fail first.{" "}
          <TextNavLink href="/ups-wiring">UPS wiring</TextNavLink>,{" "}
          <TextNavLink href="/gas-stove">gas stove service</TextNavLink>,{" "}
          <TextNavLink href="/water-pump">water pump repair</TextNavLink>,{" "}
          <TextNavLink href="/washing-machine">washing machine repair</TextNavLink>, and{" "}
          <TextNavLink href="/air-cooler">air cooler repair</TextNavLink> use that
          number too.
        </p>
        <p>
          The neighborhood sits against Jayanagar, BTM Layout, Banashankari, and
          Bannerghatta Road. If you are in those pockets, you are still a local call —
          use <TextPhoneLink />. For a city-wide picture, read{" "}
          <TextNavLink href="/bengaluru">Bengaluru service area</TextNavLink>.
        </p>
        <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
          What Kumar Swamy Layout callers bring in
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Mixer grinders that spark or stall after wet grinding.</li>
          <li>Need for a replacement jar before a festival batch of batter.</li>
          <li>New-flat wiring where the kitchen point cannot take a mixer and a wet grinder.</li>
          <li>Older houses around the Ring Road whose DBs trip when the geyser and mixer share a line.</li>
          <li>A ceiling fan that hums, a home UPS that will not hold, or a geyser that stays cold.</li>
        </ul>
        <p>
          The shop is at {siteConfig.addressDisplay}. Call{" "}
          <TextPhoneLink /> before you ride in with a mixer.
        </p>
      </article>

      <section className="mx-auto max-w-6xl px-4 pb-4">
        <h2 className="font-heading text-[1.75rem] font-semibold md:text-3xl">
          Shop on the map
        </h2>
        <ShopMap className="mt-6" />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 md:pb-16">
        <FaqList items={faqs} />
      </section>
    </>
  );
}
