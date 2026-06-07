"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Users,
  X
} from "lucide-react";
import { ManualSlider } from "@/app/components/ManualSlider";
import { blurData, images } from "@/lib/images";

const phone = "+916360644158";
const displayPhone = "+91 63606 44158";
const mapsUrl =
  "https://www.google.com/maps?sca_esv=c937e4ae69f887bd&output=search&q=hotel+shiva+inn+haveri";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Dining", href: "/dining" },
  { label: "Bar & Lounge", href: "/bar-lounge" },
  { label: "Banquets", href: "/banquets" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" }
];

const footerItems = ["About", "Rooms", "Gallery", "Contact"];

const roomTypeOptions = [
  "Junior Suite Room",
  "Deluxe Room",
  "Suite Room",
  "Deluxe Twin Bed Room"
];

const heroSlides = [
  {
    title: "HOTEL SHIVA INN",
    subtitle: "Luxury | Comfort | Experience",
    cta: "Check Availability",
    target: "availability"
  },
  {
    title: "Executive Comfort Redefined",
    subtitle: "Elegant accommodations for families, business travellers and corporate guests",
    cta: "Explore Rooms",
    target: "rooms"
  },
  {
    title: "Multi-Cuisine Dining Experience",
    subtitle: "Authentic veg and non-veg dining with premium hospitality",
    cta: "Explore Dining",
    target: "dining"
  },
  {
    title: "Elegant Events & Celebrations",
    subtitle: "Corporate meetings, weddings and family gatherings",
    cta: "View Banquets",
    target: "banquets"
  }
];

const rooms = [
  {
    name: "Junior Suite",
    guests: "4 Guests",
    size: "180 sq.ft",
    beds: "Premium stay",
    gallery: images.roomGalleries.juniorSuite
  },
  {
    name: "Deluxe Room",
    guests: "3 Guests",
    size: "150 sq.ft",
    beds: "Elegant room",
    gallery: images.roomGalleries.deluxe
  },
  {
    name: "Suite Room",
    guests: "4 Guests",
    size: "250 sq.ft",
    beds: "Spacious suite",
    gallery: images.roomGalleries.suite
  },
  {
    name: "Deluxe Twin Bed Room",
    guests: "3 Guests",
    size: "150 sq.ft",
    beds: "2 Single Beds",
    gallery: images.roomGalleries.twin
  }
];

const features = [
  "Air Conditioned",
  "Premium Bedding",
  "Spacious Interiors",
  "Modern Bathrooms",
  "Flat Screen TV",
  "High Speed WiFi",
  "Workspace Friendly",
  "24/7 Room Service",
  "Daily Housekeeping"
];

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
} as const;

type Enquiry = {
  name: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
};

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [heroTouchStart, setHeroTouchStart] = useState<number | null>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState<Enquiry>({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    roomType: "Deluxe Room"
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const schema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": ["Hotel", "LocalBusiness"],
      name: "Hotel Shiva Inn",
      telephone: displayPhone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bypass Road, Near Heggeri",
        addressLocality: "Haveri",
        addressRegion: "Karnataka",
        addressCountry: "IN"
      },
      amenityFeature: [
        "Elegant accommodation",
        "Multi-cuisine dining",
        "Bar and lounge",
        "Banquet halls",
        "Business-class comfort"
      ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true }))
    }),
    []
  );

  const openEnquiry = (_reason: string) => {
    setModalOpen(true);
  };

  const showHeroSlide = (index: number) => {
    setSlide((index + heroSlides.length) % heroSlides.length);
  };

  const handleHeroTouchEnd = (clientX: number) => {
    if (heroTouchStart === null) {
      return;
    }

    const delta = heroTouchStart - clientX;

    if (Math.abs(delta) > 40) {
      showHeroSlide(slide + (delta > 0 ? 1 : -1));
    }

    setHeroTouchStart(null);
  };

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Hello Shiva Inn,",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Check-In: ${formatDate(form.checkIn)}`,
      `Check-Out: ${formatDate(form.checkOut)}`,
      `Guests: ${form.guests}`,
      `Preferred Room Type: ${form.roomType}`,
      "",
      "Please check availability and contact me."
    ].join("\n");
    window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Hotel Shiva Inn home">
          <Image
            src="/logodark.png"
            alt="Hotel Shiva Inn"
            width={80}
            height={80}
            priority
          />
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="icon-link" href={`tel:${phone}`} aria-label="Call Hotel Shiva Inn">
            <Phone size={18} />
          </a>
          <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Open menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <section
        id="top"
        className="hero"
        onTouchStart={(event) => setHeroTouchStart(event.touches[0].clientX)}
        onTouchEnd={(event) => handleHeroTouchEnd(event.changedTouches[0].clientX)}
      >
        {heroSlides.map((item, index) => (
          <div key={item.title} className={index === slide ? "hero-slide active" : "hero-slide"}>
            <Image
              src={images.hero[index]}
              alt={`${item.title} at Hotel Shiva Inn`}
              fill
              priority={index === 0}
              sizes="100vw"
              placeholder="blur"
              blurDataURL={blurData}
            />
          </div>
        ))}
        <div className="hero-overlay" />
        <motion.div className="hero-content" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="eyebrow">Bypass Road, Near Heggeri, Haveri</p>
          <h1>{heroSlides[slide].title}</h1>
          <p>{heroSlides[slide].subtitle}</p>
          <button className="primary-button" onClick={() => jumpOrEnquire(heroSlides[slide].target, openEnquiry)}>
            {heroSlides[slide].cta}
            <ChevronRight size={18} />
          </button>
        </motion.div>
        <div className="slide-dots" aria-label="Hero slides">
          {heroSlides.map((item, index) => (
            <button key={item.title} className={index === slide ? "active" : ""} onClick={() => showHeroSlide(index)} aria-label={`Show slide ${index + 1}`} />
          ))}
        </div>
        <div className="hero-arrows">
          <button type="button" onClick={() => showHeroSlide(slide - 1)} aria-label="Previous hero slide">
            <ChevronLeft size={20} />
          </button>
          <button type="button" onClick={() => showHeroSlide(slide + 1)} aria-label="Next hero slide">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      <section id="availability" className="availability">
        <div className="search-panel">
          <label>
            Check-In Date
            <input type="date" value={form.checkIn} onChange={(event) => setForm({ ...form, checkIn: event.target.value })} />
          </label>
          <label>
            Check-Out Date
            <input type="date" value={form.checkOut} onChange={(event) => setForm({ ...form, checkOut: event.target.value })} />
          </label>
          <label>
            Guests
            <select value={form.guests} onChange={(event) => setForm({ ...form, guests: event.target.value })}>
              {["1", "2", "3", "4",].map((count) => (
                <option key={count}>{count}</option>
              ))}
            </select>
          </label>
          <label>
            Room Type
            <select value={form.roomType} onChange={(event) => setForm({ ...form, roomType: event.target.value })}>
              {roomTypeOptions.map((roomType) => (
                <option key={roomType}>{roomType}</option>
              ))}
            </select>
          </label>
          <button onClick={() => openEnquiry("Availability check")}>Check Availability</button>
        </div>
        <p>We will check room availability, suggest the best room for your stay and contact you shortly via phone or WhatsApp.</p>
      </section>

      <section id="about" className="section about-editorial">
        <div className="split">
          <div className="image-frame tall">
            <Image src={images.exterior} alt="Hotel Shiva Inn exterior" fill sizes="(max-width: 900px) 100vw, 50vw" placeholder="blur" blurDataURL={blurData} />
          </div>
          <div className="content-stack editorial-copy">
            <h2>ABOUT SHIVA INN</h2>
            <p>
              Hotel Shiva Inn is located on Bypass Road near Heggeri, Haveri and offers elegant accommodation, dining experiences, banquet facilities and warm hospitality for business travellers, families and guests visiting Haveri.
            </p>
            <p>
              The property features well-appointed rooms, multi-cuisine dining, vegetarian dining options, a signature bar & lounge and event spaces suitable for meetings, celebrations and family gatherings.
            </p>
            <p>
              Designed to combine comfort, convenience and hospitality, Hotel Shiva Inn provides a refined stay experience for both leisure and business guests.
            </p>
          </div>
        </div>
      </section>

      <Section id="rooms" eyebrow="Rooms" title="Elegant accommodation with quiet comfort in every detail.">
        <div className="card-grid four">
          {rooms.map((room) => (
            <article className="room-card" key={room.name}>
              <div className="card-image">
                <ManualSlider
                  slides={room.gallery.map((image, index) => ({
                    src: image,
                    alt: `${room.name} view ${index + 1}`,
                  }))}
                  sizes="(max-width: 900px) 90vw, 46vw"
                />
              </div>
              <div className="card-body">
                <h3>{room.name}</h3>
                <div className="room-meta">
                  <span><Users size={15} />{room.guests}</span>
                  <span>{room.size}</span>
                  <span>{room.beds}</span>
                </div>
                <button className="text-button" onClick={() => openEnquiry(room.name)}>Enquire Now <ChevronRight size={16} /></button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="feature-band">
        <div className="section-heading">
          <p className="eyebrow">Room Features</p>
          <h2>Built for restful stays and effortless work.</h2>
        </div>
        <div className="feature-tags">
          {features.map((name) => (
            <motion.span className="feature-tag" key={name} {...fadeUp}>
              {name}
            </motion.span>
          ))}
        </div>
      </section>

      <Section id="gallery" eyebrow="Gallery" title="A glimpse of stays, celebrations and dining moments.">
        <div className="gallery-grid">
          {images.gallery.map((image, index) => (
            <button className="gallery-item" key={image} onClick={() => setLightbox(image)} aria-label={`Open gallery image ${index + 1}`}>
              <Image src={image} alt={`Hotel Shiva Inn gallery ${index + 1}`} fill sizes="(max-width: 900px) 50vw, 33vw" placeholder="blur" blurDataURL={blurData} />
            </button>
          ))}
        </div>
      </Section>

      <section id="contact" className="location-section">
        <div className="map-wrap">
          <iframe title="Hotel Shiva Inn map" src="https://www.google.com/maps?q=Bypass%20Road%20Near%20Heggeri%20Haveri%20Karnataka&output=embed" loading="lazy" />
        </div>
        <div className="location-card">
          <p className="eyebrow">Location</p>
          <h2>Hotel Shiva Inn</h2>
          <p>Bypass Road, Near Heggeri, Haveri, Karnataka</p>
          <p>{displayPhone}</p>
          <div className="action-row">
            <a href={`tel:${phone}`}><Phone size={17} />Call Now</a>
            <a href={`https://wa.me/${phone}`}><Sparkles size={17} />WhatsApp</a>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={17} />Get Directions</a>
            <a href="https://www.instagram.com/hotelshiva_inn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><Instagram size={17} />Instagram</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-center">
          <Image
            src="/logo.png"
            alt="Hotel Shiva Inn"
            width={90}
            height={90}
            className="footer-logo"
          />
        </div>

        <div className="footer-center">
          <h2>HOTEL SHIVA INN</h2>
          <p>Luxury | Comfort | Experience</p>

          <nav>
            {footerItems.map((item) => (
              <a key={item} href={`#${slug(item)}`}>
                {item}
              </a>
            ))}
          </nav>

          <p>
            Copyright {new Date().getFullYear()} Hotel Shiva Inn. All rights reserved.
          </p>

          <div className="footer-credit">
            Website Crafted by{" "}
            <a
              href="https://www.dishanwebwing.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dishan Web Wings
            </a>
          </div>
        </div>
      </footer>
      {modalOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Availability enquiry">
          <form className="modal" onSubmit={submitEnquiry}>
            <button type="button" className="close-button" onClick={() => setModalOpen(false)} aria-label="Close enquiry form"><X size={20} /></button>
            <p className="eyebrow">WhatsApp Enquiry</p>
            <h2>Check Availability</h2>
            <div className="form-grid">
              <label>Name<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></label>
              <label>Phone<input type="tel"
                required
                maxLength={10}
                inputMode="numeric"
                value={form.phone}
                onChange={(event) =>
                  setForm({
                    ...form,
                    phone: event.target.value.replace(/\D/g, "").slice(0, 10)
                  })} /></label>
              <label>Check-In (DD-MM-YYYY)<input type="date" value={form.checkIn} onChange={(event) => setForm({ ...form, checkIn: event.target.value })} /></label>
              <label>Check-Out (DD-MM-YYYY)<input type="date" value={form.checkOut} onChange={(event) => setForm({ ...form, checkOut: event.target.value })} /></label>
              <label>Guests<select value={form.guests} onChange={(event) => setForm({ ...form, guests: event.target.value })}>{["1", "2", "3", "4", "5+"].map((count) => <option key={count}>{count}</option>)}</select></label>
              <label>Preferred Room Type<select value={form.roomType} onChange={(event) => setForm({ ...form, roomType: event.target.value })}>{roomTypeOptions.map((roomType) => <option key={roomType}>{roomType}</option>)}</select></label>
            </div>
            <button className="primary-button full" type="submit">Send on WhatsApp <ChevronRight size={18} /></button>
          </form>
        </div>
      )}

      {lightbox && (
        <button className="lightbox" onClick={() => setLightbox(null)} aria-label="Close gallery image">
          <Image src={lightbox} alt="Expanded Hotel Shiva Inn gallery view" fill sizes="100vw" placeholder="blur" blurDataURL={blurData} />
        </button>
      )}
    </main>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section id={id} className="section" {...fadeUp}>
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

function slug(item: string) {
  return item.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");
}

function formatDate(value: string) {
  if (!value) {
    return "Not selected";
  }
  const [year, month, day] = value.split("-");
  return `${day}-${month}-${year}`;
}

function jumpOrEnquire(target: string, openEnquiry: (reason: string) => void) {
  if (target === "availability") {
    openEnquiry("Availability check");
    return;
  }
  if (target === "dining" || target === "banquets") {
    window.location.href = `/${target}`;
    return;
  }
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
}
