import type { Metadata } from "next";
import { LeadCapturePopup } from "./components/LeadCapturePopup";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shivainn.com"),

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  title: {
    default: "Hotel Shiva Inn Haveri | Luxury Stay, Dining & Banquets",
    template: "%s | Hotel Shiva Inn",
  },

  description:
    "Hotel Shiva Inn in Haveri, Karnataka offers elegant accommodation, multi-cuisine dining, bar and lounge experiences, and refined banquet venues on NH 48 Bypass Road.",

  keywords: [
    "hotel shiva inn",
    "hotel shiva inn haveri",
    "shiva inn haveri",
    "hotels in haveri",
    "hotel in haveri karnataka",
    "best hotel in haveri",
    "luxury hotel in haveri",
    "premium hotel haveri",
    "top hotel haveri karnataka",
    "hotel on NH48 haveri",
    "hotel near NH 48 karnataka",
    "highway hotel haveri",
    "hotel bypass road haveri",
    "hotel near heggeri haveri",
    "business hotel haveri",
    "family hotel haveri",
    "hotel for corporate stay haveri",
    "hotel near haveri bus stand",
    "ac hotel haveri",
    "hotel with wifi haveri",
    "hotel with parking haveri",
    "hotel with room service haveri",
    "hotel between dharwad and davangere",
    "hotel between hubli and davangere",
    "hotel between dharwad and bangalore",
    "hotel between hubli and bangalore",
    "midpoint hotel dharwad bangalore highway",
    "stopover hotel NH48 karnataka",
    "overnight stay NH48 karnataka",
    "night halt hotel NH48",
    "hotel near dharwad on highway",
    "hotel 60km from dharwad",
    "hotel from dharwad towards bangalore",
    "stay near dharwad karnataka",
    "hotel near davangere karnataka",
    "hotel 80km from davangere",
    "hotel from davangere towards hubli",
    "stay between davangere and hubli",
    "hotel davangere to dharwad route",
    "hotel near hubli karnataka",
    "hotel 60km from hubli",
    "hotel hubli to bangalore highway",
    "road trip hotel karnataka NH48",
    "highway stay karnataka",
    "mumbai bangalore highway hotel karnataka",
    "pune bangalore highway hotel haveri",
    "hotel in north karnataka",
    "hotels near hubli haveri",
    "stay in haveri district",
  ],

  alternates: {
    canonical: "https://shivainn.com",
  },

  openGraph: {
    title: "Hotel Shiva Inn Haveri | Luxury Stay, Dining & Banquets",
    description:
      "Luxury, comfort and refined hospitality on Bypass Road, Near Heggeri, Haveri, Karnataka.",
    type: "website",
    locale: "en_IN",
    siteName: "Hotel Shiva Inn",
    url: "https://shivainn.com",
    images: [
      {
        url: "/images/exterior.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel Shiva Inn Haveri exterior",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hotel Shiva Inn Haveri",
    description:
      "Elegant accommodation, dining, lounge and banquet experiences in Haveri, Karnataka.",
    images: ["/images/exterior.jpg"],
  },

  manifest: "/site.webmanifest",
};

const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Hotel Shiva Inn",
  description:
    "Luxury hotel on NH 48, Haveri, Karnataka with rooms, multi-cuisine dining, bar and banquet facilities.",
  url: "https://shivainn.com",
  telephone: "+916360644158",
  sameAs: ["https://www.instagram.com/hotelshiva_inn"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bypass Road, Near Heggeri",
    addressLocality: "Haveri",
    addressRegion: "Karnataka",
    postalCode: "581110",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 14.7959,
    longitude: 75.3997,
  },
  image: "https://shivainn.com/images/exterior.jpg",
  priceRange: "₹₹",
  checkinTime: "12:00",
  checkoutTime: "11:00",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
    { "@type": "LocationFeatureSpecification", name: "Bar", value: true },
    { "@type": "LocationFeatureSpecification", name: "Banquet Hall", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
    { "@type": "LocationFeatureSpecification", name: "Room Service", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
  ],
  hasMap:
    "https://www.google.com/maps?q=Bypass+Road+Near+Heggeri+Haveri+Karnataka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VY8QWEFE9Z"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VY8QWEFE9Z');
            `,
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
        {children}
        <LeadCapturePopup />
      </body>
    </html>
  );
}