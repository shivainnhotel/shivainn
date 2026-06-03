import { Check } from "lucide-react";
import { ManualSlider } from "@/app/components/ManualSlider";
import { SiteHeader } from "@/app/components/SiteHeader";
import { images } from "@/lib/images";

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
