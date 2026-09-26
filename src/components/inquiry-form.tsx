"use client";

import { useMemo, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  inquiryServices,
  serviceInterestMessage,
  siteConfig,
  whatsappHref,
  type InquiryService,
} from "@/lib/site";

type Status = "idle" | "error" | "loading" | "success";

export function InquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [service, setService] = useState<InquiryService>("Building wiring");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const empty = !name && !phone && !area && !details;

  const composed = useMemo(
    () =>
      serviceInterestMessage(service, {
        name,
        phone,
        area,
        notes: details,
      }),
    [name, phone, area, service, details]
  );

  function validate() {
    if (!phone.trim() && !name.trim()) {
      return "Add your name or a phone number so we can call you back.";
    }
    const digits = phone.replace(/\D/g, "");
    if (phone && digits.length < 10) {
      return "Enter a 10-digit Indian mobile number, or leave the field blank and we will use WhatsApp on this device.";
    }
    return "";
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextError = validate();
    if (nextError) {
      setStatus("error");
      setError(nextError);
      return;
    }

    setStatus("loading");
    setError("");

    window.location.assign(whatsappHref(composed));
    setStatus("success");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-xl border border-border bg-card p-5 md:p-7"
      noValidate
    >
      <div>
        <h2 className="font-heading text-2xl font-semibold">Send the job on WhatsApp</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We do not ask for an email. The form opens WhatsApp to{" "}
          <span className="font-medium text-foreground">{siteConfig.phoneDisplay}</span> with
          your notes filled in.
        </p>
      </div>

      {empty && status === "idle" ? (
        <p
          role="status"
          className="rounded-md border border-dashed border-primary/30 bg-background/60 px-3 py-2 text-sm text-muted-foreground"
        >
          Empty for now — pick a service, add the fault, and we will write the WhatsApp
          message for you.
        </p>
      ) : null}

      {status === "error" ? (
        <p
          role="alert"
          className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
        >
          {error}
        </p>
      ) : null}

      {status === "loading" ? (
        <p role="status" className="text-sm text-primary">
          Opening WhatsApp…
        </p>
      ) : null}

      {status === "success" ? (
        <p
          role="status"
          className="rounded-md border border-primary/40 bg-primary/10 px-3 py-2 text-sm"
        >
          WhatsApp is ready with your message. If nothing opened,{" "}
          <a className="underline" href={whatsappHref(composed)}>
            tap here to send it
          </a>
          .
        </p>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="lead-name">Name</Label>
          <Input
            id="lead-name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="h-11"
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lead-phone">Phone</Label>
          <Input
            id="lead-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="h-11"
            placeholder="10-digit mobile"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="lead-area">Area in Bengaluru</Label>
          <Input
            id="lead-area"
            name="area"
            value={area}
            onChange={(event) => setArea(event.target.value)}
            className="h-11"
            placeholder="Kumar Swamy Layout, Jayanagar, BTM…"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lead-service">Service</Label>
          <select
            id="lead-service"
            name="service"
            value={service}
            onChange={(event) =>
              setService(event.target.value as InquiryService)
            }
            className="h-11 w-full rounded-lg border border-input bg-card px-2.5 text-base text-foreground md:text-sm"
          >
            {inquiryServices.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="lead-details">What failed?</Label>
        <Textarea
          id="lead-details"
          name="details"
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          placeholder="Mixer jar not spinning, geyser cold, UPS dead, fan humming, new 2BHK wiring…"
        />
      </div>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="h-12 min-h-12 w-full rounded-md px-6 text-sm font-medium md:w-auto"
      >
        {status === "loading" ? "Opening WhatsApp…" : "Continue on WhatsApp"}
      </Button>
    </form>
  );
}
