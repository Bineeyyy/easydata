import type { Metadata } from "next";
import { ebGaramond, ibmPlexSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "EasyData — Έτοιμος για το myDATA;",
  description:
    "Από 1 Οκτωβρίου 2026, κάθε τιμολόγιο πρέπει να περνάει από το myDATA. Σε βοηθάμε να το κάνεις σε 30 δευτερόλεπτα — από το κινητό σου.",
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
