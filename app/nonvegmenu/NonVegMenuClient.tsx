"use client";

import { useEffect, useMemo, useRef, useState } from "react";
type RawItem = {
  section_id: string;
  section_title: string;
  name: string;
  price: string | null;
  price_750ml: string | null;
  price_180ml: string | null;
  price_90ml: string | null;
  price_60ml: string | null;
  price_30ml: string | null;
  price_150ml: string | null;
};

function buildSections(items: RawItem[]): MenuSection[] {
  const grouped = new Map<string, MenuSection>();
  for (const item of items) {
    if (!grouped.has(item.section_id)) {
      grouped.set(item.section_id, { id: item.section_id, title: item.section_title, items: [] });
    }
    const { section_id, section_title, name, ...priceFields } = item;
    const menuItem: MenuItem = { name };
    for (const [key, value] of Object.entries(priceFields)) {
      if (value !== null) {
        menuItem[key as keyof Omit<MenuItem, "name">] = value;
      }
    }
    grouped.get(item.section_id)!.items.push(menuItem);
  }
  return Array.from(grouped.values());
}

type MenuType = "nonveg" | "drinks";

type MenuItem = {
  name: string;
  price?: string;
  price_750ml?: string;
  price_180ml?: string;
  price_90ml?: string;
  price_60ml?: string;
  price_30ml?: string;
  price_150ml?: string;
};

type MenuSection = {
  id: string;
  title: string;
  items: MenuItem[];
};

const assets = {
  logo: "/logodark.png",
  hero: "/images/bardining.webp",
  fallback: "/images/bardining.webp",
};

const SECTION_IMAGES: Record<string, string> = {
  "appetizers": "https://images.unsplash.com/photo-1746211108786-ca20c8f80ecd?q=80&w=1170&auto=format&fit=crop",
  "veg-chinese-soups": "https://images.unsplash.com/photo-1665594051407-7385d281ad76?w=600&auto=format&fit=crop&q=60",
  "non-veg-chinese-soups": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
  "contiential-veg-soups": "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&q=80",
  "contiential-soups-non-veg": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
  "veg-north-indian-shorba": "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&q=80",
  "northa-indian-shorba-non-veg": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
  "veg-chinese-starters": "https://images.unsplash.com/photo-1680991172715-4074203a40d3?w=600&auto=format&fit=crop&q=60",
  "non-veg-chinese-starters": "https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80",
  "contiential-veg-starters": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80",
  "contiential-starters-in-non-veg": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=400&q=80",
  "veg-coastal-starters": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80",
  "non-veg-coastal-starters-and-curries": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
  "north-indian-veg-starters": "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400&q=80",
  "north-indian-non-veg-starters": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80",
  "tandoori-starters-in-veg": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
  "tandoori-starters-non-veg": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
  "veg-chinese-main-course": "https://images.unsplash.com/photo-1632992468854-7b1d83134bc4?q=80&w=1074&auto=format&fit=crop",
  "non-veg-chinese-main-course": "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?w=600&auto=format&fit=crop&q=60",
  "north-indian-main-course-gravies": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
  "north-indian-non-veg-gravy": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80",
  "veg-biryani": "https://images.unsplash.com/photo-1697155406055-2db32d47ca07?q=80&w=1170&auto=format&fit=crop",
  "non-veg-biryani": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=80",
  "veg-costal-curry": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80",
  "non-veg-costal-curry": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
  "indian-breads": "https://images.unsplash.com/photo-1655979284091-eea0e93405ee?w=600&auto=format&fit=crop&q=60",
  "desserts": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80",
  "blended-scotch-whisky": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&q=80",
  "indian-whisky": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&q=80",
  "canadian-whisky": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&q=80",
  "vodka": "https://images.unsplash.com/photo-1549746423-e5fe9cafded8?q=80&w=687&auto=format&fit=crop",
  "rum": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80",
  "dark-rum": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80",
  "gin": "https://images.unsplash.com/photo-1453824979084-c8fd42932378?w=600&auto=format&fit=crop&q=60",
  "tequilla": "https://images.unsplash.com/photo-1529671434436-8fbb37410056?w=600&auto=format&fit=crop&q=60",
  "brandy": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&q=80",
  "wine": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80",
  "liquor": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80",
  "beers": "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80",
  "mocktails": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80",
  "cocktails-whisky-based": "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80",
  "cocktails-vodka-based": "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80",
  "cocktails-rum-based": "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80",
  "cocktails-brandy-based": "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80",
  "cocktails-tequilla-based": "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80",
  "cocktails-beer-based": "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80",
  "cocktails-wine-based": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80",
  "strong-cocktails": "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80",
  "shots": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80",
  "cold-zone": "https://images.unsplash.com/photo-1640317455707-d83d8d2e938f?w=600&auto=format&fit=crop&q=60",
};

const FALLBACK_IMAGE = "/images/bardining.webp";

function sectionImage(section: MenuSection) {
  return SECTION_IMAGES[section.id] ?? FALLBACK_IMAGE;
}

function matchesSearch(section: MenuSection, query: string) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return section;
  }

  const items = section.items.filter((item) =>
    [
      section.title,
      item.name,
      item.price,
      item.price_30ml,
      item.price_60ml,
      item.price_150ml,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(normalized)
  );

  return items.length ? { ...section, items } : null;
}

function cleanDrinkName(name: string) {
  return name.replace(/\s*\b750\s*ml\b/gi, "").replace(/\s{2,}/g, " ").trim();
}

function hasMultiServingPrices(section: MenuSection) {
  return section.items.length > 0 && section.items.every((item) =>
    item.price_750ml && !item.price && !item.price_150ml
  );
}

function formatPrice(item: MenuItem, useServingColumns = false) {
  if (item.price_750ml) {
    if (useServingColumns) {
      return (
        <span className="drink-price drink-price--columns">
          <b>{item.price_750ml}</b>
          <b>{item.price_180ml}</b>
          <b>{item.price_90ml}</b>
          <b>{item.price_60ml}</b>
          <b>{item.price_30ml}</b>
        </span>
      );
    }

    return (
      <span className="drink-price">
        {item.price_750ml && <b>750ml {item.price_750ml}</b>}
        {item.price_180ml && <b>180ml {item.price_180ml}</b>}
        {item.price_90ml && <b>90ml {item.price_90ml}</b>}
        {item.price_60ml && <b>60ml {item.price_60ml}</b>}
        {item.price_30ml && <b>30ml {item.price_30ml}</b>}
      </span>
    );
  }

  if (item.price_150ml) {
    return <strong>150ml {item.price_150ml}</strong>;
  }

  return <strong>{item.price}</strong>;
}

export default function NonVegMenuClient({
  nonvegItems,
  drinksItems,
}: {
  nonvegItems: RawItem[];
  drinksItems: RawItem[];
}) {
  const nonVegMenuSections = useMemo(() => buildSections(nonvegItems), [nonvegItems]);
  const drinksMenuSections = useMemo(() => buildSections(drinksItems), [drinksItems]);
  const [menuType, setMenuType] = useState<MenuType>("nonveg");
  const [activeId, setActiveId] = useState(nonVegMenuSections[0]?.id ?? "");
  const [sliderProgress, setSliderProgress] = useState(0);
  const [search, setSearch] = useState("");
  const sliderRef = useRef<HTMLElement | null>(null);
  const chipRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const menuSections = (menuType === "nonveg" ? nonVegMenuSections : drinksMenuSections) as MenuSection[];
  const filteredSections = menuSections
    .map((section) => matchesSearch(section, search))
    .filter((section): section is MenuSection => Boolean(section));
  const visibleSections = search.trim() ? filteredSections : menuSections;
  const activeSection =
    visibleSections.find((section) => section.id === activeId) ?? visibleSections[0] ?? menuSections[0];
  const usesServingColumns = activeSection ? hasMultiServingPrices(activeSection) : false;

  useEffect(() => {
    const sections = (menuType === "nonveg" ? nonVegMenuSections : drinksMenuSections) as MenuSection[];
    setActiveId(sections[0]?.id ?? "");
    setSliderProgress(0);
    sliderRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }, [menuType]);

  useEffect(() => {
    if (!activeSection) {
      return;
    }

    chipRefs.current[activeSection.id]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeSection?.id]);

  const handleSliderScroll = (e: React.UIEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const max = el.scrollWidth - el.clientWidth;
    setSliderProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  const switchMenu = (type: MenuType) => {
    setMenuType(type);
    setSearch("");
  };

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
          <h1>Non Veg & Drinks Menu</h1>
        </section>

        <div className="menu-toggle" aria-label="Menu type">
          <button
            type="button"
            className={menuType === "nonveg" ? "menu-toggle__button menu-toggle__button--active" : "menu-toggle__button"}
            aria-pressed={menuType === "nonveg"}
            onClick={() => switchMenu("nonveg")}
          >
            <span aria-hidden="true">🍗</span> Non-Veg Menu
          </button>
          <button
            type="button"
            className={menuType === "drinks" ? "menu-toggle__button menu-toggle__button--active" : "menu-toggle__button"}
            aria-pressed={menuType === "drinks"}
            onClick={() => switchMenu("drinks")}
          >
            <span aria-hidden="true">🍸</span> Drinks Menu
          </button>
        </div>

        <section className="menu-panel" aria-labelledby="menu-title">
          <div className="section-heading section-heading--left">
            <h2 id="menu-title">Menu</h2>
            <p>Discover our delicious dishes and drinks</p>
          </div>

          <label className="menu-search">
            <span>Search menu</span>
            <input
              type="search"
              value={search}
              placeholder="Search food, drinks or prices"
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>

          <nav className="category-slider" aria-label="Menu categories" ref={sliderRef} onScroll={handleSliderScroll}>
            {visibleSections.map((section) => {
              const active = section.id === activeSection?.id;
              return (
                <button
                  type="button"
                  ref={(node) => { chipRefs.current[section.id] = node; }}
                  className={active ? "category-item category-item--active" : "category-item"}
                  aria-pressed={active}
                  onClick={() => setActiveId(section.id)}
                  key={section.id}
                >
                  <span>
                    <img
                      src={sectionImage(section)}
                      alt=""
                      onError={(event) => {
                        event.currentTarget.src = assets.fallback;
                      }}
                    />
                  </span>
                  <em>{section.title}</em>
                </button>
              );
            })}
          </nav>

          <div className="slider-track" aria-hidden="true">
            <div className="slider-thumb" style={{ width: `${Math.max(20, sliderProgress * 80 + 10)}%`, marginLeft: `${sliderProgress * (90 - Math.max(20, sliderProgress * 80 + 10))}%` }} />
          </div>

          {activeSection ? (
            <div className="category-view" aria-live="polite" aria-label={activeSection.title}>

              <h3>{activeSection.title}</h3>
              <div className="dish-list">
                {usesServingColumns && (
                  <div className="serving-size-header" aria-hidden="true">
                    <span />
                    <i />
                    <span className="serving-size-columns">
                      <b>750ml</b>
                      <b>180ml</b>
                      <b>90ml</b>
                      <b>60ml</b>
                      <b>30ml</b>
                    </span>
                  </div>
                )}
                {activeSection.items.map((item, index) => (
                  <div className="dish-row" key={`${activeSection.id}-${item.name}-${index}`}>
                    <span>{menuType === "drinks" ? cleanDrinkName(item.name) : item.name}</span>
                    <i aria-hidden="true" />
                    {formatPrice(item, usesServingColumns)}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="empty-state">No menu items found.</p>
          )}
        </section>
      </section>

      <style>{`
        .qr-menu-page {
          --green: #e5430d;
          --green-deep: #0a0a09;
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
          height: clamp(90px, 18vw, 120px);
          min-height: unset;
          margin: 0 -10px;
          overflow: hidden;
          position: relative;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: transparent;
        }

        .hero__image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center 40%;
        }

        .brand-card {
          display: grid;
          justify-items: center;
          margin-top: -38px;
          position: relative;
          z-index: 2;
          color: #ffffff;
          text-align: center;
        }

        .brand-logo {
          width: 76px;
          height: 76px;
          display: grid;
          place-items: center;
          border: 4px solid #ffffff;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22);
        }

        .brand-logo img {
          width: 60px;
          height: auto;
          max-height: 54px;
          object-fit: contain;
        }

        .brand-card p {
          margin: 6px 0 2px;
          font: 900 0.7rem/1 Arial, sans-serif;
          letter-spacing: 0.14em;
        }

        .brand-card h1 {
          margin: 0;
          font-size: 1.2rem;
          line-height: 1.1;
          letter-spacing: 0;
        }

        .menu-toggle {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 14px;
        }

        .menu-toggle__button {
          min-height: 42px;
          border: 1px solid rgba(255, 248, 188, 0.58);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.14);
          color: #ffffff;
          font: 900 0.76rem/1 Arial, sans-serif;
          transition: transform 180ms ease, background 180ms ease, color 180ms ease, box-shadow 180ms ease;
        }

        .menu-toggle__button--active {
          background: linear-gradient(180deg, var(--cream), var(--cream-soft));
          color: var(--green-deep);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);
        }

        .menu-toggle__button:active {
          transform: scale(0.98);
        }

        .menu-panel {
          margin-top: 10px;
          padding: 14px 12px 13px;
          border-radius: 18px;
          background: linear-gradient(180deg, var(--cream), var(--cream-soft));
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
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

        .menu-search {
          display: grid;
          gap: 6px;
          margin-top: 12px;
          color: var(--green-deep);
          font: 900 0.68rem/1 Arial, sans-serif;
          text-transform: uppercase;
        }

        .menu-search input {
          width: 100%;
          min-height: 40px;
          border: 1px solid rgba(23, 99, 38, 0.22);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.58);
          color: var(--ink);
          font: 800 0.84rem/1 Arial, sans-serif;
          outline: 0;
          padding: 0 14px;
        }

        .menu-search input:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.18);
        }

        .category-slider {
          display: flex;
          gap: 10px;
          margin: 12px -12px 0;
          overflow-x: auto;
          padding: 0 12px 10px;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
        }

        .category-slider::-webkit-scrollbar {
          display: none;
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
          cursor: pointer;
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

        .slider-track {
          height: 4px;
          background: rgba(34, 24, 5, 0.12);
          border-radius: 99px;
          margin: 2px 4px 10px;
          overflow: hidden;
          position: relative;
        }

        .slider-thumb {
          height: 100%;
          background: linear-gradient(90deg, #328f3f, #d4af37);
          border-radius: 99px;
          transition: width 120ms ease, margin-left 120ms ease;
          min-width: 20%;
        }

        .category-view {
          animation: category-in 160ms ease;
        }


        .category-view h3 {
          margin: 12px 0 7px;
          color: var(--green-deep);
          font-size: 1.04rem;
          line-height: 1;
          letter-spacing: 0;
        }

        .dish-row,
        .serving-size-header {
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

        .dish-row i,
        .serving-size-header i {
          height: 1px;
          border-bottom: 1px dotted rgba(34, 24, 5, 0.5);
          transform: translateY(-3px);
        }

        .serving-size-header {
          min-height: 26px;
          color: var(--green-deep);
          font-size: 0.7rem;
          text-transform: none;
        }

        .dish-row strong,
        .drink-price,
        .serving-size-columns {
          color: var(--green-deep);
          text-align: right;
          white-space: nowrap;
        }

        .drink-price {
          display: grid;
          gap: 1px;
          font-size: 0.7rem;
        }

        .drink-price--columns,
        .serving-size-columns {
          display: grid;
          grid-template-columns: repeat(5, 34px);
          gap: 4px;
          font-size: 0.62rem;
        }

        .drink-price b {
          font-weight: 900;
        }

        .empty-state {
          margin: 16px 0 2px;
          color: var(--muted);
          font: 800 0.82rem/1.4 Arial, sans-serif;
          text-align: center;
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

        @media (min-width: 375px) {
          .hero {
            height: clamp(95px, 26vw, 110px);
          }

          .brand-card {
            margin-top: -42px;
          }

          .brand-logo {
            width: 84px;
            height: 84px;
          }

          .brand-logo img {
            width: 66px;
            max-height: 60px;
          }

          .brand-card p {
            margin-top: 7px;
            font-size: 0.74rem;
          }

          .brand-card h1 {
            font-size: 1.27rem;
          }
        }

        @media (min-width: 414px) {
          .hero {
            height: clamp(110px, 27vw, 120px);
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
            height: clamp(120px, 18vw, 140px);
            border-radius: 18px 18px 0 0;
          }
        }
      `}</style>
    </main>
  );
}
