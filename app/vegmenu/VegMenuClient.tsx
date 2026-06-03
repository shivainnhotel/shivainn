"use client";

import { useEffect, useRef, useState } from "react";

type MenuItem = {
  name: string;
  price: string;
};

type TodaySpecial = {
  name: string;
  image: string;
};

type MenuSection = {
  id: string;
  title: string;
  banner: string;
  icon: string;
  items: MenuItem[];
};

const rs = "\u20b9";

const assets = {
  logo: "/logodark.png",
  hero: "/images/veg.webp",
  dining: "/images/vegdining.jpg",
  paneerButter: "/images/vegmenu/paneer-butter-masala.png",
  vegBiryani: "/images/vegmenu/veg-biryani.png",
  butterDosa: "/images/vegmenu/butter-masala-dosa.png",
  kajuPaneer: "/images/vegmenu/kaju-paneer.png",
};

const todaysSpecials: TodaySpecial[] = [
  { name: "Paneer Butter Masala", image: assets.paneerButter },
  { name: "Veg Biryani", image: assets.vegBiryani },
  { name: "Butter Masala Dosa", image: assets.butterDosa },
  { name: "Kaju Paneer", image: assets.kajuPaneer },
];

const menuSections: MenuSection[] = [
  {
    id: "hot-beverages",
    title: "Hot Beverages",
    banner: assets.dining,
    icon: assets.dining,
    items: [
      { name: "Tea", price: `${rs}20` },
      { name: "Coffee", price: `${rs}30` },
      { name: "Masala Tea", price: `${rs}30` },
      { name: "Green Tea", price: `${rs}40` },
      { name: "Hot Chocolate", price: `${rs}70` },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    banner: assets.dining,
    icon: assets.dining,
    items: [
      { name: "Gulab Jamun", price: `${rs}60` },
      { name: "Rasgulla", price: `${rs}60` },
      { name: "Ice Cream", price: `${rs}80` },
      { name: "Gajar Halwa", price: `${rs}90` },
      { name: "Brownie With Ice Cream", price: `${rs}140` },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    banner: assets.butterDosa,
    icon: assets.butterDosa,
    items: [
      { name: "Idli Sambar", price: `${rs}60` },
      { name: "Medu Vada", price: `${rs}70` },
      { name: "Upma", price: `${rs}70` },
      { name: "Poha", price: `${rs}60` },
      { name: "Puri Bhaji", price: `${rs}90` },
      { name: "Aloo Paratha", price: `${rs}100` },
    ],
  },
  {
    id: "dosa-corner",
    title: "Dosa Corner",
    banner: assets.butterDosa,
    icon: assets.butterDosa,
    items: [
      { name: "Plain Dosa", price: `${rs}130` },
      { name: "Masala Dosa", price: `${rs}150` },
      { name: "Butter Masala Dosa", price: `${rs}160` },
      { name: "Mysore Masala Dosa", price: `${rs}170` },
      { name: "Cheese Dosa", price: `${rs}180` },
      { name: "Paneer Dosa", price: `${rs}190` },
    ],
  },
  {
    id: "meals-extras",
    title: "Meals + Extras",
    banner: assets.dining,
    icon: assets.dining,
    items: [
      { name: "Shivapakam Thali", price: `${rs}180` },
      { name: "Mini Meals", price: `${rs}130` },
      { name: "Curd Rice", price: `${rs}100` },
      { name: "Extra Chapati", price: `${rs}20` },
      { name: "Extra Rice", price: `${rs}50` },
      { name: "Papad", price: `${rs}20` },
    ],
  },
  {
    id: "south-indian-snacks",
    title: "South Indian Snacks",
    banner: assets.butterDosa,
    icon: assets.butterDosa,
    items: [
      { name: "Sambar Vada", price: `${rs}80` },
      { name: "Rasam Vada", price: `${rs}80` },
      { name: "Onion Uttapam", price: `${rs}110` },
      { name: "Tomato Uttapam", price: `${rs}110` },
      { name: "Mix Uttapam", price: `${rs}130` },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    banner: assets.paneerButter,
    icon: assets.paneerButter,
    items: [
      { name: "Tomato Soup", price: `${rs}90` },
      { name: "Veg Manchow Soup", price: `${rs}110` },
      { name: "Hot & Sour Soup", price: `${rs}110` },
      { name: "Sweet Corn Soup", price: `${rs}110` },
      { name: "Cream of Mushroom Soup", price: `${rs}130` },
    ],
  },
  {
    id: "north-indian-starters",
    title: "North Indian Starters",
    banner: assets.paneerButter,
    icon: assets.paneerButter,
    items: [
      { name: "Paneer Tikka", price: `${rs}220` },
      { name: "Mushroom Tikka", price: `${rs}220` },
      { name: "Hara Bhara Kabab", price: `${rs}180` },
      { name: "Veg Seekh Kabab", price: `${rs}200` },
      { name: "Tandoori Aloo", price: `${rs}170` },
    ],
  },
  {
    id: "dal",
    title: "Dal",
    banner: assets.paneerButter,
    icon: assets.paneerButter,
    items: [
      { name: "Dal Fry", price: `${rs}150` },
      { name: "Dal Tadka", price: `${rs}160` },
      { name: "Dal Makhani", price: `${rs}190` },
      { name: "Yellow Dal", price: `${rs}140` },
    ],
  },
  {
    id: "paneer",
    title: "Paneer",
    banner: assets.paneerButter,
    icon: assets.paneerButter,
    items: [
      { name: "Paneer Butter Masala", price: `${rs}270` },
      { name: "Kaju Paneer", price: `${rs}250` },
      { name: "Paneer Tikka Masala", price: `${rs}230` },
      { name: "Palak Paneer", price: `${rs}210` },
      { name: "Kadai Paneer", price: `${rs}220` },
      { name: "Paneer Kolhapuri", price: `${rs}230` },
    ],
  },
  {
    id: "breads",
    title: "Breads",
    banner: assets.kajuPaneer,
    icon: assets.kajuPaneer,
    items: [
      { name: "Tandoori Roti", price: `${rs}25` },
      { name: "Butter Roti", price: `${rs}30` },
      { name: "Plain Naan", price: `${rs}45` },
      { name: "Butter Naan", price: `${rs}55` },
      { name: "Garlic Naan", price: `${rs}70` },
      { name: "Lachha Paratha", price: `${rs}60` },
    ],
  },
  {
    id: "rice",
    title: "Rice",
    banner: assets.vegBiryani,
    icon: assets.vegBiryani,
    items: [
      { name: "Steamed Rice", price: `${rs}90` },
      { name: "Jeera Rice", price: `${rs}120` },
      { name: "Ghee Rice", price: `${rs}130` },
      { name: "Curd Rice", price: `${rs}100` },
      { name: "Lemon Rice", price: `${rs}120` },
    ],
  },
  {
    id: "noodles",
    title: "Noodles",
    banner: assets.dining,
    icon: assets.dining,
    items: [
      { name: "Veg Noodles", price: `${rs}140` },
      { name: "Hakka Noodles", price: `${rs}150` },
      { name: "Schezwan Noodles", price: `${rs}160` },
      { name: "Paneer Noodles", price: `${rs}180` },
    ],
  },
  {
    id: "raita",
    title: "Raita",
    banner: assets.dining,
    icon: assets.dining,
    items: [
      { name: "Plain Curd", price: `${rs}50` },
      { name: "Boondi Raita", price: `${rs}70` },
      { name: "Mix Veg Raita", price: `${rs}80` },
      { name: "Pineapple Raita", price: `${rs}90` },
    ],
  },
  {
    id: "pulao-rice",
    title: "Pulao & Rice",
    banner: assets.vegBiryani,
    icon: assets.vegBiryani,
    items: [
      { name: "Veg Pulao", price: `${rs}150` },
      { name: "Peas Pulao", price: `${rs}140` },
      { name: "Kashmiri Pulao", price: `${rs}180` },
      { name: "Paneer Pulao", price: `${rs}190` },
    ],
  },
  {
    id: "biryani",
    title: "Rice & Biryani",
    banner: assets.vegBiryani,
    icon: assets.vegBiryani,
    items: [
      { name: "Veg Biryani", price: `${rs}170` },
      { name: "Hyderabadi Veg Biryani", price: `${rs}190` },
      { name: "Paneer Biryani", price: `${rs}210` },
      { name: "Mushroom Biryani", price: `${rs}210` },
    ],
  },
  {
    id: "fresh-juices",
    title: "Fresh Juices",
    banner: assets.dining,
    icon: assets.dining,
    items: [
      { name: "Lime Juice", price: `${rs}60` },
      { name: "Orange Juice", price: `${rs}100` },
      { name: "Watermelon Juice", price: `${rs}90` },
      { name: "Pineapple Juice", price: `${rs}100` },
      { name: "Mango Juice", price: `${rs}110` },
      { name: "Mixed Fruit Juice", price: `${rs}120` },
    ],
  },
];

export default function VegMenuClient() {
  const [activeId, setActiveId] = useState(menuSections[0].id);
  const [specialIndex, setSpecialIndex] = useState(0);
  const activeSection = menuSections.find((section) => section.id === activeId) ?? menuSections[0];
  const chipRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const specialRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSpecialIndex((index) => (index + 1) % todaysSpecials.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    chipRefs.current[activeId]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeId]);

  useEffect(() => {
    specialRefs.current[specialIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [specialIndex]);

  return (
    <main className="qr-menu-page">
      <section className="menu-shell">
        <header className="hero">
          <img src={assets.hero} alt="" className="hero__image" />
        </header>

        <section className="brand-card" aria-label="Hotel Shiva Inn">
          <div className="brand-logo">
            <img src={assets.logo} alt="Hotel Shiva Inn" />
          </div>
          <p>HOTEL SHIVA INN</p>
          <h1>Shivapakam Veg Restaurant</h1>
        </section>

        <section className="special-panel" aria-labelledby="todays-special">
          <div className="section-heading">
            <h2 id="todays-special">Today&apos;s Special</h2>
            <p>Our handpicked specials for you</p>
          </div>
          <div className="special-slider" aria-label="Today specials">
            {todaysSpecials.map((dish, index) => (
              <div
                className="special-card"
                ref={(node) => {
                  specialRefs.current[index] = node;
                }}
                key={dish.name}
              >
                <img src={dish.image} alt={dish.name} />
                <strong>{dish.name}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="menu-panel" aria-labelledby="menu-title">
          <div className="section-heading section-heading--left">
            <h2 id="menu-title">Menu</h2>
            <p>Discover our delicious dishes</p>
          </div>

          <nav className="category-slider" aria-label="Menu categories">
            {menuSections.map((section) => {
              const active = section.id === activeId;

              return (
                <button
                  type="button"
                  ref={(node) => {
                    chipRefs.current[section.id] = node;
                  }}
                  className={active ? "category-item category-item--active" : "category-item"}
                  aria-pressed={active}
                  onClick={() => setActiveId(section.id)}
                  key={section.id}
                >
                  <span>
                    <img src={section.icon} alt="" />
                  </span>
                  <em>{section.title}</em>
                </button>
              );
            })}
          </nav>

          <div className="category-view" aria-live="polite" aria-label={activeSection.title}>
            <div className="category-banner">
              <img src={activeSection.banner} alt="" />
            </div>
            <h3>{activeSection.title}</h3>
            <div className="dish-list">
              {activeSection.items.map((item) => (
                <div className="dish-row" key={`${activeSection.id}-${item.name}`}>
                  <span>{item.name}</span>
                  <i aria-hidden="true" />
                  <strong>{item.price}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="gallery-panel" aria-labelledby="gallery-title">
          <div className="section-heading section-heading--left">
            <h2 id="gallery-title">Gallery</h2>
            <p>Pure veg delight experience</p>
          </div>
          <div className="gallery-grid">
            {[assets.paneerButter, assets.vegBiryani, assets.butterDosa, assets.kajuPaneer].map(
              (image) => (
                <img src={image} alt="" key={image} />
              ),
            )}
          </div>
        </section>
      </section>

      <style>{`
        .qr-menu-page {
          --green: #328f3f;
          --green-deep: #176326;
          --cream: #fff8bc;
          --cream-soft: #fffbd8;
          --ink: #221805;
          --muted: rgba(34, 24, 5, 0.58);
          --gold: #d4af37;
          min-height: 100svh;
          background: linear-gradient(180deg, var(--green), var(--green-deep));
          color: var(--ink);
          font-family: var(--font-playfair, Georgia), Georgia, serif;
          padding-bottom: 18px;
        }

        .qr-menu-page * {
          box-sizing: border-box;
        }

        .menu-shell {
          width: min(100%, 430px);
          margin: 0 auto;
          padding: 0 10px 18px;
        }

        .hero {
          height: clamp(138px, 32vh, 190px);
          margin: 0 -10px;
          overflow: hidden;
          position: relative;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75));
        }

        .hero__image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .brand-card {
          display: grid;
          justify-items: center;
          margin-top: -48px;
          position: relative;
          z-index: 2;
          color: #ffffff;
          text-align: center;
        }

        .brand-logo {
          width: 92px;
          height: 92px;
          display: grid;
          place-items: center;
          border: 4px solid #ffffff;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22);
        }

        .brand-logo img {
          width: 74px;
          height: auto;
          max-height: 66px;
          object-fit: contain;
        }

        .brand-card p {
          margin: 8px 0 2px;
          font: 900 0.77rem/1 Arial, sans-serif;
          letter-spacing: 0.14em;
        }

        .brand-card h1 {
          margin: 0;
          font-size: 1.35rem;
          line-height: 1.1;
          letter-spacing: 0;
        }

        .special-panel,
        .menu-panel,
        .gallery-panel {
          border-radius: 18px;
          background: linear-gradient(180deg, var(--cream), var(--cream-soft));
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
        }

        .special-panel {
          margin-top: 14px;
          padding: 14px 12px 16px;
        }

        .section-heading {
          text-align: center;
        }

        .section-heading--left {
          text-align: left;
        }

        .section-heading h2 {
          margin: 0;
          color: var(--ink);
          font-size: 1.12rem;
          line-height: 1;
          letter-spacing: 0;
        }

        .section-heading p {
          margin: 5px 0 0;
          color: var(--muted);
          font: 600 0.72rem/1.35 Arial, sans-serif;
        }

        .special-slider {
          display: flex;
          gap: 12px;
          margin-top: 13px;
          overflow-x: auto;
          padding: 0 2px 4px;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
        }

        .special-slider::-webkit-scrollbar,
        .category-slider::-webkit-scrollbar {
          display: none;
        }

        .special-card {
          flex: 0 0 31%;
          min-width: 96px;
          scroll-snap-align: center;
        }

        .special-card img {
          width: 100%;
          aspect-ratio: 1 / 1;
          display: block;
          border: 3px solid #ffffff;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 9px 18px rgba(0, 0, 0, 0.2);
        }

        .special-card strong {
          display: block;
          margin-top: 7px;
          color: var(--green-deep);
          font: 900 0.7rem/1.2 Arial, sans-serif;
          text-align: center;
        }

        .menu-panel {
          margin-top: 10px;
          padding: 14px 12px 13px;
        }

        .category-slider {
          display: flex;
          gap: 10px;
          margin: 12px -12px 0;
          overflow-x: auto;
          padding: 0 12px 10px;
          scroll-snap-type: x mandatory;
        }

        .category-item {
          flex: 0 0 76px;
          display: grid;
          justify-items: center;
          gap: 5px;
          border: 0;
          background: transparent;
          color: var(--green-deep);
          font: 900 0.62rem/1.15 Arial, sans-serif;
          scroll-snap-align: start;
          transform: scale(1);
          transition: transform 180ms ease;
        }

        .category-item span {
          width: 56px;
          height: 56px;
          display: block;
          overflow: hidden;
          border: 3px solid #ffffff;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 8px 14px rgba(0, 0, 0, 0.14);
          transition: border-color 180ms ease, box-shadow 180ms ease;
        }

        .category-item img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .category-item em {
          min-height: 24px;
          font-style: normal;
          text-align: center;
        }

        .category-item--active {
          transform: scale(1.08);
        }

        .category-item--active span {
          border-color: var(--gold);
          box-shadow:
            0 0 0 3px rgba(212, 175, 55, 0.22),
            0 0 21px rgba(212, 175, 55, 0.55),
            0 10px 18px rgba(0, 0, 0, 0.18);
        }

        .category-view {
          animation: category-in 160ms ease;
        }

        .category-banner {
          height: 118px;
          margin-top: 2px;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: inset 0 0 0 1px rgba(34, 24, 5, 0.08);
        }

        .category-banner img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .category-view h3 {
          margin: 12px 0 7px;
          color: var(--green-deep);
          font-size: 1.04rem;
          line-height: 1;
          letter-spacing: 0;
        }

        .dish-row {
          min-height: 32px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: baseline;
          gap: 8px;
          border-bottom: 1px solid rgba(34, 24, 5, 0.08);
          font: 900 0.79rem/1.25 Arial, sans-serif;
        }

        .dish-row:last-child {
          border-bottom: 0;
        }

        .dish-row i {
          height: 1px;
          border-bottom: 1px dotted rgba(34, 24, 5, 0.5);
          transform: translateY(-3px);
        }

        .dish-row strong {
          color: var(--green-deep);
        }

        .gallery-panel {
          margin-top: 10px;
          padding: 14px 12px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-top: 11px;
        }

        .gallery-grid img {
          width: 100%;
          aspect-ratio: 1 / 0.88;
          display: block;
          border-radius: 12px;
          object-fit: cover;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.16);
        }

        @keyframes category-in {
          from {
            opacity: 0;
            transform: translateY(5px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 720px) {
          .qr-menu-page {
            padding-block: 20px;
          }

          .menu-shell {
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.05);
            box-shadow: 0 28px 70px rgba(0, 0, 0, 0.28);
          }

          .hero {
            border-radius: 18px 18px 0 0;
          }
        }
      `}</style>
    </main>
  );
}
