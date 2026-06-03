import type { Metadata } from "next";
import { LeadCapturePopup } from "./components/LeadCapturePopup";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hotelshivainnhaveri.com"),

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  title: {
    default: "Hotel Shiva Inn Haveri | Luxury Stay, Dining & Banquets",
    template: "%s | Hotel Shiva Inn",
  },

  description:
    "Hotel Shiva Inn in Haveri, Karnataka offers elegant accommodation, multi-cuisine dining, bar and lounge experiences, and refined banquet venues.",

  openGraph: {
    title: "Hotel Shiva Inn Haveri",
    description:
      "Luxury, comfort and refined hospitality on Bypass Road, Near Heggeri, Haveri.",
    type: "website",
    locale: "en_IN",
    siteName: "Hotel Shiva Inn",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hotel Shiva Inn Haveri",
    description:
      "Elegant accommodation, dining, lounge and banquet experiences in Haveri, Karnataka.",
  },

  alternates: {
    canonical: "/",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>
        {children}
        <LeadCapturePopup />
      </body>
    </html>
  );
}
