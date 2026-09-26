export const siteConfig = {
  name: "A One Electricals",
  shortName: "A One",
  locale: "en_IN",
  language: "en-IN",
  city: "Bengaluru",
  neighborhood: "Kumar Swamy Layout",
  locality: "Ilyas Nagar",
  street: "8th Cross, Ilyas Nagar",
  postalCode: "560111",
  addressDisplay: "8th Cross, Ilyas Nagar, Kumar Swamy Layout, Bengaluru 560111",
  latitude: 12.898519893182634,
  longitude: 77.58882758709476,
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=12.898519893182634,77.58882758709476",
  mapsEmbedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=77.58482758709476%2C12.894519893182634%2C77.59282758709476%2C12.902519893182634&layer=mapnik&marker=12.898519893182634%2C77.58882758709476",
  region: "Karnataka",
  country: "IN",
  countryName: "India",
  phoneDisplay: "+91 70225 16735",
  phoneTel: "+917022516735",
  phoneDigits: "917022516735",
  whatsappUrl: "https://wa.me/917022516735",
  socialHandle: "a_one_electricals_",
  instagram: "https://www.instagram.com/a_one_electricals_",
  hoursDisplay: "Open all day, every day",
  tagline: "Electrical repair and installation from Kumar Swamy Layout.",
} as const;

export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const vercelHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercelHost) {
    return vercelHost.startsWith("http")
      ? vercelHost.replace(/\/$/, "")
      : `https://${vercelHost}`;
  }

  return "http://127.0.0.1:3000";
}

export function isIndexableHost(url = getSiteUrl()) {
  try {
    const host = new URL(url).hostname;
    return (
      host !== "localhost" &&
      host !== "127.0.0.1" &&
      !host.endsWith(".vercel.app")
    );
  } catch {
    return false;
  }
}

export const navItems = [
  { href: "/services", label: "Services" },
  { href: "/building-wiring", label: "Building wiring" },
  { href: "/spares", label: "Spares" },
  { href: "/kumar-swamy-layout", label: "Kumar Swamy Layout" },
  { href: "/bengaluru", label: "Bengaluru" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "building-wiring",
    href: "/building-wiring",
    kicker: "01",
    title: "Building wiring",
    navLabel: "Building wiring",
    searchTitle: "House and building wiring in Kumar Swamy Layout, Bengaluru",
    blurb:
      "New flats, old independent houses, and shop boards around Kumar Swamy Layout — points, DBs, and earthing that hold when the monsoon hits.",
    intent: "house wiring Kumar Swamy Layout, building wiring Bengaluru, electrician",
    image: "House wiring / distribution board",
    photo: "buildingWiring",
    cardPhoto: "buildingWiring",
    featured: true,
  },
  {
    slug: "mixer-repair",
    href: "/mixer-repair",
    kicker: "02",
    title: "Mixer manufacturing & repair",
    navLabel: "Mixer repair",
    searchTitle: "Mixer grinder repair and manufacturing in Kumar Swamy Layout, Bengaluru",
    blurb:
      "Jar couplings, burnt motors, and noisy wet grinders from Kumar Swamy Layout kitchens. We repair them in the shop, not by guessing on a phone call.",
    intent:
      "mixer grinder repair Kumar Swamy Layout, mixer manufacturing Bengaluru, mixer motor rewind",
    image: "Mixer at the Kumar Swamy Layout shop",
    photo: "mixer",
    cardPhoto: "mixer",
    featured: true,
  },
  {
    slug: "spares",
    href: "/spares",
    kicker: "03",
    title: "Mixer & electrical spares",
    navLabel: "Spares",
    searchTitle: "Mixer spare parts in Bengaluru — jars, blades, motors",
    blurb:
      "Blades, jars, carbon brushes, overload switches, and the small parts that keep a mixer in daily masala work.",
    intent: "mixer spare parts Bengaluru, mixer jar blade Kumar Swamy Layout",
    image: "Jars, blades, and spare parts",
    photo: "spares",
    cardPhoto: "sparesWide",
    featured: true,
  },
  {
    slug: "geyser-repair",
    href: "/geyser-repair",
    kicker: "04",
    title: "Geyser repair & installation",
    navLabel: "Geyser",
    searchTitle: "Geyser repair and installation in Kumar Swamy Layout, Bengaluru",
    blurb:
      "No hot water, a leaking tank, or a new 2BHK that still needs a geyser on the wall — we repair and install from Ilyas Nagar.",
    intent:
      "geyser repair Kumar Swamy Layout, geyser installation Bengaluru, water heater repair Bangalore",
    image: "Storage geyser on a bathroom wall",
    photo: "geyser",
    cardPhoto: "geyserWide",
    featured: false,
  },
  {
    slug: "ups-repair",
    href: "/ups-repair",
    kicker: "05",
    title: "UPS repair & installation",
    navLabel: "UPS",
    searchTitle: "UPS repair and installation in Kumar Swamy Layout, Bengaluru",
    blurb:
      "An inverter that will not hold charge, a battery that swells, or a new UPS for the Wi-Fi and lights. We open it at the Kumar Swamy Layout shop.",
    intent:
      "UPS repair Kumar Swamy Layout, UPS installation Bengaluru, inverter repair Bangalore",
    image: "UPS opened at the shop",
    photo: "ups",
    cardPhoto: "upsWide",
    featured: false,
  },
  {
    slug: "ceiling-fan",
    href: "/ceiling-fan",
    kicker: "06",
    title: "Ceiling fan rewind & installation",
    navLabel: "Ceiling fan",
    searchTitle: "Ceiling fan rewind and installation in Kumar Swamy Layout, Bengaluru",
    blurb:
      "A fan that hums, sparks, or will not start. We repair the motor in the shop, then fit it back so the room has air again.",
    intent:
      "ceiling fan rewind Kumar Swamy Layout, ceiling fan installation Bengaluru, fan motor rewind Bangalore",
    image: "Ceiling fan being wired on a Bengaluru ceiling",
    photo: "fanInstall",
    cardPhoto: "fanRewind",
    featured: false,
  },
] as const;

export type Service = (typeof services)[number];
export type ServicePhoto = Service["photo"];

export const addedServices = [
  {
    slug: "ups-wiring",
    href: "/ups-wiring",
    navLabel: "UPS wiring",
    searchTitle: "UPS wiring in Kumar Swamy Layout",
    metaTitle: "UPS Wiring in Kumar Swamy Layout",
    blurb:
      "New inverter points, changeover wiring, and the cable run from the battery cupboard to the lights — planned before the next power cut.",
    image: "Home UPS and inverter wiring",
    photo: "upsWiring",
    kicker: "Inverter wiring · Kumar Swamy Layout",
    lede: "A UPS that is bought and still not wired, or an old changeover that trips the whole flat — A One Electricals runs the wiring from Kumar Swamy Layout.",
    description:
      "UPS and inverter wiring in Kumar Swamy Layout, Bengaluru. Changeover, battery cupboard, and light points. Call A One Electricals at +91 70225 16735.",
    keywords: [
      "UPS wiring Kumar Swamy Layout",
      "inverter wiring Bengaluru",
      "home UPS installation Bangalore",
    ],
    ctaMessage: "Hi A One Electricals, I need UPS wiring in Bengaluru.",
    paragraphs: [
      "Buying the inverter is the easy part. The job that fails is the wiring: a thin cable on a heavy load, no changeover, or the battery sitting in a closed loft with no air.",
      "We wire the UPS into the points you actually need through a cut — lights, fan, Wi-Fi — and we say so on the call if the board itself has to be opened first.",
      "In Bangalore flats the usual brief is one changeover for the hall and bedroom lights, a separate line for the Wi-Fi, and the battery cupboard left with air. Send a photo of the board and say which rooms must stay on.",
    ],
    faqs: [
      {
        question: "Is UPS wiring the same as UPS repair?",
        answer:
          "No. Repair opens a unit that already beeps or will not hold charge. Wiring is the cable, changeover, and points for a new or relocated UPS.",
      },
      {
        question: "Do you come to the flat?",
        answer:
          "Yes. The inverter stays where it is installed. WhatsApp a photo of the board and the battery cupboard, and say your area.",
      },
    ],
  },
  {
    slug: "gas-stove",
    href: "/gas-stove",
    navLabel: "Gas stove service",
    searchTitle: "Gas stove service in Kumar Swamy Layout",
    metaTitle: "Gas Stove Service, Kumar Swamy Layout",
    blurb:
      "Burners that will not hold a flame, a jammed knob, or a stove that needs a proper service before the next cooking rush.",
    image: "Gas stove service",
    photo: "gasStove",
    kicker: "Stove service · Kumar Swamy Layout",
    lede: "A burner that lights and dies, a knob that spins free, or a stove that has not been opened in years — A One Electricals services gas stoves from Kumar Swamy Layout.",
    description:
      "Gas stove service in Kumar Swamy Layout, Bengaluru. Burners, knobs, and ignition. Call A One Electricals at +91 70225 16735.",
    keywords: [
      "gas stove service Kumar Swamy Layout",
      "gas stove repair Bengaluru",
      "burner not working Bangalore",
    ],
    ctaMessage: "Hi A One Electricals, I need gas stove service in Bengaluru.",
    paragraphs: [
      "Most stove calls are not a new stove. They are a blocked burner, a tired ignition, or a knob that no longer lines up with the gas.",
      "Send a photo of the stove and say which burner failed. We tell you if we should visit, or if a part has to come to the shop.",
      "A glass top and a stainless two-burner fail differently. The glass top usually needs the ignition or the knob looked at in place. A small stove can come to Kumar Swamy Layout if you can carry it.",
    ],
    faqs: [
      {
        question: "Do you service a built-in hob or only a freestanding stove?",
        answer:
          "Both, when the fault is the burner, knob, or ignition. WhatsApp the model and a photo so we know which visit to plan.",
      },
      {
        question: "Is this an electrical job?",
        answer:
          "Ignition and the stove’s wiring are electrical. Gas leaks are not something we guess at on a phone call — say what you smell and we will tell you the next step.",
      },
    ],
  },
  {
    slug: "water-pump",
    href: "/water-pump",
    navLabel: "Water pump repair",
    searchTitle: "Water pump repair in Kumar Swamy Layout",
    metaTitle: "Water Pump Repair, Kumar Swamy Layout",
    blurb:
      "A pump that hums and does not lift, a starter that trips, or a motor that needs opening before the overhead tank runs dry.",
    image: "Water pump motor repair",
    photo: "waterPump",
    kicker: "Water pump · Kumar Swamy Layout",
    lede: "The sump pump that only hums, or the starter that trips when the tank is filling — A One Electricals repairs water pumps from Kumar Swamy Layout.",
    description:
      "Water pump repair in Kumar Swamy Layout, Bengaluru. Motors, starters, and pumps that will not lift. Call A One Electricals at +91 70225 16735.",
    keywords: [
      "water pump repair Kumar Swamy Layout",
      "motor pump repair Bengaluru",
      "sump pump not working Bangalore",
    ],
    ctaMessage: "Hi A One Electricals, I need water pump repair in Bengaluru.",
    paragraphs: [
      "A pump that is loud and dry is often a motor or a starter, not a new borewell. We ask for the nameplate and whether it hums, trips, or runs without lifting water.",
      "Small motors can come to the shop. If the pump is still fitted, we visit once you tell us the area and what is wrong on WhatsApp.",
      "Say whether it is the sump in the basement, the overhead-tank pump on the terrace, or a booster on the kitchen line. Those three are different visits, and the terrace motor is the one people in Bangalore apartments usually cannot carry down.",
    ],
    faqs: [
      {
        question: "Should I remove the pump and bring it in?",
        answer:
          "If it is a small domestic motor and already off the pipe, yes. If it is still coupled to the line, call first — we will say whether a visit is the safer job.",
      },
      {
        question: "Do you rewind pump motors?",
        answer:
          "Yes, when the coil is burnt. A stuck bearing or a dead capacitor is often the smaller fault. We know after we open it.",
      },
    ],
  },
  {
    slug: "washing-machine",
    href: "/washing-machine",
    navLabel: "Washing machine repair",
    searchTitle: "Washing machine repair in Kumar Swamy Layout",
    metaTitle: "Washer Repair in Kumar Swamy Layout",
    blurb:
      "A machine that will not spin, a door that stays locked, or a motor that smells hot after one load.",
    image: "Washing machine repair",
    photo: "washer",
    kicker: "Washer · Kumar Swamy Layout",
    lede: "A wash that stops mid-cycle, a drum that will not spin, or a machine that trips the point — A One Electricals repairs washing machines from Kumar Swamy Layout.",
    description:
      "Washing machine repair in Kumar Swamy Layout, Bengaluru. Spin, motor, and power faults. Call A One Electricals at +91 70225 16735.",
    keywords: [
      "washing machine repair Kumar Swamy Layout",
      "washing machine service Bengaluru",
      "washer not spinning Bangalore",
    ],
    ctaMessage: "Hi A One Electricals, I need washing machine repair in Bengaluru.",
    paragraphs: [
      "Send the brand, whether it is top-load or front-load, and what it does instead of finishing a wash. A photo of the error or the back panel saves a wasted visit.",
      "We are not every brand’s service centre. We open the motor, the board, and the power supply, and we tell you if the job is more than we can repair.",
      "A machine that fills and then sits, a drum that knocks on spin, and a point that trips only when the wash starts are three different jobs. Name which one it is, and the floor you are on if the machine cannot come down the stairs.",
    ],
    faqs: [
      {
        question: "Do you come home for a washing machine?",
        answer:
          "Yes, when the machine cannot travel. Call with your area. If it is a small fault you can unplug, we may still ask you to bring it to Kumar Swamy Layout.",
      },
      {
        question: "The point trips only when the machine starts. Is that the washer?",
        answer:
          "Sometimes the machine, sometimes the point. Say so on the call. We check the supply before we condemn the motor.",
      },
    ],
  },
  {
    slug: "air-cooler",
    href: "/air-cooler",
    navLabel: "Air cooler repair",
    searchTitle: "Air cooler repair in Kumar Swamy Layout",
    metaTitle: "Air Cooler Repair, Kumar Swamy Layout",
    blurb:
      "A cooler that will not swing, a pump that stays dry, or a fan motor that hums through summer.",
    image: "Air cooler repair",
    photo: "fanRewind",
    kicker: "Air cooler · Kumar Swamy Layout",
    lede: "A desert cooler with a dead pump, a fan that only hums, or pads that never get wet — A One Electricals repairs air coolers from Kumar Swamy Layout.",
    description:
      "Air cooler repair in Kumar Swamy Layout, Bengaluru. Fan motors, pumps, and swing. Call A One Electricals at +91 70225 16735.",
    keywords: [
      "air cooler repair Kumar Swamy Layout",
      "cooler service Bengaluru",
      "desert cooler not working Bangalore",
    ],
    ctaMessage: "Hi A One Electricals, I need air cooler repair in Bengaluru.",
    paragraphs: [
      "Summer coolers fail in three places: the fan motor, the water pump, and the swing. A cooler that blows hot air with a full tank is usually the pump, not the fan.",
      "Bring a small cooler to the shop, or WhatsApp a photo if it is a tall cooler that has to stay in the room. Same number as the fan and mixer work.",
      "Before peak summer in Bangalore the queue is the pump and the swing, not a new cooler. If the fan only hums, that is motor work of the same kind as a ceiling fan, and it can be done at the Kumar Swamy Layout shop.",
    ],
    faqs: [
      {
        question: "Do you repair the cooler fan or only the pump?",
        answer:
          "Both. A humming fan is motor work, close to the ceiling-fan rewind we already do. A silent pump is a separate part.",
      },
      {
        question: "Can I bring the cooler to Kumar Swamy Layout?",
        answer:
          "Yes, if you can move it. Call first so we are free. Large coolers need a visit.",
      },
    ],
  },
] as const;

export type AddedService = (typeof addedServices)[number];

const mixerService = services.find((service) => service.slug === "mixer-repair");

export const serviceDirectory = [
  ...services.filter((service) => service.slug !== "mixer-repair"),
  ...addedServices,
  ...(mixerService ? [mixerService] : []),
];

export const featuredServices = services.filter((service) => service.featured);
export const extraServices = services.filter((service) => !service.featured);
export const menuServices = [
  ...services.filter((service) => !navItems.some((item) => item.href === service.href)),
  ...addedServices,
];

export const coverageAreas = [
  { name: "Kumar Swamy Layout", href: "/kumar-swamy-layout" },
  { name: "Banashankari", href: "/banashankari" },
  { name: "Jayanagar", href: "/jayanagar" },
  { name: "BTM Layout", href: "/btm-layout" },
  { name: "Bannerghatta Road", href: "/bannerghatta-road" },
  { name: "South Bengaluru", href: "/bengaluru" },
  { name: "Bengaluru", href: "/bengaluru" },
] as const;

export const areasServed = coverageAreas.map((area) => area.name);

export const spareCatalog = [
  {
    slug: "jars",
    name: "Mixer jars",
    summary:
      "Wet, dry, and chutney jars for domestic mixer grinders brought in from Bengaluru kitchens.",
  },
  {
    slug: "blades",
    name: "Blades & cutter sets",
    summary:
      "Masala blades, wet blades, and the cutter assemblies that round off after a year of coconut and idli batter.",
  },
  {
    slug: "couplings",
    name: "Couplings & bushings",
    summary:
      "The rubber and metal links between jar and motor — the usual reason a mixer “runs but does not grind.”",
  },
  {
    slug: "motors",
    name: "Motors & rewind",
    summary:
      "Burnt coils, stuck bearings, and motors that trip after wet grinding. We open the motor at the Kumar Swamy Layout shop.",
  },
  {
    slug: "switches",
    name: "Switches & overload",
    summary:
      "Speed switches, overload protectors, and the parts that fail when a jar is packed too tight.",
  },
  {
    slug: "brushes",
    name: "Carbon brushes",
    summary:
      "Sparking, weak spin, or a mixer that only runs if you tap it — often a brush, not a full motor.",
  },
] as const;

export const inquiryServices = [
  "Building wiring",
  "Geyser repair & installation",
  "UPS repair & installation",
  "Ceiling fan rewind & installation",
  "Spare parts",
  "UPS wiring",
  "Gas stove service",
  "Water pump repair",
  "Washing machine repair",
  "Air cooler repair",
  "Mixer repair",
  "Mixer manufacturing",
  "Not sure yet",
  "Others",
] as const;

export type InquiryService = (typeof inquiryServices)[number];

export function whatsappHref(message?: string) {
  if (!message) return siteConfig.whatsappUrl;
  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function serviceInterestMessage(
  service: string,
  details?: { name?: string; phone?: string; area?: string; notes?: string }
) {
  const name = details?.name?.trim();
  const phone = details?.phone?.trim();
  const area = details?.area?.trim();
  const notes = details?.notes?.trim();
  const interest = service === "Others" ? "another service" : service;
  return [
    `Hi A One Electricals, I am interested in ${interest}.`,
    name ? `I am ${name}.` : "",
    phone ? `My number is ${phone}.` : "",
    area ? `I am in ${area}.` : "",
    notes ? `Details: ${notes}` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export const defaultWhatsappMessage =
  "Hi A One Electricals, I am in Bengaluru and need help with mixer / wiring / geyser / UPS / fan.";
