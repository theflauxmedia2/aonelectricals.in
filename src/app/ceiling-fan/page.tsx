import type { Metadata } from "next";
import { CtaPair, TextNavLink, TextPhoneLink } from "@/components/cta-links";
import { ServiceStory } from "@/components/service-story";
import { buildMetadata } from "@/lib/seo";
import { services, siteConfig } from "@/lib/site";

const service = services.find((item) => item.slug === "ceiling-fan")!;

export const metadata: Metadata = buildMetadata({
  title: "Fan Repair in Kumar Swamy Layout",
  description:
    "Ceiling fan rewind and installation in Kumar Swamy Layout, Bengaluru. Humming motors, new hangings, regulator points. Call A One Electricals at +91 70225 16735.",
  path: service.href,
  keywords: [
    "ceiling fan rewind Kumar Swamy Layout",
    "ceiling fan installation Bengaluru",
    "fan motor rewind Bangalore",
    "celling fan repair Kumar Swamy Layout",
    "ceiling fan fitting Ilyas Nagar",
  ],
});

const faqs = [
  {
    question: "Do you rewind a ceiling fan or only fit a new one?",
    answer:
      "Both. A fan that hums, heats, or will not start often needs the motor repaired in the shop. A new room that has a hook and no fan needs the fan fitted and wired. Same people.",
  },
  {
    question: "Should I bring the fan to Kumar Swamy Layout?",
    answer: `If it is down, yes — ${siteConfig.addressDisplay}. If it is still on the ceiling and only the regulator died, WhatsApp a photo and we plan a visit. Call ${siteConfig.phoneDisplay}.`,
  },
  {
    question: "Is this the same as house wiring?",
    answer:
      "Related. A new fan needs a power point and a wire loop. Motor repair happens in the shop. We tell you on the call so you do not book the wrong visit.",
  },
];

export default function CeilingFanPage() {
  return (
    <ServiceStory
      service={service}
      kicker="Ceiling fan · Kumar Swamy Layout"
      title="Ceiling fan rewind and installation in Kumar Swamy Layout, Bengaluru"
      lede="A fan that hums all afternoon, sparks at the regulator, or a new room that still needs a fan. A One Electricals repairs the motor in the shop and fits the fan in the house."
      ctaMessage="Hi A One Electricals, I need ceiling fan rewind or installation in Bengaluru."
      faqs={faqs}
      jsonLdName="Ceiling fan rewind and installation in Kumar Swamy Layout, Bengaluru"
      jsonLdDescription="Ceiling fan motor rewind, regulator work, and new fan installation from Kumar Swamy Layout."
    >
      <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
        Fan motors we rewind, and fans we hang
      </h2>
      <p>
        A Bengaluru ceiling fan works harder than the catalogue admits. Bearings dry.
        Windings cook. The regulator clicks and nothing moves. Search “ceiling fan
        rewind Kumar Swamy Layout” or “ceiling fan installation Bangalore” and you want a shop
        that still opens the motor, not a page that only sells a new one.
      </p>
      <p>
        {siteConfig.name} repairs fan motors at the Ilyas Nagar shop and installs
        fans on site — hook, downrod, wiring, and the point if{" "}
        <TextNavLink href="/building-wiring">building wiring</TextNavLink> has to
        catch up. Call <TextPhoneLink /> with a clip of the noise.
      </p>
      <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
        What to send on the call
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>A short video of the hum, wobble, or the fan that will not start.</li>
        <li>Whether it is still on the ceiling or already down.</li>
        <li>Your area in Bengaluru — walk-in to Kumar Swamy Layout or a hanging visit.</li>
      </ul>
      <p>
        Mixer rewind is a different motor:{" "}
        <TextNavLink href="/mixer-repair">mixer repair</TextNavLink>. Geysers and UPS
        sit on their own pages. One WhatsApp line routes all of them.
      </p>
      <div className="pt-2">
        <CtaPair message="Hi A One Electricals, ceiling fan job in Bengaluru." />
      </div>
    </ServiceStory>
  );
}
