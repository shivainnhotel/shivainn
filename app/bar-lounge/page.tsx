import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ManualSlider } from "@/app/components/ManualSlider";
import { SiteHeader } from "@/app/components/SiteHeader";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Bar & Lounge in Haveri | Hotel Shiva Inn",
  description:
    "Premium bar and lounge at Hotel Shiva Inn, Haveri. Sophisticated ambience for business conversations, social evenings and relaxed celebrations on NH 48 Bypass Road.",
  keywords: [
    "hotel shiva inn bar",
    "shiva inn lounge haveri",
    "bar in haveri",
    "lounge in haveri karnataka",
    "bar and lounge haveri",
    "pub haveri karnataka",
    "premium lounge haveri",
    "luxury bar haveri",
    "hotel bar haveri",
    "ac bar haveri",
    "lounge for business haveri",
    "drinks haveri karnataka",
    "social evening haveri",
    "casual meetup place haveri",
    "bar for corporate guests haveri",
    "bar near dharwad",
    "lounge near dharwad",
    "bar between dharwad and davangere",
    "bar near hubli on highway",
    "premium bar near davangere",
    "lounge bar NH48 karnataka",
    "nightlife haveri karnataka",
    "bar north karnataka",
    "hotel bar near dharwad",
    "lounge near hubli karnataka",
  ],
  alternates: { canonical: "https://shivainn.com/bar-lounge" },
  openGraph: {
    title: "Bar & Lounge | Hotel Shiva Inn Haveri",
    description:
      "Sophisticated bar and lounge in Haveri, Karnataka. Comfortable seating, warm service and a premium lounge mood on NH 48.",
    url: "https://shivainn.com/bar-lounge",
    images: [
      {
        url: "/images/bardining.jpg",
        width: 1200,
        height: 630,
        alt: "Bar and Lounge at Hotel Shiva Inn Haveri",
      },
    ],
  },
};

const barSchema = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  name: "Hotel Shiva Inn Bar & Lounge",
  url: "https://shivainn.com/bar-lounge",
  telephone: "+916360644158",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bypass Road, Near Heggeri",
    addressLocality: "Haveri",
    addressRegion: "Karnataka",
    postalCode: "581110",
    addressCountry: "IN",
  },
  containedInPlace: {
    "@type": "Hotel",
    name: "Hotel Shiva Inn",
    url: "https://shivainn.com",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Air Conditioned", value: true },
    { "@type": "LocationFeatureSpecification", name: "Lounge Seating", value: true },
    { "@type": "LocationFeatureSpecification", name: "Table Service", value: true },
    { "@type": "LocationFeatureSpecification", name: "Business Friendly", value: true },
    { "@type": "LocationFeatureSpecification", name: "Private Setting", value: true },
  ],
};

const features = [
  "Premium lounge setting",
  "Sophisticated ambience",
  "Comfortable seating layouts",
  "Signature Shiva Inn hospitality",
];

const highlights = [
  "Suited for business conversations",
  "Relaxed social evenings",
  "Warm lighting and polished interiors",
  "Ideal for small celebrations and informal meets",
];

const amenities = [
  "Air-conditioned lounge",
  "Comfortable sofa seating",
  "Table service",
  "Business-friendly environment",
  "Hotel dining access",
  "Convenient parking access",
];

export default function BarLoungePage() {
  return (
    <main>
      <SiteHeader />
      <section id="bar-lounge" className="section service-page">
        <div className="section-heading">
          <p className="eyebrow">Bar & Lounge</p>
          <h2>Premium lounge evenings in a sophisticated setting.</h2>
        </div>

        <ManualSlider
          className="service-gallery"
          slides={images.barGallery.map((image, index) => ({
            src: image,
            alt: `Hotel Shiva Inn bar and lounge gallery ${index + 1}`,
          }))}
          sizes="(max-width: 900px) 100vw, 1120px"
          priority
        />

        <div className="service-content">
          <div className="content-stack">
            <p className="lead">
              The Bar & Lounge at Hotel Shiva Inn is designed for guests who value comfort,
              privacy and a polished hospitality experience. The ambience is sophisticated
              without feeling formal, making it suitable for business conversations, social
              evenings and relaxed celebrations.
            </p>
            <p className="lead">
              Comfortable seating, warm service and a premium lounge mood create an inviting
              space for both hotel guests and visitors.
            </p>
          </div>

          <DetailBlock title="Features" items={features} />
          <DetailBlock title="Highlights" items={highlights} />
          <DetailBlock title="Amenities" items={amenities} />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(barSchema) }}
      />
    </main>
  );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="detail-block" aria-labelledby={`bar-${title}`}>
      <h3 id={`bar-${title}`}>{title}</h3>
      <ul className="check-list">
        {items.map((item) => (
          <li key={item}>
            <Check size={16} />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}