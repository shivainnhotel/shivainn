// REPLACES: app/vegmenu/page.tsx
import { supabaseAdmin } from "@/lib/supabase-admin";
import VegMenuClient from "./VegMenuClient";

export const revalidate = 60; // re-fetch menu at most once a minute

export const metadata = {
  title: "Veg Menu | Hotel Shiva Inn",
  description: "Digital Vegetarian Menu for Hotel Shiva Inn.",
};

export default async function VegMenuPage() {
  const { data } = await supabaseAdmin
    .from("menu_items")
    .select("section_id, section_title, name, price")
    .eq("menu_type", "veg")
    .order("section_id")
    .order("sort_order");

  return <VegMenuClient items={data ?? []} />;
}
