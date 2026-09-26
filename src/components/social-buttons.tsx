"use client";

import { cn } from "cn";
import { siteConfig } from "@/lib/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socials = [
  { label: "Instagram", Icon: InstagramIcon, href: siteConfig.instagram },
];

export function SocialButtons({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {socials.map(({ label, Icon, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "pressable inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card text-foreground",
            compact ? "h-9 px-3.5 text-[0.8rem]" : "h-11 px-4 text-sm"
          )}
        >
          <Icon className="size-4" />
          {label}
        </a>
      ))}
    </div>
  );
}
