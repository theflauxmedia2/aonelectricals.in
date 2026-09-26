import type { Metadata } from "next";
import { CtaPair, TextNavLink, TextPhoneLink } from "@/components/cta-links";
import { ServiceStory } from "@/components/service-story";
import { buildMetadata } from "@/lib/seo";
import { services, siteConfig } from "@/lib/site";

const service = services.find((item) => item.slug === "ups-repair")!;

export const metadata: Metadata = buildMetadata({
  title: "UPS Repair in Kumar Swamy Layout",
  description:
    "UPS and inverter repair and installation in Kumar Swamy Layout, Bengaluru. Batteries, boards, new home UPS. Call A One Electricals at +91 70225 16735.",
  path: service.href,
  keywords: [
    "UPS repair Kumar Swamy Layout",
    "UPS installation Bengaluru",
    "inverter repair Bangalore",
    "home UPS repair Kumar Swamy Layout",
    "inverter battery Kumar Swamy Layout",
  ],
});

const faqs = [
  {
    question: "Do you repair home UPS and inverters or only big units?",
    answer:
      "Home UPS, inverter and battery sets, and the small units that keep the Wi-Fi and lights on during a power cut. Bring it to the shop at 8th Cross, Ilyas Nagar, or WhatsApp a photo of the lights on the panel first.",
  },
  {
    question: "Can you install a new UPS as well as repair the old one?",
    answer:
      "Yes. Repair when the board or battery is the fault. Installation when a new flat needs a UPS on the right point, with earthing that will not kill the inverter.",
  },
  {
    question: "Should I bring the UPS to Kumar Swamy Layout?",
    answer: `If you can carry it, yes. The shop is at ${siteConfig.addressDisplay}. If it is fixed inside a cupboard, call ${siteConfig.phoneDisplay} and send a photo of the front panel and the battery.`,
  },
];

export default function UpsRepairPage() {
  return (
    <ServiceStory
      service={service}
      kicker="UPS repair · Kumar Swamy Layout"
      title="UPS repair and installation in Kumar Swamy Layout, Bengaluru"
      lede="A UPS that beeps during a power cut, a battery that will not charge, or a new inverter that still needs wiring. A One Electricals opens them at the Ilyas Nagar shop."
      ctaMessage="Hi A One Electricals, I need UPS repair or installation in Bengaluru."
      faqs={faqs}
      jsonLdName="UPS repair and installation in Kumar Swamy Layout, Bengaluru"
      jsonLdDescription="Home UPS and inverter repair, battery work, and new UPS installation from Kumar Swamy Layout."
    >
      <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
        UPS repair at the shop, not a general electrician listing
      </h2>
      <p>
        South Bengaluru still loses power in the evening. The UPS that looked fine in
        April dies in October. People search “UPS repair Kumar Swamy Layout” and “inverter
        repair Bangalore” because they need the Wi-Fi and the lights, not a sales
        brochure.
      </p>
      <p>
        {siteConfig.name} repairs and installs UPS units from the same shop as{" "}
        <TextNavLink href="/mixer-repair">mixer motors</TextNavLink> — boards, batteries,
        and the point behind the unit. Call <TextPhoneLink /> with a photo of the
        display. We tell you if it is a cell, a board, or a wiring visit.
      </p>
      <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
        What a UPS job usually covers
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Home inverter and UPS repair at the Kumar Swamy Layout shop.</li>
        <li>Battery checks when the unit switches but dies in minutes.</li>
        <li>New UPS installation with a point and earthing that match the load.</li>
        <li>The beeps, fault lights, and “on but no backup” calls from around Bengaluru.</li>
      </ul>
      <p>
        Ceiling fans and geysers are separate pages:{" "}
        <TextNavLink href="/ceiling-fan">fan rewind</TextNavLink> and{" "}
        <TextNavLink href="/geyser-repair">geyser repair</TextNavLink>. Same number.
      </p>
      <div className="pt-2">
        <CtaPair message="Hi A One Electricals, UPS job in Bengaluru." />
      </div>
    </ServiceStory>
  );
}
