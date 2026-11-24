import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const alt = siteConfig.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logo = await readFile(join(process.cwd(), "public/images/logo-footer.png"), "base64");
const logoSrc = `data:image/png;base64,${logo}`;

/** Social share card (WhatsApp, Facebook, LinkedIn, X…). Inherited by every route. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#173532",
          color: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -140,
            bottom: -180,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "#24504B",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 220,
            top: 70,
            width: 200,
            height: 200,
            borderRadius: 9999,
            border: "2px dashed rgba(217,185,138,0.45)",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain <img> */}
        <img src={logoSrc} height={104} width={181} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 860 }}>
          <div style={{ fontSize: 24, letterSpacing: 4, color: "#D9B98A", fontWeight: 600 }}>AMBATTUR · CHENNAI</div>
          <div style={{ fontSize: 68, lineHeight: 1.04, fontWeight: 700, letterSpacing: -2 }}>
            Dermatologist-Led Skin & Aesthetic Care
          </div>
          <div style={{ fontSize: 28, color: "#C9DBD7" }}>Acne · Pigmentation · Hair loss · Laser · Skin rejuvenation</div>
        </div>
      </div>
    ),
    size,
  );
}
