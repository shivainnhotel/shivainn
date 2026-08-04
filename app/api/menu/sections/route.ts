import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin, MenuType } from "@/lib/supabase-admin";

// GET /api/menu/sections?menu_type=veg
// Returns the distinct { section_id, section_title } pairs already in use,
// so the admin form can offer a "pick existing category" dropdown.
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const menuType = searchParams.get("menu_type") as MenuType | null;

  let query = supabaseAdmin.from("menu_items").select("section_id, section_title");
  if (menuType) query = query.eq("menu_type", menuType);

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const seen = new Map<string, string>();
  for (const row of data ?? []) {
    if (!seen.has(row.section_id)) seen.set(row.section_id, row.section_title);
  }

  const sections = Array.from(seen, ([section_id, section_title]) => ({ section_id, section_title }));
  return NextResponse.json({ sections });
}
