import type { PhotoKey } from "@/lib/photos";

export type AreaFaq = { question: string; answer: string };

export type AreaSection = {
  heading: string;
  body: string;
};

export type Area = {
  slug: string;
  name: string;
  href: string;
  distanceFromWorkshop: string;
  landmarks: string[];
  subLocalities: string[];
  leadService: { label: string; href: string };
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  kicker: string;
  h1: string;
  lede: string;
  intro: string;
  sections: AreaSection[];
  jobs: string[];
  faqs: AreaFaq[];
  heroPhoto: PhotoKey;
  showMap?: boolean;
  primary?: boolean;
};

export const secondaryLocalities = [
  "Banashankari",
  "Uttarahalli",
  "Yelachenahalli",
  "Puttenahalli",
  "Kanakapura Road",
  "ISRO Layout",
  "Sarakki",
] as const;

export const areas = [
  {
    slug: "kumaraswamy-layout",
    name: "Kumaraswamy Layout",
    href: "/areas/kumaraswamy-layout",
    distanceFromWorkshop: "0 km — this is the workshop",
    landmarks: [
      "8th Cross, Ilyas Nagar",
      "50 Feet Road",
      "ISRO Layout side",
      "1st Stage and 2nd Stage",
    ],
    subLocalities: [
      "Ilyas Nagar",
      "1st Stage",
      "2nd Stage",
      "ISRO Layout edge",
      "Sarakki side",
    ],
    leadService: { label: "Mixer repair walk-in", href: "/mixer-repair" },
    metaTitle: "Electrician & Mixer Workshop in Kumaraswamy Layout",
    metaDescription:
      "Walk-in mixer grinder repair, spares, and house wiring from our Ilyas Nagar workshop in Kumaraswamy Layout. Same-day drop-off. Call or WhatsApp +91 70225 16735.",
    keywords: [
      "electrician Kumaraswamy Layout",
      "mixer repair Kumaraswamy Layout",
      "mixie repair Kumaraswamy Layout",
      "electrician Kumar Swamy Layout",
      "electrical shop Ilyas Nagar",
      "house wiring Kumaraswamy Layout Bengaluru",
    ],
    kicker: "Home workshop · Kumaraswamy Layout",
    h1: "Your local electrical and mixer workshop in Kumaraswamy Layout",
    lede: "The shop is at 8th Cross, Ilyas Nagar. Bring a mixer for a same-day check, pick up a jar or coupler, or call for wiring, MCB trips, and earthing in 1st and 2nd Stage.",
    intro:
      "A One Electricals is a walk-in workshop in Kumaraswamy Layout (also written Kumar Swamy Layout), not a call centre. Mixers and ceiling fans come to the bench. Geysers, UPS units, and distribution boards stay in your house — we visit once a WhatsApp photo shows the fault.",
    sections: [
      {
        heading: "Walk-in from 1st Stage, 2nd Stage, and Ilyas Nagar",
        body: "People from Kumaraswamy Layout 1st Stage and 2nd Stage ride in with wet jars that stall, couplers worn smooth, and fans that hum. The shop sits on 8th Cross, Ilyas Nagar, a short ride from 50 Feet Road and the ISRO Layout side. Call before you come so we know you are on the way.",
      },
      {
        heading: "What same-day drop-off usually means",
        body: "A coupler, jar gasket, carbon brush, or speed switch can often be fitted the same day if the part is in stock. A burnt motor that needs rewind takes longer — we tell you on the bench, not after you leave the mixer overnight with no update.",
      },
    ],
    jobs: [
      "Mixer grinders that hum but will not grind — usually a worn coupler.",
      "Wet jars leaking at the base before the next idli batter batch.",
      "Ceiling fans that spark or will not start, repaired in the shop then hung again.",
      "Kitchen points and DBs that trip when the geyser and mixer share a line.",
      "New-flat wiring where the kitchen circuit cannot take a wet grinder load.",
    ],
    faqs: [
      {
        question: "Can I walk in with a mixer today?",
        answer:
          "Yes. Call or WhatsApp +91 70225 16735 before you ride in so we are free. The shop is at 8th Cross, Ilyas Nagar, Kumaraswamy Layout, Bengaluru 560111.",
      },
      {
        question: "Do you only serve Kumaraswamy Layout?",
        answer:
          "The workshop is here. We also take JP Nagar, Jayanagar, BTM Layout, Konanakunte Cross, Banashankari, and Bannerghatta Road calls on the same number.",
      },
      {
        question: "Is there parking near the shop?",
        answer:
          "Street parking on and around 8th Cross is usual. Call when you are close if you need a landmark from 50 Feet Road.",
      },
      {
        question: "Do you sell mixer spares without a repair?",
        answer:
          "Yes. Jars, blades, couplers, brushes, and overload switches are at the same counter. See the spares page or WhatsApp a photo of the part you need.",
      },
    ],
    heroPhoto: "workshop",
    showMap: true,
    primary: true,
  },
  {
    slug: "jp-nagar",
    name: "JP Nagar",
    href: "/areas/jp-nagar",
    distanceFromWorkshop: "About 2–4 km from Ilyas Nagar, depending on the phase",
    landmarks: [
      "Jayadeva Hospital interchange",
      "Kanakapura Road edge of 9th Phase",
      "Sarakki Lake side",
      "Outer Ring Road crossings",
    ],
    subLocalities: [
      "1st–3rd Phase",
      "5th–6th Phase",
      "7th–8th Phase",
      "9th Phase",
    ],
    leadService: { label: "Wiring upgrades & mixer repair", href: "/building-wiring" },
    metaTitle: "Mixer Repair & Electrician in JP Nagar, Bengaluru",
    metaDescription:
      "From our Ilyas Nagar workshop, about 2–4 km away, we repair mixers and handle wiring for JP Nagar homes near Jayadeva and the later phases. Call or WhatsApp +91 70225 16735.",
    keywords: [
      "electrician JP Nagar",
      "mixer repair JP Nagar",
      "mixie repair JP Nagar 7th phase",
      "house wiring JP Nagar Bengaluru",
      "electrician near Jayadeva",
    ],
    kicker: "Calls from JP Nagar",
    h1: "Mixer repair and electrical work in JP Nagar (1st–9th Phase)",
    lede: "A One Electricals sits at the Kumaraswamy Layout–JP Nagar border on 8th Cross, Ilyas Nagar. Bring your mixer for a same-day check, or call for wiring, MCB trips, and earthing in independent houses and apartments.",
    intro:
      "Most JP Nagar homes are a short ride from the workshop. 6th, 7th, and 8th phases are among the closest. There is no JP Nagar counter — the same shop and number cover every phase.",
    sections: [
      {
        heading: "What JP Nagar customers call us for most",
        body: "Mixers that hum but will not turn (usually a worn coupler), jars leaking at the base, a burning smell from the motor, MCBs tripping when the geyser and AC run together, and rewiring for apartment interiors after a renovation.",
      },
      {
        heading: "Phases we cover",
        body: "1st–3rd Phase toward Jayadeva, 5th–6th Phase, 7th–8th Phase, and 9th Phase toward Kanakapura Road. Travel time from Ilyas Nagar is typically 10–20 minutes off-peak for the nearer phases; name your phase on the first WhatsApp so we plan bring-in vs visit.",
      },
      {
        heading: "Independent houses and apartments",
        body: "JP Nagar has both older independent houses that need earthing and DB upgrades, and gated apartments that need a gate pass or RWA approval before we open a board. Say which you are when you call.",
      },
    ],
    jobs: [
      "Preethi, Sumeet, Butterfly, and Prestige mixer repair from JP Nagar kitchens.",
      "Coupler and jar gasket jobs that can often turn around the same day.",
      "MCB and DB work when the kitchen and geyser share an overloaded line.",
      "Apartment wiring upgrades after interior work in 6th–8th Phase flats.",
    ],
    faqs: [
      {
        question: "Do you pick up mixers from JP Nagar?",
        answer:
          "Usually you bring the mixer to 8th Cross, Ilyas Nagar. For a fee when the machine is heavy or you cannot travel, ask on WhatsApp — we say yes only when we can schedule it.",
      },
      {
        question: "How fast can an electrician reach JP Nagar 8th Phase?",
        answer:
          "For wiring and board visits, same-day or next-day is common when you send a clear photo first. Peak traffic on Outer Ring Road can stretch a visit; we tell you a real window on the call.",
      },
      {
        question: "Do you work in gated apartments that need a gate pass?",
        answer:
          "Yes. Tell us the society name and whether security needs a name and ID. We plan the visit after the photo shows the fault.",
      },
      {
        question: "Can you rewire a single room without breaking tiles?",
        answer:
          "Sometimes, with surface trunking or by using existing conduits. Concealed rewiring in a finished flat often needs cutting. We say which is realistic after seeing the walls and board.",
      },
      {
        question: "Is the shop inside JP Nagar?",
        answer:
          "No. The workshop is at 8th Cross, Ilyas Nagar, Kumaraswamy Layout — on the JP Nagar border. Same phone: +91 70225 16735.",
      },
    ],
    heroPhoto: "neighborhood",
  },
  {
    slug: "jayanagar",
    name: "Jayanagar",
    href: "/areas/jayanagar",
    distanceFromWorkshop: "About 3–6 km from Ilyas Nagar, depending on the block",
    landmarks: [
      "4th Block shopping area",
      "South End Circle",
      "Jayanagar bus terminus side",
      "9th Block toward Banashankari",
    ],
    subLocalities: [
      "1st–4th Block",
      "5th–7th Block",
      "8th–9th Block",
      "South End",
    ],
    leadService: { label: "House rewiring & earthing", href: "/building-wiring" },
    metaTitle: "Mixer Repair & House Rewiring in Jayanagar",
    metaDescription:
      "From our Ilyas Nagar workshop, about 3–6 km away, we repair mixers and rewire older Jayanagar homes near 4th Block and South End. Call or WhatsApp +91 70225 16735.",
    keywords: [
      "electrician Jayanagar",
      "mixer repair Jayanagar",
      "house rewiring Jayanagar",
      "earthing Jayanagar Bengaluru",
      "mixie repair Jayanagar 4th block",
    ],
    kicker: "Calls from Jayanagar",
    h1: "Mixer repair and rewiring for Jayanagar homes",
    lede: "Older bungalows in 1st–9th Block often need earthing and board work as much as appliance repair. Mixers come to Kumaraswamy Layout; wiring visits start with a WhatsApp photo of the DB.",
    intro:
      "Jayanagar calls are usually a heavy old mixer from a long kitchen, a geyser in a flat, or a board that trips in a house wired decades ago. A One Electricals is not a Jayanagar shop — name the block so we know whether you are coming past South End Circle or from the 8th and 9th Block side.",
    sections: [
      {
        heading: "Rewiring and earthing in older stock",
        body: "Many Jayanagar independent houses still carry aluminium leftovers, shared kitchen points, and earthing that fails in Bengaluru’s red soil. Rewiring a single circuit or upgrading the DB is the lead job here — not a generic “electrician near me” visit with no plan.",
      },
      {
        heading: "4th Block and the older mixers",
        body: "Kitchens around 4th Block shopping area and the earlier blocks often bring heavy-duty domestic mixers that have been repaired before. Couplers, jars, and motor rewind are bench work at Ilyas Nagar. Send the rating plate photo before you ride across.",
      },
      {
        heading: "Blocks we cover",
        body: "Any block. 8th and 9th Block are a shorter ride toward Banashankari and Kumaraswamy Layout. 4th Block and South End take longer in traffic — say the block on the first message.",
      },
    ],
    jobs: [
      "Mixer grinders and spare jars from Jayanagar kitchens.",
      "Rewiring and earthing in older independent houses.",
      "Ceiling-fan rewind, then a visit to hang it back.",
      "Geyser and home UPS work in Jayanagar houses and apartments.",
    ],
    faqs: [
      {
        question: "Will you come to Jayanagar for a mixer?",
        answer:
          "Usually the mixer comes to Kumaraswamy Layout. Send a photo of the rating plate. We say if a visit is the better plan.",
      },
      {
        question: "Which Jayanagar blocks can call?",
        answer:
          "Any block. Tell us which one, and whether the job is a mixer to carry or a geyser, UPS, or board that has to stay in the house.",
      },
      {
        question: "Do you rewire old Jayanagar bungalows?",
        answer:
          "Yes, when the brief is clear. WhatsApp photos of the DB, the room that fails first, and whether you want a full rewire or one circuit. We give a scoped quote before opening walls.",
      },
      {
        question: "How long does a mixer motor rewind take?",
        answer:
          "Often a few days once the motor is on the bench. Same-day is for couplers, brushes, and switches when parts are in stock — not for a burnt coil.",
      },
    ],
    heroPhoto: "wiringDb",
  },
  {
    slug: "btm-layout",
    name: "BTM Layout",
    href: "/areas/btm-layout",
    distanceFromWorkshop: "About 4–7 km from Ilyas Nagar — the farthest of our core areas",
    landmarks: [
      "Jayadeva Hospital metro interchange",
      "Madiwala side",
      "BTM 2nd Stage market stretches",
      "Outer Ring Road",
    ],
    subLocalities: ["1st Stage", "2nd Stage", "Madiwala edge"],
    leadService: {
      label: "Commercial mixer & rental flat calls",
      href: "/mixer-repair",
    },
    metaTitle: "Electrician & Mixer Repair in BTM Layout",
    metaDescription:
      "From our Ilyas Nagar workshop, about 4–7 km away, we handle electrical work and mixer repair for BTM Layout 1st & 2nd Stage near Jayadeva. Call or WhatsApp +91 70225 16735.",
    keywords: [
      "electrician BTM Layout",
      "mixer repair BTM Layout",
      "mixie repair BTM 2nd stage",
      "commercial mixer repair BTM",
      "house wiring BTM Layout",
    ],
    kicker: "Calls from BTM Layout",
    h1: "Electrical work and mixer repair in BTM Layout (1st & 2nd Stage)",
    lede: "Rentals, PGs, cafés, and apartments in BTM call the Kumaraswamy Layout number. WhatsApp the stage, a photo of the fault, and whether you can bring the appliance in.",
    intro:
      "BTM is denser and farther than JP Nagar from our pin. 1st Stage and 2nd Stage are workable visits; the Madiwala end is the longer ride. There is no BTM counter — plan bring-in for mixers and fans whenever you can.",
    sections: [
      {
        heading: "Rentals, PGs, and café mixers",
        body: "BTM calls often come from rented 2BHKs, PG kitchens, and small eateries that need a commercial or heavy domestic mixer back on the counter. We repair what we can open and say so if a part has to be ordered.",
      },
      {
        heading: "Jayadeva as the landmark",
        body: "Jayadeva Hospital metro interchange is the landmark most callers use. Tell us 1st Stage, 2nd Stage, or the cross near Madiwala — “BTM” alone is not enough to quote travel time.",
      },
      {
        heading: "What a BTM visit looks like",
        body: "A jar or fan motor can come to Ilyas Nagar. For a geyser, inverter, or wiring job, we visit only after the photo shows what is wrong. Expect traffic padding on Outer Ring Road in the evening.",
      },
    ],
    jobs: [
      "Mixer repair and jars for BTM Layout kitchens and small cafés.",
      "Geyser repair where the tank stays in the bathroom.",
      "Home UPS and inverter faults in apartment utility cupboards.",
      "Board and point work when the flat trips under a normal load.",
    ],
    faqs: [
      {
        question: "Are you inside BTM Layout?",
        answer:
          "The workshop is at 8th Cross, Ilyas Nagar, Kumaraswamy Layout, Bengaluru 560111. BTM Layout is a call we take, not a second address.",
      },
      {
        question: "Can I WhatsApp from BTM before riding across?",
        answer:
          "Yes. That is the better start. Photo, stage, and the fault. We say bring-in or visit.",
      },
      {
        question: "Do you repair commercial mixers for BTM cafés?",
        answer:
          "Yes when we can open the motor and source parts. Send the nameplate and a short video of the noise. Hotel-grade 2 HP machines may need a longer parts lead time.",
      },
      {
        question: "Why is BTM slower to reach than JP Nagar?",
        answer:
          "Distance and Ring Road traffic. We still take the call — we just need a clear photo first so the visit is one trip, not two.",
      },
    ],
    heroPhoto: "mixerBench",
  },
  {
    slug: "konanakunte-cross",
    name: "Konanakunte Cross",
    href: "/areas/konanakunte-cross",
    distanceFromWorkshop: "About 3–5 km via Kanakapura Road",
    landmarks: [
      "Konanakunte Cross metro (Green Line)",
      "Forum South / Kanakapura Road retail",
      "Newer layouts off Kanakapura Road",
      "Pin code 560062 side",
    ],
    subLocalities: [
      "Konanakunte",
      "Kanakapura Road layouts",
      "Metro station side",
      "Newer independent houses",
    ],
    leadService: { label: "New-house wiring", href: "/building-wiring" },
    metaTitle: "Electrician & Mixer Repair near Konanakunte Cross",
    metaDescription:
      "From our Ilyas Nagar workshop, about 3–5 km via Kanakapura Road, we repair mixers and wire new homes near Konanakunte Cross metro. Call or WhatsApp +91 70225 16735.",
    keywords: [
      "electrician Konanakunte Cross",
      "mixer repair Konanakunte",
      "house wiring Kanakapura Road",
      "electrician near Konanakunte metro",
      "new house wiring 560062",
    ],
    kicker: "Calls from Konanakunte Cross",
    h1: "Electrical and mixer repair near Konanakunte Cross",
    lede: "Newer layouts off Kanakapura Road need new-house wiring as often as mixer repair. The workshop in Ilyas Nagar is a short ride via Kanakapura Road — call with your cross and a photo.",
    intro:
      "Konanakunte Cross metro (Green Line) and Forum South are the landmarks callers use. We do not have a shop at the cross. Mixers and fans come to Kumaraswamy Layout; new construction wiring and board work are planned as visits.",
    sections: [
      {
        heading: "New-house wiring off Kanakapura Road",
        body: "Many homes around Konanakunte are new or recently finished. The brief is usually concealed points, a kitchen circuit that can take a wet grinder and chimney, geyser points, and earthing done properly the first time — not a patch after the painter leaves.",
      },
      {
        heading: "Metro and Forum South as meeting points",
        body: "If you are bringing a mixer, Konanakunte Cross metro is an easy reference for directions to Ilyas Nagar. For site visits, send the apartment name or the layout cross, not only “near Forum South”.",
      },
      {
        heading: "Mixers from new kitchens",
        body: "New kitchens still wear couplers and overload switches. Bring the machine in, or WhatsApp the plate if you are unsure whether it is repairable before you travel.",
      },
    ],
    jobs: [
      "New independent-house and flat wiring near Kanakapura Road.",
      "DB, MCB/RCCB, and earthing for homes finishing interiors.",
      "Mixer repair and spares for kitchens around Konanakunte.",
      "UPS and geyser point work in new 2BHK and 3BHK flats.",
    ],
    faqs: [
      {
        question: "Do you wire new houses near Konanakunte Cross?",
        answer:
          "Yes. Send the floor plan or photos of the unfinished points and the DB location. We quote materials and labour before the run starts.",
      },
      {
        question: "How far is the shop from Konanakunte Cross metro?",
        answer:
          "Roughly 3–5 km toward Kumaraswamy Layout / Ilyas Nagar via Kanakapura Road, traffic depending. Call +91 70225 16735 for live directions.",
      },
      {
        question: "Can I drop a mixer while commuting on the Green Line?",
        answer:
          "Yes if you can take an auto or ride from the metro to 8th Cross, Ilyas Nagar. WhatsApp when you leave the station so we are ready.",
      },
      {
        question: "Is pin 560062 in your service area?",
        answer:
          "Yes. Konanakunte and the nearby Kanakapura Road layouts are regular calls. Say the exact cross or society name.",
      },
    ],
    heroPhoto: "buildingWiring",
  },
  {
    slug: "banashankari",
    name: "Banashankari",
    href: "/areas/banashankari",
    distanceFromWorkshop: "About 2–4 km from Ilyas Nagar",
    landmarks: [
      "Banashankari temple",
      "BDA complex side",
      "Outer Ring Road",
    ],
    subLocalities: ["Banashankari", "stages near the temple and BDA side"],
    leadService: { label: "Mixer repair & wiring", href: "/mixer-repair" },
    metaTitle: "Electrician for Banashankari",
    metaDescription:
      "A One Electricals takes Banashankari mixer, geyser, UPS, fan, and wiring calls from the workshop at 8th Cross, Ilyas Nagar, Kumaraswamy Layout. Call +91 70225 16735.",
    keywords: [
      "electrician Banashankari",
      "mixer repair Banashankari",
      "geyser repair Banashankari",
      "house wiring Banashankari Bengaluru",
    ],
    kicker: "Calls from Banashankari",
    h1: "Electrician for Banashankari, working from Kumaraswamy Layout",
    lede: "Banashankari sits next to the workshop. Mixers and fans can come to 8th Cross, Ilyas Nagar. Geyser, UPS, and wiring visits start with a WhatsApp photo and the block name.",
    intro:
      "A One Electricals does not have a shop inside Banashankari. The workshop is a short ride south, past the Banashankari temple and BDA complex side, in Kumaraswamy Layout.",
    sections: [
      {
        heading: "A Banashankari call, not a second shop",
        body: "People in Banashankari look for an electrician, a mixer repair, or a geyser that has gone cold. Bring a mixer, a ceiling fan, or a spare-part job to the shop after you call. A geyser on the bathroom wall, a home UPS in the utility, or a distribution board that trips stays where it is — say the stage or block, and we tell you if a visit makes sense.",
      },
    ],
    jobs: [
      "Mixer grinders from Banashankari kitchens that stall after wet grinding.",
      "A jar, blade, or coupling needed before the next batch of batter.",
      "Geyser or UPS visits in houses and apartments around Banashankari.",
      "Ceiling fans that hum, and boards that trip when the geyser and mixer share a line.",
    ],
    faqs: [
      {
        question: "Do you have a shop in Banashankari?",
        answer:
          "No. The workshop is at 8th Cross, Ilyas Nagar, Kumaraswamy Layout, Bengaluru 560111. Banashankari callers use the same number.",
      },
      {
        question: "Should I bring the mixer or ask for a visit?",
        answer:
          "Bring mixers, fans, and small spares to Kumaraswamy Layout. Geysers, UPS units, and wiring stay on site. WhatsApp a photo first.",
      },
    ],
    heroPhoto: "mixerMotorOpen",
  },
  {
    slug: "bannerghatta-road",
    name: "Bannerghatta Road",
    href: "/areas/bannerghatta-road",
    distanceFromWorkshop: "About 2–8 km along Bannerghatta Road, depending on the stretch",
    landmarks: ["Arekere", "Hulimavu", "Bannerghatta Road corridor"],
    subLocalities: ["Arekere", "Hulimavu", "Kumaraswamy Layout end of the road"],
    leadService: { label: "Apartment wiring & appliances", href: "/building-wiring" },
    metaTitle: "Electrician near Bannerghatta Road",
    metaDescription:
      "Wiring, geyser, UPS, mixer, and fan repair for Bannerghatta Road callers. A One Electricals is in Kumaraswamy Layout, Bengaluru 560111. Call +91 70225 16735.",
    keywords: [
      "electrician Bannerghatta Road",
      "mixer repair Bannerghatta Road",
      "geyser repair Bannerghatta Road Bengaluru",
      "UPS repair near Bannerghatta Road",
    ],
    kicker: "Calls from Bannerghatta Road",
    h1: "Electrical repair near Bannerghatta Road, from Kumaraswamy Layout",
    lede: "Flats and houses along Bannerghatta Road call the shop in Ilyas Nagar. Many of those jobs already come to us along that road.",
    intro:
      "Arekere and the Kumaraswamy Layout end of the road are the short visits. Hulimavu and further toward Bannerghatta are the longer ones.",
    sections: [
      {
        heading: "Bannerghatta Road, same workshop",
        body: "Mixer grinders, spare parts, and ceiling-fan motors come to 8th Cross. Geyser, UPS, and building-wiring jobs are planned as visits. Tell us the apartment or the cross, not only “Bannerghatta Road”.",
      },
    ],
    jobs: [
      "Mixer manufacturing, repair, and spares for kitchens along the road.",
      "Geyser installation and repair in apartments that never had a proper point.",
      "Home UPS wiring and battery faults after a power cut.",
      "House and flat wiring when a new load keeps tripping the board.",
    ],
    faqs: [
      {
        question: "Is the shop on Bannerghatta Road?",
        answer:
          "The shop is at 8th Cross, Ilyas Nagar, Kumaraswamy Layout, Bengaluru 560111. Bannerghatta Road callers use that address and +91 70225 16735.",
      },
      {
        question: "Do you visit apartments near Bannerghatta Road?",
        answer:
          "For geyser, UPS, and wiring, yes, once you send a photo and the address. Mixers and fans usually come to the shop.",
      },
    ],
    heroPhoto: "switch",
  },
] as const satisfies readonly Area[];

export type AreaSlug = (typeof areas)[number]["slug"];

export const primaryAreas = areas.filter((area) =>
  [
    "kumaraswamy-layout",
    "jp-nagar",
    "jayanagar",
    "btm-layout",
    "konanakunte-cross",
  ].includes(area.slug)
);

export function getArea(slug: string): Area | undefined {
  return areas.find((area) => area.slug === slug);
}

export function requireArea(slug: AreaSlug): Area {
  const area = getArea(slug);
  if (!area) throw new Error(`Unknown area: ${slug}`);
  return area;
}
