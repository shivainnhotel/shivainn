import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { isAdminAuthed } from "@/lib/admin-auth";

// PUT /api/menu/:id -> update name/price/category. Admin only.
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();
  const {
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

  const { data, error } = await supabaseAdmin
    .from("menu_items")
    .update({
      ...(section_id !== undefined && { section_id }),
      ...(section_title !== undefined && { section_title }),
      ...(name !== undefined && { name }),
      price: price ?? null,
      price_750ml: price_750ml ?? null,
      price_180ml: price_180ml ?? null,
      price_90ml: price_90ml ?? null,
      price_60ml: price_60ml ?? null,
      price_30ml: price_30ml ?? null,
      price_150ml: price_150ml ?? null,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ item: data });
}

// DELETE /api/menu/:id -> Admin only.
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const { error } = await supabaseAdmin.from("menu_items").delete().eq("id", id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
