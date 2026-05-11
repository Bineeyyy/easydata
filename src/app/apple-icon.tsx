import { ImageResponse } from "next/og";
import { loadLatinFont } from "@/lib/og-fonts";

const CREAM = "#FAF6EE";
const ESPRESSO = "#1A1612";
const TERRACOTTA = "#B8442A";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const font = await loadLatinFont("EB Garamond", 500);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: CREAM,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "EB Garamond",
        }}
      >
        <span
          style={{
            fontSize: 150,
            fontWeight: 500,
            color: ESPRESSO,
            lineHeight: 1,
          }}
        >
          e
        </span>
        <div
          style={{
            position: "absolute",
            top: 22,
            right: 16,
            width: 32,
            height: 32,
            borderRadius: 16,
            background: TERRACOTTA,
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [font],
    },
  );
}
