# A One Electricals

Futuristic marketing site for **A One Electricals** — mixer manufacturing and repair, building wiring, and spare parts from Kumar Swamy Layout, Bengaluru.

The first slice is built for **local search and call conversion**: indexable service and location pages, LocalBusiness JSON-LD, sitemap/robots, and visible Call / WhatsApp actions on every page.

## Contact used on the site

- Phone / WhatsApp: [+91 70225 16735](tel:+917022516735)
- Address: 8th Cross, Ilyas Nagar, Kumar Swamy Layout, Bengaluru 560111
- Place: Kumar Swamy Layout, Bengaluru
- Social: [Instagram](https://www.instagram.com/a_one_electricals_) `@a_one_electricals_`
- Hours: open all day, every day. Call or WhatsApp +91 70225 16735.

## Pages

- `/` — home
- `/services` — service index
- `/mixer-repair` — mixer manufacturing and repair
- `/building-wiring` — house and building wiring
- `/spares` — spare parts (searchable)
- `/kumar-swamy-layout` — neighborhood landing
- `/bengaluru` — city service-area landing
- `/about` — workshop
- `/contact` — NAP + WhatsApp lead form

## Where the code lives

This project is a Next.js app in the git working tree:

- Pages: `src/app/` (`page.tsx` is home; each folder is a route)
- Shared chrome: `src/components/site-chrome.tsx`
- Empty photo frames: `src/components/image-slot.tsx`
- Copy, phone, and nav: `src/lib/site.ts`
- SEO / JSON-LD: `src/lib/seo.ts`

Drop photographs into `public/images/` and pass `src="/images/your-file.jpg"` on the matching `ImageSlot`. Frames stay empty until then — no SVG stand-ins.

## Run on your laptop

You need [Node.js 20+](https://nodejs.org/) (includes `npm`).

**Option A — zip:** unzip the source folder, then:

```bash
cd a-one-electricals   # or whatever you named the unzipped folder
npm install
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

**Option B — git:** in Cursor, click **Create repo**, then clone that repo and check out branch `cursor/a-one-electricals-site-b1c3`. Same `npm install` / `npm run dev` after that.

Do not copy `node_modules` from the zip — install fresh on your machine.

```bash
npm run build
npm start -- --port 3000
```

## Production URL (SEO)

Canonical URLs, sitemap, robots, and JSON-LD `@id` values come from:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

Copy `.env.example` and set the live domain before deploy. Do not use a domain you do not own.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui. No auth and no database. Leads go to the phone / WhatsApp number above.
