import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { coverageAreas, navItems, serviceDirectory, siteConfig } from "@/lib/site";
import { CallLink, WhatsAppLink } from "@/components/cta-links";
import { ImageSlot, type ImageSlotProps } from "@/components/image-slot";
import { ThemeToggle } from "@/components/theme-toggle";
import { CableCores } from "@/components/cable-cores";
import { CircuitStrip } from "@/components/circuit-rail";
import { MobileNav } from "@/components/mobile-nav";
import { SocialButtons } from "@/components/social-buttons";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 pt-[env(safe-area-inset-top)] backdrop-blur-xl md:border-b md:border-border/60">
      <div className="mx-auto flex w-full items-center gap-3 px-4 py-2.5 lg:gap-5 lg:px-8 md:py-3">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2.5">
          <span className="relative size-14 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-black/10">
            <Image
              src="/brand/logo-circle.png"
              alt=""
              width={56}
              height={56}
              priority
              className="size-full object-cover"
            />
          </span>
          <span className="min-w-0">
            <span className="block font-heading text-[1.2rem] leading-[1.05] sm:text-[1.5rem]">
              {siteConfig.name}
            </span>
            <span className="mt-1 flex min-w-0 items-center gap-1.5 text-[0.65rem] tracking-[0.06em] text-muted-foreground sm:text-[0.7rem]">
              <CableCores />
              <span className="whitespace-nowrap">
                {siteConfig.neighborhood}
              </span>
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden min-w-0 flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-x-4 xl:gap-x-6">
            {navItems.map((item) => (
              <li
                key={item.href}
                className={
                  item.href === "/kumar-swamy-layout" ||
                  item.href === "/bengaluru" ||
                  item.href === "/about"
                    ? "hidden 2xl:block"
                    : undefined
                }
              >
                <Link
                  href={item.href}
                  className="whitespace-nowrap text-[0.8125rem] text-muted-foreground transition-colors duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative z-10 ml-auto flex shrink-0 items-center gap-1.5">
          <ThemeToggle />
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="pressable flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground lg:hidden"
            aria-label={`Call ${siteConfig.phoneDisplay}`}
          >
            <Phone className="size-4" />
          </a>
          <div className="hidden items-center gap-2 lg:flex">
            <CallLink className="h-11 min-h-11 px-5" size="default">
              Call
            </CallLink>
            <WhatsAppLink className="h-11 min-h-11 px-5" size="default">
              WhatsApp
            </WhatsAppLink>
          </div>
          <MobileNav />
        </div>
      </div>
      <CircuitStrip />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border pb-[calc(6.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:gap-12 md:py-16">
        <div className="md:col-span-2">
          <Image
            src="/brand/logo.png"
            alt={siteConfig.name}
            width={220}
            height={220}
            className="h-28 w-auto rounded-2xl bg-white p-2"
          />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Wiring, mixer repair, geyser, UPS, ceiling-fan rewind, spare parts, UPS
            wiring, gas stove service, water pump, washing machine, and air cooler
            repair from Kumar Swamy Layout. Calls and WhatsApp from around Bengaluru.
          </p>
          <p className="mt-5 text-sm">
            Call or WhatsApp{" "}
            <a
              className="text-primary underline underline-offset-4"
              href={`tel:${siteConfig.phoneTel}`}
            >
              {siteConfig.phoneDisplay}
            </a>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {siteConfig.hoursDisplay}. Call {siteConfig.phoneDisplay}.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              {siteConfig.addressDisplay}
            </a>
          </p>
        </div>

        <div>
          <p className="kicker">Work</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {serviceDirectory.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted-foreground transition-colors duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-foreground"
                >
                  {item.navLabel}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="text-muted-foreground transition-colors duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-foreground"
              >
                All services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-muted-foreground transition-colors duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-foreground"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="kicker">Areas</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {coverageAreas
              .filter((area) => area.name !== "South Bengaluru")
              .map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="text-muted-foreground transition-colors duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-foreground"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
          </ul>
          <p className="kicker mt-8">Social</p>
          <SocialButtons className="mt-4" compact />
        </div>
      </div>
      <p className="border-t border-border px-4 py-5 text-center text-[0.8rem] text-muted-foreground">
        {siteConfig.name} · {siteConfig.addressDisplay} ·{" "}
        {siteConfig.phoneDisplay}
      </p>
    </footer>
  );
}

export function PageHero({
  kicker,
  title,
  lede,
  children,
  image,
}: {
  kicker: string;
  title: string;
  lede: string;
  children?: ReactNode;
  image?: ImageSlotProps;
}) {
  return (
    <header className="border-b border-border">
      <div
        className={
          image
            ? "mx-auto grid max-w-6xl items-end gap-5 px-4 py-7 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:py-20"
            : "mx-auto max-w-6xl px-4 py-8 md:py-20"
        }
      >
        <div>
          <p className="kicker">{kicker}</p>
          <h1 className="mt-3 max-w-4xl font-heading text-[2.05rem] leading-[1.12] text-balance sm:text-4xl md:mt-4 md:text-[3.35rem] md:leading-[1.08]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
            {lede}
          </p>
          {children ? <div className="mt-6 md:mt-8">{children}</div> : null}
        </div>
        {image ? (
          <ImageSlot
            {...image}
            priority
            className="hero-media media-zoom max-md:-order-1"
            sizes="(max-width: 768px) 92vw, 44vw"
          />
        ) : null}
      </div>
    </header>
  );
}
