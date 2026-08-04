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

const nonVegMenuSections = [
  {
    id: "appetizers",
    title: "APPETIZERS",
    items: [
      { name: "RUSSIAN SALAD", price: "180" },
      { name: "CEASAR SALAD", price: "180" },
      { name: "PAPAD/DRY/MASALA/ ROASTED", price: "90" },
      { name: "PEANUT/MASALA/ROASTED/FRY", price: "90" },
      { name: "FRENCH FRIES", price: "150" },
      { name: "GP DRY WITH CHILLY GARLIC", price: "150" },
      { name: "ONION PAKODA/ CHILLY PAKODA", price: "150" },
      { name: "PANEER PAKODA/CAPSICUM PAKODA", price: "180" },
      { name: "GREEN SALAD", price: "90" }
    ]
  },
  {
    id: "veg-chinese-soups",
    title: "VEG CHINESE SOUPS",
    items: [
      { name: "VEG SWEET CORN SOUP", price: "150" },
      { name: "VEG MANCHOW SOUP", price: "150" },
      { name: "VEG HOT AND SOUR SOUP", price: "150" },
      { name: "VEG LEMON CORIANDER SOUP", price: "140" }
    ]
  },
  {
    id: "non-veg-chinese-soups",
    title: "NON VEG CHINESE SOUPS",
    items: [
      { name: "CHICKEN SWEET CORN SOUP", price: "160" },
      { name: "CHICKEN MANCHOW SOUP", price: "170" },
      { name: "CHICKEN HOT AND SOUR SOUP", price: "160" },
      { name: "CHICKEN LEMON CORIANDER SOUP", price: "160" },
      { name: "CHICKEN LUNG FUNG SOUP", price: "160" },
      { name: "CHICKEN CLEAR SOUP", price: "150" },
      { name: "MUTTON CLEAR SOUP", price: "210" }
    ]
  },
  {
    id: "contiential-veg-soups",
    title: "CONTIENTIAL VEG SOUPS",
    items: [
      { name: "CREAM OF VEG SOUP", price: "180" },
      { name: "CREAM OF TOMATO SOUP", price: "160" }
    ]
  },
  {
    id: "contiential-soups-non-veg",
    title: "CONTIENTIAL SOUPS  NON VEG",
    items: [
      { name: "CREAM OF CHICKEN SOUP", price: "180" }
    ]
  },
  {
    id: "veg-north-indian-shorba",
    title: "VEG NORTH INDIAN  SHORBA",
    items: [
      { name: "TOMOTO SHORBA", price: "140" },
      { name: "PALAK SHORBA", price: "140" },
      { name: "DAL SHORBA", price: "150" }
    ]
  },
  {
    id: "northa-indian-shorba-non-veg",
    title: "NORTHA INDIAN SHORBA NON VEG",
    items: [
      { name: "CHICKEN SHORBA", price: "140" },
      { name: "MUTTON SHORBA", price: "210" }
    ]
  },
  {
    id: "veg-chinese-starters",
    title: "VEG CHINESE STARTERS",
    items: [
      { name: "MUSHROOM : CHILLY / 65 / PEPPER DRY / MANCHURIAN", price: "272" },
      { name: "PANEER : CHILLY / 65 / PEPPER DRY / MANCHURIAN", price: "270" },
      { name: "BABYCORN : CHILLY / 65 / PEPPER DRY / MANCHURIAN", price: "230" },
      { name: "VEG BALL : CHILLY / 65 / PEPPER DRY / MANCHURIAN", price: "230" },
      { name: "CRISPY FRIED BABYCORN", price: "230" },
      { name: "CRISPY CORN SALT & PEPPER / SCEHZWAN DRY", price: "180 / 170" },
      { name: "GOBI MANCHURIAN /  CHLI", price: "210 / 220" },
      { name: "GOBI 65/ PEPPER DRY", price: "220 / 220" }
    ]
  },
  {
    id: "non-veg-chinese-starters",
    title: "NON VEG CHINESE STARTERS",
    items: [
      { name: "CHICKEN  : CHILLY / 65 / PEPPER DRY / MANCHURIAN", price: "300" },
      { name: "MUTTON  : CHILLY / PEPPER DRY", price: "500" },
      { name: "PRAWNS : CHILLY / 65 / PEPPER DRY / MANCHURIAN", price: "500" },
      { name: "CHICKEN LOLLY POP / DRUMS OF HEAVEN", price: "330/350" },
      { name: "KUNG PAO CHICKEN / DRAGON CHICKEN", price: "330 / 300" },
      { name: "LEMON CHICKEN / SHANGAI CHICKEN", price: "280 / 300" },
      { name: "EGG CHILLY / MANCHURIAN / 65 / PEPPER DRY", price: "240" }
    ]
  },
  {
    id: "contiential-veg-starters",
    title: "CONTIENTIAL VEG STARTERS",
    items: [
      { name: "RING ONION", price: "180" },
      { name: "PERI -PERI PANEER", price: "270" }
    ]
  },
  {
    id: "contiential-starters-in-non-veg",
    title: "CONTIENTIAL STARTERS IN NON VEG",
    items: [
      { name: "CHICKEN  NUGGETS", price: "330" },
      { name: "CHICKEN POPCORN", price: "350" }
    ]
  },
  {
    id: "veg-coastal-starters",
    title: "VEG COASTAL STARTERS",
    items: [
      { name: "PANEER GHEE ROAST", price: "350" },
      { name: "MUSHROOM GHEE ROAST", price: "350" },
      { name: "PANNER SUKKA", price: "350" },
      { name: "MUSHROOM SUKKA", price: "350" }
    ]
  },
  {
    id: "non-veg-coastal-starters-and-curries",
    title: "NON VEG COASTAL STARTERS AND CURRIES",
    items: [
      { name: "ANGEL FISH / TAWA / RAWA / MASALA FRY / CURRY", price: "SEASONAL" },
      { name: "POMFRET / TAWA / RAWA / MASALA FRY  / CURRY", price: "SEASONAL" },
      { name: "BANGUDE / TAWA / RAWA / MASALA FRY / CURRY", price: "SEASONAL" },
      { name: "PRAWNS / TAWA /RAWA / MASALA FRY / CURRY", price: "SEASONAL" },
      { name: "SILVER FISH / RAWA / TAWA / CURRY", price: "SEASONAL" },
      { name: "MUTTON GHEE ROAST / MUTTON SUKKA", price: "473 / 452" },
      { name: "CHICKEN GHEE ROAST / CHICKEN SUKKA", price: "368 / 315" },
      { name: "PRAWNS GHEE ROAST", price: "500" },
      { name: "FISH GHEE ROAST", price: "420" },
      { name: "CHICKEN TAWA ROAST", price: "315" }
    ]
  },
  {
    id: "north-indian-veg-starters",
    title: "NORTH INDIAN VEG STARTERS",
    items: [
      { name: "MUSHROOM PEPPER FRY", price: "272" },
      { name: "PANEER PEPPER FRY", price: "270" },
      { name: "GOBI PEPPER FRY", price: "250" }
    ]
  },
  {
    id: "north-indian-non-veg-starters",
    title: "NORTH INDIAN NON VEG STARTERS",
    items: [
      { name: "CHICKEN FRY / CHICKEN PEPPER FRY", price: "320/263" },
      { name: "MUTTON FRY / MUTTON PEPPER FRY", price: "368/368" },
      { name: "EGG FRY / EGG PEPPER FRY / EGG PAKODA", price: "210/210" },
      { name: "EGG OMELET / EGG BURJI", price: "120/130" },
      { name: "BOILED EGG", price: "80" },
      { name: "PRAWNS PEPPER FRY / PRAWNS KOLIWADA", price: "500/500" }
    ]
  },
  {
    id: "tandoori-starters-in-veg",
    title: "TANDOORI STARTERS IN VEG",
    items: [
      { name: "PANEER TIKKA", price: "290" },
      { name: "PANEER PAHADI TIKKA", price: "290" },
      { name: "PANEER AACHARI TIKKA", price: "290" },
      { name: "HARA BHARA KEBAB", price: "270" },
      { name: "STUFFED MUSHROOM TIKKA", price: "350" },
      { name: "PANEER MALAI  TIKKA", price: "330" },
      { name: "TANDOORI VEG PLATTER", price: "600" }
    ]
  },
  {
    id: "tandoori-starters-non-veg",
    title: "TANDOORI STARTERS NON VEG",
    items: [
      { name: "MURGH  TIKKA", price: "350" },
      { name: "MURGH ANGARA KEBAB", price: "350" },
      { name: "MURGH BANJARA KEBAB", price: "350" },
      { name: "MURGH TANDOORI HALF / FULL", price: "330 / 600" },
      { name: "MURGH PESHAWARI KEBAB", price: "350" },
      { name: "MURGH PAHADI KEBAB", price: "350" },
      { name: "KALMI KEBAB(2 PIECES)", price: "350" },
      { name: "MURGH AFGHANI KEBAB", price: "410" },
      { name: "MURGH RESHMI KABAB", price: "370" },
      { name: "TANDOORI PRAWNS", price: "500" },
      { name: "PRAWN KALI MIRCH TIKKA", price: "500" },
      { name: "TANDOORI MIX NON VEG PLATTER", price: "1250" },
      { name: "TANDOORI CHICKEN PLATTER", price: "900" }
    ]
  },
  {
    id: "veg-chinese-main-course",
    title: "VEG CHINESE MAIN COURSE",
    items: [
      { name: "VEG AMERICAN CHOPSY", price: "300" },
      { name: "VEG TREPAL SCHEZWAN FRID RICE", price: "300" },
      { name: "VEG HAKKA NOODLES / SCHEZWAN", price: "250 / 242" },
      { name: "PANEER NOODLES / SCHEZWAN", price: "260 / 270" },
      { name: "MUSHROOM NOODLES / SCHEZWAN", price: "260 / 270" },
      { name: "VEG FRID RICE /SCHEZWAN", price: "240/ 250" },
      { name: "MUSHROOM FRID RICE /SCHEZWAN", price: "240 / 250" },
      { name: "BABYCORN  FRID RICE /SCHEZWAN", price: "230 / 240" },
      { name: "PANEER FRIED RICE /SCHEZWAN", price: "250 / 260" },
      { name: "ONION CHILLI FRIED RICE", price: "240" }
    ]
  },
  {
    id: "non-veg-chinese-main-course",
    title: "NON VEG CHINESE MAIN COURSE",
    items: [
      { name: "CHICKEN FRIED RICE / SCHEZWAN", price: "300/320" },
      { name: "MIX NON VEG FRIED RICE / SCHEZWAN", price: "400/430" },
      { name: "EGG FRIED RICE / SCHEZWAN", price: "250 / 260" },
      { name: "PRAWNS FRIED RICE / SCHEZWAN", price: "500 / 520" },
      { name: "MEXICAN CHICKEN FRIED RICE/ SCHEZWAN", price: "350 / 370" },
      { name: "AMERICAN CHICKEN CHOUPSEY", price: "400" },
      { name: "AMERICAN PRAWNS CHOUPSEY", price: "600" },
      { name: "CHICKEN TRIPLE SCHEZWAN FRIED RICE", price: "400" },
      { name: "EGG TRIPLE SCHEZWAN FRIED RICE", price: "300" },
      { name: "CHICKEN NOODLES/SCHEZWAN", price: "300/320" },
      { name: "EGG NOODLES. /  SCHEZWAN", price: "250/270" },
      { name: "PRAWN NOODLES", price: "550" },
      { name: "MIX NON VEG NOODLES", price: "500" }
    ]
  },
  {
    id: "north-indian-main-course-gravies",
    title: "NORTH INDIAN MAIN COURSE GRAVIES",
    items: [
      { name: "VEG KADAI / VEG KOLHAPURI", price: "250/260" },
      { name: "VEG HYEDRABADI / VEG LABABDAR", price: "270/280" },
      { name: "SUBZI DIWANI HANDI / VEG JAIPURI", price: "270/240" },
      { name: "VEG ZALFRIEZI / VEG DOPEZA", price: "230/270" },
      { name: "VEG KOFTHA / MALAI KOFTA", price: "294/ 320" },
      { name: "PLAIN PALAK / PALAK PANEER", price: "280 / 290" },
      { name: "PANEER TIKKA MASALA / PANEER BUTTER MASALA", price: "300 / 300" },
      { name: "PANEER HYEDRABADI / PANEER KOLHAPURI", price: "320 / 300" },
      { name: "VEG SHAHI KURMA / PANEER SHAHI KURMA", price: "290 / 330" },
      { name: "KAJU MASALA / PANEER KAJU MASALA", price: "300/ 350" },
      { name: "DAL FRY / DAL KOLAPURI / BUTTER DAL FRY", price: "206" },
      { name: "DAL TADKA", price: "221" }
    ]
  },
  {
    id: "north-indian-non-veg-gravy",
    title: "NORTH INDIAN NON VEG  GRAVY",
    items: [
      { name: "CHICKEN MASALA / CHICKEN KOLHAPURI", price: "441/ 300" },
      { name: "CHICKEN KADAI / CHICKEN HYDRABADI", price: "300/350" },
      { name: "CHICKEN LABABDAR / CHICKEN TIKKA MASAL", price: "320/350" },
      { name: "BUTTER CHICKEN / CHICKEN CHETTINAD", price: "399/360" },
      { name: "CHICKEN RARA / CHCIKEN LAL MIRCH MASAL", price: "320/ 350" },
      { name: "MUTTON MASALA/ KADHAI / KHOLAPURI", price: "450" },
      { name: "MUTTON RARA / MUTTON ROGAN JOSH", price: "470/500" },
      { name: "EGG MAKHANWALA / MAHARAJA", price: "280" },
      { name: "EGG MASALA / EGG KOLHAPURI", price: "280" },
      { name: "EGG HYDRABADI / EGG KADHAI", price: "280" }
    ]
  },
  {
    id: "veg-biryani",
    title: "VEG BIRYANI",
    items: [
      { name: "VEG BIRYANI / PEAS PULAO", price: "250" },
      { name: "MUSHROOM BIRYANI / PANEER BIRYANI", price: "280" },
      { name: "LEMON RICE / MASALA RICE", price: "250" },
      { name: "GHEE RICE / JEERA RICE", price: "270/ 250" },
      { name: "DAL KICHADI / PALAK KICHADI", price: "250" },
      { name: "CURD RICE / SPL CURD RICE", price: "160 / 270" }
    ]
  },
  {
    id: "non-veg-biryani",
    title: "NON VEG BIRYANI",
    items: [
      { name: "CHICKEN BIRYANI", price: "320" },
      { name: "MUTTON BIRYANI", price: "500" },
      { name: "EGG BIRYANI", price: "280" },
      { name: "PRAWNS BIRYANI", price: "550" },
      { name: "BIRYANI RICE", price: "200" }
    ]
  },
  {
    id: "veg-costal-curry",
    title: "VEG COSTAL CURRY",
    items: [
      { name: "MANGOLRIAN CURRY", price: "250" }
    ]
  },
  {
    id: "non-veg-costal-curry",
    title: "NON VEG COSTAL CURRY",
    items: [
      { name: "EGG CURRY", price: "260" },
      { name: "CHICKEN KUNDAPURI", price: "399" },
      { name: "MUTTON KUNDAPURI", price: "500" },
      { name: "PRAWN CURRY", price: "500" }
    ]
  },
  {
    id: "indian-breads",
    title: "INDIAN BREADS",
    items: [
      { name: "ROTI / BUTTER ROTI", price: "40/50" },
      { name: "NAAN / BUTTER NAAN", price: "63/60" },
      { name: "GARLIC NAAN / BUTTER GARLIC NAAN", price: "60/70" },
      { name: "MISSI ROTI", price: "70" },
      { name: "LAAL MIRCH ROTI", price: "50" },
      { name: "HARI MIRCH ROTI", price: "50" },
      { name: "LACCHA PARATHA", price: "60" },
      { name: "KULCHA / BUTTER KULCHA", price: "50/60" },
      { name: "VEG STUFFED KULCHA", price: "100" },
      { name: "ALOO PARATHA", price: "100" },
      { name: "PANEER PARATHA", price: "150" },
      { name: "STUFFED PARATHA", price: "90" },
      { name: "GOBI PARATHA", price: "100" }
    ]
  },
  {
    id: "desserts",
    title: "DESSERTS",
    items: [
      { name: "CHOICE OF ICECREAMS( FLAVOURED)", price: "90" },
      { name: "FRIED ICECREAM", price: "236" },
      { name: "HOT CHOCOLATE  FLAZED", price: "200" },
      { name: "GADBAD ICECREAM", price: "236" },
      { name: "BROWNIE ICECREAM", price: "236" },
      { name: "GAJAR KA HALWA", price: "95" },
      { name: "FRUIT SALAD WITH ICECREAM", price: "177" },
      { name: "DRY FRUIT WITH ICECREAM", price: "280" },
      { name: "GULAB JAMUN", price: "84" },
      { name: "GAJAR KA HALWA WITH ICECREAM", price: "190" },
      { name: "CHOICES OF MILKSHAKES", price: "180" },
      { name: "CHOICES OF FRESH FRUIT JUICES", price: "110" }
    ]
  }
];
export default nonVegMenuSections;
