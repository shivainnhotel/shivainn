import { Check } from "lucide-react";
import { ManualSlider } from "@/app/components/ManualSlider";
import { SiteHeader } from "@/app/components/SiteHeader";
import { images } from "@/lib/images";

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
              Hotel Shiva Inn offers a refined multi-cuisine dining experience for families,
              business travellers and corporate guests. Fresh ingredients, attentive service
              and comfortable interiors create a relaxed setting for both vegetarian and
              non-vegetarian meals.
            </p>
            <p className="lead">
              The restaurant brings together South Indian comfort, North Indian favourites
              and Chinese selections with the premium hospitality expected from a hotel dining
              experience.
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
