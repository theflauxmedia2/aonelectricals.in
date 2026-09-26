"use client";

import { useState } from "react";
import Link from "next/link";
import { coverageAreas } from "@/lib/site";

const loop = [...coverageAreas, ...coverageAreas];

export function AreaRail() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className={`area-rail-wrap overflow-hidden border-b border-border py-3.5${paused ? " is-paused" : ""}`}
      role="region"
      aria-label="Areas we cover"
      tabIndex={0}
      onPointerUp={(event) => {
        if (event.pointerType === "mouse") return;
        setPaused((value) => !value);
      }}
      onKeyDown={(event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        setPaused((value) => !value);
      }}
    >
      <div className="area-rail flex w-max gap-8 px-4 text-[0.78rem] text-muted-foreground md:gap-10">
        {loop.map((area, index) => (
          <Link
            key={`${area.href}-${index}`}
            href={area.href}
            className="whitespace-nowrap transition-colors duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-foreground"
            tabIndex={index >= coverageAreas.length ? -1 : undefined}
            aria-hidden={index >= coverageAreas.length ? true : undefined}
          >
            {area.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
