import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ManualSlider } from "@/app/components/ManualSlider";
import { SiteHeader } from "@/app/components/SiteHeader";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Multi-Cuisine Restaurant in Haveri",
  description:
    "South Indian, North Indian & Chinese dining at Hotel Shiva Inn, Haveri. Pure veg & non-veg restaurant on NH 48. Family and corporate meals.",
  keywords: [
    "hotel shiva inn restaurant",
    "shiva inn dining haveri",
    "restaurant in haveri",
    "restaurants in haveri karnataka",
    "best restaurant haveri",
    "hotel restaurant haveri",
    "veg restaurant haveri",
    "pure veg restaurant haveri",
    "vegetarian restaurant haveri karnataka",
    "south indian restaurant haveri",
    "north indian restaurant haveri",
    "chinese food haveri",
    "multi cuisine restaurant haveri",
    "lunch haveri",
    "dinner haveri karnataka",
    "family restaurant haveri",
    "corporate lunch haveri",
    "business lunch haveri karnataka",
    "restaurant on NH48 karnataka",
    "highway restaurant haveri",
    "restaurant near dharwad on NH48",
    "restaurant between dharwad and davangere",
    "highway restaurant near hubli karnataka",
    "veg restaurant near dharwad highway",
    "food stop NH48 karnataka",
    "best food between hubli and davangere",
    "restaurant near davangere on highway",
    "lunch stop NH48 karnataka",
    "dinner stop mumbai bangalore highway",
    "good restaurant north karnataka",
    "restaurant near dharwad haveri",
    "restaurant near hubli on highway",
  ],
  alternates: { canonical: "https://shivainn.com/dining" },
  openGraph: {
    title: "Restaurant & Dining | Hotel Shiva Inn Haveri",
    description:
      "Pure veg and multi-cuisine dining in Haveri, Karnataka. South Indian, North Indian and Chinese meals with warm hospitality on NH 48.",
    url: "https://shivainn.com/dining",
    images: [
      {
        url: "/images/bardining.webp",
        width: 1200,
        height: 630,
        alt: "Restaurant at Hotel Shiva Inn Haveri",
      },
    ],
  },
};

const diningSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Hotel Shiva Inn Restaurant",
  url: "https://shivainn.com/dining",
  telephone: "+916360644158",
  servesCuisine: ["South Indian", "North Indian", "Chinese", "Vegetarian"],
  priceRange: "₹₹",
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
    { "@type": "LocationFeatureSpecification", name: "Pure Veg Option", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air Conditioned", value: true },
    { "@type": "LocationFeatureSpecification", name: "Family Seating", value: true },
    { "@type": "LocationFeatureSpecification", name: "Room Service", value: true },
    { "@type": "LocationFeatureSpecification", name: "Group Seating", value: true },
  ],
};

const features = [
  "Multi-cuisine veg and non-veg dining",
  "Fresh ingredients and balanced flavours",
  "Family-friendly restaurant ambience",
  "Corporate dining support",
];

const highlights = [
  "South Indian, North Indian and Chinese favourites",
  "Comfortable seating for families and groups",
  "Premium hospitality from arrival to service",
  "Ideal for casual meals and business lunches",
];

const amenities = [
  "Air-conditioned dining",
  "Pure veg dining option",
  "Group seating",
  "Room-service coordination",
  "Attentive service team",
  "Convenient hotel location",
];

export default function DiningPage() {
  return (
    <main>
      <SiteHeader />
      <section id="dining" className="section service-page">
        <div className="section-heading">
          <p className="eyebrow">Dining Experience</p>
          <h1>Restaurant & Dining at Hotel Shiva Inn, Haveri</h1>
          <h2>Pure Veg & Multi-cuisine dining with warm Shiva Inn hospitality.</h2>
        </div>

        <ManualSlider
          className="service-gallery"
          slides={images.restaurant.gallery.map((image, index) => ({
            src: image,
            alt: `Hotel Shiva Inn dining gallery ${index + 1}`,
          }))}
          sizes="(max-width: 900px) 100vw, 1120px"
          priority
        />

        <div className="service-content">
          <div className="content-stack">
            <p className="lead">
              Our restaurant serves South Indian, North Indian, and Chinese food — both veg and non-veg.
              We use fresh ingredients and cook to order. Families, business guests, and groups are all welcome.
            </p>
            <p className="lead">
              Whether you want a quick lunch on the highway or a sit-down dinner, our team is ready to serve you.
              A pure veg menu is always available. Room service runs 24 hours for hotel guests.
            </p>
          </div>

          <DetailBlock title="Features" items={features} />
          <DetailBlock title="Highlights" items={highlights} />
          <DetailBlock title="Amenities" items={amenities} />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(diningSchema) }}
      />
    </main>
  );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="detail-block" aria-labelledby={`dining-${title}`}>
      <h3 id={`dining-${title}`}>{title}</h3>
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