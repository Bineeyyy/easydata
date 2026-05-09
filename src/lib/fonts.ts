import { EB_Garamond, IBM_Plex_Sans } from "next/font/google";

export const ebGaramond = EB_Garamond({
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
  display: "swap",
});

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});
