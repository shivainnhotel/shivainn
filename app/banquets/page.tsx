import { Check, ChevronRight } from "lucide-react";
import { ManualSlider } from "@/app/components/ManualSlider";
import { SiteHeader } from "@/app/components/SiteHeader";
import { images } from "@/lib/images";

const phone = "+916360644158";

const venues = [
  {
    name: "Lotus Hall",
    capacity: "150-200 Guests",
    intro:
      "Lotus Hall is our largest banquet venue, designed for grand celebrations and large-scale events. The hall provides a sophisticated atmosphere, comfortable seating arrangements, and ample space for weddings, receptions, corporate conferences, and special occasions.",
    features: [
      "Weddings & Receptions",
      "Corporate Conferences",
      "Birthday & Anniversary Celebrations",
      "Spacious Seating",
      "Flexible Event Setup",
    ],
    gallery: images.banquets.venues.lotus,
    reverse: false,
  },
  {
    name: "Pearl Hall",
    capacity: "60-100 Guests",
    intro:
      "Pearl Hall is a refined venue perfect for medium-sized gatherings, family functions, social celebrations, and business events. Its elegant interiors and comfortable setting create a welcoming environment for memorable occasions.",
    features: [
      "Family Gatherings",
      "Corporate Meetings",
      "Social Events",
      "Engagement Ceremonies",
      "Private Celebrations",
    ],
    gallery: images.banquets.venues.pearl,
    reverse: true,
  },
  {
    name: "Board Room",
    capacity: "20-30 Guests",
    intro:
      "The Board Room is designed for focused discussions, presentations, workshops, interviews, and executive meetings. The space provides a professional environment for business and leadership sessions.",
    features: [
      "Executive Meetings",
      "Presentations",
      "Workshops",
      "Interviews",
      "Leadership Sessions",
    ],
    gallery: images.banquets.venues.boardroom,
    reverse: false,
  },
];

export default function BanquetsPage() {
  return (
    <main>
      <SiteHeader />
      <section id="banquets" className="section service-page">
        <div className="section-heading">
          <p className="eyebrow">Banquets & Events</p>
          <h2>Banquet Venues</h2>
          <p className="section-description">
            Hotel Shiva Inn offers elegant banquet spaces for weddings, receptions, conferences,
            corporate meetings, birthdays, anniversaries, and family celebrations. Each venue is
            thoughtfully designed with modern amenities, flexible seating arrangements, and
            attentive hospitality to ensure a memorable experience for every guest.
          </p>
        </div>

        <div className="banquet-showcase">
          {venues.map((venue) => (
            <article
              className={venue.reverse ? "banquet-venue banquet-venue--reverse" : "banquet-venue"}
              key={venue.name}
            >
              <div className="banquet-copy">
                <p className="capacity">{venue.capacity}</p>
                <h3>{venue.name}</h3>
                <p>{venue.intro}</p>
                <ul className="check-list">
                  {venue.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a className="primary-button" href={whatsappLink(venue.name)} target="_blank" rel="noopener noreferrer">
                  Enquire Now <ChevronRight size={18} />
                </a>
              </div>

              <ManualSlider
                className="banquet-slider"
                slides={venue.gallery.map((image, index) => ({
                  src: image,
                  alt: `${venue.name} at Hotel Shiva Inn ${index + 1}`,
                }))}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function whatsappLink(venueName: string) {
  const message = [
    "Hello Shiva Inn,",
    "",
    `I would like to enquire about ${venueName}.`,
    "Please share availability, packages, and booking details.",
  ].join("\n");

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
