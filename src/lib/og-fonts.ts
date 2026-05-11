// Loads static WOFF font files from @fontsource at build time.
// We register each (family, weight, style) twice — once for the Latin
// subset and once for the Greek subset — so Satori can find glyphs for
// both scripts. Satori's font array acts as a fallback chain on glyph miss.

import { readFile } from "node:fs/promises";
import { join } from "node:path";

type FontWeight = 400 | 500 | 600 | 700;
type FontStyle = "normal" | "italic";

const FONT_ROOT = join(process.cwd(), "node_modules", "@fontsource");

async function loadSubset(
  pkg: string,
  filePrefix: string,
  subset: string,
  weight: FontWeight,
  style: FontStyle,
): Promise<ArrayBuffer> {
  const fileName = `${filePrefix}-${subset}-${weight}-${style}.woff`;
  const path = join(FONT_ROOT, pkg, "files", fileName);
  const buf = await readFile(path);
  return new Uint8Array(buf).buffer;
}

export type OgFont = {
  name: string;
  data: ArrayBuffer;
  style: FontStyle;
  weight: FontWeight;
};

async function loadGreekAndLatin(
  family: string,
  pkg: string,
  filePrefix: string,
  weight: FontWeight,
  style: FontStyle,
): Promise<OgFont[]> {
  // Latin first, then Greek. Satori uses the array as a fallback chain.
  const [latin, greek] = await Promise.all([
    loadSubset(pkg, filePrefix, "latin", weight, style),
    loadSubset(pkg, filePrefix, "greek", weight, style),
  ]);
  return [
    { name: family, data: latin, style, weight },
    { name: family, data: greek, style, weight },
  ];
}

export async function loadOgFonts(): Promise<OgFont[]> {
  const [garamond500, garamond500Italic, plex400] = await Promise.all([
    loadGreekAndLatin(
      "EB Garamond",
      "eb-garamond",
      "eb-garamond",
      500,
      "normal",
    ),
    loadGreekAndLatin(
      "EB Garamond",
      "eb-garamond",
      "eb-garamond",
      500,
      "italic",
    ),
    loadGreekAndLatin(
      "IBM Plex Sans",
      "ibm-plex-sans",
      "ibm-plex-sans",
      400,
      "normal",
    ),
  ]);
  return [...garamond500, ...garamond500Italic, ...plex400];
}

// Single-font helper for icon routes which only render Latin glyphs.
export async function loadLatinFont(
  family: "EB Garamond" | "IBM Plex Sans",
  weight: FontWeight,
  style: FontStyle = "normal",
): Promise<OgFont> {
  const config = {
    "EB Garamond": { pkg: "eb-garamond", prefix: "eb-garamond" },
    "IBM Plex Sans": { pkg: "ibm-plex-sans", prefix: "ibm-plex-sans" },
  }[family];
  const data = await loadSubset(
    config.pkg,
    config.prefix,
    "latin",
    weight,
    style,
  );
  return { name: family, data, style, weight };
}
