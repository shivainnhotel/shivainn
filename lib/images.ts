export const blurData =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTAnIHZpZXdCb3g9JzAgMCAxNiAxMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTYnIGhlaWdodD0nMTAnIGZpbGw9JyNGOEY0RUMnLz48cmVjdCB5PSc2JyB3aWR0aD0nMTYnIGhlaWdodD0nNCcgZmlsbD0nI0M4QTk2QicgZmlsbC1vcGFjaXR5PScuMjUnLz48L3N2Zz4=";

const u = (id: string, params = "auto=format&fit=crop&w=1800&q=84") =>
  `https://images.unsplash.com/${id}?${params}`;

export const images = {
  hero: [
    "/images/exterior.jpg",
    "/images/executive.jpg",
    "/images/bardining.jpg",
    "/images/hall.jpg",
  ],

  exterior: "/images/exterior.jpg",
  rooms: {
    juniorSuite: "/images/roomjuinor.jpg",
    deluxe: "/images/roomdelux.jpg",
    suite: "/images/roomsuit.jpg",
    twin: "/images/roomdeluxtwin.jpg",
  },
  roomGalleries: {
    juniorSuite: [
      "/images/roomjuinor.jpg",
      "/images/roomsuit.jpg",
      "/images/roomdelux.jpg",
      "/images/exterior.jpg",
    ],
    deluxe: [
      "/images/roomdelux.jpg",
      "/images/roomdeluxtwin.jpg",
      "/images/roomjuinor.jpg",
      "/images/exterior1.JPG",
    ],
    suite: [
      "/images/roomsuit.jpg",
      "/images/roomjuinor.jpg",
      "/images/roomdelux.jpg",
      "/images/vegdining.jpg",
    ],
    twin: [
      "/images/roomdeluxtwin.jpg",
      "/images/roomdelux.jpg",
      "/images/roomsuit.jpg",
      "/images/exterior.jpg",
    ],
  },
  restaurant: {
    main: u("photo-1555396273-367ea4eb4db5"),
    veg: "/images/veg.webp",
    gallery: [
      "/images/vegdining.jpg",
      "/images/veg.webp",
      "/images/bardining.jpg",
    ],
  },
  bar: u("photo-1572116469696-31de0f17cc34"),
  barGallery: [
    "/images/bardining.jpg",
    u("photo-1572116469696-31de0f17cc34"),
    "/images/vegdining.jpg",
  ],
  banquets: {
    lotus: u("photo-1519167758481-83f550bb49b3"),
    pearl: u("photo-1464366400600-7168b8af9bc3"),
    boardroom: u("photo-1517502884422-41eaead166d4"),
    gallery: [
      "/images/hall.jpg",
      u("photo-1519167758481-83f550bb49b3"),
      u("photo-1517502884422-41eaead166d4"),
    ],
  },
  gallery: [
    u("photo-1542314831-068cd1dbfeeb"),
    u("photo-1590490360182-c33d57733427"),
    u("photo-1555396273-367ea4eb4db5"),
    u("photo-1572116469696-31de0f17cc34"),
    u("photo-1519167758481-83f550bb49b3"),
    u("photo-1560448204-e02f11c3d0e2")
  ]
};
