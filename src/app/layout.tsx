import type { Metadata, Viewport } from "next";
import { ebGaramond, ibmPlexSans } from "@/lib/fonts";
import "./globals.css";

const SITE_URL = "https://easydata-jet.vercel.app";
const SITE_NAME = "EasyData";
const DEFAULT_TITLE = "EasyData — Έτοιμος για το myDATA;";
const DESCRIPTION =
  "myDATA companion για ελεύθερους επαγγελματίες. Έκδοση τιμολογίων σε 30 δευτερόλεπτα, υπενθυμίσεις deadlines, καθαρό export για τον λογιστή σου.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s · EasyData",
  },
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DESCRIPTION,
    locale: "el_GR",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#1A1612",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="el"
      className={`${ebGaramond.variable} ${ibmPlexSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
