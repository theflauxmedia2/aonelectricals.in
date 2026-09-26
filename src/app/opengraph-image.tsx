import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — electrician in Kumar Swamy Layout, Bengaluru. ${siteConfig.phoneDisplay}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public/brand/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFFFFF",
          color: "#111111",
          padding: 64,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={148} height={148} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 500, lineHeight: 1.05 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 32, color: "#5A5A5A", maxWidth: 900 }}>
            Electrical repair & installation · Kumar Swamy Layout, Bengaluru
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 28,
            color: "#C41E3A",
          }}
        >
          <span>{siteConfig.phoneDisplay}</span>
          <span>
            {siteConfig.neighborhood}, {siteConfig.city}
          </span>
        </div>
      </div>
    ),
    size
  );
}
