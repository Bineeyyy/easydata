import { ImageResponse } from "next/og";
import { loadLatinFont } from "@/lib/og-fonts";

const CREAM = "#FAF6EE";
const ESPRESSO = "#1A1612";
const TERRACOTTA = "#B8442A";

type IconId = "32" | "192" | "512";

const VARIANTS: Record<
  IconId,
  { size: number; showDot: boolean }
> = {
  "32": { size: 32, showDot: true },
  "192": { size: 192, showDot: true },
  "512": { size: 512, showDot: true },
};

export function generateImageMetadata() {
  return (Object.keys(VARIANTS) as IconId[]).map((id) => ({
    id,
    contentType: "image/png" as const,
    size: { width: VARIANTS[id].size, height: VARIANTS[id].size },
  }));
}

export default async function Icon({ id }: { id: Promise<string | number> }) {
  const variantId = (await id).toString() as IconId;
  const { size, showDot } = VARIANTS[variantId];

  const font = await loadLatinFont("EB Garamond", 500);

  const glyphSize = Math.round(size * 0.85);
  const dotSize = Math.max(3, Math.round(size * 0.18));
  const dotTop = Math.round(size * 0.12);
  const dotRight = Math.round(size * 0.08);

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
            fontSize: glyphSize,
            fontWeight: 500,
            color: ESPRESSO,
            lineHeight: 1,
          }}
        >
          e
        </span>
        {showDot && (
          <div
            style={{
              position: "absolute",
              top: dotTop,
              right: dotRight,
              width: dotSize,
              height: dotSize,
              borderRadius: dotSize / 2,
              background: TERRACOTTA,
            }}
          />
        )}
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: [font],
    },
  );
}
