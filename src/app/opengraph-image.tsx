import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og-fonts";

export const alt =
  "EasyData — Έτοιμος για το myDATA; Από 1 Οκτωβρίου 2026, υποχρεωτικό για όλους τους ελεύθερους επαγγελματίες.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CREAM = "#FAF6EE";
const ESPRESSO = "#1A1612";
const TERRACOTTA = "#B8442A";
const TAUPE = "#6B5D4F";

export default async function Image() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: CREAM,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "EB Garamond",
          color: ESPRESSO,
        }}
      >
        {/* Top: wordmark */}
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <span
            style={{
              fontSize: 44,
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            easydata
          </span>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              background: TERRACOTTA,
              marginTop: 10,
              marginLeft: 4,
            }}
          />
        </div>

        {/* Middle: headline + subhead */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 104,
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            <span>Έτοιμος για το&nbsp;</span>
            <span style={{ color: TERRACOTTA, fontStyle: "italic" }}>
              myDATA;
            </span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 34,
              fontStyle: "italic",
              color: TAUPE,
              lineHeight: 1.35,
              maxWidth: 880,
            }}
          >
            Από 1 Οκτωβρίου 2026, υποχρεωτικό για όλους τους ελεύθερους
            επαγγελματίες.
          </div>
        </div>

        {/* Bottom row: URL left, date right */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "IBM Plex Sans",
              fontSize: 24,
              color: TAUPE,
              letterSpacing: "0.02em",
            }}
          >
            easydata-jet.vercel.app
          </span>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            <span>01</span>
            <span
              style={{
                color: TERRACOTTA,
                fontStyle: "italic",
                margin: "0 10px",
              }}
            >
              ·
            </span>
            <span>10</span>
            <span
              style={{
                color: TERRACOTTA,
                fontStyle: "italic",
                margin: "0 10px",
              }}
            >
              ·
            </span>
            <span>26</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    },
  );
}
