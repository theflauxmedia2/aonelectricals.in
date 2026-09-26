"use client";

import { useEffect, useId, useRef, useState } from "react";
import { inquiryServices, serviceInterestMessage, whatsappHref } from "@/lib/site";

const STORAGE_KEY = "aone-service-prompt";
const FIRST_DELAY = 10_000;
const SECOND_DELAY = 60_000;
const REPEAT_DELAY = 5 * 60_000;

type Schedule = {
  shows: number;
  nextAt: number;
  done?: boolean;
};

function readSchedule(): Schedule | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw || raw === "dismissed") return null;
    const parsed = JSON.parse(raw) as Schedule;
    if (typeof parsed.shows !== "number" || typeof parsed.nextAt !== "number") {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function writeSchedule(schedule: Schedule) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(schedule));
}

function delayAfterShow(shows: number) {
  return shows <= 1 ? SECOND_DELAY : REPEAT_DELAY;
}

export function ServicePrompt() {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const timerRef = useRef<number | null>(null);
  const dismissRef = useRef<() => void>(() => {});

  function arm(delay: number) {
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setOpen(true), delay);
  }

  useEffect(() => {
    const saved = readSchedule();
    if (saved?.done) return;
    const wait = saved ? Math.max(0, saved.nextAt - Date.now()) : FIRST_DELAY;
    arm(wait);
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const body = document.body;
    const overflow = body.style.overflow;
    body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        dismissRef.current();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        "button, a[href]"
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [open]);

  function dismiss() {
    const shows = (readSchedule()?.shows ?? 0) + 1;
    const delay = delayAfterShow(shows);
    writeSchedule({ shows, nextAt: Date.now() + delay });
    setOpen(false);
    arm(delay);
  }

  dismissRef.current = dismiss;

  function choose(service: string) {
    writeSchedule({ shows: (readSchedule()?.shows ?? 0) + 1, nextAt: Date.now(), done: true });
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    window.location.assign(whatsappHref(serviceInterestMessage(service)));
  }

  if (!open) return null;

  return (
    <div className="service-prompt" role="presentation">
      <button
        type="button"
        className="service-prompt-backdrop"
        aria-label="Close service picker"
        onClick={dismiss}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="service-prompt-panel"
      >
        <div className="service-prompt-coil" aria-hidden="true" />
        <div className="service-prompt-body">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="flex items-center gap-2 text-xs text-white/70">
                <span className="service-prompt-cores" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                One tap
              </p>
              <h2
                id={titleId}
                className="mt-1 font-heading text-[1.35rem] leading-none text-white sm:text-[1.85rem]"
              >
                What are you here for?
              </h2>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={dismiss}
              className="pressable grid size-9 shrink-0 place-items-center rounded-full border border-white/20 text-white sm:size-10"
            >
              <span className="sr-only">Close</span>
              <span aria-hidden="true" className="text-xl leading-none">
                ×
              </span>
            </button>
          </div>
          <p className="mt-1.5 text-xs leading-snug text-white/75 sm:mt-3 sm:text-sm sm:leading-relaxed">
            Tap the job. WhatsApp opens to +91 70225 16735 with a note already written
            for the shop.
          </p>
          <ul className="service-prompt-list">
            {inquiryServices.map((service) => (
              <li key={service}>
                <button
                  type="button"
                  onClick={() => choose(service)}
                  className="service-prompt-chip pressable"
                >
                  {service}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
