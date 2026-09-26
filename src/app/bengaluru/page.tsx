import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaPair, TextNavLink, TextPhoneLink } from "@/components/cta-links";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/site-chrome";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { photos } from "@/lib/photos";
import Link from "next/link";
import { coverageAreas, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Electrician in Bangalore",
  description:
    "A One Electricals takes mixer, geyser, UPS, ceiling-fan, spare-part, and building-wiring calls from around Bangalore. Workshop in Kumar Swamy Layout. WhatsApp +91 70225 16735.",
  path: "/bengaluru",
  keywords: [
    "electrician Bangalore",
    "house wiring Bengaluru",
    "geyser repair Bengaluru",
    "UPS repair Bangalore",
    "ceiling fan rewind Bengaluru",
    "mixer repair Bengaluru",
  ],
});

const faqs = [
  {
    question: "Do you travel across Bengaluru for a mixer?",
    answer:
      "Mixers usually come to Kumar Swamy Layout. Send a photo first. Wiring visits are planned for South Bengaluru and, when the job is clear on WhatsApp, further into the city.",
  },
  {
    question: "I am not in Kumar Swamy Layout. Can I still call?",
    answer: `Yes. The number is ${siteConfig.phoneDisplay}. Say your area. We will tell you whether to ride in, send the jar, or book a wiring visit.`,
  },
];

export default function BengaluruPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Bengaluru", path: "/bengaluru" },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Bengaluru", href: "/bengaluru" },
        ]}
      />
      <PageHero
        kicker="Service area · Bengaluru"
        title="Electrical repair and installation for callers across Bengaluru"
        lede="The shop is in Kumar Swamy Layout. The phone is for the whole city. If a geyser, UPS, fan, mixer, or wiring board needs work anywhere in Bengaluru, call us."
        image={{
          label: "South Bengaluru / city work",
          photo: photos.city,
          ratio: "portrait",
        }}
      >
        <CtaPair message="Hi A One Electricals, I am in Bengaluru and need electrical help." />
      </PageHero>

      <article className="mx-auto max-w-3xl space-y-5 px-4 py-12 text-[0.95rem] leading-relaxed text-muted-foreground md:py-14 md:text-base">
        <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
          One workshop, city-wide calls
        </h2>
        <p>
          Bengaluru searches fragment: “mixer repair Bangalore”, “house wiring near
          me”, “electrical spares Bengaluru”. {siteConfig.name} does not pretend to be
          a 12-branch chain. We are a Kumar Swamy Layout workshop that answers{" "}
          <TextPhoneLink /> when the rest of the city still needs a jar, a rewind, or a
          wiring visit.
        </p>
        <p>
          South Bengaluru is the usual catchment because that is how traffic and
          neighborhoods sit around the shop:{" "}
          {coverageAreas
            .filter((area) => area.name !== "Bengaluru" && area.name !== "South Bengaluru")
            .map((area, index, list) => (
              <span key={area.href}>
                <TextNavLink href={area.href}>{area.name}</TextNavLink>
                {index < list.length - 1 ? ", " : ""}
              </span>
            ))}
          . If you are further out, still call. A mixer can travel. A wiring job needs a honest yes
          or no.
        </p>
        <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
          How city leads should contact us
        </h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>WhatsApp your area plus a photo.</li>
          <li>
            We route it to{" "}
            <TextNavLink href="/mixer-repair">mixer repair</TextNavLink>,{" "}
            <TextNavLink href="/geyser-repair">geyser</TextNavLink>,{" "}
            <TextNavLink href="/ups-repair">UPS</TextNavLink>,{" "}
            <TextNavLink href="/ceiling-fan">ceiling fan</TextNavLink>,{" "}
            <TextNavLink href="/spares">spares</TextNavLink>, or{" "}
            <TextNavLink href="/building-wiring">wiring</TextNavLink>.
          </li>
          <li>
            You either come to{" "}
            <TextNavLink href="/kumar-swamy-layout">Kumar Swamy Layout</TextNavLink> or we plan a visit.
          </li>
        </ol>
      </article>

      <section className="mx-auto max-w-6xl px-4 pb-14 md:pb-16">
        <h2 className="font-heading text-[1.75rem] font-semibold md:text-3xl">Areas we name on this site</h2>
        <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {coverageAreas.map((area) => (
            <li key={area.href}>
              <Link
                href={area.href}
                className="flex min-h-12 items-center rounded-md border border-border bg-card px-3 py-4 text-sm"
              >
                {area.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}
