import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { AreasServedLinks } from "@/components/areas-served-links";
import { CtaPair, TextNavLink, TextPhoneLink } from "@/components/cta-links";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/site-chrome";
import { photos } from "@/lib/photos";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "House Wiring & Rewiring in JP Nagar, Jayanagar",
  description:
    "New house wiring, old-home rewiring, DB/MCB boards and earthing across Kumaraswamy Layout, JP Nagar, Jayanagar, BTM and Konanakunte Cross. Clear quotes. Call +91 70225 16735.",
  path: "/building-wiring",
  keywords: [
    "house wiring JP Nagar",
    "house wiring Kumaraswamy Layout",
    "rewiring Jayanagar",
    "building wiring Bengaluru",
    "electrician Kumaraswamy Layout",
  ],
});

const faqs = [
  {
    question: "Do you wire new apartments in Kumaraswamy Layout?",
    answer:
      "Yes. Concealed points, boards, and the extra circuits kitchens actually use — mixer, chimney, geyser — are the usual brief in new South Bengaluru flats.",
  },
  {
    question: "Can you look at an old independent house that trips?",
    answer:
      "That is common around Kumaraswamy Layout and Jayanagar: aluminium leftovers, overloaded kitchen points, no earthing worth the name. WhatsApp a photo of the DB and the room that dies first.",
  },
  {
    question: "Is this the same team as mixer repair?",
    answer:
      "Same shop, different work. Mixers stay at the shop. Wiring is a visit to your house. Call once and we will tell you which one you need.",
  },
];

export default function BuildingWiringPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Building wiring", path: "/building-wiring" },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "Building and house wiring in Kumaraswamy Layout, Bengaluru",
          description:
            "House wiring, apartment points, distribution boards, and earthing from A One Electricals.",
          path: "/building-wiring",
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Building wiring", href: "/building-wiring" },
        ]}
      />
      <PageHero
        kicker="Building current · South Bengaluru"
        title="House and building wiring in South Bengaluru"
        lede="New house wiring, old-home rewiring, DB/MCB boards and earthing across Kumaraswamy Layout, JP Nagar, Jayanagar, BTM and Konanakunte Cross. Clear quotes from the Ilyas Nagar workshop."
        image={{
          label: "Distribution board / wiring site",
          photo: photos.buildingWiring,
          alt: "House wiring and distribution board work by A One Electricals",
          ratio: "portrait",
        }}
      >
        <CtaPair message="Hi A One Electricals, I need building wiring in Bengaluru." />
      </PageHero>

      <article className="mx-auto max-w-3xl space-y-5 px-4 py-12 text-[0.95rem] leading-relaxed text-muted-foreground md:py-14 md:text-base">
        <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
          Wiring that matches how a Bengaluru kitchen actually runs
        </h2>
        <p>
          Search “electrician in Kumaraswamy Layout” and you get a wall of generic contractor
          pages. This one is specific: we plan circuits for mixer grinders that draw
          hard, geysers that share a line they should not, and living rooms that grew
          two ACs after the original board was fixed.
        </p>
        <p>
          Independent houses off Outer Ring Road still hide old joints in the loft.
          New apartments want concealed runs that will not crack the putty in the first
          monsoon. Shops need a board that can take display lighting without killing
          the billing counter. We scope that on the call —{" "}
          <TextPhoneLink /> — not with a fake price list.
        </p>
          <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
            What a wiring visit usually covers
          </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>New points and power circuits in kitchens and utility areas.</li>
          <li>Distribution boards and MCBs that match the load you already have.</li>
          <li>Earthing checks where shock on the mixer body is the first complaint.</li>
          <li>Shop and small-office boards around Kumaraswamy Layout, Jayanagar, and BTM.</li>
        </ul>
        <p>
          Mixer motors and jars stay at the{" "}
          <TextNavLink href="/mixer-repair">repair shop</TextNavLink>. Geyser points
          and isolators are{" "}
          <TextNavLink href="/geyser-repair">geyser work</TextNavLink>. Spare parts
          live on the <TextNavLink href="/spares">spares list</TextNavLink>. If you are
          not sure which you need, say so on WhatsApp.
        </p>
      </article>

      <section className="mx-auto max-w-6xl px-4 pb-14 md:pb-16">
        <h2 className="font-heading text-[1.75rem] font-semibold md:text-3xl">Wiring FAQs</h2>
        <div className="mt-6">
          <FaqList items={faqs} />
        </div>
      </section>
      <AreasServedLinks />
    </>
  );
}
