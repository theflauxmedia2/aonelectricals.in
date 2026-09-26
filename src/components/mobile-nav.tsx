"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { CallLink, WhatsAppLink } from "@/components/cta-links";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { menuServices, navItems, siteConfig } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="pressable flex size-11 items-center justify-center rounded-full border border-border bg-card text-sm lg:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[min(20rem,calc(100vw-1.25rem))] gap-0 border-border bg-background p-0"
      >
        <SheetHeader className="border-b border-border px-5 py-5">
          <span className="relative size-14 overflow-hidden rounded-full bg-white ring-1 ring-black/10">
            <Image
              src="/brand/logo-circle.png"
              alt=""
              width={56}
              height={56}
              className="size-full object-cover"
            />
          </span>
          <SheetTitle className="font-heading text-2xl">
            {siteConfig.name}
          </SheetTitle>
          <p className="text-sm text-muted-foreground">
            {siteConfig.neighborhood}, {siteConfig.city}
          </p>
        </SheetHeader>
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-0.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-3 py-3 text-[0.95rem] hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 px-3 text-[0.7rem] text-muted-foreground">
            Also offered
          </p>
          <ul className="mt-1 flex flex-col gap-0.5">
            {menuServices.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-3 py-3 text-[0.95rem] hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {item.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <SheetFooter className="border-t border-border pb-[max(1rem,env(safe-area-inset-bottom))]">
          <CallLink />
          <WhatsAppLink />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
