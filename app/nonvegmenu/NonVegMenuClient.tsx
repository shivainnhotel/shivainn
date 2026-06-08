"use client";

import { useEffect, useRef, useState } from "react";
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
      { name: "MUTTON CLEAR SOUP", price: "170" }
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
      { name: "MUTTON SHORBA", price: "170" }
    ]
  },
  {
    id: "veg-chinese-starters",
    title: "VEG CHINESE STARTERS",
    items: [
      { name: "MUSHROOM : CHILLY / 65 / PEPPER DRY / MANCHURIAN", price: "240" },
      { name: "PANEER : CHILLY / 65 / PEPPER DRY / MANCHURIAN", price: "250" },
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
      { name: "MUTTON GHEE ROAST / MUTTON SUKKA", price: "500 / 480" },
      { name: "CHICKEN GHEE ROAST / CHICKEN SUKKA", price: "450 / 400" },
      { name: "PRAWNS GHEE ROAST", price: "500" },
      { name: "FISH GHEE ROAST", price: "450" },
      { name: "CHICKEN TAWA ROAST", price: "330" }
    ]
  },
  {
    id: "north-indian-veg-starters",
    title: "NORTH INDIAN VEG STARTERS",
    items: [
      { name: "MUSHROOM PEPPER FRY", price: "260" },
      { name: "PANEER PEPPER FRY", price: "270" },
      { name: "GOBI PEPPER FRY", price: "250" }
    ]
  },
  {
    id: "north-indian-non-veg-starters",
    title: "NORTH INDIAN NON VEG STARTERS",
    items: [
      { name: "CHICKEN FRY / CHICKEN PEPPER FRY", price: "320/330" },
      { name: "MUTTON FRY / MUTTON PEPPER FRY", price: "280/280" },
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
      { name: "MURGH AFGHANI KEBAB", price: "350" },
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
      { name: "VEG HAKKA NOODLES / SCHEZWAN", price: "250 / 260" },
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
      { name: "SUBZI DIWANI HANDI / VEG JAIPURI", price: "270/280" },
      { name: "VEG ZALFRIEZI / VEG DOPEZA", price: "260/270" },
      { name: "VEG KOFTHA / MALAI KOFTA", price: "300/ 320" },
      { name: "PLAIN PALAK / PALAK PANEER", price: "280 / 290" },
      { name: "PANEER TIKKA MASALA / PANEER BUTTER MASALA", price: "300 / 300" },
      { name: "PANEER HYEDRABADI / PANEER KOLHAPURI", price: "320 / 300" },
      { name: "VEG SHAHI KURMA / PANEER SHAHI KURMA", price: "290 / 330" },
      { name: "KAJU MASALA / PANEER KAJU MASALA", price: "300/ 350" },
      { name: "DAL FRY / DAL KOLAPURI / DAL TADKA / BUTTER DAL FRY", price: "240" }
    ]
  },
  {
    id: "north-indian-non-veg-gravy",
    title: "NORTH INDIAN NON VEG  GRAVY",
    items: [
      { name: "CHICKEN MASALA / CHICKEN KOLHAPURI", price: "290/ 300" },
      { name: "CHICKEN KADAI / CHICKEN HYDRABADI", price: "300/350" },
      { name: "CHICKEN LABABDAR / CHICKEN TIKKA MASAL", price: "320/350" },
      { name: "BUTTER CHICKEN / CHICKEN CHETTINAD", price: "350/360" },
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
      { name: "CHICKEN KUNDAPURI", price: "350" },
      { name: "MUTTON KUNDAPURI", price: "500" },
      { name: "PRAWN CURRY", price: "500" }
    ]
  },
  {
    id: "indian-breads",
    title: "INDIAN BREADS",
    items: [
      { name: "ROTI / BUTTER ROTI", price: "40/50" },
      { name: "NAAN / BUTTER NAAN", price: "50/60" },
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
      { name: "FRIED ICECREAM", price: "250" },
      { name: "HOT CHOCOLATE  FLAZED", price: "200" },
      { name: "GADBAD ICECREAM", price: "250" },
      { name: "BROWNIE ICECREAM", price: "250" },
      { name: "GAJAR KA HALWA", price: "110" },
      { name: "FRUIT SALAD WITH ICECREAM", price: "180" },
      { name: "DRY FRUIT WITH ICECREAM", price: "280" },
      { name: "GULAB JAMUN", price: "90" },
      { name: "GULAB JAMUN", price: "180" },
      { name: "GAJAR KA HALWA WITH ICECREAM", price: "190" },
      { name: "CHOICES OF MILKSHAKES", price: "180" },
      { name: "CHOICES OF FRESH FRUIT JUICES", price: "110" }
    ]
  }
];

const drinksMenuSections = [
  {
    id: "blended-scotch-whisky",
    title: "BLENDED SCOTCH WHISKY",
    // 30ml and 60ml prices as per new price list image
    items: [
      { name: "BLENDRS PRIDE 750ML", price_30ml: "100", price_60ml: "200" },
      { name: "CHIVAS REGEL 750ML 12Y", price_30ml: "400", price_60ml: "800" },
      { name: "BLACK LEBEL 750ML", price_30ml: "250", price_60ml: "480" },
      { name: "VAT 69 750ML", price_30ml: "150", price_60ml: "290" },
      { name: "BLACK DOG RESERVE 750ML", price_30ml: "150", price_60ml: "290" },        // 🆕 NEW (was BLACK DOG 8 YEARS)
      { name: "100 PIPERS 12 YERS 750ML", price_30ml: "220", price_60ml: "420" },
      { name: "100 PIPERS DELUX 750ML", price_30ml: "150", price_60ml: "290" },         // 🆕 NEW
      { name: "TEACHERS HIGH LAND CREAM 750ML", price_30ml: "150", price_60ml: "290" },
      { name: "BLACK & WHITE 750ML", price_30ml: "150", price_60ml: "290" },
      { name: "RED LEBEL 750ML", price_30ml: "180", price_60ml: "340" },
      { name: "BALLENTINES 750ML", price_30ml: "210", price_60ml: "410" },
      { name: "DEWARS WHITE LEBEL 750ML", price_30ml: "150", price_60ml: "290" },       // 🆕 NEW
      { name: "BLENDERS PRIDE RESERVE 750ML", price_30ml: "100", price_60ml: "180" },
      { name: "TEACHERS 50 750ML", price_30ml: "210", price_60ml: "400" },
      { name: "JAMESON IRISH 750ML", price_30ml: "180", price_60ml: "350" },
      { name: "BLACK DOG GOLD RESERVE 750ML", price_30ml: "220", price_60ml: "420" }    // 🆕 NEW
    ]
  },
  {
    id: "indian-whisky",
    title: "INDIAN WHISKY",
    items: [
      { name: "AMRUT FUSION 750ML", price_30ml: "220", price_60ml: "430" },
      { name: "AMRUT AMULGAM 750ML", price_30ml: "240", price_60ml: "470" }
    ]
  },
  {
    id: "brandy",
    title: "BRANDY",
    // 🆕 Both items are NEW — not in old PDF
    items: [
      { name: "MANSION HOUSE 750ML", price_30ml: "70", price_60ml: "120" },             // 🆕 NEW
      { name: "MORPHOUS XO PREMIUM 750ML", price_30ml: "110", price_60ml: "200" }       // 🆕 NEW
    ]
  },
  {
    id: "gin",
    title: "GIN",
    items: [
      { name: "BOMBAY SAPPHIRE 750ML", price_30ml: "220", price_60ml: "420" }
    ]
  },
  {
    id: "tequilla",
    title: "TEQUILLA",
    items: [
      { name: "CAMINO REAL 750ML", price_30ml: "220", price_60ml: "420" }
    ]
  },
  {
    id: "rum",
    title: "RUM",
    items: [
      { name: "OLD MONK XXX RUM 750ML", price_30ml: "60", price_60ml: "110" },
      { name: "CAPTAIN MORGAN 750ML", price_30ml: "60", price_60ml: "110" },
      { name: "OLD MONK LEGEND 750ML", price_30ml: "100", price_60ml: "180" },
      { name: "BACARDI WHITE RUM 750ML", price_30ml: "110", price_60ml: "210" },
      { name: "OLD MONK SUPREME 750ML", price_30ml: "80", price_60ml: "140" }
    ]
  },
  {
    id: "vodka",
    title: "VODKA",
    items: [
      { name: "SMIRN OFF ORANGE 750ML", price_30ml: "90", price_60ml: "160" },          // 🆕 NEW
      { name: "ABSOLUTE 750ML", price_30ml: "180", price_60ml: "340" },
      { name: "MAGIC MOMENT GRAIN 750ML", price_30ml: "80", price_60ml: "140" }         // 🆕 NEW
    ]
  },
  {
    id: "wine",
    title: "WINE",
    // Wine priced per 150ml glass — single flat price
    items: [
      { name: "FREATELLI 750ML", price_150ml: "120" },
      { name: "BIG BANYAN 750ML", price_150ml: "100" },
      { name: "NOI 750ML", price_150ml: "110" }                                          // 🆕 NEW
    ]
  },
  {
    id: "beers",
    title: "BEERS",
    // Beers — flat price per bottle, size stated in item name
    items: [
      { name: "K.F PRE 650ML", price: "170" },
      { name: "K.F STRONG 650ML", price: "270" },
      { name: "TUBORG GREEN 650ML", price: "220" },                                      // 🆕 NEW
      { name: "BUD PRE 650ML", price: "310" },
      { name: "K.F ULTRA 650ML", price: "230" },
      { name: "BUD MAG 650ML", price: "340" },
      { name: "ELEPHANT 650ML", price: "380" },
      { name: "TUBORG STRONG 650ML", price: "260" },
      { name: "HEOGARDEN 500ML CAN", price: "260" },
      { name: "K.F PRE 330ML", price: "90" },
      { name: "BUD PRE 330ML", price: "180" },
      { name: "CORONA 330ML", price: "200" },
      { name: "BUD MAG 330ML", price: "220" }
    ]
  },
  {
    id: "mocktails",
    title: "MOCKTAILS",
    // Single flat price per glass — no change
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
      { name: "RED BULL", price: "200" },
      { name: "FRESH LIME WATER", price: "90" },
      { name: "FRESH LIME SODA", price: "100" }
    ]
  }
];
type MenuType = "nonveg" | "drinks";

type MenuItem = {
  name: string;
  price?: string;
  price_30ml?: string;
  price_60ml?: string;
  price_150ml?: string;
};

type MenuSection = {
  id: string;
  title: string;
  items: MenuItem[];
};

const assets = {
  logo: "/logodark.png",
  hero: "/images/bardining.jpg",
  fallback: "/images/bardining.jpg",
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

const FALLBACK_IMAGE = "/images/bardining.jpg";

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

function hasTwoServingPrices(section: MenuSection) {
  return section.items.length > 0 && section.items.every((item) =>
    item.price_30ml && item.price_60ml && !item.price && !item.price_150ml
  );
}

function formatPrice(item: MenuItem, useServingColumns = false) {
  if (item.price_30ml || item.price_60ml) {
    if (useServingColumns) {
      return (
        <span className="drink-price drink-price--columns">
          <b>{item.price_30ml}</b>
          <b>{item.price_60ml}</b>
        </span>
      );
    }

    return (
      <span className="drink-price">
        {item.price_30ml && <b>30ml {item.price_30ml}</b>}
        {item.price_60ml && <b>60ml {item.price_60ml}</b>}
      </span>
    );
  }

  if (item.price_150ml) {
    return <strong>150ml {item.price_150ml}</strong>;
  }

  return <strong>{item.price}</strong>;
}

export default function NonVegMenuClient() {
  const [menuType, setMenuType] = useState<MenuType>("nonveg");
  const [activeId, setActiveId] = useState(nonVegMenuSections[0].id);
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
  const usesServingColumns = activeSection ? hasTwoServingPrices(activeSection) : false;

  useEffect(() => {
    const sections = (menuType === "nonveg" ? nonVegMenuSections : drinksMenuSections) as MenuSection[];
    setActiveId(sections[0].id);
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
                      <b>30ml</b>
                      <b>60ml</b>
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
          grid-template-columns: 38px 38px;
          gap: 6px;
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
