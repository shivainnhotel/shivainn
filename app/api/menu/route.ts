import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin, MenuType } from "@/lib/supabase-admin";
import { isAdminAuthed } from "@/lib/admin-auth";

// GET /api/menu?menu_type=veg&search=paneer
// Public read (the live menu pages call this at build/request time).
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const menuType = searchParams.get("menu_type") as MenuType | null;
  const search = searchParams.get("search");

  let query = supabaseAdmin.from("menu_items").select("*").order("section_id").order("sort_order");

  if (menuType) query = query.eq("menu_type", menuType);
  if (search) query = query.ilike("name", `%${search}%`);

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ items: data });
}

// POST /api/menu  -> create a new item. Admin only.
export async function POST(req: NextRequest) {
  if (!(await isAdminAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const {
    menu_type,
    section_id,
    section_title,
    name,
    price,
    price_750ml,
    price_180ml,
    price_90ml,
    price_60ml,
    price_30ml,
    price_150ml,
  } = body;

  if (!menu_type || !section_id || !section_title || !name) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from("menu_items")
    .insert({
      menu_type,
      section_id,
      section_title,
      name,
      price: price || null,
      price_750ml: price_750ml || null,
      price_180ml: price_180ml || null,
      price_90ml: price_90ml || null,
      price_60ml: price_60ml || null,
      price_30ml: price_30ml || null,
      price_150ml: price_150ml || null,
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ item: data }, { status: 201 });
}
