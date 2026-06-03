import { Check, ChevronRight } from "lucide-react";
import { ManualSlider } from "@/app/components/ManualSlider";
import { SiteHeader } from "@/app/components/SiteHeader";
import { images } from "@/lib/images";

const features = [
  "Weddings and receptions",
  "Corporate meetings and conferences",
  "Birthdays and family functions",
  "Flexible seating and hospitality support",
];

const highlights = [
  "Lotus Hall: 150-200 guests",
  "Pearl Hall: 60-100 guests",
  "Board Room: 20-30 guests",
  "Suitable for formal and social events",
];

const amenities = [
  "Air-conditioned venues",
  "Dining coordination",
  "Presentation-friendly setup",
  "Event planning assistance",
  "Guest hospitality support",
  "Convenient Haveri location",
];

const venues = [
  {
    name: "Lotus Hall",
    capacity: "150-200 Guests",
    text: "A refined setting for weddings, receptions and large celebrations.",
  },
  {
    name: "Pearl Hall",
    capacity: "60-100 Guests",
    text: "A graceful venue for family occasions and business gatherings.",
  },
  {
    name: "Board Room",
    capacity: "20-30 Guests",
    text: "A focused meeting space for reviews, presentations and leadership sessions.",
  },
];

export default function BanquetsPage() {
  return (
    <main>
      <SiteHeader />
      <section id="banquets" className="section service-page">
        <div className="section-heading">
          <p className="eyebrow">Banquets & Events</p>
          <h2>Graceful venues for weddings, meetings and celebrations.</h2>
        </div>

        <ManualSlider
          className="service-gallery"
          slides={images.banquets.gallery.map((image, index) => ({
            src: image,
            alt: `Hotel Shiva Inn banquet gallery ${index + 1}`,
          }))}
          sizes="(max-width: 900px) 100vw, 1120px"
          priority
        />

        <div className="service-content">
          <div className="content-stack">
            <p className="lead">
              Hotel Shiva Inn offers banquet spaces for weddings, receptions, conferences,
              corporate meetings, birthdays and family functions. Each venue is supported
              by attentive hospitality and flexible arrangements for different event scales.
            </p>
            <p className="lead">
              From intimate boardroom sessions to larger celebrations, the banquet facilities
              are designed for comfort, coordination and a polished guest experience.
            </p>
          </div>

          <section className="venue-summary" aria-label="Venue capacity information">
            {venues.map((venue) => (
              <article className="venue-card" key={venue.name}>
                <div className="card-body">
                  <p className="capacity">{venue.capacity}</p>
                  <h3>{venue.name}</h3>
                  <p>{venue.text}</p>
                  <a className="text-button" href="/#contact">
                    Enquire Now <ChevronRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </section>

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
    <section className="detail-block" aria-labelledby={`banquets-${title}`}>
      <h3 id={`banquets-${title}`}>{title}</h3>
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
