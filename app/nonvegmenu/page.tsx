// REPLACES: app/nonvegmenu/page.tsx
import { supabaseAdmin } from "@/lib/supabase-admin";
import NonVegMenuClient from "./NonVegMenuClient";

export const revalidate = 60;

export const metadata = {
  title: "Non Veg & Drinks Menu | Hotel Shiva Inn",
  description: "Digital Non Veg and Drinks Menu for Hotel Shiva Inn.",
};

export default async function NonVegMenuPage() {
  const { data } = await supabaseAdmin
    .from("menu_items")
    .select(
      "menu_type, section_id, section_title, name, price, price_750ml, price_180ml, price_90ml, price_60ml, price_30ml, price_150ml"
    )
    .in("menu_type", ["nonveg", "drinks"])
    .order("section_id")
    .order("sort_order");

  const items = data ?? [];
  const nonvegItems = items.filter((i) => i.menu_type === "nonveg");
  const drinksItems = items.filter((i) => i.menu_type === "drinks");

  return <NonVegMenuClient nonvegItems={nonvegItems} drinksItems={drinksItems} />;
}
