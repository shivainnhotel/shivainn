// Auto-extracted from the live site's hardcoded menu arrays.
// banner/icon/assets values are not needed for seeding the database
// (admin panel never touches images), so they resolve to a harmless empty string.

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
  banner?: string;
  icon?: string;
  items: MenuItem[];
};

const rs = "₹";
const assets: Record<string, string> = new Proxy({}, { get: () => "" });

const drinksMenuSections = [
  {
    id: "blended-scotch-whisky",
    title: "BLENDED SCOTCH WHISKY",
    items: [
      { name: "BLENDRS PRIDE 750ML", price_750ml: "1760", price_180ml: "450", price_90ml: "225", price_60ml: "150", price_30ml: "75" },
      { name: "CHIVAS REGEL 750ML 12Y", price_750ml: "4915", price_180ml: "1230", price_90ml: "620", price_60ml: "410", price_30ml: "210" },
      { name: "BLACK LEBEL 750ML", price_750ml: "4915", price_180ml: "1230", price_90ml: "620", price_60ml: "410", price_30ml: "210" },
      { name: "VAT 69 750ML", price_750ml: "2920", price_180ml: "730", price_90ml: "370", price_60ml: "250", price_30ml: "125" },
      { name: "BLACK DOG RESERVE 750ML", price_750ml: "2920", price_180ml: "730", price_90ml: "370", price_60ml: "250", price_30ml: "125" },
      { name: "100 PIPERS 12 YERS 750ML", price_750ml: "4270", price_180ml: "1070", price_90ml: "535", price_60ml: "360", price_30ml: "180" },
      { name: "TEACHERS HIGH LAND CREAM 750ML", price_750ml: "2930", price_180ml: "730", price_90ml: "370", price_60ml: "250", price_30ml: "125" },
      { name: "100 PIPERS DELUX 750ML", price_750ml: "2920", price_180ml: "730", price_90ml: "370", price_60ml: "250", price_30ml: "125" },
      { name: "BLACK & WHITE 750ML", price_750ml: "2920", price_180ml: "730", price_90ml: "370", price_60ml: "250", price_30ml: "125" },
      { name: "RED LEBEL 750ML", price_750ml: "3650", price_180ml: "920", price_90ml: "460", price_60ml: "310", price_30ml: "155" },
      { name: "BALLENTINES 750ML", price_750ml: "3510", price_180ml: "880", price_90ml: "440", price_60ml: "300", price_30ml: "150" },
      { name: "DEWARS WHITE LEBEL 750ML", price_750ml: "2920", price_180ml: "730", price_90ml: "370", price_60ml: "250", price_30ml: "125" },
      { name: "BLENDERS PRIDE RESERVE 750ML", price_750ml: "1950", price_180ml: "490", price_90ml: "250", price_60ml: "170", price_30ml: "85" },
      { name: "TEACHERS 50 750ML", price_750ml: "4110", price_180ml: "1030", price_90ml: "515", price_60ml: "340", price_30ml: "170" },
      { name: "JAMESON IRISH 750ML", price_750ml: "4270", price_180ml: "1070", price_90ml: "535", price_60ml: "360", price_30ml: "280" },
      { name: "BLACK DOG GOLD RESERVE 750ML", price_750ml: "4300", price_180ml: "1080", price_90ml: "540", price_60ml: "360", price_30ml: "180" }
    ]
  },
  {
    id: "indian-whisky",
    title: "INDIAN WHISKY",
    items: [
      { name: "AMRUT FUSION 750ML", price_750ml: "4300", price_180ml: "1080", price_90ml: "540", price_60ml: "360", price_30ml: "180" },
      { name: "AMRUT AMULGAM 750ML", price_750ml: "3750", price_180ml: "940", price_90ml: "470", price_60ml: "320", price_30ml: "160" },
      { name: "MCDOWELL'S NO 1 LUXURY 750ML", price_750ml: "1160", price_180ml: "300", price_90ml: "150", price_60ml: "100", price_30ml: "50" },
      { name: "ROYAL CHALLENGE 750ML", price_750ml: "1510", price_180ml: "390", price_90ml: "195", price_60ml: "130", price_30ml: "65" },
      { name: "ROYAL STAG 750ML", price_750ml: "1510", price_180ml: "390", price_90ml: "195", price_60ml: "130", price_30ml: "65" }
    ]
  },
  {
    id: "brandy",
    title: "BRANDY",
    items: [
      { name: "MANSION HOUSE 750ML", price_750ml: "1280", price_180ml: "320", price_90ml: "160", price_60ml: "110", price_30ml: "55" },
      { name: "MORPHOUS XO PREMIUM 750ML", price_750ml: "1710", price_180ml: "430", price_90ml: "215", price_60ml: "140", price_30ml: "70" }
    ]
  },
  {
    id: "gin",
    title: "GIN",
    items: [
      { name: "BOMBAY SAPPHIRE 750ML", price_750ml: "4280", price_180ml: "1070", price_90ml: "535", price_60ml: "360", price_30ml: "180" }
    ]
  },
  {
    id: "tequilla",
    title: "TEQUILLA",
    items: [
      { name: "CAMINO REAL 750ML", price_750ml: "4280", price_180ml: "1070", price_90ml: "535", price_60ml: "360", price_30ml: "180" }
    ]
  },
  {
    id: "rum",
    title: "RUM",
    items: [
      { name: "OLD MONK XXX RUM 750ML", price_750ml: "1020", price_180ml: "260", price_90ml: "130", price_60ml: "90", price_30ml: "45" },
      { name: "CAPTAIN MORGAN 750ML", price_750ml: "1600", price_180ml: "400", price_90ml: "200", price_60ml: "140", price_30ml: "70" },
      { name: "OLD MONK LEGEND 750ML", price_750ml: "1880", price_180ml: "470", price_90ml: "240", price_60ml: "160", price_30ml: "80" },
      { name: "BACARDI WHITE RUM 750ML", price_750ml: "2320", price_180ml: "580", price_90ml: "290", price_60ml: "200", price_30ml: "100" },
      { name: "OLD MONK SUPREME 750ML", price_750ml: "1600", price_180ml: "400", price_90ml: "200", price_60ml: "140", price_30ml: "70" }
    ]
  },
  {
    id: "vodka",
    title: "VODKA",
    items: [
      { name: "SMIRN OFF ORANGE 750ML", price_750ml: "2410", price_180ml: "610", price_90ml: "305", price_60ml: "200", price_30ml: "100" },
      { name: "ABSOLUTE 750ML", price_750ml: "4170", price_180ml: "1050", price_90ml: "525", price_60ml: "350", price_30ml: "175" },
      { name: "MAGIC MOMENT GRAIN 750ML", price_750ml: "1600", price_180ml: "400", price_90ml: "200", price_60ml: "140", price_30ml: "70" }
    ]
  },
  {
    id: "wine",
    title: "WINE",
    items: [
      { name: "FREATELLI 750ML", price_750ml: "1255", price_180ml: "320", price_90ml: "160", price_60ml: "110", price_30ml: "55" },
      { name: "BIG BANYAN 750ML", price_750ml: "1180", price_180ml: "300", price_90ml: "150", price_60ml: "100", price_30ml: "50" },
      { name: "NOI 750ML", price_750ml: "1305", price_180ml: "330", price_90ml: "165", price_60ml: "110", price_30ml: "55" }
    ]
  },
  {
    id: "beers",
    title: "BEERS",
    items: [
      { name: "K.F PRE 650ML", price: "150" },
      { name: "K.F STRONG 650ML", price: "240" },
      { name: "TUBORG GREEN 650ML", price: "220" },
      { name: "BUD PRE 650ML", price: "280" },
      { name: "K.F ULTRA 650ML", price: "210" },
      { name: "BUD MAG 650ML", price: "340" },
      { name: "ELEPHANT 650ML", price: "320" },
      { name: "TUBORG STRONG 650ML", price: "220" },
      { name: "HEOGARDEN 500ML CAN", price: "220" },
      { name: "K.F PRE 330ML", price: "80" },
      { name: "BUD PRE 330ML", price: "160" },
      { name: "CORONA 330ML", price: "170" },
      { name: "BUD MAG 330ML", price: "190" },
      { name: "KF STRONG 330ML", price: "110" }
    ]
  },
  {
    id: "mocktails",
    title: "MOCKTAILS",
    items: [
      { name: "VIRGIN MERRY CASINO", price: "250" },
      { name: "KIWI - KWICK", price: "250" },
      { name: "VIRGIN MOJITO", price: "250" },
      { name: "STRAWBERRY FIZZ", price: "250" },
      { name: "PINEAPPLE SUNSET", price: "250" },
      { name: "BLUE- BLAST", price: "250" },
      { name: "BY THE POOL", price: "250" },
      { name: "FRUIT PUNCH", price: "250" },
      { name: "CHOCOLATE MOGIS", price: "250" },
      { name: "CINDRELLA", price: "250" },
      { name: "HIGH BLUE", price: "250" },
      { name: "ELDERFLOWER FIZZ", price: "250" },
      { name: "WATERMELON CHILLER", price: "250" },
      { name: "CITRUS BLOSSOM", price: "300" },
      { name: "SUMMER OF 69", price: "300" },
      { name: "NUKKAD", price: "300" }
    ]
  },
  {
    id: "cocktails-whisky-based",
    title: "COCKTAILS — WHISKY BASED",
    items: [
      { name: "MANHATTAN PERFECT", price: "350" },
      { name: "TRACK LIGHTING", price: "350" },
      { name: "WHISKY SOUR", price: "400" },
      { name: "ISLAND WHISKY", price: "350" },
      { name: "DEVILS CHILLED", price: "450" },
      { name: "JOHNIE GINGER", price: "450" }
    ]
  },
  {
    id: "cocktails-vodka-based",
    title: "COCKTAILS — VODKA BASED",
    items: [
      { name: "CAPRISKO", price: "350" },
      { name: "SEX ON THE BEACH", price: "350" },
      { name: "BLOODY MARRY", price: "350" },
      { name: "GREEN ISLAND", price: "350" },
      { name: "BROKEN HEART", price: "350" },
      { name: "COSMOPOLITON", price: "350" },
      { name: "BLACK RUSSIAN", price: "350" },
      { name: "WEDNESDAY BLUE", price: "350" },
      { name: "SCREW DRIVER", price: "350" },
      { name: "BLUE LOGAN", price: "350" }
    ]
  },
  {
    id: "cocktails-rum-based",
    title: "COCKTAILS — RUM BASED",
    items: [
      { name: "DAIQUERE", price: "350" },
      { name: "PINACOLODA", price: "350" },
      { name: "BEAUTY ON THE BEACH", price: "350" },
      { name: "MOJITO", price: "350" }
    ]
  },
  {
    id: "cocktails-brandy-based",
    title: "COCKTAILS — BRANDY BASED",
    items: [
      { name: "AMERICAN BEAUTY", price: "350" },
      { name: "HOT TODDY", price: "350" },
      { name: "SIDE CAR", price: "350" }
    ]
  },
  {
    id: "cocktails-tequilla-based",
    title: "COCKTAILS — TEQUILLA BASED",
    items: [
      { name: "JOLOPINA MARGARITA", price: "350" },
      { name: "TEQUILLA SUNRISE", price: "350" },
      { name: "MARGARITA", price: "350" },
      { name: "PALOMA", price: "350" }
    ]
  },
  {
    id: "cocktails-beer-based",
    title: "COCKTAILS — BEER BASED",
    items: [
      { name: "FIRE EXTINGUISHER", price: "450" },
      { name: "SHANDY", price: "350" },
      { name: "WIDE FIRE", price: "450" }
    ]
  },
  {
    id: "cocktails-wine-based",
    title: "COCKTAILS — WINE BASED",
    items: [
      { name: "MIMOSA", price: "350" },
      { name: "SANGRIA", price: "350" },
      { name: "WHITE SANGRIA", price: "350" },
      { name: "ROSE SANGRIA", price: "400" }
    ]
  },
  {
    id: "strong-cocktails",
    title: "STRONG COCKTAILS",
    items: [
      { name: "LIT", price: "700" },
      { name: "LIT ( FLAVOURS -ORANGE , CRANBERRY , PINEAPPLE )", price: "700" },
      { name: "BULL FROG", price: "750" }
    ]
  },
  {
    id: "shots",
    title: "SHOTS",
    items: [
      { name: "KAMI KAZE", price: "250" },
      { name: "BLUE KAMI KAZE", price: "250" },
      { name: "BRAIN HAEMORRHAGE", price: "250" },
      { name: "B52", price: "300" },
      { name: "JAGERBOMB", price: "650" },
      { name: "BMW", price: "450" }
    ]
  },
  {
    id: "cold-zone",
    title: "COLD ZONE",
    items: [
      { name: "MINERAL WATER 1LR", price: "40" },
      { name: "SODA 300ML", price: "40" },
      { name: "SOFT DRINKS", price: "40" },
      { name: "TONIC WATER", price: "100" },
      { name: "GINGER ALE", price: "100" },
      { name: "RED JUICE", price: "130" },
      { name: "FRESH LIME WATER", price: "90" },
      { name: "FRESH LIME SODA", price: "100" }
    ]
  }
];
export default drinksMenuSections;
