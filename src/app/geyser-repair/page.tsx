import type { Metadata } from "next";
import { CtaPair, TextNavLink, TextPhoneLink } from "@/components/cta-links";
import { ServiceStory } from "@/components/service-story";
import { buildMetadata } from "@/lib/seo";
import { services, siteConfig } from "@/lib/site";

const service = services.find((item) => item.slug === "geyser-repair")!;

export const metadata: Metadata = buildMetadata({
  title: "Geyser Repair in Kumaraswamy Layout",
  description:
    "Geyser repair and installation in Kumaraswamy Layout, Bengaluru. Leaking tanks, no hot water, new 2BHK fits. Call A One Electricals at +91 70225 16735.",
  path: service.href,
  keywords: [
    "geyser repair Kumaraswamy Layout",
    "geyser installation Bengaluru",
    "water heater repair Bangalore",
    "geyzer repair Kumaraswamy Layout",
    "geyser repair Ilyas Nagar",
  ],
});

const faqs = [
  {
    question: "Do you install a new geyser or only repair the old one?",
    answer:
      "Both. A leaking storage geyser, a dry-burnt element, or a new 2BHK that still has a blank wall in the bath — we repair on the visit or hang a new unit and wire the isolator.",
  },
  {
    question: "Can you look at a geyser that trips the MCB?",
    answer:
      "Yes. That is often earthing, a failed thermostat, or a point that was never meant for a geyser load. WhatsApp a photo of the geyser and the DB. We tell you if it is a repair or a wiring job.",
  },
  {
    question: "Do I bring the geyser to Kumaraswamy Layout?",
    answer: `Usually we come to you. Storage geysers stay on the wall. Call ${siteConfig.phoneDisplay} with your area — Kumaraswamy Layout, Jayanagar, BTM — and a photo of the leak or the error light.`,
  },
];

export default function GeyserRepairPage() {
  return (
    <ServiceStory
      service={service}
      kicker="Hot water · Kumaraswamy Layout"
      title="Geyser repair and installation in Kumaraswamy Layout, Bengaluru"
      lede="No hot water before the 7 a.m. bath, a tank weeping down the tiles, or a new flat that still needs a geyser hung — A One Electricals repairs and installs from 8th Cross, Ilyas Nagar."
      ctaMessage="Hi A One Electricals, I need geyser repair or installation in Bengaluru."
      faqs={faqs}
      jsonLdName="Geyser repair and installation in Kumaraswamy Layout, Bengaluru"
      jsonLdDescription="Geyser repair, element and thermostat work, and new geyser installation for Bengaluru homes."
    >
      <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
        Why Kumaraswamy Layout geysers fail — and what we fix
      </h2>
      <p>
        Bengaluru hard water eats elements. A thermostat sticks. A tank pinholes after
        a few monsoons. Then someone searches “geyser repair near me” from Kumaraswamy Layout or
        “geyser installation Bangalore” for a house that never got one fitted.
      </p>
      <p>
        {siteConfig.name} does geyser repair and installation on the same number as{" "}
        <TextNavLink href="/building-wiring">building wiring</TextNavLink>. If the
        point is wrong, that is a wiring visit. If the tank is gone, we say so on the
        call — <TextPhoneLink /> — not after a fake quote.
      </p>
      <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
        What to send on WhatsApp
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>A photo of the geyser on the wall and the leak, if there is one.</li>
        <li>Whether it trips the MCB, stays cold, or never heats past lukewarm.</li>
        <li>Your area in Bengaluru, so we know if it is a walk-in or a visit.</li>
      </ul>
      <p>
        Mixer motors stay at the{" "}
        <TextNavLink href="/mixer-repair">repair shop</TextNavLink>. UPS work is a
        different page — <TextNavLink href="/ups-repair">UPS repair</TextNavLink>. If
        you are not sure, say “no hot water” and we will tell you what to do.
      </p>
      <div className="pt-2">
        <CtaPair message="Hi A One Electricals, geyser job in Bengaluru." />
      </div>
    </ServiceStory>
  );
}
