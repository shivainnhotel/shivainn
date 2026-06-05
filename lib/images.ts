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
    juniorSuite: "/room/DSC01192 (1)_result.webp",
    deluxe: "/room/DSC01110_result.webp",
    suite: "/room/DSC01110_result.webp",
    twin: "/room/DSC00959_result.webp",
  },

  roomGalleries: {
    juniorSuite: [
      "/room/DSC01192 (1)_result.webp",
      "/room/DSC01264_result.webp",
      "/room/DSC01234_result.webp",
      "/room/DSC01231_result.webp",
    ],

    deluxe: [
      "/room/DSC01147_result.webp",
      "/room/DSC01166_result.webp",
      "/room/DSC01178_result.webp",
      "/room/DSC01168_result.webp",
    ],

    suite: [
      "/room/DSC01110_result.webp",
      "/room/DSC01108_result.webp",
      "/room/DSC01100_result.webp",
      "/room/DSC01065_result.webp",
    ],

    twin: [
      "/room/DSC00959_result.webp",
      "/room/DSC00982_result.webp",
      "/room/DSC01004_result.webp",
      "/room/DSC00989_result.webp",
    ],
  },
  restaurant: {
    main: u("photo-1555396273-367ea4eb4db5"),
    veg: "/images/veg.webp",
    gallery: [
      "/restaurant/DSC01455_result.webp",
      "/restaurant/DSC01498_result.webp",
      "/restaurant/DSC01475_result.webp",
      "/restaurant/DSC01349_result.webp",
      "/restaurant/DSC01511_result.webp",
    ],
  },
  bar: u("photo-1572116469696-31de0f17cc34"),
  barGallery: [
    "/bar/DSC01539_result.webp",
    "/bar/DSC01613_result.webp",
    "/bar/DSC01616_result.webp",
    "/bar/DSC01551_result.webp",
    "/bar/DSC01593_result.webp",
    "/bar/DSC01629 (1)_result.webp",

  ],
  banquets: {
    lotus: u("photo-1519167758481-83f550bb49b3"),
    pearl: u("photo-1464366400600-7168b8af9bc3"),
    boardroom: u("photo-1517502884422-41eaead166d4"),
    venues: {
      lotus: [
        "/banquet/Untitled design (14) (1)_result.webp",
        "/banquet/DSC01271_result.webp",
        "/banquet/DSC00951 (1)_result.webp",
      ],
      pearl: [
        "/banquet/DSC01555 (2)_result.webp",
        "/banquet/DSC01564_result.webp",
        "/banquet/DSC01555 (2)_result.webp",

      ],
      boardroom: [
        "/banquet/DSC00879 (1)_result.webp",
        "/banquet/DSC00904_result.webp",
        "/banquet/DSC00924_result.webp",
      ],
    },
    gallery: [
      "/images/hall.jpg",
      u("photo-1519167758481-83f550bb49b3"),
      u("photo-1517502884422-41eaead166d4"),
    ],
  },
  gallery: [
    "/exterior/DSC01348_result.webp", // Hotel Front
    "/exterior/DSC00830_result.webp", // Building Exterior
    "/exterior/DSC01293_result.webp", // Entrance Night View
    "/exterior/DSC01287_result.webp", // Lobby Seating
    "/exterior/DSC00929_result.webp", // Corridor
    "/exterior/DSC00899_result.webp", // Reception Entrance
    "/exterior/DSC00900_result.webp", // Reception Counter
    "/exterior/DSC01468_result.webp", // Restaurant Counter
    "/exterior/DSC01435_result.webp", // Dining Area
    "/exterior/DSC01334_result.webp", // Lift Lobby
    "/exterior/DSC00923_result.webp", // Atrium Top View
    "/exterior/DSC00922_result.webp", // Atrium Interior
  ]
};
